import React from 'react';
import AvatarStatisticCard from './index';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

export default {
  title: 'Components/AvatarStatisticCard',
  component: AvatarStatisticCard,
  decorators: [withA11y, withKnobs],
};

export const WithDefaultAvatar = () => (
  <AvatarStatisticCard
    title={text('title', 'Lactating')}
    value={text('value', '2000 cows')}
    loading={boolean('loading', false)}
  ></AvatarStatisticCard>
);

export const WithColorAvatarPercentage = () => (
  <AvatarStatisticCard
    title={text('title', 'Lactating')}
    value={text('value', '2000 cows')}
    percentage={text('percentage', '32%')}
    avatarColor="#1aaa54"
    loading={boolean('loading', false)}
  ></AvatarStatisticCard>
);

export const WithAvatarPercentage = () => (
  <AvatarStatisticCard
    title={text('title', 'Lactating')}
    value={text('value', '2000 cows')}
    percentage={text('percentage', '32%')}
    avatarSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRWbGr13unPzFuQ3WdJ775DFLwqdNdJ8BSUvCXmzrGCpwZGkUoT"
    loading={boolean('loading', false)}
  ></AvatarStatisticCard>
);

export const WithLoading = () => (
  <AvatarStatisticCard
    title={text('title', 'Lactating')}
    value={text('value', '2000 cows')}
    percentage={text('percentage', '32%')}
    avatarColor="#1aaa54"
    loading={boolean('loading', true)}
  ></AvatarStatisticCard>
);
