import { Router } from 'express';
import RolesController from '../Controllers/Roles.controller';
import validateRequest from '../Middlewares/RequestValidator.middleware';
import RoleSchema from '../Entities/Schemas/Roles.schema';

const RolesRoute = Router();

RolesRoute.get('/roles', RolesController.getRoles);
RolesRoute.get('/roles/:id', RolesController.getRolById);
RolesRoute.post('/roles', validateRequest(RoleSchema), RolesController.postRol);
RolesRoute.delete('/roles/:id', RolesController.deleteRol);
RolesRoute.put('/roles/:id', validateRequest(RoleSchema), RolesController.updateRol);

export default RolesRoute;