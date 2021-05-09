const React = require('react');
import { Link } from 'react-router-dom';
import '../stylesheets/style.css';

class Picofday extends React.Component {

  render() {
    return (
      <div className='popup-box'>
        <div className='boxpod'>
          <span className='close-icon' onClick={this.props.togglepicofday}>x</span>
          <div className='picofdayimg'>
            <img className='roverpic' src={`${this.props.picurl}`}/>
          </div>
          {this.props.unleashpicinfo ? (
            <div>
               <div className='textitems'>
                  <label className='labels'>Picture Name:</label>
                  <p className='afterlabel'>{this.props.picofdaytitle}</p>
                  <br></br>
                  <label className='labels'>Picture Date:</label>
                  <p className='afterlabel'>{this.props.picofdaydate}</p>
                  <br></br>
                </div>
                <br></br>
              <b>Picture Description:</b>
              <br></br>
              <p>{this.props.picofdaydescription}</p>
              <br></br>
             
            </div>
            
          ) : (
            <div className='pod'>
              <button className='big-button' onClick={this.props.moreinfo}>Get More Info About Pic</button>
            </div>
          )}
          
        </div>
      </div>
    )
  }
}

export default Picofday