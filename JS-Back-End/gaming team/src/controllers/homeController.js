import { Router } from "express";

const homeCotroller = Router();

homeCotroller.get('/', (req, res) => {
    res.render('home', { title: 'Home Page - Gaming Team' });
});

homeCotroller.get('/auth', (req, res) => {
    res.send(req.user);
})

export default homeCotroller;