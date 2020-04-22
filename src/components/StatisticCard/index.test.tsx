import React from 'react';
import { render } from '@testing-library/react';
import StatisticCard from './index';

test('renders title and value', () => {
  // Arrange
  const title = 'title';
  const value = 'value';
  const { getByText } = render(
    <StatisticCard title={title} value={value}></StatisticCard>
  );
  const titleElement = getByText(title);
  const valueElement = getByText(value);

  // Assert
  expect(titleElement).toBeInTheDocument();
  expect(valueElement).toBeInTheDocument();
});

test('renders percentage', () => {
  // Arrange
  const title = 'title';
  const value = 'value';
  const percentage = '26%';
  const { getByText } = render(
    <StatisticCard
      title={title}
      value={value}
      percentage={percentage}
    ></StatisticCard>
  );
  const titleElement = getByText(title);
  const valueElement = getByText(value);
  const percentageElement = getByText(percentage);

  // Assert
  expect(titleElement).toBeInTheDocument();
  expect(valueElement).toBeInTheDocument();
  expect(percentageElement).toBeInTheDocument();
});

test('renders avatar element', () => {
  // Arrange
  const title = 'test avatar element';
  const value = 'value';
  const avatarTestId = 'avatar';
  const { getByText, getByTestId } = render(
    <StatisticCard
      title={title}
      value={value}
      avatar={<span data-testid={avatarTestId}></span>}
    ></StatisticCard>
  );
  const titleElement = getByText(title);
  const valueElement = getByText(value);
  const avatarElement = getByTestId(avatarTestId);

  // Assert
  expect(titleElement).toBeInTheDocument();
  expect(valueElement).toBeInTheDocument();
  expect(avatarElement).toBeInTheDocument();
});

test('renders content', () => {
  // Arrange
  const title = 'test avatar element';
  const value = 'value';
  const contentTestId = 'content';
  const { getByText, getByTestId } = render(
    <StatisticCard
      title={title}
      value={value}
      content={<span data-testid={contentTestId}></span>}
    ></StatisticCard>
  );
  const titleElement = getByText(title);
  const valueElement = getByText(value);
  const contentElement = getByTestId(contentTestId);

  // Assert
  expect(titleElement).toBeInTheDocument();
  expect(valueElement).toBeInTheDocument();
  expect(contentElement).toBeInTheDocument();
});

test('renders everything', () => {
  // Arrange
  const title = 'test avatar element';
  const value = 'value';
  const percentage = '26%';
  const avatarTestId = 'avatar';
  const contentTestId = 'content';
  const { getByText, getByTestId } = render(
    <StatisticCard
      title={title}
      value={value}
      percentage={percentage}
      avatar={<span data-testid={avatarTestId}></span>}
      content={<span data-testid={contentTestId}></span>}
    ></StatisticCard>
  );
  const titleElement = getByText(title);
  const valueElement = getByText(value);
  const percentageElement = getByText(percentage);
  const avatarElement = getByTestId(avatarTestId);
  const contentElement = getByTestId(contentTestId);

  // Assert
  expect(titleElement).toBeInTheDocument();
  expect(valueElement).toBeInTheDocument();
  expect(percentageElement).toBeInTheDocument();
  expect(avatarElement).toBeInTheDocument();
  expect(contentElement).toBeInTheDocument();
});

test('renders nothing when loading', () => {
  // Arrange
  const title = 'test avatar element';
  const value = 'value';
  const percentage = '26%';
  const avatarTestId = 'avatar';
  const contentTestId = 'content';
  const { queryByText, queryByTestId } = render(
    <StatisticCard
      title={title}
      value={value}
      percentage={percentage}
      avatar={<span data-testid={avatarTestId}></span>}
      content={<span data-testid={contentTestId}></span>}
      loading
    ></StatisticCard>
  );
  const titleElement = queryByText(title);
  const valueElement = queryByText(value);
  const percentageElement = queryByText(percentage);
  const avatarElement = queryByTestId(avatarTestId);
  const contentElement = queryByTestId(contentTestId);

  // Assert
  expect(titleElement).not.toBeInTheDocument();
  expect(valueElement).not.toBeInTheDocument();
  expect(percentageElement).not.toBeInTheDocument();
  expect(avatarElement).not.toBeInTheDocument();
  expect(contentElement).not.toBeInTheDocument();
});
