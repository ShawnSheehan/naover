import React from 'react';
import styled from 'styled-components';
import { node } from 'prop-types';

const BoxWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #2f3640;
  padding: 20px;
  margin: 0;
`;

const Box = props => {
  const { children } = props;
  return <BoxWrapper {...props}>{children}</BoxWrapper>;
};

Box.propTypes = {
  children: node.isRequired,
};

export default Box;
