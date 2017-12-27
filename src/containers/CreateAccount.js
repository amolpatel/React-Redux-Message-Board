import React, { Component } from 'react';
import InputField from '../components/InputField';
import FooterFormButton from '../components/FooterFormButton';
import SimpleBox from '../components/SimpleBox';
import { createAccount } from '../actions/UserActions';
import { connect } from 'react-redux';
import ErrorAlert from '../components/ErrorAlert';

class CreateAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      error:''
    }
  }

  submitAccount(event) {
    event.preventDefault();
    if(!this.isValid()) {
      return;
    }
    this.props.createAccount(this.state.email, this.state.password)
      .then(() => {
        this.props.history.replace('/')
      })
      .catch(err => {
        this.setState({error: err.message})
      });
  }

  isValid() {
    const { email, password, confirmPassword } = this.state;
    if(email === '' || password === '' || confirmPassword === '') {
      this.setState({
        error: 'Please enter in all fields'
      });
      return false;
    }
    if(password !== confirmPassword) {
      this.setState({
        error: 'Please enter matching passwords'
      });
      return false;
    }
    return true;
  }

  renderBody() {
    const errStyle = {
      borderColor: 'red'
    };
    return (
        <div>
          <form onSubmit={(event) => this.submitAccount(event)}>
            <InputField
                id="email"
                type="text"
                label="Email"
                style={this.state.error ? errStyle : null}
                inputAction={(event) => this.setState({email: event.target.value})}/>
            <InputField
                id="password"
                type="password"
                label="Password"
                style={this.state.error ? errStyle : null}
                inputAction={(event) => this.setState({password: event.target.value})}/>
            <InputField
                id="confirm-password"
                type="password"
                label="Confirm Password"
                style={this.state.error ? errStyle : null}
                inputAction={(event) => this.setState({confirmPassword: event.target.value})}/>
            {this.state.error && <ErrorAlert>{this.state.error}</ErrorAlert>}
            <FooterFormButton
                submitLabel="Create Account"
                otherLabel="Go back"
                goToLink="/Login"
                {...this.props}/>
          </form>
        </div>
    );
  }

  render() {
    return (
        <SimpleBox body={this.renderBody()} title="Create Account"/>
    );
  }
}

export default connect(null, { createAccount })(CreateAccount);