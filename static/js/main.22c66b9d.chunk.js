(this.webpackJsonpgithub_page=this.webpackJsonpgithub_page||[]).push([[0],{29:function(e,a,t){e.exports=t(50)},34:function(e,a,t){},50:function(e,a,t){"use strict";t.r(a);var n=t(2),r=t.n(n),o=t(22),i=t.n(o),c=(t(34),t(16)),s=t.n(c),l=t(28),u=t(23),p=t(12),m=t.n(p);m.a.initializeApp({apiKey:"AIzaSyDULbh758S11z_1gMiJan1tW8zB9-piMYk",authDomain:"porfolio-database.firebaseapp.com",databaseURL:"https://porfolio-database.firebaseio.com",projectId:"porfolio-database",storageBucket:"porfolio-database.appspot.com",messagingSenderId:"383004397744",appId:"1:383004397744:web:c39fe2ed2898497abbab75",measurementId:"G-9CSRPDWX09"}),m.a.firestore().settings({timestampsInSnapshots:!0}),m.a.analytics();var f=m.a;function g(e){var a=f.firestore().collection("projects");function t(){return(t=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.get();case 3:t=e.sent,p(t.docs.map((function(e){return e.data()}))),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}Object(n.useEffect)((function(){!function(){t.apply(this,arguments)}()}),[]);var o=Object(n.useState)([]),i=Object(l.a)(o,2),c=i[0],p=i[1];return r.a.createElement("div",null,r.a.createElement("h1",null,"This is the home page"),c.filter((function(e){return!!e.language})).sort((function(e,a){return e.language&&a.language?e.language.localeCompare(a.language):0})).map((function(e){var a=e.name,t=e.language;return r.a.createElement("div",null,r.a.createElement("h2",null,a),r.a.createElement("h4",null,t))})))}var h=t(25),d=t(8);var b=function(){return r.a.createElement(h.a,{basename:"/portfolio-react"},r.a.createElement(d.a,{exact:!0,path:"/",component:g}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[29,1,2]]]);
//# sourceMappingURL=main.22c66b9d.chunk.js.map