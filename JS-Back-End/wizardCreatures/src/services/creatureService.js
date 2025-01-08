import Creature from "../models/Creature.js"

const creatureService = {
    getAll() {
        return Creature.find();
    },
    create(data, ownerId) {
        return Creature.create({...data, owner: ownerId});
    },
    getOne(createId) {
        return Creature.findById(createId);
    },
    updateOne(creatureId, updtData) {
        return Creature.findByIdAndUpdate(creatureId, updtData, {runValidators: true});
    },
    remove(creatureId) {
        return Creature.findByIdAndDelete(creatureId);
    },
    vote(creatureId, userId) {
        return Creature.findByIdAndUpdate(creatureId, {$push: {votes: userId}});
    }
};

export default creatureService;