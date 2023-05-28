import { sliceName } from "@/resources/strings";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type ScreenType = "horse" | "horseman" | "trainer";

interface ScreenState {
  currentScreen: ScreenType;
}

const initScreenState: ScreenState = {
  currentScreen: "horse",
};

export const screenSlice = createSlice({
  name: sliceName.screen,
  initialState: initScreenState,
  reducers: {
    setCurrentScreen: (state, action: PayloadAction<ScreenType>) => {
      state.currentScreen = action.payload;
    },
  },
});

export const { setCurrentScreen } = screenSlice.actions;

export default screenSlice.reducer;
