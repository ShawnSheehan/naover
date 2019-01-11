import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';

import * as Components from './loadableRoutes';

export default () => (
  <Switch>
    <Route path="/" exact component={Components.Intro} />
    <Route path="/camera" exact component={Components.Camera} />
    <Route path="/day" exact component={Components.Day} />
  </Switch>
);
