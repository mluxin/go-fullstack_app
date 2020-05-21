/*
Imports
*/
const express = require('express');
const router = express.Router();
const stuffController = require('../controllers/stuff');

/*
Routes
*/
router.post('/', stuffController.createThing);
router.get('/:id', stuffController.getOneThing);
router.put('/:id', stuffController.updateThing);
router.delete('/:id', stuffController.deleteThing);
router.get('/', stuffController.getAllThings);

/*
Exports
*/
module.exports = router;