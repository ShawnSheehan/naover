import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';

import * as Components from './loadableRoutes';

export default () => (
  <Switch>
    <Route path="/" exact component={Components.Intro} />
    <Route path="/discover" exact component={Components.Discover} />
  </Switch>
);
