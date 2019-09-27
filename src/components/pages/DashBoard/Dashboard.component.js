import React from 'react';
import Graph from './BarChart.component';
import './graph.css';


const renderUsers = users => users && users.map(user => <div key={user.id}>{user.name} {user.value}</div>);

const Dashboard = ({ user: { project } }) => (
  <div>
    {project && renderUsers(project.users)}
    <div className="graph">
      <Graph />
    </div>

  </div>
);

export default Dashboard;
