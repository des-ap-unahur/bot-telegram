import { Router } from 'express';
import UserSchema from '../Entities/Schemas/User.schema';
import Auth from "../Middlewares/Auth.middleware";
import validateRequest from '../Middlewares/RequestValidator.middleware';

const AuthRouter = Router();

AuthRouter.post("/register", validateRequest(UserSchema), Auth.register);
AuthRouter.post("/login", validateRequest(UserSchema), Auth.login);

export default AuthRouter;