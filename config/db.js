import mongoose from "mongoose";
//import * as dotenv from './dotenv';

import { createRequire } from "module"; //allows us to use require and import at the same time
const require = createRequire(import.meta.url);
//require('dotenv').config();
export default function connectDB() {

  const URI = 'mongodb+srv://thefizzy003:zaUVXrdLHBfRRAw4@cluster0.4c81v.mongodb.net/stbuDB?retryWrites=true&w=majority&appName=Cluster0'  
  try {
    mongoose.connect(URI);
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
  const dbConnection = mongoose.connection;
  dbConnection.once("open", (_) => {
    console.log(`Database connected: ${URI}`);
  });
 
  dbConnection.on("error", (err) => {
    console.error(`connection error: ${err}`);
  });
  return;
}