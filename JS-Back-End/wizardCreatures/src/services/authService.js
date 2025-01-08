import User from "../models/User.js";
import bcrypt from 'bcrypt';
import jwt from "../lib/jwt.js";

const authService = {
    async register(firstName, lastName, email, password, rePassword) {
        const user = await User.findOne({email});

        if(user) {
            throw new Error('User email already exists!')
        }

        if(password !== rePassword) {
            throw new Error('Please check passwords!');
        }

        const newUser = await User.create({ firstName, lastName, email, password });

        return this.generateToken(newUser);
    },

    async login(email, password) {
        const user = await User.findOne({email});

        if(!user) {
            throw new Error('Invalid user or password!');
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
            firstName: user.firstName,
            lastName: user.lastName
        };

        const header = { expiresIn: '2h' };

        const token = await jwt.sign(payload, process.env.JWT_SECRET, header);

        return token;
    }
};

export default authService;