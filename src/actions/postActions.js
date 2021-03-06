import { FETCH_POSTS, NEW_POST, FETCH_SINGLE_POST } from './types';
import api from '../services/api.service';
import axios from 'axios';

export const fetchPosts = () => async (dispatch) => {
  const response = await api.get(`/publication`);
  dispatch({
    type: FETCH_POSTS,
    payload: response.data,
  });
};

export const fetchSinglePost = (postId) => async (dispatch) => {
  const response = await api.get(`/publication/${postId}`);
  dispatch({
    type: FETCH_SINGLE_POST,
    payload: response.data,
  });
};

export const createPost = (postData) => async (dispatch) => {
  axios({
    method: 'post',
    url: 'http://localhost:9800/publication/',
    data: postData,
    headers: { 'Content-Type': 'application/json' },
  })
    .then(
      (response) => {
        dispatch({
          type: NEW_POST,
          newPublication: response.data,
        });
      },
      (error) => {
        console.log(error);
      }
    )
    .catch((error) => {
      console.log(error.response.request._response);
    });
};
