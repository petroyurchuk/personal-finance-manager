export interface TableColumn<T> {
  label: string;
  field: keyof T;
}
