import Greeting from './greeting.jsx';

export const setStores = (state = {}) => {
  return {
    greeting: new Greeting(state.greeting),
  };
};

export default setStores();
