import React from 'react';
import Graph from './BarChart.component';
import './graph.css';

const Dashboard = ({ user: { project } }) => (
  <div>
    <div className="graph">
      {project && <Graph />}
    </div>

  </div>
);

export default Dashboard;
