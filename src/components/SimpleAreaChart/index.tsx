import React from 'react';
import { Chart, Geom, Tooltip, ChartProps, GeomProps } from 'bizcharts';

interface SimpleAreaChartProps {
  data: ChartProps['data'];
  height: ChartProps['height'];
  padding: ChartProps['padding'];
  position: GeomProps['position'];
  color: GeomProps['color'];
}

const SimpleAreaChart: React.FC<SimpleAreaChartProps> = ({
  height,
  data,
  padding,
  position,
  color,
}) => (
  <Chart height={height} data={data} padding={padding} forceFit>
    <Tooltip crosshairs />
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
