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
import Projects from './Secure/projects'
import TimeSheets from './Secure/timesheets'
import Teams from './Secure/teams'
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

                        <Session state={this.state}>
                            <Page
                                state = {this.state}
                                title = "MyHours.me"
                                pageSubCaption = ""
                            >
                                <SiteRoot state={this.state} />
                            </Page>
                        </Session>
                    )}/>
                </Switch>
            </Router>
        )
    }
}



render(<Application />, document.getElementById('root'))