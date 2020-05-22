/*
Imports
*/
const express = require('express');
const router = express.Router();
const stuffController = require('../controllers/stuff');

// add middleware on routes we want to protect
const auth = require('../middleware/auth');

const multer = require ('../middleware/multer-config');

/*
Routes
*/
router.post('/', auth, multer, stuffController.createThing);
router.get('/:id', auth, stuffController.getOneThing);
router.put('/:id', auth, multer, stuffController.updateThing);
router.delete('/:id', auth, stuffController.deleteThing);
router.get('/', auth, stuffController.getAllThings);

/*
Exports
*/
module.exports = router;