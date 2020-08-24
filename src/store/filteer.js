import {
  UPDATE_BLOG, ADD_BLOG, REMOVE_BLOG, LOAD_BLOG
} from '../constants/Redux';


export const loadHome = (payload = []) => ({
  type: LOAD_BLOG,
  payload: [...payload]
});
export const addHome = (payload) => ({
  type: ADD_BLOG,
  payload: { ...payload },
});

export const updateHome = (payload) => ({
  type: UPDATE_BLOG,
  payload: { ...payload }
});

export const removeHome = (id) => ({
  type: REMOVE_BLOG,
  id
});
