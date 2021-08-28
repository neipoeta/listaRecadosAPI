import { Router } from 'express';
import ScrapController from '../controllers/ScrapController'; 

export default class ScrapRoutes {
    public init(): Router {
        const routes = Router();
        const controller = new ScrapController();

        routes.get('/scrap', controller.index);
        routes.get('/scrap/:id', controller.show);
        routes.post('/scrap', controller.store);
        routes.put('/scrap/:id', controller.update);
        routes.delete('/scrap/:id', controller.delete);

        return routes;
    }
}