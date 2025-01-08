import { Router } from "express";
import creatureService from "../services/creatureService.js";
import { getErrorMessage } from "../utils/errorUtils.js";
import { isAuth } from "../middlewares/authMiddleware.js";


const creatureController = Router();

creatureController.get('/catalog', async (req, res) => {
    const allCreature = await creatureService.getAll().lean();

    res.render('creature/all-posts', { title: 'Catalog Page', allCreature });
});

creatureController.get('/create', isAuth, (req, res) => {
    res.render('creature/create', { title: 'Create Page' });
});

creatureController.post('/create', isAuth, async (req, res) => {
    const creatureData = req.body;
    const ownerId = req.user._id;
    
    try {
        await creatureService.create(creatureData, ownerId);
        
        res.redirect('/creature/catalog');
    } catch(err) {
        const error = getErrorMessage(err);
        
        res.render('creature/create', { title: 'Create Page', error, data: creatureData });
    }
});

creatureController.get('/profile', isAuth, async (req, res) => {
    const allCreature = await creatureService.getAll().lean();

    let profileCreature = allCreature.map(creature => {
        if(creature.owner == req.user._id) {
            return creature;
        }
    });

    if(profileCreature[0] === undefined) {
        profileCreature = undefined;
    }
    
    res.render('creature/profile', { title: 'My Post', profileCreature });
})

creatureController.get('/:creatureId/vote', isAuth, async (req, res) => {
    const creatureId = req.params.creatureId;
    const creatureData = await creatureService.getOne(creatureId);

    const isOwner = creatureData.owner == req.user._id;

    if(isOwner) {
        return res.redirect('/404');
    }
   
    await creatureService.vote(creatureId, req.user?._id);

    res.redirect(`/creature/${creatureId}/details`);
});

creatureController.get('/:creatureId/details', async (req, res) => {
    const creatureId = req.params.creatureId;
    const creatureData = await creatureService.getOne(creatureId).lean();
    
    const hasUser = !!req.user;
    const isOwner = req.user?._id == creatureData.owner;
    const isVoted = creatureData.votes?.some(userId => userId == req.user?._id);
    const totalVotes = creatureData.votes?.length || 0;

    res.render('creature/details', { title: 'Details Page', data: creatureData, isOwner, hasUser, isVoted, totalVotes });
});

creatureController.get('/:creatureId/edit', isAuth, async (req, res) => {
    const creatureId = req.params.creatureId;
    const creatureData = await creatureService.getOne(creatureId).lean();

    const isOnwer = creatureData.owner == req.user._id;

    if(!isOnwer) {
        return res.redirect('/404');
    }

    const data = await creatureService.getOne(creatureId).lean();

    res.render('creature/edit', { title: 'Edit Page', data });
});

creatureController.post('/:creatureId/edit', isAuth, async (req, res) => {
    const creatureId = req.params.creatureId;
    const updtData = req.body;
    const data = await creatureService.getOne(creatureId).lean();

    const isOnwer = data.owner == req.user._id;

    if(!isOnwer) {
        return res.redirect('/404');
    }

    try{
        await creatureService.updateOne(creatureId, updtData);

        res.redirect(`/creature/${creatureId}/details`);
    } catch(err) {
        const error = getErrorMessage(err);

        res.render('creature/edit', { title: 'Edit Page', data, error });
    }
});

creatureController.get('/:creatureId/delete', isAuth, async (req, res) => {
    const data = await creatureService.getOne(req.params.creatureId);

    const isOnwer = data.owner == req.user._id;

    if(!isOnwer) {
        return res.redirect('/404');
    }
    
    await creatureService.remove(req.params.creatureId);

    res.redirect('/creature/catalog');
});

export default creatureController;