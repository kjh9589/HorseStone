import { configureStore } from "@reduxjs/toolkit";
import screenReducer from "@/store/screenSlice";
import modalReducer from "@/store/modalSlice";

const store = configureStore({
  reducer: {
    screen: screenReducer,
    modal: modalReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
