/* eslint-disable react/no-string-refs */
import React from 'react';
import { Chart } from 'react-google-charts';


const Graph = () => (<Chart
  width="800px"
  height="500px"
  chartType="Bar"
  loader={<div>Loading Chart</div>}
  data={[
    ['Year', '😃', '🙂', '😕', '😖'],
    ['2014', 1000, 400, 304, 789],
    ['2015', 1170, 377, 1000, 460],
    ['2016', 660, 377, 1200, 420],
    ['2017', 1030, 540, 660, 377],
  ]}
  options={{
    // Material design options
    chart: {
      title: 'Overall happiness',
      subtitle: 'Feedback received in the last 4 years',
    },
  }}
  // For tests
  rootProps={{ 'data-testid': '2' }}
/>);

export default Graph;

