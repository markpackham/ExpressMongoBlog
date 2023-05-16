const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

// Routes

// GET
// Admin Login
router.get("/admin", async (req, res) => {
  try {
    const locals = {
      title: "Admin",
      description: "Administrator section",
    };
    res.render("admin/index", { locals });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
