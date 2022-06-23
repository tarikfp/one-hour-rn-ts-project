import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import type { ReduxRootState, AppDispatch } from "./store";

export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<ReduxRootState> = useSelector;
