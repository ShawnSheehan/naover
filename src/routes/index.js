import React from 'react';
import { Route, Switch } from 'react-router-dom';

import IntroScreen from '../screens/IntroScreen';
import DiscoverScreen from '../screens/DiscoverScreen';

export const RouteMap = () => (
  <div>
    <Switch>
      <Route path="/" exact component={IntroScreen} />
      <Route path="/discover/:id" exact component={DiscoverScreen} />
    </Switch>
  </div>
);
