import React from 'react';
import styled from 'styled-components';
import { node } from 'prop-types';

const TooltipWrapper = styled.div`
  position: absolute;
  right: 130px;
  bottom: 80px;
  min-width: 60px;
  maxheight: 30px;
  z-index: 11;
  text-decoration: none;
  cursor: pointer;
  background-color: #0fbcf9;
  border-radius: 5px;
  border: none;
  justify-content: center;
  align-items: center;
  display: flex;
  padding: 2px 15px;
`;

const Tooltip = props => {
  const { children } = props;
  return <TooltipWrapper>{children}</TooltipWrapper>;
};

Tooltip.propTypes = {
  children: node.isRequired,
};

export default Tooltip;
