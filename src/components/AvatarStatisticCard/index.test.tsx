import React from 'react';
import { render } from '@testing-library/react';
import AvatarStatisticCard from './index';

test('renders default text avatar and statistics', () => {
  // Arrange
  const title = 'title';
  const value = 'value';
  const percentage = '10%';
  const { getByText } = render(
    <AvatarStatisticCard
      title={title}
      value={value}
      percentage={percentage}
    ></AvatarStatisticCard>
  );
  const titleElement = getByText(title);
  const valueElement = getByText(value);
  const percentageElement = getByText(percentage);
  const avatarElement = getByText(title[0]);

  // Assert
  expect(titleElement).toBeInTheDocument();
  expect(valueElement).toBeInTheDocument();
  expect(percentageElement).toBeInTheDocument();
  expect(avatarElement).toBeInTheDocument();
});

test('renders avatar image and statistics', () => {
  // Arrange
  const title = 'title';
  const value = 'value';
  const imgSrc = 'http://localhost/test-img';
  const { getByText, getByAltText } = render(
    <AvatarStatisticCard
      title={title}
      value={value}
      avatarSrc={imgSrc}
    ></AvatarStatisticCard>
  );
  const titleElement = getByText(title);
  const valueElement = getByText(value);
  const imgElement = getByAltText(title) as HTMLImageElement;

  // Assert
  expect(titleElement).toBeInTheDocument();
  expect(valueElement).toBeInTheDocument();
  expect(imgElement.src).toBe(imgSrc);
});
