const router = require("express").Router();
const fs = require("fs");
const crypto = require("crypto");

router.get("/", (req, res) => {
  fs.readFile("./db/db.json", "utf8", (err, data) => {
    const response = JSON.parse(data);
    res.json(response);
  });
});

router.post("/", (req, res) => {
  const newNote = req.body;
  newNote.id = crypto.randomBytes(16).toString("hex");

  const currentNotes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
  fs.writeFileSync("./db/db.json", JSON.stringify([...currentNotes, newNote]));
  res.sendStatus(200);
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  const currentNotes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
  currentNotes.find((note, i) => {
    if (note.id === id) {
      currentNotes.splice(i, 1);
      fs.writeFileSync("./db/db.json", JSON.stringify(currentNotes));
    }
  });
  res.sendStatus(200);
});

module.exports = router;
