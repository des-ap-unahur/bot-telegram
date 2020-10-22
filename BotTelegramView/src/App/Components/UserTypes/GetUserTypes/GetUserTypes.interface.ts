import UserTypesInterface from "../../../Interfaces/UserTypes.interface";

export interface GetUserTypesProps {
  fetching: boolean;
  userTypes: null | UserTypesInterface[];
  total: number;
  sucess: boolean;
  clearUserTypesStates: () => void;
  deleteUserTypesRequest: (requestOptions: any) => void;
  getUserTypesRequest: () => void;
}


export interface GetUserTypesContentProps {
  userTypes: null | UserTypesInterface[];
  language: any;
  total: number;
  handleChangePage: (page: number, pageSize: number) => Promise<void>;
  handleDeleteUserType: (id: number) => Promise<void>;
  fetching: boolean;
}
