import { NUM_OF_ROWS, RESPONSE_TYPE } from "@/resources/constants";
import apiKeys from "../apiKeys";
import { raceRecordInformationAxios } from "../networkConfig";

interface ResponseRaceRecordInformation {
  header: Header;
  body: Body;
}

interface Header {
  resultCode: string;
  resultMsg: string;
}

interface Body {
  items: Items;
  numOfRows: number;
  pageNo: number;
  totalCount: number;
}

interface Items {
  item: Item[];
}

interface Item {
  age: number;
  ageCond: string;
  budam: string;
  buga1: number;
  buga2: number;
  buga3: number;
  chaksun1: number;
  chaksun2: number;
  chaksun3: number;
  chaksun4: number;
  chaksun5: number;
  chulNo: number;
  diffUnit: any;
  g2f: number;
  g3f_4c: number;
  g4f_3c: number;
  g6f_2c: number;
  g8f_1c: number;
  hrName: string;
  hrNo: string;
  ilsu: number;
  jkName: string;
  jkNo: string;
  meet: string;
  name: string;
  ord: number;
  ordG1f: number;
  ordS1f: number;
  owName: string;
  owNo: any;
  plcOdds: number;
  prizeCond: string;
  rank: string;
  rating: number;
  rcDate: number;
  rcDay: string;
  rcDist: number;
  rcName: string;
  rcNo: number;
  rcTime: number;
  rcTimeG1f: number;
  rcTimeG2f: number;
  rcTimeG3f: number;
  rcTimeS1f: number;
  rcTime_1c: number;
  rcTime_2c: number;
  rcTime_3c: number;
  rcTime_400: number;
  rcTime_4c: number;
  sex: string;
  trName: string;
  trNo: string;
  track: string;
  weather: string;
  wgBudam: number;
  wgHr: string;
  winOdds: number;
}

interface RequestRaceRecordInformation {
  pageNo: number;
  meet?: string;
  rcDate?: string;
  rcMonth?: string;
  rcNo?: number;
  rcYear?: string;
}
const getRaceRecordInformation = async (
  params: RequestRaceRecordInformation
) => {
  const response = await raceRecordInformationAxios
    .get(`/raceResult_1`, {
      params: {
        ServiceKey: apiKeys.HORSE_CARE_INFORMATION,
        pageNo: params.pageNo,
        numOfRows: NUM_OF_ROWS,
        meet: params.meet,
        rc_date: params.rcDate,
        rc_month: params.rcMonth,
        rc_no: params.rcNo,
        rc_year: params.rcYear,
        _type: RESPONSE_TYPE,
      },
    })
    .then((response) => response.data.response);
  return response;
};

export default getRaceRecordInformation;
export type { ResponseRaceRecordInformation };
