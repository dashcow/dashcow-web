import React from 'react';
import { Chart, Geom, Tooltip } from 'bizcharts';
import { IChartProps, IBaseGemoProps } from 'bizcharts/lib/interface';

interface SimpleAreaChartProps {
  data: IChartProps['data'];
  height: IChartProps['height'];
  padding: IChartProps['padding'];
  position: IBaseGemoProps['position'];
  color: IBaseGemoProps['color'];
}

const SimpleAreaChart: React.FC<SimpleAreaChartProps> = ({
  height,
  data,
  padding,
  position,
  color,
}) => (
  <Chart height={height} data={data} padding={padding} forceFit pure>
    <Tooltip showCrosshairs showMarkers />
    <Geom type="area" position={position} color={color} shape="smooth" />
    <Geom
      type="line"
      position={position}
      color={color}
      shape="smooth"
      size={2}
    />
  </Chart>
);

export default SimpleAreaChart;
