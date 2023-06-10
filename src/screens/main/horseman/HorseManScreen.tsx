import getHorsemanDetails, { ResponseHorseManDetails } from "@/network/api/getHorsemanDetails";
import { horseManDescription } from "@/resources/strings";
import ErrorScreen from "@/screens/error/ErrorScreen";
import LoadingScreen from "@/screens/loading/LoadingScreen";
import { getVisibleCardCount } from "@/utils/cardUtils";
import { getHorseManImage } from "@/utils/horseManUtils";
import HSCard from "@components/card/HSCard";
import { throttle } from "lodash";
import React, { useEffect, useState } from "react";
import { useInfiniteQuery } from "react-query";
import { styled } from "styled-components";

interface HorseManScreenWrapperProps {
  cardCount: number;
}

const HorseManScreenWrapper = styled.div<HorseManScreenWrapperProps>`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(${(props) => props.cardCount}, 240px);
  gap: 10px;
  align-items: start;
  justify-content: center;
`;

const HorseManScreen = () => {
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
  } = useInfiniteQuery<ResponseHorseManDetails, Error>(
    "horsemanDetails",
    ({ pageParam = 1 }) => getHorsemanDetails({ pageNo: pageParam }),
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
    <HorseManScreenWrapper cardCount={visibleCardCount}>
      {isSuccess &&
        data.pages.map((page) =>
          page.body.items.item.map((item) => (
            <HSCard
              key={item.jkNo}
              cardType={"DEFALT"}
              imageUri={getHorseManImage(item.debut)}
              title={item.jkName}
              description={[
                `${horseManDescription.age}${item.age ? item.age : "???"}`,
                `${horseManDescription.debut}${item.debut}`,
                `${horseManDescription.racePlace}${item.meet}`,
              ]}
              rating={``}
            />
          ))
        )}
    </HorseManScreenWrapper>
  );
};

export default HorseManScreen;
