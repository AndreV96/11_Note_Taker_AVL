// Add functionality to the routes below

const notes = require('express').Router();
const uuid = require('../helpers/uuid');
const {readFile, writeFile, deleteFile} = require('../helpers/fsUtils')
notes.get('/', (req, res) => readFile(res))

notes.post('/', (req, res) => {
  const {title, text} = req.body

  if (req.body) {
    const newNote = {
      title,
      text,
      id: uuid(),
    }
    writeFile(newNote);
    res.json(`Note added successfully 🚀`);
  }
  
});

notes.delete('/:id', (req, res) => {
  const id = req.params.id
  deleteFile(id)
  res.json('Note deleted')
});


module.exports = notes;
