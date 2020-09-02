import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../../actions/postActions';

import FileBase64 from 'react-file-base64';

class PostFormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    const newPost = {
      postTitle: this.state.postTitle,
      postContent: this.state.postContent,
      postImg: this.state.file.base64
    };
    //call the action
    this.props.createPost(newPost);
  }

  getFiles(file) {
    console.log(file.base64);
    this.setState({ file: file });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <h1>Add a new Post</h1>
          <br />
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Post title</label>
              <input
                type="text"
                className="form-control"
                name="postTitle"
                id="postTitle"
                onChange={this.onChange}
                value={this.state.postTitle}
              />
            </div>
            <div className="form-group">
              <label>Post image</label>
              <FileBase64 multiple={false} onDone={this.getFiles.bind(this)} />
            </div>
            <div className="form-group">
              <label>Content</label>
              <textarea
                className="form-control"
                name="postContent"
                id="postContent"
                onChange={this.onChange}
                value={this.state.postContent}
              />
            </div>
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

PostFormComponent.propTypes = {
  createPost: PropTypes.func.isRequired
};

export default connect(null, { createPost })(PostFormComponent);
