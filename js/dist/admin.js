module.exports=function(t){var n={};function e(a){if(n[a])return n[a].exports;var r=n[a]={i:a,l:!1,exports:{}};return t[a].call(r.exports,r,r.exports,e),r.l=!0,r.exports}return e.m=t,e.c=n,e.d=function(t,n,a){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:a})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(e.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)e.d(a,r,function(n){return t[n]}.bind(null,r));return a},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=83)}([function(t,n){t.exports=flarum.core.compat.app},function(t,n){t.exports=flarum.core.compat.extend},function(t,n){t.exports=flarum.core.compat.Model},function(t,n){t.exports=flarum.core.compat["components/Button"]},function(t,n,e){"use strict";e.d(n,"a",function(){return o});var a=e(23),r=e.n(a);function o(t,n){t.prototype=r()(n.prototype),t.prototype.constructor=t,t.__proto__=n}},,function(t,n){var e=t.exports={version:"2.5.7"};"number"==typeof __e&&(__e=e)},function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,n,e){t.exports=!e(13)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},,,function(t,n,e){var a=e(12);t.exports=function(t){if(!a(t))throw TypeError(t+" is not an object!");return t}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},,function(t,n){},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n,e){var a=e(38),r=e(29);t.exports=function(t){return a(r(t))}},function(t,n){var e=Math.ceil,a=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?a:e)(t)}},function(t,n,e){var a=e(43)("keys"),r=e(45);t.exports=function(t){return a[t]||(a[t]=r(t))}},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n,e){var a=e(11),r=e(49),o=e(50),i=Object.defineProperty;n.f=e(8)?Object.defineProperty:function(t,n,e){if(a(t),n=o(n,!0),a(e),r)try{return i(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){var a=e(12),r=e(7).document,o=a(r)&&a(r.createElement);t.exports=function(t){return o?r.createElement(t):{}}},function(t,n,e){t.exports=e(52)},function(t,n,e){"use strict";e.d(n,"a",function(){return s});var a=e(4),r=e(2),o=e.n(r),i=e(25),s=function(t){function n(){return t.apply(this,arguments)||this}return Object(a.a)(n,t),n}(e.n(i)()(o.a,{points:o.a.attribute("points"),name:o.a.attribute("name"),color:o.a.attribute("color")}))},function(t,n){t.exports=flarum.core.compat["utils/mixin"]},function(t,n){t.exports=flarum.core.compat["components/Page"]},,,function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n,e){var a=e(37),r=e(20);t.exports=Object.keys||function(t){return a(t,r)}},function(t,n,e){var a=e(7),r=e(6),o=e(46),i=e(48),s=e(16),c=function(t,n,e){var u,l,p,f=t&c.F,m=t&c.G,d=t&c.S,v=t&c.P,h=t&c.B,g=t&c.W,b=m?r:r[n]||(r[n]={}),k=b.prototype,y=m?a:d?a[n]:(a[n]||{}).prototype;for(u in m&&(e=n),e)(l=!f&&y&&void 0!==y[u])&&s(b,u)||(p=l?y[u]:e[u],b[u]=m&&"function"!=typeof y[u]?e[u]:h&&l?o(p,a):g&&y[u]==p?function(t){var n=function(n,e,a){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,a)}return t.apply(this,arguments)};return n.prototype=t.prototype,n}(p):v&&"function"==typeof p?o(Function.call,p):p,v&&((b.virtual||(b.virtual={}))[u]=p,t&c.R&&k&&!k[u]&&i(k,u,p)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},,,,,function(t,n){t.exports=flarum.core.compat["components/UploadImageButton"]},function(t,n,e){var a=e(16),r=e(17),o=e(40)(!1),i=e(19)("IE_PROTO");t.exports=function(t,n){var e,s=r(t),c=0,u=[];for(e in s)e!=i&&a(s,e)&&u.push(e);for(;n.length>c;)a(s,e=n[c++])&&(~o(u,e)||u.push(e));return u}},function(t,n,e){var a=e(39);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==a(t)?t.split(""):Object(t)}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n,e){var a=e(17),r=e(41),o=e(42);t.exports=function(t){return function(n,e,i){var s,c=a(n),u=r(c.length),l=o(i,u);if(t&&e!=e){for(;u>l;)if((s=c[l++])!=s)return!0}else for(;u>l;l++)if((t||l in c)&&c[l]===e)return t||l||0;return!t&&-1}}},function(t,n,e){var a=e(18),r=Math.min;t.exports=function(t){return t>0?r(a(t),9007199254740991):0}},function(t,n,e){var a=e(18),r=Math.max,o=Math.min;t.exports=function(t,n){return(t=a(t))<0?r(t+n,0):o(t,n)}},function(t,n,e){var a=e(6),r=e(7),o=r["__core-js_shared__"]||(r["__core-js_shared__"]={});(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:a.version,mode:e(44)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},function(t,n){t.exports=!0},function(t,n){var e=0,a=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+a).toString(36))}},function(t,n,e){var a=e(47);t.exports=function(t,n,e){if(a(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,a){return t.call(n,e,a)};case 3:return function(e,a,r){return t.call(n,e,a,r)}}return function(){return t.apply(n,arguments)}}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n,e){var a=e(21),r=e(51);t.exports=e(8)?function(t,n,e){return a.f(t,n,r(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){t.exports=!e(8)&&!e(13)(function(){return 7!=Object.defineProperty(e(22)("div"),"a",{get:function(){return 7}}).a})},function(t,n,e){var a=e(12);t.exports=function(t,n){if(!a(t))return t;var e,r;if(n&&"function"==typeof(e=t.toString)&&!a(r=e.call(t)))return r;if("function"==typeof(e=t.valueOf)&&!a(r=e.call(t)))return r;if(!n&&"function"==typeof(e=t.toString)&&!a(r=e.call(t)))return r;throw TypeError("Can't convert object to primitive value")}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,e){e(53);var a=e(6).Object;t.exports=function(t,n){return a.create(t,n)}},function(t,n,e){var a=e(31);a(a.S,"Object",{create:e(54)})},function(t,n,e){var a=e(11),r=e(55),o=e(20),i=e(19)("IE_PROTO"),s=function(){},c=function(){var t,n=e(22)("iframe"),a=o.length;for(n.style.display="none",e(56).appendChild(n),n.src="javascript:",(t=n.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),c=t.F;a--;)delete c.prototype[o[a]];return c()};t.exports=Object.create||function(t,n){var e;return null!==t?(s.prototype=a(t),e=new s,s.prototype=null,e[i]=t):e=c(),void 0===n?e:r(e,n)}},function(t,n,e){var a=e(21),r=e(11),o=e(30);t.exports=e(8)?Object.defineProperties:function(t,n){r(t);for(var e,i=o(n),s=i.length,c=0;s>c;)a.f(t,e=i[c++],n[e]);return t}},function(t,n,e){var a=e(7).document;t.exports=a&&a.documentElement},,,,,function(t,n){t.exports=flarum.core.compat["components/PermissionGrid"]},function(t,n){t.exports=flarum.core.compat["components/Switch"]},,function(t,n,e){"use strict";var a=e(0),r=e.n(a),o=e(1),i=e(61),s=e.n(i),c=e(74),u=e.n(c),l=e(75),p=e.n(l),f=e(4),d=e(76),v=e.n(d),h=e(26),g=e.n(h),b=e(3),k=e.n(b),y=e(36),x=e.n(y),w=e(77),_=e.n(w),P=e(62),R=e.n(P),N=function(t){function n(){return t.apply(this,arguments)||this}Object(f.a)(n,t);var e=n.prototype;return e.init=function(){var t=this;this.fields=["convertedLikes","amountPerPost","amountPerDiscussion","postStartAmount","rankAmt","iconName","blockedUsers","pointsPlaceholder"],this.switches=["autoUpvotePosts","customRankingImages"],this.ranks=app.store.all("ranks"),this.values={},this.settingsPrefix="reflar.gamification";var n=app.data.settings;this.fields.forEach(function(e){return t.values[e]=m.prop(n[t.addPrefix(e)])}),this.switches.forEach(function(e){return t.values[e]=m.prop("1"===n[t.addPrefix(e)])}),this.newRank={points:m.prop(""),name:m.prop(""),color:m.prop("")}},e.view=function(){var t=this;return[m("div",{className:"SettingsPage"},[m("div",{className:"container"},[m("form",{onsubmit:this.onsubmit.bind(this)},[m("div",{className:"helpText"},app.translator.trans("reflar-gamification.admin.page.convert.help")),void 0===this.values.convertedLikes()?k.a.component({type:"button",className:"Button Button--warning Ranks-button",children:app.translator.trans("reflar-gamification.admin.page.convert.button"),onclick:function(){app.request({url:app.forum.attribute("apiUrl")+"/reflar/gamification/convert",method:"POST"}).then(t.values.convertedLikes("converting"))}}):"converting"===this.values.convertedLikes()?m("label",{},app.translator.trans("reflar-gamification.admin.page.convert.converting")):m("label",{},app.translator.trans("reflar-gamification.admin.page.convert.converted",{number:this.values.convertedLikes()})),m("fieldset",{className:"SettingsPage-ranks"},[m("legend",{},app.translator.trans("reflar-gamification.admin.page.ranks.title")),m("label",{},app.translator.trans("reflar-gamification.admin.page.ranks.ranks")),m("div",{className:"helpText"},app.translator.trans("reflar-gamification.admin.page.ranks.help.help")),m("div",{className:"Ranks--Container"},this.ranks.map(function(n){return m("div",{style:"float: left;"},[m("input",{className:"FormControl Ranks-number",type:"number",value:n.points(),placeholder:app.translator.trans("reflar-gamification.admin.page.ranks.help.points"),oninput:m.withAttr("value",t.updatePoints.bind(t,n))}),m("input",{className:"FormControl Ranks-name",value:n.name(),placeholder:app.translator.trans("reflar-gamification.admin.page.ranks.help.name"),oninput:m.withAttr("value",t.updateName.bind(t,n))}),m("input",{className:"FormControl Ranks-color",value:n.color(),placeholder:app.translator.trans("reflar-gamification.admin.page.ranks.help.color"),oninput:m.withAttr("value",t.updateColor.bind(t,n))}),k.a.component({type:"button",className:"Button Button--warning Ranks-button",icon:"fa fa-times",onclick:t.deleteRank.bind(t,n)})])}),m("div",{style:"float: left; margin-bottom: 15px"},[m("input",{className:"FormControl Ranks-number",value:this.newRank.points(),placeholder:app.translator.trans("reflar-gamification.admin.page.ranks.help.points"),type:"number",oninput:m.withAttr("value",this.newRank.points)}),m("input",{className:"FormControl Ranks-name",value:this.newRank.name(),placeholder:app.translator.trans("reflar-gamification.admin.page.ranks.help.name"),oninput:m.withAttr("value",this.newRank.name)}),m("input",{className:"FormControl Ranks-color",value:this.newRank.color(),placeholder:app.translator.trans("reflar-gamification.admin.page.ranks.help.color"),oninput:m.withAttr("value",this.newRank.color)}),k.a.component({type:"button",className:"Button Button--warning Ranks-button",icon:"fa fa-plus",onclick:this.addRank.bind(this)})])),m("label",{},app.translator.trans("reflar-gamification.admin.page.ranks.number_title")),m("input",{className:"FormControl Ranks-default",value:this.values.rankAmt()||"",placeholder:2,oninput:m.withAttr("value",this.values.rankAmt)}),m("legend",{},app.translator.trans("reflar-gamification.admin.page.votes.title")),m("label",{},app.translator.trans("reflar-gamification.admin.page.votes.icon_name")),m("div",{className:"helpText"},app.translator.trans("reflar-gamification.admin.page.votes.icon_help")),m("input",{className:"FormControl Ranks-default",value:this.values.iconName()||"",placeholder:"thumbs",oninput:m.withAttr("value",this.values.iconName)}),R.a.component({state:this.values.autoUpvotePosts()||!1,children:app.translator.trans("reflar-gamification.admin.page.votes.auto_upvote"),onchange:this.values.autoUpvotePosts,className:"votes-switch"}),m("label",{},app.translator.trans("reflar-gamification.admin.page.votes.points_title")),m("input",{className:"FormControl Ranks-default",value:this.values.pointsPlaceholder()||"",placeholder:app.translator.trans("reflar-gamification.admin.page.votes.points_placeholder")+"{points}",oninput:m.withAttr("value",this.values.pointsPlaceholder)}),m("legend",{},app.translator.trans("reflar-gamification.admin.page.rankings.title")),R.a.component({state:this.values.customRankingImages()||!1,children:app.translator.trans("reflar-gamification.admin.page.rankings.enable"),onchange:this.values.customRankingImages,className:"votes-switch"}),m("label",{},app.translator.trans("reflar-gamification.admin.page.rankings.blocked.title")),m("input",{className:"FormControl Ranks-blocked",placeholder:app.translator.trans("reflar-gamification.admin.page.rankings.blocked.placeholder"),value:this.values.blockedUsers()||"",oninput:m.withAttr("value",this.values.blockedUsers)}),m("div",{className:"helpText"},app.translator.trans("reflar-gamification.admin.page.rankings.blocked.help")),m("label",{className:"Upload-label"},app.translator.trans("reflar-gamification.admin.page.rankings.custom_image_1")),m(x.a,{className:"Upload-button",name:"reflar/topimage/1"}),m("br"),m("label",{className:"Upload-label"},app.translator.trans("reflar-gamification.admin.page.rankings.custom_image_2")),m(x.a,{className:"Upload-button",name:"reflar/topimage/2"}),m("br"),m("label",{className:"Upload-label"},app.translator.trans("reflar-gamification.admin.page.rankings.custom_image_3")),m(x.a,{className:"Upload-button",name:"reflar/topimage/3"}),m("br"),k.a.component({type:"submit",className:"Button Button--primary Ranks-save",children:app.translator.trans("reflar-gamification.admin.page.save_settings"),loading:this.loading,disabled:!this.changed()})])])])])]},e.updateName=function(t,n){t.save({name:n})},e.updatePoints=function(t,n){t.save({points:n})},e.updateColor=function(t,n){t.save({color:n})},e.deleteRank=function(t){var n=this;t.delete(),this.ranks.some(function(e,a){if(e.data.id===t.data.id)return n.ranks.splice(a,1),!0})},e.addRank=function(t){var n=this;app.store.createRecord("ranks").save({points:this.newRank.points(),name:this.newRank.name(),color:this.newRank.color()}).then(function(t){n.newRank.color(""),n.newRank.name(""),n.newRank.points(""),n.ranks.push(t),m.redraw()})},e.changed=function(){var t=this,n=this.switches.some(function(n){return t.values[n]()!==("1"==app.data.settings[t.addPrefix(n)])});return this.fields.some(function(n){return t.values[n]()!==app.data.settings[t.addPrefix(n)]})||n},e.onsubmit=function(t){var n=this;if(t.preventDefault(),!this.loading){this.loading=!0,app.alerts.dismiss(this.successAlert);var e={};this.switches.forEach(function(t){return e[n.addPrefix(t)]=n.values[t]()}),this.fields.forEach(function(t){return e[n.addPrefix(t)]=n.values[t]()}),_()(e).then(function(){app.alerts.show(n.successAlert=new v.a({type:"success",children:app.translator.trans("core.admin.basics.saved_message")}))}).catch(function(){}).then(function(){n.loading=!1,window.location.reload()})}},e.addPrefix=function(t){return this.settingsPrefix+"."+t},n}(g.a),O=function(){app.routes["reflar-gamification"]={path:"/reflar/gamification",component:N.component()},app.extensionSettings["reflar-gamification"]=function(){return m.route(app.route("reflar-gamification"))},Object(o.extend)(u.a.prototype,"items",function(t){t.add("reflar-gamification",p.a.component({href:app.route("reflar-gamification"),icon:"fas fa-thumbs-up",children:"Gamification",description:app.translator.trans("reflar-gamification.admin.nav.desc")}))})},j=e(24);r.a.initializers.add("reflar-gamification",function(t){t.store.models.ranks=j.a,Object(o.extend)(s.a.prototype,"replyItems",function(n){n.add("Vote",{icon:"fas fa-thumbs-up",label:t.translator.trans("reflar-gamification.admin.permissions.vote_label"),permission:"discussion.vote"})}),Object(o.extend)(s.a.prototype,"viewItems",function(n){n.add("canSeeVotes",{icon:"fas fa-info-circle",label:t.translator.trans("reflar-gamification.admin.permissions.see_votes_label"),permission:"discussion.canSeeVotes"}),n.add("canViewRankingPage",{icon:"fas fa-trophy",label:t.translator.trans("reflar-gamification.admin.permissions.see_ranking_page"),permission:"reflar.gamification.viewRankingPage",allowGuest:!0})}),O()})},,,,,,,,,,function(t,n){t.exports=flarum.core.compat["components/AdminNav"]},function(t,n){t.exports=flarum.core.compat["components/AdminLinkButton"]},function(t,n){t.exports=flarum.core.compat["components/Alert"]},function(t,n){t.exports=flarum.core.compat["utils/saveSettings"]},,,,,,function(t,n,e){"use strict";e.r(n);var a=e(15);for(var r in a)"default"!==r&&function(t){e.d(n,t,function(){return a[t]})}(r);e(64)}]);
//# sourceMappingURL=admin.js.map