import React from 'react';
import { Statistic } from 'antd';
import { StatisticProps } from 'antd/lib/statistic/Statistic';
import './index.css';

interface TrendProps extends StatisticProps {
  direction: 'up' | 'down';
}

const Trend: React.FC<TrendProps> = ({
  direction = 'up',
  ...statisticProps
}) => (
  <Statistic
    {...statisticProps}
    prefix={
      <span
        className={`trend__triangle ${
          direction === 'up' ? 'trend__triangle--up' : 'trend__triangle--down'
        }`}
      ></span>
    }
  ></Statistic>
);

Trend.defaultProps = {
  valueStyle: { fontSize: '18px' },
};

export default Trend;
