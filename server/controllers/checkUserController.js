const UserModel = require('../models/UserModel');

const checkUser = async (req, res) => {
    let username = req.body.username;
    console.log('received request for checking user : ', username);
    try {
        // find user by their username
        const user = await UserModel.findOne({ username });
        if (!user) {
            // if no such user is found then create new one with given data
            const newUser = await UserModel.create({ ...req.body });
            console.log('created new user : ', newUser);
            return res.send(newUser);
        }
        else {
            return res.send(user);
        }
    } catch (error) {
        return res.send({ error: error })
    }
}

module.exports = checkUser;