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
const readAndAppend = (newNote) => {
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

module.exports = {readFile, readAndAppend};