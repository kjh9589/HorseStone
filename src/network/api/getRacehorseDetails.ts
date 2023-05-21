import { NUM_OF_ROWS, RESPONSE_TYPE } from "@/resources/constants";
import apiKeys from "../apiKeys";
import { racehorseDetailsAxios } from "../networkConfig";

interface ResponseRacehorseDetails {
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
  birthday: number;
  chaksunT: number;
  faHrName: string;
  faHrNo: any;
  hrLastAmt: string;
  hrName: string;
  hrNo: any;
  meet: string;
  moHrName: string;
  moHrNo: any;
  name: string;
  ord1CntT: number;
  ord1CntY: number;
  ord2CntT: number;
  ord2CntY: number;
  ord3CntT: number;
  ord3CntY: number;
  owName: string;
  owNo: string;
  rank: string;
  rating: number;
  rcCntT: number;
  rcCntY: number;
  sex: string;
  trName: string;
  trNo: string;
}

interface RequestRacehorseDetails {
  pageNo: number;
  hrName?: string;
  hrNo?: string;
  meet?: string;
}

const getRacehorseDetails = async (params: RequestRacehorseDetails) => {
  const response = await racehorseDetailsAxios
    .get(`/raceHorseInfo_1`, {
      params: {
        ServiceKey: apiKeys.RACEHORSE_DETAILS,
        pageNo: params.pageNo,
        numOfRows: NUM_OF_ROWS,
        hr_name: params.hrName,
        hr_no: params.hrNo,
        meet: params.meet,
        _type: RESPONSE_TYPE,
      },
    })
    .then((response) => response.data.response);
  return response;
};

export default getRacehorseDetails;
export type { ResponseRacehorseDetails };
