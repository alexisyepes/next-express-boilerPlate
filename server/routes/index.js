const express = require("express");
const router = express.Router();
const personDb = require("../../models/person");

function routes() {
  router.get("/test", (req, res) => {
    res.send("We made it! hah hah ha h ");
  });

  router.post("/person", (req, res) => {
    // console.log(req.body);
    let person = {
      name: req.body.name,
      lastName: req.body.lastName,
    };
    personDb
      .create(person)
      .then(() => res.send(person))
      .catch((err) => {
        console.log(err);
        res.json(err);
      });
  });

  // router.get("/test/:id", (req, res) => {
  //   return app.render(req, res, "/movies", { id: req.params.id });
  // });

  return router;
}

module.exports = routes;
