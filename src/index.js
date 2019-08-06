import React from "react";
import ReactDOM from "react-dom";
import configureStore from "Store/configureStore";
import Root from "./root";

const { store, persist } = configureStore();

document.addEventListener("DOMContentLoaded", () => {
    ReactDOM.render(
        <Root store={store} persist={persist} />,
        document.getElementById("root"),
    );
});

if (module.hot) {
    module.hot.accept(() => {
        window.location.reload();
    });
}
