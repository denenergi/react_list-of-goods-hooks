(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c,s=n(6),o=n.n(s),r=n(4),a=n(7),u=n(1),i=(n(12),n(0)),l=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];function b(t,e,n){var s=Object(a.a)(t);return e!==c.NONE&&s.sort((function(t,n){switch(e){case c.ALPABET:return t.localeCompare(n);case c.LENGTH:return t.length-n.length;default:return 0}})),n&&s.reverse(),s}!function(t){t[t.NONE=0]="NONE",t[t.ALPABET=1]="ALPABET",t[t.LENGTH=2]="LENGTH"}(c||(c={}));var j=function(){var t=Object(u.useState)(!1),e=Object(r.a)(t,2),n=e[0],s=e[1],o=Object(u.useState)(c.NONE),a=Object(r.a)(o,2),j=a[0],N=a[1],O=Object(u.useState)(!1),d=Object(r.a)(O,2),h=d[0],p=d[1];return Object(i.jsxs)("div",{className:"container",children:[!1===n&&Object(i.jsx)("button",{type:"button",className:"button",onClick:function(){return s(!n)},children:"Start"}),n&&Object(i.jsxs)("div",{className:"App",children:[Object(i.jsxs)("div",{className:"App__buttons",children:[Object(i.jsx)("button",{type:"button",className:"button",onClick:function(){return N(c.ALPABET)},children:"Sort alphabetically"}),Object(i.jsx)("button",{type:"button",className:"button",onClick:function(){return N(c.LENGTH)},children:"Sort by length"}),Object(i.jsx)("button",{type:"button",className:"button",onClick:function(){return p(!h)},children:"Reverse"}),Object(i.jsx)("button",{type:"button",className:"button",onClick:function(){N(c.NONE),p(!1)},children:"Reset"})]}),Object(i.jsx)("ul",{className:"Goods",children:b(l,j,h).map((function(t){return Object(i.jsx)("li",{className:"Goods__item",children:t},t)}))})]})]})};o.a.render(Object(i.jsx)(j,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.21fba3aa.chunk.js.map