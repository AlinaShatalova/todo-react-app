(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var o=n(1),c=n.n(o),i=n(4),r=n.n(i),a=(n(10),n(2)),d=n(5),s=n.n(d),l=c.a.createContext(),u=n(0);function j(e){var t=Object(o.useContext)(l),n=t.removeTodo,c=t.toggleTodo,i=e.todo,r=e.index,a=s()({done:i.complited});return Object(u.jsxs)("li",{className:"todo-item-li",children:[Object(u.jsxs)("span",{className:a,children:[Object(u.jsx)("input",{className:"todo-item-input",type:"checkbox",checked:i.complited,onChange:function(){return c(i.id)}}),Object(u.jsx)("strong",{children:r+1}),"\xa0",i.name]}),Object(u.jsx)("button",{className:"rm",onClick:function(){return n(i.id)},children:"\xd7"})]})}function b(e){var t=e.todos;return Object(u.jsx)("ul",{className:"todo-list-ul",children:t.map((function(e,t){return Object(u.jsx)(j,{todo:e,index:t},e.id)}))})}var m=function(e){var t=e.onCreate,n=c.a.useState(""),o=Object(a.a)(n,2),i=o[0],r=o[1];return Object(u.jsxs)("form",{className:"add-todo-form",onSubmit:function(e){e.preventDefault(),i.trim()&&(t(i),r="")},children:[Object(u.jsx)("input",{type:"text",value:i,onChange:function(e){return r(e.target.value)}}),Object(u.jsx)("button",{type:"submit",children:"Add"})]})};var p=function(){var e=c.a.useState([{id:0,complited:!1,name:"Buy milk"},{id:1,complited:!1,name:"Buy bread"}]),t=Object(a.a)(e,2),n=t[0],o=t[1];return Object(u.jsx)(l.Provider,{value:{removeTodo:function(e){o(n.filter((function(t){return e!==t.id})))},toggleTodo:function(e){o(n.map((function(t){return e===t.id&&(t.complited=!t.complited),t})))}},children:Object(u.jsxs)("div",{className:"wrapper",children:[Object(u.jsxs)("h1",{children:["Things to do ",Object(u.jsx)("span",{role:"img","aria-label":"honeybee",children:"\ud83d\udc1d"})]}),Object(u.jsx)(m,{onCreate:function(e){o(n.concat({name:e,id:Date.now(),complited:!1}))}}),n.length?Object(u.jsx)(b,{todos:n}):Object(u.jsxs)("p",{children:["There is nothing to do ",Object(u.jsx)("span",{role:"img","aria-label":"OK hand",children:"\ud83d\udc4c"})]})]})})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,o=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),o(e),c(e),i(e),r(e)}))};r.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(p,{})}),document.getElementById("root")),h()}},[[12,1,2]]]);
//# sourceMappingURL=main.ee05cf32.chunk.js.map