import { useEffect } from "react";
import getRacehorseDetails, { ResponseRacehorseDetails } from "./network/api/getRacehorseDetails";

function App() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const params = {
          pageNo: 1,
          // 다른 필요한 매개변수 추가
        };
        const response: ResponseRacehorseDetails = await getRacehorseDetails(params);
        console.log(response.body.items.item);
        // 데이터 처리 로직 추가
      } catch (error) {
        console.error(error);
        // 에러 처리 로직 추가
      }
    };

    fetchData();
  }, []);
  return <div></div>;
}

export default App;
