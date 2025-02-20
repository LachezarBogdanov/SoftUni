import { Router } from "express";
import volcanoService from "../services/volcanoService.js";
import { getErrorMessage } from "../utils/errorUtils.js";
import { isAuth } from "../middlewares/authMiddleware.js";

const volcanoController = Router();


volcanoController.get('/', async (req, res) => {
    const allVolcanos = await volcanoService.getAll().lean();
    
    res.render('volcano', { title: 'Catalog Page', volcanoes: allVolcanos });
})

volcanoController.get('/create', isAuth, (req, res) => {
    const volcanoTypesData = getVolcanoTypeViewData({});

    res.render('volcano/create', { title: 'Create Page', volcanoTypes: volcanoTypesData });
});

volcanoController.post('/create', isAuth, async (req, res) => {
    const volcanoData = req.body;
    const userId = req.user._id;
    
    try{
        await volcanoService.create(volcanoData, userId);
        
        res.redirect('/volcanoes');
    } catch(err) {
        const error = getErrorMessage(err);
        const volcanoTypeData = getVolcanoTypeViewData(volcanoData);
        
        res.render('volcano/create', { volcano: volcanoData, volcanoTypes: volcanoTypeData, error });
    }
    
});

volcanoController.get('/search', async (req, res) => {
    const query = req.query;
    const volcanoes = await volcanoService.getAll(query).lean();
    const volcanoTypes = getVolcanoTypeViewData(query);

    res.render('volcano/search', { title: 'Search', volcanoes, volcano: query, volcanoTypes });
});

volcanoController.get('/:volcanoId/edit', isAuth, async (req, res) => {
    const volcanoId = req.params.volcanoId;
    const volcano = await volcanoService.getOne(volcanoId).lean();
    const volcanoTypes = getVolcanoTypeViewData(volcano);
    const isOwner = volcano.owner.toString() === req.user._id;
    
    if(!isOwner) {
        return res.redirect('/404');
    }
    
    res.render('volcano/edit', { title: 'Edit Page', volcano, volcanoTypes });
});

volcanoController.post('/:volcanoId/edit', isAuth, async (req, res) => {
    const volcanoData = req.body;
    const volcanoId = req.params.volcanoId;

    if(!isVolcanoOwner(volcanoId, req.user._id)) {
        return res.redirect('/404');
    }
    
    try{
        await volcanoService.edit(volcanoId, volcanoData);
        
        res.redirect(`/volcanoes/${volcanoId}/details`);
    }catch(err) {
        const volcanoTypes = getVolcanoTypeViewData(volcanoData);
        const error = getErrorMessage(err);
        
        res.render('volcano/edit', { title: 'Edit Page', volcano: volcanoData, volcanoTypes, error });
    }
})

volcanoController.get('/:volcanoId/details', async (req, res) => {
    const volcanoId = req.params.volcanoId;
    const volcano = await volcanoService.getOne(volcanoId).lean();
    const isOwner = volcano.owner == req.user?._id; 
    const isVoted = volcano.voteList?.some(userId => userId == req.user?._id);
    const voteCount = volcano.voteList?.length || 0;
    
    res.render('volcano/details', { title: 'Details', volcano, isOwner, isVoted, voteCount });
});

volcanoController.get('/:volcanoId/vote', isAuth, async (req, res) => {
    const volcanoId = req.params.volcanoId;
    const userId = req.user._id;
    const isOwner = await isVolcanoOwner(volcanoId, userId);
    console.log(isOwner);
    

    if(isOwner) {
        return res.redirect(`/404`);
    }

    try {
        
        await volcanoService.vote(volcanoId, userId); 
        
        res.redirect(`/volcanoes/${volcanoId}/details`);
    } catch(err) {
        console.log(err);
        
    }
});

volcanoController.get('/:volcanoId/delete', isAuth, async (req, res) => {
    const volcanoId = req.params.volcanoId;

    if(!isVolcanoOwner(volcanoId, req.user._id)) {
        return res.redirect('/404');
    }
    
    try{
        await volcanoService.remove(volcanoId);
        
        res.redirect('/volcanoes');
    }catch(err) {
        
    }
});


function getVolcanoTypeViewData({typeVolcano}) {
    const volcanoTypes = [
        'Supervolcanoes',
        'Submarine',
        'Subglacial',
        'Mud',
        'Stratovolcanoes',
        'Shield',
        ];

        const viewData = volcanoTypes.map(type => ({value: type, lable: type, selected: typeVolcano === type ? 'selected' : ''}));

        return viewData;
}

async function isVolcanoOwner(volcanoId, userId) {
    const volcano = await volcanoService.getOne(volcanoId);
    const isOwner = volcano.owner == userId;

    return isOwner;
}

export default volcanoController;