// import React, { Component } from 'react';
const React = require('react');
import { Link } from 'react-router-dom';
import '../stylesheets/style.css';
import Boxcomponent from './Boxcomponent.jsx';
import Boxnumbertwo from './boxnumbertwo.jsx';
import asteroid from '../assests/asteroid.png';
import earth from '../assests/earth.jpg';
import earthObservatory from '../assests/earthObservatory.jpg';
import insight from '../assests/insight.jpg';
import marsrover from '../assests/marsrover.jpg';
import picofday from '../assests/picofday.jpg';
import satellite from '../assests/satellite.jpg';
import solarflare from '../assests/solarflare.jpg';
import tech from '../assests/tech.jpeg';
import weather from '../assests/weather.jpg';

class Column extends React.Component {
  render() {
    const boxes = [];
    const realpics = [picofday, asteroid, earth, marsrover, weather, solarflare, insight, tech, earthObservatory, satellite];
    console.log('to render:')
    console.log(this.props.toRender)
    for (let i = 0; i < 2; i++) {
      if (i === 1) this.props.index += 5;
      if (this.props.toRender[this.props.index] !== 'dont Render') {
        boxes.push(<Boxcomponent categories = {this.props.categories} idx={this.props.index} image={realpics[this.props.index]} updateState = {this.props.updateState}/>)
      }
      else if (this.props.toRender[this.props.index] === 'dont Render') {
        boxes.push(<Boxnumbertwo 
                    getAFact={this.props.getAFact} 
                    fact={this.props.fact} 
                    idx={this.props.index}
                    picurl={this.props.picurl}
                    categories={this.props.categories}
                    getPicOfDay={this.props.getPicOfDay}
                    goBack={this.props.goBack}
                    astDate={this.props.astDate}
                    handleDateChange={this.props.handleDateChange}
                    getAstAtGivenDate={this.props.getAstAtGivenDate}
                    earthurl={this.props.earthurl}
                    getEarthImg={this.props.getEarthImg}
                    longitude={this.props.longitude}
                    handleLongChange={this.props.handleLongChange}
                    latitude={this.props.latitude}
                    handleLatChange={this.props.handleLatChange}
                    earthImg={this.props.earthImg}
                    inMarsRover={this.props.inMarsRover}
                    getMarsRoverPic={this.props.getMarsRoverPic}
                    roverPic={this.props.roverPic}
                    photoDate={this.props.photoDate}
                    roverLandingDate={this.props.roverLandingDate}
                    roverLaunchDate={this.props.roverLaunchDate}
                    roverName={this.props.roverName}
                    roverStatus={this.props.roverStatus}
                    toggleMarsPopup={this.props.toggleMarsPopup}
                    togglepicofday={this.props.togglepicofday}
                    picofdaydescription={this.props.picofdaydescription}
                    moreinfo={this.props.moreinfo}
                    unleashpicinfo={this.props.unleashpicinfo}
                    picofdaytitle={this.props.picofdaytitle}
                    picofdaydate={this.props.picofdaydate}
                    toggleearthpic={this.props.toggleearthpic}
                    toggleasteroid={this.props.toggleasteroid}
                    newastDate={this.props.newastDate}
                    />)
      }
    }
    return (
      <div id='column'>
        {/* <h2>In Column</h2> */}
        {boxes}
      </div>
    )
  }
}

export default Column;