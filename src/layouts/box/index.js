import React from 'react';
import styled from 'styled-components';
import { node } from 'prop-types';

const BoxWrapper = styled.div`
  align-items: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-start;
  left: 50%;
  margin: 0 auto;
  min-width: 300px;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: auto;
`;

const Box = props => {
  const { children } = props;
  return <BoxWrapper {...props}>{children}</BoxWrapper>;
};

Box.propTypes = {
  children: node.isRequired,
};

export default Box;
