import { AppDispatch, RootState } from "@/store/storeConfig";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
