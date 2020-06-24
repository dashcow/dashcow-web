import React from 'react';
import { Statistic } from 'antd';
import { StatisticProps } from 'antd/lib/statistic/Statistic';
import './index.css';

interface OverviewProps {
  statistics: OverviewStatisticProps[];
  align?: 'center' | 'left' | 'right';
}

interface OverviewStatisticProps {
  key?: React.Key;
  title: StatisticProps['title'];
  value: StatisticProps['value'];
  prefix?: StatisticProps['prefix'];
  suffix?: StatisticProps['suffix'];
  onTitleClick?: React.MouseEventHandler<HTMLElement>;
  onStatisticClick?: React.MouseEventHandler<HTMLElement>;
}

const wrapWithOnClick = (onClick?: React.MouseEventHandler<HTMLElement>) => (
  value: React.ReactNode
) => (
  <span onClick={onClick} style={{ cursor: 'pointer' }}>
    {value}
  </span>
);

const OnClickWrapper: React.FC<{
  onClick?: React.MouseEventHandler<HTMLElement>;
  children: React.ReactNode;
}> = ({ onClick, children }) => wrapWithOnClick(onClick)(children);

const Overview: React.FC<OverviewProps> = ({ statistics, align }) => (
  <div>
    {statistics.map(
      (
        { key, title, value, prefix, suffix, onTitleClick, onStatisticClick },
        index
      ) => (
        <div
          key={key || index}
          className={`statistic__block statistic__block--${align}`}
        >
          <Statistic
            title={
              <OnClickWrapper onClick={onTitleClick}>{title}</OnClickWrapper>
            }
            value={value}
            formatter={wrapWithOnClick(onStatisticClick)}
            prefix={
              <OnClickWrapper onClick={onStatisticClick}>
                {prefix}
              </OnClickWrapper>
            }
            suffix={
              <OnClickWrapper onClick={onStatisticClick}>
                {suffix}
              </OnClickWrapper>
            }
          ></Statistic>
        </div>
      )
    )}
  </div>
);

Overview.defaultProps = {
  align: 'center',
};

export default Overview;
