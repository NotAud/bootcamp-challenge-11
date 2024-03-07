const router = require("express").Router();
const fs = require("fs");
const crypto = require("crypto");

// Get All saved notes
router.get("/", (req, res) => {
  fs.readFile("./db/db.json", "utf8", (err, data) => {
    const response = JSON.parse(data);
    res.json(response);
  });
});

// Add a new note
router.post("/", (req, res) => {
  const newNote = req.body;
  // Generate ID for the note and append it to the requested note object
  newNote.id = crypto.randomBytes(16).toString("hex");

  // Get current notes then write file by appending current notes with the new note
  const currentNotes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
  fs.writeFileSync("./db/db.json", JSON.stringify([...currentNotes, newNote]));

  // Return a success status so the client knows the new note was added
  res.sendStatus(200);
});

router.delete("/:id", (req, res) => {
  // Parse our requested delete note id
  const id = req.params.id;

  // Parse our current notes saved
  const currentNotes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));

  // Find our note by id and remove it by splicing the array by the found index (i)
  currentNotes.find((note, i) => {
    if (note.id === id) {
      currentNotes.splice(i, 1);

      // Update our write file with our spliced notes array
      fs.writeFileSync("./db/db.json", JSON.stringify(currentNotes));
    }
  });

  // Return a success status so the client knows the note was deleted
  res.sendStatus(200);
});

module.exports = router;
