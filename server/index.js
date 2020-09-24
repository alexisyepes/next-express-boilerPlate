const express = require("express");
const next = require("next");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();
    server.use(bodyParser.urlencoded({ extended: false }));
    server.use(bodyParser.json());

    const showRoutes = require("./routes/index.js");

    server.use("/api", showRoutes(server));

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    mongoose.connect(
      `mongodb+srv://nextProject:${process.env.MONGO_ATLAS}@cluster0.1zcom.mongodb.net/next-project?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    server.listen(PORT, (err) => {
      if (err) throw err;
      console.log(`> Ready on ${PORT}`);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
