const React = require('react');
import { Link } from 'react-router-dom';
import '../stylesheets/style.css';

class Asteroid extends React.Component {
  
  render() {
    console.log(this.props.newastDate)
    return (
      <div className='popup-box'>
      <div className='boxpod'>
        <span className='close-icon' onClick={this.props.toggleasteroid}>x</span>
        <div>
          <p>Here are the asteroids that were found on the date: {this.props.newastDate}</p>
          <ul>
            {
              this.props.fact.map(function(name) {
                return <li>{name}</li>
              })
            }
          </ul>
        </div>
      </div>
    </div>
    )
  }
}

export default Asteroid