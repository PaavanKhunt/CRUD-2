const Note = require("../models/Notes");

const createNote = async (req, res) => {
  const note = req.body;
  const newnote = new Note(note);
  try {
    const createdNote = await newnote.save();
    res.status(200).json(createdNote);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

const getNotes = async (req, res) => {
  try {
    const data = await Note.find({});
    res.status(200).json(data);
  } catch (error) {
    res.json({ message: error.message });
  }
};

const deleteAll = async (req, res) => {
  try {
    await Note.deleteMany();
    res.status(200).json("deleted successfully");
  } catch (error) {
    res.json({ message: error.message });
  }
};

const getNotebyid = async (req, res) => {
  try {
    const data = await Note.findOne({ _id: req.params.id });
    return res.send(data);
  } catch (error) {
    return res.status(404).json({ error: error });
  }
};

const editNote = async (req, res) => {
  try {
    var id = { _id: req.params.id };
    const noteinfo = req.body;
    const data = await Note.findByIdAndUpdate(id, noteinfo);
    res.status(200).json(data);
  } catch (error) {
    res.json({ message: error.message });
  }
};

const removeNote = async (req, res) => {
  try {
    await Note.deleteOne({ _id: req.params.id });
    res.status(200).json("deleted successfully");
  } catch (error) {
    res.json({ message: error.message });
  }
};
const getnotebycolor = async (req, res) => {
  const data1 = req.body.color;
  {
    console.log("data1", data1);
  }
  try {
    const data = await Note.find({ color: data1 });
    res.status(200).json(data);
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = {
  createNote,
  getNotes,
  deleteAll,
  getNotebyid,
  editNote,
  removeNote,
  getnotebycolor,
};
