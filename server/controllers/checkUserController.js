const ImagesModel = require('../models/ImageModel');
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
            const sampleImage = "https://firebasestorage.googleapis.com/v0/b/picpad-c4947.appspot.com/o/ancient-manuscript.jpg?alt=media&token=0a5219c7-f0c0-454e-aacc-7ea68d4acc20";
            // add sample image to user's images list
            const images = await ImagesModel.findOneAndUpdate(
                { username: newUser.username },
                { $push: { images: sampleImage } },
                { new: true, upsert: true } // options to return the updated document and create a new document if it doesn't exist
            );
            console.log(images);
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