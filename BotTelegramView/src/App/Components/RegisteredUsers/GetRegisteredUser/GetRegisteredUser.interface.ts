import RegisteredUserInterface from "../../../Interfaces/RegisteredUser.interface";

export interface GetRegisteredUserProps {
    fetching: boolean;
    usersSelected: null | []
    total: number;
    sucess: boolean;
    clearRegisteredUserStates: () => void;
    deleteRegisteredUserRequest: (requestOptions: any) => void;
    getRegisteredUsersRequest: (requestOptions: any) => void;
}

export interface GetRegisteredUserContentProps {
    users: null | RegisteredUserInterface[];
    language: any;
    total: number
    handleChangePage: (page: number, pageSize: number) => Promise<void>;
    handleDeleteRegisteredUser: (id: number) => Promise<void>;
    fetching: boolean;
}