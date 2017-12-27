import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'react-router-dom/es/Link';
import PostCard from '../components/PostCard';

class PostDetail extends Component {
  componentWillMount() {

  }

  render() {
    const { post, match } = this.props;
    return (
        <div>
          <div className="navbar">
            <Link to={"/"} className="btn btn-primary">
              Go home
            </Link>
          </div>
          <div className="container">
            <PostCard>
              <h1 className="card-title">{post.title}</h1>
              <p className="card-body">{post.body}</p>
              <SubmitComment id={match.params.id} />
            </PostCard>
          </div>
        </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return { post: state.posts[ownProps.match.params.id], uid: state.user.uid}
}

export default connect(mapStateToProps)(PostDetail);