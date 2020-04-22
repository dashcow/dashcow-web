import React from 'react';
import StatisticCard from './index';
import { Avatar } from 'antd';
import SimpleAreaChart from '../SimpleAreaChart';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { format } from 'date-fns';

export default {
  title: 'Components/StatisticCard',
  component: StatisticCard,
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

const AreaStatistic = () => (
  <SimpleAreaChart
    height={50}
    data={areaData}
    padding="auto"
    position="x*y"
    color="#13c2c2"
  ></SimpleAreaChart>
);

const LargeAvatar = () => (
  <Avatar
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRWbGr13unPzFuQ3WdJ775DFLwqdNdJ8BSUvCXmzrGCpwZGkUoT"
    size={58}
    alt={'Lactating'}
  ></Avatar>
);

export const WithValue = () => (
  <StatisticCard
    title={text('title', 'Lactating')}
    value={text('value', '2000 cows')}
    loading={boolean('loading', false)}
  ></StatisticCard>
);

export const WithPercentage = () => (
  <StatisticCard
    title={text('title', 'Lactating')}
    value={text('value', '2000 cows')}
    percentage={text('percentage', '32%')}
    loading={boolean('loading', false)}
  ></StatisticCard>
);

export const WithAvatar = () => (
  <StatisticCard
    title={text('title', 'Lactating')}
    value={text('value', '2000 cows')}
    percentage={text('percentage', '32%')}
    avatar={<LargeAvatar></LargeAvatar>}
    loading={boolean('loading', false)}
  ></StatisticCard>
);

export const WithOverflowValueAvatar = () => (
  <StatisticCard
    title={text('title', 'Lactating')}
    value={text(
      'value',
      '21388793298479328918923787320948023847993298401232 cows'
    )}
    percentage={text('percentage', '32%')}
    avatar={<LargeAvatar></LargeAvatar>}
    loading={boolean('loading', false)}
  ></StatisticCard>
);

export const WithAreaPercentage = () => (
  <StatisticCard
    title={text('title', 'Lactating')}
    value={text('value', '2000 cows')}
    percentage={text('percentage', '32%')}
    content={<AreaStatistic></AreaStatistic>}
    loading={boolean('loading', false)}
  ></StatisticCard>
);

export const WithAreaAvatarPercentage = () => (
  <StatisticCard
    title={text('title', 'Lactating')}
    value={text('value', '2000 cows')}
    percentage={text('percentage', '32%')}
    avatar={<LargeAvatar></LargeAvatar>}
    content={<AreaStatistic></AreaStatistic>}
    loading={boolean('loading', false)}
  ></StatisticCard>
);

export const WithLoading = () => (
  <StatisticCard
    title={text('title', 'Lactating')}
    value={text('value', '2000 cows')}
    percentage={text('percentage', '32%')}
    avatar={<LargeAvatar></LargeAvatar>}
    content={<AreaStatistic></AreaStatistic>}
    loading={boolean('loading', true)}
  ></StatisticCard>
);
