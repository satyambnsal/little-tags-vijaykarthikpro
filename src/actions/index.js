import { SET_AUTH_USER, REMOVE_AUTH_USER } from '../constants/actionTypes';

export const setAuthUser = (authUser) => ({
  type: SET_AUTH_USER,
  authUser,
  isUserLoggedIn: true
});

export const removeAuthUser = () => ({
  type: REMOVE_AUTH_USER
});