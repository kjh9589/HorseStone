import { useAppSelector } from "@/hooks/storeHooks";
import getRacehorseDetails, {
  ResponseRacehorseDetails,
} from "@/network/api/getRacehorseDetails";
import colors from "@/resources/colors";
import { iconFiles } from "@/resources/constants";
import { raceHorseDescription } from "@/resources/strings";
import ErrorScreen from "@/screens/error/ErrorScreen";
import LoadingScreen from "@/screens/loading/LoadingScreen";
import { setDetailInfo } from "@/store/cardDetailSlice";
import store from "@/store/storeConfig";
import { getHorseImage } from "@/utils/horseUtils";
import HSCard from "@components/card/HSCard";
import HSImage from "@components/common/HSImage";
import HSText from "@components/common/HSText";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { styled } from "styled-components";

interface HorseDetailType {
  faHrName: string;
  faHrNo: any;
  moHrName: string;
  moHrNo: any;
  owName: string;
  owNo: string;
  rank: string;
  sex: string;
  trName: string;
  trNo: string;
  hrNo: any;
  hrName: string;
  birthday: number;
  name: string;
  meet: string;
  rating: number;
}

const HosreDetailWrapper = styled.div`
  position: relative;
  width: 85vw;
  height: 80vh;
  padding: 10px;
  border-radius: 10px;
  background-color: ${colors.white};
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

const HosreDetail = () => {
  const raceHorseDetailInfo = useAppSelector((state) => state.modalDetail);
  const [currentHSCard, setCurrentHSCard] = useState<HorseDetailType>();
  const [currentIdx, setCurrentIdx] = useState(0);

  const horseQuery = useQuery<ResponseRacehorseDetails, Error>(
    "raceHorseDetailModal",
    () =>
      getRacehorseDetails({
        pageNo: raceHorseDetailInfo.page,
      }),
    {
      refetchOnWindowFocus: false,
      keepPreviousData: true,
      refetchOnMount: false,
    }
  );

  useEffect(() => {
    horseQuery.refetch();
  }, [raceHorseDetailInfo.page]);

  useEffect(() => {
    if (horseQuery.isSuccess) {
      if (raceHorseDetailInfo.no === Number.MAX_SAFE_INTEGER) {
        setCurrentIdx(0);
        setCurrentHSCard(horseQuery.data.body.items.item[0]);
      } else if (raceHorseDetailInfo.no === Number.MIN_SAFE_INTEGER) {
        setCurrentIdx(20);
        setCurrentHSCard(horseQuery.data.body.items.item[20]);
      }
      const foundHorse = horseQuery.data.body.items.item.find(
        (item) => item.hrNo === raceHorseDetailInfo.no
      );

      if (foundHorse) {
        setCurrentIdx(horseQuery.data.body.items.item.indexOf(foundHorse));
        setCurrentHSCard(foundHorse);
      }
    }
  }, [horseQuery.isSuccess, horseQuery.data]);

  const setOnPrevClickListener = () => {
    if (currentIdx === 0) {
      store.dispatch(
        setDetailInfo({
          no: Number.MIN_SAFE_INTEGER,
          type: "horse",
          page: raceHorseDetailInfo.page - 1,
        })
      );
    }
    setCurrentIdx(currentIdx - 1);
    setCurrentHSCard(horseQuery.data?.body.items.item[currentIdx - 1]);
  };

  const setOnNextClickListener = () => {
    if (currentIdx === 20) {
      store.dispatch(
        setDetailInfo({
          no: Number.MAX_SAFE_INTEGER,
          type: "horse",
          page: raceHorseDetailInfo.page + 1,
        })
      );
    }
    setCurrentIdx(currentIdx + 1);
    setCurrentHSCard(horseQuery.data?.body.items.item[currentIdx + 1]);
  };

  if (horseQuery.isLoading) {
    return <LoadingScreen />;
  }

  if (horseQuery.isError) {
    return <ErrorScreen />;
  }

  if (horseQuery.isFetching) {
    return <LoadingScreen />;
  }

  return (
    <HosreDetailWrapper>
      {raceHorseDetailInfo.page === 1 && currentIdx === 0 ? (
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
            imageUri={getHorseImage(currentHSCard?.hrNo)}
            title={
              currentHSCard?.hrName !== undefined ? currentHSCard.hrName : ""
            }
            description={[
              `${raceHorseDescription.country}${currentHSCard?.name}`,
              `${raceHorseDescription.birth}${currentHSCard?.birthday}`,
              `${raceHorseDescription.racePlace}${currentHSCard?.meet}`,
            ]}
            rating={`${currentHSCard?.rating}`}
          />
          <DetailInfoDiv>
            <HSText textSize="18px">
              부 : {currentHSCard.faHrName} ({currentHSCard.faHrNo})
            </HSText>
            <HSText textSize="18px">
              모 : {currentHSCard.moHrName} ({currentHSCard.moHrNo})
            </HSText>
            <HSText textSize="18px">
              오너 : {currentHSCard.owName} ({currentHSCard.owNo})
            </HSText>
            <HSText textSize="18px">
              트레이너 : {currentHSCard.trName} ({currentHSCard.trNo})
            </HSText>
            <HSText textSize="18px">성별: {currentHSCard.sex}</HSText>
          </DetailInfoDiv>
        </ContentDiv>
      )}
    </HosreDetailWrapper>
  );
};

export default HosreDetail;
