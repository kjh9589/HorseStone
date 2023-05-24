import HSCard from "@components/card/HSCard";
import getRacehorseDetails, { ResponseRacehorseDetails } from "./network/api/getRacehorseDetails";
import { useQuery } from "react-query";

function App() {

  const { data, isLoading, isError } = useQuery<ResponseRacehorseDetails, Error>(
    'racehorseDetails',
    () => getRacehorseDetails({ pageNo: 1 }),
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching racehorse details.</div>;
  }

  return (
    <HSCard/>
  );
}

export default App;
