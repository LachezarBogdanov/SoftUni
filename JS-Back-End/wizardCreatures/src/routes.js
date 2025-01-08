import { Router } from "express";

import homeCotroller from "./controllers/homeController.js";
import authController from "./controllers/authController.js";
import creatureController from "./controllers/creatureController.js";

const routes = Router();

routes.use(homeCotroller);
routes.use('/auth', authController);
routes.use('/creature', creatureController);

routes.all('*', (req, res) => {
    res.render('home/404', { title: '404 Page' });
})

export default routes;