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
    <div>
      {data && data.body.items.item.map((racehorse) => (
        <div key={racehorse.hrNo}>{racehorse.name}</div>
      ))}
    </div>
  );
}

export default App;
