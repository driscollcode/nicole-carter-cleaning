(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[0],{118:function(e,s,t){"use strict";t.r(s);var c=t(9),i=t(10),a=t(11),n=t(12),l=t(1),r=t(47),o=(t(41),t(8)),d=t(4),j=t(16),h=t.n(j),m=t(18),b=t(39),x=t.n(b),p=t(34),O=t(33),g=t.n(O),v=function(e){Object(a.a)(t,e);var s=Object(n.a)(t);function t(e){var i;return Object(c.a)(this,t),(i=s.call(this,e)).state={config:x.a.load("\ncontact:\n  mobile: 07931 756 126\n  email: info@nicolecartercleaning.com\npages:\n  homepage:\n    menu:\n      title: Nicole Carter Cleaning\n    title: Professional Cleaning Services\n    subtitle: Affordable and high quality clenaing for your home or commercial premises\n    sections:\n      whyUse:\n        title: Why Use Nicole Carter\n        subtitle: A friendly and flexible service provided by a hardworking entrepreneur who stands by the quality of her work\n        reasons:\n          - title: Hard Working\n            content: Your satisfaction is extremely important to me and I stand by the quality of my work\n          - title: Fast & Effective Service\n            content: I am available at short notice and can work to your timeframe to make sure your premises are spotless\n          - title: Third Reason\n            content: third reason content\n          - title: Fourth Reason\n            content: fourth reason content\n          - title: Fifth Reason\n            content: fifth reason content\n          - title: Sixth Reason\n            content: sixth reason content\n      testimonials:\n        title: Listen to what my customers have to say\n        comments:\n          - author: John Smith\n            title: Important Person\n            content: The most amazing service\n          - author: Bob Jones\n            title: Super VIP\n            content: Change my life\n      services:\n        title: My Services\nservices:\n  - Name: Basic Clean\n    Description: A basic clean of your house\n    Image: /img/clean-01.jpg\n    Sessions: 1\n    Price: 40\n    Hours: 4\n  - Name: Deep Clean\n    Description: A really deep clean of your house\n    Image: /img/clean-02.jpg\n    Price: 100\n    Sessions: 2\n    Hours: 4\n  - Name: Hoarder Home\n    Description: A complete clean of a hoarder house\n    Image: /img/clean-03.jpg\n    Price: 200\n    Sessions: 6\n    Hours: 8\n    \napplication:\n  id: nicole-carter-cleaning\n")},i}return Object(i.a)(t,[{key:"getSessionKey",value:function(){if(!(this.state.config.application.id.length<1)){var e=(new p.a).get(this.state.config.application.id+":session.key");return!(!e||e.length<1)&&e}}},{key:"setSessionKey",value:function(e,s){if(!(this.state.config.application.id.length<1)){var t=new p.a,c=new Date;c.setHours(c.getHours()+s),t.set(this.state.config.application.id+":session.key",e,{expires:c})}}},{key:"login",value:function(){this.state.config.application.id.length<1||this.setState({isLoggedIn:!0})}},{key:"logout",value:function(){this.setState({isLoggedIn:!1})}},{key:"get",value:function(e,s){if(!(this.state.config.application.id.length<1)){if(this.state&&this.state[e+":"+s])return this.state[e+":"+s];if(this.getSessionKey()){new p.a;var t=this.getSessionKey(),c=h.a.get(this.state.config.application.id+":"+e+":"+s),i={};if(t&&c&&t.length>0&&c.length>0){var a=g.a.AES.decrypt(c,t).toString(g.a.enc.Utf8);a.length>0&&(i=JSON.parse(a))}return i}}}},{key:"set",value:function(e,s,t){this.state.config.application.id.length<1||(this.setState(Object(m.a)({},e+":"+s,t)),this.getSessionKey()&&h.a.set(this.state.config.application.id+":"+e+":"+s,g.a.AES.encrypt(JSON.stringify(t),this.getSessionKey()).toString()))}},{key:"isLoggedIn",value:function(){return!(this.state.config.application.id.length<1)&&this.state.isLoggedIn}},{key:"config",value:function(){return this.state.config}}]),t}(l.Component),u=t(3),f=t(0),N=function(e){Object(a.a)(t,e);var s=Object(n.a)(t);function t(e){var i;return Object(c.a)(this,t),(i=s.call(this,e)).state=e.state,i.logOut=i.logOut.bind(Object(u.a)(i)),i}return Object(i.a)(t,[{key:"menuBlockClass",value:function(e){return window.location.pathname.substring(0,e.length)==e?"nav-link active":"nav-link"}},{key:"logOut",value:function(){this.state.updateApp("session",!1),this.state.updateApp("user",!1),this.setState({session:!1})}},{key:"render",value:function(){var e,s,t,c,i,a,n,l;(null===(e=this.state)||void 0===e||null===(s=e.session)||void 0===s||null===(t=s.User)||void 0===t?void 0:t.ShadowUserID.length)>0?null===(c=this.state)||void 0===c||null===(i=c.session)||void 0===i||null===(a=i.User)||void 0===a||a.ShadowUserID:null===(n=this.state)||void 0===n||null===(l=n.session)||void 0===l||l.User;return Object(f.jsx)("span",{children:Object(f.jsx)("nav",{className:"navbar navbar-lg navbar-expand-lg navbar-dark bg-primary",children:Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)(o.b,{to:"/account",className:"navbar-brand",children:"MyHours.me"}),Object(f.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarCollapse","aria-controls":"navbarCollapse","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(f.jsx)("span",{className:"navbar-toggler-icon"})}),Object(f.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarCollapse",children:[Object(f.jsxs)("ul",{className:"navbar-nav ml-auto mt-3 mt-lg-0",children:[void 0,Object(f.jsx)("li",{className:"nav-item mr-5",children:Object(f.jsx)(o.b,{to:"/my/timesheets",className:this.menuBlockClass("/my/timesheets"),children:"Timesheets"})}),Object(f.jsx)("li",{className:"nav-item mr-5",children:Object(f.jsx)(o.b,{to:"/my/projects",className:this.menuBlockClass("/my/projects"),children:"Projects"})}),Object(f.jsx)("li",{className:"nav-item mr-5",children:Object(f.jsx)(o.b,{to:"/my/teams",className:this.menuBlockClass("/my/teams"),children:"Teams"})}),Object(f.jsx)("li",{className:"nav-item mr-5",children:Object(f.jsx)(o.b,{to:"/instagram",className:"nav-link",children:"Reporting"})})]}),Object(f.jsxs)("div",{className:"dropdown ml-5 d-none d-lg-block",children:[Object(f.jsx)("button",{className:"btn btn-outline-white dropdown-toggle",type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"Your Account \xa0"}),Object(f.jsxs)("div",{className:"dropdown-menu",children:[Object(f.jsx)(o.b,{to:"/account/settings",className:"dropdown-item",children:"Settings"}),Object(f.jsx)(o.b,{to:"/account/billing",className:"dropdown-item",children:"Your Subscription"}),Object(f.jsx)("div",{className:"dropdown-divider"}),Object(f.jsx)(o.b,{to:"/logout",className:"dropdown-item",children:"Log Out"})]})]}),Object(f.jsxs)("div",{className:"dropdown mt-4 d-lg-none",children:[Object(f.jsx)("button",{className:"btn btn-outline-white dropdown-toggle",type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"Your Account \xa0"}),Object(f.jsxs)("div",{className:"dropdown-menu",children:[Object(f.jsx)("a",{className:"dropdown-item",href:"/account/settings/",children:"Settings"}),Object(f.jsx)("a",{className:"dropdown-item",href:"/finance/invoices/",children:"Invoices"}),Object(f.jsx)("div",{className:"dropdown-divider"}),Object(f.jsx)(o.b,{to:"/logout",className:"dropdown-item",children:"Log Out"})]})]})]})]})})})}}]),t}(l.Component);function w(e,s){return e.app.get("loaded","data-batch")||(function(e,s){fetch(e.app.config().api.endpoints.projects.fetch,{method:"GET",headers:{jwt:s}}).then((function(e){return e.json()})).then(function(s){for(var t=Object(),c=0;c<s.length;c++)t[s[c].ID]=s[c];e.app.set("projects",t,"user-assets")}.bind(this))}(e,s),function(e,s,t){fetch(s.app.config().api.endpoints.timesheets.fetch+y(e),{method:"GET",headers:{jwt:t}}).then((function(e){return e.json()})).then(function(e){var t=new Date(e.Monday);s.app.set(y(t),e,"timesheets")}.bind(this))}(function(e){var s=new Date(e),t=e.getDay(),c=0;c=0==t?6:s.getDay()-1;c>0&&s.setDate(s.getDate()-c);return s}(new Date),e,s),e.app.set("loaded",!0,"data-batch")),Object(f.jsx)(f.Fragment,{})}function y(e){var s=String(e.getDate()).padStart(2,"0"),t=String(e.getMonth()+1).padStart(2,"0");return e.getFullYear()+"-"+t+"-"+s}var k=function(e){return e.headTitle&&(document.title=e.headTitle),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(N,{state:e.state}),Object(f.jsxs)("main",{className:"main",role:"main",children:[Object(f.jsx)("style",{id:"search_style"}),Object(f.jsx)("div",{className:"pb-9 pt-2 bg-light",children:Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)("nav",{"aria-label":"breadcrumb",children:Object(f.jsxs)("ol",{className:"breadcrumb",children:[e.bookmarks,function(){if(e.bookmarks)return Object(f.jsx)("li",{className:"breadcrumb-item active","aria-current":"page",children:e.bookmarks[e.bookmarks.length-1].label})}()]})}),Object(f.jsx)("div",{className:"row mb-2 mb-sm-2",children:Object(f.jsx)("div",{className:"col-md-8 mx-auto",children:Object(f.jsx)("h1",{className:"h2 text-center",children:e.pageCaption})})}),e.children]})})]}),Object(f.jsx)("div",{className:"container",children:Object(f.jsx)("div",{className:"row mt-4",children:Object(f.jsx)("div",{className:"col-12",children:Object(f.jsx)("p",{className:"text-center",children:"\xa9 2020 MyHours.me - a division of Driscoll Ltd"})})})})]})};function S(e){if(!e||e.length<1)return{content:"",valid:!1};var s=e.split(".");if(3!=s.length)return{content:"",valid:!1};e=JSON.parse(atob(function(e){var s=(e=e.replace(/-/g,"+").replace(/_/g,"/")).length%4;if(s){if(1===s)throw new Error("InvalidLengthError: Input base64url string is the wrong length to determine padding");e+=new Array(5-s).join("=")}return e}(s[1])));var t=Math.round((new Date).getTime()/1e3);return e.nbf<t&&t>=e.exp?{content:"",valid:!1}:{start:e.nbf,end:e.exp,content:e,valid:!0}}function C(e){if(e.state.app.isLoggedIn()){var s=e.state.app.get("user","token"),t=Math.round((new Date).getTime()/1e3);if(s.end<t)return e.state.app.logout(),Object(f.jsx)(d.a,{to:"/"});if(t>s.end-e.state.app.config().session.refreshTokenBeforeSeconds&&fetch(e.state.app.config().api.endpoints.session.refresh,{method:"GET",headers:{jwt:e.state.jwt}}).then((function(e){return e.text()})).then((function(e){var s=S(e);s.valid&&(s.content.User=JSON.parse(s.content.User),this.state.app.set("jwt",e,"user-credentials"),this.state.app.set("token",s,"user-credentials"),this.state.app.set("user",s.content.User,"user-credentials"))})),"/logout"==window.location.pathname)return e.state.app.logout(),Object(f.jsx)(d.a,{to:"/"});if(!window.location.pathname.includes("/my"))return Object(f.jsx)(d.a,{to:"/my/timesheets"})}else if(window.location.pathname.includes("/my"))return Object(f.jsx)(d.a,{to:"/"});return Object(f.jsx)(f.Fragment,{children:e.children})}t(116),t(117);var U=function(e){Object(a.a)(t,e);var s=Object(n.a)(t);function t(e){var i;return Object(c.a)(this,t),(i=s.call(this,e)).state=e.state,i.onSuccess=i.onSuccess.bind(Object(u.a)(i)),i}return Object(i.a)(t,[{key:"onFailure",value:function(){}},{key:"onSuccess",value:function(e){this.setState({isLoading:!0}),fetch(this.state.app.config().api.endpoints.login.google+Object.values(e)[1].id_token,{method:"GET"}).then((function(e){return e.text()})).then(function(e){var s=S(e);s.valid&&(s.content.User=JSON.parse(s.content.User),this.state.app.login(s.content.User.ID),this.state.app.set("jwt",e,"user-credentials"),this.state.app.set("token",s,"user-credentials"),this.state.app.set("user",s.content.User,"user-credentials"),w(this.state,e),this.setState({}))}.bind(this))}},{key:"render",value:function(){if(this.state.moveToLoggedIn)return Object(f.jsx)(d.a,{to:"/my/timesheets"});var e=this.state.app.config().services.map((function(e,s){return Object(f.jsxs)("div",{className:"price-content",children:[Object(f.jsx)("h3",{children:e.Name}),Object(f.jsx)("div",{className:"price-text",children:Object(f.jsxs)("h4",{children:["\xa3",e.Price]})}),Object(f.jsxs)("h4",{children:[e.Sessions," sessions of ",e.Hours," hours"]}),Object(f.jsx)("hr",{})]})}));return Object(f.jsxs)("span",{children:[Object(f.jsx)("div",{className:"top-bar",children:Object(f.jsx)("div",{className:"container",children:Object(f.jsxs)("div",{className:"row",children:[Object(f.jsx)("div",{className:"col-md-6 hidden-sm hidden-xs",children:Object(f.jsx)("div",{className:"social",children:Object(f.jsxs)("ul",{children:[Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:"#",children:Object(f.jsx)("i",{className:"fa fa-facebook"})})}),Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:"#",children:Object(f.jsx)("i",{className:"fa fa-google-plus"})})}),Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:"#",children:Object(f.jsx)("i",{className:"fa fa-linkedin"})})}),Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:"#",children:Object(f.jsx)("i",{className:"fa fa-twitter"})})}),Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:"#",children:Object(f.jsx)("i",{className:"fa fa-pinterest"})})})]})})}),Object(f.jsx)("div",{className:"col-md-3 hidden-sm hidden-xs",children:Object(f.jsx)("div",{className:"call-info",children:Object(f.jsxs)("p",{className:"call-text",children:[Object(f.jsx)("i",{className:"fa fa-envelope-open-o"}),Object(f.jsx)("strong",{children:this.state.app.config().contact.email})]})})}),Object(f.jsx)("div",{className:"col-md-3 col-sm-12",children:Object(f.jsx)("div",{className:"call-info",children:Object(f.jsxs)("p",{className:"call-text",children:[Object(f.jsx)("i",{className:"fa fa-phone"}),Object(f.jsxs)("strong",{children:["Call Now: ",this.state.app.config().contact.mobile]})]})})})]})})}),Object(f.jsx)("div",{className:"header-wrapper",children:Object(f.jsx)("div",{className:"container",children:Object(f.jsxs)("div",{className:"row",children:[Object(f.jsxs)("div",{className:"col-lg-3 col-md-6 col-sm-6 col-xs-12",children:[Object(f.jsx)("h3",{style:{paddingTop:"10px"},className:"hidden visible-sm visible-md visible-lg",children:Object(f.jsx)("a",{href:"/",children:this.state.app.config().pages.homepage.menu.title})}),Object(f.jsx)("h3",{style:{paddingTop:"10px"},className:"hidden visible-xs text-center",children:Object(f.jsx)("a",{href:"/",children:this.state.app.config().pages.homepage.menu.title})})]}),Object(f.jsx)("div",{className:"col-lg-9 col-md-6 col-sm-6 col-xs-12",children:Object(f.jsx)("div",{className:"navigation",children:Object(f.jsx)("div",{id:"navigation",children:Object(f.jsx)("ul",{children:Object(f.jsx)("li",{className:"active",children:Object(f.jsx)("a",{href:"index.html",title:"Home",children:"Home"})})})})})})]})})}),Object(f.jsx)("div",{className:"slider",children:Object(f.jsxs)("div",{className:"owl-carousel slider",children:[Object(f.jsxs)("div",{className:"item",children:[Object(f.jsxs)("div",{className:"slider-img",children:[" ",Object(f.jsx)("img",{src:"/images/slider-1.jpg",alt:""})]}),Object(f.jsx)("div",{className:"container",children:Object(f.jsx)("div",{className:"row",children:Object(f.jsx)("div",{className:"col-lg-5 col-md-5 col-sm-12 col-xs-12",children:Object(f.jsxs)("div",{className:"slider-captions",children:[Object(f.jsx)("h1",{className:"slider-title",children:"Domestic & Commercial Cleaning"}),Object(f.jsx)("p",{className:"slider-text hidden-xs",children:"Cleaning Services we are passionate about providing a flexible service."}),Object(f.jsx)("a",{href:"about.html",className:"btn btn-default btn-lg hidden-sm hidden-xs",children:"Click Here for a Free Estimate"})]})})})})]}),Object(f.jsxs)("div",{className:"item",children:[Object(f.jsx)("div",{className:"slider-img",children:Object(f.jsx)("img",{src:"/images/slider-2.jpg",alt:""})}),Object(f.jsx)("div",{className:"container",children:Object(f.jsx)("div",{className:"row",children:Object(f.jsx)("div",{className:"col-lg-5 col-md-5 col-sm-12  col-xs-12",children:Object(f.jsxs)("div",{className:"slider-captions",children:[Object(f.jsx)("h1",{className:"slider-title",children:"We help you to keep your place clean"}),Object(f.jsx)("p",{className:"slider-text hidden-xs",children:"We use specialize and quality equipment tools for cleaning ! "}),Object(f.jsx)("a",{href:"#",className:"btn btn-default btn-lg hidden-sm hidden-xs",children:"meet team"})]})})})})]}),Object(f.jsxs)("div",{className:"item",children:[Object(f.jsx)("div",{className:"slider-img",children:Object(f.jsx)("img",{src:"/images/slider-3.jpg",alt:""})}),Object(f.jsx)("div",{className:"container",children:Object(f.jsx)("div",{className:"row",children:Object(f.jsx)("div",{className:"col-lg-5 col-md-5 col-sm-12  col-xs-12",children:Object(f.jsxs)("div",{className:"slider-captions",children:[Object(f.jsx)("h1",{className:"slider-title",children:"Quality work with Affordable price"}),Object(f.jsx)("p",{className:"slider-text hidden-xs",children:"We brings professional cleaning services right to your home. "}),Object(f.jsx)("a",{href:"#",className:"btn btn-default btn-lg hidden-sm hidden-xs",children:"view services"})]})})})})]})]})}),Object(f.jsx)("div",{className:"space-medium",children:Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)("div",{className:"row",children:Object(f.jsx)("div",{className:"col-lg-12 col-md-12 col-sm-12 col-xs-12",children:Object(f.jsxs)("div",{className:"section-title",children:[Object(f.jsx)("h1",{children:this.state.app.config().pages.homepage.title}),Object(f.jsx)("p",{children:this.state.app.config().pages.homepage.subtitle})]})})}),Object(f.jsxs)("div",{className:"row",children:[Object(f.jsx)("div",{className:"col-lg-4 col-md-4 col-sm-4 col-xs-12",children:Object(f.jsxs)("div",{className:"service-block",children:[Object(f.jsxs)("div",{className:"service-img",children:[Object(f.jsx)("a",{href:"#",children:Object(f.jsx)("img",{src:this.state.app.config().services[0].Image,alt:"",className:"img-responsive"})})," "]}),Object(f.jsxs)("div",{className:"service-content",children:[Object(f.jsx)("h3",{children:Object(f.jsx)("a",{href:"#",children:this.state.app.config().services[0].Name})}),Object(f.jsx)("p",{children:this.state.app.config().services[0].Description}),Object(f.jsx)("a",{href:"#",className:"btn-link",children:" read more"})]})]})}),Object(f.jsx)("div",{className:"col-lg-4 col-md-4 col-sm-4 col-xs-12",children:Object(f.jsxs)("div",{className:"service-block",children:[Object(f.jsx)("div",{className:"service-img",children:Object(f.jsxs)("a",{href:"#",children:[Object(f.jsx)("img",{src:this.state.app.config().services[1].Image,alt:"",className:"img-responsive"})," "]})}),Object(f.jsxs)("div",{className:"service-content",children:[Object(f.jsx)("h3",{children:Object(f.jsx)("a",{href:"#",children:this.state.app.config().services[1].Name})}),Object(f.jsx)("p",{children:this.state.app.config().services[1].Description}),Object(f.jsx)("a",{href:"#",className:"btn-link",children:" read more"})]})]})}),Object(f.jsx)("div",{className:"col-lg-4 col-md-4 col-sm-4 col-xs-12",children:Object(f.jsxs)("div",{className:"service-block",children:[Object(f.jsxs)("div",{className:"service-img",children:[Object(f.jsx)("a",{href:"#",children:Object(f.jsx)("img",{src:this.state.app.config().services[2].Image,alt:"",className:"img-responsive"})})," "]}),Object(f.jsxs)("div",{className:"service-content",children:[Object(f.jsx)("h3",{children:Object(f.jsx)("a",{href:"#",children:this.state.app.config().services[2].Name})}),Object(f.jsx)("p",{children:this.state.app.config().services[2].Description}),Object(f.jsx)("a",{href:"#",className:"btn-link",children:" read more"})]})]})})]})]})}),Object(f.jsx)("div",{className:"space-medium bg-light",children:Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)("div",{className:"row",children:Object(f.jsx)("div",{className:"col-lg-12 col-md-12 col-sm-12 col-xs-12",children:Object(f.jsxs)("div",{className:"section-title",children:[Object(f.jsx)("h1",{children:this.state.app.config().pages.homepage.sections.whyUse.title}),Object(f.jsx)("p",{children:this.state.app.config().pages.homepage.sections.whyUse.subtitle})]})})}),Object(f.jsxs)("div",{className:"row",children:[Object(f.jsx)("div",{className:"col-lg-4 col-md-4 col-sm-12 col-xs-12",children:Object(f.jsxs)("div",{className:"feature-block mb30",children:[Object(f.jsxs)("div",{className:"feature-icon",children:[Object(f.jsx)("i",{className:"icon-round68"})," "]}),Object(f.jsxs)("div",{className:"feature-content",children:[Object(f.jsx)("h4",{children:this.state.app.config().pages.homepage.sections.whyUse.reasons[0].title}),Object(f.jsx)("p",{children:this.state.app.config().pages.homepage.sections.whyUse.reasons[0].content})]})]})}),Object(f.jsx)("div",{className:"col-lg-4 col-md-4 col-sm-12 col-xs-12",children:Object(f.jsxs)("div",{className:"feature-block mb30",children:[Object(f.jsxs)("div",{className:"feature-icon",children:[Object(f.jsx)("i",{className:"icon-round68"})," "]}),Object(f.jsxs)("div",{className:"feature-content",children:[Object(f.jsx)("h4",{children:this.state.app.config().pages.homepage.sections.whyUse.reasons[1].title}),Object(f.jsx)("p",{children:this.state.app.config().pages.homepage.sections.whyUse.reasons[1].content})]})]})}),Object(f.jsx)("div",{className:"col-lg-4 col-md-4 col-sm-12 col-xs-12",children:Object(f.jsxs)("div",{className:"feature-block mb30",children:[Object(f.jsxs)("div",{className:"feature-icon",children:[Object(f.jsx)("i",{className:"icon-round68"})," "]}),Object(f.jsxs)("div",{className:"feature-content",children:[Object(f.jsx)("h4",{children:this.state.app.config().pages.homepage.sections.whyUse.reasons[2].title}),Object(f.jsx)("p",{children:this.state.app.config().pages.homepage.sections.whyUse.reasons[2].content})]})]})}),Object(f.jsx)("div",{className:"col-lg-4 col-md-4 col-sm-12 col-xs-12",children:Object(f.jsxs)("div",{className:"feature-block",children:[Object(f.jsxs)("div",{className:"feature-icon",children:[Object(f.jsx)("i",{className:"icon-round68"})," "]}),Object(f.jsxs)("div",{className:"feature-content",children:[Object(f.jsx)("h4",{children:this.state.app.config().pages.homepage.sections.whyUse.reasons[3].title}),Object(f.jsx)("p",{children:this.state.app.config().pages.homepage.sections.whyUse.reasons[3].content})]})]})}),Object(f.jsx)("div",{className:"col-lg-4 col-md-4 col-sm-12 col-xs-12",children:Object(f.jsxs)("div",{className:"feature-block",children:[Object(f.jsxs)("div",{className:"feature-icon",children:[Object(f.jsx)("i",{className:"icon-round68"})," "]}),Object(f.jsxs)("div",{className:"feature-content",children:[Object(f.jsx)("h4",{children:this.state.app.config().pages.homepage.sections.whyUse.reasons[4].title}),Object(f.jsx)("p",{children:this.state.app.config().pages.homepage.sections.whyUse.reasons[4].content})]})]})}),Object(f.jsx)("div",{className:"col-lg-4 col-md-4 col-sm-12 col-xs-12",children:Object(f.jsxs)("div",{className:"feature-block",children:[Object(f.jsxs)("div",{className:"feature-icon",children:[Object(f.jsx)("i",{className:"icon-round68"})," "]}),Object(f.jsxs)("div",{className:"feature-content",children:[Object(f.jsx)("h4",{children:this.state.app.config().pages.homepage.sections.whyUse.reasons[5].title}),Object(f.jsx)("p",{children:this.state.app.config().pages.homepage.sections.whyUse.reasons[5].content})]})]})})]})]})}),Object(f.jsx)("div",{className:"space-medium bg-default",children:Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)("div",{className:"row",children:Object(f.jsx)("div",{className:"col-lg-12 col-md-12 col-sm-12 col-xs-12",children:Object(f.jsx)("div",{className:"section-title",children:Object(f.jsx)("h1",{className:"text-white",children:"Pricing Plan "})})})}),Object(f.jsxs)("div",{className:"row",children:[Object(f.jsx)("div",{className:"col-2"}),Object(f.jsxs)("div",{className:"col-8",children:[Object(f.jsx)("div",{className:"price-head",children:Object(f.jsx)("h3",{children:this.state.app.config().pages.homepage.sections.services.title})}),Object(f.jsxs)("div",{className:"price-block",children:[e,Object(f.jsx)("div",{className:"text-center mt30",children:Object(f.jsx)("a",{href:"#",className:"btn btn-primary btn-sm",children:"book your order now"})})]})]}),Object(f.jsx)("div",{className:"col-2"})]})]})}),Object(f.jsx)("div",{className:"space-medium bg-light",children:Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)("div",{className:"row",children:Object(f.jsx)("div",{className:"col-lg-12 col-md-12 col-sm-12 col-xs-12",children:Object(f.jsx)("div",{className:"section-title",children:Object(f.jsx)("h1",{children:this.state.app.config().pages.homepage.sections.testimonials.title})})})}),Object(f.jsxs)("div",{className:"row",children:[Object(f.jsx)("div",{className:"col-lg-6 col-md-6 col-sm-6 col-xs-12",children:Object(f.jsxs)("div",{className:"testimonial-block",children:[Object(f.jsx)("div",{className:"testimonial-content",children:Object(f.jsxs)("p",{children:["\u201c",this.state.app.config().pages.homepage.sections.testimonials.comments[0].content,"\u201d"]})}),Object(f.jsxs)("div",{className:"testimonial-meta",children:[Object(f.jsx)("h5",{children:this.state.app.config().pages.homepage.sections.testimonials.comments[0].author}),Object(f.jsxs)("span",{children:["( ",this.state.app.config().pages.homepage.sections.testimonials.comments[0].title," )"]})]})]})}),Object(f.jsx)("div",{className:"col-lg-6 col-md-6 col-sm-6 col-xs-12",children:Object(f.jsxs)("div",{className:"testimonial-block",children:[Object(f.jsx)("div",{className:"testimonial-content",children:Object(f.jsxs)("p",{children:["\u201c",this.state.app.config().pages.homepage.sections.testimonials.comments[0].content,"\u201d "]})}),Object(f.jsxs)("div",{className:"testimonial-meta",children:[Object(f.jsx)("h5",{children:this.state.app.config().pages.homepage.sections.testimonials.comments[0].author}),Object(f.jsxs)("span",{children:["( ",this.state.app.config().pages.homepage.sections.testimonials.comments[0].title," )"]})]})]})})]}),Object(f.jsx)("div",{className:"row mt30",children:Object(f.jsx)("div",{className:"col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center",children:Object(f.jsx)("a",{href:"#",className:"btn btn-default btn-lg",children:"view our testimonials"})})})]})}),Object(f.jsx)("div",{className:"cta-section",children:Object(f.jsx)("div",{className:"container",children:Object(f.jsx)("div",{className:"row",children:Object(f.jsx)("div",{className:"col-lg-12 col-md-12 col-sm-12 col-xs-12",children:Object(f.jsxs)("h1",{children:["Any questions? Call Now: ",this.state.app.config().contact.mobile]})})})})}),Object(f.jsx)("div",{className:"footer",children:Object(f.jsx)("div",{className:"container",children:Object(f.jsxs)("div",{className:"row",children:[Object(f.jsx)("div",{className:"col-lg-4 col-md-4 col-sm-4 col-xs-12",children:Object(f.jsxs)("div",{className:"footer-widget",children:[Object(f.jsx)("h3",{className:"footer-title",children:"About Nicole Carter"}),Object(f.jsx)("p",{children:"I am Nicole Carter. I have many years experience providing a quality, friendly and flexible cleaning service. I look forward to working with you."}),Object(f.jsx)("div",{className:"",children:Object(f.jsx)("ul",{children:Object(f.jsxs)("li",{children:[Object(f.jsx)("div",{className:"",children:Object(f.jsx)("i",{className:"fa fa-envelope-open"})}),Object(f.jsx)("div",{className:"footer-address",children:"info@nicolecartercleaning.com"})]})})})]})}),Object(f.jsx)("div",{className:" col-lg-3 col-md-3 col-sm-3 col-xs-12",children:Object(f.jsxs)("div",{className:"footer-widget",children:[Object(f.jsx)("h3",{className:"footer-title",children:"Our Services"}),Object(f.jsxs)("ul",{children:[Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:"#",children:"Home Cleaning "})}),Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:"#",children:"Office Cleaning "})}),Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:"#",children:"Commercial Cleaning"})})]})]})}),Object(f.jsx)("div",{className:" col-lg-2 col-md-2 col-sm-2 col-xs-12",children:Object(f.jsxs)("div",{className:"footer-widget",children:[Object(f.jsx)("h3",{className:"footer-title",children:"Quick Links"}),Object(f.jsxs)("ul",{children:[Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:"#",children:"About us "})}),Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:"#",children:"Services "})}),Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:"#",children:"Blog"})}),Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:"#",children:"Testimonials "})}),Object(f.jsxs)("li",{children:[" ",Object(f.jsx)("a",{href:"#",children:"Pricing"})]})]})]})}),Object(f.jsx)("div",{className:"col-lg-2 col-md-3 col-sm-2 col-xs-12 ",children:Object(f.jsxs)("div",{className:"footer-widget",children:[Object(f.jsx)("h3",{className:"footer-title",children:"Share With us"}),Object(f.jsxs)("div",{className:"footer-social",children:[" ",Object(f.jsx)("a",{href:"#",children:Object(f.jsx)("span",{children:Object(f.jsx)("i",{className:"fa fa-facebook"})})})," ",Object(f.jsxs)("a",{href:"#",children:[Object(f.jsx)("span",{children:Object(f.jsx)("i",{className:"fa fa-google-plus"})})," "]})," ",Object(f.jsx)("a",{href:"#",children:Object(f.jsxs)("span",{className:"active",children:[Object(f.jsx)("i",{className:"fa fa-twitter"})," "]})})," ",Object(f.jsx)("a",{href:"#",children:Object(f.jsxs)("span",{children:[Object(f.jsx)("i",{className:" fa fa-pinterest"})," "]})})," ",Object(f.jsx)("a",{href:"#",children:Object(f.jsx)("span",{children:Object(f.jsx)("i",{className:"fa fa-linkedin"})})})," "]})]})})]})})}),Object(f.jsx)("div",{className:"tiny-footer",children:Object(f.jsx)("div",{className:"container",children:Object(f.jsx)("div",{className:"row",children:Object(f.jsx)("div",{className:"col-md-12",children:"copyright@cleaning. All right reserved"})})})})]})}}]),t}(l.Component),I=(l.Component,l.Component,l.Component,function(e){Object(a.a)(t,e);var s=Object(n.a)(t);function t(e){var i;return Object(c.a)(this,t),(i=s.call(this,e)).state={app:new v},i}return Object(i.a)(t,[{key:"render",value:function(){var e=this;this.state;return Object(f.jsx)(o.a,{children:Object(f.jsxs)(d.d,{children:[Object(f.jsx)(d.b,{exact:!0,path:"/",render:function(s){return Object(f.jsx)(C,{state:e.state,children:Object(f.jsx)(U,{state:e.state})})}}),Object(f.jsx)(d.b,{render:function(s){return Object(f.jsx)(C,{state:e.state,children:Object(f.jsx)(k,{state:e.state,title:"MyHours.me",pageSubCaption:"",children:Object(f.jsx)(U,{state:e.state})})})}})]})})}}]),t}(l.Component));Object(r.render)(Object(f.jsx)(I,{}),document.getElementById("root"))},83:function(e,s){}},[[118,1,2]]]);
//# sourceMappingURL=main.ec55c87a.chunk.js.map