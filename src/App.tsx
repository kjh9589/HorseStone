import HSCard from "@components/card/HSCard";
import getRacehorseDetails, {
  ResponseRacehorseDetails,
} from "./network/api/getRacehorseDetails";
import { useQuery } from "react-query";
import { getHorseImage } from "./utils/horseUtils";

function App() {
  const { data, isLoading, isError } = useQuery<
    ResponseRacehorseDetails,
    Error
  >("racehorseDetails", () => getRacehorseDetails({ pageNo: 1 }), {
    refetchOnWindowFocus: false, // 기본적으로 windowFocust될 때마다 refetch함
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching racehorse details.</div>;
  }

  return (
    <HSCard
      cardType="DEFALT"
      imageUri={getHorseImage()}
      title="제목이에용"
      description="마나 수정을 2개 회복합니다. ㅁㅇㄴㄹㅇㄴㄹㄴㄹㄴㄹㅁㄹㅁㄴㄹasdfdasfsdfdsadfasdfasdfsafasfasfasfasfasfsfsafsasdfafasdfasf"
      rating="2"
    />
  );
}

export default App;
