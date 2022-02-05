const fs = require('fs');

const readFile = (res) => {
  fs.readFile('./db/db.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
    } else {
      res.json(JSON.parse(data))
    }
  })
}
const writeFile = (newNote) => {
  fs.readFile('./db/db.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
    } else {
      const dataArr = JSON.parse(data)
      dataArr.push(newNote)
      fs.writeFile('./db/db.json', JSON.stringify(dataArr), (err) => 
      err ? console.error(err) : console.info(`\nNote added to note database`))
    }
  })
}
const deleteFile = (noteId) =>{
  fs.readFile('./db/db.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err)
    } else {
      const noteDB = JSON.parse(data)
      const idMatchIndex = noteDB.findIndex(e => noteId === e.id)
      noteDB.splice(idMatchIndex, 1)
      fs.writeFile('./db/db.json', JSON.stringify(noteDB), (err) => 
      err ? console.error(err) : console.info(`\nNote deleted from database`))
    }
  });
}
module.exports = {readFile, writeFile, deleteFile};