import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { instanceOf } from 'prop-types';

import RouteMap from '../routes';
import Container from '../layouts/container';
import TopBar from '../layouts/topbar';

import '../css/main.css';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Container padding="20px" height="100vh" width="100vw" fluid>
        <TopBar brand="naover" />
        <RouteMap />
      </Container>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: instanceOf(Object).isRequired,
};

export default Root;
