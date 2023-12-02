import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GenerateInitialStateTypes } from "../../@types/generate";
import { ActionType } from "./types";

const startDate: ActionType = JSON.parse(
  localStorage.getItem("startDate") || ""
);
const endDate: ActionType = JSON.parse(localStorage.getItem("endDate") || "");
const operationType: ActionType = JSON.parse(
  localStorage.getItem("operationType") || ""
);
const category: ActionType = JSON.parse(localStorage.getItem("category") || "");

const initialState: GenerateInitialStateTypes = {
  dateFrom: startDate.key,
  dateTo: endDate.key,
  operationType: operationType.key,
  category: category.key,
};

const GenerateSlice = createSlice({
  name: "generate",
  initialState,
  reducers: {
    setDateFrom(state, action: PayloadAction<ActionType>) {
      state.dateFrom = action.payload.key;
      localStorage.setItem("startDate", JSON.stringify(action.payload));
    },
    setDateTo(state, action: PayloadAction<ActionType>) {
      state.dateTo = action.payload.key;
      localStorage.setItem("endDate", JSON.stringify(action.payload));
    },
    setOperationType(state, action: PayloadAction<ActionType>) {
      state.operationType = action.payload.key;
      localStorage.setItem("operationType", JSON.stringify(action.payload));
    },
    setCategory(state, action: PayloadAction<ActionType>) {
      state.category = action.payload.key;
      localStorage.setItem("category", JSON.stringify(action.payload));
    },
  },
});

export const { setDateFrom, setDateTo, setOperationType, setCategory } =
  GenerateSlice.actions;
export default GenerateSlice.reducer;
