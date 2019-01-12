import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

const rotateOn = keyframes`
from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(45deg);
  }
`;

const MenuWrapper = styled.div`
  position: fixed;
  right: 74px;
  bottom: 52px;
  width: 60px;
  height: 60px;
  z-index: 10;
  text-decoration: none;
  cursor: pointer;
  border: 1px solid #0fbcf9;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  display: flex;
  animation: ${props => (props.roll ? rotateOn : null)} 1s ease-in-out;
  animation-fill-mode: forwards;
  .fas {
    color: #0fbcf9;
    font-size: 32px;
  }
`;

export default class Menu extends Component {
  static propTypes = {};

  state = {
    active: false,
  };

  onActive = () => {
    const { active } = this.state;
    this.setState({ active: !active });
  };

  render() {
    const { active } = this.state;
    return (
      <React.Fragment>
        <MenuWrapper onClick={this.onActive} roll={active}>
          <i className="fas fa-plus" />
        </MenuWrapper>
      </React.Fragment>
    );
  }
}
