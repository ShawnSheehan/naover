import React from "react";
import { Route, Switch } from "react-router-dom";
import { IntroPage, DiscoverPage } from "Pages";

export const Routes = () => (
    <Switch>
        <Route path="/" exact component={IntroPage} />
        <Route path="/discover/:id" exact component={DiscoverPage} />
    </Switch>
);
