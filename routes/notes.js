const router = require('express').Router();
const util = require('util');
const fs = require('fs')
const readFile = util.promisify(fs.readFile)
const writeFile = util.promisify(fs.writeFile)

router.get('/', (req, res) => {
    readFile('./db/notes.json')
    .then((data) => res.json(JSON.parse(data)))
});

//Should this be built out, writing into the file? As in exactly?
router.post('/', (req, res) => {
    readFile('./db/notes.json')
    .then((data) => {
        const notes = JSON.parse(data)
        const newNote = {
            ...req.body,
            id:  Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1)
        }
        notes.push(newNote)
        writeFile('./db/notes.json', JSON.stringify(notes))
        .then((data)=>res.json(newNote))
        }) 
   
});

router.delete('/:id', (req,res) => {
    readFile('./db/notes.json')
    .then((data) => {
        const notes = JSON.parse(data)
        const updatedNotes = notes.filter(note=> note.id !== req.params.id)
        writeFile('./db/notes.json', JSON.stringify(updatedNotes))
        .then((data)=>res.json(updatedNotes))
        }) 
}
)

module.exports = router;