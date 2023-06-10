import { sliceName } from "@/resources/strings";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ModalState {
  isOpened: boolean;
}

const initModalState: ModalState = {
  isOpened: false,
};

export const modalSlice = createSlice({
  name: sliceName.modal,
  initialState: initModalState,
  reducers: {
    setIsOpened: (state, action: PayloadAction<boolean>) => {
      state.isOpened = action.payload;
    },
  },
});

export const { setIsOpened } = modalSlice.actions;

export default modalSlice.reducer;
