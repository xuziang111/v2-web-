(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["user"],{"159b":function(t,a,e){var s=e("da84"),r=e("fdbc"),i=e("17c2"),n=e("9112");for(var c in r){var l=s[c],o=l&&l.prototype;if(o&&o.forEach!==i)try{n(o,"forEach",i)}catch(u){o.forEach=i}}},"17c2":function(t,a,e){"use strict";var s=e("b727").forEach,r=e("a640"),i=e("ae40"),n=r("forEach"),c=i("forEach");t.exports=n&&c?[].forEach:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}},4160:function(t,a,e){"use strict";var s=e("23e7"),r=e("17c2");s({target:"Array",proto:!0,forced:[].forEach!=r},{forEach:r})},4287:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("h1",[t._v("node")])},r=[],i={name:"node"},n=i,c=e("2877"),l=Object(c["a"])(n,s,r,!1,null,"0f70fab8",null);a["default"]=l.exports},5007:function(t,a,e){},"65f0":function(t,a,e){var s=e("861d"),r=e("e8b5"),i=e("b622"),n=i("species");t.exports=function(t,a){var e;return r(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!r(e.prototype)?s(e)&&(e=e[n],null===e&&(e=void 0)):e=void 0),new(void 0===e?Array:e)(0===a?0:a)}},a640:function(t,a,e){"use strict";var s=e("d039");t.exports=function(t,a){var e=[][t];return!!e&&s((function(){e.call(null,a||function(){throw 1},1)}))}},ae40:function(t,a,e){var s=e("83ab"),r=e("d039"),i=e("5135"),n=Object.defineProperty,c={},l=function(t){throw t};t.exports=function(t,a){if(i(c,t))return c[t];a||(a={});var e=[][t],o=!!i(a,"ACCESSORS")&&a.ACCESSORS,u=i(a,0)?a[0]:l,d=i(a,1)?a[1]:void 0;return c[t]=!!e&&!r((function(){if(o&&!s)return!0;var t={length:-1};o?n(t,1,{enumerable:!0,get:l}):t[1]=1,e.call(t,u,d)}))}},b727:function(t,a,e){var s=e("0366"),r=e("44ad"),i=e("7b0b"),n=e("50c4"),c=e("65f0"),l=[].push,o=function(t){var a=1==t,e=2==t,o=3==t,u=4==t,d=6==t,f=5==t||d;return function(v,m,p,h){for(var g,x,y=i(v),C=r(y),_=s(m,p,3),L=n(C.length),b=0,w=h||c,S=a?w(v,L):e?w(v,0):void 0;L>b;b++)if((f||b in C)&&(g=C[b],x=_(g,b,y),t))if(a)S[b]=x;else if(x)switch(t){case 3:return!0;case 5:return g;case 6:return b;case 2:l.call(S,g)}else if(u)return!1;return d?-1:o||u?u:S}};t.exports={forEach:o(0),map:o(1),filter:o(2),some:o(3),every:o(4),find:o(5),findIndex:o(6)}},bb85:function(t,a,e){"use strict";var s=e("5007"),r=e.n(s);r.a},e8b5:function(t,a,e){var s=e("c6b6");t.exports=Array.isArray||function(t){return"Array"==s(t)}},f1b7:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("main",[e("header",[e("el-row",[e("el-col",{attrs:{span:4}},[e("div",[t._v("我是logo")])]),e("el-col",{attrs:{span:4,offset:16}},[e("div",[t._v("节点")])])],1)],1),e("el-row",{attrs:{gutter:20}},[e("el-col",{attrs:{xl:6,lg:6,md:24,xs:24}},[e("el-row",{attrs:{gutter:20,span:6}},[e("el-col",{attrs:{xl:"24",lg:24,md:6,xs:24}},[e("el-card",{staticClass:"box-card"},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("span",[t._v("账号明细")])]),e("div",{attrs:{id:"userDefinite"}},t._l(this.userData.definite,(function(a){return e("div",{key:a.name,staticClass:"text item"},[e("div",{staticClass:"tipss"},[t._v(t._s(a.cname))]),e("div",{staticClass:"textNormal"},[t._v(t._s(a.val))])])})),0)])],1),e("el-col",{attrs:{xl:"24",lg:24,md:18,xs:24}},[e("el-card",{staticClass:"box-card"},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("span",[t._v("快速配置")]),e("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"}},[t._v("操作按钮")])],1),t._l(4,(function(a){return e("div",{key:a,staticClass:"text item"},[t._v(" "+t._s("列表内容 "+a)+" ")])}))],2)],1)],1)],1),e("el-col",{attrs:{xl:18,lg:18,md:24,xs:24}},[e("el-row",{attrs:{gutter:20,span:6}},[e("el-col",{attrs:{xl:"24",lg:24,md:24,xs:24}},[e("el-card",{staticClass:"box-card"},[e("div",{staticClass:"uim-anchor",attrs:{id:"cardSwitch"}},[e("ul",{staticClass:"uim-anchor-inner",on:{click:function(a){return t.switchCard(a)}}},[e("li",{staticClass:"uim-anchor-active",attrs:{"data-page":"user-resourse",id:"cards1"}}),e("li",{attrs:{"data-page":"user-settings",id:"cards2"}})])]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.ifkeyongziyuan,expression:"ifkeyongziyuan"}]},[e("div",{staticClass:"cardHeader"},[e("span",[t._v("可用资源")])]),e("el-row",{attrs:{type:"flex",justify:"center"}},[t._l(t.userData.keyongziyuan,(function(a){return e("el-col",{key:a.name,staticClass:"text item",attrs:{span:4}},[e("div",{staticClass:"tipss"},[t._v(t._s(a.cname))]),e("div",{staticClass:"textNormal"},[t._v(t._s(a.val))])])})),e("el-col",{staticClass:"dataProgress-container",attrs:{span:8}},[e("div",[e("p",[t._v("已用流量/今日已用")])]),e("el-progress",{staticClass:"dataProgress",attrs:{"text-inside":!0,"stroke-width":12,percentage:70,id:"progressTest"}},[e("div",[t._v("xxx")])]),e("div",[e("p",[t._v("可用流量")])]),e("el-progress",{staticClass:"dataProgress",attrs:{"text-inside":!0,"stroke-width":12,percentage:70}})],1)],2)],1),e("div",{directives:[{name:"show",rawName:"v-show",value:t.ifLinkMessage,expression:"ifLinkMessage"}]},[e("div",{staticClass:"cardHeader"},[e("span",[t._v("连接信息")])]),e("el-row",{attrs:{type:"flex",justify:"center"}},t._l(t.linkInfo,(function(a){return e("el-col",{key:a.name,staticClass:"text item",attrs:{span:4}},[e("div",{staticClass:"tipss"},[t._v(t._s(a.cname))]),e("div",{staticClass:"textNormal"},[t._v(t._s(a.val))])])})),1)],1)])],1),e("el-col",{attrs:{xl:"24",lg:24,md:24,xs:24}},[e("el-card",{staticClass:"box-card"},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("span",[t._v("公告")]),e("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"}},[t._v("操作按钮")])],1),t._l(4,(function(a){return e("div",{key:a,staticClass:"text item"},[t._v(" "+t._s("列表内容 "+a)+" ")])}))],2)],1)],1)],1)],1),e("el-row",{attrs:{gutter:20}},[e("el-col",{attrs:{span:18}},[e("div",{staticClass:"grid-content bg-purple"})]),e("el-col",{attrs:{span:6}},[e("div",{staticClass:"grid-content bg-purple"})])],1)],1)},r=[],i=(e("4160"),e("159b"),{name:"panel",data:function(){return{radio:"1",ifLinkMessage:!1,ifkeyongziyuan:!0,userData:{definite:[{name:"username",val:"用户名",cname:"用户名"},{name:"vipLv",val:1,cname:"VIP等级"},{name:"email",val:"11111111111@qq.com",cname:"邮箱"},{name:"deposit",val:3,cname:"余额"}],keyongziyuan:[{name:"LvExp",val:2,cname:"等级有效期"},{name:"accountExp",val:29,cname:"账号有效期"},{name:"clientNum",val:6,cname:"在线设备数"},{name:"rateLimiting",val:"无限制",cname:"端口速率"}]},linkInfo:[{name:"port",val:23333,cname:"端口"},{name:"password",val:"123456",cname:"密码"},{name:"security",val:"chacha20",cname:"加密"},{name:"xieyi",val:"auth_aes12",cname:"协议"},{name:"hunxiao",val:"plain",cname:"混淆"},{name:"hunxiaocanshu",val:"wns.wwww",cname:"混淆参数"}]}},methods:{switchCard:function(t){"uim-anchor-active"!==t.target.className&&(t.currentTarget.children.forEach((function(t){t.className=""})),t.target.className="uim-anchor-active","cards1"===t.target.id?(this.ifLinkMessage=!1,this.ifkeyongziyuan=!0):"cards2"===t.target.id&&(this.ifLinkMessage=!0,this.ifkeyongziyuan=!1))}},mounted:function(){}}),n=i,c=(e("bb85"),e("2877")),l=Object(c["a"])(n,s,r,!1,null,"a5939108",null);a["default"]=l.exports},fdbc:function(t,a){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=user.b92b9325.js.map