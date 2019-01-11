import React from 'react';
import styled from 'styled-components';
import { node, string, bool } from 'prop-types';

const BoxWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.width && props.width};
  height: ${props => props.height && props.height};
  background-color: ${props => props.color && props.color};
  padding: ${props => props.padding && props.padding};
  margin: ${props => props.margin && props.margin};
  flex: ${props => (props.flex ? props.flex : null)};
  flex-direction: ${props => (props.column ? 'column' : 'row')};
`;

const StyledBox = props => {
  const { children } = props;
  return <BoxWrapper {...props}>{children}</BoxWrapper>;
};

StyledBox.propTypes = {
  children: node.isRequired,
  width: string,
  color: string,
  padding: string,
  height: string,
  margin: string,
  flex: string,
  column: bool,
};

StyledBox.defaultProps = {
  width: '100%',
  color: 'transparent',
  padding: '0',
  margin: '0',
  height: '100%',
  flex: '',
  column: false,
};

export default StyledBox;
