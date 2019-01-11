import React from 'react';
import { string } from 'prop-types';
import { NavLink } from 'react-router-dom';

import StyledTopBar from './styledTopBar';

const TopBar = ({ brand }) => (
  <StyledTopBar>
    <div className="brand">
      <NavLink exact to="/">
        {brand}
      </NavLink>
    </div>
  </StyledTopBar>
);

TopBar.propTypes = {
  brand: string.isRequired,
};

export default TopBar;
