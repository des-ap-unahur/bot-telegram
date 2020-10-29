import UserTypesInterface from "../../../Interfaces/UserTypes.interface";

export interface GetUserTypesProps {
  fetching: boolean;
  userTypes: null | UserTypesInterface[];
  getUserTypesRequest: (requestOptions:any) => void;
}


export interface GetUserTypesContentProps {
  userTypes: null | UserTypesInterface[];
  language: any;
  fetching: boolean;
}
