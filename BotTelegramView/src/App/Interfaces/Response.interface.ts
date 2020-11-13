export interface ResponseInterface {
  bot_response_id: number | null;
  bot_id: number | null;
  response: string;
  description: string;
  parameter: string;
  createdAt: string;
  updatedAt: string;
}