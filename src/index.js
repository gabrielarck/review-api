const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const Reviews = require("./models/reviews");

const start = async () => {
  try {
    // Connect to the database
    await mongoose.connect(
      "mongodb://reviews-api:password@localhost:27017/reviews-api",
      {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 1000,
      }
    );

    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    // app.use("/api/v1/reviews", require('./routes/reviews'));

    app.get("/api/v1/reviews", async (req, res) => {
      const reviews = await Reviews.find();
      await res.json(reviews);
    });

    app.post("/api/v1/reviews", async (req, res) => {
      const { note, comment, theme, client, guest } = req.body;
      const NewReviews = await Reviews.create({
        note,
        comment,
        theme,
        client,
        guest,
      });
      res.send(NewReviews);
    });
    app.listen(port, () => console.log(` connect in port ${port} ! `));
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

start();
