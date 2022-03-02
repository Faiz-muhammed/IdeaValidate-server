const express = require("express");
const env = require("dotenv");
const cors = require("cors");

const mainRouter = require("./");

env.config();

// server setup

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(
  cors({
    origin: ["https://localhost:3000"],
    credentials: true,
  })
);

db.connect((err) => {
  if (err) {
    console.log("error in database connection", err);
  } else {
    console.log("connection established");
  }
});

app.use("/api/member", memberRouter);
app.use("/api/manager", ProjectmanagerRoute);

app.listen(PORT, (err) => {
    if(err){
        console.log("error in port")
    }
    else{

        console.log(`listening at :${PORT}`);
    }
});

module.exports =app;
