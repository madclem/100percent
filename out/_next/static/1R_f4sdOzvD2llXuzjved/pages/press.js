(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{12:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(1),o=a(2),i=a.n(o),c=a(17);t.a=Object(c.withRouter)(function(e){var t,a=l.b.a.withConfig({displayName:"NavBar__LinkStyled",componentId:"le3stc-0"})(["color:",";:hover{background-color:transparent;}"],function(e){return e.active?"#ffc107":"black"}),o=Object(l.b)(a).withConfig({displayName:"NavBar__LinkStyledLast",componentId:"le3stc-1"})(["display:flex;align-items:center;"]),c=l.b.span.withConfig({displayName:"NavBar__Badge",componentId:"le3stc-2"})(["margin-left:8px!important;"]),s=l.b.nav.withConfig({displayName:"NavBar__ContainerNavBar",componentId:"le3stc-3"})(["position:absolute;"]),u=r.a.createRef();Object(n.useEffect)(function(){var e=u.current;return t=M.Sidenav.init(e,{edge:"left",inDuration:250}),function(){t.destroy()}});var p=e.router;return r.a.createElement(r.a.Fragment,null,r.a.createElement(s,{className:"nav-wrapper transparent z-depth-1"},r.a.createElement("div",{className:"container transparent"},r.a.createElement(i.a,{href:"#"},r.a.createElement(a,{className:"brand-logo grey-text text-darken-3"},"LOGO")),r.a.createElement(i.a,{href:"#"},r.a.createElement(a,{href:"#",className:"sidenav-trigger","data-target":"mobile-links"},r.a.createElement("i",{className:"material-icons grey-text text-darken-3"},"menu"))),r.a.createElement("ul",{className:"right hide-on-med-and-down black-text"},r.a.createElement("li",null,r.a.createElement(i.a,{href:"/"},r.a.createElement(a,{active:"/"===p.pathname},"Home"))),r.a.createElement("li",null,r.a.createElement(i.a,{href:"/about"},r.a.createElement(a,{active:"/about"===p.pathname},"About"))),r.a.createElement("li",null,r.a.createElement(i.a,{href:"/press"},r.a.createElement(a,{active:"/press"===p.pathname},"Press"))),r.a.createElement("li",null,r.a.createElement(i.a,{href:"#contact"},r.a.createElement(a,null,"Contact"))),r.a.createElement("li",null,r.a.createElement(i.a,{href:"/events"},r.a.createElement(o,{active:"/events"===p.pathname},r.a.createElement("span",null,"Events "),r.a.createElement(c,{className:"new badge white-text orange"},"1"))))))),r.a.createElement("ul",{ref:u,className:"sidenav",id:"mobile-links"},r.a.createElement("li",null,r.a.createElement(i.a,{href:"/"},r.a.createElement(a,null,"Home"))),r.a.createElement("li",null,r.a.createElement(i.a,{href:"/about"},r.a.createElement(a,null,"About"))),r.a.createElement("li",null,r.a.createElement(i.a,{href:"/events"},r.a.createElement(a,null,"Events"))),r.a.createElement("li",null,r.a.createElement(i.a,{href:"/press"},r.a.createElement(a,null,"Press"))),r.a.createElement("li",null,r.a.createElement(i.a,{href:"#"},r.a.createElement(a,null,"Contact")))))})},13:function(e,t,a){"use strict";a.d(t,"a",function(){return h});var n=a(0),r=a.n(n),l=a(1);function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function c(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=l.b.div.withConfig({displayName:"Footer__Container",componentId:"hbcwkv-0"})(["padding:20px 0;"]),f=l.b.div.withConfig({displayName:"Footer__Socials",componentId:"hbcwkv-1"})(["justify-content:center;display:flex;align-items:center;a{color:black;padding:20px;}.linkedin{height:18px;}"]),m=l.b.p.withConfig({displayName:"Footer__Name",componentId:"hbcwkv-2"})(["text-transform:uppercase;font-size:30px;margin-bottom:0;"]),d=l.b.p.withConfig({displayName:"Footer__Intro",componentId:"hbcwkv-3"})(["margin-top:0;text-transform:uppercase;font-size:20px;font-style:italic;"]),h=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),c(this,s(t).apply(this,arguments))}var a,n,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,r.a.Component),a=t,(n=[{key:"render",value:function(){return r.a.createElement(p,{className:"grey lighten-4",id:"contact"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(m,null,"Deborah Gilshan"),r.a.createElement(d,{className:"grey-text text-darken-2"},"Founder, the 100% club"),r.a.createElement("p",null,"Email:"),r.a.createElement("p",null,"deborah.gilshan@the100percentclub.co.uk")),r.a.createElement(f,null,r.a.createElement("a",{href:""},r.a.createElement("i",{className:"material-icons text-black"},"email")),r.a.createElement("a",{href:""},r.a.createElement("img",{className:"linkedin",src:"/static/img/linkedin-icon.svg",alt:"linkedin"})))))}}])&&i(a.prototype,n),l&&i(a,l),t}()},17:function(e,t,a){e.exports=a(19)},2:function(e,t,a){e.exports=a(31)},26:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(12),o=a(13);t.a=function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,null),t,r.a.createElement(o.a,null))}},262:function(e,t,a){__NEXT_REGISTER_PAGE("/press",function(){return e.exports=a(263),{page:e.exports.default}})},263:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return i});var n=a(0),r=a.n(n),l=a(1),o=a(26);function i(){var e=l.b.div.withConfig({displayName:"press__Container",componentId:"sc-1whipqt-0"})(["margin-bottom:80px;"]),t=l.b.div.withConfig({displayName:"press__ContainerArticles",componentId:"sc-1whipqt-1"})(["margin-top:40px;"]),a=l.b.div.withConfig({displayName:"press__Separator",componentId:"sc-1whipqt-2"})(["padding-top:80px;"]),n=[{id:0,title:"Marie Claire",text:"We appeared on Marie Claire's article",link:"#"},{id:1,title:"Telegraph",text:"We appeared on Telegraph's article",link:"#"},{id:2,title:"Other",text:"We appeared on Other's article",link:"#"}];return r.a.createElement(o.a,null,r.a.createElement(a,null),r.a.createElement(e,{className:"container"},r.a.createElement("h2",null,"Press"),r.a.createElement(t,{className:"row"},n.map(function(e){return r.a.createElement("div",{className:"col s12 m6",key:e.id},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-title"},e.title),r.a.createElement("p",null,e.text)),r.a.createElement("div",{className:"card-action"},r.a.createElement("a",{href:e.link},"Link"))))}))))}},31:function(e,t,a){"use strict";var n=a(20),r=a(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(a(32)),o=r(a(36)),i=r(a(6)),c=r(a(7)),s=r(a(14)),u=r(a(15)),p=r(a(16)),f=r(a(30)),m=r(a(11)),d=a(47),h=n(a(0)),E=(r(a(23)),n(a(19))),v=a(22);var y=function(e){function t(){var e,a,n,r,l,c;(0,i.default)(this,t);for(var p=arguments.length,h=new Array(p),y=0;y<p;y++)h[y]=arguments[y];return a=(0,s.default)(this,(e=(0,u.default)(t)).call.apply(e,[this].concat(h))),(0,m.default)((0,f.default)((0,f.default)(a)),"formatUrls",(n=function(e,t){return{href:e&&"object"===(0,o.default)(e)?(0,d.format)(e):e,as:t&&"object"===(0,o.default)(t)?(0,d.format)(t):t}},r=null,l=null,c=null,function(e,t){if(e===r&&t===l)return c;var a=n(e,t);return r=e,l=t,c=a,a})),(0,m.default)((0,f.default)((0,f.default)(a)),"linkClicked",function(e){var t=e.currentTarget,n=t.nodeName,r=t.target;if("A"!==n||!(r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var l=a.formatUrls(a.props.href,a.props.as),o=l.href,i=l.as;if(function(e){var t=(0,d.parse)(e,!1,!0),a=(0,d.parse)((0,v.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===a.protocol&&t.host===a.host}(o)){var c=window.location.pathname;o=(0,d.resolve)(c,o),i=i?(0,d.resolve)(c,i):o,e.preventDefault();var s=a.props.scroll;null==s&&(s=i.indexOf("#")<0);var u=a.props.replace?"replace":"push";E.default[u](o,i,{shallow:a.props.shallow}).then(function(e){e&&s&&(window.scrollTo(0,0),document.body.focus())}).catch(function(e){a.props.onError&&a.props.onError(e)})}}}),a}return(0,p.default)(t,e),(0,c.default)(t,[{key:"componentDidMount",value:function(){this.prefetch()}},{key:"componentDidUpdate",value:function(e){(0,l.default)(this.props.href)!==(0,l.default)(e.href)&&this.prefetch()}},{key:"prefetch",value:function(){if(this.props.prefetch&&"undefined"!=typeof window){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href,a=(0,d.resolve)(e,t);E.default.prefetch(a)}}},{key:"render",value:function(){var e=this,t=this.props.children,a=this.formatUrls(this.props.href,this.props.as),n=a.href,r=a.as;"string"==typeof t&&(t=h.default.createElement("a",null,t));var l=h.Children.only(t),o={onClick:function(t){l.props&&"function"==typeof l.props.onClick&&l.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==l.type||"href"in l.props)||(o.href=r||n),o.href&&"undefined"!=typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(o.href=(0,E._rewriteUrlForNextExport)(o.href)),h.default.cloneElement(l,o)}}]),t}(h.Component);t.default=y},32:function(e,t,a){e.exports=a(33)},33:function(e,t,a){var n=a(3),r=n.JSON||(n.JSON={stringify:JSON.stringify});e.exports=function(e){return r.stringify.apply(r,arguments)}}},[[262,1,0]]]);