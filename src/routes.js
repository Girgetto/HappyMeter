import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
<<<<<<< HEAD
  SuperLogin, SuperSignUp,
=======
  SuperLogin,
  Home,
>>>>>>> f0ac3bad4e96d62ea2e4856e54a70d1100b86921
} from './components/pages';


const Routes = (
  <div>
    <Switch>
      <Route path="/" exact component={() => <SuperLogin />} />
<<<<<<< HEAD
      <Route path="/signup" exact component={() => <SuperSignUp />} />
=======
      <Route path="/home" exact component={() => <Home />} />
>>>>>>> f0ac3bad4e96d62ea2e4856e54a70d1100b86921
    </Switch>
  </div>
);

export default Routes;
