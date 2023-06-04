import getRacehorseDetails, {
  ResponseRacehorseDetails,
} from "@/network/api/getRacehorseDetails";
import { raceHorseDescription } from "@/resources/strings";
import ErrorScreen from "@/screens/error/ErrorScreen";
import LoadingScreen from "@/screens/loading/LoadingScreen";
import { getRaceHorseDescription, getVisibleCardCount } from "@/utils/cardUtils";
import { getHorseImage } from "@/utils/horseUtils";
import HSCard from "@components/card/HSCard";
import { throttle } from "lodash";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { styled } from "styled-components";

interface HorseScreenWrapperProps {
  cardCount: number;
}

const HorseScreenWrapper = styled.div<HorseScreenWrapperProps>`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(${(props) => props.cardCount}, 240px);
  gap: 10px;
  margin: 4px;
  align-items: start;
  justify-content: center;
`;

const HorseScreen = () => {
  const [visibleCardCount, setVisibleCardCount] = useState(
    getVisibleCardCount()
  );
  let pageNum = 1;
  const { data, isLoading, isError } = useQuery<
    ResponseRacehorseDetails,
    Error
  >("racehorseDetails", () => getRacehorseDetails({ pageNo: pageNum }), {
    keepPreviousData: true,
    refetchOnWindowFocus: false,
  });

  const setOnResizeListener = throttle(() => {
    setVisibleCardCount(getVisibleCardCount());
  }, 300);

  const generateHSCard = () => {
    const cardList: Array<React.ReactNode> = [];
    if (data) {
      data.body.items.item.forEach((value, index) => {
        cardList.push(
          <HSCard
            key={index}
            cardType={"DEFALT"}
            imageUri={getHorseImage()}
            title={value.hrName}
            description={[`${raceHorseDescription.country}${value.name}`, `${raceHorseDescription.birth}${value.birthday}`, `${raceHorseDescription.racePlace}${value.meet}`]}
            rating={`${value.rating}`}
          />
        );
      });
      return cardList;
    }
  };

  useEffect(() => {
    window.addEventListener("resize", setOnResizeListener);
    return () => {
      window.removeEventListener("resize", setOnResizeListener);
    };
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (isError) {
    return <ErrorScreen />;
  }

  return (
    <HorseScreenWrapper cardCount={visibleCardCount}>
      {generateHSCard()}
    </HorseScreenWrapper>
  );
};

export default HorseScreen;
