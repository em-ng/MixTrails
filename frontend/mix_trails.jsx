import React from 'react';
import ReactDOM from 'react-dom';
import * as SessionAPIUtil from './util/session_api_util';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();

  //window testing-delete later
  window.login = SessionAPIUtil.login;
  window.logout = SessionAPIUtil.logout;
  window.signUp = SessionAPIUtil.signUp;
  window.getState = store.getState;
  window.dispatch = store.dispatch;


  ReactDOM.render(<h1>MixTrails</h1>, root);
});