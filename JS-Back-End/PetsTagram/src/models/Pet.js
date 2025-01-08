import { Schema, model, Types } from "mongoose";

const petSchema = new Schema({
    name: {
        type: String,
        minLength: 2,
        required: true 
    },
    image: {
        type: String,
        required: true,
        validate: /^https?:\/\//
    },
    age: {
        type: Number,
        min: 1,
        max: 100,
        required: true 
    },
    description: {
        type: String,
        minLength: 5,
        maxLength: 50,
        required: true 
    },
    location: {
        type: String,
        minLength: 5,
        maxLength: 50,
        required: true 
    },
    owner: {
        ownerId: {
            type: Types.ObjectId,
            ref: 'User'
        },
        username: String,
    },
    commentList: [{
        username: {
            type: String
        },
        comment: {
            type: String
        }
    }]
});

const Pet = model('Pet', petSchema);

export default Pet;