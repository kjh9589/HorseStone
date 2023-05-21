import { NUM_OF_ROWS, RESPONSE_TYPE } from "@/resources/constants";
import apiKeys from "../apiKeys";
import { horseCareInformationAxios } from "../networkConfig";

interface ResponseHorseCareInformation {
  header: Header;
  body: Body;
}

interface Header {
  resultCode: string;
  resultMsg: string;
}

interface Body {
  items: Items;
  numOfRows: string;
  pageNo: string;
  totalCount: string;
}

interface Items {
  item: Item[];
}

interface Item {
  meet: string;
  hrName: string;
  hrNo: string;
  name: string;
  sex: string;
  birthday: string;
  rank: string;
  trName: string;
  trNo: string;
  owName: string;
  owNo: string;
  faHrName: string;
  faHrNo: string;
  moHrName: string;
  moHrNo: string;
  rcCntT: string;
  ord1CntT: string;
  ord2CntT: string;
  ord3CntT: string;
  rcCntY: string;
  ord1CntY: string;
  ord2CntY: string;
  ord3CntY: string;
  chaksunT: string;
  rating: string;
  hrLastAmt: string;
}

interface RequestHorseCareInformation {
  pageNo: number;
  hrName?: string;
  hrNo?: string;
  meet?: string;
}

const getHorseCareInformation = async (params: RequestHorseCareInformation) => {
  const response = await horseCareInformationAxios
    .get(`/raceHorseClinic_1`, {
      params: {
        ServiceKey: apiKeys.HORSE_CARE_INFORMATION,
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

export default getHorseCareInformation;
export type { ResponseHorseCareInformation };
