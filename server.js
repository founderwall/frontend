const express = require("express");
const next = require("next");
const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const bodyParser = require("body-parser");

app.prepare().then(() => {
  const server = express();

  // parse application/x-www-form-urlencoded
  server.use(bodyParser.urlencoded({ extended: false }));

  // parse application/json
  server.use(bodyParser.json());

  // use pages/post.js as /blog/:id
  server.get("/:category", (req, res) => {
    return app.render(
      req,
      res,
      "/category",
      Object.assign(
        {
          category: req.params.category
        },
        req.query
      )
    );
  });

  // handle each other url
  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
