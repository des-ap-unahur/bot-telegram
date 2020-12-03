interface OptionInterface {
  id: number;
  name: string;
}

export interface SectionAddToTableProps {
  config: any;
  dataset: any;
  loader: boolean;
  title: string;
  handleChange: (e: any) => void;
  value: string | number | null;
  list: OptionInterface[] | null;
  disabled?: boolean;
}