/*
Imports
*/
const ThingModel = require('../models/thing');

/*
CRUD: Create a thing
*/
exports.createThing = (req, res, next) => {
  const thingObject = JSON.parse(req.body.thing);

  delete thingObject._id;

  const thing = new ThingModel({
    ...thingObject,
    imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
  });

  thing.save()
  .then(() => res.status(201).json({message : 'Objet enregistré !'}))
  .catch(error => res.status(400).json({error: error}));
};
//

/*
CRUD: Get all the things
*/
  exports.getAllThings = (req, res, next) => {

    ThingModel.find()
    .then( (things) => {  res.status(200).json(things)} )
    .catch( (error) => {res.status(400).json({ error:error })} );
  };
//

/*
CRUD: Get one thing
*/
  exports.getOneThing = (req, res, next) => {

    ThingModel.findOne( { _id: req.params.id} )
    .then(thing => res.status(200).json(thing))
    .catch(error => res.status(404).json({ error }));
  };
//

/*
CRUD: Update a thing
*/
  exports.updateThing = (req, res, next) => {

    const thingObject = req.file
    ? {
      ...JSON.parse(req.body.thing),
      imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    }
    : {...req.body};

    ThingModel.updateOne({_id: req.params.id}, {...thingObject, _id: req.params.id})
    .then(() => res.status(201).json({ message : 'Objet modifié !' }))
    .catch(error => res.status(400).json({ error:error }));
  };
//

/*
CRUD: detelete a thing
*/
  exports.deleteThing = (req, res, next) => {

    ThingModel.deleteOne({ _id: req.params.id})
    .then(() => res.status(201).json({ message : 'Objet supprimé !' }))
    .catch(error => res.status(400).json({ error:error }));
  };
//

