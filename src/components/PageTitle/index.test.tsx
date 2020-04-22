import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import PageTitle from './index';

test('renders page title', () => {
  // Arrange
  const { getByText } = render(<PageTitle title="My title"></PageTitle>);
  const title = getByText('My title');

  // Assert
  expect(title).toBeInTheDocument();
});

test('renders page title and buttons', () => {
  // Arrange
  const mockPrimaryButtonClick = jest.fn();
  const mockSecondaryButton1Click = jest.fn();
  const mockSecondaryButton2Click = jest.fn();
  const { getByText } = render(
    <PageTitle
      title="My title"
      primaryButton={{
        text: 'primary button',
        icon: <span>primary icon</span>,
        onClick: mockPrimaryButtonClick,
      }}
      secondaryButtons={[
        {
          text: 'secondary button 1',
          icon: <span>secondary icon 1</span>,
          onClick: mockSecondaryButton1Click,
        },
        {
          text: 'secondary button 2',
          icon: <span>secondary icon 2</span>,
          onClick: mockSecondaryButton2Click,
        },
      ]}
    ></PageTitle>
  );
  const title = getByText('My title');
  const primaryButtonText = getByText('primary button');
  const secondaryButton1Text = getByText('secondary button 1');
  const secondaryButton2Text = getByText('secondary button 2');
  const primaryButtonIcon = getByText('primary icon');
  const secondaryButton1Icon = getByText('secondary icon 1');
  const secondaryButton2Icon = getByText('secondary icon 2');

  // Act
  fireEvent.click(primaryButtonText);
  fireEvent.click(secondaryButton1Text);
  fireEvent.click(secondaryButton2Text);

  // Assert
  expect(title).toBeInTheDocument();
  expect(primaryButtonText).toBeInTheDocument();
  expect(secondaryButton1Text).toBeInTheDocument();
  expect(secondaryButton2Text).toBeInTheDocument();
  expect(primaryButtonIcon).toBeInTheDocument();
  expect(secondaryButton1Icon).toBeInTheDocument();
  expect(secondaryButton2Icon).toBeInTheDocument();
  expect(mockPrimaryButtonClick).toBeCalledTimes(1);
  expect(mockSecondaryButton1Click).toBeCalledTimes(1);
  expect(mockSecondaryButton2Click).toBeCalledTimes(1);
});

test('renders button loading', () => {
  // Arrange
  const mockOnClick = jest.fn();
  const { getByText, queryByText } = render(
    <PageTitle
      title="My title"
      primaryButton={{
        text: 'primary button',
        icon: <span>primary icon</span>,
        loading: true,
        onClick: mockOnClick,
      }}
    ></PageTitle>
  );
  const title = getByText('My title');
  const primaryButtonText = getByText('primary button');
  const primaryButtonIcon = queryByText('primary icon');

  //Act
  fireEvent.click(primaryButtonText);

  // Assert
  expect(title).toBeInTheDocument();
  expect(primaryButtonText).toBeInTheDocument();
  expect(primaryButtonIcon).not.toBeInTheDocument();
  expect(mockOnClick).toBeCalledTimes(0);
});

test('renders button disable', () => {
  // Arrange
  const mockOnClick = jest.fn();
  const { getByText, queryByText, getByRole } = render(
    <PageTitle
      title="My title"
      primaryButton={{
        text: 'primary button',
        icon: <span>primary icon</span>,
        disabled: true,
        onClick: mockOnClick,
      }}
    ></PageTitle>
  );
  const title = getByText('My title');
  const primaryButton = getByRole('button');
  const primaryButtonIcon = queryByText('primary icon');

  //Act
  fireEvent.click(primaryButton);

  // Assert
  expect(title).toBeInTheDocument();
  expect(primaryButton).toBeInTheDocument();
  expect(primaryButtonIcon).toBeInTheDocument();
  expect(primaryButton).toHaveAttribute('disabled');
  expect(mockOnClick).toBeCalledTimes(0);
});

test('renders breadcrumb', () => {
  // Arrange
  const routes = [
    {
      path: 'index',
      breadcrumbName: 'index menu',
    },
    {
      path: 'first',
      breadcrumbName: 'first menu',
    },
  ];
  const { getByText, queryByText, getByRole } = render(
    <PageTitle
      title="My title"
      primaryButton={{
        text: 'primary button',
        icon: <span>primary icon</span>,
      }}
      breadcrumb={{ routes }}
    ></PageTitle>
  );
  const title = getByText('My title');
  const primaryButton = getByRole('button');
  const primaryButtonIcon = queryByText('primary icon');
  const breadcrumbIndex = getByText('index menu');
  const breadcrumbFirst = getByText('first menu');

  // Assert
  expect(title).toBeInTheDocument();
  expect(primaryButton).toBeInTheDocument();
  expect(primaryButtonIcon).toBeInTheDocument();
  expect(breadcrumbIndex).toBeInTheDocument();
  expect(breadcrumbFirst).toBeInTheDocument();
});
