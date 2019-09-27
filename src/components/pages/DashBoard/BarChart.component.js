/* eslint-disable react/no-string-refs */
import React from 'react';
import { Chart } from 'react-google-charts';


const Graph = () => (<Chart
  width="800px"
  height="500px"
  chartType="Bar"
  loader={<div>Loading Chart</div>}
  data={[
    ['Year', '😃', '🙂', '😕', '😖', '😊'],
    ['2014', Math.random(), Math.random(), Math.random(), Math.random(), Math.random()],
    ['2015', Math.random(), Math.random(), Math.random(), Math.random(), Math.random()],
    ['2016', Math.random(), Math.random(), Math.random(), Math.random(), Math.random()],
    ['2017', Math.random(), Math.random(), Math.random(), Math.random(), Math.random()],
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

