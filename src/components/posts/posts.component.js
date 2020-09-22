import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import CommentComponent from './comments.component';

class PostsComponent extends Component {
  render() {
    let content = this.props.postContent;

    let numberOfLikes = (likes) => {
      // console.log(likes);
      let totalLikes = 0;
      for (let i in likes) {
        if (likes.hasOwnProperty(i)) {
          totalLikes++;
        }
      }
      return totalLikes;
    };

    let formateDate = (date) => {
      if (date !== undefined) {
        return format(new Date(date), 'MMMM dd, yyyy');
        // return date;
      }
    };

    let currentUrl = window.location.pathname;
    let redirectUrl = currentUrl.match(/\/publication/)
      ? '/'
      : `/publication/${content._id}`;

    return (
      <div className="container">
        <div className="row">
          <div className="row post-list">
            <div className="col-md-8">
              <div className="post-item-wrapper">
                <div className="card mb-3">
                  <img
                    className="card-img-top"
                    src={content.postImg}
                    alt="Post"
                  />
                  <div className="card-header">
                    Alexandre posted {formateDate(content.postDate)}
                  </div>
                  <div className="card-body">
                    <h3 className="card-title">{content.postTitle}</h3>
                    <p className="card-text">{content.postContent}</p>
                    <p className="card-text">
                      <Link to={redirectUrl} className="btn btn-default">
                        back
                      </Link>
                    </p>
                  </div>
                  <div className="card-footer">
                    <small className="text-muted">Last updated mins ago</small>
                    <span className="text-muted float-right">
                      Likes {numberOfLikes(content.likes)}
                    </span>
                  </div>
                  <div className="card-footer">
                    <CommentComponent
                      comments={content.postComments}
                    ></CommentComponent>
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
export default PostsComponent;
