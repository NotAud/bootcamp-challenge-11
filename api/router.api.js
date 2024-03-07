const router = require("express").Router();
const notes = require("./routes/notes.api");
router.use("/notes", notes);

module.exports = router;
