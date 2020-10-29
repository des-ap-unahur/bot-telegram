export interface OptionInterface {
  name: string;
  value: string;
}

export interface SelectProps {
  title?: string | null;
  listOptions: OptionInterface[];
  handleChange: (e:any) => void; 
  value: string;
}