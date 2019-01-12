import React from 'react';

import RouteMap from '../routes';
import Container from '../layouts/container';
import TopBar from '../layouts/topbar';

export default () => (
  <Container padding="20px" height="100vh" width="100vw" fluid>
    <TopBar brand="naover" />
    <RouteMap />
  </Container>
);
