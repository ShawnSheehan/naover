import React, { Component } from 'react';
import { connect } from 'react-redux';

import Dashboard from '../layouts/dashboard';
import Spinner from '../components/Spinner';
import Gallery from '../layouts/gallery';

class IntroScreen extends Component {
  state = { filter: 'camera' };

  render() {
    const { entities } = this.props;
    const { filter } = this.state;

    if (!entities) {
      return <Spinner propsLoading />;
    }
    return (
      <Dashboard filter={filter}>
        <Gallery data={entities} />
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
