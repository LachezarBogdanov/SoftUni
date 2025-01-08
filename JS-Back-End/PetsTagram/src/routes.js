import { Router } from "express";

import homeCotroller from "./controllers/homeController.js";
import authController from "./controllers/authController.js";
import petsController from "./controllers/petsController.js";

const routes = Router();

routes.use(homeCotroller);
routes.use('/auth', authController);
routes.use('/pets', petsController);

routes.all('*', (req, res) => {
    res.render('home/404', { title: 'Petstagram' });
})

export default routes;