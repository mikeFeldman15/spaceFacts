const React = require('react');
import { Link } from 'react-router-dom';
import '../stylesheets/style.css';
import Marsroverpopup from './Marsroverpopup.jsx';
import Picofday from './picofday.jsx';
import Earthpic from './earthpic.jsx';
import Asteroid from './Asteroid.jsx';

class Boxnumbertwo extends React.Component {

  render() {
    const marspopup = <Marsroverpopup toggleMarsPopup={this.props.toggleMarsPopup} 
    inMarsRover={this.props.inMarsRover}
    roverPic={this.props.roverPic}
    photoDate={this.props.photoDate}
    roverLandingDate={this.props.roverLandingDate}
    roverLaunchDate={this.props.roverLaunchDate}
    roverName={this.props.roverName}
    roverStatus={this.props.roverStatus}
    getMarsRoverPic={this.props.getMarsRoverPic}
    />
    const picofday = <Picofday
                      categories={this.props.categories}
                      idx={this.props.idx}
                      picurl={this.props.picurl}
                      togglepicofday={this.props.togglepicofday}
                      picofdaydescription={this.props.picofdaydescription}
                      moreinfo={this.props.moreinfo}
                      unleashpicinfo={this.props.unleashpicinfo}
                      picofdaytitle={this.props.picofdaytitle}
                      picofdaydate={this.props.picofdaydate}
                      />
    const currentearthpic = <Earthpic
                            categories={this.props.categories}
                            idx={this.props.idx}
                            earthurl={this.props.earthurl}
                            toggleearthpic={this.props.toggleearthpic}
                            />
    const asteroid = <Asteroid
                      fact={this.props.fact}
                      toggleasteroid={this.props.toggleasteroid}
                      newastDate={this.props.newastDate}/>
    if (this.props.idx === 0) {
      return (
        <div className='daboxtwo'>
          <div className='box2containertest'>
            {this.props.picurl ? (
              <div>
                {picofday}
                <h3>{this.props.categories[this.props.idx]}</h3>
                <img id='picofday' src={`${this.props.picurl}`}/>
                <button className='astButton' onClick = {() => {{this.props.goBack(this.props.idx)}}}>Go Back</button>
              </div>
            ) : (
              <div>
                <h3>{this.props.categories[this.props.idx]}</h3>
                <button onClick={this.props.getPicOfDay}>Get Pic Of Day</button>
                <div className='astbtncontainer'>
                  <button className='astButton' onClick = {() => {{this.props.goBack(this.props.idx)}}}>Go Back</button>
                </div>
              </div>
            )}
            
          </div>
        </div>
      )
    }
    if (this.props.idx === 1) {
      return (
        <div className='daboxtwo'>
          <h3>{this.props.categories[this.props.idx]}</h3>
            <form onSubmit={() => {{this.props.getAstAtGivenDate(this.props.astDate)}}}>
              <input id='asteroidSearchDate' 
                    type='text'
                    placeholder='Enter Asteroid Starting Date'
                    value={this.props.astDate}
                    onChange={this.props.handleDateChange}
                    />
              <input id='asteroid' type='submit' value='Get Asteroid'/>
            </form>
            <button id='astLucky' onClick = {this.props.getAFact} > I'm Feeling Lucky</button>
            {this.props.fact ? (
              <div>
                {asteroid}
              </div>
              
                // <button className='astButton' onClick = {() => {{this.props.goBack(this.props.idx)}}}>Go Back</button>
            
            ) : (
              <div>
                <p>Enter a date to display Asteroids</p>
                <div className='astbtncontainer'>
                <button className='astButton' onClick = {() => {{this.props.goBack(this.props.idx)}}}>Go Back</button>
                </div>
              </div>
            )}
        </div>
      )
    }
    if (this.props.idx === 2) {
      return (
        <div className='daboxtwo'>
          {this.props.earthImg ? (
            <div>
              {currentearthpic}
                <h3>{this.props.categories[this.props.idx]}</h3>
                <img id='earthpic' src={`${this.props.earthurl}`}/>
                <button className='astButton' onClick = {() => {{this.props.goBack(this.props.idx)}}}>Go Back</button>
            </div>
          ) : (
            <div>
              <h3>{this.props.categories[this.props.idx]}</h3>
              <h3>See Satellite Image!</h3>
              <form onSubmit={this.props.getEarthImg}>
                <input name='Latitude'
                      type='text'
                      placeholder='Enter Latitude'
                      value={this.props.latitude}
                      onChange={this.props.handleLatChange}>
                </input>
                <input name='Longitude'
                      type='text'
                      placeholder='Enter Longitude'
                      value={this.props.longitude}
                      onChange={this.props.handleLongChange}>
                </input>
                <input type='submit' value='Get Pic'></input>
              </form>
              {/* <button onClick={this.props.getEarthImg}>Get pic</button> */}
              <div className='astbtncontainer'>
                <button className='astButton' onClick = {() => {{this.props.goBack(this.props.idx)}}}>Go Back</button>
              </div>
            </div>
          )}
          
        </div>
      )
    }
    if (this.props.idx === 3) {
      return (
        <div className='daboxtwo'>
          <h3>{this.props.categories[this.props.idx]}</h3>
          {/* <input type='submit' value='See Picture' onClick = {() => {{this.props.getMarsRoverPic}}}/> */}
          {this.props.inMarsRover ? (
            <div>
              {marspopup}
            </div>
            // <p>placeholder</p>
          ) : (
            <div>
              <h3>See A Mars Rover Photo:</h3>
              
              <button className='marsRoverbutton' onClick={this.props.getMarsRoverPic}>See Picture</button>
            </div>
          )}
          <div className='astbtncontainer'>
            <button className='astButton' onClick = {() => {{this.props.goBack(this.props.idx)}}}>Go Back</button>
          </div>
        </div>
      )
    }
    if (this.props.idx === 4) {
      return (
        <div className='daboxtwo'>
          <h1>Placeholder</h1>
          <button className='astButton' onClick = {() => {{this.props.goBack(this.props.idx)}}}>Go Back</button>
        </div>
      )
    }
    if (this.props.idx === 5) {
      return (
        <div className='daboxtwo'>
          <h1>Placeholder</h1>
          <button className='astButton' onClick = {() => {{this.props.goBack(this.props.idx)}}}>Go Back</button>
        </div>
      )
    }
    if (this.props.idx === 6) {
      return (
        <div className='daboxtwo'>
          <h1>Placeholder</h1>
          <button className='astButton' onClick = {() => {{this.props.goBack(this.props.idx)}}}>Go Back</button>
        </div>
      )
    }
    if (this.props.idx === 7) {
      return (
        <div className='daboxtwo'>
          <h1>Placeholder</h1>
          <button className='astButton' onClick = {() => {{this.props.goBack(this.props.idx)}}}>Go Back</button>
        </div>
      )
    }
    if (this.props.idx === 8) {
      return (
        <div className='daboxtwo'>
          <h1>Placeholder</h1>
          <button className='astButton' onClick = {() => {{this.props.goBack(this.props.idx)}}}>Go Back</button>
        </div>
      )
    }
    if (this.props.idx === 9) {
      return (
        <div className='daboxtwo'>
          <h1>Placeholder</h1>
          <button className='astButton' onClick = {() => {{this.props.goBack(this.props.idx)}}}>Go Back</button>
        </div>
      )
    }
  }
}
export default Boxnumbertwo;