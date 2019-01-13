import React, { Component } from 'react';
import { connect } from 'react-redux';

import Dashboard from '../layouts/dashboard';
import Carousel from '../components/Carousel';
import Spinner from '../components/Spinner';

class IntroScreen extends Component {
  state = { filter: 'camera' };

  render() {
    const { entities } = this.props;
    const { filter } = this.state;
    const check = entities.map(f => f.img_src);

    if (!entities) {
      return <Spinner propsLoading />;
    }
    return (
      <Dashboard filter={filter}>
        <Carousel data={check} />
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
