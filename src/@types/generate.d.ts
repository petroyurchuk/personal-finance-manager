export interface GenerateInitialStateTypes {
  dateFrom: string;
  dateTo: string;
  operationType: string;
  category: string;
  generatedData: Omit<
    GenerateInitialStateTypes & { id: number },
    "generatedData"
  >[];
}
