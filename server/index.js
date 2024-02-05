const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const { default: mongoose } = require("mongoose");
const UserModel = require("./models/UserModel");

dotenv.config();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(bodyParser.json());

// routes
app.get("/", (req, res) => {
  res.send("Welcome to the PicPad");
});

// check if the user exist in the database already,if yes return the user, else create and return the user
app.post('/checkuser', async (req, res)=>{
    let username= req.body.username;
    console.log('received request for checking user : ', username);
    // find a user by their username
    const user = await UserModel.findOne({username});
    if(!user){
        // if no such user is found then create new one with given details
        const newUser = await UserModel.create({...req.body});
        console.log('created new user : ', newUser);
        return res.send(newUser);
    }
    else{
        return res.send(user);
    }
})

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
