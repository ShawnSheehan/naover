import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { Palette } from "Components";
import { HeaderWrapper, Brand } from "./styles";

const Header = ({ brand }) => {
    return (
        <HeaderWrapper>
            <NavLink to="/">
                <Brand>{brand}</Brand>
            </NavLink>
            <Palette />
        </HeaderWrapper>
    );
};

Header.propTypes = {
    brand: PropTypes.string,
};

Header.defaultProps = {
    brand: "naover",
};

export default Header;
