import { transformAndValidate } from "class-transformer-validator";
import { Request, Response, NextFunction } from 'express';
import { HttpStatus } from "../Config/Server/HTTPStatus.config";

const validateRequest = <T>(c: T, whitelist = true, errorHandler?: (err: any, req: Request, res: Response, next: NextFunction) => void) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const toValidate = req.body
    if (!toValidate) {
      if (errorHandler) {
        errorHandler({ type: 'no-body' }, req, res, next)
      } else {
        res.status(HttpStatus.BAD_REQUEST).json({
          error: true,
          message: 'Validation failed',
          originalError: { message: 'No request body found' }          
        })
      }
    } else {
      transformAndValidate(c as any, toValidate, { validator: { whitelist } })
        .then(transformed => {
          req.body = transformed
          next()
        })
        .catch(err => {
          if (errorHandler) {
            errorHandler(err, req, res, next)
          } else {
            res.status(HttpStatus.BAD_REQUEST).json({
              error: true,
              message: 'Validation failed',
              originalError: err
            })
          }
        })
    }
  }
}

export default validateRequest; 