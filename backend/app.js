const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Thing = require('./models/thing');

mongoose.connect('mongodb+srv://johndoe:johndoe12345@cluster0-lcnd1.mongodb.net/test?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

// .use is for all the routes and json() is a method of body-parser object
app.use(bodyParser.json());

app.post('/api/stuff', (req, res, next) => {
  delete req.body._id;
  const thing = new Thing({
    ...req.body // copy fields in body request
  });
  //register object in DB and return a promise
  thing.save()
  .then(() => res.status(201).json({ message : 'Objet enregistré !' }))
  .catch(error => res.status(400).json({ error:error }));
});

app.get('/api/stuff/:id', (req, res, next) => {
  Thing.findOne({ _id: req.params.id})
  .then(thing => res.status(200).json(thing))
  .catch(error => res.status(404).json({ error }));
});


app.get('/api/stuff', (req, res, next) => {
  Thing.find()
  .then( things => res.status(200).json(things))
  .catch(error => res.status(400).json({ error:error }));
});

module.exports = app;