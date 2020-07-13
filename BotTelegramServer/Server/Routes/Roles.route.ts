import { Router } from 'express';
import RolesController from '../Controllers/Roles.controller';

const RolesRoute = Router();

RolesRoute.get('/Roles', RolesController.getRoles);
RolesRoute.get('/Roles/:id', RolesController.getRolById);
RolesRoute.post('/Roles', RolesController.postRol);
RolesRoute.delete('/Roles/:id', RolesController.deleteRol);
RolesRoute.put('/Roles/:id', RolesController.updateRol);

export default RolesRoute;