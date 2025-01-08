import { Schema, model, Types } from "mongoose";

const gameSchema = new Schema({
    name: {
        type: String,
        minLength: 4,
        required: true 
    },
    image: {
        type: String,
        required: true,
        validate: /^https?::\/\//
    },
    price: {
        type: Number,
        min: 0,
        required: true 
    },
    description: {
        type: String,
        minLength: 10,
        required: true 
    },
    genre: {
        type: String,
        minLength: 2,
        required: true 
    },
    platform: {
        type: String,
        required: true,
        enum: ["PC", "Nintendo", "PS4", "PS5", "XBOX"],
    },
    owner: {
        type: Types.ObjectId,
        ref: 'User'
    },
    boughtBy: [{
        type: Types.ObjectId,
        ref: 'User'
    }]
});

const Game = model('Game', gameSchema);

export default Game;