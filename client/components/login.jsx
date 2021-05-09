const React = require('react');
import { Link } from 'react-router-dom';
import '../stylesheets/style.css';

class Login extends React.Component {
  render() {
//{ "url": false }
//require.resolve("path-browserify")
//require.resolve("url/")
//require.resolve("util/")
//require.resolve("stream-http")
    return (
      <div className='popup-box-login'>
        <div className='box'>
        <span className='close-icon' onClick={this.props.togglelogin}>x</span>
          <div className="inner-container">
            {this.props.fromanotherpage ? (
              <div>
              <h3>This requires you to have an account. Please log in or make one by clicking sign up</h3>
              <br></br>
              <div className="header">
              <h1 className='loginh1'>Login</h1>
            </div>
            <div className="box">

              <div className="input-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name="username"
                  className="login-input"
                  placeholder="Username"
                  value={this.props.loginusername}
                  onChange={this.props.handleLoginUsernameChange}/>
              </div>

              <div className="input-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  className="login-input"
                  placeholder="Password"
                  value={this.props.loginpassword}
                  onChange={this.props.handleLoginPasswordChange}/>
              </div>

              <button
                type="button"
                className="login-btn"
                onClick={() => {{this.props.logginIn(this.props.loginusername, this.props.loginpassword)}}}>Login</button>
                <button
                type="button"
                className="login-btn"
                onClick={this.props.sendtosignup}>Sign Up</button>
            </div>
            </div>
            ) : (
              <div>
              <div className="header">
              <h1 className='loginh1'>Login</h1>
            </div>
            <div className="box">

              <div className="input-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name="username"
                  className="login-input"
                  placeholder="Username"
                  value={this.props.loginusername}
                  onChange={this.props.handleLoginUsernameChange}/>
              </div>

              <div className="input-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  className="login-input"
                  placeholder="Password"
                  value={this.props.loginpassword}
                  onChange={this.props.handleLoginPasswordChange}/>
              </div>

              <button
                type="button"
                className="login-btn"
                onClick={() => {{this.props.logginIn(this.props.loginusername, this.props.loginpassword)}}}>Login</button>
                <button
                type="button"
                className="login-btn"
                onClick={this.props.sendtosignup}>Sign Up</button>
            </div>
            </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default Login;

