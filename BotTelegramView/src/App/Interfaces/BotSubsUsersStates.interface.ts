import BotSubsUsersInterface from "./BotSubsUsers.interface";

export interface BotSubsUsersStateInterface {
    fetchingStatus: boolean;
    failed: boolean;
    sucess: boolean;
    botSubsUsers: null | BotSubsUsersInterface[];
    total: number;
    statusCode: string | number;
    errorsCodes: string;
    errorMessage: string;
}
