import Pet from "../models/Pet.js"

const petService = {
    getAll(userOwnerId = null) {
        let query = Pet.find();

        if(userOwnerId) {
            query = Pet.find({'owner.ownerId': userOwnerId.toString()});
        }

        return query;
    },
    create(petData, ownerId, userName) {
        return Pet.create({...petData, owner: {ownerId, username: userName}});
    },
    getOne(petId) {
        return Pet.findById(petId);
    },
    update(petId, updData) {
        return Pet.findByIdAndUpdate(petId, updData, { runValidators: true });
    },
    remove(petId) {
        return Pet.findByIdAndDelete(petId);
    },
    comment(petId, commentStr, username) {
        return Pet.findByIdAndUpdate(petId, { $push: {commentList: {username: username, comment: commentStr} } });
    }
};

export default petService;