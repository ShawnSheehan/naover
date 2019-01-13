import React, { Component } from 'react';
import { connect } from 'react-redux';

import Dashboard from '../layouts/dashboard';
import Carousel from '../components/Carousel';

class IntroScreen extends Component {
  state = { filter: 'camera' };

  render() {
    const { entities } = this.props;
    const { filter } = this.state;
    if (!entities) {
      console.log('Waiting...');
    }
    return (
      <Dashboard filter={filter}>
        <Carousel />
      </Dashboard>
    );
  }
}

const mapStateToProps = state => ({
  entities: state.rover.entities || [],
});

export default connect(
  mapStateToProps,
  null,
)(IntroScreen);
