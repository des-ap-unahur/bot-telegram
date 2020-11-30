import UserTypes from "./UserTypes.interface";

interface BotSubsUsers {
    user_id: number;
    dni: number;
    first_name: string;
    last_name: string;
    date_suscribe: Date;
    userType?: UserTypes[];
    verified: boolean;
}

export default BotSubsUsers;