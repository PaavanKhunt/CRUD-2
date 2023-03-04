const express = require("express");

const note = require("../controler/note");

const router = express.Router();

router.post("/create-note", note.createNote);
router.get("/get-notes", note.getNotes);
router.delete("/delete-all", note.deleteAll);
router.get("/get-notebyId/:id", note.getNotebyid);
router.post("/update-note/:id", note.editNote);
router.delete("/delete-note/:id", note.removeNote);
router.post("/get-colorbyID", note.getnotebycolor);

module.exports = router;
