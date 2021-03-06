const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const { router: userRouter } = require("./routes/user.router");
const { router: signInRouter } = require("./routes/login.router");
const { router: signUpRouter } = require("./routes/register.router");
const app = express();

const PORT = 5000;
mongoose
  .connect(process.env.CONNECTION_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log({ err }));

app.use(cors());
app.use(express.json());

app.use("/user", userRouter);
app.use("/login", signInRouter);
app.use("/register", signUpRouter);

app.get("/", (req, res) => res.status(200).json("Hello WOrld!"));
app.listen(PORT, () => console.log(`server started at PORT : ${PORT}`));
