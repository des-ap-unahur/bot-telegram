import { transformAndValidate } from "class-transformer-validator";
import { Request, Response, NextFunction } from 'express';
import { HttpStatus } from "../Config/Server/HTTPStatus.config";

const validateRequest = <T>(classValidator: T, whitelist = true) => 
  (req: Request, res: Response, next: NextFunction) => {
    const toValidate = req.body
    if (!toValidate) {
      res.status(HttpStatus.BAD_REQUEST)
        .json({
          error: true,
          message: 'Validation failed',
          originalError: { message: 'No request body found' }          
        })
    } else {
      transformAndValidate(
        classValidator as any,
        toValidate, 
        { validator: { whitelist } }
      )
        .then(
          transformed => {
            req.body = transformed
            next()
          }
        )
        .catch(
          err => 
          {
            res.status(HttpStatus.BAD_REQUEST)
              .json({
                error: true,
                message: 'Validation failed',
                originalError: err
              })
          }
        )
    }
  }


export default validateRequest; 