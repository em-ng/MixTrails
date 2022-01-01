import React from 'react';
import ReactDOM from 'react-dom';
import * as SessionAPIUtil from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  //window testing-delete later
  window.login = SessionAPIUtil.login;
  window.logout = SessionAPIUtil.logout;
  window.signUp = SessionAPIUtil.signUp;


  ReactDOM.render(<h1>MixTrails</h1>, root);
});