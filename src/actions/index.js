import axios from "axios";
import { FETCH_POSTS } from './types';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = 'PAPERCLIP1234'

export function fetchPosts() {
  const url = `${ROOT_URL}/posts?k=${API_KEY}`;
  const request = axios.get(url);  //return a promise

  return {
    type: FETCH_POSTS,
    payload: request
  };
}