import { configureStore } from "@reduxjs/toolkit";
import screenReducer from "@/store/ScreenSlice";

const store = configureStore({
  reducer: {
    screen: screenReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
