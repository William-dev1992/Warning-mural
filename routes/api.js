import express from "express";
import cors from "cors";
const router = express.Router();
import posts from "../models/posts.js";
import bodyParser from "body-parser";

const options = {
    origin: "http://localhost:3000"
}

router.use(cors(options));

router.get("/all", (req,res) => {
    res.json(JSON.stringify(posts.getAll()))
})

router.post("/new",bodyParser.json() ,(req,res) => {

    let title = req.body.title;
    let description = req.body.description;

    posts.newPost(title, description)

    res.send("Post added")
})

export default router;
