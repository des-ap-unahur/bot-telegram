import { Router } from "express";
import AuthMiddleware from "../Middlewares/Auth.middleware";

const ApiRoute = Router();

ApiRoute.all('/*', AuthMiddleware.verifyToken)

export default ApiRoute;