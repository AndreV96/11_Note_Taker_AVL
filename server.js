// TODO Create "modules" in the server.js DONE?
// TODO Create middleware for requests
// TODO Create helper functions: Connect functionality of events in the front end with the routes
// TODO continuing last one, make sure the events are modifying correctly notes in db/
// TODO deploy in heroku, make reademe

const express = require('express');
const path = require('path');
const api = require('./routes/index.js')
const fs = require('fs')

const PORT = 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api', api);

app.use(express.static('public'));

app.get('/', (req, res) => 
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get('/notes', (req, res) => 
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.listen(PORT, () =>
  console.log(`APP listening at http://localhost:${PORT} 🚀`)
);