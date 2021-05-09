const React = require('react');
import { Link } from 'react-router-dom';
import '../stylesheets/style.css';

class explore extends React.Component {
  render() {
    console.log('in extends:')
    console.log(this.props.fact)
    return (
      <div>
        <h1>From explore</h1>
        <p>{this.props.fact}</p>
        <button type='button' onClick = {this.props.getAFact}></button>
        <div>
          {this.props.fact ? (
            <div>
              <p>{this.props.fact}</p>
            </div>
          ) : (
            <div>
              <p>Click for more info</p>
            </div>
          )}
        </div>
      </div>
    )
  }
}


export default explore