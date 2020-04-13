module.exports=function(t){var o={};function n(e){if(o[e])return o[e].exports;var a=o[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=t,n.c=o,n.d=function(t,o,e){n.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:e})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,o){if(1&o&&(t=n(t)),8&o)return t;if(4&o&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&o&&"string"!=typeof t)for(var a in t)n.d(e,a,function(o){return t[o]}.bind(null,a));return e},n.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(o,"a",o),o},n.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},n.p="",n(n.s=40)}([function(t,o){t.exports=flarum.core.compat.app},function(t,o){t.exports=flarum.core.compat.extend},function(t,o){t.exports=flarum.core.compat.Model},function(t,o){t.exports=flarum.core.compat["components/Button"]},function(t,o,n){"use strict";function e(t,o){t.prototype=Object.create(o.prototype),t.prototype.constructor=t,t.__proto__=o}n.d(o,"a",(function(){return e}))},function(t,o){t.exports=flarum.core.compat["components/IndexPage"]},function(t,o){},function(t,o,n){"use strict";n.d(o,"a",(function(){return i}));var e=n(4),a=n(2),s=n.n(a),r=n(8),i=function(t){function o(){return t.apply(this,arguments)||this}return Object(e.a)(o,t),o}(n.n(r)()(s.a,{points:s.a.attribute("points"),name:s.a.attribute("name"),color:s.a.attribute("color")}))},function(t,o){t.exports=flarum.core.compat["utils/mixin"]},function(t,o){t.exports=flarum.core.compat["components/Page"]},function(t,o){t.exports=flarum.core.compat["components/LogInModal"]},function(t,o){t.exports=flarum.core.compat["helpers/avatar"]},function(t,o){t.exports=flarum.core.compat["helpers/username"]},,function(t,o){t.exports=flarum.core.compat["utils/ItemList"]},function(t,o){t.exports=flarum.core.compat["models/Discussion"]},,function(t,o){t.exports=flarum.core.compat["models/Post"]},function(t,o){t.exports=flarum.core.compat["models/User"]},function(t,o){t.exports=flarum.core.compat["components/UserCard"]},function(t,o){t.exports=flarum.core.compat["components/DiscussionList"]},function(t,o){t.exports=flarum.core.compat["components/CommentPost"]},,function(t,o,n){"use strict";var e=n(1),a=n(0),s=n.n(a),r=n(15),i=n.n(r),u=n(2),c=n.n(u),p=n(17),f=n.n(p),l=n(25),d=n.n(l),h=n(18),v=n.n(h),b=n(19),g=n.n(b);function y(t,o){void 0===o&&(o={}),o.style=o.style||{},o.className="rankLabel "+(o.className||"");var n=t.color();return o.style.backgroundColor=o.style.color=n,o.className+=" colored",m("span",o,m("span",{className:"rankLabel-text"},t.name()))}var k=function(){i.a.prototype.canVote=c.a.attribute("canVote"),i.a.prototype.canSeeVotes=c.a.attribute("canSeeVotes"),i.a.prototype.votes=c.a.attribute("votes"),v.a.prototype.points=c.a.attribute("points"),v.a.prototype.ranks=c.a.hasMany("ranks"),f.a.prototype.upvotes=c.a.hasMany("upvotes"),f.a.prototype.downvotes=c.a.hasMany("downvotes");var t=function(t){return function(o){return o&&o.attrs&&o.attrs.className&&o.attrs.className===t}};Object(e.extend)(g.a.prototype,"infoItems",(function(t,o){var n="";0==n&&(n="0"),n=app.forum.attribute("PointsPlaceholder")?app.forum.attribute("PointsPlaceholder").replace("{points}",this.props.user.data.attributes.Points):app.translator.trans("fof-gamification.forum.user.points",{points:this.props.user.data.attributes.Points}),t.add("points",n)})),Object(e.extend)(g.a.prototype,"view",(function(o){var n=this.props.user,e=function o(n,e){var a=[];if(n&&n.children){var s=n.children.find(t(e));void 0!==s&&a.push.apply(a,s),n.children.forEach((function(t){a.push.apply(a,o(t,e))}))}return a}(o,"UserCard-profile")[0];if(e){var a=e.children.find(t("UserCard-badges"));return n.ranks()&&(void 0===a||""===a?e.children.splice(1,0,m("ul",{className:"UserCard-badges badges"},n.ranks().reverse().map((function(t,o){if(!(o>=app.forum.attribute("ranksAmt")&&null!==app.forum.attribute("ranksAmt")))return m("li",{className:"User-Rank"},y(t))})))):a.children.push(n.ranks().reverse().map((function(t,o){if(!(o>=app.forum.attribute("ranksAmt")&&null!==app.forum.attribute("ranksAmt")))return m("li",{className:"User-Rank"},y(t))})))),o}})),Object(e.extend)(d.a.prototype,"view",(function(t){var o,n=this.props.post.user();return n?(t.children.find((o="h3",function(t){return t&&t.tag&&t.tag===o})).children.push(n.ranks().reverse().map((function(t,o){if(!(o>=app.forum.attribute("ranksAmt")&&null!==app.forum.attribute("ranksAmt")))return m("span",{className:"Post-Rank"},y(t))}))),t):t}))},x=n(5),w=n.n(x),N=n(14),P=n.n(N),O=n(20),j=n.n(O),I=n(26),V=n.n(I),_=n(3),M=n.n(_),C=n(27),L=n.n(C),R=function(){w.a.prototype.viewItems=function(){var t=this,o=new P.a,n=app.cache.discussionList.sortMap(),e={};for(var a in n)e[a]=app.translator.trans("core.forum.index_sort."+a+"_button");var s=e[this.params().sort]||Object.keys(n).map((function(t){return e[t]}))[0];return/^.*?\/hot/.test(m.route())&&(s=app.translator.trans("core.forum.index_sort.hot_button")),o.add("sort",V.a.component({buttonClassName:"Button",label:s,children:Object.keys(e).map((function(o){var a=e[o],s=(t.params().sort||Object.keys(n)[0])===o;return/^.*?\/hot/.test(m.route())&&"hot"===o&&(s=!0),/^.*?\/hot/.test(m.route())&&"latest"===o&&(s=!1,m.redraw()),M.a.component({children:a,icon:!s||"fas fa-check",onclick:t.changeSort.bind(t,o),active:s})}))})),o},Object(e.extend)(w.a.prototype,"navItems",(function(t){t.add("rankings",L.a.component({href:app.route("rankings"),children:app.translator.trans("fof-gamification.forum.nav.name"),icon:"fas fa-trophy"}),80)})),w.a.prototype.changeSort=function(t){var o=this.params();"hot"===t?(m.route("/"),m.route(m.route()+"hot")):(t===Object.keys(app.cache.discussionList.sortMap())[0]?delete o.sort:o.sort=t,"hot"===o.filter&&delete o.filter,m.route(app.route("index",o)))},Object(e.extend)(j.a.prototype,"sortMap",(function(t){t.hot="hot"})),Object(e.extend)(j.a.prototype,"requestParams",(function(t){"hot"===this.props.params.filter&&(t.filter.q=" is:hot")}))},U=n(10),D=n.n(U),S=n(21),A=n.n(S),B=n(28),q=n.n(B),T=n(4),z=n(29),F=n.n(z),E=n(11),G=n.n(E),H=n(12),J=n.n(H),K=function(t){function o(){return t.apply(this,arguments)||this}Object(T.a)(o,t);var n=o.prototype;return n.className=function(){return"VotesModal Modal--small"},n.title=function(){return app.translator.trans("fof-gamification.forum.modal.title")},n.content=function(){return m("div",{className:"Modal-body"},m("ul",{className:"VotesModal-list"},m("legend",null,app.translator.trans("fof-gamification.forum.modal.upvotes_label")),this.props.post.upvotes().map((function(t){return m("li",null,m("a",{href:app.route.user(t),config:m.route},G()(t)," ",J()(t)))})),m("legend",null,app.translator.trans("fof-gamification.forum.modal.downvotes_label")),this.props.post.downvotes().map((function(t){return m("li",null,m("a",{href:app.route.user(t),config:m.route},G()(t)," ",J()(t)))}))))},o}(F.a),Q=n(7),W=n(9),X=n.n(W),Y=n(30),Z=n.n(Y),tt=n(31),ot=n.n(tt),nt=function(t){function o(){return t.apply(this,arguments)||this}Object(T.a)(o,t);var n=o.prototype;return n.init=function(){t.prototype.init.call(this),app.session.user&&!0===app.session.user.data.attributes.canViewRankingPage||m.route("/"),this.loading=!0,this.users=[],this.refresh()},n.view=function(){var t,o=this;return t=this.loading?Z.a.component():M.a.component({children:app.translator.trans("core.forum.discussion_list.load_more_button"),className:"Button",onclick:this.loadMore.bind(this)}),m("div",{className:"TagsPage"},w.a.prototype.hero(),m("div",{className:"container"},m("nav",{className:"RankingPage-nav IndexPage-nav sideNav",config:w.a.prototype.affixSidebar},m("ul",null,ot()(w.a.prototype.sidebarItems().toArray()))),m("div",{className:"RankingPage sideNavOffset"},m("table",{class:"rankings"},m("tr",null,m("th",{className:"rankings-mobile"},app.translator.trans("fof-gamification.forum.ranking.rank")),m("th",null,app.translator.trans("fof-gamification.forum.ranking.name")),m("th",null,app.translator.trans("fof-gamification.forum.ranking.amount"))),this.users.map((function(t,n){return++n,[m("tr",{className:"ranking-"+n},n<4?"1"==app.forum.attribute("CustomRankingImages")?m("img",{className:"rankings-mobile rankings-image",src:app.forum.attribute("baseUrl")+app.forum.attribute("topimage"+n+"Url")}):m("td",{className:"rankings-mobile rankings-"+n},m("i",{className:"icon fas fa-trophy"})):m("td",{className:"rankings-4 rankings-mobile"},o.addOrdinalSuffix(n)),m("td",null,m("div",{className:"PostUser"},m("h3",{className:"rankings-info"},m("a",{href:app.route.user(t),config:m.route},n<4?G()(t,{className:"info-avatar rankings-"+n+"-avatar"}):""," ",J()(t))))),n<4?m("td",{className:"rankings-"+n},t.data.attributes.Points):m("td",{className:"rankings-4"},t.data.attributes.Points))]}))),m("div",{className:"rankings-loadmore"}," ",t))))},n.refresh=function(t){var o=this;return void 0===t&&(t=!0),t&&(this.loading=!0,this.users=[]),this.loadResults().then((function(t){o.users=[],o.parseResults(t)}),(function(){o.loading=!1,m.redraw()}))},n.addOrdinalSuffix=function(t){if("en"==app.forum.attribute("DefaultLocale")){var o=t%10,n=t%100;return 1==o&&11!=n?t+"st":2==o&&12!=n?t+"nd":3==o&&13!=n?t+"rd":t+"th"}return t},n.stickyParams=function(){return{sort:m.route.param("sort"),q:m.route.param("q")}},n.actionItems=function(){var t=new P.a;return t.add("refresh",M.a.component({title:app.translator.trans("core.forum.index.refresh_tooltip"),icon:"fas fa-refresh",className:"Button Button--icon",onclick:function(){app.cache.discussionList.refresh(),app.session.user&&(app.store.find("users",app.session.user.id()),m.redraw())}})),t},n.newDiscussion=function(){var t=m.deferred();return app.session.user?this.composeNewDiscussion(t):app.modal.show(new D.a({onlogin:this.composeNewDiscussion.bind(this,t)})),t.promise},n.composeNewDiscussion=function(t){var o=new DiscussionComposer({user:app.session.user});return app.composer.load(o),app.composer.show(),t.resolve(o),t.promise},n.loadResults=function(t){var o={};return o.page={offset:t,limit:"10"},app.store.find("rankings",o)},n.loadMore=function(){this.loading=!0,this.loadResults(this.users.length).then(this.parseResults.bind(this))},n.parseResults=function(t){return[].push.apply(this.users,t),this.loading=!1,this.users.sort((function(t,o){return parseFloat(o.data.attributes.Points)-parseFloat(t.data.attributes.Points)})),m.lazyRedraw(),t},o}(X.a),et=n(32),at=function(t){function o(){return t.apply(this,arguments)||this}Object(T.a)(o,t);var n=o.prototype;return n.icon=function(){return"Up"===this.props.notification.content()?"fas fa-thumbs-up":"fas fa-thumbs-down"},n.href=function(){return app.route.post(this.props.notification.subject())},n.content=function(){var t=this.props.notification.fromUser();return"Up"===this.props.notification.content()?app.translator.trans("fof-gamification.forum.notification.upvote",{user:t}):app.translator.trans("fof-gamification.forum.notification.downvote",{user:t})},n.excerpt=function(){return this.props.notification.subject().contentPlain()},o}(n.n(et).a),st=n(33),rt=n.n(st),it=n(34),ut=n.n(it),ct=n(35),pt=n.n(ct),mt=function(){Object(e.extend)(rt.a.prototype,"infoItems",(function(t){app.forum.attribute("showVotesOnDiscussionPage")&&($(".DiscussionListItem-info").find(".item-tags").addClass("gamification"),t.add("discussion-votes",m("span",{className:"DiscussionListItem-votes",title:app.translator.trans("fof-gamification.forum.votes")},pt()("far fa-thumbs-up"),ut()(this.props.discussion.votes())),10))}))};s.a.initializers.add("fof-gamification",(function(t){t.store.models.ranks=Q.a,t.notificationComponents.vote=at,t.routes.rankings={path:"/rankings",component:nt.component()},Object(e.extend)(A.a.prototype,"config",(function(t,o,n){var a=this;o||s.a.pusher&&s.a.pusher.then((function(t){t.main.bind("newVote",(function(t){var o=parseInt(t.userId);if(o!=s.a.session.user.id()){if(m.startComputation(),a.postId()==t.postId){var n=a.upvotedata(),e=a.downvotedata();switch(t.before){case"up":n=a.removeVote(n,o);break;case"down":e=a.removeVote(e,o)}switch(t.after){case"up":n.unshift({type:"users",id:o});break;case"down":e.unshift({type:"users",id:o});break;case"none":e=a.removeVote(e,o),n=a.removeVote(n,o)}a.downvotedata(e),a.upvotedata(n),m.redraw.strategy("all")}m.endComputation()}})),Object(e.extend)(n,"onunload",(function(){return t.main.unbind("newVote")}))}))})),Object(e.extend)(q.a,"moderationControls",(function(t,o){o.discussion().canSeeVotes()&&t.add("viewVotes",[m(M.a,{icon:"fas fa-thumbs-up",onclick:function(){s.a.modal.show(new K({post:o}))}},s.a.translator.trans("fof-gamification.forum.mod_item"))])})),Object(e.extend)(A.a.prototype,"actionItems",(function(t){var o=this.props.post;this.postId=m.prop(o.data.id),this.downvotedata=m.prop(o.data.relationships.downvotes.data),this.upvotedata=m.prop(o.data.relationships.upvotes.data);var n=s.a.session.user&&o.upvotes().some((function(t){return t===s.a.session.user})),e=s.a.session.user&&o.downvotes().some((function(t){return t===s.a.session.user}));s.a.session.user||(e=!1,n=!1);var a=s.a.forum.attribute("IconName");null!==a&&""!==a||(a="thumbs"),this.removeVote=function(t,o){return t.some((function(n,e){n.id==o&&t.splice(e,1)})),t},t.add("upvote",M.a.component({icon:"fas fa-"+a+"-up",className:"Post-vote Post-upvote",style:!1!==n?"color:"+s.a.forum.data.attributes.themePrimaryColor:"color:",disabled:!o.discussion().canVote(),onclick:function(){if(s.a.session.user){if(o.discussion().canVote()){var t=o.data.relationships.upvotes.data,a=o.data.relationships.downvotes.data;n=!n,e=!1,o.save([n,e,"vote"]),t.some((function(o,n){if(o.id===s.a.session.user.id())return t.splice(n,1),!0})),a.some((function(t,o){if(t.id===s.a.session.user.id())return a.splice(o,1),!0})),n&&t.unshift({type:"users",id:s.a.session.user.id()})}}else s.a.modal.show(new D.a)}}),3),t.add("points",m("label",{className:"Post-points"},this.upvotedata().length-this.downvotedata().length),2),t.add("downvote",M.a.component({icon:"fas fa-"+a+"-down",className:"Post-vote Post-downvote",style:!1!==e?"color:"+s.a.forum.data.attributes.themePrimaryColor:"",disabled:!o.discussion().canVote(),onclick:function(){if(s.a.session.user){if(o.discussion().canVote()){var t=o.data.relationships.upvotes.data,a=o.data.relationships.downvotes.data;e=!e,n=!1,o.save([n,e,"vote"]),t.some((function(o,n){if(o.id===s.a.session.user.id())return t.splice(n,1),!0})),a.some((function(t,o){if(t.id===s.a.session.user.id())return a.splice(o,1),!0})),e&&a.unshift({type:"users",id:s.a.session.user.id()})}}else s.a.modal.show(new D.a)}}),1)})),R(),k(),mt()}))},,function(t,o){t.exports=flarum.core.compat["components/PostUser"]},function(t,o){t.exports=flarum.core.compat["components/Dropdown"]},function(t,o){t.exports=flarum.core.compat["components/LinkButton"]},function(t,o){t.exports=flarum.core.compat["utils/PostControls"]},function(t,o){t.exports=flarum.core.compat["components/Modal"]},function(t,o){t.exports=flarum.core.compat["components/LoadingIndicator"]},function(t,o){t.exports=flarum.core.compat["helpers/listItems"]},function(t,o){t.exports=flarum.core.compat["components/Notification"]},function(t,o){t.exports=flarum.core.compat["components/DiscussionListItem"]},function(t,o){t.exports=flarum.core.compat["utils/abbreviateNumber"]},function(t,o){t.exports=flarum.core.compat["helpers/icon"]},,,,,function(t,o,n){"use strict";n.r(o);var e=n(6);for(var a in e)"default"!==a&&function(t){n.d(o,t,(function(){return e[t]}))}(a);n(23)}]);
//# sourceMappingURL=forum.js.map