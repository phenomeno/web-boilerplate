import fetch from 'isomorphic-fetch';

export function get(url) {
  fetch(url).then((response) => {
    return response.json();
  });
}
