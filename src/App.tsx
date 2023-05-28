import getRacehorseDetails, {
  ResponseRacehorseDetails,
} from "./network/api/getRacehorseDetails";
import { useQuery } from "react-query";
import Router from "./router/Router";

function App() {
  // const { data, isLoading, isError } = useQuery<
  //   ResponseRacehorseDetails,
  //   Error
  // >("racehorseDetails", () => getRacehorseDetails({ pageNo: 1 }), {
  //   refetchOnWindowFocus: false, // 기본적으로 windowFocust될 때마다 refetch함
  // });

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  // if (isError) {
  //   return <div>Error occurred while fetching racehorse details.</div>;
  // }

  // return (
    
  // );
  return <Router />
}

export default App;
