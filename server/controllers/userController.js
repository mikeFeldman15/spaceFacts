const User = require('../modals/userModels');
const bcrypt = require('bcrypt');
const userController = {};

userController.createUser = (req, res, next) => {
  console.log('in user create');
  console.log(req);
  console.log(req.params)
  const saltRounds = 10;
  bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(req.params.pass, salt, function(err, newPass) {
        User.create({username: req.params.user, password: newPass})
        .then(user => {
          res.locals.userId = user._id;
          console.log(user);
          console.log(res.locals.userId)
          return next();
        })
        .catch(e => console.log('error in the create user', e.stack))      
    })
  })  
}


userController.verifyUser = (req, res, next) => {
  console.log('in verify user middlewear');
        User.find({
          username: req.params.user,
        })
        .then(result => {
          if (result[0] === undefined) {
            console.log('did not find the user')
            //send to sign up page?
            return next();
          }
          else {
            console.log(result);
            res.locals.userId = result[0]._id;
            bcrypt.compare(req.params.pass, result[0].password)
              .then(data => {
                console.log('match')
                console.log(data)
                console.log(res.locals.userId)
                return next();
              })
              .catch(e => console.log('passwords do not match', e))
            // res.locals.userId = result[0]._doc
            
          }
        })
        .catch(err => console.log('error in finding the user', e.stack))
}

module.exports = userController;