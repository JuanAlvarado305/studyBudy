import express from "express";
import User from "../models/User.js";
const router = express.Router();

router.post("stbuDB.users", async (request, response) => {
    const user_post = new User(request.body);
   
    try {
      await user_post.save();
      response.send(user_post);
    } catch (error) {
      response.status(500).send(error);
    }
  });
   
  export default router;