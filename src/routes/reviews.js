const Reviews = require("../models/reviews");
const express = require("express");
const app = express.Router();

module.exports = async (app) => {
  app.get("/reviews", async (req, res) => {
    const { count, rows } = await reviews.findAndCountAll(
      limit && { limit: Number(limit) }
    );
    res.header("Access-Control-Expose-Headers", "X-Total-Count");
    res.header("X-Total-Count", count);
    res.send(rows);
  });

  // app.get('/reviews:id', async(req,res) => {
  //     const { id } = req.params;
  //     const oneReviews = await reviews.findOne({where: { id }})
  //     res.send(oneReviews)
  //     });

  // app.post('/reviews', async (req, res) => {
  //     const { note, comment, theme, guest } = req.body
  //     const NewReviews =await reviews.create({ note, comment, theme, guest })
  //     res.send(NewReviews);
  //     });

  // app.put('/reviews:id', async (req, res) => {
  //     const { id } = req.params;
  //     const { note,comment, theme, guest } = req.body;
  //     const UpdateReviews = await reviews.update({ note, comment, theme, guest }, {where: { id }});
  //     res.send(UpdateReviews);
  // });

  // app.delete('/reviews:id', async (req, res) => {
  //     const { id } = req.params;
  //     await reviews.destroy({ where: { id }});
  //     res.send(id);
  // });
};
