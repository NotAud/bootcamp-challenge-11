const router = require("express").Router();
const build = require("./builder.js");

const VIEWS = {
  HOME: "index.html",
  NOTES: "notes.html",
};

router.get("/notes", (req, res) => {
  res.sendFile(build(VIEWS.NOTES));
});

router.get("*", (req, res) => {
  res.sendFile(build(VIEWS.HOME));
});

module.exports = router;
