import React from 'react';
import { inject, observer } from 'mobx-react';

@inject('greeting') @observer
export default class Hello extends React.Component {
  render() {
    const res = this.props.greeting.toName('Grace');
    return <h1>{res}</h1>;
  }
}

Hello.propTypes = {
  greeting: React.PropTypes.object,
};
