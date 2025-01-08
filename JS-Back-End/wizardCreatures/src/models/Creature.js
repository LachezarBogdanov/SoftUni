import { Schema, model, Types } from "mongoose";

const creatureSchema = new Schema({
    name: {
        type: String,
        minLength: 2,
        required: true
    },
    species: {
        type: String,
        minLength: 3,
        required: true
    },
    skinColor: {
        type: String,
        minLength: 3,
        required: true
    },
    eyeColor: {
        type: String,
        minLength: 3,
        required: true
    },
    image: {
        type: String,
        required: true,
        validate: /^https?:\/\//
    },
    description: {
        type: String,
        minLength: 5,
        maxLength: 500,
        required: true
    },
    owner: {
        type: Types.ObjectId,
        ref: 'User'
    },
    votes: [{
        type: Types.ObjectId,
        ref: 'User'
    }]
});

const Creature = model('Creature', creatureSchema);

export default Creature;