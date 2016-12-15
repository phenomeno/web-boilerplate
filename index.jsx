import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router';

import App from './app/components/App.jsx';
import stores from './app/stores/stores.jsx';

ReactDOM.render(
  <BrowserRouter>
    <App stores={stores} />
  </BrowserRouter>,
  document.getElementById('root'),
);
