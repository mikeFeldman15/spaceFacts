const fs = require('fs');
const path = require('path');
const app = require('../server');
const fetch = require("node-fetch");
// const User = require('../modals/userModel');
// const bcrypt = require('bcrypt');
// const userController = {};

const fileController = {};


fileController.getFactFromDate = (req, res, next) => {
  const { date } = req.params;
  fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${date}&api_key=17UreFogm0QM1Jv23aJsH41ClZNZczwTYtol1jII`, {
    headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
    .then(response => response.json())
    .then(response => {
      res.locals.fact = [];
      console.log(response.near_earth_objects[date])
      for (let i = 0; i < response.near_earth_objects[date].length; i++) {
        res.locals.fact.push(response.near_earth_objects[date][i].name)
      }
      res.locals.astDate = date;
      return next();
    })
    .catch(err => console.log('error in the backend at getFact', err))
}

fileController.getFact = (req, res, next) => {
  let year = Math.floor(Math.random() * (2020 - 1950) + 1950);
  let month = Math.floor(Math.random() * (12 - 01) + 01);
  if (String(month).split('').length === 1) {
    month = `0${month}`;
    console.log(month);
  }
  let day = Math.floor(Math.random() * (28 - 01) + 01);
  if (String(day).split('').length === 1) day = '0' + day;
  const astStartDate = year + '-' + month + '-' + day;
  // let astStartDate = '2000-01-10';
  fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${astStartDate}&api_key=17UreFogm0QM1Jv23aJsH41ClZNZczwTYtol1jII`, {
    headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
     }
  })
    .then(response => response.json())
    .then(response => {
      res.locals.fact = [];
      console.log(response.near_earth_objects[astStartDate])
      for (let i = 0; i < response.near_earth_objects[astStartDate].length; i++) {
        res.locals.fact.push(response.near_earth_objects[astStartDate][i].name)
      }
      res.locals.astDate = astStartDate;
      return next();
    })
    .catch(err => console.log('error in the backend at getFact', err))
}

fileController.getPic = (req, res, next) => {
  console.log('in fetch from getPic')
  fetch(`https://api.nasa.gov/planetary/apod?api_key=17UreFogm0QM1Jv23aJsH41ClZNZczwTYtol1jII`)
    .then(response => response.json())
    .then(response => {
      console.log(response);
      res.locals.pic = response.url;
      res.locals.description = response.explanation;
      res.locals.picdate = response.date;
      res.locals.pictitle = response.title;
      // console.log('res locals: ' + res.locals.pic)
      return next();
    })
    .catch(err => console.log('error in the backend at getPic', err))
}

fileController.earthpic = (req, res, next) => {
  console.log('in file controller earth pic');
  //need lat and long to come from user
  let lat = 29.78;
  let long = -95.33;
  fetch(`https://api.nasa.gov/planetary/earth/assets?lon=${long}&lat=${lat}&date=2018-01-01&&dim=0.10&api_key=17UreFogm0QM1Jv23aJsH41ClZNZczwTYtol1jII`)
    .then(response => response.json())
    .then(response => {
      console.log(response)
      res.locals.url = response.url;
      return next();
    })
    .catch(e => console.log('in file controller earth pic', e.stack))
}

fileController.marsRoverPic = (req, res, next) => {
  console.log('in mars rover file controller');
  fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=17UreFogm0QM1Jv23aJsH41ClZNZczwTYtol1jII`)
  // fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=17UreFogm0QM1Jv23aJsH41ClZNZczwTYtol1jII`)
    .then(response => response.json())
    .then(response => {
      const arrLength = response.photos.length;
      const num = Math.floor(Math.random() * arrLength) + 1;
      res.locals.roverName = response.photos[num].rover.name
      res.locals.roverPic = response.photos[num].img_src;
      res.locals.photoDate = response.photos[num].earth_date;
      res.locals.roverLandingDate = response.photos[num].rover.landing_date;
      res.locals.roverLaunchDate = response.photos[num].rover.launch_date;
      res.locals.roverStatus = response.photos[num].rover.status;
      return next()
    })
    .catch(e => console.log('error in the mars rover filecontroller', e.stack))
}

module.exports = fileController;