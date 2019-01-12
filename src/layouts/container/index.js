import React, { Component } from 'react';
import { node } from 'prop-types';

import StyledContainer from './style';

export default class Container extends Component {
  static propTypes = {
    children: node.isRequired,
  };

  state = {};

  render() {
    const { children } = this.props;
    return <StyledContainer {...this.props}>{children}</StyledContainer>;
  }
}
