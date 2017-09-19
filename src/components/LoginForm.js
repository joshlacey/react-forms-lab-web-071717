import React from 'react';

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    }, console.log(this.state))

    // if(event.target.name === "username") {
    //   this.setState({
    //     username: event.target.value,
    //   }, () => console.log(this.state))
    // } else if (event.target.name === "password") {
    //   this.setState({
    //     password: event.target.value,
    //   }, () => console.log(this.state))
    // }

  }

  submitSomething = (event) => {
    event.preventDefault()
    if(this.state.username.length !== 0 && this.state.password.length !== 0){
      console.log('submitted')
    }
  }

  render() {

    return (
      <form onSubmit={this.submitSomething}>
        <div>
          <label>
            Username
            <input id="test-username" type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleInputChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password"
               name="password"
               value={this.state.password}
               onChange={this.handleInputChange}
               />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
