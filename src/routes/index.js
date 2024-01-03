const express = require("express");
const path = require("path");
const taskRouter = require("./taskRoutes");

function createRouter() {
  const router = express.Router();
  router.use(express.static(path.join(__dirname, "../template")));

  router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../template/index.html"));
  });

  router.use("/", taskRouter);

  return router;
}

module.exports = createRouter;
