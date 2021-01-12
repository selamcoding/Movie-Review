const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");
const path = require("path");

const movieRouter = require("./routes/moviesRoute");
const userRouter = require("./routes/user");
const authRouter = require("./routes/auth");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(movieRouter);
app.use(userRouter);
app.use(authRouter);

//Serve static assets in production
if (process.env.NODE_ENV === "production") {
  //Set static folder
  app.use(express.static("ams-theater/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "ams-theater", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 4000;

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
