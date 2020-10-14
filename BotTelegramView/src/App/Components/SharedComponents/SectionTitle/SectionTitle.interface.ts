export interface SectionTitleInterface {
  titleLabel:string;
  correctionLabel?: boolean; 
  action?: (event?: any) => void;
}