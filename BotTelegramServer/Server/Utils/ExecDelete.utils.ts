import { HttpStatus } from "../Config/Server/HTTPStatus.config";

const execDelete = async (res: any, deleteCallback: () => void) => {
  try{
    await deleteCallback();
    await res.status(HttpStatus.OK);
  } catch (error) {
    res.sendStatus(HttpStatus.INTERNAL_SERVER_ERROR);
  }
}

export default execDelete;