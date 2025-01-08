import { Router } from "express";
import gameService from "../services/gameService.js";
import { getErrorMessage } from "../utils/errorUtils.js";
import { isAuth } from "../middlewares/authMiddleware.js";


const gamesController = Router();

gamesController.get('/catalog', async (req, res) => {
    const allGames = await gameService.getAll().lean();
    
    res.render('games/catalog', { title: 'Catalog Page - Gaming Team', allGames });
});

gamesController.get('/search', async (req, res) => {
    const query = req.query;
    const searchedGames = await gameService.getAll(query).lean();
    
    res.render('games/search', { title: 'Search - Gaming Team', games: searchedGames});
});

gamesController.get('/create', isAuth, (req, res) => {
    const gameTypes = getVolcanoTypeViewData({});

    res.render('games/create', { title: 'Create Page - Gaming Team', gameTypes });
});

gamesController.post('/create', isAuth, async (req, res) => {
    const gameData = req.body;
    const gameTypes = getVolcanoTypeViewData({});
    const ownerId = req.user._id;

    try{
        await gameService.create(gameData, ownerId);

        return res.redirect('/games/catalog');

    } catch(err) {
        const errorMessage = getErrorMessage(err);

        return res.render('games/create', { title: 'Create Page - Gaming Team', gameTypes, error: errorMessage, gameData });
    }
});

gamesController.get('/:gameId/details', async (req, res) => {
    const gameId = req.params.gameId;

    const gameData = await gameService.getOne(gameId).lean();
    const isOwner = isGameOwner(req.user?._id, gameData.owner);
    const isVoted = gameData.boughtBy?.some(userId => userId == req.user?._id);
    
    res.render('games/details', {title: 'Details', gameData, isOwner, isVoted });
});

gamesController.get('/:gameId/edit', isAuth, async (req, res) => {
    const gameId = req.params.gameId;
    const gameData = await gameService.getOne(gameId).lean();
    const gameTypes = getVolcanoTypeViewData(gameData);

    const isOwner = isGameOwner(req.user._id, gameData.owner);

    if(!isOwner) {
        return res.redirect('/404');
    }

    res.render('games/edit', { title: 'Edit Page - Gaming Team', gameData, gameTypes });
});

gamesController.post('/:gameId/edit', isAuth, async (req, res) => {
    const updatedGameData = req.body;
    const gameId = req.params.gameId;
    const gameData = await gameService.getOne(gameId).lean();
    const gameTypes = getVolcanoTypeViewData(gameData);

    const isOwner = isGameOwner(req.user._id, gameData.owner);

    if(!isOwner) {
        return res.redirect('/404');
    }

    try{
        await gameService.edit(updatedGameData, gameId);

        return res.redirect(`/games/${gameData._id}/details`)
    } catch(err) {
        const error = getErrorMessage(err);

        return res.render('games/edit', { title: 'Edit Page - Gaming Team', gameData, gameTypes, error });
    }
});

gamesController.get('/:gameId/delete', isAuth, async (req, res) => {
    const gameId = req.params.gameId;
    const gameData = await gameService.getOne(gameId);

    const isOwner = isGameOwner(req.user._id, gameData.owner);

    if(!isOwner) {
        return res.redirect('/404');
    }

    await gameService.remove(gameId);

    res.redirect('/games/catalog');
});

gamesController.get('/:gameId/buy', async (req, res) => {
    const gameId = req.params.gameId;
    const userId = req.user?._id;
    const gameData = await gameService.getOne(gameId);

    const isOwner = isGameOwner(userId, gameData.owner);

    if(isOwner) {
        return res.redirect('/404');
    }

    try{
        await gameService.vote(userId, gameId);

        res.redirect(`/games/${gameId}/details`);
    } catch(err) {
        throw new Error('asdasd')
    }
});



function getVolcanoTypeViewData({platform}) {
    const gameTypes = [
        'PC',
        'Nintendo',
        'PS4',
        'PS5',
        'XBOX',
        ];

        const viewData = gameTypes.map(type => ({value: type, lable: type, selected: platform === type ? 'selected' : ''}));

        return viewData;
}

function isGameOwner(userId, ownerId) {
    const isOwner = userId == ownerId;

    return isOwner;
}

export default gamesController;