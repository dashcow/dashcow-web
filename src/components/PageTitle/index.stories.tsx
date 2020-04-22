import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import PageTitle from './index';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/PageTitle',
  component: PageTitle,
  decorators: [withA11y, withKnobs],
};

export const WithTitle = () => (
  <PageTitle title={text('title', 'Happy Farm')}></PageTitle>
);

export const WithTitlePrimaryButton = () => (
  <PageTitle
    title={text('title', 'Happy Farm', 'title')}
    primaryButton={{
      text: text('button text', 'Record', 'primaryButton'),
      icon: <b>+ </b>,
      loading: boolean('loading', false, 'primaryButton'),
      disabled: boolean('disabled', false, 'primaryButton'),
      onClick: action('onPrimaryButtonClicked'),
    }}
  ></PageTitle>
);

export const WithTitlePrimarySecondaryButton = () => (
  <PageTitle
    title={text('title', 'Happy Farm', 'title')}
    primaryButton={{
      text: text('text', 'Record', 'primaryButton'),
      icon: <b>+ </b>,
      loading: boolean('loading', false, 'primaryButton'),
      disabled: boolean('disabled', false, 'primaryButton'),
      onClick: action('onPrimaryButtonClicked'),
    }}
    secondaryButtons={[
      {
        text: text('text', 'Herd', 'secondaryButton1'),
        icon: <b>+ </b>,
        loading: boolean('loading', false, 'secondaryButton1'),
        disabled: boolean('disabled', false, 'secondaryButton1'),
        onClick: action('onSecondaryButton1Clicked'),
      },
      {
        text: text('text', 'Cow', 'secondaryButton2'),
        icon: <b>+ </b>,
        loading: boolean('loading', false, 'secondaryButton2'),
        disabled: boolean('disabled', false, 'secondaryButton2'),
        onClick: action('onSecondaryButton2Clicked'),
      },
    ]}
  ></PageTitle>
);

export const WithBreadcrumbPrimaryButton = () => (
  <PageTitle
    title={text('title', 'Happy Farm', 'title')}
    breadcrumb={{
      routes: [
        {
          path: 'dashboard',
          breadcrumbName: text('index', 'Happy Farm', 'breadcrumb'),
        },
        {
          path: 'dashboard',
          breadcrumbName: text('first', 'Dashboard', 'breadcrumb'),
        },
      ],
    }}
    primaryButton={{
      text: text('text', 'Record', 'primaryButton'),
      icon: <b>+ </b>,
      loading: boolean('loading', false, 'primaryButton'),
      disabled: boolean('disabled', false, 'primaryButton'),
      onClick: action('onPrimaryButtonClicked'),
    }}
    secondaryButtons={[
      {
        text: text('text', 'Herd', 'secondaryButton1'),
        icon: <b>+ </b>,
        loading: boolean('loading', false, 'secondaryButton1'),
        disabled: boolean('disabled', false, 'secondaryButton1'),
        onClick: action('onSecondaryButton1Clicked'),
      },
      {
        text: text('text', 'Cow', 'secondaryButton2'),
        icon: <b>+ </b>,
        loading: boolean('loading', false, 'secondaryButton2'),
        disabled: boolean('disabled', false, 'secondaryButton2'),
        onClick: action('onSecondaryButton2Clicked'),
      },
    ]}
  ></PageTitle>
);
