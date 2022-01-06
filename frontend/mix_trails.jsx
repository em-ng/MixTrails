import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

//delete below imports later
import * as SessionAPIUtil from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {

  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { currentUserId: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  //window testing-delete later
  window.login = SessionAPIUtil.login;
  window.logout = SessionAPIUtil.logout;
  window.signUp = SessionAPIUtil.signUp;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});