const router = require("express").Router();
const build = require("./builder.js");

// View Routes
const VIEWS = {
  HOME: "index.html",
  NOTES: "notes.html",
};

// Note Route
router.get("/notes", (req, res) => {
  res.sendFile(build(VIEWS.NOTES));
});

// Catch wildcard for default route (Index.html)
router.get("*", (req, res) => {
  res.sendFile(build(VIEWS.HOME));
});

module.exports = router;
