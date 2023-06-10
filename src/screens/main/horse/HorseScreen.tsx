import getRacehorseDetails, {
  ResponseRacehorseDetails,
} from "@/network/api/getRacehorseDetails";
import { raceHorseDescription } from "@/resources/strings";
import ErrorScreen from "@/screens/error/ErrorScreen";
import LoadingScreen from "@/screens/loading/LoadingScreen";
import {
  getVisibleCardCount,
} from "@/utils/cardUtils";
import { getHorseImage } from "@/utils/horseUtils";
import HSCard from "@components/card/HSCard";
import { throttle } from "lodash";
import React, { useEffect, useState } from "react";
import { useInfiniteQuery, useQuery } from "react-query";
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
  align-items: start;
  justify-content: center;
`;

const HorseScreen = () => {
  const [visibleCardCount, setVisibleCardCount] = useState(
    getVisibleCardCount()
  );

  const {
    data,
    isSuccess,
    isLoading,
    isFetching,
    isError,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery<ResponseRacehorseDetails, Error>(
    "racehorseDetails",
    ({ pageParam = 1 }) => getRacehorseDetails({ pageNo: pageParam }),
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
      getNextPageParam: (lastPage, allPage) => {
        return lastPage.body.pageNo + 1;
      },
    }
  );

  const setOnResizeListener = throttle(() => {
    setVisibleCardCount(getVisibleCardCount());
  }, 300);

  useEffect(() => {
    window.addEventListener("resize", setOnResizeListener);
    return () => {
      window.removeEventListener("resize", setOnResizeListener);
    };
  }, []);

  const setOnScrollListener = throttle(async () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollY = window.scrollY;
    const innerHeight = window.innerHeight;

    if (!isFetching && (scrollY + innerHeight) * 1.3 >= scrollHeight) {
      if (hasNextPage) await fetchNextPage();
    }
  }, 300);

  useEffect(() => {
    window.addEventListener("scroll", setOnScrollListener);
    return () => {
      window.removeEventListener("scroll", setOnScrollListener);
    };
  }, [isFetching]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (isError) {
    return <ErrorScreen />;
  }

  return (
    <HorseScreenWrapper cardCount={visibleCardCount}>
      {isSuccess &&
        data.pages.map((page) =>
          page.body.items.item.map((item) => (
            <HSCard
              key={item.hrNo}
              cardType={"DEFALT"}
              imageUri={getHorseImage(item.hrNo)}
              title={item.hrName}
              description={[
                `${raceHorseDescription.country}${item.name}`,
                `${raceHorseDescription.birth}${item.birthday}`,
                `${raceHorseDescription.racePlace}${item.meet}`,
              ]}
              rating={`${item.rating}`}
            />
          ))
        )}
    </HorseScreenWrapper>
  );
};

export default HorseScreen;
