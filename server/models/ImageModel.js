const mongoose = require('mongoose');

const ImageSchema = mongoose.Schema({
    username: {required: true, type: String}, //username of the user who uploaded this image
    images: {
        type: [],
        required: true
    }
})

const ImagesModel = mongoose.model('Images', ImageSchema);
module.exports = ImagesModel;