import React, { Component } from 'react';
import SimpleBox from '../components/SimpleBox';
import InputField from '../components/InputField';
import FooterFormButton from '../components/FooterFormButton';

export default class Login extends Component {
  // storing in React state
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }
  renderBody() {
    return (
        <div>
          <InputField
              id="email"
              type="text"
              label="Email"
              inputAction={(event) => this.setState({email: event.target.value})}/>
          <InputField
              id="password"
              type="password"
              label="Password"
              inputAction={(event) => this.setState({password: event.target.value})}/>
          <FooterFormButton
              submitLabel="Sign in"
              otherLabel="Create Account"
              goToLink="/CreateAccount"
              {...this.props}/>
        </div>
    )
  }
  render() {
    return (
        <div>
          <SimpleBox title="Sign in" body={this.renderBody()}/>
        </div>
    )
  }
}