const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
    res.json({ message: "hello world." });
});

app.get("/health-check", (req, res) => {
    res.json({ message: "health check." });
});

app.listen(3000, () => console.log("app init..."));