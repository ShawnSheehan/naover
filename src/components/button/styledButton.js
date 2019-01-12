import React from 'react';
import styled from 'styled-components';
import { node, string, bool, func } from 'prop-types';

const ButtonWrapper = styled.button`
  width: ${props => props.width && props.width};
  height: ${props => props.height && props.height};
  background-color: transparent;
  border-radius: ${props => (props.circle ? '50%' : 'none')};
  border: 1px solid ${props => props.color && props.color};
  color: ${props => props.color && props.color};
  padding: ${props => props.padding && props.padding};
  max-width: 250px;
  max-height: 50px;
  font-size: 18px;
  font-weight: 600;
  outline: none;
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    border: ${props => (props.circle ? '1px solid rgba(255,255,255,0.5)' : '')};
    color: rgba(255, 255, 255, 0.5);
  }
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
  color: '#0fbcf9',
  padding: '10px 15px',
  margin: '0',
  height: '100%',
  circle: false,
  primary: true,
};

export default StyledButton;
