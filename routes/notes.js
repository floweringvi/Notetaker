const notes = require('express').Router();
const fs = require('fs')

notes.get('/', (req, res) => {
    fs.readFile('./db/notes.json').then((data) => res.json(JSON.parse(data)))
});

notes.post()