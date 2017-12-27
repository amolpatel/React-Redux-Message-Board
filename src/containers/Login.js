import React, { Component } from 'react';
import SimpleBox from '../components/SimpleBox';
import InputField from '../components/InputField';
import FooterFormButton from '../components/FooterFormButton';
import { connect } from 'react-redux';
import { login, getUser, googleLogin, twitterLogin } from '../actions/UserActions';
import ErrorAlert from '../components/ErrorAlert';
import SocialMediaLogin from '../components/SocialMediaLogin';

class Login extends Component {
  // storing in React state
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: ''
    }
  }

  componentWillMount() {
    if(this.props.user !== null) {
      this.props.history.push('/');
    }
  }


  submitLogin(event) {
    event.preventDefault();
    this.props.login(this.state.email, this.state.password).catch(err => {
      this.setState({
        error: err
      });
    });
  }

  renderBody() {
    const errStyle = {
      borderColor: 'red'
    };
    return (
        <form onSubmit={event => {this.submitLogin(event);}}>
          <div>
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
            {this.state.error && <ErrorAlert>Your username or password is incorrect!</ErrorAlert>}
            <FooterFormButton
                submitLabel="Sign in"
                otherLabel="Create Account"
                goToLink="/CreateAccount"
                {...this.props}/>
            <SocialMediaLogin {...this.props} />
          </div>
        </form>
    );
  }
  render() {
    return (
        <div>
          <SimpleBox title="Sign in" body={this.renderBody()}/>
        </div>
    )
  }
}

function mapStateToProps(state) {
  return { user: state.user};
}

export default connect(mapStateToProps, { login, getUser, googleLogin, twitterLogin })(Login);