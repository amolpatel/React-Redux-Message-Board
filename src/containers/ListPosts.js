import React, { Component } from 'react';
import '../styles/App.css';
import _ from 'lodash';
import { connect } from 'react-redux';
import { getPosts, savePost, deletePost } from '../actions/PostActions';
import { getUser, logout } from '../actions/UserActions';
import { Field, reduxForm, reset } from 'redux-form';
import PostCard from '../components/PostCard';
import Link from 'react-router-dom/es/Link';

class App extends Component {


  // Every post is going to have a post
  // Need unique identifier to loop over a list
  renderPosts() {
    return _.map(this.props.posts, (post, key) => {
      return (
          <PostCard key={key}>
            <Link to={`/${key}`}>
              <h3 className="card-title">
                {post.title}
               </h3>
            </Link>
            <h3 className="card-title">{post.title}</h3>
            <p className="card-text">{post.body}</p>
            <button className="btn btn-danger" onClick={() => { this.props.deletePost(key)}}>Delete</button>
          </PostCard>
      );
    });
  }

  renderField(field) {
    return (
        <input
            type="text"
            {...field.input}
            placeholder={`Please enter a ${field.label}`}
            className={field.class}
            />
    );
  }

  onSubmit(values) {
    this.props.savePost(values).then(this.props.dispatch(reset('NewPost')));
  }

  render() {
    const { handleSubmit } = this.props; // pull from props
    return (
        <div>
          <div className="navbar">
            <button className="btn btn-danger" onClick={() => {this.props.logout()}}>Sign out</button>
          </div>
          <div className="container">
            <div className="main">
              {this.renderPosts()}
            </div>
            <div className="navbar fixed-bottom">
              <form className="container"  onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    name="title"
                    component={this.renderField}
                    label="title"
                    class="footer-title"
                    />
                <Field
                    name="body"
                    component={this.renderField}
                    label="body"
                    class="footer-body"
                    />
                <button type="submit" className="btn footer-button">Post</button>
              </form>
            </div>
          </div>
        </div>
    );
  }
}

// instantiating a new redux form
let form = reduxForm({
  form: 'NewPost'
})(App);

// Bind the new form to our app
form = connect((state, ownProps) => ({
      posts: state.posts,
      user: state.user
    }), { getPosts, savePost, deletePost, getUser, logout }
)(form);

export default form;
