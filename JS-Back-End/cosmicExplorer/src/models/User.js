import { Schema, model } from "mongoose";
import bcrypt from 'bcrypt';

const SALT_ROUNDS = 10;

const userSchema = new Schema({
    username: {
        type: String,
        minLength: 2,
        maxLength: 20,
        required: [true, 'Username is required!']
    },
    email: {
        type: String,
        minLength: 10,
        required: [true, 'Email is required!']
    },
    password: {
        type: String,
        minLength: 4,
        required: [true, 'Password is required!']
    }
});

userSchema.pre('save', async function () {
    const hash = await bcrypt.hash(this.password, SALT_ROUNDS);

    this.password = hash;
})

const User = model('User', userSchema);

export default User;