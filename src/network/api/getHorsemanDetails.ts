import { NUM_OF_ROWS, RESPONSE_TYPE } from "@/resources/constants";
import apiKeys from "../apiKeys";
import { horsmanDetailsAxios } from "../networkConfig";

interface ResponseHorseManDetails {
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
  birthday: number;
  debut: number;
  jkName: string;
  jkNo: string;
  meet: string;
  ord1CntT: number;
  ord1CntY: number;
  ord2CntT: number;
  ord2CntY: number;
  ord3CntT: number;
  ord3CntY: number;
  part: any;
  rcCntT: number;
  rcCntY: number;
  spDate: string;
  wgOther: number;
  wgPart: number;
}

interface RequestHorsemanDetails {
  pageNo: number;
  jkName?: string;
  jkNo?: string;
  meet?: string;
}

const getHorsemanDetails = async (params: RequestHorsemanDetails) => {
  const response = await horsmanDetailsAxios
    .get(`/jockeyInfo_1`, {
      params: {
        ServiceKey: apiKeys.HORSE_CARE_INFORMATION,
        pageNo: params.pageNo,
        numOfRows: NUM_OF_ROWS,
        jk_name: params.jkName,
        jk_no: params.jkNo,
        meet: params.meet,
        _type: RESPONSE_TYPE,
      },
    })
    .then((response) => response.data.response);
  return response;
};

export default getHorsemanDetails;
export type { ResponseHorseManDetails };
