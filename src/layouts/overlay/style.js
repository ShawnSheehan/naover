import React from 'react';
import { node } from 'prop-types';
import styled from 'styled-components';

const OverlayWrapper = styled.div`
  position: absolute;
  z-index: 333;
  width: 100%;
  height: 100%;
  background: transparent;
  left: 0;
  top: 0;
`;

const StyledOverlay = ({ children }) => (
  <OverlayWrapper>{children}</OverlayWrapper>
);

StyledOverlay.propTypes = {
  children: node.isRequired,
};

export default StyledOverlay;
