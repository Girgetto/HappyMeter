import React from 'react';
import Fake from '../../../static/image/wink.svg';

import axios from 'axios';
import './graph.css';

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}`,
  withCredentials: false,
});

const message = {
  message: 'Well done team',
};

const slack = () =>
  instance.post('/slack', message);


const DashHome = () => (
  <div>
    <h1 className="header">Overall team happiness</h1>
    <div className="homecenter">
      <h1 className="number">84%</h1>
      <div>

        <img width="400px" height="400px" src={Fake} alt="n" />

      </div>
    </div>
    <div className="butcenter">
      <button onClick={() => slack()} className="buttonLogin">POST TO SLACK</button>
    </div>
  </div>
);

export default DashHome;
