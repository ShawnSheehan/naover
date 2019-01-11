import React, { Component } from 'react';
import PropTypes from 'prop-types';

import StyledContainer from './styledContainer';

export default class Container extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  state = {};

  render() {
    const { children } = this.props;
    return <StyledContainer {...this.props}>{children}</StyledContainer>;
  }
}
