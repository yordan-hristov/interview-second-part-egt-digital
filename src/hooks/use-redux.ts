import {
  TypedUseSelectorHook,
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
} from "react-redux";

import type { Dispatch, RootState } from "store";

export const useDispatch: () => Dispatch = useReduxDispatch;

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
