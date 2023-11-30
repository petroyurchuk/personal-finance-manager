import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GenerateInitialStateTypes } from "../../@types/generate";

const initialState: GenerateInitialStateTypes = {
  dateFrom: new Date().toISOString().split("T")[0],
  dateTo: new Date().toISOString().split("T")[0],
  operationType: "",
  category: "",
  generatedData: [],
};

const GenerateSlice = createSlice({
  name: "generate",
  initialState,
  reducers: {
    setDateFrom(state, action: PayloadAction<string>) {
      state.dateFrom = action.payload;
    },
    setDateTo(state, action: PayloadAction<string>) {
      state.dateTo = action.payload;
    },
    setOperationType(state, action: PayloadAction<string>) {
      state.operationType = action.payload;
    },
    setCategory(state, action: PayloadAction<string>) {
      state.category = action.payload;
    },
    setGeneratedData(
      state,
      action: PayloadAction<
        Omit<GenerateInitialStateTypes & { id: number }, "generatedData">
      >
    ) {
      if (state.generatedData.length > 0) {
        const lastCategory =
          state.generatedData[state.generatedData.length - 1];
        action.payload.id = lastCategory.id + 1;
      } else {
        action.payload.id = 1;
      }
      state.generatedData.push(action.payload);
    },
  },
});

export const {
  setDateFrom,
  setDateTo,
  setOperationType,
  setCategory,
  setGeneratedData,
} = GenerateSlice.actions;
export default GenerateSlice.reducer;
