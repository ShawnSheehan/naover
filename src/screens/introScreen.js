import React, { Component } from 'react';
import { connect } from 'react-redux';

import Dashboard from '../layouts/dashboard';
import Box from '../layouts/box';
import ImageList from '../components/ImageList';
import ImageItem from '../components/ImageItem';

class IntroScreen extends Component {
  state = {};

  render() {
    const { entities } = this.props;

    if (!entities) {
      console.log('Waiting...');
    }
    return (
      <Dashboard>
        <Box>
          <ImageList>
            {entities.slice(0, 12).map(e => (
              <ImageItem src={e.img_src} />
            ))}
          </ImageList>
        </Box>
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
