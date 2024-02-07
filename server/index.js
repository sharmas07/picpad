const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const { default: mongoose } = require("mongoose");
const multer = require('multer');

const checkUser = require("./controllers/checkUserController");
const { addImage, getAllImagesOfUser } = require("./controllers/imagesController");


dotenv.config();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(bodyParser.json());

// Set up multer storage
const storageMulter = multer.memoryStorage();
const upload = multer({ storage: storageMulter });


// routes
app.get("/", (req, res) => {
  res.send("Welcome to the PicPad");
});

// check if the user exist in the database already,if yes return the user, else create and return the user
app.post('/checkuser', checkUser)
// add image data into the database of the existing user
app.post('/addimage',upload.single('image'), addImage);
app.post('/getimages', getAllImagesOfUser);

app.listen(PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("connected to DB");
    })
    .catch((error) => {
      console.log(error);
    });
});
