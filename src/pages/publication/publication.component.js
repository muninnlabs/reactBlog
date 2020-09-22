import React, { Component } from 'react';
import PostsComponent from '../../components/posts/posts.component';

import { connect } from 'react-redux';
import { fetchSinglePost } from '../../actions/postActions';

class Publication extends Component {
  componentDidMount() {
    let { id } = this.props.match.params;
    this.props.fetchSinglePost(id);
  }

  render() {
    let post = this.props.post;
    console.log(post);
    let componentContent = <PostsComponent postContent={post} />;

    return <>{componentContent}</>;
  }
}

const mapStateToProps = (state) => ({
  post: state.posts.item,
});
export default connect(mapStateToProps, { fetchSinglePost })(Publication);
