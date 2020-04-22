import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, text, number } from '@storybook/addon-knobs';
import Trend from './index';

export default {
  title: 'Components/Trend',
  component: Trend,
  decorators: [withA11y, withKnobs],
};

export const withTrendUp = () => (
  <Trend
    value={text('value', '123')}
    direction="up"
    valueStyle={{ fontSize: `${number('fontSize', 18)}px` }}
  ></Trend>
);

export const withTrendDown = () => (
  <Trend
    value={number('value', 123)}
    direction="down"
    valueStyle={{ fontSize: `${number('fontSize', 18)}px` }}
  ></Trend>
);

export const withTrendUpPrecision = () => (
  <Trend
    value={text('value', '123')}
    direction="up"
    precision={number('precision', 2)}
    valueStyle={{ fontSize: `${number('fontSize', 18)}px` }}
  ></Trend>
);

export const withTrendDownPrecision = () => (
  <Trend
    value={text('value', '123')}
    direction="down"
    precision={number('precision', 2)}
    valueStyle={{ fontSize: `${number('fontSize', 18)}px` }}
  ></Trend>
);

export const withTrendUpSuffix = () => (
  <Trend
    value={text('value', '123')}
    direction="up"
    suffix={text('suffix', '/ 100')}
    valueStyle={{ fontSize: `${number('fontSize', 18)}px` }}
  ></Trend>
);

export const withTrendDownSuffix = () => (
  <Trend
    value={text('value', '123')}
    direction="down"
    suffix={text('suffix', '/ 100')}
    valueStyle={{ fontSize: `${number('fontSize', 18)}px` }}
  ></Trend>
);

export const withTrendUpPrecisionSuffix = () => (
  <Trend
    value={text('value', '123')}
    direction="up"
    precision={number('precision', 2)}
    suffix={text('suffix', '/ 100')}
    valueStyle={{ fontSize: `${number('fontSize', 18)}px` }}
  ></Trend>
);

export const withTrendDownPrecisionSuffix = () => (
  <Trend
    value={text('value', '123')}
    direction="down"
    precision={number('precision', 2)}
    suffix={text('suffix', '/ 100')}
    valueStyle={{ fontSize: `${number('fontSize', 18)}px` }}
  ></Trend>
);
