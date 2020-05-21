/*
Imports
*/
const bcrypt = require ('bcrypt');
const User = require('../models/User');


/*
Methods
*/
exports.signup = (req, res, next) => {

  // Password crypt
  bcrypt.hash(req.body.password, 10) // 10=how many rounds you execute the hash

  // Create and Save in th db a new user with a crypted password
  .then(hash => {
    const user = new User ({
      email: req.body,
      password: hash,
    });
    user.save()
    .then(() => res.status(201).json({ message: 'Utilisateur créer'}) )
    .catch(error => res.status(400).json({ error:error }) );
  })

  .catch(error => res.status(500).json({ error:error }) );
};


exports.login = (req, res, next) => {

};