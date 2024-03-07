const router = require("express").Router();
const notes = require("./routes/notes.api");

// Encapsulate all api routes in /api - Keeps our main server file clean

// Middleware for the note api
router.use("/notes", notes);

module.exports = router;
