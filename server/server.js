const express = require('express');
const path = require('path');
const db = 'mongodb+srv://mikeFeldman15:starwarscodesmith@cluster0.ebamx.mongodb.net/nasaproject?retryWrites=true&w=majority'
const PORT = 5000;
const app = express();
const routers = require('./routes/api')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const userController = require('./controllers/userController');
const cookieController = require('./controllers/cookieController');

app.use(express.static(path.join(__dirname, '../public')));

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
// app.use(sendFile(path.resolve(__dirname, '../public/index.html')));

// app.get('/about/', (req, res) => {
//   console.log('in home');
//   res.sendFile(path.resolve(__dirname, '../public/index.html'));
// })

// app.get('/user/:peter', (req, res) => {
//   console.log('in user');
//   res.sendFile(path.resolve(__dirname, '../public/index.html'));
// })


// app.get('/signup', (req, res) => {
//   //need to render the signup page for here
// });

app.use('/api', routers)
app.use('/databse', dbrouters)

app.use('/signup', signuproute)

app.post('/signup/:user&:pass', userController.createUser, cookieController.setSSIDCookie, cookieController.startSession, (req, res) => {
  console.log('in server5')
  const { temp } = res.locals;
  res.status(200).json(temp);
})

app.post('/login/:user&:pass', userController.verifyUser, cookieController.setSSIDCookie, cookieController.startSession, (req, res) => {
  console.log('in end of login from the back');
  const temp = 'hi';
  res.status(200).json(temp);
})
// )

app.get('/', (req, res) => {
  res.send('from backend')
  // res.sendFile(path.resolve(__dirname, '../public/index.html'));
})

// const mongoURI = process.env.NODE_ENV === 'test' ? 'mongodb://localhost/unit11test' : 'mongodb://localhost/unit11dev';
// mongoose.connect(mongoURI);

mongoose.connect(db, {useNewUrlParser: true})
  .then(() => {
    app.listen(PORT, () => {console.log(`listening to Port: ${PORT}`)});
  })
  .catch(e => console.log('error connecting to db', e))

module.exports = app;

