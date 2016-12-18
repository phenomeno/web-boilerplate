/*
Won't use this with server-side rendering.
Use as entry point for webpack if forgoing SSR.
*/
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router';

import App from './App.jsx';
import stores from './stores/stores.jsx';

ReactDOM.render(
  <BrowserRouter>
    <App stores={stores} />
  </BrowserRouter>,
  document.getElementById('root'),
);

if (module.hot) {
  module.hot.accept();
}
