export interface OptionInterface {
  id: number;
  name: string;
}

export interface CustomInputProps {
  title: string;
  handleChange: (e: any) => void;
  value: string | null;
  name: string;
  emptyFields?: null | string | number | boolean
  correction?: boolean;
}