import { Router } from "express";

import homeCotroller from "./controllers/homeController.js";
import authController from "./controllers/authController.js";
import gamesController from "./controllers/gamesController.js";

const routes = Router();

routes.use(homeCotroller);
routes.use('/auth', authController);
routes.use('/games', gamesController);

routes.all('*', (req, res) => {
    res.render('home/404', { title: '404 Page - Gaming Team' });
})

export default routes;