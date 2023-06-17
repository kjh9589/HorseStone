import { configureStore } from "@reduxjs/toolkit";
import screenReducer from "@/store/screenSlice";
import modalReducer from "@/store/modalSlice";
import cardDetailReducer from "@/store/cardDetailSlice";

const store = configureStore({
  reducer: {
    screen: screenReducer,
    modal: modalReducer,
    modalDetail: cardDetailReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
