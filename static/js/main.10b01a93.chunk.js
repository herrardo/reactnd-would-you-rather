(this["webpackJsonpreactnd-would-you-rather"]=this["webpackJsonpreactnd-would-you-rather"]||[]).push([[0],{102:function(e,t,n){"use strict";n.r(t);var a=n(2),r=(n(84),n(0)),s=(n(65),n(26)),o=n(17),i=n(8),c={sarahedo:{id:"sarahedo",name:"Sarah Edo",avatarURL:"https://tylermcginnis.com/would-you-rather/sarah.jpg",answers:{"8xf0y6ziyjabvozdd253nd":"optionOne","6ni6ok3ym7mf1p33lnez":"optionTwo",am8ehyc8byjqgar0jgpub9:"optionTwo",loxhs1bqm25b708cmbf3g:"optionTwo"},questions:["8xf0y6ziyjabvozdd253nd","am8ehyc8byjqgar0jgpub9"]},tylermcginnis:{id:"tylermcginnis",name:"Tyler McGinnis",avatarURL:"https://tylermcginnis.com/would-you-rather/tyler.jpg",answers:{vthrdm985a262al8qx3do:"optionOne",xj352vofupe1dqz9emx13r:"optionTwo"},questions:["loxhs1bqm25b708cmbf3g","vthrdm985a262al8qx3do"]},johndoe:{id:"johndoe",name:"John Doe",avatarURL:"https://tylermcginnis.com/would-you-rather/dan.jpg",answers:{xj352vofupe1dqz9emx13r:"optionOne",vthrdm985a262al8qx3do:"optionTwo","6ni6ok3ym7mf1p33lnez":"optionTwo"},questions:["6ni6ok3ym7mf1p33lnez","xj352vofupe1dqz9emx13r"]}},u={"8xf0y6ziyjabvozdd253nd":{id:"8xf0y6ziyjabvozdd253nd",author:"sarahedo",timestamp:1467166872634,optionOne:{votes:["sarahedo"],text:"have horrible short term memory"},optionTwo:{votes:[],text:"have horrible long term memory"}},"6ni6ok3ym7mf1p33lnez":{id:"6ni6ok3ym7mf1p33lnez",author:"johndoe",timestamp:1468479767190,optionOne:{votes:[],text:"become a superhero"},optionTwo:{votes:["johndoe","sarahedo"],text:"become a supervillain"}},am8ehyc8byjqgar0jgpub9:{id:"am8ehyc8byjqgar0jgpub9",author:"sarahedo",timestamp:1488579767190,optionOne:{votes:[],text:"be telekinetic"},optionTwo:{votes:["sarahedo"],text:"be telepathic"}},loxhs1bqm25b708cmbf3g:{id:"loxhs1bqm25b708cmbf3g",author:"tylermcginnis",timestamp:1482579767190,optionOne:{votes:[],text:"be a front-end developer"},optionTwo:{votes:["sarahedo"],text:"be a back-end developer"}},vthrdm985a262al8qx3do:{id:"vthrdm985a262al8qx3do",author:"tylermcginnis",timestamp:1489579767190,optionOne:{votes:["tylermcginnis"],text:"find $50 yourself"},optionTwo:{votes:["johndoe"],text:"have your best friend find $500"}},xj352vofupe1dqz9emx13r:{id:"xj352vofupe1dqz9emx13r",author:"johndoe",timestamp:1493579767190,optionOne:{votes:["johndoe"],text:"write JavaScript"},optionTwo:{votes:["tylermcginnis"],text:"write Swift"}}};function d(e){return new Promise((function(t,n){var a=e.author,r=function(e){var t=e.optionOneText,n=e.optionTwoText,a=e.author;return{id:Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15),timestamp:Date.now(),author:a,optionOne:{votes:[],text:t},optionTwo:{votes:[],text:n}}}(e);setTimeout((function(){u=Object(i.a)(Object(i.a)({},u),{},Object(o.a)({},r.id,r)),c=Object(i.a)(Object(i.a)({},c),{},Object(o.a)({},a,Object(i.a)(Object(i.a)({},c[a]),{},{questions:c[a].questions.concat([r.id])}))),t(r)}),1e3)}))}function l(e){return function(e){var t=e.authedUser,n=e.qid,a=e.answer;return new Promise((function(e,r){setTimeout((function(){c=Object(i.a)(Object(i.a)({},c),{},Object(o.a)({},t,Object(i.a)(Object(i.a)({},c[t]),{},{answers:Object(i.a)(Object(i.a)({},c[t].answers),{},Object(o.a)({},n,a))}))),u=Object(i.a)(Object(i.a)({},u),{},Object(o.a)({},n,Object(i.a)(Object(i.a)({},u[n]),{},Object(o.a)({},a,Object(i.a)(Object(i.a)({},u[n][a]),{},{votes:u[n][a].votes.concat([t])}))))),e()}),500)}))}(e)}var j="RECEIVE_QUESTIONS",b="ANSWER_QUESTION",h="SAVE_QUESTION",O="RECEIVE_USERS",m="USER_ANSWER_QUESTION",p="USER_QUESTION",x=function(){return function(e){return Promise.all([new Promise((function(e,t){setTimeout((function(){return e(Object(i.a)({},c))}),1e3)})),new Promise((function(e,t){setTimeout((function(){return e(Object(i.a)({},u))}),1e3)}))]).then((function(e){var t=Object(s.a)(e,2);return{users:t[0],questions:t[1]}})).then((function(t){var n=t.users,a=t.questions;e(function(e){return{type:j,questions:e}}(a)),e(function(e){return{type:O,users:e}}(n))}))}},f=function(e){return function(t){return l(e).then((function(){return t(function(e){var t=e.qid,n=e.answer,a=e.authedUser;return{type:b,qid:t,answer:n,authedUser:a}}(e))})).then((function(){return t(function(e){var t=e.qid,n=e.answer,a=e.authedUser;return{type:m,qid:t,answer:n,authedUser:a}}(e))})).catch((function(e){console.warn("Error in saving question answer: ",e),console.warn("There was an error saving the answer for the question. Try again.")}))}},v=function(e){return function(t){return function(e){return d(e)}(e).then((function(e){return t(function(e){return{type:h,question:e}}(e))})).then((function(e){var n=e.question;return t(function(e){var t=e.qid,n=e.authedUser;return{type:p,qid:t,authedUser:n}}({authedUser:n.author,qid:n.id}))})).catch((function(e){console.warn("Error in saving question : ",e),console.warn("There was an error saving the question. Try again.")}))}},w=n(18),g=n(38),y=n(14),q=function(){return Object(a.jsxs)("div",{className:"text-center",style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",textAlign:"center"},children:[Object(a.jsx)("h1",{children:"Page not found"}),Object(a.jsx)("h2",{children:"Where are you going mate?"})]})},U=n(151),T=n(104),N="/reactnd-would-you-rather",_=Object(w.b)((function(e,t){var n=e.questions,a=e.authedUser,r=e.users,s=t.match&&t.match.params&&t.match.params.id?t.match.params.id:null;return{authedUser:a,question:t.question,questions:n,users:r,id:s}}))((function(e){var t=e.authedUser,n=e.question,r=e.questions,s=e.users,o=e.dispatch,i=e.id;if(!(n=n||r[i]))return Object(a.jsx)(q,{});var c=!s||!t||Object.keys(s[t].answers).includes(n.id),u=n.optionOne.votes.length,d=n.optionTwo.votes.length,l=u+d,j=Object(y.f)(),b=function(e){o(f({authedUser:t,qid:n.id,answer:e})),h()},h=function(){j.push("".concat(N,"/questions/").concat(n.id))};return Object(a.jsxs)("div",{className:"question",children:[Object(a.jsx)("h3",{className:"question__title",children:"Would you rather?"}),Object(a.jsx)(U.a,{src:s[n.author].avatarURL,className:"avatar"}),Object(a.jsxs)("div",{className:"question__group",children:[Object(a.jsx)(T.a,{color:"primary","aria-label":"button ".concat(n.optionOne.text),variant:"contained",disabled:c,onClick:function(){return b("optionOne")},children:n.optionOne.text}),null!==i&&Object(a.jsxs)("span",{className:"question__results",children:[u," votes - ",Math.round(u/l*100),"%"]}),n.optionOne.votes.includes(t)&&Object(a.jsx)("span",{className:"question__my-answer",children:"My Answer"})]}),Object(a.jsxs)("div",{className:"question__group",children:[Object(a.jsx)(T.a,{color:"primary","aria-label":"button ".concat(n.optionTwo.text),variant:"contained",disabled:c,onClick:function(){return b("optionTwo")},children:n.optionTwo.text}),null!==i&&Object(a.jsxs)("span",{className:"question__results",children:[d," votes - ",Math.round(d/l*100),"%"]}),n.optionTwo.votes.includes(t)&&Object(a.jsx)("span",{className:"question__my-answer",children:"My Answer"})]}),null===i&&Object(a.jsx)(T.a,{className:"question__link",color:"secondary",variant:"outlined",size:"small",onClick:h,children:"View Detail"})]})})),k=n(142),S=n(152),E=Object(w.b)((function(e){return{questions:e.questions,authedUser:e.authedUser,users:e.users}}))((function(e){var t=e.questions,n=e.authedUser,o=e.users,i=Object(r.useState)(!1),c=Object(s.a)(i,2),u=c[0],d=c[1],l=Object.keys(o[n].answers),j=Object.values(t).filter((function(e){return u?l.includes(e.id):!l.includes(e.id)})).sort((function(e,t){return e.timestamp-t.timestamp}));return Object(a.jsxs)("div",{className:"questions",children:[Object(a.jsxs)("h3",{className:"center",children:["List of ",u?Object(a.jsx)("span",{children:"answered"}):Object(a.jsx)("span",{children:"unanswered"})," questions"," "]}),Object(a.jsx)(k.a,{control:Object(a.jsx)(S.a,{checked:u,onChange:function(){d(!u)},name:"checkedB",color:"primary"}),label:"Answered Questions"}),Object(a.jsx)("ul",{className:"questions-list",children:j.map((function(e){return Object(a.jsx)("li",{children:Object(a.jsx)(_,{question:e})},e.id)}))})]})})),z=Object(w.b)((function(e){return{orderedUsers:function(e){var t=e.users;return Object.values(t).map((function(e){return Object(i.a)(Object(i.a)({},e),{},{interactions:{answers:Object.keys(e.answers).length,questions:e.questions.length,total:Object.keys(e.answers).length+e.questions.length}})})).sort((function(e,t){return t.interactions-e.interactions}))}(e)}}))((function(e){var t=e.orderedUsers;return Object(a.jsxs)("div",{className:"leaderboard",children:[Object(a.jsx)("h3",{className:"center",children:"Leaderboard"}),Object(a.jsx)("ul",{className:"leaderboard-list",children:Object.values(t).map((function(e){return Object(a.jsxs)("li",{className:"leaderboard-list__item",children:[Object(a.jsx)("h3",{children:e.name}),Object(a.jsx)(U.a,{src:e.avatarURL,className:"avatar"}),Object(a.jsxs)("div",{className:"leaderboard-list__result",children:["Total: ",Object(a.jsx)("span",{className:"total",children:e.interactions.total})]}),Object(a.jsxs)("div",{className:"leaderboard-list__result",children:["Number of questions: ",e.interactions.questions]}),Object(a.jsxs)("div",{className:"leaderboard-list__result",children:["Number of answers: ",e.interactions.answers]})]},e.id)}))})]})})),C=n(144),R=n(150),A=n(145),L=n(106),Q=n(146),I="SET_AUTHED_USER",M=function(e){return{type:I,id:e}},B=Object(C.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}})),P=Object(w.b)((function(e,t){return{authedUser:e.authedUser,users:e.users,login:t.login}}),(function(e){return{dispatch:e,setAuthedUser:M}}))((function(e){var t=e.dispatch,n=(e.authedUser,e.users),r=e.login,s=B();return Object(a.jsx)(R.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:s.modal,open:r,BackdropComponent:A.a,BackdropProps:{timeout:500},children:Object(a.jsx)(L.a,{in:!0,children:Object(a.jsxs)("div",{className:"login",children:[Object(a.jsx)("h2",{id:"transition-modal-title",children:"Choose and user to login"}),Object(a.jsx)(Q.a,{orientation:"vertical",color:"primary","aria-label":"vertical contained primary button group",variant:"contained",style:{width:"100%"},children:Object.values(n).map((function(e){return Object(a.jsx)(T.a,{onClick:function(){return n=e.id,void t(M(n));var n},children:e.name},e.id)}))})]})})})})),W=n(147),D=n(148),V=n(143),J=n(74),G=n(153),$=n(105),F=n(72),H=n.n(F),Y=Object(w.b)((function(e){return{users:e.users,authedUser:e.authedUser}}))((function(e){var t=e.authedUser,n=e.users,r=e.dispatch,s=n[t]||null;return Object(a.jsx)(a.Fragment,{children:s?Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{children:s.name}),Object(a.jsx)(T.a,{color:"inherit",onClick:function(){r(M(null))},children:"Logout"})]}):Object(a.jsx)(T.a,{color:"inherit",children:"Login"})})})),K=Object(C.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}})),X=function(){var e=K(),t=Object(r.useState)(null),n=Object(s.a)(t,2),o=n[0],i=n[1],c=function(){i(null)};return Object(a.jsx)("div",{className:e.root,children:Object(a.jsx)(W.a,{position:"static",children:Object(a.jsxs)(D.a,{children:[Object(a.jsx)(V.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu",onClick:function(e){i(e.currentTarget)},children:Object(a.jsx)(H.a,{})}),Object(a.jsxs)(J.a,{id:"simple-menu",anchorEl:o,keepMounted:!0,open:Boolean(o),onClose:c,children:[Object(a.jsx)(G.a,{onClick:c,children:Object(a.jsx)(g.b,{to:N,children:"Questions"})}),Object(a.jsx)(G.a,{onClick:c,children:Object(a.jsx)(g.b,{to:"".concat(N,"/add"),children:"Add Question"})}),Object(a.jsx)(G.a,{onClick:c,children:Object(a.jsx)(g.b,{to:"".concat(N,"/leaderboard"),children:"Leaderboard"})})]}),Object(a.jsx)($.a,{variant:"h6",className:e.title,children:"Would You rather"}),Object(a.jsx)(Y,{})]})})})},Z=n(149),ee=n(154),te=Object(w.b)((function(e){return{authedUser:e.authedUser}}))((function(e){var t=e.authedUser,n=e.dispatch,o=Object(r.useState)(""),i=Object(s.a)(o,2),c=i[0],u=i[1],d=Object(r.useState)(""),l=Object(s.a)(d,2),j=l[0],b=l[1],h=Object(r.useState)(!1),O=Object(s.a)(h,2),m=O[0],p=O[1];return Object(a.jsxs)("div",{className:"add-question",children:[Object(a.jsx)("h3",{children:"Would you rather?"}),Object(a.jsxs)("form",{noValidate:!0,autoComplete:"off",onSubmit:function(e){e.preventDefault(),n(v({optionOneText:c,optionTwoText:j,author:t})),u(""),b(""),p(!0),setTimeout((function(){return p(!1)}),3e3)},children:[Object(a.jsx)("div",{children:Object(a.jsx)(Z.a,{label:"Option 1",variant:"filled",value:c,onChange:function(e){u(e.target.value)}})}),Object(a.jsx)("div",{children:Object(a.jsx)(Z.a,{label:"Option 2",variant:"filled",value:j,onChange:function(e){b(e.target.value)}})}),Object(a.jsx)(T.a,{type:"submit",className:"question__add",color:"primary",variant:"contained",size:"small",children:"Add Question"}),m&&Object(a.jsx)("div",{children:Object(a.jsx)(ee.a,{label:"Question successfully added",disabled:!0,variant:"outlined"})})]})]})})),ne=Object(w.b)((function(e){var t=e.authedUser;return{authedUser:t,users:e.users,login:null===t}}))((function(e){var t=e.dispatch,n=e.login;return Object(r.useEffect)((function(){t(x())}),[]),Object(a.jsx)(g.a,{children:Object(a.jsx)("div",{className:"page",children:n?Object(a.jsx)(P,{login:n}):Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(X,{}),Object(a.jsxs)(y.c,{children:[Object(a.jsx)(y.a,{path:"/reactnd-would-you-rather",exact:!0,component:E}),Object(a.jsx)(y.a,{path:"/reactnd-would-you-rather/leaderboard",exact:!0,component:z}),Object(a.jsx)(y.a,{path:"/reactnd-would-you-rather/questions/:id",exact:!0,component:_}),Object(a.jsx)(y.a,{path:"/reactnd-would-you-rather/add",exact:!0,component:te}),Object(a.jsx)(y.a,{component:q})]})]})})})})),ae=n(12),re=n.n(ae),se=n(29);var oe=Object(se.c)({authedUser:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I:return t.id;default:return e}},questions:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(i.a)(Object(i.a)({},e),t.questions);case b:return Object(i.a)(Object(i.a)({},e),{},Object(o.a)({},t.qid,Object(i.a)(Object(i.a)({},e[t.qid]),{},Object(o.a)({},t.answer,Object(i.a)(Object(i.a)({},e[t.qid][t.answer]),{},{votes:e[t.qid][t.answer].votes.concat(t.authedUser)})))));case h:return Object(i.a)(Object(i.a)({},e),{},Object(o.a)({},t.question.id,t.question));default:return e}},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(i.a)(Object(i.a)({},e),t.users);case m:return Object(i.a)(Object(i.a)({},e),{},Object(o.a)({},t.authedUser,Object(i.a)(Object(i.a)({},e[t.authedUser]),{},{answers:Object(i.a)(Object(i.a)({},e[t.authedUser].answers),{},Object(o.a)({},t.qid,t.answer))})));case p:return Object(i.a)(Object(i.a)({},e),{},Object(o.a)({},t.authedUser,Object(i.a)(Object(i.a)({},e[t.authedUser]),{},{questions:e[t.authedUser].questions.concat([t.qid])})));default:return e}}}),ie=n(73),ce=function(e){return function(t){return function(n){console.group(n.type),console.log("The action: ",n);var a=t(n);return console.log("The new state: ",e.getState()),console.groupEnd(),a}}},ue=Object(se.a)(ie.a,ce),de=Object(se.d)(oe,ue);re.a.render(Object(a.jsx)(w.a,{store:de,children:Object(a.jsx)(ne,{})}),document.getElementById("root"))},65:function(e,t,n){},84:function(e,t,n){}},[[102,1,2]]]);
//# sourceMappingURL=main.10b01a93.chunk.js.map