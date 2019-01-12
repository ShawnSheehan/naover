import React, { Component } from 'react';

import StyledOverlay from './style';
import Box from '../box';
import Button from '../../components/button';

export default class Overlay extends Component {
  static propTypes = {};

  state = {};

  render() {
    return (
      <StyledOverlay>
        <Box column>
          <Box flex="12" column={false}>
            <Button circle width="50px" height="50px">
              <i className="fas fa-sync-alt" />
            </Button>
          </Box>
          <Box flex="12">
            <Box flex="6" padding="20px" color="#2f3640">
              <Button circle width="50px" height="50px">
                <i className="fas fa-plus" />
              </Button>
            </Box>
            <Box flex="6" padding="20px" color="#2f3640">
              <Button circle width="50px" height="50px">
                <i className="fas fa-plus" />
              </Button>
            </Box>
          </Box>
        </Box>
      </StyledOverlay>
    );
  }
}
