import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as Actions from '../actions';
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
    const {
      selectAll,
      selectDay,
      onLoad,
      selectCamera,
      cameras,
      sols
    } = this.props;

    return (
      <Container>
        <Header brand="naover" />
        <RouteMap />
        <Menu
          selectDay={selectDay}
          selectCam={selectCamera}
          selectAll={selectAll}
          resetAll={onLoad}
          cameras={cameras}
          sols={sols}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  entities: state.naover.entities,
  cameras: state.naover.cameras,
  sols: state.naover.sols
});

export default withRouter(
  connect(
    mapStateToProps,
    {
      onLoad: Actions.initEntities,
      selectDay: Actions.selectDay,
      selectCamera: Actions.selectCamera,
      selectAll: Actions.selectAll
    }
  )(App)
);
