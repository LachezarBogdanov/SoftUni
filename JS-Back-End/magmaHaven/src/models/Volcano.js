import { Schema, model, Types } from "mongoose";

const volcanoSchema = new Schema({
    name: {
        type: String,
        minLength: 2,
        required: true
    },
    location: {
        type: String,
        minLength: 3,
        required: true 
    },
    elevation: {
        type: Number,
        min: 0,
        required: true 
    },
    lastEruption: {
        type: Number,
        min: 0,
        max: 2024,
        required: true 
    },
    image: {
        type: String,
        required: true ,
        validate: /^https?::\/\//
    },
    typeVolcano: {
        type: String,
        required: true,
        enum: ['Supervolcanoes', 'Submarine', 'Subglacial', 'Mud', 'Stratovolcanoes', 'Shield'] 
    },
    description: {
        type: String,
        minLength: 10,
        required: true 
    },
    owner: {
        type: Types.ObjectId,
        ref: 'User'
    },
    voteList: [{
        type: Types.ObjectId,
        ref: 'User'
    }]
});

const Volcano = model('Volcano', volcanoSchema);

export default Volcano;