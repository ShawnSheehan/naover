import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchEntities } from '../actions/roverActions';
import { RouteMap } from '../routes';
import Container from '../layouts/container';
import Header from '../layouts/header';
import Menu from './Menu';

class App extends Component {
  /* Initialize State Via API */
  componentDidMount() {
    const { onLoad, entities } = this.props;
    if (!entities) {
      onLoad();
    }
  }

  render() {
    return (
      <Container>
        <Header brand="naover" />
        <RouteMap />
        <Menu />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  entities: state.rover.entities,
});

export default withRouter(
  connect(
    mapStateToProps,
    { onLoad: fetchEntities },
  )(App),
);
