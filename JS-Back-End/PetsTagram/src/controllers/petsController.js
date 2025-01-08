import { Router } from "express";
import petService from "../services/petService.js";
import { getErrorMessage } from "../utils/errorUtils.js";
import { isAuth } from "../middlewares/authMiddleware.js";
import User from "../models/User.js";



const petsController = Router();

petsController.get('/catalog', async (req, res) => {
    const allPets = await petService.getAll().lean();
    
    res.render('pets/catalog', { title: 'Petstagram', allPets });
});

petsController.get('/create', isAuth, (req, res) => {
    res.render('pets/create', { title: 'Petstagram' });
});

petsController.post('/create', isAuth, async (req, res) => {
    const petData = req.body;
    const ownerId = req.user?._id;
    const userName = req.user?.username;
    
    try{
        await petService.create(petData, ownerId, userName);
        
        res.redirect('/pets/catalog')
    } catch(err) {
        const error = getErrorMessage(err);
        
        res.render('pets/create', { title: 'Petstagram', petData, error });
    }
});

petsController.get('/profile', isAuth, async (req, res) => {
    const userId = req.user._id;
    const curUser = await User.findById(userId).lean();
    const userOwnerId = curUser._id;
    const userPets = await petService.getAll(userOwnerId).lean();
    const petslength = userPets.length || 0;

    res.render('pets/profile', { title: 'Petstagram', userPets, curUser, petslength });
})

petsController.get('/:petId/details', async (req, res) => {
    const petId = req.params.petId;
    
    const petData = await petService.getOne(petId).lean();
    const comments = petData.commentList;
    
    const isOwner = petData.owner.ownerId == req.user?._id;
    const hasUser = !!req.user;
    
    res.render('pets/details', { title: 'Petstagram', petData, isOwner, hasUser, comments });
});

petsController.post('/:petId/comment', isAuth, async (req, res) => {
    const comment = req.body.comment;
    const petId = req.params.petId;
    const username = req.user?.username;
    const petData = await petService.getOne(petId);

    const isOwner = petData.owner == req.user._id;

    if(isOwner) {
        return res.redirect('/404');
    }

    await petService.comment(petId, comment, username);

    res.redirect(`/pets/${petId}/details`);
});

petsController.get('/:petId/edit', isAuth, async (req, res) => {
    const petId = req.params.petId;
    const petData = await petService.getOne(petId).lean();
    const isOwner = petData.owner == req.user._id;

    if(!isOwner) {
        return res.redirect('/404');
    }

    res.render('pets/edit', { title: 'Petstagram', petData });
});

petsController.post('/:petId/edit', isAuth, async (req, res) => {
    const petId = req.params.petId;
    const updData = req.body;
    const petData = await petService.getOne(petId).lean();
    const isOwner = petData.owner == req.user._id;

    if(!isOwner) {
        return res.redirect('/404');
    }

    try {
        await petService.update(petId, updData);

        res.redirect(`/pets/${petId}/details`);
    } catch(err) {
        const error = getErrorMessage(err);

        res.render('pets/edit', { title: 'Petstagram', petData, error });
    }
});

petsController.get('/:petId/delete', isAuth, async (req, res) => {
    const petId = req.params.petId;
    const petData = await petService.getOne(petId);
    const isOwner = petData.owner == req.user._id;

    if(!isOwner) {
        return res.redirect('/404');
    }

    await petService.remove(petId);

    res.redirect('/pets/catalog');
});


export default petsController;