import { Schema, model, Types } from "mongoose";

const planetSchema = new Schema({
    name: {
        type: String,
        minLength: 2,
        required: true 
    },
    age: {
        type: Number,
        min: 0,
        required: true 
    },
    solarSystem: {
        type: String,
        minLength: 2,
        required: true 
    },
    type: {
        type: String,
        enum: ['Inner', 'Outer', 'Dwarf']
    },
    moons: {
        type: Number,
        min: 0,
        required: true 
    },
    size: {
        type: Number,
        min: 0,
        required: true 
    },
    rings: {
        type: String,
        enum: ['Yes', 'No']
    },
    description: {
        type: String,
        minLength: 10,
        maxLength: 100,
        required: true 
    },
    image: {
        type: String,
        required: true,
        validate: /^https?:\/\// 
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

const Planet = model('Planet', planetSchema);

export default Planet;