// import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
// import Route from 'react-router-dom/Route';
import Column from './Column.jsx';
import Signup from './Signup.jsx';
import Login from './login.jsx';
import Explore from './explor.jsx';
import '../stylesheets/style.css';
// import { json } from 'express';

const React = require('react');
const User = () => {
  return (<h3>Welcome User</h3>)
}

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      categories: ['Pic Of The Day', 'Asteroids', 'Earth', 'Mars Rover', 'Weather', 'Solar Flare', 'Insight', 'TechTransfer', 'Eartch Observatory', 'Satellites'],
      toRender: ['Pic Of The Day', 'Asteroids', 'Earth', 'Mars Rover', 'Weather', 'Solar Flare', 'Insight', 'TechTransfer', 'Eartch Observatory', 'Satellites'],
      fact: null,
      picurl: null,
      asteroid: null,
      picofday: true,
      astDate: '',
      inSignup: false,
      username: '',
      password: '',
      longitude: null,
      latitude: null,
      earthurl: null,
      earthImg: false,
      inMarsRover: false,
      roverPic: null,
      photoDate: null,
      roverLandingDate: null,
      roverLaunchDate: null,
      roverName: null,
      roverStatus: null,
      picofdaydescription: null,
      unleashpicinfo: false,
      picofdaydate: null,
      picofdaytitle: null,
      inLogin: false,
      loginusername: '',
      loginpassword: '',
      fromanotherpage: false,
      isLoggedIn: false,
      newastDate: null,
      API_KEY: '17UreFogm0QM1Jv23aJsH41ClZNZczwTYtol1jII'
    }

    this.getAFact = this.getAFact.bind(this);
    this.updateState = this.updateState.bind(this);
    this.getPicOfDay = this.getPicOfDay.bind(this);
    this.goBack = this.goBack.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.getAstAtGivenDate = this.getAstAtGivenDate.bind(this);
    this.changeSignUp = this.changeSignUp.bind(this);
    this.createNewUser = this.createNewUser.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleLatChange = this.handleLatChange.bind(this);
    this.handleLongChange = this.handleLongChange.bind(this);
    this.getEarthImg = this.getEarthImg.bind(this);
    this.getMarsRoverPic = this.getMarsRoverPic.bind(this);
    this.toggleMarsPopup = this.toggleMarsPopup.bind(this);
    this.togglepicofday = this.togglepicofday.bind(this);
    this.moreinfo = this.moreinfo.bind(this);
    this.toggleearthpic = this.toggleearthpic.bind(this);
    this.toggleLogin = this.toggleLogin.bind(this);
    this.logginIn = this.logginIn.bind(this);
    this.handleLoginPasswordChange = this.handleLoginPasswordChange.bind(this);
    this.handleLoginUsernameChange = this.handleLoginUsernameChange.bind(this);
    this.toggleasteroid = this.toggleasteroid.bind(this);
    this.togglelogin = this.togglelogin.bind(this);
    this.togglesignup = this.togglesignup.bind(this);
    this.sendtosignup = this.sendtosignup.bind(this);
  }

  //login methods

  toggleLogin() {
    this.setState((state) => {
      state.inLogin = true;
      return state;
    })
  }

  logginIn(username, password) {
    console.log('in login')
    let method = 'POST';
    fetch(`/login/${username}&${password}`, {
      method,
      body: JSON.stringify({user: username, pass: password}),
      headers: { 'Content-Type': 'application/json'},
    })
      .then(result => result.json())
      .then(result => {
        console.log('in the end of the front end loggin')
        this.setState((state) => {
          state.inLogin = false;
          state.isLoggedIn = true;
          state.fromanotherpage = false;
          return state;
        })
      })
      .catch(e => console.log('error in the end of the frontend login', e.stack))
  }

  handleLoginUsernameChange(event) {
    this.setState((state) => {
      state.loginusername = event.target.value;
      return state;
    })
  }

  handleLoginPasswordChange(event) {
    this.setState((state) => {
      state.loginpassword = event.target.value;
      return state;
    })
  }

  togglelogin() {
    this.setState((state) => {
      state.inLogin = false;
      return state;
    })
  }

  sendtosignup() {
    this.setState((state) => {
      state.inSignup = true;
      return state;
    })
  }

  //signup Page Methods:

  changeSignUp() {
    this.setState((state) => {
      state.inSignup = true;
      return state;
    })
  }

  handleUserChange(event) {
    this.setState((state) => {
      state.username = event.target.value;
      return state;
    })
  }

  handlePasswordChange(event) {
    this.setState((state) => {
      state.password = event.target.value;
      return state;
    })
  }

  createNewUser(username, password) {
    event.preventDefault();
    console.log('in new user func')
    let method = 'POST';
    fetch(`/signup/${username}&${password}`, {
      method,
      body: JSON.stringify({user: username, pass: password}),
      headers: { 'Content-Type': 'application/json'},
    })
      .then(res => res.json())
      .then(res => {
        this.setState((state) => {
          console.log('here')
          state.inSignup = false;
          state.isLoggedIn = true;
          state.inLogin = false;
          state.fromanotherpage = false;
          return state;
        })
      })      
    }

    togglesignup() {
      this.setState((state) => {
        state.inSignup = false;
        return state;
      })
    }
  // componentDidMount() {
  //   window.location.replace('https://localhost:5000/')
  // }

  //All Box Methods:

  //this will change what is currently being rendered on the button box
  updateState(idx) {
    console.log(idx);
    this.setState((state) => {
      console.log(state.toRender[idx])
      state.toRender[idx] = 'dont Render';
      return state;
    })
  }

  goBack(idx) {
    this.setState((state) => {
      state.toRender[idx] = state.categories[idx];
      return state;
    })
  }

  //Pic of Day Methods:

  getPicOfDay() {
    fetch('/api/picofday')
    .then(res => res.json())
    .then(({ pic, description, picdate, pictitle }) => {
      console.log('in final set state')
      this.setState((state) => {
        state.picurl = pic;
        state.picofdaydescription = description;
        state.picofdaydate = picdate;
        state.picofdaytitle = pictitle;
        return state;
      })
    })
  }
  

  togglepicofday() {
    this.setState((state) => {
      state.picurl = null;
      return state;
    })
  }

  moreinfo() {
    this.setState((state) => {
      state.unleashpicinfo = true;
      return state;
    })
  }

  //Asteroid Box Methods:

  handleDateChange(event) {
    console.log(event)
    this.setState((state) => {
      console.log(event.target.value)
      state.astDate = event.target.value;
      console.log(state.astDate)
      return state;
    })
  }

  getAstAtGivenDate(value) {
    event.preventDefault();
    let method = 'POST';
    console.log('in given date')
    fetch(`/api/asteroid/givenDate/${value}`, {
      method,
      body: JSON.stringify({date: value}),
      headers: { 'Content-Type': 'application/json'},
    })
    .then(res => res.json())
    .then(({ fact, date }) => {
      this.setState((state) => {
        // console.log(res)
        state.newastDate = date;
        state.astDate = '';
        state.fact = fact;
        return state;
      })
    })
  }

  getAFact() {
    if (this.state.isLoggedIn === false) {
      this.setState((state) => {
        state.inLogin = true;
        state.fromanotherpage = true;
        return state;
      })
      return;
    }
    fetch(`/api/asteroid`)
      .then(res => res.json())
      .then(({ fact, date }) => {
        console.log('in react')
        // console.log(res);
        this.setState((state) => {
          state.fact = fact;
          state.newastDate = date;
          return state;
        })
      })
    }

    toggleasteroid() {
      this.setState((state) => {
        state.fact = false;
        return state;
      })
    }

  //Earth Box Methods:

  handleLatChange(event){
    this.setState((state) => {
      state.latitude = event.target.value;
      return state;
    })
  }

  handleLongChange(event) {
    this.setState((state) => {
      state.longitude = event.target.value;
      return state;
    })
  }

  getEarthImg() {
    //need to take in the lat and long
    console.log('in earth img front end')
    event.preventDefault();
    fetch(`/api/earth`)
      .then(res => res.json())
      .then(res => {
        console.log('in promise before state')
        this.setState((state) => {
          console.log('in end of promise')
          console.log(res)
          state.earthurl = res;
          state.earthImg = true;
          return state;
        })
      })
    }

    toggleearthpic() {
      console.log('in earth pic')
      this.setState((state) => {
        console.log('in earth pic')
        state.earthImg = false;
        console.log(state.earthImg)
        return state;
      })
    }

    //Mars Rover Methods:
    // 
    getMarsRoverPic() {
    // event.preventDefault();
    console.log('in mars rover react')
    fetch(`/api/marsRover`)
      .then(res => res.json())
      .then(({ roverPic, photoDate, roverLandingDate, roverLaunchDate, roverName, roverStatus}) => {
        this.setState((state) => {
          console.log('here')
          state.inMarsRover = true;
          state.roverPic = roverPic;
          state.photoDate = photoDate;
          state.roverLandingDate = roverLandingDate;
          state.roverLaunchDate = roverLaunchDate;
          state.roverName = roverName;
          state.roverStatus = roverStatus;
          return state;
        })
      })
    }

    toggleMarsPopup() {
      this.setState((state) => {
        console.log(state.inMarsRover)
        state.inMarsRover = false;
        return state;
      })
    }

  render() {
    const column = [];
    for (let i = 0; i < 5; i++) {
      column.push(<Column 
                  index={i} 
                  categories={this.state.categories} 
                  toRender={this.state.toRender}                  
                  fact={this.state.fact}
                  picurl={this.state.picurl}
                  astDate={this.state.astDate}
                  longitude={this.state.longitude}
                  earthurl={this.state.earthurl}
                  latitude={this.state.latitude}
                  earthImg={this.state.earthImg}
                  inMarsRover={this.state.inMarsRover}
                  roverPic={this.state.roverPic}
                  photoDate={this.state.photoDate}
                  roverLandingDate={this.state.roverLandingDate}
                  roverLaunchDate={this.state.roverLaunchDate}
                  roverName={this.state.roverName}
                  roverStatus={this.state.roverStatus}
                  picofdaydescription={this.state.picofdaydescription}
                  unleashpicinfo={this.state.unleashpicinfo}
                  picofdaydate={this.state.picofdaydate}
                  picofdaytitle={this.state.picofdaytitle}
                  newastDate={this.state.newastDate}
                  updateState={this.updateState} 
                  getAFact={this.getAFact}
                  getPicOfDay={this.getPicOfDay}
                  goBack={this.goBack}
                  handleDateChange={this.handleDateChange}
                  getAstAtGivenDate={this.getAstAtGivenDate}
                  getEarthImg={this.getEarthImg}                  
                  handleLongChange={this.handleLongChange}                  
                  handleLatChange={this.handleLatChange}
                  getMarsRoverPic={this.getMarsRoverPic}
                  toggleMarsPopup={this.toggleMarsPopup}
                  togglepicofday={this.togglepicofday}
                  moreinfo={this.moreinfo}
                  toggleearthpic={this.toggleearthpic}
                  toggleasteroid={this.toggleasteroid}

                  />)
    }
    const exploring = <Explore getAFact={this.getAFact} fact={this.state.fact}/>
    const signupPage = <Signup
                        username={this.state.username}
                        password={this.state.password}
                        createNewUser={this.createNewUser}
                        handleUserChange={this.handleUserChange}
                        handlePasswordChange={this.handlePasswordChange}
                        togglesignup={this.togglesignup}
                        />
    const loginPage = <Login
                      logginIn={this.logginIn}
                      loginusername={this.state.loginusername}
                      loginpassword={this.state.loginpassword}
                      handleLoginUsernameChange={this.handleLoginUsernameChange}
                      handleLoginPasswordChange={this.handleLoginPasswordChange}
                      togglelogin={this.togglelogin}
                      fromanotherpage={this.state.fromanotherpage}
                      sendtosignup={this.sendtosignup}/>
                      
    // const signUp = <Signup/>
    // column = <Column/>
    return (
      <div className='router'>
        <div id='facts-container'>
        <div id='space-facts'>Space Facts</div>
        </div>
        {this.state.inSignup ? (
          <div>
            {signupPage}
          </div>
         ) : (
            <div>
            <div>
            {this.state.inLogin ? (
              <div>
                {loginPage}
              </div>
            ): (
            <Switch>
            <Route path = '/' exact>
              <div id='mainpage'>
                <div id='mainpage-columns'>
                  {column}
                </div>
              </div>
            </Route>
            <Route path = '/about' exact strict render={
              () => {
                return (
                <h2>Welcome about</h2>)
              }
            }
            />
            <Route path = '/user/:username' exact strict
              component = {User}
            />
          </Switch>
          )}
          </div>
          <div>
            <button className='signupBtn' onClick={this.changeSignUp}>Sign Up</button>
            <button className='loginButen' onClick={this.toggleLogin}>Login In</button>
            
          </div>
        {/* <h1 className='rainbowh1'>Future Awesome Material to come</h1> */}
        </div>
         )}
      </div>
    )
  }
}

export default App;

