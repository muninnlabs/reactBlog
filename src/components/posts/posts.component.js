import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchSinglePost } from '../../actions/postActions';

class PostsComponent extends Component {
  componentWillMount() {
    this.props.fetchSinglePost();
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="row post-list">
            <div className="col-md-8">
              <div className="post-item-wrapper">
                <div className="card mb-3">
                  <img
                    className="card-img-top"
                    src="../assets/mocks/images/02.jpg"
                    alt="Post"
                  />
                  <div className="card-header">
                    Alexandre posted Jun 20, 2020
                  </div>
                  <div className="card-body">
                    <h3 className="card-title">{'Post Title'}</h3>
                    <p className="card-text">Content of the post</p>
                    <p className="card-text">
                      <Link to={`/`} className="btn btn-default">
                        home
                      </Link>
                    </p>
                  </div>
                  <div className="card-footer">
                    <small className="text-muted">Last updated mins ago</small>
                    <span className="text-muted float-right">10 Likes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default connect(null, { fetchSinglePost })(PostsComponent);
