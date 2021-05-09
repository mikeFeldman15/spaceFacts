const React = require('react');
import { Link } from 'react-router-dom';
import '../stylesheets/style.css';

class Boxcomponent extends React.Component {
  render() {
    return (
      <div className='daboxcontainer'>
        {/* <h2>in box</h2> */}
        <button className='dabox' onClick = {() => {this.props.updateState(this.props.idx)}}>{this.props.categories[this.props.idx]} <img className='boximg' src={`${this.props.image}`}/> </button>
      </div>
    )
  }
}

export default Boxcomponent