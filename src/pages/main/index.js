import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/postActions';
import './main.scss';
import PostsComponent from '../../components/posts/posts.component';

class Main extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="row post-list">
            <div className="col-md-8">
              {this.props.posts.map(publication => (
                <div className="post-item-wrapper" key={publication._id}>
                  <div className="card mb-3">
                    <img
                      className="card-img-top"
                      src={publication.postImg}
                      alt="Post"
                    />
                    <div className="card-header">
                      Alexandre posted {publication.postDate}
                    </div>
                    <div className="card-body">
                      <h3 className="card-title">{publication.postTitle}</h3>

                      <p className="card-text">{publication.postContent}</p>
                      <p className="card-text">
                        <Link
                          to={`/publication/${publication._id}`}
                          className="btn btn-default"
                        >
                          Open post
                        </Link>
                      </p>
                    </div>
                    <div className="card-footer">
                      <small className="text-muted">
                        Last updated mins ago
                      </small>
                      <span className="text-muted float-right">10 Likes</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

PostsComponent.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  posts: state.posts.items
});

export default connect(mapStateToProps, { fetchPosts })(Main);
