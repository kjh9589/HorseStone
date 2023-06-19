import { sliceName } from "@/resources/strings";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface DetailInfoState {
  no: number;
  type: "horse" | "horseman";
  page: number;
}

const initDetailState: DetailInfoState = {
  no: 0,
  type: "horse",
  page: 1,
};

export const cardDetailModalSlice = createSlice({
  name: sliceName.modalDetail,
  initialState: initDetailState,
  reducers: {
    setDetailInfo: (_, action: PayloadAction<DetailInfoState>) => {
      /*
      따라서 Redux Toolkit의 createSlice에서 생성한 리듀서에서는 상태 객체의 개별 속성을 수정하는 것이 가장 적합한 방법입니다.
      이렇게 하면 Redux Toolkit이 변경 사항을 적절하게 처리하고 새로운 상태를 생성합니다.
      만약 상태 객체를 통째로 바꾸려면 리듀서에서 새로운 상태 객체를 반환해야 합니다.
      */
      return action.payload;
    },
  },
});

export const { setDetailInfo } = cardDetailModalSlice.actions;

export default cardDetailModalSlice.reducer;
