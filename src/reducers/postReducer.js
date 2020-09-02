import { FETCH_POSTS, NEW_POST, FETCH_SINGLE_POST } from '../actions/types';

const initialState = {
  items: [],
  item: {}
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        items: action.publications
      };

    case NEW_POST:
      return {
        ...state,
        items: action.newPublication
      };

    case FETCH_SINGLE_POST:
      return {
        ...state,
        items: action.publication
      };

    default:
      return state;
  }
}
