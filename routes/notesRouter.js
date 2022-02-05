// Add functionality to the routes below

const notes = require('express').Router();
const uuid = require('../helpers/uuid');
// const readAndAppend = require('../helpers/fsUtils')
const {readFile, readAndAppend} = require('../helpers/fsUtils')
notes.get('/', (req, res) => readFile(res))

notes.post('/', (req, res) => {
  const {title, text} = req.body

  if (req.body) {
    const newNote = {
      title,
      text,
      id: uuid(),
    }
    readAndAppend(newNote);
    res.json(`Note added successfully 🚀`);
  }
  
});

// notes.delete('/', (req, res) => {
  //TODO:  `DELETE /api/notes/:id` should receive a query parameter that contains the id of a note to delete. To delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.
// });


module.exports = notes;
