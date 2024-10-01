const express = require("express");
require("dotenv").config();
const { connect } = require("mongoose");
const cors = require("cors");

const app = express();

const portfolioRoute = require("./routes/portfolioRoute");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ credentials: true, origin: "*" , methods: "GET,HEAD,PUT,PATCH,POST,DELETE"}));

app.use("/api/portfolio", portfolioRoute);

connect(process.env.MONGO_URI)
  .then(
    app.listen(process.env.PORT || 5000, () =>
      console.log(`Server running on port ${process.env.PORT}`)
    )
  )
  .catch((error) => {
    console.log(error);
  });
