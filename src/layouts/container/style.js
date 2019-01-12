import React from 'react';
import styled, { keyframes } from 'styled-components';
import { bool, node, string } from 'prop-types';

const fadein = keyframes`
  from {
    opacity: 0;;
  }
  to {
    opacity: 1;
  }
`;

const ContainerWrapper = styled.div`
  position: relative;
  width: ${props => props.width && props.width};
  max-width: ${props => (props.fluid ? '100%' : '1200px')};
  margin-left: auto;
  margin-right: auto;
  background-color: ${props => props.color && props.color};
  padding: ${props => props.padding && props.padding};
  height: ${props => props.height && props.height};
  animation: ${fadein} 3s;
`;

const StyledContainer = props => {
  const { children } = props;
  return <ContainerWrapper {...props}>{children}</ContainerWrapper>;
};

StyledContainer.propTypes = {
  fluid: bool,
  children: node.isRequired,
  width: string,
  color: string,
  padding: string,
  height: string,
  frost: bool,
};

StyledContainer.defaultProps = {
  fluid: false,
  width: '100%',
  color: 'rgba(30,39,46,0.8)',
  padding: '0',
  height: '100%',
  frost: false,
};

export default StyledContainer;
