const express = require("express");
const router = require("express").Router();
const {signup,signin} = require("../controllers/userauth.controller");
const verifyToken = require("../middleware/auth.middleware");

// router.post("/register", signin, function (req, res) {});
router.post("/register", signup, function (req, res) {});
router.post("/login",signin,function (req,res){});

module.exports = router;
