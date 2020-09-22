import React, { Component } from 'react';
import { format } from 'date-fns';

class CommentComponent extends Component {
  render() {
    console.log(this.props);
    return <div>Hello World!</div>;
  }
}

export default CommentComponent;
