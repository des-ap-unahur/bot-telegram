export interface OptionInterface {
  id: number;
  name: string;
}

export interface InputsInterface {
  type: string;
  title: string;
  handleChange: (e: any) => void;
  value: string | null;
  name: string;
  list?: OptionInterface[] | null;  
  emptyFields?: null | string | number | boolean
  correction?: boolean;
}

export interface BuildInputsInterface {
  input: InputsInterface;
}
  