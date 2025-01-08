import Stone from "../models/Stone.js"

const stoneService = {
    getAll(filter = {}) {
        const query = Stone.find();

        if(filter.name) {
            query.find({name: {$regex: filter.name, $options: 'i'}});
        }

        return query;
    },
    create(stoneData, ownerId) {
        return Stone.create({ ...stoneData, owner: ownerId });
    },
    getOne(stoneId) {
        return Stone.findById(stoneId);
    },
    update(stoneId, updatedData) {
        return Stone.findByIdAndUpdate(stoneId, updatedData, { runValidators: true });
    },
    remove(stoneId) {
        return Stone.findByIdAndDelete(stoneId);
    },
    like(stoneId, userId) {
        return Stone.findByIdAndUpdate(stoneId, { $push: { likedList: userId } });
    }
};

export default stoneService;