import React from 'react';
import { connect } from 'react-redux';

import Dashboard from '../layouts/dashboard';
import Spinner from '../components/Spinner';
import Gallery from '../layouts/gallery';

const IntroScreen = props => {
  const { entities, loading } = props;
  const filter = 'camera';

  if (!entities) {
    return <Spinner />;
  }
  return (
    <Dashboard filter={filter}>
      <Gallery data={entities} loading={loading} />
    </Dashboard>
  );
};

const mapStateToProps = state => ({
  entities: state.naover.entities || [],
  loading: state.naover.loading
});

export default connect(
  mapStateToProps,
  null
)(IntroScreen);
