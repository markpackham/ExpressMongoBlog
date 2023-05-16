const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

// Routes

// GET
router.get("/admin", async (req, res) => {
  try {
    const locals = {
      title: "Admin",
      description: "Administrator section",
    };
    res.render("admin/index", { locals, data });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
