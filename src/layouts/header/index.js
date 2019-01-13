import React from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';

const HeaderWrapper = styled.div`
  top: 0;
  left: 0;
  position: absolute;
  z-index: 3;
  .brand {
    margin: 29px 0 0 30px;
    cursor: pointer;
    color: #4b6464;
    font-size: 1.65vh;
    letter-spacing: 0.2em;
  }
`;

const Header = ({ brand }) => (
  <HeaderWrapper>
    <div className="brand">{brand}</div>
  </HeaderWrapper>
);

Header.propTypes = {
  brand: string.isRequired,
};

export default Header;
