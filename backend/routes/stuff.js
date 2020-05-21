/*
Imports
*/
const express = require('express');
const router = express.Router();
const stuffController = require('../controllers/stuff');

// add middleware on routes we want to protect
const auth = require('../middleware/auth');

/*
Routes
*/
router.post('/', auth, stuffController.createThing);
router.get('/:id', auth, stuffController.getOneThing);
router.put('/:id', auth, stuffController.updateThing);
router.delete('/:id', auth, stuffController.deleteThing);
router.get('/', auth, stuffController.getAllThings);

/*
Exports
*/
module.exports = router;