import User from "../models/User.js";
import bcrypt from 'bcrypt';
import jwt from "../lib/jwt.js";

const authService = {
    async register(username, email, password, rePassword) {
        const user = await User.findOne({ $or: [{email}, {username}] });

        if(user) {
            throw new Error('User already exists!')
        }

        if(password !== rePassword) {
            throw new Error('Please check passwords!');
        }

        const newUser = await User.create({ username, email, password });

        return this.generateToken(newUser);
    },

    async login(username, password) {
        const user = await User.findOne({username});

        if(!user) {
            throw new Error('Invalid username or password!');
        }

        const isValid = await bcrypt.compare(password, user.password);

        if(!isValid) {
            throw new Error('Invalid user or password!');
        }

        return this.generateToken(user);

    },

    async generateToken(user) {
        const payload = {
            _id: user._id,
            email: user.email,
            username: user.username
        };

        const header = { expiresIn: '2h' };

        const token = await jwt.sign(payload, process.env.JWT_SECRET, header);

        return token;
    }
};

export default authService;