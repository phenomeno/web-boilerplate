import React from 'react';
import { Provider } from 'mobx-react';
import { Match, Miss } from 'react-router';

import Hello from './components/Hello.jsx';
import NotFound from './components/NotFound.jsx';

export default class App extends React.Component {
  render() {
    const { stores } = this.props;

    return (
      <Provider {...stores}>
        <div>
          <Match exactly pattern="/" component={Hello} />
          <Miss component={NotFound} />
        </div>
      </Provider>
    );
  }
}

App.propTypes = {
  stores: React.PropTypes.object,
};
