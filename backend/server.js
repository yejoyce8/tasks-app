const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

const logMiddleware = (req, res, next) => {
    console.log('Request received: ', req.url);
    next();
}


app.get("/", (req, res) => {
  res.send("Hello, world!");
});


app.post("/api/createTask", logMiddleware, (req, res) => {
    const {taskName, time} = req.body;
    const response = {taskName: "new", time: 1}
    res.status(201).json(response);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
