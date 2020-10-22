export interface OptionInterface {
  id: number;
  name: string;
}

export interface CustomSelectProps {
  title: string;
  handleChange: (e: any) => void;
  value: OptionInterface;
  emptyFields?: null | string | number
  list: OptionInterface[];
}