import React from 'react';

import RouteMap from '../routes';
import Container from '../layouts/container';
import Header from '../layouts/header';
import Menu from './Menu';

export default () => (
  <Container>
    <Header brand="naover" />
    <RouteMap />
    <Menu />
  </Container>
);
