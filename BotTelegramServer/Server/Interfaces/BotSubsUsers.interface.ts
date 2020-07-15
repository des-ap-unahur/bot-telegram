interface BotSubsUsers{
  user_id?: number | null;
  dni?: number | null;
  fname?: string | null;
  lname?: string | null;
  date_suscribe?: Date | null;
  verified?: boolean | null;
}

export default BotSubsUsers;