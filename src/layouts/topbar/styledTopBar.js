import React from 'react';
import styled from 'styled-components';
import { bool, node } from 'prop-types';

const TopBarWrapper = styled.div`
  color: #0fbcf9;
  font-weight: 600;
  font-size: 16px;
  text-transform: uppercase;
  position: ${props => props.fixed && props.fixed};
  .brand {
    width: 300px;
    position: fixed;
    opacity: 1;
    z-index: 2;
    left: 80px;
    top: 60px;
    cursor: pointer;
  }
  .menu {
    position: fixed;
    right: 80px;
    z-index: 10;
    top: 70px;
    a {
      padding: 20px;
      padding-right: 0;
      margin-top: -20px;
      transform: translateY(-10px);
      visibility: inherit;
      opacity: 1;
      transform: matrix(1, 0, 0, 1, 0, 0);
    }
  }
`;

const StyledTopBar = props => {
  const { children } = props;
  return <TopBarWrapper {...props}>{children}</TopBarWrapper>;
};

StyledTopBar.propTypes = {
  children: node.isRequired,
  fixed: bool,
};

StyledTopBar.defaultProps = {
  fixed: false,
};

export default StyledTopBar;
