import _ from 'lodash';

import { FETCH_POSTS } from "../actions/types";

export default function (state = {}, action) {
  console.log('Action received', action);
  switch (action.type) {
    case FETCH_POSTS:
      // convert array to a dict
      return _.mapKeys(action.payload.data, 'id');
    default:
      return state;
  }
}