(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{501:function(e,t,n){__NEXT_REGISTER_PAGE("/",function(){return e.exports=n(508),{page:e.exports.default}})},508:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=(n(2),n(3)),i=n(41),c=n.n(i),l=n(10),u=n(83);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function p(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var y=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),p(this,m(t).apply(this,arguments))}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,o["Component"]),n=t,(a=[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.style,o=e.data;return r.a.createElement("div",{className:t.root,style:n},r.a.createElement(l.b,{container:!0,spacing:24},r.a.createElement(l.b,{item:!0,md:5},r.a.createElement("a",{href:"/detail/".concat(o.slug)},r.a.createElement("div",{className:"image"},r.a.createElement("img",{src:o.image,alt:"".concat(o.title," image")})))),r.a.createElement(l.b,{item:!0,md:7},r.a.createElement("a",{href:"/detail/".concat(o.slug)},r.a.createElement(l.c,{className:"title",variant:"h2",gutterBottom:!0},c()(o.title))),r.a.createElement(l.c,{className:"description",variant:"body2",gutterBottom:!0},c()(o.description)),r.a.createElement(l.c,{className:"from",variant:"body2",gutterBottom:!0},"Source from: ",r.a.createElement("a",{href:o.from.link,target:"_blank",rel:"noopener noreferrer"},o.from.name)))))}}])&&s(n.prototype,a),i&&s(n,i),t}(),d=Object(a.withStyles)(function(e){return{root:{padding:"25px 0","& .image":{width:"100%",height:200,overflow:"hidden","& img":{width:"100%"}},"& .title":{fontSize:22,fontWeight:700,marginBottom:15,lineHeight:1.3,transition:"color 0.3s ease","&:hover":{color:e.palette.primary.main}},"& .description":{fontSize:15,fontWeight:400,marginBottom:35},"& a":{color:e.palette.primary.main}}}})(y),h=n(33),g=n(49);function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function E(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function w(e,t){return!t||"object"!==v(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var S=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),w(this,O(t).apply(this,arguments))}var n,o,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(t,r.a.Component),n=t,(o=[{key:"render",value:function(){var e=this.props.classes,t=h.a&&h.a.filter(function(e){return!0===e.headline})[0];return r.a.createElement(u.a,null,r.a.createElement("div",{className:e.root},r.a.createElement(g.a,null,r.a.createElement("div",{className:"headline"},r.a.createElement("img",{src:t.image,alt:t.title}),r.a.createElement("div",{className:"overlay"}),r.a.createElement(l.c,{className:"title",variant:"h2",gutterBottom:!0},c()(t.title))),r.a.createElement("div",{className:"box"},h.a&&h.a.map(function(e,t){return r.a.createElement(d,{key:t,data:e})})))))}}])&&E(n.prototype,o),a&&E(n,a),t}();t.default=Object(a.withStyles)(function(e){return{root:{paddingBottom:30,"& .headline":{position:"relative",borderRadius:3,marginBottom:30,"& img":{width:"100%",borderRadius:3},"& .overlay":{position:"absolute",width:"100%",height:"60%",background:"linear-gradient(0deg, #fff, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.01))",bottom:0,zIndex:0},"& .title":{position:"absolute",bottom:10,left:30,fontSize:36,fontWeight:700,marginBottom:15,lineHeight:1.3,transition:"color 0.3s ease",zIndex:99,"&:hover":{color:e.palette.primary.main}}},"& .box":{borderRadius:3,backgroundColor:"#fff",boxShadow:"0 1px 3px 0 rgba(0, 0, 0, 0.16)",padding:"20px 50px"}}}})(S)}},[[501,1,0]]]);