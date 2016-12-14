// Link.react-test.js
import React from 'react';
import Hello from '../app/components/Hello';
import renderer from 'react-test-renderer';

test('Testing app', () => {
  const component = renderer.create(
    <Hello />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
