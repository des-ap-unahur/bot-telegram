import BotSubsUsersInterface from "../../../Interfaces/BotSubsUsers.interface";
import UserTypes from "../../../Interfaces/UserTypes.interface";

export interface GetBotSubsUsersProps {
    fetching: boolean;
    botSubsUsers: null | BotSubsUsersInterface[]
    userTypes: null | UserTypes[];
    total: number;
    sucess: boolean;
    getBotSubsUsersRequest: (requestOptions: any) => void;
    getUserTypesRequest: (requestOptions:any) => void;
}

export interface GetBotSubsUsersContentProps {
    botSubsUsers: null | BotSubsUsersInterface[];
    language: any;
    total:  number;
    userTypes: null | UserTypes[];
    handleChangePage: (page: number, pageSize: number) => Promise<void>;
    fetching: boolean;
} 