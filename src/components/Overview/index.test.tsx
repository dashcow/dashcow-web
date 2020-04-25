import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Overview from './index';

test('renders titles and statistics', () => {
  // Arrange
  const title1 = 'title1';
  const value1 = 'value1';
  const title2 = 'title2';
  const value2 = 'value2';
  const { getByText } = render(
    <Overview
      statistics={[
        { title: title1, value: value1 },
        { title: title2, value: value2 },
      ]}
    ></Overview>
  );
  const title1Element = getByText(title1);
  const value1Element = getByText(value1);
  const title2Element = getByText(title2);
  const value2Element = getByText(value2);

  // Assert
  expect(title1Element).toBeInTheDocument();
  expect(value1Element).toBeInTheDocument();
  expect(title2Element).toBeInTheDocument();
  expect(value2Element).toBeInTheDocument();
});

test('renders prefixs and suffixs with strings', () => {
  // Arrange
  const title1 = 'title1';
  const value1 = 'value1';
  const prefix1 = 'prefix1';
  const suffix1 = 'suffix1';
  const title2 = 'title2';
  const value2 = 'value2';
  const prefix2 = 'prefix2';
  const suffix2 = 'suffix2';
  const { getByText } = render(
    <Overview
      statistics={[
        { title: title1, value: value1, prefix: prefix1, suffix: suffix1 },
        { title: title2, value: value2, prefix: prefix2, suffix: suffix2 },
      ]}
    ></Overview>
  );
  const title1Element = getByText(title1);
  const value1Element = getByText(value1);
  const prefix1Element = getByText(prefix1);
  const suffix1Element = getByText(suffix1);
  const title2Element = getByText(title2);
  const value2Element = getByText(value2);
  const prefix2Element = getByText(prefix2);
  const suffix2Element = getByText(suffix2);

  // Assert
  expect(title1Element).toBeInTheDocument();
  expect(value1Element).toBeInTheDocument();
  expect(prefix1Element).toBeInTheDocument();
  expect(suffix1Element).toBeInTheDocument();
  expect(title2Element).toBeInTheDocument();
  expect(value2Element).toBeInTheDocument();
  expect(prefix2Element).toBeInTheDocument();
  expect(suffix2Element).toBeInTheDocument();
});

test('renders prefixs and suffixs with elements', () => {
  // Arrange
  const title1 = 'title1';
  const value1 = 'value1';
  const prefix1Id = 'prefix1';
  const suffix1Id = 'suffix1';
  const title2 = 'title2';
  const value2 = 'value2';
  const prefix2Id = 'prefix2';
  const suffix2Id = 'suffix2';
  const { getByText, getByTestId } = render(
    <Overview
      statistics={[
        {
          title: title1,
          value: value1,
          prefix: <span data-testid={prefix1Id}></span>,
          suffix: <span data-testid={suffix1Id}></span>,
        },
        {
          title: title2,
          value: value2,
          prefix: <span data-testid={prefix2Id}></span>,
          suffix: <span data-testid={suffix2Id}></span>,
        },
      ]}
    ></Overview>
  );
  const title1Element = getByText(title1);
  const value1Element = getByText(value1);
  const prefix1Element = getByTestId(prefix1Id);
  const suffix1Element = getByTestId(suffix1Id);
  const title2Element = getByText(title2);
  const value2Element = getByText(value2);
  const prefix2Element = getByTestId(prefix2Id);
  const suffix2Element = getByTestId(suffix2Id);

  // Assert
  expect(title1Element).toBeInTheDocument();
  expect(value1Element).toBeInTheDocument();
  expect(prefix1Element).toBeInTheDocument();
  expect(suffix1Element).toBeInTheDocument();
  expect(title2Element).toBeInTheDocument();
  expect(value2Element).toBeInTheDocument();
  expect(prefix2Element).toBeInTheDocument();
  expect(suffix2Element).toBeInTheDocument();
});

test('triggers onTitleClick', () => {
  // Arrange
  const title1 = 'title1';
  const title2 = 'title2';
  const mockTitle1Clicked = jest.fn();
  const mockTitle2Clicked = jest.fn();
  const { getByText } = render(
    <Overview
      statistics={[
        { title: title1, value: 'value1', onTitleClick: mockTitle1Clicked },
        { title: title2, value: 'value2', onTitleClick: mockTitle2Clicked },
      ]}
    ></Overview>
  );
  const title1Element = getByText(title1);
  const title2Element = getByText(title2);

  // Act
  fireEvent.click(title1Element);
  fireEvent.click(title2Element);

  // Assert
  expect(mockTitle1Clicked).toBeCalledTimes(1);
  expect(mockTitle2Clicked).toBeCalledTimes(1);
});

test('triggers onStatisticClick', () => {
  // Arrange
  const value1 = 'value1';
  const value2 = 'value2';
  const prefix1 = 'prefix1';
  const suffix1 = 'suffix1';
  const prefix2Id = 'prefix2';
  const suffix2Id = 'suffix2';
  const mockStatistic1Clicked = jest.fn();
  const mockStatistic2Clicked = jest.fn();
  const { getByText, getByTestId } = render(
    <Overview
      statistics={[
        {
          title: 'title1',
          value: value1,
          prefix: prefix1,
          suffix: suffix1,
          onStatisticClick: mockStatistic1Clicked,
        },
        {
          title: 'title2',
          value: value2,
          prefix: <span data-testid={prefix2Id}></span>,
          suffix: <span data-testid={suffix2Id}></span>,
          onStatisticClick: mockStatistic2Clicked,
        },
      ]}
    ></Overview>
  );
  const value1Element = getByText(value1);
  const prefix1Element = getByText(prefix1);
  const suffix1Element = getByText(suffix1);
  const value2Element = getByText(value2);
  const prefix2Element = getByTestId(prefix2Id);
  const suffix2Element = getByTestId(suffix2Id);

  // Act
  fireEvent.click(value1Element);
  fireEvent.click(prefix1Element);
  fireEvent.click(suffix1Element);
  fireEvent.click(value2Element);
  fireEvent.click(prefix2Element);
  fireEvent.click(suffix2Element);

  // Assert
  expect(mockStatistic1Clicked).toBeCalledTimes(3);
  expect(mockStatistic2Clicked).toBeCalledTimes(3);
});
