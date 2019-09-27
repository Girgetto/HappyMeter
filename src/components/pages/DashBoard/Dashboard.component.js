import React from 'react';

const renderUsers = users => users.map(user => <div key={user.id}>{user.name} {user.value}</div>);

const Dashboard = ({ user: { project } }) => (
  <div>
    {project.users && renderUsers(project.users)}
  </div>
);

export default Dashboard;
