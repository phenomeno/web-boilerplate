import { extendObservable } from 'mobx';

export default class Greeting {
  constructor(state = {}) {
    extendObservable(this, {
      greeting: 'Hello',
    }, state);
  }

  toName(name) {
    return `${this.greeting} ${name}`;
  }
}
