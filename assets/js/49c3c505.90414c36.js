"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[8937],{7312:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var t=s(7624),r=s(2172);const i={sidebar_position:4,sidebar_label:"My Tips - 1"},o="My Tips - 1",c={id:"js-tips/my-tips-1",title:"My Tips - 1",description:"Character Frequency",source:"@site/docs/js-tips/my-tips-1.md",sourceDirName:"js-tips",slug:"/js-tips/my-tips-1",permalink:"/wiki/docs/js-tips/my-tips-1",draft:!1,unlisted:!1,editUrl:"https://github.com/actionanand/wiki/docs/js-tips/my-tips-1.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"My Tips - 1"},sidebar:"tutorialSidebar",previous:{title:"Obj. Chain into Array",permalink:"/wiki/docs/js-tips/object-into-array"}},a={},l=[{value:"Character Frequency",id:"character-frequency",level:3},{value:"Resources",id:"resources",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"my-tips---1",children:"My Tips - 1"}),"\n",(0,t.jsx)(n.h3,{id:"character-frequency",children:"Character Frequency"}),"\n",(0,t.jsxs)(n.p,{children:["Converting ",(0,t.jsx)(n.code,{children:"string"})," into the object with letters & its frequency"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const freqMap = str => str.split('').reduce(\n  (map, char) => (map[char] ??= 0, map[char]++, map), {}\n);\n\nfreqMap('anand');\n\n// Output\n{a: 2, n: 2, d: 1}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"??="})," operator in JavaScript is the ",(0,t.jsx)(n.strong,{children:"nullish coalescing assignment operator"}),". It is a logical operator that ",(0,t.jsx)(n.strong,{children:"returns its right-hand side operand"})," when its ",(0,t.jsx)(n.strong,{children:"left-hand side operand"})," is ",(0,t.jsx)(n.code,{children:"null"})," or ",(0,t.jsx)(n.code,{children:"undefined"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:"showLineNumbers",children:"let x = null;\nx ??= 5;\nconsole.log(x); // 5\n\nlet y = undefined;\ny ??= 10;\nconsole.log(y); // 10\n\nlet z = 15;\nz ??= 20;\nconsole.log(z); // 15\n"})}),"\n",(0,t.jsx)(n.h3,{id:"resources",children:"Resources"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://blog.greenroots.info/my-favorite-javascript-tips-and-tricks",children:"My Favorite JavaScript Tips and Tricks"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},2172:(e,n,s)=>{s.d(n,{I:()=>c,M:()=>o});var t=s(1504);const r={},i=t.createContext(r);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);