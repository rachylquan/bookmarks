import React from 'react';
import ReactDOM from 'react-dom';
import Rating from './Rating';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const props = {
    value: 3
  }

  ReactDOM.render(<Rating value={1} />, div);
  ReactDOM.unmountComponentAtNode(div);
});