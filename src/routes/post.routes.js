const express = require("express");

const { createPost } = require("../controllers/userpostcontroller.js");

const router = express.Router();

router.post("/posts", createPost);

module.exports = router;
