import React, { Component } from 'react'
import {Link, Redirect} from "react-router-dom";

function Page(props) {

    if(props.headTitle) {

        document.title = props.headTitle
    }

    return (

        <>
            <div className="top-bar">
                <div className="container">
                    <div className="row pb-3 pb-md-0">
                        <div className="col-md-6 hidden-sm hidden-xs">
                            {(() => {

                                if(props.state.app.config().global.header.socialMedia) {
                                    return (
                                        <div className="social">
                                            <ul>
                                                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                                <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                                <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                                <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
                                            </ul>
                                        </div>
                                    )
                                }

                            })()}
                        </div>
                        <div className="col-8 col-md-3">
                            <div className="call-info">
                                <p className="call-text"><i
                                    className="fa fa-envelope-open-o"></i><strong><a href={"mailto:" + props.state.app.config().contact.email}>{props.state.app.config().contact.email}</a></strong></p>
                            </div>
                        </div>
                        <div className="col-4 col-md-3">
                            <div className="call-info d-none d-md-block">
                                <p className="call-text"><i
                                    className="fa fa-phone"></i><strong><a href={"tel:" + props.state.app.config().contact.mobile}>{props.state.app.config().contact.mobile}</a></strong></p>
                            </div>
                            <div className="call-info d-md-none">
                                <p className="call-text text-right">
                                    <i className="fa fa-phone"></i>
                                    <strong><a href={"tel:" + props.state.app.config().contact.mobile}>{props.state.app.config().contact.mobile}</a></strong></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="header-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <h3 style={{paddingTop: 10+'px'}} className="hidden visible-sm visible-md visible-lg">
                                <Link to="/">{props.state.app.config().pages.homepage.menu.title}</Link>
                            </h3>
                            <h3 style={{paddingTop: 10+'px'}} className="hidden visible-xs text-center">
                                <Link to="/">{props.state.app.config().pages.homepage.menu.title}</Link>
                            </h3>
                        </div>
                        <div className="col-lg-9 col-md-6 col-sm-6 col-xs-12">
                            <div className="navigation">
                                <div id="navigation">
                                    <ul>
                                        <li className="active"><Link to="/" title="Home">Home</Link></li>
                                        <li><Link to="/about">About Me</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {props.children}

            <div className="footer">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                            <div className="footer-widget">
                                <h3 className="footer-title">About Nicole Carter</h3>
                                <p>
                                    {props.state.app.config().global.footer.aboutMessage}
                                </p>
                                <div className="">
                                    <ul>
                                        <li><div className=""><i className="fa fa-envelope-open"></i></div><div
                                            className="footer-address">info@nicolecartercleaning.com</div></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className=" col-lg-3 col-md-3 col-sm-3 col-xs-12">
                            <div className="footer-widget">
                                <h3 className="footer-title">Our Services</h3>
                                <ul>
                                    <li><a href="#">Home Cleaning </a></li>
                                    <li><a href="#">Office Cleaning </a></li>
                                    <li><a href="#">Commercial Cleaning</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className=" col-lg-2 col-md-2 col-sm-2 col-xs-12">
                            <div className="footer-widget">
                                <h3 className="footer-title">Quick Links</h3>
                                <ul>
                                    <li><a href="#">About us </a></li>
                                    <li><a href="#">Services </a></li>
                                    <li><a href="#">Blog</a></li>
                                    <li><a href="#">Testimonials </a></li>
                                    <li> <a href="#">Pricing</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-3 col-sm-2 col-xs-12 ">
                            <div className="footer-widget">
                                <h3 className="footer-title">Share With us</h3>
                                <div className="footer-social"> <a href="#"><span><i className="fa fa-facebook"></i></span></a> <a
                                    href="#"><span><i className="fa fa-google-plus"></i></span> </a> <a href="#"><span
                                    className="active"><i className="fa fa-twitter"></i> </span></a> <a href="#"><span><i
                                    className=" fa fa-pinterest"></i> </span></a> <a href="#"><span><i
                                    className="fa fa-linkedin"></i></span></a> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="tiny-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">copyright@cleaning. All right reserved</div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Page;