const express = require("express");
const router = express.Router();

// Routes
router.get("/", (req, res) => {
  const locals = {
    title: "EJS, Express and Mongo Blog",
    description: "EJS template, Express and Mongo built Blog",
  };

  res.render("index", { locals });
});

router.get("/about", (req, res) => {
  res.render("about");
});

module.exports = router;
