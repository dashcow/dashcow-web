import React from 'react';
import { Avatar } from 'antd';
import StatisticCard, { StatisticCardProps } from '../StatisticCard/';

interface AreaStatisticCardProps {
  title: StatisticCardProps['title'];
  value: StatisticCardProps['value'];
  percentage?: StatisticCardProps['percentage'];
  avatarSrc?: string;
  avatarColor?: string;
  loading?: boolean;
}

const AvatarStatisticCard: React.FC<AreaStatisticCardProps> = ({
  title,
  avatarSrc,
  avatarColor,
  ...cardAttrs
}) => (
  <StatisticCard
    title={title}
    {...cardAttrs}
    avatar={
      <Avatar
        src={avatarSrc}
        alt={title}
        size={58}
        style={{ backgroundColor: avatarColor }}
      >
        {title[0]}
      </Avatar>
    }
  ></StatisticCard>
);

AvatarStatisticCard.defaultProps = {
  loading: false,
};

export default AvatarStatisticCard;
