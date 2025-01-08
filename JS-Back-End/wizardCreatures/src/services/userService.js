import User from "../models/User.js"

const userService = {
    getOne(id) {
        return User.findById(id);
    }
}

export default userService;