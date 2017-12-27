import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, reset } from 'redux-form';
import { required } from '../helpers/ValidateForm';

class SubmitComment extends Component {

  onSubmit(field) {

  }

  render() {
    const {handleSubmit} = this.props;
    return (
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
              name="comment"
              component={this.commentComponent}
              validate={required}
            />
        </form>
    )
  }
}

export default reduxForm({
  form: 'SubmitCommentForm'
})(connect(null, {})(SubmitComment))