import express from "express";
import path from "path";
import apiRoute from "./routes/api.js";

const PORT = 3000;
const app  = express();

app.use("/api", apiRoute)
app.use("/", express.static(path.join("public")))

app.listen(PORT, () => {
    console.log("Server Running od port", PORT)
})