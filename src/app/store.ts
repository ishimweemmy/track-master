import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userReducer";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { userApiSlice } from "../services/user-api-slice";
import dataReducer from "../features/data/dataReducer";
import { dataApiSlice } from "../services/data-api-slice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    data: dataReducer,
    [userApiSlice.reducerPath]: userApiSlice.reducer,
    [dataApiSlice.reducerPath]: dataApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    })
      .concat(userApiSlice.middleware)
      .concat(dataApiSlice.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
setupListeners(store.dispatch);
