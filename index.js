const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const app = express();
const postRouter = require("./src/routes/post.routes.js");
const userRouter = require("./src/routes/userauth.routes.js");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/auth", userRouter);
app.use("/api", postRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server started at port ${process.env.PORT}`);
});
