import React from 'react';
import { Skeleton } from 'antd';
import './index.css';

export interface StatisticCardProps {
  title: string;
  value: number | string;
  percentage?: string;
  avatar?: React.ReactNode;
  content?: React.ReactNode;
  loading?: boolean;
}

const StatisticCard: React.FC<StatisticCardProps> = ({
  avatar,
  title,
  value,
  percentage,
  content,
  loading,
}) => (
  <div className="statistic-card">
    <Skeleton
      loading={loading}
      avatar={avatar ? { size: 58 } : undefined}
      paragraph={{ rows: content ? 2 : 1 }}
      active
    >
      {avatar && <div className="statistic-card__avatar-wrapper">{avatar}</div>}
      <div className="statistic-card__title">{title}</div>
      <div className="statistic-card__value-container">
        {value && (
          <span className="statistic-card__value-container__value">
            {value}
          </span>
        )}
        {percentage && (
          <span className="statistic-card__value-container__percentage">
            {percentage}
          </span>
        )}
      </div>
      {content && <div>{content}</div>}
    </Skeleton>
  </div>
);

StatisticCard.defaultProps = {
  loading: false,
};

export default StatisticCard;
