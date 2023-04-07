const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const app = express();

mongoose.connect("mongodb://localhost:27017/node-auth-yt", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});