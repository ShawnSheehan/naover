import React from "react";
import { connect } from "react-redux";
import { Provider } from "react-redux";
import { instanceOf } from "prop-types";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/es/integration/react";
import { ThemeProvider } from "styled-components";
import { ThemeDecs } from "Constants";
import App from "./app";

const Root = ({ theme, store, persist }) => {
    return (
        <Provider store={store}>
            <PersistGate persistor={persist}>
                <ThemeProvider theme={ThemeDecs[theme]}>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </ThemeProvider>
            </PersistGate>
        </Provider>
    );
};

Root.propTypes = {
    store: instanceOf(Object).isRequired,
    persist: instanceOf(Object).isRequired,
};

const mapStateToProps = state => ({
    theme: state.themes.theme,
});

export default connect(mapStateToProps)(Root);
