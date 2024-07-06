//Imports
const express = require('express')
const path = require('path')

const api = require('./routes/index.js')
console.log(api);
const PORT = process.env.PORT || 3001;

const app = express();

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);
app.use(express.static('public'));

//GET routes
app.get('/', (req, res) =>
res.sendFile(path.join(__dirname, '/public/index.html' ))
 );


 app.get('/notes', (req, res) => 
res.sendFile(path.join(__dirname,'/public/notes.html'))
);

app.listen(PORT, () => 
console.log("We're listening!"));