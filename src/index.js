import React from "react";
import ReactDOM from "react-dom";
import { Suspense } from 'react';
import App from "./App";
import PrivateRouter from "./hoc/AllRouter";
import history from "./history";
import { Router, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import {store} from "./redux/store";
import "./assets/scss/app.scss";


ReactDOM.render(
    <React.StrictMode>
        <Suspense fallback={""}>
        <Provider store={store}>
            <Router history={history}>
                <Switch>
                    <App history={history}>
                        <Switch>
                            <PrivateRouter />
                        </Switch>
                    </App>
                </Switch>
            </Router>
        </Provider>
        </Suspense>
    </React.StrictMode>,
    document.getElementById("root")
);
