import { Schema, model, Types } from "mongoose";

const stoneSchema = new Schema({
    name: {
        type: String,
        minLength: 2,
        required: true 
    },
    category: {
        type: String,
        minLength: 3,
        required: true 
    },
    color: {
        type: String,
        minLength: 2,
        required: true 
    },
    image: {
        type: String,
        required: true,
        validate: /^https?:\/\//
    },
    location: {
        type: String,
        minLength: 5,
        maxLength: 15,
        required: true 
    },
    formula: {
        type: String,
        minLength: 3,
        maxLength: 30,
        required: true 
    },
    description: {
        type: String,
        minLength: 10,
        required: true 
    },
    likedList: [{
        type: Types.ObjectId,
        ref: 'User'
    }],
    owner: {
        type: Types.ObjectId,
        ref: 'User'
    }
});

const Stone = model('Stone', stoneSchema);

export default Stone;