const express = require('express');
const Thing = require('../models/thing');

const router = express.Router();

// Display all
router.post('/', (req, res, next) => {
  delete req.body._id;
  const thing = new Thing({
    title: req.body.title,
    description: req.body.description,
    imageUrl: req.body.imageUrl,
    price: req.body.price,
    userId: req.body.userId
  });
  thing.save()
  .then(() =>
    res.status(201).json({message : 'Objet enregistré !'})
  )
  .catch(error =>
    res.status(400).json({error: error})
  );
});

// Display one thing
router.get('/:id', (req, res, next) => {
  Thing.findOne( { _id: req.params.id} )
  .then(thing =>
    res.status(200).json(thing))
  .catch(error =>
    res.status(404).json({ error }));
});

// Update a thing
router.put('/:id', (req, res, next) => {
  const thing = new Thing({
    _id: req.params.id,
    title: req.body.title,
    description: req.body.description,
    imageUrl: req.body.imageUrl,
    price: req.body.price,
    userId: req.body.userId
  });
  Thing.updateOne({_id: req.params.id},thing)
  .then(() =>
    res.status(201).json({ message : 'Objet modifié !' }))
  .catch(error =>
    res.status(400).json({ error:error }));
})

// Display a thing
router.delete('/:id', (req, res, next) => {
  Thing.deleteOne({ _id: req.params.id})
  .then(() =>
    res.status(201).json({ message : 'Objet supprimé !' }))
  .catch(error =>
    res.status(400).json({ error:error }));
})


router.get('/', (req, res, next) => {
  Thing.find()
  .then( things =>
    res.status(200).json(things))
  .catch(error =>
    res.status(400).json({ error:error }));
});


module.exports = router;