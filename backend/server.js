const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

const gptRoutes = require('./routes/gptRoutes');

app.use(express.json());
app.use(cors());

const logMiddleware = (req, res, next) => {
    console.log('Request received: ', req.url);
    next();
}

app.use('/api/gpt', gptRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
