(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[186],{186:function(e,r,t){"use strict";t.r(r);var n=t(4165),a=t(5861),c=t(9439),u=t(2791),s=t(7689),i=t(4390),o=t(6375),p=t(184);r.default=function(){var e=(0,u.useState)([]),r=(0,c.Z)(e,2),t=r[0],f=r[1],h=(0,s.UO)().movieId,l=(0,u.useState)(!1),v=(0,c.Z)(l,2),d=v[0],Z=v[1];return(0,u.useEffect)((function(){var e=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Z(!0),e.prev=1,e.next=4,(0,i._r)(h);case 4:r=e.sent,f(r),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0,"There has been a mistake");case 11:return e.prev=11,Z(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[h]),(0,p.jsxs)(o.Section,{children:[d?(0,p.jsx)("div",{children:"Loading..."}):(0,p.jsx)(p.Fragment,{children:t.length>0&&t.map((function(e){var r=e.id,t=e.author,n=e.content;return(0,p.jsx)(o.Wrapper,{children:(0,p.jsxs)(o.Item,{children:[(0,p.jsx)("p",{children:(0,p.jsxs)("b",{children:["Author: ",t]})}),(0,p.jsxs)("p",{children:['"',n,'"']})]},r)})}))}),!t.length&&(0,p.jsx)("p",{children:"There are no reviews for this film yet."})]})}},6375:function(){},4390:function(e,r,t){"use strict";t.d(r,{Df:function(){return s},IR:function(){return f},Jh:function(){return o},Pg:function(){return i},_r:function(){return p}});var n=t(4165),a=t(5861),c=t(1243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var u="ade1daffc6bca963e80c58578c4f4361",s=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var r,t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/trending/all/day?api_key=".concat(u));case 2:return r=e.sent,t=r.data,e.abrupt("return",t.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(r){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(r,"?api_key=").concat(u)).catch((function(e){throw new Error("Sorry, we have a problem.")}));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),o=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(r){var t,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(r,"/credits?api_key=").concat(u,"&language=en-US"));case 2:return t=e.sent,a=t.data,e.abrupt("return",a.cast);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(r){var t,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(r,"/reviews?api_key=").concat(u));case 2:return t=e.sent,a=t.data,e.abrupt("return",a.results);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(r){var t,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/search/movie?api_key=".concat(u,"&query=").concat(r,"&language=en-US&page=1&include_adult=false"));case 2:return t=e.sent,a=t.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=186.70464a29.chunk.js.map