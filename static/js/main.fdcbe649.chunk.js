(this["webpackJsonpreact-movie"]=this["webpackJsonpreact-movie"]||[]).push([[0],{31:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(18),r=c.n(s),o=c(11),l=c(20),i=c(7),b=c.n(i),j=c(9),d=c(0);function u(e){return Object(d.jsx)("div",{children:Object(d.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(d.jsxs)("div",{className:"container-fluid",children:[Object(d.jsx)(j.b,{className:"navbar-brand",to:"/",children:e.title}),Object(d.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(d.jsx)("span",{className:"navbar-toggler-icon"})}),Object(d.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(d.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(j.b,{className:"nav-link active","aria-current":"page",to:"/",children:"Home"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(j.b,{className:"nav-link",to:"/about",children:"About"})})]}),Object(d.jsxs)("form",{className:"d-flex",children:[Object(d.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(d.jsx)("button",{className:"btn btn-outline-success",type:"submit",children:"Search"})]})]})]})})})}function m(e){var t=e.todo,c=e.onDelete;return Object(d.jsxs)("div",{className:"py-2",children:[Object(d.jsx)("h4",{children:t.title}),Object(d.jsx)("p",{children:t.desc}),Object(d.jsx)("button",{className:"btn btn-danger btn-sm",onClick:function(){return c(t)},children:"Delete"}),Object(d.jsx)("hr",{})]})}function h(e){return Object(d.jsxs)("div",{className:"container",style:{minHeight:"67vh",paddingBottom:"3vh"},children:[Object(d.jsx)("h3",{className:"text-center",children:" Todos List"}),Object(d.jsx)("hr",{}),0===e.todos.length?"No Todos Left to Display":e.todos.map((function(t){return Object(d.jsx)(m,{todo:t,onDelete:e.onDelete},t.sno)}))]})}function O(){return Object(d.jsx)("footer",{className:"bg-dark text-light py-3",children:Object(d.jsx)("p",{className:"text-center",children:"Copyright \xa9 MyTodolist.com"})})}function x(e){var t=Object(n.useState)(""),c=Object(o.a)(t,2),a=c[0],s=c[1],r=Object(n.useState)(""),l=Object(o.a)(r,2),i=l[0],b=l[1];return Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("form",{onSubmit:function(t){t.preventDefault(),a&&i?(e.addTodo(a,i),s(""),b("")):alert("Title or Description cannot be blank")},children:[Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsx)("label",{htmlFor:"title",children:"Todo Title"}),Object(d.jsx)("input",{type:"text",value:a,onChange:function(e){s(e.target.value)},className:"form-control",id:"title"})]}),Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsx)("label",{htmlFor:"desc",children:"Todo Description"}),Object(d.jsx)("input",{type:"text",value:i,onChange:function(e){b(e.target.value)},className:"form-control",id:"desc"})]}),Object(d.jsx)("button",{type:"submit",className:"btn btn-success btn-sm",children:"Add Todo"})]})})}function p(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"This is About Component"}),Object(d.jsx)("p",{children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam nam harum dolorem vero cupiditate, velit consequatur nemo et accusamus expedita."})]})}u.defaultProps={title:"Your Title Here"},u.PorpTypes={title:b.a.string.isRequired};var v=c(2);var g=function(){var e;e=null===localStorage.getItem("todos")?[]:JSON.parse(localStorage.getItem("todos"));var t=function(e){i(r.filter((function(t){return t!==e}))),localStorage.setItem("todos",JSON.stringify(r))},c=function(e,t){var c={sno:0===r.length?0:r[r.length-1].sno+1,title:e,desc:t};i([].concat(Object(l.a)(r),[c]))},a=Object(n.useState)(e),s=Object(o.a)(a,2),r=s[0],i=s[1];return Object(n.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(r))}),[r]),Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(j.a,{children:[Object(d.jsx)(u,{title:"My Todo-List"}),Object(d.jsxs)(v.c,{children:[Object(d.jsx)(v.a,{exact:!0,path:"/",render:function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(x,{addTodo:c}),Object(d.jsx)(h,{todos:r,onDelete:t})]})}}),Object(d.jsx)(v.a,{path:"/about",children:Object(d.jsx)(p,{})})]}),Object(d.jsx)(O,{})]})})};r.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(g,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.fdcbe649.chunk.js.map