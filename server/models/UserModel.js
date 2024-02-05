const mongoose=require('mongoose');

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    }
})

const UserModel = mongoose.model('UserModel', UserSchema);

module.exports = UserModel;