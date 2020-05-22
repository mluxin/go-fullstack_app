/*
Imports
*/
const multer = require('multer');

const MIME_TYPES = {
  'image/jpg': 'jpg',
  'image/jpeg': 'jpg',
  'image/png': 'png',
}

// register in the disk
const storage = multer.diskStorage({

  destination: (req, file, callback) => {
    callback(null, 'images')
  },

  // Generate a name for the file
    filename: (req, file, callback) => {
      // split() to delete spaces + join() to add underscores instead of spaces
      const name = file.originalname.split(' ').join('_');
      // aply file extension
      const extension = MIME_TYPES[file.mimetype];
      // add timestamp to make the file unique
      callback(null, name + Date.now() + '.'+ extension)
  }
})

/*
Exports
*/
// single() = unique file and not a group of files
module.exports = multer({ storage }).single('image');