(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{114:function(e,a,t){"use strict";t.r(a);var n=t(10),l=t(11),s=t(13),c=t(12),i=t(14),o=t(0),r=t.n(o),m=t(43),p=(t(37),t(9)),d=t(5),g=t(28),h=t.n(g),u=t(44),E="\ncontact:\n  mobile: 07931 756 126\n  email: nicolepotter462@yahoo.com\npages:\n  homepage:\n    menu:\n      title: Nicole Carter Cleaning\n    title: Professional Cleaning Services\n    subtitle: Affordable and high quality clenaing for your home or commercial premises\n    sections:\n      whyUse:\n        title: Why Use Nicole Carter\n        subtitle: A friendly and flexible service provided by a hardworking entrepreneur who stands by the quality of her work\n        reasons:\n          - title: Highly Skilled\n            content: I have a high degree of knowledge relating to cleaning products and chemicals\n          - title: Fast & Effective\n            content: I am available at short notice and can work to your timeframe to make sure your premises are spotless\n          - title: Attention To Detail\n            content: I have a high degree of attention to detail and can prepare and follow a cleaning routine if you have one.\n          - title: Excellent Physical Fitness\n            content: I am in excellent physical condition and can stand, walk and bend for long periods of time\n          - title: Great Organisational Skills\n            content: I have a very organised mind and can clean your home methodically and ensure all areas are spotless\n          - title: Eco Friendly Products\n            content: I care about the environment and like to use eco friendly products as part of my service\n      testimonials:\n        title: Listen to what my customers have to say\n        comments:\n          - author: John Smith\n            title: Important Person\n            content: The most amazing service\n          - author: Bob Jones\n            title: Super VIP\n            content: Change my life\n      services:\n        title: My Services\n  about:\n    title: A professional cleaning service\n    photo:\n        title: Nicole Carter\n        caption: Cleaning Services\n    caption: |-\n      My name is Nicole. I\u2019ve been doing cleaning on and off for around 5 years now. I stopped when I decided to open my own business. Unfortunately due to covid that went downhill so I have started to clean again.\n      I love a great end result and I feel like cleaning is my role. I\u2019ve never received a complaint and I can say with a great smile on my face that i have always completed a job within the estimated time frame.\n      I can work around your schedule. I\u2019m okay with pets and children. I understand babysitters are not always at hand so please don\u2019t feel bothered by this.\nglobal:\n  header:\n    socialMedia: false\n  footer:\n    aboutMessage: |-\n      I am Nicole Carter. I have many years experience providing a quality, friendly and flexible cleaning service. I look forward to working with you.\nservices:\n  - Name: Basic Clean\n    Description: A basic clean of your house\n    Image: /img/clean-01.jpg\n    Sessions: 1\n    Price: 40\n    Hours: 4\n  - Name: Deep Clean\n    Description: A really deep clean of your house\n    Image: /img/clean-02.jpg\n    Price: 100\n    Sessions: 2\n    Hours: 4\n  - Name: Hoarder Home\n    Description: A complete clean of a hoarder house\n    Image: /img/clean-03.jpg\n    Price: 200\n    Sessions: 6\n    Hours: 8\napplication:\n  id: nicole-carter-cleaning\n",f=t(45),v=t.n(f),N=t(30),b=t(29),y=t.n(b),w=function(e){function a(e){var t;return Object(n.a)(this,a),(t=Object(s.a)(this,Object(c.a)(a).call(this,e))).state={config:v.a.load(E)},t}return Object(i.a)(a,e),Object(l.a)(a,[{key:"getSessionKey",value:function(){if(!(this.state.config.application.id.length<1)){var e=(new N.a).get(this.state.config.application.id+":session.key");return!(!e||e.length<1)&&e}}},{key:"setSessionKey",value:function(e,a){if(!(this.state.config.application.id.length<1)){var t=new N.a,n=new Date;n.setHours(n.getHours()+a),t.set(this.state.config.application.id+":session.key",e,{expires:n})}}},{key:"login",value:function(){this.state.config.application.id.length<1||this.setState({isLoggedIn:!0})}},{key:"logout",value:function(){this.setState({isLoggedIn:!1})}},{key:"get",value:function(e,a){if(!(this.state.config.application.id.length<1)){if(this.state&&this.state[e+":"+a])return this.state[e+":"+a];if(this.getSessionKey()){new N.a;var t=this.getSessionKey(),n=h.a.get(this.state.config.application.id+":"+e+":"+a),l={};if(t&&n&&t.length>0&&n.length>0){var s=y.a.AES.decrypt(n,t).toString(y.a.enc.Utf8);s.length>0&&(l=JSON.parse(s))}return l}}}},{key:"set",value:function(e,a,t){this.state.config.application.id.length<1||(this.setState(Object(u.a)({},e+":"+a,t)),this.getSessionKey()&&h.a.set(this.state.config.application.id+":"+e+":"+a,y.a.AES.encrypt(JSON.stringify(t),this.getSessionKey()).toString()))}},{key:"isLoggedIn",value:function(){return!(this.state.config.application.id.length<1)&&this.state.isLoggedIn}},{key:"config",value:function(){return this.state.config}}]),a}(o.Component);var k=function(e){return e.headTitle&&(document.title=e.headTitle),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"top-bar"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row pb-3 pb-md-0"},r.a.createElement("div",{className:"col-md-6 hidden-sm hidden-xs"},function(){if(e.state.app.config().global.header.socialMedia)return r.a.createElement("div",{className:"social"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"#"},r.a.createElement("i",{className:"fa fa-facebook"}))),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},r.a.createElement("i",{className:"fa fa-google-plus"}))),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},r.a.createElement("i",{className:"fa fa-linkedin"}))),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},r.a.createElement("i",{className:"fa fa-twitter"}))),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},r.a.createElement("i",{className:"fa fa-pinterest"})))))}()),r.a.createElement("div",{className:"col-8 col-md-3"},r.a.createElement("div",{className:"call-info"},r.a.createElement("p",{className:"call-text"},r.a.createElement("i",{className:"fa fa-envelope-open-o"}),r.a.createElement("strong",null,r.a.createElement("a",{href:"mailto:"+e.state.app.config().contact.email},e.state.app.config().contact.email))))),r.a.createElement("div",{className:"col-4 col-md-3"},r.a.createElement("div",{className:"call-info d-none d-md-block"},r.a.createElement("p",{className:"call-text"},r.a.createElement("i",{className:"fa fa-phone"}),r.a.createElement("strong",null,r.a.createElement("a",{href:"tel:"+e.state.app.config().contact.mobile},e.state.app.config().contact.mobile)))),r.a.createElement("div",{className:"call-info d-md-none"},r.a.createElement("p",{className:"call-text text-right"},r.a.createElement("i",{className:"fa fa-phone"}),r.a.createElement("strong",null,r.a.createElement("a",{href:"tel:"+e.state.app.config().contact.mobile},e.state.app.config().contact.mobile)))))))),r.a.createElement("div",{className:"header-wrapper"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-3 col-md-6 col-sm-6 col-xs-12"},r.a.createElement("h3",{style:{paddingTop:"10px"},className:"hidden visible-sm visible-md visible-lg"},r.a.createElement(p.b,{to:"/"},e.state.app.config().pages.homepage.menu.title)),r.a.createElement("h3",{style:{paddingTop:"10px"},className:"hidden visible-xs text-center"},r.a.createElement(p.b,{to:"/"},e.state.app.config().pages.homepage.menu.title))),r.a.createElement("div",{className:"col-lg-9 col-md-6 col-sm-6 col-xs-12"},r.a.createElement("div",{className:"navigation"},r.a.createElement("div",{id:"navigation"},r.a.createElement("ul",null,r.a.createElement("li",{className:"active"},r.a.createElement(p.b,{to:"/",title:"Home"},"Home")),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/about"},"About Me"))))))))),e.children,r.a.createElement("div",{className:"footer pt-5 pb-5"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row pt-4"},r.a.createElement("div",{className:"col-12"},r.a.createElement("div",{className:"footer-widget"},r.a.createElement("h3",{className:"footer-title mb-4"},"About Nicole Carter"),r.a.createElement("p",null,e.state.app.config().global.footer.aboutMessage)))))),r.a.createElement("div",{className:"tiny-footer"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},"Created in 2022 by ",r.a.createElement("a",{className:"text-white",href:"https://jdriscoll.pro/",target:"_blank"},"John Driscoll")," for Nicole Carter")))))};function x(e){if(!e||e.length<1)return{content:"",valid:!1};var a=e.split(".");if(3!=a.length)return{content:"",valid:!1};e=JSON.parse(atob(function(e){var a=(e=e.replace(/-/g,"+").replace(/_/g,"/")).length%4;if(a){if(1===a)throw new Error("InvalidLengthError: Input base64url string is the wrong length to determine padding");e+=new Array(5-a).join("=")}return e}(a[1])));var t=Math.round((new Date).getTime()/1e3);return e.nbf<t&&t>=e.exp?{content:"",valid:!1}:{start:e.nbf,end:e.exp,content:e,valid:!0}}function I(e){if(e.state.app.isLoggedIn()){var a=e.state.app.get("user","token"),t=Math.round((new Date).getTime()/1e3);if(a.end<t)return e.state.app.logout(),r.a.createElement(d.a,{to:"/"});if(t>a.end-e.state.app.config().session.refreshTokenBeforeSeconds&&fetch(e.state.app.config().api.endpoints.session.refresh,{method:"GET",headers:{jwt:e.state.jwt}}).then(function(e){return e.text()}).then(function(e){var a=x(e);a.valid&&(a.content.User=JSON.parse(a.content.User),this.state.app.set("jwt",e,"user-credentials"),this.state.app.set("token",a,"user-credentials"),this.state.app.set("user",a.content.User,"user-credentials"))}),"/logout"==window.location.pathname)return e.state.app.logout(),r.a.createElement(d.a,{to:"/"});if(!window.location.pathname.includes("/my"))return r.a.createElement(d.a,{to:"/my/timesheets"})}else if(window.location.pathname.includes("/my"))return r.a.createElement(d.a,{to:"/"});return r.a.createElement(r.a.Fragment,null,e.children)}var j=function(e){function a(e){var t;return Object(n.a)(this,a),(t=Object(s.a)(this,Object(c.a)(a).call(this,e))).state=e.state,t}return Object(i.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this.state.app.config().services.map(function(e,a){return r.a.createElement("div",{className:"price-content"},r.a.createElement("h3",null,e.Name),r.a.createElement("div",{className:"price-text"},r.a.createElement("h4",null,"\xa3",e.Price)),r.a.createElement("h4",null,e.Sessions," sessions of ",e.Hours," hours"),r.a.createElement("hr",null))});return r.a.createElement("span",null,r.a.createElement("div",{className:"space-medium"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-12 col-md-12 col-sm-12 col-xs-12"},r.a.createElement("div",{className:"section-title"},r.a.createElement("h1",null,this.state.app.config().pages.homepage.title),r.a.createElement("p",null,this.state.app.config().pages.homepage.subtitle)))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-4 col-md-4 col-sm-4 col-xs-12"},r.a.createElement("div",{className:"service-block"},r.a.createElement("div",{className:"service-img"},r.a.createElement("a",{href:"#"},r.a.createElement("img",{src:this.state.app.config().services[0].Image,alt:"",className:"img-responsive"}))," "),r.a.createElement("div",{className:"service-content"},r.a.createElement("h3",null,r.a.createElement("a",{href:"#"},this.state.app.config().services[0].Name)),r.a.createElement("p",null,this.state.app.config().services[0].Description)))),r.a.createElement("div",{className:"col-lg-4 col-md-4 col-sm-4 col-xs-12"},r.a.createElement("div",{className:"service-block"},r.a.createElement("div",{className:"service-img"},r.a.createElement("a",{href:"#"},r.a.createElement("img",{src:this.state.app.config().services[1].Image,alt:"",className:"img-responsive"})," ")),r.a.createElement("div",{className:"service-content"},r.a.createElement("h3",null,r.a.createElement("a",{href:"#"},this.state.app.config().services[1].Name)),r.a.createElement("p",null,this.state.app.config().services[1].Description)))),r.a.createElement("div",{className:"col-lg-4 col-md-4 col-sm-4 col-xs-12"},r.a.createElement("div",{className:"service-block"},r.a.createElement("div",{className:"service-img"},r.a.createElement("a",{href:"#"},r.a.createElement("img",{src:this.state.app.config().services[2].Image,alt:"",className:"img-responsive"}))," "),r.a.createElement("div",{className:"service-content"},r.a.createElement("h3",null,r.a.createElement("a",{href:"#"},this.state.app.config().services[2].Name)),r.a.createElement("p",null,this.state.app.config().services[2].Description))))))),r.a.createElement("div",{className:"space-medium bg-light"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-12 col-md-12 col-sm-12 col-xs-12"},r.a.createElement("div",{className:"section-title"},r.a.createElement("h1",null,this.state.app.config().pages.homepage.sections.whyUse.title),r.a.createElement("p",null,this.state.app.config().pages.homepage.sections.whyUse.subtitle)))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-4 col-md-4 col-sm-12 col-xs-12"},r.a.createElement("div",{className:"feature-block mb30"},r.a.createElement("div",{className:"feature-icon"},r.a.createElement("i",{className:"icon-round68"})," "),r.a.createElement("div",{className:"feature-content"},r.a.createElement("h4",null,this.state.app.config().pages.homepage.sections.whyUse.reasons[0].title),r.a.createElement("p",null,this.state.app.config().pages.homepage.sections.whyUse.reasons[0].content)))),r.a.createElement("div",{className:"col-lg-4 col-md-4 col-sm-12 col-xs-12"},r.a.createElement("div",{className:"feature-block mb30"},r.a.createElement("div",{className:"feature-icon"},r.a.createElement("i",{className:"icon-round68"})," "),r.a.createElement("div",{className:"feature-content"},r.a.createElement("h4",null,this.state.app.config().pages.homepage.sections.whyUse.reasons[1].title),r.a.createElement("p",null,this.state.app.config().pages.homepage.sections.whyUse.reasons[1].content)))),r.a.createElement("div",{className:"col-lg-4 col-md-4 col-sm-12 col-xs-12"},r.a.createElement("div",{className:"feature-block mb30"},r.a.createElement("div",{className:"feature-icon"},r.a.createElement("i",{className:"icon-round68"})," "),r.a.createElement("div",{className:"feature-content"},r.a.createElement("h4",null,this.state.app.config().pages.homepage.sections.whyUse.reasons[2].title),r.a.createElement("p",null,this.state.app.config().pages.homepage.sections.whyUse.reasons[2].content)))),r.a.createElement("div",{className:"col-lg-4 col-md-4 col-sm-12 col-xs-12"},r.a.createElement("div",{className:"feature-block"},r.a.createElement("div",{className:"feature-icon"},r.a.createElement("i",{className:"icon-round68"})," "),r.a.createElement("div",{className:"feature-content"},r.a.createElement("h4",null,this.state.app.config().pages.homepage.sections.whyUse.reasons[3].title),r.a.createElement("p",null,this.state.app.config().pages.homepage.sections.whyUse.reasons[3].content)))),r.a.createElement("div",{className:"col-lg-4 col-md-4 col-sm-12 col-xs-12"},r.a.createElement("div",{className:"feature-block"},r.a.createElement("div",{className:"feature-icon"},r.a.createElement("i",{className:"icon-round68"})," "),r.a.createElement("div",{className:"feature-content"},r.a.createElement("h4",null,this.state.app.config().pages.homepage.sections.whyUse.reasons[4].title),r.a.createElement("p",null,this.state.app.config().pages.homepage.sections.whyUse.reasons[4].content)))),r.a.createElement("div",{className:"col-lg-4 col-md-4 col-sm-12 col-xs-12"},r.a.createElement("div",{className:"feature-block"},r.a.createElement("div",{className:"feature-icon"},r.a.createElement("i",{className:"icon-round68"})," "),r.a.createElement("div",{className:"feature-content"},r.a.createElement("h4",null,this.state.app.config().pages.homepage.sections.whyUse.reasons[5].title),r.a.createElement("p",null,this.state.app.config().pages.homepage.sections.whyUse.reasons[5].content))))))),r.a.createElement("div",{className:"space-medium bg-default"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-12 col-md-12 col-sm-12 col-xs-12"},r.a.createElement("div",{className:"section-title"},r.a.createElement("h1",{className:"text-white"},"Pricing Plan ")))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 col-lg-8 center-block"},r.a.createElement("div",{className:"price-head"},r.a.createElement("h3",null,this.state.app.config().pages.homepage.sections.services.title)),r.a.createElement("div",{className:"price-block"},e,r.a.createElement("div",{className:"text-center mt30"},r.a.createElement("a",{href:"#",className:"btn btn-primary btn-sm","data-toggle":"modal","data-target":"#modalMakeABooking"},"book your order now"))))))),r.a.createElement("div",{className:"space-medium bg-light"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-12 col-md-12 col-sm-12 col-xs-12"},r.a.createElement("div",{className:"section-title"},r.a.createElement("h1",null,this.state.app.config().pages.homepage.sections.testimonials.title)))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-6 col-md-6 col-sm-6 col-xs-12"},r.a.createElement("div",{className:"testimonial-block"},r.a.createElement("div",{className:"testimonial-content"},r.a.createElement("p",null,"\u201c",this.state.app.config().pages.homepage.sections.testimonials.comments[0].content,"\u201d")),r.a.createElement("div",{className:"testimonial-meta"},r.a.createElement("h5",null,this.state.app.config().pages.homepage.sections.testimonials.comments[0].author),r.a.createElement("span",null,"( ",this.state.app.config().pages.homepage.sections.testimonials.comments[0].title," )")))),r.a.createElement("div",{className:"col-lg-6 col-md-6 col-sm-6 col-xs-12"},r.a.createElement("div",{className:"testimonial-block"},r.a.createElement("div",{className:"testimonial-content"},r.a.createElement("p",null,"\u201c",this.state.app.config().pages.homepage.sections.testimonials.comments[0].content,"\u201d ")),r.a.createElement("div",{className:"testimonial-meta"},r.a.createElement("h5",null,this.state.app.config().pages.homepage.sections.testimonials.comments[0].author),r.a.createElement("span",null,"( ",this.state.app.config().pages.homepage.sections.testimonials.comments[0].title," )"))))))),r.a.createElement("div",{className:"cta-section"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-12 col-md-12 col-sm-12 col-xs-12"},r.a.createElement("h1",null,"Any questions? Call Now: ",r.a.createElement("a",{className:"text-white",href:"tel:"+this.state.app.config().contact.mobile},this.state.app.config().contact.mobile)))))),r.a.createElement("div",{className:"modal fade",id:"modalMakeABooking",tabIndex:"-1",role:"dialog","aria-labelledby":"modalMakeABooking","aria-hidden":"true"},r.a.createElement("div",{className:"modal-dialog modal-dialog-centered",role:"document"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("h3",{className:"modal-title",id:"exampleModalLongTitle"},"Make A Booking")),r.a.createElement("div",{className:"modal-body"},r.a.createElement("p",null,"Thanks for your interest - to make a booking please contact me by phone or email."),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("strong",null,"Mobile:"),r.a.createElement("a",{href:"tel:"+this.state.app.config().contact.mobile},this.state.app.config().contact.mobile)),r.a.createElement("li",null,r.a.createElement("strong",null,"Email:")," ",r.a.createElement("a",{href:"mailto:"+this.state.app.config().contact.email},this.state.app.config().contact.email))))))))}}]),a}(o.Component),S=function(e){function a(e){var t;return Object(n.a)(this,a),(t=Object(s.a)(this,Object(c.a)(a).call(this,e))).state=e.state,t}return Object(i.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){this.state.app.config().services.map(function(e,a){return r.a.createElement("div",{className:"price-content"},r.a.createElement("h3",null,e.Name),r.a.createElement("div",{className:"price-text"},r.a.createElement("h4",null,"\xa3",e.Price)),r.a.createElement("h4",null,e.Sessions," sessions of ",e.Hours," hours"),r.a.createElement("hr",null))});return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"space-medium"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("div",{className:"post-block"},r.a.createElement("div",{className:"post-img"},r.a.createElement("img",{src:"img/nicole.jpg",alt:"",className:"img-responsive"})),r.a.createElement("div",{className:"meta-date"},r.a.createElement("span",{className:"meta-date-number"},this.state.app.config().pages.about.photo.title),r.a.createElement("span",{className:"meta-date-text"},this.state.app.config().pages.about.photo.caption)),r.a.createElement("div",{className:"post-content"},r.a.createElement("div",{className:"post-header"},r.a.createElement("h2",{className:"post-title"},this.state.app.config().pages.about.title)),r.a.createElement("p",null,this.state.app.config().pages.about.caption))))))))))}}]),a}(o.Component),O=function(e){function a(e){var t;return Object(n.a)(this,a),(t=Object(s.a)(this,Object(c.a)(a).call(this,e))).state={app:new w},t}return Object(i.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this;this.state;return r.a.createElement(p.a,null,r.a.createElement(d.d,null,r.a.createElement(d.b,{exact:!0,path:"/",render:function(a){return r.a.createElement(k,{state:e.state},r.a.createElement(I,{state:e.state},r.a.createElement(j,{state:e.state})))}}),r.a.createElement(d.b,{exact:!0,path:"/about",render:function(a){return r.a.createElement(k,{state:e.state},r.a.createElement(I,{state:e.state},r.a.createElement(S,{state:e.state})))}}),r.a.createElement(d.b,{render:function(e){return r.a.createElement(d.a,{to:"/"})}})))}}]),a}(o.Component);Object(m.render)(r.a.createElement(O,null),document.getElementById("root"))},48:function(e,a,t){e.exports=t(114)},82:function(e,a){}},[[48,2,1]]]);
//# sourceMappingURL=main.b3b7ea1f.chunk.js.map