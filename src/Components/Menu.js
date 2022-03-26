import React, { Component } from 'react'
import ls from 'local-storage'

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	Redirect
} from "react-router-dom";

class Menu extends Component {

	constructor(props) {
		super(props);
		this.state = props.state
		this.logOut = this.logOut.bind(this);
	}

	menuBlockClass(root) {
		var uri = window.location.pathname;
		if(uri.substring(0,root.length) == root) {
			return "nav-item dropdown active";
		}
		return "nav-item dropdown";
	}

	logOut() {
		this.state.updateApp('session', false)
		this.state.updateApp('user', false)

		this.setState({
			session: false
		})
	}

	menuBlockClass(root) {
		var uri = window.location.pathname;

		if(uri.substring(0,root.length) == root) {
			return "nav-link active";
		}

		return "nav-link";
	}

	render() {

		var user = false;

		if(this.state?.session?.User?.ShadowUserID.length > 0) {

			user = this.state?.session?.User?.ShadowUserID;

		} else {

			user = this.state?.session?.User;
		}

		return (

			<span>
				<nav className="navbar navbar-lg navbar-expand-lg navbar-dark bg-primary">
					<div className="container">
						<Link to="/account" className="navbar-brand">MyHours.me</Link>
						<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>

						<div className="collapse navbar-collapse" id="navbarCollapse">
							<ul className="navbar-nav ml-auto mt-3 mt-lg-0">

								{(() => {

									if(false) {

										return (

											<span>
												<li className={this.menuBlockClass("/superuser")}>
													<a className="nav-link dropdown-toggle" style={{cursor: 'pointer'}} role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
														SuperUser &nbsp;
													</a>
													<div className="dropdown-menu">
	                                                    <Link to="/superuser/users" className="dropdown-item">Users</Link>
	                                                    <Link to="/superuser/invoices" className="dropdown-item">Invoices</Link>
													</div>
												</li>
											</span>

										);
									}

								})()}

								<li className="nav-item mr-5">
									<Link to="/my/timesheets" className={this.menuBlockClass("/my/timesheets")}>Timesheets</Link>
								</li>

								<li className="nav-item mr-5">
									<Link to="/my/projects" className={this.menuBlockClass("/my/projects")}>Projects</Link>
								</li>

								<li className="nav-item mr-5">
									<Link to="/my/teams" className={this.menuBlockClass("/my/teams")}>Teams</Link>
								</li>

								<li className="nav-item mr-5">
									<Link to="/instagram" className="nav-link">Reporting</Link>
								</li>

							</ul>
							<div className="dropdown ml-5 d-none d-lg-block">
								<button className="btn btn-outline-white dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									Your Account &nbsp;
								</button>

								<div className="dropdown-menu">
            						<Link to="/account/settings" className="dropdown-item">Settings</Link>
									<Link to="/account/billing" className="dropdown-item">Your Subscription</Link>
									<div className="dropdown-divider"></div>
									<Link to="/logout" className="dropdown-item">Log Out</Link>
								</div>
							</div>

							<div className="dropdown mt-4 d-lg-none">
								<button className="btn btn-outline-white dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									Your Account &nbsp;
								</button>
								<div className="dropdown-menu">
									<a className="dropdown-item" href="/account/settings/">Settings</a>
									<a className="dropdown-item" href="/finance/invoices/">Invoices</a>
									<div className="dropdown-divider"></div>
									<Link to="/logout" className="dropdown-item">Log Out</Link>
								</div>
							</div>
						</div>
					</div>
				</nav>
			</span>


		)
	}
}

export default Menu
