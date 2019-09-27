import React from 'react';
import Graph from './BarChart.component';
import DashHome from './DashHome';
import './graph.css';

const Dashboard = ({ user: { project } }) => (
  <div>
    {!project && <DashHome />}
    <div className="graph">
      {project && <Graph />}
    </div>

  </div>
);

export default Dashboard;
