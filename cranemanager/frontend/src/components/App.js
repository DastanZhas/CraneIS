import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import Alerts from "./layout/Alerts";
import Cranes from './cranes/Cranes';
import AddCrane from './AddCrane';
// import AddCrane from '../components/cranes/AddCrane';
import CraneDetail from './CraneDetail';
import UpdateCrane from './UpdateCrane';
import ShowCrane from './ShowCrane';

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
                                <PrivateRoute path="/cranes" component={Cranes}/>
                                <PrivateRoute path="/add-crane" component={AddCrane}/>
                                <PrivateRoute path="/:id/detail" component={CraneDetail}/>
                                <PrivateRoute path="/:id/update" component={UpdateCrane}/>
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