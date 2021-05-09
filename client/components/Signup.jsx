const React = require('react');
import { Link } from 'react-router-dom';
import '../stylesheets/style.css';

class Signup extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h1>In Sign Up</h1>
        </div>
        <div className='inner-container'>
          <form onSubmit={() => {{this.props.createNewUser(this.props.username, this.props.password)}}}>
          <div className="signup-input-group">
            <input className='login-input' 
                  name='username'
                  type='text'
                  placeholder='username'
                  value={this.props.username}
                  onChange={this.props.handleUserChange}>
            </input>
            </div>
            <div className="signup-input-group">
            <input 
                  className='login-input'
                  name='password' 
                  type="password" 
                  placeholder='password'
                  value={this.props.password}
                  onChange={this.props.handlePasswordChange}>
            </input>
            </div>
            <input className='login-btn' type='submit' value='Create User'></input>
            <button className='login-btn' onClick={this.props.togglesignup}>Go Back</button>
          </form>
        </div>
      </div>
    )
  }
}

export default Signup;