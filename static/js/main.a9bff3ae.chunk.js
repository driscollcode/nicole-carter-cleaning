(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[0],{118:function(e,s,t){"use strict";t.r(s);var c=t(9),i=t(10),a=t(11),n=t(12),l=t(1),r=t(47),o=(t(41),t(8)),j=t(4),d=t(16),h=t.n(d),m=t(18),b=t(39),x=t.n(b),p=t(34),O=t(33),g=t.n(O),f=function(e){Object(a.a)(t,e);var s=Object(n.a)(t);function t(e){var i;return Object(c.a)(this,t),(i=s.call(this,e)).state={config:x.a.load("\ncontact:\n  mobile: 07931 756 126\n  email: info@nicolecartercleaning.com\npages:\n  homepage:\n    menu:\n      title: Nicole Carter Cleaning\n    title: Professional Cleaning Services\n    subtitle: Affordable and high quality clenaing for your home or commercial premises\n    sections:\n      whyUse:\n        title: Why Use Nicole Carter\n        subtitle: A friendly and flexible service provided by a hardworking entrepreneur who stands by the quality of her work\n        reasons:\n          - title: Hard Working\n            content: Your satisfaction is extremely important to me and I stand by the quality of my work\n          - title: Fast & Effective Service\n            content: I am available at short notice and can work to your timeframe to make sure your premises are spotless\n          - title: Third Reason\n            content: third reason content\n          - title: Fourth Reason\n            content: fourth reason content\n          - title: Fifth Reason\n            content: fifth reason content\n          - title: Sixth Reason\n            content: sixth reason content\n      testimonials:\n        title: Listen to what my customers have to say\n        comments:\n          - author: John Smith\n            title: Important Person\n            content: The most amazing service\n          - author: Bob Jones\n            title: Super VIP\n            content: Change my life\n      services:\n        title: My Services\nservices:\n  - Name: Basic Clean\n    Description: A basic clean of your house\n    Image: /img/clean-01.jpg\n    Sessions: 1\n    Price: 40\n    Hours: 4\n  - Name: Deep Clean\n    Description: A really deep clean of your house\n    Image: /img/clean-02.jpg\n    Price: 100\n    Sessions: 2\n    Hours: 4\n  - Name: Hoarder Home\n    Description: A complete clean of a hoarder house\n    Image: /img/clean-03.jpg\n    Price: 200\n    Sessions: 6\n    Hours: 8\n    \napplication:\n  id: nicole-carter-cleaning\n")},i}return Object(i.a)(t,[{key:"getSessionKey",value:function(){if(!(this.state.config.application.id.length<1)){var e=(new p.a).get(this.state.config.application.id+":session.key");return!(!e||e.length<1)&&e}}},{key:"setSessionKey",value:function(e,s){if(!(this.state.config.application.id.length<1)){var t=new p.a,c=new Date;c.setHours(c.getHours()+s),t.set(this.state.config.application.id+":session.key",e,{expires:c})}}},{key:"login",value:function(){this.state.config.application.id.length<1||this.setState({isLoggedIn:!0})}},{key:"logout",value:function(){this.setState({isLoggedIn:!1})}},{key:"get",value:function(e,s){if(!(this.state.config.application.id.length<1)){if(this.state&&this.state[e+":"+s])return this.state[e+":"+s];if(this.getSessionKey()){new p.a;var t=this.getSessionKey(),c=h.a.get(this.state.config.application.id+":"+e+":"+s),i={};if(t&&c&&t.length>0&&c.length>0){var a=g.a.AES.decrypt(c,t).toString(g.a.enc.Utf8);a.length>0&&(i=JSON.parse(a))}return i}}}},{key:"set",value:function(e,s,t){this.state.config.application.id.length<1||(this.setState(Object(m.a)({},e+":"+s,t)),this.getSessionKey()&&h.a.set(this.state.config.application.id+":"+e+":"+s,g.a.AES.encrypt(JSON.stringify(t),this.getSessionKey()).toString()))}},{key:"isLoggedIn",value:function(){return!(this.state.config.application.id.length<1)&&this.state.isLoggedIn}},{key:"config",value:function(){return this.state.config}}]),t}(l.Component),v=t(3),u=t(0);l.Component;function N(e,s){return e.app.get("loaded","data-batch")||(function(e,s){fetch(e.app.config().api.endpoints.projects.fetch,{method:"GET",headers:{jwt:s}}).then((function(e){return e.json()})).then(function(s){for(var t=Object(),c=0;c<s.length;c++)t[s[c].ID]=s[c];e.app.set("projects",t,"user-assets")}.bind(this))}(e,s),function(e,s,t){fetch(s.app.config().api.endpoints.timesheets.fetch+w(e),{method:"GET",headers:{jwt:t}}).then((function(e){return e.json()})).then(function(e){var t=new Date(e.Monday);s.app.set(w(t),e,"timesheets")}.bind(this))}(function(e){var s=new Date(e),t=e.getDay(),c=0;c=0==t?6:s.getDay()-1;c>0&&s.setDate(s.getDate()-c);return s}(new Date),e,s),e.app.set("loaded",!0,"data-batch")),Object(u.jsx)(u.Fragment,{})}function w(e){var s=String(e.getDate()).padStart(2,"0"),t=String(e.getMonth()+1).padStart(2,"0");return e.getFullYear()+"-"+t+"-"+s}function y(e){if(!e||e.length<1)return{content:"",valid:!1};var s=e.split(".");if(3!=s.length)return{content:"",valid:!1};e=JSON.parse(atob(function(e){var s=(e=e.replace(/-/g,"+").replace(/_/g,"/")).length%4;if(s){if(1===s)throw new Error("InvalidLengthError: Input base64url string is the wrong length to determine padding");e+=new Array(5-s).join("=")}return e}(s[1])));var t=Math.round((new Date).getTime()/1e3);return e.nbf<t&&t>=e.exp?{content:"",valid:!1}:{start:e.nbf,end:e.exp,content:e,valid:!0}}function k(e){if(e.state.app.isLoggedIn()){var s=e.state.app.get("user","token"),t=Math.round((new Date).getTime()/1e3);if(s.end<t)return e.state.app.logout(),Object(u.jsx)(j.a,{to:"/"});if(t>s.end-e.state.app.config().session.refreshTokenBeforeSeconds&&fetch(e.state.app.config().api.endpoints.session.refresh,{method:"GET",headers:{jwt:e.state.jwt}}).then((function(e){return e.text()})).then((function(e){var s=y(e);s.valid&&(s.content.User=JSON.parse(s.content.User),this.state.app.set("jwt",e,"user-credentials"),this.state.app.set("token",s,"user-credentials"),this.state.app.set("user",s.content.User,"user-credentials"))})),"/logout"==window.location.pathname)return e.state.app.logout(),Object(u.jsx)(j.a,{to:"/"});if(!window.location.pathname.includes("/my"))return Object(u.jsx)(j.a,{to:"/my/timesheets"})}else if(window.location.pathname.includes("/my"))return Object(u.jsx)(j.a,{to:"/"});return Object(u.jsx)(u.Fragment,{children:e.children})}t(116),t(117);var S=function(e){Object(a.a)(t,e);var s=Object(n.a)(t);function t(e){var i;return Object(c.a)(this,t),(i=s.call(this,e)).state=e.state,i.onSuccess=i.onSuccess.bind(Object(v.a)(i)),i}return Object(i.a)(t,[{key:"onFailure",value:function(){}},{key:"onSuccess",value:function(e){this.setState({isLoading:!0}),fetch(this.state.app.config().api.endpoints.login.google+Object.values(e)[1].id_token,{method:"GET"}).then((function(e){return e.text()})).then(function(e){var s=y(e);s.valid&&(s.content.User=JSON.parse(s.content.User),this.state.app.login(s.content.User.ID),this.state.app.set("jwt",e,"user-credentials"),this.state.app.set("token",s,"user-credentials"),this.state.app.set("user",s.content.User,"user-credentials"),N(this.state,e),this.setState({}))}.bind(this))}},{key:"render",value:function(){if(this.state.moveToLoggedIn)return Object(u.jsx)(j.a,{to:"/my/timesheets"});var e=this.state.app.config().services.map((function(e,s){return Object(u.jsxs)("div",{className:"price-content",children:[Object(u.jsx)("h3",{children:e.Name}),Object(u.jsx)("div",{className:"price-text",children:Object(u.jsxs)("h4",{children:["\xa3",e.Price]})}),Object(u.jsxs)("h4",{children:[e.Sessions," sessions of ",e.Hours," hours"]}),Object(u.jsx)("hr",{})]})}));return Object(u.jsxs)("span",{children:[Object(u.jsx)("div",{className:"top-bar",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col-md-6 hidden-sm hidden-xs",children:Object(u.jsx)("div",{className:"social",children:Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"#",children:Object(u.jsx)("i",{className:"fa fa-facebook"})})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"#",children:Object(u.jsx)("i",{className:"fa fa-google-plus"})})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"#",children:Object(u.jsx)("i",{className:"fa fa-linkedin"})})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"#",children:Object(u.jsx)("i",{className:"fa fa-twitter"})})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"#",children:Object(u.jsx)("i",{className:"fa fa-pinterest"})})})]})})}),Object(u.jsx)("div",{className:"col-md-3 hidden-sm hidden-xs",children:Object(u.jsx)("div",{className:"call-info",children:Object(u.jsxs)("p",{className:"call-text",children:[Object(u.jsx)("i",{className:"fa fa-envelope-open-o"}),Object(u.jsx)("strong",{children:this.state.app.config().contact.email})]})})}),Object(u.jsx)("div",{className:"col-md-3 col-sm-12",children:Object(u.jsx)("div",{className:"call-info",children:Object(u.jsxs)("p",{className:"call-text",children:[Object(u.jsx)("i",{className:"fa fa-phone"}),Object(u.jsxs)("strong",{children:["Call Now: ",this.state.app.config().contact.mobile]})]})})})]})})}),Object(u.jsx)("div",{className:"header-wrapper",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsxs)("div",{className:"col-lg-3 col-md-6 col-sm-6 col-xs-12",children:[Object(u.jsx)("h3",{style:{paddingTop:"10px"},className:"hidden visible-sm visible-md visible-lg",children:Object(u.jsx)("a",{href:"/",children:this.state.app.config().pages.homepage.menu.title})}),Object(u.jsx)("h3",{style:{paddingTop:"10px"},className:"hidden visible-xs text-center",children:Object(u.jsx)("a",{href:"/",children:this.state.app.config().pages.homepage.menu.title})})]}),Object(u.jsx)("div",{className:"col-lg-9 col-md-6 col-sm-6 col-xs-12",children:Object(u.jsx)("div",{className:"navigation",children:Object(u.jsx)("div",{id:"navigation",children:Object(u.jsx)("ul",{children:Object(u.jsx)("li",{className:"active",children:Object(u.jsx)("a",{href:"/",title:"Home",children:"Home"})})})})})})]})})}),Object(u.jsx)("div",{className:"slider",children:Object(u.jsxs)("div",{className:"owl-carousel slider",children:[Object(u.jsxs)("div",{className:"item",children:[Object(u.jsxs)("div",{className:"slider-img",children:[" ",Object(u.jsx)("img",{src:"/images/slider-1.jpg",alt:""})]}),Object(u.jsx)("div",{className:"container",children:Object(u.jsx)("div",{className:"row",children:Object(u.jsx)("div",{className:"col-lg-5 col-md-5 col-sm-12 col-xs-12",children:Object(u.jsxs)("div",{className:"slider-captions",children:[Object(u.jsx)("h1",{className:"slider-title",children:"Domestic & Commercial Cleaning"}),Object(u.jsx)("p",{className:"slider-text hidden-xs",children:"Cleaning Services we are passionate about providing a flexible service."}),Object(u.jsx)("a",{href:"about.html",className:"btn btn-default btn-lg hidden-sm hidden-xs",children:"Click Here for a Free Estimate"})]})})})})]}),Object(u.jsxs)("div",{className:"item",children:[Object(u.jsx)("div",{className:"slider-img",children:Object(u.jsx)("img",{src:"/images/slider-2.jpg",alt:""})}),Object(u.jsx)("div",{className:"container",children:Object(u.jsx)("div",{className:"row",children:Object(u.jsx)("div",{className:"col-lg-5 col-md-5 col-sm-12  col-xs-12",children:Object(u.jsxs)("div",{className:"slider-captions",children:[Object(u.jsx)("h1",{className:"slider-title",children:"We help you to keep your place clean"}),Object(u.jsx)("p",{className:"slider-text hidden-xs",children:"We use specialize and quality equipment tools for cleaning ! "}),Object(u.jsx)("a",{href:"#",className:"btn btn-default btn-lg hidden-sm hidden-xs",children:"meet team"})]})})})})]}),Object(u.jsxs)("div",{className:"item",children:[Object(u.jsx)("div",{className:"slider-img",children:Object(u.jsx)("img",{src:"/images/slider-3.jpg",alt:""})}),Object(u.jsx)("div",{className:"container",children:Object(u.jsx)("div",{className:"row",children:Object(u.jsx)("div",{className:"col-lg-5 col-md-5 col-sm-12  col-xs-12",children:Object(u.jsxs)("div",{className:"slider-captions",children:[Object(u.jsx)("h1",{className:"slider-title",children:"Quality work with Affordable price"}),Object(u.jsx)("p",{className:"slider-text hidden-xs",children:"We brings professional cleaning services right to your home. "}),Object(u.jsx)("a",{href:"#",className:"btn btn-default btn-lg hidden-sm hidden-xs",children:"view services"})]})})})})]})]})}),Object(u.jsx)("div",{className:"space-medium",children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("div",{className:"row",children:Object(u.jsx)("div",{className:"col-lg-12 col-md-12 col-sm-12 col-xs-12",children:Object(u.jsxs)("div",{className:"section-title",children:[Object(u.jsx)("h1",{children:this.state.app.config().pages.homepage.title}),Object(u.jsx)("p",{children:this.state.app.config().pages.homepage.subtitle})]})})}),Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col-lg-4 col-md-4 col-sm-4 col-xs-12",children:Object(u.jsxs)("div",{className:"service-block",children:[Object(u.jsxs)("div",{className:"service-img",children:[Object(u.jsx)("a",{href:"#",children:Object(u.jsx)("img",{src:this.state.app.config().services[0].Image,alt:"",className:"img-responsive"})})," "]}),Object(u.jsxs)("div",{className:"service-content",children:[Object(u.jsx)("h3",{children:Object(u.jsx)("a",{href:"#",children:this.state.app.config().services[0].Name})}),Object(u.jsx)("p",{children:this.state.app.config().services[0].Description}),Object(u.jsx)("a",{href:"#",className:"btn-link",children:" read more"})]})]})}),Object(u.jsx)("div",{className:"col-lg-4 col-md-4 col-sm-4 col-xs-12",children:Object(u.jsxs)("div",{className:"service-block",children:[Object(u.jsx)("div",{className:"service-img",children:Object(u.jsxs)("a",{href:"#",children:[Object(u.jsx)("img",{src:this.state.app.config().services[1].Image,alt:"",className:"img-responsive"})," "]})}),Object(u.jsxs)("div",{className:"service-content",children:[Object(u.jsx)("h3",{children:Object(u.jsx)("a",{href:"#",children:this.state.app.config().services[1].Name})}),Object(u.jsx)("p",{children:this.state.app.config().services[1].Description}),Object(u.jsx)("a",{href:"#",className:"btn-link",children:" read more"})]})]})}),Object(u.jsx)("div",{className:"col-lg-4 col-md-4 col-sm-4 col-xs-12",children:Object(u.jsxs)("div",{className:"service-block",children:[Object(u.jsxs)("div",{className:"service-img",children:[Object(u.jsx)("a",{href:"#",children:Object(u.jsx)("img",{src:this.state.app.config().services[2].Image,alt:"",className:"img-responsive"})})," "]}),Object(u.jsxs)("div",{className:"service-content",children:[Object(u.jsx)("h3",{children:Object(u.jsx)("a",{href:"#",children:this.state.app.config().services[2].Name})}),Object(u.jsx)("p",{children:this.state.app.config().services[2].Description}),Object(u.jsx)("a",{href:"#",className:"btn-link",children:" read more"})]})]})})]})]})}),Object(u.jsx)("div",{className:"space-medium bg-light",children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("div",{className:"row",children:Object(u.jsx)("div",{className:"col-lg-12 col-md-12 col-sm-12 col-xs-12",children:Object(u.jsxs)("div",{className:"section-title",children:[Object(u.jsx)("h1",{children:this.state.app.config().pages.homepage.sections.whyUse.title}),Object(u.jsx)("p",{children:this.state.app.config().pages.homepage.sections.whyUse.subtitle})]})})}),Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col-lg-4 col-md-4 col-sm-12 col-xs-12",children:Object(u.jsxs)("div",{className:"feature-block mb30",children:[Object(u.jsxs)("div",{className:"feature-icon",children:[Object(u.jsx)("i",{className:"icon-round68"})," "]}),Object(u.jsxs)("div",{className:"feature-content",children:[Object(u.jsx)("h4",{children:this.state.app.config().pages.homepage.sections.whyUse.reasons[0].title}),Object(u.jsx)("p",{children:this.state.app.config().pages.homepage.sections.whyUse.reasons[0].content})]})]})}),Object(u.jsx)("div",{className:"col-lg-4 col-md-4 col-sm-12 col-xs-12",children:Object(u.jsxs)("div",{className:"feature-block mb30",children:[Object(u.jsxs)("div",{className:"feature-icon",children:[Object(u.jsx)("i",{className:"icon-round68"})," "]}),Object(u.jsxs)("div",{className:"feature-content",children:[Object(u.jsx)("h4",{children:this.state.app.config().pages.homepage.sections.whyUse.reasons[1].title}),Object(u.jsx)("p",{children:this.state.app.config().pages.homepage.sections.whyUse.reasons[1].content})]})]})}),Object(u.jsx)("div",{className:"col-lg-4 col-md-4 col-sm-12 col-xs-12",children:Object(u.jsxs)("div",{className:"feature-block mb30",children:[Object(u.jsxs)("div",{className:"feature-icon",children:[Object(u.jsx)("i",{className:"icon-round68"})," "]}),Object(u.jsxs)("div",{className:"feature-content",children:[Object(u.jsx)("h4",{children:this.state.app.config().pages.homepage.sections.whyUse.reasons[2].title}),Object(u.jsx)("p",{children:this.state.app.config().pages.homepage.sections.whyUse.reasons[2].content})]})]})}),Object(u.jsx)("div",{className:"col-lg-4 col-md-4 col-sm-12 col-xs-12",children:Object(u.jsxs)("div",{className:"feature-block",children:[Object(u.jsxs)("div",{className:"feature-icon",children:[Object(u.jsx)("i",{className:"icon-round68"})," "]}),Object(u.jsxs)("div",{className:"feature-content",children:[Object(u.jsx)("h4",{children:this.state.app.config().pages.homepage.sections.whyUse.reasons[3].title}),Object(u.jsx)("p",{children:this.state.app.config().pages.homepage.sections.whyUse.reasons[3].content})]})]})}),Object(u.jsx)("div",{className:"col-lg-4 col-md-4 col-sm-12 col-xs-12",children:Object(u.jsxs)("div",{className:"feature-block",children:[Object(u.jsxs)("div",{className:"feature-icon",children:[Object(u.jsx)("i",{className:"icon-round68"})," "]}),Object(u.jsxs)("div",{className:"feature-content",children:[Object(u.jsx)("h4",{children:this.state.app.config().pages.homepage.sections.whyUse.reasons[4].title}),Object(u.jsx)("p",{children:this.state.app.config().pages.homepage.sections.whyUse.reasons[4].content})]})]})}),Object(u.jsx)("div",{className:"col-lg-4 col-md-4 col-sm-12 col-xs-12",children:Object(u.jsxs)("div",{className:"feature-block",children:[Object(u.jsxs)("div",{className:"feature-icon",children:[Object(u.jsx)("i",{className:"icon-round68"})," "]}),Object(u.jsxs)("div",{className:"feature-content",children:[Object(u.jsx)("h4",{children:this.state.app.config().pages.homepage.sections.whyUse.reasons[5].title}),Object(u.jsx)("p",{children:this.state.app.config().pages.homepage.sections.whyUse.reasons[5].content})]})]})})]})]})}),Object(u.jsx)("div",{className:"space-medium bg-default",children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("div",{className:"row",children:Object(u.jsx)("div",{className:"col-lg-12 col-md-12 col-sm-12 col-xs-12",children:Object(u.jsx)("div",{className:"section-title",children:Object(u.jsx)("h1",{className:"text-white",children:"Pricing Plan "})})})}),Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col-2"}),Object(u.jsxs)("div",{className:"col-8",children:[Object(u.jsx)("div",{className:"price-head",children:Object(u.jsx)("h3",{children:this.state.app.config().pages.homepage.sections.services.title})}),Object(u.jsxs)("div",{className:"price-block",children:[e,Object(u.jsx)("div",{className:"text-center mt30",children:Object(u.jsx)("a",{href:"#",className:"btn btn-primary btn-sm",children:"book your order now"})})]})]}),Object(u.jsx)("div",{className:"col-2"})]})]})}),Object(u.jsx)("div",{className:"space-medium bg-light",children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("div",{className:"row",children:Object(u.jsx)("div",{className:"col-lg-12 col-md-12 col-sm-12 col-xs-12",children:Object(u.jsx)("div",{className:"section-title",children:Object(u.jsx)("h1",{children:this.state.app.config().pages.homepage.sections.testimonials.title})})})}),Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col-lg-6 col-md-6 col-sm-6 col-xs-12",children:Object(u.jsxs)("div",{className:"testimonial-block",children:[Object(u.jsx)("div",{className:"testimonial-content",children:Object(u.jsxs)("p",{children:["\u201c",this.state.app.config().pages.homepage.sections.testimonials.comments[0].content,"\u201d"]})}),Object(u.jsxs)("div",{className:"testimonial-meta",children:[Object(u.jsx)("h5",{children:this.state.app.config().pages.homepage.sections.testimonials.comments[0].author}),Object(u.jsxs)("span",{children:["( ",this.state.app.config().pages.homepage.sections.testimonials.comments[0].title," )"]})]})]})}),Object(u.jsx)("div",{className:"col-lg-6 col-md-6 col-sm-6 col-xs-12",children:Object(u.jsxs)("div",{className:"testimonial-block",children:[Object(u.jsx)("div",{className:"testimonial-content",children:Object(u.jsxs)("p",{children:["\u201c",this.state.app.config().pages.homepage.sections.testimonials.comments[0].content,"\u201d "]})}),Object(u.jsxs)("div",{className:"testimonial-meta",children:[Object(u.jsx)("h5",{children:this.state.app.config().pages.homepage.sections.testimonials.comments[0].author}),Object(u.jsxs)("span",{children:["( ",this.state.app.config().pages.homepage.sections.testimonials.comments[0].title," )"]})]})]})})]}),Object(u.jsx)("div",{className:"row mt30",children:Object(u.jsx)("div",{className:"col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center",children:Object(u.jsx)("a",{href:"#",className:"btn btn-default btn-lg",children:"view our testimonials"})})})]})}),Object(u.jsx)("div",{className:"cta-section",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsx)("div",{className:"row",children:Object(u.jsx)("div",{className:"col-lg-12 col-md-12 col-sm-12 col-xs-12",children:Object(u.jsxs)("h1",{children:["Any questions? Call Now: ",this.state.app.config().contact.mobile]})})})})}),Object(u.jsx)("div",{className:"footer",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col-lg-4 col-md-4 col-sm-4 col-xs-12",children:Object(u.jsxs)("div",{className:"footer-widget",children:[Object(u.jsx)("h3",{className:"footer-title",children:"About Nicole Carter"}),Object(u.jsx)("p",{children:"I am Nicole Carter. I have many years experience providing a quality, friendly and flexible cleaning service. I look forward to working with you."}),Object(u.jsx)("div",{className:"",children:Object(u.jsx)("ul",{children:Object(u.jsxs)("li",{children:[Object(u.jsx)("div",{className:"",children:Object(u.jsx)("i",{className:"fa fa-envelope-open"})}),Object(u.jsx)("div",{className:"footer-address",children:"info@nicolecartercleaning.com"})]})})})]})}),Object(u.jsx)("div",{className:" col-lg-3 col-md-3 col-sm-3 col-xs-12",children:Object(u.jsxs)("div",{className:"footer-widget",children:[Object(u.jsx)("h3",{className:"footer-title",children:"Our Services"}),Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"#",children:"Home Cleaning "})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"#",children:"Office Cleaning "})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"#",children:"Commercial Cleaning"})})]})]})}),Object(u.jsx)("div",{className:" col-lg-2 col-md-2 col-sm-2 col-xs-12",children:Object(u.jsxs)("div",{className:"footer-widget",children:[Object(u.jsx)("h3",{className:"footer-title",children:"Quick Links"}),Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"#",children:"About us "})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"#",children:"Services "})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"#",children:"Blog"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"#",children:"Testimonials "})}),Object(u.jsxs)("li",{children:[" ",Object(u.jsx)("a",{href:"#",children:"Pricing"})]})]})]})}),Object(u.jsx)("div",{className:"col-lg-2 col-md-3 col-sm-2 col-xs-12 ",children:Object(u.jsxs)("div",{className:"footer-widget",children:[Object(u.jsx)("h3",{className:"footer-title",children:"Share With us"}),Object(u.jsxs)("div",{className:"footer-social",children:[" ",Object(u.jsx)("a",{href:"#",children:Object(u.jsx)("span",{children:Object(u.jsx)("i",{className:"fa fa-facebook"})})})," ",Object(u.jsxs)("a",{href:"#",children:[Object(u.jsx)("span",{children:Object(u.jsx)("i",{className:"fa fa-google-plus"})})," "]})," ",Object(u.jsx)("a",{href:"#",children:Object(u.jsxs)("span",{className:"active",children:[Object(u.jsx)("i",{className:"fa fa-twitter"})," "]})})," ",Object(u.jsx)("a",{href:"#",children:Object(u.jsxs)("span",{children:[Object(u.jsx)("i",{className:" fa fa-pinterest"})," "]})})," ",Object(u.jsx)("a",{href:"#",children:Object(u.jsx)("span",{children:Object(u.jsx)("i",{className:"fa fa-linkedin"})})})," "]})]})})]})})}),Object(u.jsx)("div",{className:"tiny-footer",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsx)("div",{className:"row",children:Object(u.jsx)("div",{className:"col-md-12",children:"copyright@cleaning. All right reserved"})})})})]})}}]),t}(l.Component),C=(l.Component,l.Component,l.Component,function(e){Object(a.a)(t,e);var s=Object(n.a)(t);function t(e){var i;return Object(c.a)(this,t),(i=s.call(this,e)).state={app:new f},i}return Object(i.a)(t,[{key:"render",value:function(){var e=this;this.state;return Object(u.jsx)(o.a,{children:Object(u.jsxs)(j.d,{children:[Object(u.jsx)(j.b,{exact:!0,path:"/",render:function(s){return Object(u.jsx)(k,{state:e.state,children:Object(u.jsx)(S,{state:e.state})})}}),Object(u.jsx)(j.b,{render:function(e){return Object(u.jsx)(j.a,{to:"/"})}})]})})}}]),t}(l.Component));Object(r.render)(Object(u.jsx)(C,{}),document.getElementById("root"))},83:function(e,s){}},[[118,1,2]]]);
//# sourceMappingURL=main.a9bff3ae.chunk.js.map