import React from 'react';
import SimpleAreaChart from '.';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
import { format } from 'date-fns';

export default {
  title: 'Components/SimpleAreaChart',
  component: SimpleAreaChart,
  decorators: [withA11y, withKnobs],
};

const areaData = getMockedAreaData();

function getMockedAreaData() {
  const mockedAreaData = [];
  const beginDay = new Date().getTime();
  for (let i = 0; i < 20; i += 1) {
    mockedAreaData.push({
      x: format(new Date(beginDay + 1000 * 60 * 60 * 24 * i), 'yyyy-MM-dd'),
      y: Math.floor(Math.random() * 100) + 10,
    });
  }
  return mockedAreaData;
}

export const AreaStatistic = () => (
  <SimpleAreaChart
    height={50}
    data={areaData}
    padding="auto"
    position="x*y"
    color="#13c2c2"
  ></SimpleAreaChart>
);
