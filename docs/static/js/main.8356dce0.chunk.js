(this["webpackJsonpgift-expert-app"]=this["webpackJsonpgift-expert-app"]||[]).push([[0],{20:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(7),r=n.n(c),i=n(2),s=n(10),o=n(8),u=n.n(o),j=n(0),d=function(e){var t=e.setCategoria,n=Object(a.useState)(""),c=Object(i.a)(n,2),r=c[0],o=c[1];return Object(j.jsx)("form",{onSubmit:function(e){e.preventDefault(),r.trim().length>2&&(t((function(e){return[r].concat(Object(s.a)(e))})),o(""))},children:Object(j.jsx)("input",{type:"text",placeholder:"Busque Gif",value:r,onChange:function(e){o(e.target.value)}})})};d.PropType={setCategoria:u.a.func.isRequired};var l=n(11),p=n(6),f=n.n(p),b=n(9),m=function(){var e=Object(b.a)(f.a.mark((function e(t){var n,a,c,r,i;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="http://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&api_key=RCvSBBYEc2Bb1oXdHiuhhoVCS5jn3SWx"),e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return c=e.sent,r=c.data,i=r.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(e){e.id;var t=e.title,n=e.url;return Object(j.jsxs)("div",{className:"card animate__animated animate__fadeIn",children:[Object(j.jsx)("img",{src:n,alt:t}),Object(j.jsx)("p",{children:t})]})},O=function(e){var t=e.cateogy,n=function(e){var t=Object(a.useState)({data:[],loading:!0}),n=Object(i.a)(t,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){m(e).then((function(e){console.log(e),r({data:e,loading:!1})}))}),[e]),c}(t),c=n.data,r=n.loading;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h3",{className:"animate__animated animate__fadeIn",children:t}),r&&Object(j.jsx)("p",{className:"animate__animated animate__flash",children:"Cargando"}),Object(j.jsx)("div",{className:"card-read",children:c.map((function(e){return Object(j.jsx)(h,Object(l.a)({},e),e.id)}))})]})},x=function(){var e=Object(a.useState)(["Pokemon"]),t=Object(i.a)(e,2),n=t[0],c=t[1];return console.log(n),Object(j.jsxs)(a.Fragment,{children:[Object(j.jsx)("h2",{children:"GifExpertApp"}),Object(j.jsx)("hr",{}),Object(j.jsx)(d,{setCategoria:c}),Object(j.jsx)("ol",{children:n.map((function(e){return Object(j.jsx)(O,{cateogy:e},e)}))})]})};n(20);r.a.render(Object(j.jsx)(x,{}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.8356dce0.chunk.js.map