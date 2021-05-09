const React = require('react');
import { Link } from 'react-router-dom';
import '../stylesheets/style.css';

class Marsroverpopup extends React.Component {
  render() {
    console.log(this.props.roverName)
    return (
      <div className='popup-box'>
        <div className='box'>
          <span className='close-icon' onClick={this.props.toggleMarsPopup}>x</span>
          <b>Rover Name: {this.props.roverName}</b>
          <p>Rover Launch Date: {this.props.roverLaunchDate}</p>
          <p>Rover Landing Date: {this.props.roverLandingDate}</p>
          <p>Rover Status: {this.props.roverStatus}</p>
          <img className='roverpic' src={`${this.props.roverPic}`}/>
          <p>Date of Image: {this.props.photoDate}</p>
          <button className='seeanotherroverphoto' onClick={this.props.getMarsRoverPic}>See Another</button>
        </div>
      </div>
    )
  }
}


export default Marsroverpopup