import { ADD_USER, FILTER } from './actionTypes';

export const addUser = payload => {
  return { type: ADD_USER, payload: { ...payload } };
};

export const filter = payload => {
  return { type: FILTER, payload };
};
