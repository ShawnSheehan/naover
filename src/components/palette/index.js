import React from "react";
import { connect } from "react-redux";
import { update } from "Actions";
import { PalettePaint, PaletteWrapper } from "./styles";

const Palette = ({ update }) => {
    function handleSwitch(color) {
        update(color);
    }
    return (
        <PaletteWrapper>
            <PalettePaint
                onClick={() => handleSwitch("lunar")}
                color="#354f55"
            />
            <PalettePaint
                onClick={() => handleSwitch("mars")}
                color="#a53237"
            />
        </PaletteWrapper>
    );
};

const mapStateToProps = state => ({
    theme: state.themes.theme,
});

export default connect(
    mapStateToProps,
    { update },
)(Palette);
