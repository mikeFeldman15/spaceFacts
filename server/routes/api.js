const express = require('express');

const fileController = require('../controllers/fileController');

const router = express.Router();


router.post('/asteroid/givenDate/:date', fileController.getFactFromDate, (req, res)=> {
  let { fact } = res.locals
  const date = res.locals.astDate;
  console.log(date);
  res.status(200).json({fact: fact, date: date})
})

router.get('/asteroid', fileController.getFact, (req, res)=> {
  let { fact } = res.locals
  const date = res.locals.astDate;
  console.log(date);
  res.status(200).json({fact: fact, date: date})
})

router.get('/picofday', fileController.getPic, (req, res)=> {
  let { pic, description, picdate, pictitle } = res.locals
  console.log('in final get')
  res.status(200).json({pic: pic, description: description, picdate: picdate, pictitle: pictitle})
})


router.get('/earth', fileController.earthpic, (req, res) => {
  const { url } = res.locals;
  console.log(url)
  res.status(200).json(url)
})

router.get('/marsRover', fileController.marsRoverPic, (req, res) => {
  console.log('in end of middleware')
  const { roverPic, photoDate, roverLandingDate, roverLaunchDate, roverName, roverStatus} = res.locals;
  console.log(roverName);
  res.status(200).json({roverPic: roverPic, photoDate: photoDate, roverLandingDate: roverLandingDate, roverLaunchDate: roverLaunchDate, roverName: roverName, roverStatus: roverStatus})
})
// {roverPic: roverPic, photoDate: photoDate, roverLandingDate: roverLandingDate, roverLaunchDate: roverLaunchDate, roverName: roverName, roverStatus: roverStatus}

module.exports = router;