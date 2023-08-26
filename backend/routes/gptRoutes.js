const express = require("express");
const gptController = require('../controllers/gptController');

const router = express.Router();

router.post('/createTask', gptController.createTask);

module.exports = router;