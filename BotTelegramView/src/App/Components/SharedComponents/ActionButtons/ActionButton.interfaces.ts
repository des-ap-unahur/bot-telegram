export interface ActionInterface {
  type: string;
  id: string;
  title: string;
  disabled?: (dataset:any) => boolean | boolean;
  icon: any;
  onClick: (dataset: any) => void;
}

export interface ActionButtonProps {
  actions: ActionInterface[];
  dataset: any;
}