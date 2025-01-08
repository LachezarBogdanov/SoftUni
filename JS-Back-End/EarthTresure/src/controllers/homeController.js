import { Router } from "express";
import stoneService from "../services/stoneService.js";

const homeCotroller = Router();

homeCotroller.get('/', async (req, res) => {
    const allStones = await stoneService.getAll().lean();

    const lastThreeStones = getLastThreeStones(allStones);


    res.render('home', { title: 'Home Page', lastStones: lastThreeStones });
});

function getLastThreeStones(allStones) {
    return allStones.slice(-3);
}

export default homeCotroller;