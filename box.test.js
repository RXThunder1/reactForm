import React from 'react';
import { render } from '@testing-library/react';
import Box from '../components/Box';

test('renders Box component', () => {
  const { asFragment } = render(<Box width={100} height={100} backgroundColor="blue" />);
  expect(asFragment()).toMatchSnapshot();
});