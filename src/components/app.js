import React from 'react';

import RouteMap from '../routes';
import Container from '../layouts/container';
import TopBar from '../layouts/topbar';
import Menu from './menu';

export default () => (
  <Container>
    <TopBar brand="naover" />
    <RouteMap />
    <Menu />
  </Container>
);
