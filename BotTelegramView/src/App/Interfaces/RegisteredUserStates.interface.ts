import RegisteredUserInterface from "./RegisteredUser.interface";

export interface RegisteredUserStateInterface {
    fetchingStatus: boolean;
    failed: boolean;
    sucess: boolean;
    registeredUser: null | RegisteredUserInterface[];
    total: number;
    statusCode: string | number;
    errorsCodes: string;
    errorMessage: string;

}
