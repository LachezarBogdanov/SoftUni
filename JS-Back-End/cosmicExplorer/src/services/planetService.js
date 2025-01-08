import Planet from "../models/Planet.js"

const planetService = {
    create(planetData, ownerId) {
        return Planet.create({...planetData, owner: ownerId});
    },
    getAll(filter = {}) {
        let query = Planet.find();

        if(filter.name) {
            query = query.find({name: { $regex: filter.name, $options: 'i' }})
        }

        if(filter.solarSystem) {
            query = query.find({solarSystem: { $regex: filter.solarSystem, $options: 'i' }})
        }

        return query;
    },
    getOne(planetId) {
        return Planet.findById(planetId);
    },
    update(planetId, updData) {
        return Planet.findByIdAndUpdate(planetId, updData, { runValidators: true });
    },
    remove(planetId) {
        return Planet.findByIdAndDelete(planetId);
    },
    like(planetId, userId) {
        return Planet.findByIdAndUpdate(planetId, { $push: { likedList: userId } });
    }
};

export default planetService;