import React, { Component } from 'react';
import api from '../../services/api.service';
// import { Link } from 'react-router-dom';
import PostsComponent from '../../components/posts/posts.component';
import PostFormComponent from '../../components/posts/post-form.component';

export default class Publication extends Component {
  constructor(props) {
    super(props);
    this.state = {
      publication: {}
    };
  }

  async componentDidMount() {
    const { id } = this.props.match.params;
    const response = await api.get(`/publication/${id}`);
    console.log(response.data.postUser[0].userName);
    response.data.postImg = '../' + response.data.postImg;
    this.setState({ publication: response.data });
  }

  render() {
    // const { publication } = this.state;
    return (
      <>
        <PostsComponent />
      </>
    );
  }
}
