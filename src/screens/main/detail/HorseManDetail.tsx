import { useAppSelector } from "@/hooks/storeHooks";
import colors from "@/resources/colors";
import { iconFiles } from "@/resources/constants";
import HSCard from "@components/card/HSCard";
import HSImage from "@components/common/HSImage";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { styled } from "styled-components";
import getHorsemanDetails, {
  ResponseHorseManDetails,
} from "@/network/api/getHorsemanDetails";
import store from "@/store/storeConfig";
import { setDetailInfo } from "@/store/cardDetailSlice";
import ErrorScreen from "@/screens/error/ErrorScreen";
import LoadingScreen from "@/screens/loading/LoadingScreen";
import { getHorseManImage } from "@/utils/horseManUtils";
import { horseManDescription } from "@/resources/strings";
import HSText from "@components/common/HSText";

interface HorseManDetailType {
  age: number;
  birthday: number;
  debut: number;
  jkName: string;
  jkNo: string;
  meet: string;
  part: any;
  spDate: string;
  wgOther: number;
  wgPart: number;
  rcCntT: number;
  rcCntY: number;
}

const HorseManDetailWrapper = styled.div`
  position: relative;
  width: 85vw;
  height: 80vh;
  padding: 10px;
  border-radius: 10px;
  background-color: ${colors.white};
`;
const PrevButton = styled(HSImage)`
  position: absolute;
  top: 50%;
  left: 4px;
  cursor: pointer;
`;

const NextButton = styled(HSImage)`
  position: absolute;
  top: 50%;
  right: 4px;
  cursor: pointer;
`;

const ContentDiv = styled.div`
  display: flex;
  height: 100%;
  width: 90%;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  align-items: center;
  justify-content: center;
`;

const DetailInfoDiv = styled.div`
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const HorseManDetail = () => {
  const horseManDetailInfo = useAppSelector((state) => state.modalDetail);
  const [currentHSCard, setCurrentHSCard] = useState<HorseManDetailType>();
  const [currentIdx, setCurrentIdx] = useState(0);

  const horseManQuery = useQuery<ResponseHorseManDetails, Error>(
    "horsemanDetailModal",
    () =>
      getHorsemanDetails({
        pageNo: horseManDetailInfo.page,
      }),
    {
      refetchOnWindowFocus: false,
      keepPreviousData: true,
      refetchOnMount: false,
    }
  );

  useEffect(() => {
    horseManQuery.refetch();
  }, [horseManDetailInfo.page]);

  useEffect(() => {
    if (horseManQuery.isSuccess) {
      if (horseManDetailInfo.no === Number.MAX_SAFE_INTEGER) {
        setCurrentIdx(0);
        setCurrentHSCard(horseManQuery.data.body.items.item[0]);
      } else if (horseManDetailInfo.no === Number.MIN_SAFE_INTEGER) {
        setCurrentIdx(20);
        setCurrentHSCard(horseManQuery.data.body.items.item[20]);
      }
      const foundHorse = horseManQuery.data.body.items.item.find(
        (item) => Number(item.jkNo) === horseManDetailInfo.no
      );

      if (foundHorse) {
        setCurrentIdx(horseManQuery.data.body.items.item.indexOf(foundHorse));
        setCurrentHSCard(foundHorse);
      }
    }
  }, [horseManQuery.isSuccess, horseManQuery.data]);

  const setOnPrevClickListener = () => {
    if (currentIdx === 0) {
      store.dispatch(
        setDetailInfo({
          no: Number.MIN_SAFE_INTEGER,
          type: "horseman",
          page: horseManDetailInfo.page - 1,
        })
      );
    }
    setCurrentIdx(currentIdx - 1);
    setCurrentHSCard(horseManQuery.data?.body.items.item[currentIdx - 1]);
  };

  const setOnNextClickListener = () => {
    if (currentIdx === 20) {
      store.dispatch(
        setDetailInfo({
          no: Number.MAX_SAFE_INTEGER,
          type: "horseman",
          page: horseManDetailInfo.page + 1,
        })
      );
    }
    setCurrentIdx(currentIdx + 1);
    setCurrentHSCard(horseManQuery.data?.body.items.item[currentIdx + 1]);
  };

  if (horseManQuery.isLoading) {
    return <LoadingScreen />;
  }

  if (horseManQuery.isError) {
    return <ErrorScreen />;
  }

  if (horseManQuery.isFetching) {
    return <LoadingScreen />;
  }

  return (
    <HorseManDetailWrapper>
      {horseManDetailInfo.page === 1 && currentIdx === 0 ? (
        ""
      ) : (
        <PrevButton
          imageSize={["40px", "40px"]}
          src={iconFiles.arrowLeft}
          onClick={setOnPrevClickListener}
        />
      )}
      <NextButton
        imageSize={["40px", "40px"]}
        src={iconFiles.arrowRight}
        onClick={setOnNextClickListener}
      />
      {currentHSCard && (
        <ContentDiv>
          <HSCard
            cardType={"LARGE"}
            imageUri={getHorseManImage(currentHSCard?.debut)}
            title={
              currentHSCard?.jkName !== undefined ? currentHSCard.jkName : ""
            }
            description={[
              `${horseManDescription.age}${
                currentHSCard.age ? currentHSCard.age : "???"
              }`,
              `${horseManDescription.debut}${currentHSCard?.birthday}`,
              `${horseManDescription.racePlace}${currentHSCard?.meet}`,
            ]}
            rating={``}
          />
          <DetailInfoDiv>
            <HSText textSize="18px">소속조 : {currentHSCard.part}</HSText>
            <HSText textSize="18px">
              통산총출주횟수 : {currentHSCard.rcCntT}
            </HSText>
            <HSText textSize="18px">은퇴일자 : {currentHSCard.spDate}</HSText>
            <HSText textSize="18px">
              기능가능중량_소속조 : {currentHSCard.wgOther}
            </HSText>
            <HSText textSize="18px">
              기능가능중량_타조: {currentHSCard.wgPart}
            </HSText>
            <HSText textSize="18px">
              최근1년총출주횟수: {currentHSCard.rcCntY}
            </HSText>
          </DetailInfoDiv>
        </ContentDiv>
      )}
    </HorseManDetailWrapper>
  );
};

export default HorseManDetail;
