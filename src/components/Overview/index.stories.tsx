import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, text, number } from '@storybook/addon-knobs';
import Overview from './index';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Overview',
  component: Overview,
  decorators: [withA11y, withKnobs],
};

export const withValue = () => (
  <Overview
    statistics={[
      {
        title: text('title1', 'Total Milks'),
        value: text('value1', '40'),
        onTitleClick: action('onTitle1Click'),
        onStatisticClick: action('onStatistic1Click'),
      },
      {
        title: text('title2', 'Total Record'),
        value: text('value2', '120'),
        onTitleClick: action('onTitle2Click'),
        onStatisticClick: action('onStatistic2Click'),
      },
    ]}
  ></Overview>
);

export const withValuePrefixSuffix = () => (
  <Overview
    statistics={[
      {
        title: text('title1', 'Total Milks'),
        value: text('value1', '40 ml'),
        prefix: text('prefix1', '🥛'),
        suffix: text('suffix1', '/ week'),
        onTitleClick: action('onTitle1Click'),
        onStatisticClick: action('onStatistic1Click'),
      },
      {
        title: text('title2', 'Total Records'),
        value: text('value2', '120'),
        prefix: text('prefix2', '📝'),
        suffix: text('suffix2', ' / week'),
        onTitleClick: action('onTitle2Click'),
        onStatisticClick: action('onStatistic2Click'),
      },
    ]}
  ></Overview>
);

export const withMultipleStatistics = () => {
  const statistics = [];
  for (let i = 0; i < number('statisticAmount', 10); i++) {
    statistics.push({
      title: text('title', 'Total Milks'),
      value: text('value', '40 ml'),
      prefix: text('prefix', '🥛'),
      suffix: text('suffix', '/ week'),
      onTitleClick: action('onTitleClicked'),
      onStatisticClick: action('onStatisticClicked'),
    });
  }
  return <Overview statistics={statistics}></Overview>;
};
