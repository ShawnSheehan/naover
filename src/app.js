import React, { useState, useLayoutEffect } from "react";
import { connect } from "react-redux";
import { GlobalStyle } from "Constants";
import { Container } from "Components/layouts";
import { Header, Menu } from "Components";
import { Routes } from "Routes";
import { fetch } from "Actions";

const App = ({ onLoad, data }) => {
    const [rover, setRover] = useState("curiosity");
    const [sol, setSol] = useState("2460");

    useLayoutEffect(() => {
        if (!data.length) {
            onLoad(rover, sol);
        }
    }, [data]);

    return (
        <React.Fragment>
            <GlobalStyle />
            <Container>
                <Header brand="naover" />
                <Routes />
                <Menu />
            </Container>
        </React.Fragment>
    );
};

const mapStateToProps = state => ({
    data: state.entities.data,
});

export default connect(
    mapStateToProps,
    { onLoad: fetch },
)(App);
