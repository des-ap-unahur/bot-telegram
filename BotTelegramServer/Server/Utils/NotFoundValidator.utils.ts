import { HttpStatus } from "../Config/Server/HTTPStatus.config"

const notFoundValidator = (res:any, data: any) => {
  if(data){
    res.send(data)
  } else {
    res.sendStatus(HttpStatus.NOT_FOUND);
  }
}

export default notFoundValidator;