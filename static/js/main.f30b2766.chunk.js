(this.webpackJsonpnotes=this.webpackJsonpnotes||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var o=n(0),c=n(1),s=n(7),a=n.n(s),i=n(3),l=function(){return Object(o.jsx)("header",{className:"header",children:Object(o.jsx)("h1",{className:"title",children:"Noteboard"})})},r=n(2),d=n.n(r),u=function(e){var t=e.updateNotes,n=(e.notes,Object(c.useState)([{display:"none"}])),s=Object(i.a)(n,2),a=s[0],l=s[1],r=Object(c.useState)(""),u=Object(i.a)(r,2),j=u[0],b=u[1],h=Object(c.useState)(""),m=Object(i.a)(h,2),O=m[0],x=m[1];return Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"modal-button",onClick:function(){return l([{display:"block"}])},children:"+"}),Object(o.jsx)("div",{className:"modal",style:a[0],children:Object(o.jsxs)("div",{className:"modal-content",children:[Object(o.jsx)("span",{className:"modal-content__close",onClick:function(){return l([{display:"none"}])},children:"\xd7"}),Object(o.jsxs)("form",{className:"modal-content__note",onSubmit:function(){var e=Math.random(),n=d.a.get("notes");n.push({id:e,title:j,body:O}),d.a.set("notes",n),t()},children:[Object(o.jsx)("input",{className:"modal-content__note-title",type:"text",placeholder:"Title",value:j,onChange:function(e){return b(e.target.value)},required:!0}),Object(o.jsx)("textarea",{className:"modal-content__note-body",type:"text",placeholder:"Note content",value:O,onChange:function(e){return x(e.target.value)},required:!0}),Object(o.jsx)("button",{className:"modal-content__note-button",children:"Create note"})]})]})})]})},j=function(e){var t=e.id,n=e.title,c=e.body,s=e.updateNotes;return Object(o.jsxs)("div",{className:"note",children:[Object(o.jsx)("span",{className:"note__delete",onClick:function(){var e=d.a.get("notes").filter((function(e){return e.id!==t}));d.a.set("notes",e),s()},children:"\xd7"}),Object(o.jsx)("h3",{className:"note__title",children:n}),Object(o.jsx)("p",{className:"note__body",children:c})]})},b=function(e){var t=e.notes,n=e.updateNotes;return Object(o.jsx)("div",{className:"note-list",children:t?t.map((function(e){return Object(o.jsx)(j,{id:e.id,title:e.title,body:e.body,updateNotes:n},e.id)})):null})},h=function(){var e=Object(c.useState)(d.a.get("notes")),t=Object(i.a)(e,2),n=t[0],s=t[1];Object(c.useEffect)((function(){d.a.get("notes")||(d.a.set("notes",[{id:1,title:"Example note",body:"Your notes will be listed here. To create a note, click the button in the bottom-right corner. To delete a note, click the X in the top-right corner of the note."}]),a())}),[]);var a=function(){var e=d.a.get("notes");s(e)};return Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)(l,{}),Object(o.jsxs)("main",{className:"content",children:[Object(o.jsx)(u,{updateNotes:a,notes:n}),Object(o.jsx)(b,{notes:n,updateNotes:a})]})]})};n(15);a.a.render(Object(o.jsx)(h,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.f30b2766.chunk.js.map