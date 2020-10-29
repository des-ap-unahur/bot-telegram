import RegisteredUserInterface from "../../../Interfaces/RegisteredUser.interface";

export interface GetRegisteredUserProps {
    fetching: boolean;
    registeredUser: null | RegisteredUserInterface[]
    total: number;
    sucess: boolean;
    getRegisteredUsersRequest: (requestOptions: any) => void;
}

export interface GetRegisteredUserContentProps {
    registeredUser: null | RegisteredUserInterface[];
    language: any;
    total:  number;
 
    handleChangePage: (page: number, pageSize: number) => Promise<void>;
    fetching: boolean;
} 