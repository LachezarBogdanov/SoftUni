import { Router } from "express";

import homeCotroller from "./controllers/homeController.js";
import authController from "./controllers/authController.js";
import volcanoController from "./controllers/volcanoController.js";

const routes = Router();

routes.use(homeCotroller);
routes.use('/auth', authController);
routes.use('/volcanoes', volcanoController);

routes.all('*', (req, res) => {
    res.render('home/404', { title: '404 Page' });
})

export default routes;