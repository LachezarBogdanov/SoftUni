import { Router } from "express";
import stoneService from "../services/stoneService.js";
import { getErrorMessage } from "../utils/errorUtils.js";
import { isAuth } from "../middlewares/authMiddleware.js";

const stoneController = Router();

stoneController.get('/dashboard', async (req, res) => {
    const allStones = await stoneService.getAll().lean();

    res.render('stone/dashboard', { title: 'Dashboard', allStones });
});

stoneController.get('/addStone', isAuth, (req, res) => {
    res.render('stone/create', { title: 'Create Page' });
});

stoneController.post('/addStone', isAuth, async (req, res) => {
    const newStone = req.body;
    const ownerId = req.user._id;
    
    try{
        await stoneService.create(newStone, ownerId);

        res.redirect('/stone/dashboard');
    } catch(err) {
        const error = getErrorMessage(err);

        res.render('stone/create', { title: 'Create Page', error, stoneData: newStone });
    }
});

stoneController.get('/:stoneId/like', isAuth, async (req, res) => {
    const stoneId = req.params.stoneId;
    const userId = req.user._id;
    const stoneData = await stoneService.getOne(stoneId);

    const isOwner = getOwnerData(userId, stoneData.owner);

    if(isOwner) {
        return res.redirect('/404');
    }

    await stoneService.like(stoneId, userId);

    res.redirect(`/stone/${stoneId}/details`);
})

stoneController.get('/:stoneId/details', async (req, res) => {
    const stoneId = req.params.stoneId;
    const stoneData = await stoneService.getOne(stoneId).lean();
    const userId = req.user?._id;
    const hasUser = !!req.user;

    const isOwner = userId == stoneData.owner;
    const hasLiked = stoneData.likedList?.some(id => id == userId);

    res.render('stone/details', { title: 'Details Page', stoneData, isOwner, hasLiked, hasUser });
});

stoneController.get('/:stoneId/edit', async (req, res) => {
    const stoneData = await stoneService.getOne(req.params.stoneId).lean();

    const isOwner = getOwnerData(req.user._id, stoneData.owner);

    if(!isOwner) {
        return res.redirect('/404');
    }

    res.render('stone/edit', { title: 'Edit Page', stoneData });
});

stoneController.post('/:stoneId/edit', async (req, res) => {
    const updData = req.body;
    const stoneId = req.params.stoneId;
    const stoneData = await stoneService.getOne(req.params.stoneId).lean();

    const isOwner = getOwnerData(req.user._id, stoneData.owner);

    if(!isOwner) {
        return res.redirect('/404');
    }

    try{
        await stoneService.update(stoneId, updData);

        res.redirect(`/stone/${stoneId}/details`);
    } catch(err) {
        const error = getErrorMessage(err);

        res.render('stone/edit', { title: 'Edit Page', stoneData, error });
    }
});

stoneController.get('/:stoneId/delete', async (req, res) => {
    const stoneId = req.params.stoneId;
    const stoneData = await stoneService.getOne(stoneId);

    const isOwner = getOwnerData(req.user._id, stoneData.owner);

    if(!isOwner) {
        return res.redirect('/404');
    }

    try{
        await stoneService.remove(stoneId);

        res.redirect('/stone/dashboard');
    } catch(err) {
        throw new Error(err.message);
    }
});

stoneController.get('/search', async (req, res) => {
    const query = req.query;
    
    const searchedStones = await stoneService.getAll(query).lean();

    res.render('stone/search', { title: 'Search Page', searchedStones });
})

function getOwnerData(userId, ownerId) {
    const isOwner = userId == ownerId;

    return isOwner;
}

export default stoneController;