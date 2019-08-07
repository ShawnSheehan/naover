import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { GlobalStyle } from "Constants";
import { Container } from "Components/layouts";
import { Header, Menu } from "Components";
import { Routes } from "Routes";
import { fetch } from "Actions";

const App = ({ onLoad }) => {
    const [rover, setRover] = useState("curiosity");
    const [sol, setSol] = useState("2460");

    useEffect(() => {
        onLoad(rover, sol);
    }, []);

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

export default connect(
    null,
    { onLoad: fetch },
)(App);
