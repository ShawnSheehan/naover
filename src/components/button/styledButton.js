import React from 'react';
import styled from 'styled-components';
import { node, string, bool, func } from 'prop-types';

const ButtonWrapper = styled.button`
  width: ${props => props.width && props.width};
  height: ${props => props.height && props.height};
  background-color: ${props => (props.primary ? '#ffffff' : '#eeeeee')};
  border-radius: ${props => (props.circle ? '50%' : 'none')};
  color: ${props => props.color && props.color};
  padding: ${props => props.padding && props.padding};
  max-width: 250px;
  max-height: 50px;
  font-size: 18px;
  font-weight: 600;
  border: none;
  outline: none;
`;

const StyledButton = props => {
  const { children, onClick } = props;
  return (
    <ButtonWrapper onClick={onClick} {...props}>
      {children}
    </ButtonWrapper>
  );
};

StyledButton.propTypes = {
  children: node.isRequired,
  width: string,
  color: string,
  padding: string,
  height: string,
  margin: string,
  circle: bool,
  onClick: func.isRequired,
  primary: bool,
};

StyledButton.defaultProps = {
  width: '100%',
  color: '#ffffff',
  padding: '10px 15px',
  margin: '0',
  height: '100%',
  circle: false,
  primary: true,
};

export default StyledButton;
