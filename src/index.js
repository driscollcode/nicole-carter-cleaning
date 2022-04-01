import React, { Component } from 'react'
import { render } from 'react-snapshot'
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route, Redirect
} from "react-router-dom";
import ls from 'local-storage';

import App from './Components/Application'
import Page from './Components/Page'
import Session from './Components/Session'
import SiteRoot from './Public/index'
import config from './config.js'
import Yaml from "js-yaml";

class Application extends Component {

    constructor(props) {
        super(props)

        this.state = {
            app: new App(),
        };
    }

    render() {
        var state = this.state;

        return (

            <Router>
                <Switch>

                    {/* Public Pages */}
                    <Route exact path="/" render={routeProps => (

                        <Session state={this.state}>
                            <SiteRoot state={this.state} />
                        </Session>
                    )}/>

                    {/* Catch All */}
                    <Route render={routeProps => (
                        <Redirect to="/" />
                    )}/>
                </Switch>
            </Router>
        )
    }
}



render(<Application />, document.getElementById('root'))
