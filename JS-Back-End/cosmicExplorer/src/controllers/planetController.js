import { Router } from "express";
import planetService from "../services/planetService.js";
import { getErrorMessage } from "../utils/errorUtils.js";
import { isAuth } from "../middlewares/authMiddleware.js";

const planetController = Router();

planetController.get('/create', isAuth, (req, res) => {
    const planetViewData = getPlanetViewData({});
    const planetRingsData = getRingsViewData({});

    res.render('planet/create', { title: 'Add New Planet', planetViewData, planetRingsData });
});

planetController.post('/create', isAuth, async (req, res) => {
    const planetData = req.body;

    const ownerId = req.user._id;

    try{
        await planetService.create(planetData, ownerId);

        return res.redirect('/planet/catalog');
    } catch(err) {
        const error = getErrorMessage(err);

        const planetViewData = getPlanetViewData(planetData.type);
        const planetRingsData = getRingsViewData(planetData.rings);

        res.render('planet/create', { title: 'Add New Planet', error, planetData, planetViewData, planetRingsData });
    }
});

planetController.get('/catalog', async (req, res) => {
    const allPlanets = await planetService.getAll().lean();

    res.render('planet/catalog', { title: 'Planet Catalog', allPlanets });
});

planetController.get('/search', async (req, res) => {
    const query = req.query;
    const allPlanets = await planetService.getAll(query).lean();
    
    res.render('planet/search', { title: 'Planet Search', allPlanets });
})

planetController.get('/:planetId/details', async (req, res) => {
    const planetId = req.params.planetId;
    const planetData = await planetService.getOne(planetId).lean();

    const hasUser = !!req.user;
    const isOwner = planetData.owner == req.user?._id;
    const hasLiked = planetData.likedList?.some(userId => userId == req.user?._id);

    res.render('planet/details', { title: 'Planet Details', planetData, hasUser, isOwner, hasLiked });
});

planetController.get('/:planetId/edit', isAuth, async (req, res) => {
    const planetId = req.params.planetId;
    const planetData = await planetService.getOne(planetId).lean();

    const isOwner = planetData.owner == req.user._id;

    if(!isOwner) {
        return res.redirect('/404');
    }

    const planetViewData = getPlanetViewData(planetData.type);
    const planetRingsData = getRingsViewData(planetData.rings);

    res.render('planet/edit', { title: 'Edit Planet', planetData, planetViewData, planetRingsData })
});

planetController.post('/:planetId/edit', isAuth, async (req, res) => {
    const updData = req.body;
    const planetId = req.params.planetId;
    const planetData = await planetService.getOne(planetId).lean();

    const planetViewData = getPlanetViewData(planetData.type);
    const planetRingsData = getRingsViewData(planetData.rings);
   
    try{
        await planetService.update(planetId, updData);

        return res.redirect(`/planet/${planetData._id}/details`);
    } catch(err) {
        const error = getErrorMessage(err);

        res.render('planet/edit', { title: 'Edit Planet', error, planetData, planetViewData, planetRingsData })
    }
    
});

planetController.get('/:planetId/delete', isAuth, async (req, res) => {
    const planetId = req.params.planetId;
    const planetData = await planetService.getOne(planetId);

    const isOwner = planetData.owner == req.user._id;

    if(!isOwner) {
        return res.redirect('/404');
    }

    await planetService.remove(planetId);

    res.redirect('/planet/catalog');
});

planetController.get('/:planetId/like', isAuth, async (req, res) => {
    const planetId = req.params.planetId;
    const userId = req.user._id;
    const planetData = await planetService.getOne(planetId);

    const isOwner = planetData.owner == userId;

    if(isOwner) {
        return res.redirect('/404');
    }

    await planetService.like(planetId, userId);

    res.redirect(`/planet/${planetId}/details`);
})

function getPlanetViewData(planetType) {
    const planetTypes = [
        'Inner',
        'Outer',
        'Dwarf',
        ];

        const viewData = planetTypes.map(type => ({value: type, lable: type, selected: planetType === type ? 'selected' : ''}));

        return viewData;
};

function getRingsViewData(planetRings) {
    const planetRingsOptions = [
        'Yes',
        'No',
    ];

    const viewData = planetRingsOptions.map(ring => ({value: ring, lable: ring, selected: planetRings === ring ? 'selected' : ''}));

    return viewData;
}

export default planetController;