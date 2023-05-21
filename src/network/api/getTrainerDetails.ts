import { NUM_OF_ROWS, RESPONSE_TYPE } from "@/resources/constants";
import apiKeys from "../apiKeys";
import { trainerDetailsAxios } from "../networkConfig";

interface ResponseTrainerDetails {
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
  age: string;
  birthday: string;
  meet: string;
  ord1CntT: number;
  ord1CntY: number;
  ord2CntT: number;
  ord2CntY: number;
  ord3CntT: number;
  ord3CntY: number;
  part: number;
  plcRateT: number;
  plcRateY: number;
  qnlRateT: number;
  qnlRateY: number;
  rcCntT: number;
  rcCntY: number;
  stDate: number;
  trName: string;
  trNo: string;
  winRateT: number;
  winRateY: number;
}

interface RequestTrainerDetails {
  pageNo: number;
  meet?: string;
  trName?: string;
  trNo?: string;
}

const getTrainerDetails = async (params: RequestTrainerDetails) => {
  const response = await trainerDetailsAxios
    .get(`/trainerInfo_1`, {
      params: {
        ServiceKey: apiKeys.TRAINER_DETAILS,
        pageNo: params.pageNo,
        numOfRows: NUM_OF_ROWS,
        meet: params.meet,
        tr_name: params.trName,
        tr_no: params.trNo,
        _type: RESPONSE_TYPE,
      },
    })
    .then((response) => response.data.response);
  return response;
};

export default getTrainerDetails;
export type { ResponseTrainerDetails };
