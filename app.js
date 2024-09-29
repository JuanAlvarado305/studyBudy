//import required tools
import { createRequire } from "module"; //allows us to use require and import at the same time
const require = createRequire(import.meta.url);
const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer'); //middleware for handling form-data (used for uploading files)
const pdf = require('pdf-parse');
const axios = require('axios');
import connectDB from "./config/db.js"
import UserRouter from "./routes/userRouter.js"

//test to add users to DB
import User from './models/User.js';




//create Express application
//will use app to define routes, use middleware, start the server and more
const app = express();
//if environment variable PORT is available, use it. else, use port 3000 as fallback
const port =  3000;

//middleware
app.use(express.json());
app.use("/api", UserRouter);

//set up multer for file uploads
const upload = multer({dest: 'uploads/'});

//routes
app.post('/upload', upload.single('pdf'), async (req, res) => {
    try {
        const dataBuffer = fs.readFileSync(req.file.path);
        const data = await pdf(dataBuffer);
        const text = data.text;

        //here the text is processed and the quiz is generated 
        //for now, we'll just send back the extracted text
        res.json({text});
    } catch (error) {
        res.status(500).json({error: 'Error processing PDF'});
    }

});

//start server 
app.listen(port, () =>{
    console.log(`Server running on port ${port}`);
})

const newUser = new User({userId:"5", userName:'baaaefigaea', userEmail:'bx@gmail.com', quizzes:[]});
newUser.save();
console.log(newUser);

//test if server works, need to use localhost.3000
connectDB();
app.get('/', (req, res) => {
    res.send('Hello World! Express server is running.');
  });

