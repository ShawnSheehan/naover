import React, { Component } from 'react';

import Overlay from '../layouts/overlay';
import Box from '../layouts/box';

class IntroScreen extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <Box className="images">1</Box>
        <Overlay />;
      </React.Fragment>
    );
  }
}

export default IntroScreen;
