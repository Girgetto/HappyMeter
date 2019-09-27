import React from 'react';

const Home = ({ className, user }) => (
  <div className={className}>
    {user.name}
  </div>
);

export default Home;
