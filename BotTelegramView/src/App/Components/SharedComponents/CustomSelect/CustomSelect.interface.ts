export interface OptionInterface {
  id: number;
  name: string;
}

export interface CustomSelectProps {
  title: string;
  handleChange: (e: any) => void;
  value: string | number | null;
  name: string;
  emptyFields?: null | string | number | boolean
  list?: OptionInterface[] | null;
  correction?: boolean;
}