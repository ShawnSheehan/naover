import React, { Component } from 'react';
import { node } from 'prop-types';

import StyledBox from './styledBox';

export default class Container extends Component {
  static propTypes = {
    children: node.isRequired,
  };

  state = {};

  render() {
    const { children } = this.props;
    return <StyledBox {...this.props}>{children}</StyledBox>;
  }
}
