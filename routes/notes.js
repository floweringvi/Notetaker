const notes = require('express').Router();
const fs = require('fs')

notes.get('/', (req, res) => {
    fs.readFile('./db/notes.json')
    .then((data) => res.json(JSON.parse(data)))
});

//Should this be built out, writing into the file? As in exactly?
notes.post('/', (req, res) => {
    fs.writeFile('./db/notes.json')
    .then((data)=>res.json(JSON.parse(data)))
});
