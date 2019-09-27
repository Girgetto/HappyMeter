import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  SuperLogin,
} from './components/pages';


const Routes = (
  <div>
    <Switch>
      <Route path="/" exact component={() => <SuperLogin />} />
    </Switch>
  </div>
);

export default Routes;
