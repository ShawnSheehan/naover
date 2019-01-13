import React from 'react';
import styled from 'styled-components';
import { func, string } from 'prop-types';

const ButtonWrapper = styled.div`
  width: 60px;
  height: 60px;
  z-index: 10;
  text-decoration: none;
  cursor: pointer;
  border: 1px solid #4b6464;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  display: flex;
  .fas {
    color: #4b6464;
    font-size: 32px;
  }
`;

const IconButton = props => {
  const { onAction, icon } = props;
  return (
    <React.Fragment>
      <ButtonWrapper onClick={onAction}>
        <i className={icon} />
      </ButtonWrapper>
    </React.Fragment>
  );
};

IconButton.propTypes = {
  onAction: func.isRequired,
  icon: string.isRequired,
};

export default IconButton;
