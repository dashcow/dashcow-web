import React from 'react';
import App from './App';
import { Button } from 'antd';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
import '../../index.css';

export default {
  title: 'Pages/App',
  component: App,
  decorators: [withA11y, withKnobs],
};

export const AppPage = () => <App />;

export const AntButton = () => <Button type="primary">Button</Button>;
