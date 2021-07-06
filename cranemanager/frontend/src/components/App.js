import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import {Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import Alerts from "./layout/Alerts";
import Cranes from './cranes/Cranes';
import AddCrane from './cranes/AddCrane';
import CranesList from './cranes/CranesList';

import Login from "./accounts/Login";
import Register from "./accounts/Register";
import PrivateRoute from "./common/PrivateRoute";

import { Provider } from "react-redux";
import store from "../store";
import { loadUser } from "../actions/auth";
import Main from "./Main";

// Alert options
const alertOptions = {
    timeout: 3000,
    position: "top center"
};

class App extends React.Component {
    componentDidMount() {
        store.dispatch(loadUser());
    }

    render() {
        return (
            <Provider store={store}>
                <AlertProvider template={AlertTemplate} {...alertOptions}>
                    <Router>
                        <Fragment>
                            {/* <Header /> */}
                            <Main />
                            <Alerts />
                            <Switch>
                                {/* <PrivateRoute exact path="/" component={Main}/> */}
                                <PrivateRoute path="/cranes" component={CranesList}/>
                                <PrivateRoute path="/add-crane" component={AddCrane}/>
                                {/* <Route path="/register" component={Register}/> */}
                                <Route path="/" component={Login}/>
                            </Switch>
                        </Fragment>
                    </Router>
                </AlertProvider>
            </Provider>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));