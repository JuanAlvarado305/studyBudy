import mongoose from "mongoose";

//define the structure of the documents in our DB
const userSchema = new mongoose.Schema({
    userId: {type: String, required: true, unique: true},
    userName: {type: String, required:true, unique:true},
    userEmail: {type: String, required:true, unique:true},
    //relates User model to Quiz model
    quizzes: [{type: mongoose.Schema.Types.ObjectId, ref: 'Quiz'}]
    
})

//create Mongoose model named 'User' based on the schema given
//'User' is name of model
//exports file for other use 
const User = mongoose.model('User', userSchema);
export default User;