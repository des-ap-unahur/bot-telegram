import BotSubsUsersInterface from "../../../Interfaces/BotSubsUsers.interface";

export interface GetBotSubsUsersProps {
    fetching: boolean;
    botSubsUsers: null | BotSubsUsersInterface[]
    total: number;
    sucess: boolean;
    getBotSubsUsersRequest: (requestOptions: any) => void;
}

export interface GetBotSubsUsersContentProps {
    botSubsUsers: null | BotSubsUsersInterface[];
    language: any;
    total:  number;
    handleChangePage: (page: number, pageSize: number) => Promise<void>;
    fetching: boolean;
} 