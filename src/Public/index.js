import React, {Component} from 'react'
import AppleLogin from 'react-apple-login'
import GoogleLogin from 'react-google-login'
import JWT from '../Components/JWT'
import {Link, Redirect} from "react-router-dom";

export default class Index extends Component {

    constructor(props) {
        super(props)
        this.state = props.state;
    }

    render() {

		var cleaningServicesPricing = this.state.app.config().services.map((item, key) =>
			<div className="price-content">
				<h3>{item.Name}</h3>
				<div className="price-text">
					<h4>&pound;{item.Price}</h4>
				</div>
				<h4>{item.Sessions} sessions of {item.Hours} hours</h4>
				<hr />
			</div>
		)

        return (
            <span>

				<div className="top-bar">
					<div className="container">
						<div className="row">
							<div className="col-md-6 hidden-sm hidden-xs">
								<div className="social">
									<ul>
										<li><a href="#"><i className="fa fa-facebook"></i></a></li>
										<li><a href="#"><i className="fa fa-google-plus"></i></a></li>
										<li><a href="#"><i className="fa fa-linkedin"></i></a></li>
										<li><a href="#"><i className="fa fa-twitter"></i></a></li>
										<li><a href="#"><i className="fa fa-pinterest"></i></a></li>
									</ul>
								</div>
							</div>
							<div className="col-md-3 hidden-sm hidden-xs">
								<div className="call-info">
									<p className="call-text"><i
										className="fa fa-envelope-open-o"></i><strong>{this.state.app.config().contact.email}</strong></p>
								</div>
							</div>
							<div className="col-md-3 col-sm-12">
								<div className="call-info">
									<p className="call-text"><i
										className="fa fa-phone"></i><strong>Call Now: {this.state.app.config().contact.mobile}</strong></p>
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
									<a href="/">{this.state.app.config().pages.homepage.menu.title}</a>
								</h3>
								<h3 style={{paddingTop: 10+'px'}} className="hidden visible-xs text-center">
									<a href="/">{this.state.app.config().pages.homepage.menu.title}</a>
								</h3>
							</div>
							<div className="col-lg-9 col-md-6 col-sm-6 col-xs-12">
								<div className="navigation">
									<div id="navigation">
										<ul>
											<li className="active"><a href="/" title="Home">Home</a></li>

										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

							<div className="space-medium">
					<div className="container">
						<div className="row">
							<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
								<div className="section-title">

									<h1>{this.state.app.config().pages.homepage.title}</h1>
									<p>{this.state.app.config().pages.homepage.subtitle}</p>
								</div>

							</div>
						</div>
						<div className="row">
							<div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
								<div className="service-block">
									<div className="service-img"><a href="#"><img src={this.state.app.config().services[0].Image} alt="" className="img-responsive" /></a> </div>
									<div className="service-content">
										<h3><a href="#">{this.state.app.config().services[0].Name}</a></h3>
										<p>{this.state.app.config().services[0].Description}</p>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
								<div className="service-block">
									<div className="service-img"><a href="#"><img src={this.state.app.config().services[1].Image} alt="" className="img-responsive" /> </a></div>
									<div className="service-content">
										<h3><a href="#">{this.state.app.config().services[1].Name}</a></h3>
										<p>{this.state.app.config().services[1].Description}</p>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
								<div className="service-block">
									<div className="service-img"><a href="#"><img src={this.state.app.config().services[2].Image} alt="" className="img-responsive" /></a> </div>
									<div className="service-content">
										<h3><a href="#">{this.state.app.config().services[2].Name}</a></h3>
										<p>{this.state.app.config().services[2].Description}</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

							<div className="space-medium bg-light">
					<div className="container">
						<div className="row">
							<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
								<div className="section-title">

									<h1>{this.state.app.config().pages.homepage.sections.whyUse.title}</h1>
									<p>{this.state.app.config().pages.homepage.sections.whyUse.subtitle}</p>
								</div>

							</div>
						</div>
						<div className="row">
							<div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
								<div className="feature-block mb30">
									<div className="feature-icon"><i className="icon-round68"></i> </div>
									<div className="feature-content">
										<h4>{this.state.app.config().pages.homepage.sections.whyUse.reasons[0].title}</h4>
										<p>{this.state.app.config().pages.homepage.sections.whyUse.reasons[0].content}</p>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
								<div className="feature-block mb30">
									<div className="feature-icon"><i className="icon-round68"></i> </div>
									<div className="feature-content">
										<h4>{this.state.app.config().pages.homepage.sections.whyUse.reasons[1].title}</h4>
										<p>{this.state.app.config().pages.homepage.sections.whyUse.reasons[1].content}</p>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
								<div className="feature-block mb30">
									<div className="feature-icon"><i className="icon-round68"></i> </div>
									<div className="feature-content">
										<h4>{this.state.app.config().pages.homepage.sections.whyUse.reasons[2].title}</h4>
										<p>{this.state.app.config().pages.homepage.sections.whyUse.reasons[2].content}</p>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
								<div className="feature-block">
									<div className="feature-icon"><i className="icon-round68"></i> </div>
									<div className="feature-content">
										<h4>{this.state.app.config().pages.homepage.sections.whyUse.reasons[3].title}</h4>
										<p>{this.state.app.config().pages.homepage.sections.whyUse.reasons[3].content}</p>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
								<div className="feature-block">
									<div className="feature-icon"><i className="icon-round68"></i> </div>
									<div className="feature-content">
										<h4>{this.state.app.config().pages.homepage.sections.whyUse.reasons[4].title}</h4>
										<p>{this.state.app.config().pages.homepage.sections.whyUse.reasons[4].content}</p>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
								<div className="feature-block">
									<div className="feature-icon"><i className="icon-round68"></i> </div>
									<div className="feature-content">
										<h4>{this.state.app.config().pages.homepage.sections.whyUse.reasons[5].title}</h4>
										<p>{this.state.app.config().pages.homepage.sections.whyUse.reasons[5].content}</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

							<div className="space-medium bg-default">
					<div className="container">
						<div className="row">
							<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
								<div className="section-title">

									<h1 className="text-white">Pricing Plan </h1>
								</div>

							</div>
						</div>
						<div className="row">
							<div className="col-2">

							</div>
							<div className="col-8">
								<div className="price-head">
									<h3>{this.state.app.config().pages.homepage.sections.services.title}</h3>
								</div>
								<div className="price-block">

									{cleaningServicesPricing}

									<div className="text-center mt30"><a href="#" className="btn btn-primary btn-sm" data-toggle="modal" data-target="#modalMakeABooking">book your order now</a></div>
								</div>
							</div>
							<div className="col-2">

							</div>
						</div>
					</div>
				</div>

							<div className="space-medium bg-light">
					<div className="container">
						<div className="row">
							<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
								<div className="section-title">

									<h1>{this.state.app.config().pages.homepage.sections.testimonials.title}</h1>
								</div>

							</div>
						</div>
						<div className="row">
							<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
								<div className="testimonial-block">
									<div className="testimonial-content">
										<p>“{this.state.app.config().pages.homepage.sections.testimonials.comments[0].content}”</p>
									</div>
									<div className="testimonial-meta">
										<h5>{this.state.app.config().pages.homepage.sections.testimonials.comments[0].author}</h5>
										<span>( {this.state.app.config().pages.homepage.sections.testimonials.comments[0].title} )</span>
									</div>
								</div>
							</div>
							<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
								<div className="testimonial-block">
									<div className="testimonial-content">
										<p>“{this.state.app.config().pages.homepage.sections.testimonials.comments[0].content}” </p>
									</div>
									<div className="testimonial-meta">
										<h5>{this.state.app.config().pages.homepage.sections.testimonials.comments[0].author}</h5>
										<span>( {this.state.app.config().pages.homepage.sections.testimonials.comments[0].title} )</span>
									</div>
								</div>
							</div>
						</div>
						<div className="row mt30">
							<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
								<a href="#" className="btn btn-default btn-lg">view our testimonials</a>
							</div>
						</div>
					</div>
				</div>

							<div className="cta-section">
					<div className="container">
						<div className="row">
							<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
								<h1>Any questions? Call Now: {this.state.app.config().contact.mobile}</h1>
							</div>
						</div>
					</div>
				</div>

							<div className="footer">
					<div className="container">
						<div className="row">

							<div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
								<div className="footer-widget">
									<h3 className="footer-title">About Nicole Carter</h3>
									<p>
										I am Nicole Carter. I have many years experience providing a quality, friendly and flexible cleaning service.
										I look forward to working with you.
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

				<div className="modal fade" id="modalMakeABooking" tabIndex="-1" role="dialog" aria-labelledby="modalMakeABooking" aria-hidden="true">
				  <div className="modal-dialog modal-dialog-centered" role="document">
					<div className="modal-content">
					  <div className="modal-header">
						<h3 className="modal-title" id="exampleModalLongTitle">Make A Booking</h3>
					  </div>
					  <div className="modal-body">
						<p>
							Thanks for your interest - to make a booking please contact me by phone or email.
						</p>
						<ul>
							<li><strong>Email:</strong> {this.state.app.config().contact.email}</li>
							<li><strong>Mobile:</strong> {this.state.app.config().contact.mobile}</li>
						</ul>
					  </div>
					</div>
				  </div>
				</div>

			</span>
        )
    }
}