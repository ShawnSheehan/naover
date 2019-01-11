import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ContainerWrapper = styled.div`
  width: ${props => props.width && props.width};
  max-width: ${props => (props.fluid ? '100%' : '1200px')};
  margin-left: auto;
  margin-right: auto;
  background-color: ${props => props.color && props.color};
  padding: ${props => props.padding && props.padding};
  height: ${props => props.height && props.height};
`;

const StyledBox = props => {
  const { children } = props;
  return <ContainerWrapper {...props}>{children}</ContainerWrapper>;
};

StyledBox.propTypes = {
  fluid: PropTypes.bool,
  children: PropTypes.node.isRequired,
  width: PropTypes.string,
  color: PropTypes.string,
  padding: PropTypes.string,
  height: PropTypes.string,
};

StyledBox.defaultProps = {
  fluid: false,
  width: '100%',
  color: 'transparent',
  padding: '0',
  height: '100%',
};

export default StyledBox;
