import Game from "../models/Game.js"

const gameService = {
    create(gameData, ownerId) {
        return Game.create({...gameData, owner: ownerId});
    },
    getAll(filter = {}) {
        const query = Game.find();

        if(filter.name) {
            query.find({name: {$regex: filter.name, $options: 'i'}});
        }

        if(filter.platform) {
            query.find({platform: filter.platform});
        }

        return query;
    },
    getOne(gameId) {
        return Game.findById(gameId);
    },
    edit(updGameData, gameId) {
        return Game.findByIdAndUpdate(gameId, updGameData, {runValidators: true});
    },
    remove(gameId) {
        return Game.findByIdAndDelete(gameId);
    },
    vote(userId, gameId) {
        return Game.findByIdAndUpdate(gameId, { $push: {boughtBy: userId} });
    }
};

export default gameService;