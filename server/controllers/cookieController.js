const User = require('../modals/userModels');
const Cookie = require('../modals/cookieModels');
// const bcrypt = require('bcrypt');
const cookieController = {};

cookieController.setSSIDCookie = (req, res, next) => {
  const id = res.locals.userId;
  console.log('in cookie')
  console.log(id);
  res.cookie('ssid', id, {httpOnly: true}).status(200);
  return next();
}

cookieController.startSession = (req, res, next) => {
  Cookie.create({cookieId: res.locals.userId})
    .then(response => {
      res.locals.temp = 'hi';
      return next();
    })
    .catch(e => console.log('Error in start session', e.stack))
}

module.exports = cookieController;