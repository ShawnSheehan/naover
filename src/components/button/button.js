import React, { Component } from 'react';
import PropTypes from 'prop-types';

import StyledButton from './styledButton';

export default class Button extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  state = {};

  render() {
    const { children } = this.props;
    return <StyledButton {...this.props}>{children}</StyledButton>;
  }
}
