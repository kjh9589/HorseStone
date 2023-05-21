import { NUM_OF_ROWS, RESPONSE_TYPE } from "@/resources/constants";
import apiKeys from "../apiKeys";
import { racehorsePerformanceInformationAxios } from "../networkConfig";
// API 문제 있음
interface RequestRacehorsePerformaceInformation {
  pageNo: number;
  hrName?: string;
  hrNo?: string;
}

const getRacehorsePerformanceInformation = async (
  params: RequestRacehorsePerformaceInformation
) => {
  const response = await racehorsePerformanceInformationAxios
    .get(`/receHorse_result2`, {
      params: {
        ServiceKey: apiKeys.HORSE_CARE_INFORMATION,
        pageNo: params.pageNo,
        numOfRows: NUM_OF_ROWS,
        hr_name: params.hrName,
        hr_no: params.hrNo,
        _type: RESPONSE_TYPE,
      },
    })
    .then((response) => response.data.response);
  return response;
};

export default getRacehorsePerformanceInformation;
