const ImagesModel = require("../models/ImageModel");
const {
    ref,
    uploadBytes,
} = require("firebase/storage");
const dotenv = require("dotenv")
dotenv.config()

const {initializeApp} = require('firebase/app');
const { getStorage } = require("firebase/storage");


// firebase setup
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);
  // Create a storage reference from the Firebase app
  const storageRef = getStorage(firebaseApp);


const removeSpacesFromFileName = (originalFileName) => {
    let fileNameWithoutSpace = originalFileName.replace(/ /g, "");
    return fileNameWithoutSpace;
}


const addImage = async (req, res) => {
    try {
        console.log(req);
        const { username } = req.body;
        const file = req.file;
        const originalname = removeSpacesFromFileName(file.originalname);
        const imageRef = ref(storageRef, originalname);
        const metatype = { contentType: file.mimetype, name: originalname };
        const snapshot = await uploadBytes(imageRef, file.buffer, metatype)
        const publicUrl = `https://firebasestorage.googleapis.com/v0/b/${snapshot.metadata.bucket}/o/${snapshot.metadata.fullPath}?alt=media`;

        // push the image into the images array of user
        const images = await ImagesModel.findOneAndUpdate(
            { username: username },
            { $push: { images: publicUrl } },
            { new: true, upsert: true } // options to return the updated document and create a new document if it doesn't exist
        );
        console.log(images);
        return res.send(images);
    } catch (error) {
        console.log(error)
        return res.send(error)
    }

}

const getAllImagesOfUser = async(req, res)=>{
    try {
        const {username} = req.body;
        if(!username) return res.send("username not found")
        const userImages = await ImagesModel.find({username});
        return res.send(userImages)
    } catch (error) {
        return res.send(error.message)
    }
}

module.exports = {
    addImage, getAllImagesOfUser
}