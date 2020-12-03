export interface TooltipProps {
  children: any;
  title: string;
  click: boolean; 
  setClick: (clicked: boolean) => void;
}