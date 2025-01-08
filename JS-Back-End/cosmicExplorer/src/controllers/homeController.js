import { Router } from "express";

const homeCotroller = Router();

homeCotroller.get('/', (req, res) => {
    res.render('home', { title: 'Cosmic Explorer' });
});

export default homeCotroller;