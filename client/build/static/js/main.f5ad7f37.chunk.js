(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{34:function(e,t,a){e.exports=a.p+"static/media/pot.cb30fab2.jpg"},35:function(e,t,a){e.exports=a.p+"static/media/404_glitch2.119ecb7e.gif"},38:function(e,t,a){e.exports=a(68)},62:function(e,t,a){},63:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(1),c=a(2),u=a(4),i=a(3),o=a(5),s=a(7),m=a(15),h=a(11),b=a.n(h);function p(e){return function(t){function a(){var e;return Object(r.a)(this,a),(e=Object(u.a)(this,Object(i.a)(a).call(this))).state={loading:!0,redirect:!1},e}return Object(o.a)(a,t),Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this,t={authorization:"Bearer "+localStorage.getItem("token")};b.a.get("/api/auth/verify",{headers:t}).then((function(t){200===t.status?e.setState({loading:!1}):e.setState({loading:!1,redirect:!0})})).catch((function(t){e.setState({loading:!1,redirect:!0})}))}},{key:"render",value:function(){var t=this.state,a=t.loading,n=t.redirect;return a?null:n?l.a.createElement(m.a,{to:"/auth"}):l.a.createElement(l.a.Fragment,null,l.a.createElement(e,this.props))}}]),a}(n.Component)}var E=a(14),g=a(8),d=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(u.a)(this,Object(i.a)(t).call(this,e))).state={eventname:"",sponges:""},a.handleChange=a.handleChange.bind(Object(g.a)(a)),a.submit=a.submit.bind(Object(g.a)(a)),a}return Object(o.a)(t,e),Object(c.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(E.a)({},e.target.name,e.target.value))}},{key:"submit",value:function(e){e.preventDefault(),b.a.post("/api/events",{name:this.state.eventname,sponges:this.state.sponges}).then((function(e){console.log("Created event: "+e)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return l.a.createElement("form",{onSubmit:this.submit},l.a.createElement("label",null,"Create an event",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("input",{type:"text",name:"eventname",placeholder:"name",value:this.state.value,onChange:this.handleChange}),l.a.createElement("input",{type:"text",name:"sponges",placeholder:"sponges",value:this.state.value,onChange:this.handleChange})),l.a.createElement("br",null),l.a.createElement("input",{type:"submit",value:"Create"}))}}]),t}(n.Component),v=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(u.a)(this,Object(i.a)(t).call(this))).state={events:[]},e}return Object(o.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;b.a.get("/api/events").then((function(t){e.setState({events:t.data})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this.state.events;return l.a.createElement("div",null,l.a.createElement("p",null,"Events:"),l.a.createElement("ul",null,e.map((function(e){var t=e.id,a=e.name,n=e.data;return l.a.createElement("li",{key:t.toString()},a," ",n)}))))}}]),t}(n.Component),f=function(){return l.a.createElement("div",null,l.a.createElement(d,null),l.a.createElement(v,null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(s.b,{to:"/"},"Back to entryway"))},O=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(u.a)(this,Object(i.a)(t).call(this,e))).state={email:"",password:""},a.handleChange=a.handleChange.bind(Object(g.a)(a)),a.login=a.login.bind(Object(g.a)(a)),a}return Object(o.a)(t,e),Object(c.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(E.a)({},e.target.name,e.target.value))}},{key:"login",value:function(e){e.preventDefault(),b.a.post("/api/auth/login",{email:this.state.email,password:this.state.password}).then((function(e){200===e.status&&localStorage.setItem("token",e.data.token)})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("form",{onSubmit:this.login},l.a.createElement("label",null,"Login",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("input",{type:"text",name:"email",placeholder:"email",value:this.state.value,onChange:this.handleChange}),l.a.createElement("input",{type:"text",name:"password",placeholder:"password",value:this.state.value,onChange:this.handleChange})),l.a.createElement("br",null),l.a.createElement("input",{type:"submit",value:"Login"})))}}]),t}(n.Component),j=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(u.a)(this,Object(i.a)(t).call(this,e))).state={username:"",email:"",password:""},a.handleChange=a.handleChange.bind(Object(g.a)(a)),a.signup=a.signup.bind(Object(g.a)(a)),a}return Object(o.a)(t,e),Object(c.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(E.a)({},e.target.name,e.target.value))}},{key:"signup",value:function(e){e.preventDefault(),b.a.post("/api/auth/signup",{email:this.state.email,password:this.state.password,username:this.state.username}).then((function(e){200===e.status&&localStorage.setItem("token",e.data.token)})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("form",{onSubmit:this.signup},l.a.createElement("label",null,"Need to signup?",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("input",{type:"text",name:"username",placeholder:"username",value:this.state.value,onChange:this.handleChange}),l.a.createElement("input",{type:"text",name:"email",placeholder:"email",value:this.state.value,onChange:this.handleChange}),l.a.createElement("input",{type:"text",name:"password",placeholder:"password",value:this.state.value,onChange:this.handleChange})),l.a.createElement("br",null),l.a.createElement("input",{type:"submit",value:"Signup"})))}}]),t}(n.Component),y=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(u.a)(this,Object(i.a)(t).call(this,e))).logout=a.logout.bind(Object(g.a)(a)),a}return Object(o.a)(t,e),Object(c.a)(t,[{key:"logout",value:function(e){localStorage.clear()}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("form",{onSubmit:this.logout},l.a.createElement("input",{type:"submit",value:"Logout"})))}}]),t}(n.Component),C=function(){return l.a.createElement("div",null,l.a.createElement(O,null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(j,null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(s.b,{to:"/"},"Back to entryway"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(y,null))},k=function(e){function t(){return Object(r.a)(this,t),Object(u.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null," ABOUT 3 Ecologgiiiesssss ")}}]),t}(n.Component),w=a(34),S=a.n(w),x=(a(62),function(e){function t(){return Object(r.a)(this,t),Object(u.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"Header"},l.a.createElement("img",{className:"Cup",src:S.a,alt:"teapot"})),l.a.createElement("nav",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(s.b,{to:"/"},"Home")),l.a.createElement("li",null,l.a.createElement(s.b,{to:"/events"},"Go to events")),l.a.createElement("li",null," ",l.a.createElement(s.b,{to:"/auth"},"Login or signup")),l.a.createElement("li",null,l.a.createElement(s.b,{to:"/entryway"},"EntryWay")),l.a.createElement("li",null,l.a.createElement(s.b,{to:"/about3e"},"3E About")),l.a.createElement("li",null,l.a.createElement(s.b,{to:"/oOoOs"},"404 oOoO Portal")),l.a.createElement("li",null,l.a.createElement(s.b,{to:"/patches"},"Patches")),l.a.createElement("li",null,l.a.createElement(s.b,{to:"/traces"},"Register a trace")))))}}]),t}(n.Component)),D=(a(63),a(35)),B=a.n(D),N=function(){return l.a.createElement("div",{className:"glitch"},l.a.createElement("h3",null,"glitch"),l.a.createElement("img",{src:B.a,alt:"glitch"}))},H=a(21),I=a.n(H),L=a(36),F=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(u.a)(this,Object(i.a)(t).call(this,e))).state={image:"",tendencies:"",notes:""},a.onChange=a.onChange.bind(Object(g.a)(a)),a.submit=a.submit.bind(Object(g.a)(a)),a}return Object(o.a)(t,e),Object(c.a)(t,[{key:"onChange",value:function(e){switch(console.log(e.target.name,"apples"),e.target.name){case"image":console.log(e.target),this.setState({image:e.target.files[0]});break;default:this.setState(Object(E.a)({},e.target.name,e.target.value))}}},{key:"submit",value:function(){var e=Object(L.a)(I.a.mark((function e(t){var a;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=new FormData,e.next=4,a.append("image",this.state.image);case 4:b.a.post("/api/assets/image",a).catch((function(e){console.log(e)}));case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return l.a.createElement("form",{encType:"multipart/form-data",onSubmit:this.submit},l.a.createElement("label",null,"Upload an image ",l.a.createElement("br",null)," ",l.a.createElement("br",null),l.a.createElement("input",{type:"text",name:"tendencies",placeholder:"tendencies (comma-separated)",value:this.state.value,onChange:this.onChange}),l.a.createElement("input",{type:"text",name:"notes",placeholder:"notes",value:this.state.value,onChange:this.onChange})),l.a.createElement("div",{className:"custom-file"},l.a.createElement("br",null),l.a.createElement("input",{type:"file",name:"image",onChange:this.onChange})),l.a.createElement("br",null),l.a.createElement("input",{type:"submit",value:"Upload"}))}}]),t}(n.Component),P=function(){return l.a.createElement("div",null,l.a.createElement(F,null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(s.b,{to:"/"},"Back to entryway"))};function U(){return l.a.createElement("div",null,l.a.createElement("h2",null,"Home Hello"))}var A=function(e){function t(){return Object(r.a)(this,t),Object(u.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement(s.a,null,l.a.createElement(x,null),l.a.createElement(m.d,null,l.a.createElement(m.b,{exact:!0,path:"/",component:U}),l.a.createElement(m.b,{path:"/about3e",component:k}),l.a.createElement(m.b,{path:"/oOoOs",component:N}),l.a.createElement(m.b,{path:"/patches",render:function(){return l.a.createElement("div",null,"Patches")}}),l.a.createElement(m.b,{path:"/entryway",render:function(){return l.a.createElement("div",null,"Entry")}}),l.a.createElement(m.b,{exact:!0,path:"/auth",component:C}),l.a.createElement(m.b,{exact:!0,path:"/events",component:p(f)}),l.a.createElement(m.b,{exact:!0,path:"/traces",component:p(P)})))}}]),t}(n.Component),J=a(37);a.n(J).a.render(l.a.createElement(A,null),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.f5ad7f37.chunk.js.map