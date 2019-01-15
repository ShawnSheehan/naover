import React from 'react';
import styled, { keyframes } from 'styled-components';
import { node, string } from 'prop-types';

const fadein = keyframes`
  from {
    opacity: 0;;
  }
  to {
    opacity: 1;
  }
`;

const ContainerWrapper = styled.div`
  background-color: ${props => props.color && props.color};
  position: relative;
  width: calc(100vw - 30px);
  height: calc(100vh - 30px);
  margin: 15px;
  position: relative;
  -webkit-overflow-scrolling: touch;
  animation: ${fadein} 3s;
  opacity: 1;
`;

const Container = props => {
  const { children } = props;
  return (
    <ContainerWrapper {...props} className="container">
      {children}
    </ContainerWrapper>
  );
};

Container.propTypes = {
  children: node.isRequired,
  color: string
};

Container.defaultProps = {
  color: 'rgba(30,39,46,0.8)'
};

export default Container;
