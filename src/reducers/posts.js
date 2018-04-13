import { actionTypes } from '../constants/actionTypes';
import _ from 'lodash';

export default function(state = {}, action) {
  switch(action.type) {
    case actionTypes.FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id');
    case actionTypes.FETCH_POST:
      const post = action.payload.data; 
      return { ...state, [post.id]: post };
    case actionTypes.DELETE_POST:
      return _.omit(state, action.payload);
    default:
      return state;
  }
}