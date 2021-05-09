const React = require('react');
import { Link } from 'react-router-dom';
import '../stylesheets/style.css';

class Earthpic extends React.Component {
  render() {
    return (
      <div className='popup-box'>
        <div className='box'>
          <span className='close-icon' onClick={this.props.toggleearthpic}>x</span>
          <div className='picofearth'>
            <img className='earthpic' src={`${this.props.earthurl}`}/>
          </div>          
        </div>
      </div>
    )
  }
}


export default Earthpic