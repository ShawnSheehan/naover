import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { GlobalStyle } from "Constants";
import { Container } from "Components/layouts";
import { Header, Menu } from "Components";
import { Routes } from "Routes";
import { init } from "Actions";

const App = ({ init }) => {
    const [rover, setRover] = useState("curiosity");
    const [sol, setSol] = useState("2460");

    useEffect(() => {
        init(rover, sol);
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
    { init },
)(App);
