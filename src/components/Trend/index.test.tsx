import React from 'react';
import { render } from '@testing-library/react';
import Trend from './index';

test('renders with string type', () => {
  // Arrange
  const { getByText } = render(<Trend value="test" direction="up"></Trend>);
  const stringValue = getByText('test');

  // Assert
  expect(stringValue).toBeInTheDocument();
});

test('renders with number type', () => {
  // Arrange
  const { getByText } = render(<Trend value={123} direction="up"></Trend>);
  const numberValue = getByText('123');

  // Assert
  expect(numberValue).toBeInTheDocument();
});

test('renders with precision and suffix', () => {
  // Arrange
  const { getByText } = render(
    <Trend value={123} direction="up" precision={3} suffix="/ 100"></Trend>
  );
  const numberValue = getByText('123');
  const precision = getByText('.000');
  const suffix = getByText('/ 100');

  // Assert
  expect(numberValue).toBeInTheDocument();
  expect(precision).toBeInTheDocument();
  expect(suffix).toBeInTheDocument();
});

test('renders with zero precision', () => {
  // Arrange
  const { queryByText } = render(
    <Trend value={123} direction="up" precision={0}></Trend>
  );
  const precision = queryByText('.');

  // Assert
  expect(precision).not.toBeInTheDocument();
});

test('renders with direction up', () => {
  // Arrange
  const { container } = render(<Trend value="test" direction="up"></Trend>);
  const direction = container.querySelector('.trend__triangle--up');

  // Assert
  expect(direction).toBeInTheDocument();
});

test('renders with direction down', () => {
  // Arrange
  const { container } = render(<Trend value="test" direction="down"></Trend>);
  const direction = container.querySelector('.trend__triangle--down');

  // Assert
  expect(direction).toBeInTheDocument();
});
