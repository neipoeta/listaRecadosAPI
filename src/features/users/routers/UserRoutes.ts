import { Router } from 'express';
import UserController from '../controllers/UserController'; 

export default class UserRoutes {
    public init(): Router {
        const routes = Router();
        const controller = new UserController();

        routes.get('/user', controller.index);
        routes.get('/user/:id', controller.show);
        routes.post('/user', controller.store);
        routes.put('/user/:id', controller.update);
        routes.delete('/user/:id', controller.delete);

        return routes;
    }
}