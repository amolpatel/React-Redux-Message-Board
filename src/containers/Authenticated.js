import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Authenticated extends Component {
  componentDidUpdate() {
    const { userLoading, user } = this.props;
    if(userLoading == false && !user) {
      this.props.history.push('/Login');
    }
  }

  render() {
    const { user, children, userLoading } = this.props;
    return (userLoading === false && user) ? children : null;
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    userLoading: state.loading.user
  };
}

export default withRouter(connect(mapStateToProps)(Authenticated));
