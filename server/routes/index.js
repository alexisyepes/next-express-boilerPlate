const express = require("express");
const router = express.Router();

function routes() {
  router.get("/test", (req, res) => {
    res.send("We made it! hah hah ha h ");
  });

  // router.get("/test/:id", (req, res) => {
  //   return app.render(req, res, "/movies", { id: req.params.id });
  // });

  return router;
}

module.exports = routes;
