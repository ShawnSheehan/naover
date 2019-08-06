import React from "react";
import PropTypes from "prop-types";
import { LabelWrapper } from "./styles";

const Label = ({ title }) => {
    return <LabelWrapper>{title}</LabelWrapper>;
};

Label.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Label;
