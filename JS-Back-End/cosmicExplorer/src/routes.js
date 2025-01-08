import { Router } from "express";

import homeCotroller from "./controllers/homeController.js";
import authController from "./controllers/authController.js";
import planetController from "./controllers/planetController.js";

const routes = Router();

routes.use(homeCotroller);
routes.use('/auth', authController);
routes.use('/planet', planetController);

routes.all('*', (req, res) => {
    res.render('home/404', { title: '404 - Page Not Found' });
})

export default routes;