import ResponseFilesInterface from "./ResponseFiles.interface";

interface ResponseInterface {
  bot_response_id?: number | null;
  bot_id: number | null;
  response: string;
  description: string;
  parameter: string;
  botResponseFiles?: ResponseFilesInterface;
  createdAt?: string;
  updatedAt?: string;
}

export default ResponseInterface;