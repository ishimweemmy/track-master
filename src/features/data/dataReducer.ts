import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserState } from "../../@types/UserState";
import { TableData } from "../../@types/Data";

const initialState: TableData[] = [];

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setTableData(state, action: PayloadAction<TableData[]>) {
      state = action.payload;
      localStorage.setItem("data", JSON.stringify(state));
    },
  },
});

export const { setTableData } = dataSlice.actions;
export default dataSlice.reducer;
