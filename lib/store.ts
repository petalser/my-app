import type { Action, ThunkAction } from "@reduxjs/toolkit";
import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { themeSlice } from "./features/theme/themeSlice";
import { timeRangeSlice } from "./features/timeRange/timeRangeSlice";
import { horoscopeSignsSlice } from "./features/horoscopeSigns/horoscopeSignsSlice";
import { horoscopeDataSlice } from "./features/data/dataSlice";
import { catFactApi } from "./services/catFactAPI";

const rootReducer = combineSlices(
  themeSlice,
  timeRangeSlice,
  horoscopeSignsSlice,
  horoscopeDataSlice,
  catFactApi);

export type RootState = ReturnType<typeof rootReducer>;

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(catFactApi.middleware),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>;