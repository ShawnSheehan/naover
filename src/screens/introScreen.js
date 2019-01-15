import React from 'react';
import { connect } from 'react-redux';

import Dashboard from '../layouts/dashboard';
import Spinner from '../components/Spinner';
import Gallery from '../layouts/gallery';

const IntroScreen = props => {
  const { selected, loading } = props;
  const filter = 'camera';

  if (!selected) {
    return <Spinner />;
  }
  return (
    <Dashboard filter={filter}>
      <Gallery data={selected} loading={loading} />
    </Dashboard>
  );
};

const mapStateToProps = state => ({
  selected: state.naover.selected || [],
  loading: state.naover.loading
});

export default connect(
  mapStateToProps,
  null
)(IntroScreen);
