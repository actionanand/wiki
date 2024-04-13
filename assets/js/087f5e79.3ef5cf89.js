"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[8632],{26204:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>l,frontMatter:()=>t,metadata:()=>a,toc:()=>c});var i=r(17624),s=r(4552);const t={slug:"browser-engines",title:"Browser Engines - Digest",authors:"anand",tags:["browser","v8"]},o=void 0,a={permalink:"/wiki/blog/browser-engines",editUrl:"https://github.com/actionanand/wiki/blog/2024-02-17-browser-engines/2024-02-17-browser-engines.md",source:"@site/blog/2024-02-17-browser-engines/2024-02-17-browser-engines.md",title:"Browser Engines - Digest",description:"A JavaScript engine and a render engine are both important components of a web browser. However, they have different functions.",date:"2024-02-17T00:00:00.000Z",tags:[{label:"browser",permalink:"/wiki/blog/tags/browser"},{label:"v8",permalink:"/wiki/blog/tags/v-8"}],readingTime:3.525,hasTruncateMarker:!0,authors:[{name:"Anand Raja",title:"Software Developer",url:"https://github.com/actionanand",imageURL:"https://github.com/actionanand.png",key:"anand"}],frontMatter:{slug:"browser-engines",title:"Browser Engines - Digest",authors:"anand",tags:["browser","v8"]},unlisted:!1,prevItem:{title:"Kuruntokai - Verse 02",permalink:"/wiki/blog/kuruntokai-verse-2"},nextItem:{title:"How to fix WSL2 & VPN issue",permalink:"/wiki/blog/wsl2-and-cisco-vpn-issue-fix"}},d={authorsImageUrls:[void 0]},c=[{value:"JavaScript Engine",id:"javascript-engine",level:3},{value:"Render Engine",id:"render-engine",level:3},{value:"The Just-in-Time (JIT) paradigm",id:"the-just-in-time-jit-paradigm",level:3},{value:"Sandbox",id:"sandbox",level:3},{value:"JavaScript vs. Rendering Engine",id:"javascript-vs-rendering-engine",level:3},{value:"How code is parsed &amp; compiled",id:"how-code-is-parsed--compiled",level:3},{value:"Sources",id:"sources",level:3}];function h(e){const n={a:"a",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"A JavaScript engine and a render engine are both important components of a web browser. However, they have different functions."}),"\n",(0,i.jsx)(n.h3,{id:"javascript-engine",children:"JavaScript Engine"}),"\n",(0,i.jsxs)(n.p,{children:["A JavaScript engine is responsible for executing JavaScript code. JavaScript is a programming language that is used to add interactivity to web pages. When a web page contains JavaScript code, the browser's JavaScript engine is responsible for ",(0,i.jsx)(n.strong,{children:"parsing and executing JS code"}),". It ",(0,i.jsx)(n.strong,{children:"uses JIT compilation"})," for improved performance."]}),"\n",(0,i.jsx)(n.h3,{id:"render-engine",children:"Render Engine"}),"\n",(0,i.jsxs)(n.p,{children:["A render(rendering) engine is responsible for displaying the content of a web page on the screen. This includes the HTML, CSS, and JavaScript code. The render engine takes the code and ",(0,i.jsx)(n.strong,{children:"converts it into a visual representation"})," that can be displayed on the screen. In browsers, it ",(0,i.jsx)(n.strong,{children:"works in conjunction with the JavaScript engine via the DOM"}),"(Document Object Model). A rendering engine is also known as a browser engine or layout engine. A browser engine is a core software component of every major web browser."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"Browser"})}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"Browser Engine"})}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"JS Engine"})})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Google Chrome 28+"}),(0,i.jsx)(n.td,{children:"Blink"}),(0,i.jsx)(n.td,{children:"V8"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Mozilla Firefox"}),(0,i.jsx)(n.td,{children:"Gecko"}),(0,i.jsx)(n.td,{children:"SpiderMonkey"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Apple Safari"}),(0,i.jsx)(n.td,{children:"WebKit"}),(0,i.jsx)(n.td,{children:"JavaScriptCore(Nitro)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"UC Browser (Legacy)"}),(0,i.jsx)(n.td,{children:"U3 Engine"}),(0,i.jsx)(n.td,{children:"Not known"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Internet Explorer 11"}),(0,i.jsx)(n.td,{children:"Trident"}),(0,i.jsx)(n.td,{children:"Chakra"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"MS Edge 18 (Legacy)"}),(0,i.jsx)(n.td,{children:"EdgeHTML"}),(0,i.jsx)(n.td,{children:"Chakra"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Opera 14 (Legacy)"}),(0,i.jsx)(n.td,{children:"Presto"}),(0,i.jsx)(n.td,{children:"Futhark & Carakan"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Chromium Based"}),(0,i.jsx)(n.td,{children:"Blink"}),(0,i.jsx)(n.td,{children:"V8"})]})]})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Edge 79+, Opera 15+, Brave, Vivaldi, etc are some example for chromium based browsers."}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Blink"})," is a ",(0,i.jsx)(n.strong,{children:"fork"})," of the WebCore component of ",(0,i.jsx)(n.strong,{children:"WebKit"}),", which was originally a fork of the KHTML and KJS libraries from KDE."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"WebRender"})," is a ",(0,i.jsx)(n.strong,{children:"component of Gecko"}),", the browser engine and is a GPU-based ",(0,i.jsx)(n.strong,{children:"2D rendering engine"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"the-just-in-time-jit-paradigm",children:"The Just-in-Time (JIT) paradigm"}),"\n",(0,i.jsxs)(n.p,{children:["The most common way of transforming the code is by performing ahead-of-time(",(0,i.jsx)(n.strong,{children:"AOT"}),") compilation. It works exactly as it sounds: the code is transformed into machine code before the execution of your program during the compilation stage. This approach is used by many programming languages such as C++, Java, and others."]}),"\n",(0,i.jsxs)(n.p,{children:["To transform the code faster and more effectively for dynamic languages(JS), a new approach was created called Just-in-Time (JIT) compilation. It combines the best from interpretation and compilation. ",(0,i.jsx)(n.strong,{children:"V8 uses an interpreter"})," called ",(0,i.jsx)(n.a,{href:"https://github.com/v8/v8/blob/master/src/interpreter/interpreter.h",children:(0,i.jsx)(n.strong,{children:"Ignition"})}),". Initially, it takes an abstract syntax tree and generates byte code."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"chicken or egg",src:r(2668).c+"",width:"1244",height:"1069"})}),"\n",(0,i.jsx)(n.h3,{id:"sandbox",children:"Sandbox"}),"\n",(0,i.jsxs)(n.p,{children:["A sandbox is used to ",(0,i.jsx)(n.strong,{children:"execute JavaScript in a browser"}),". A sandbox is a security mechanism that isolates code from the rest of the system. This means that JavaScript code running in a sandbox cannot access the user's files or other resources on the computer."]}),"\n",(0,i.jsxs)(n.p,{children:["Browsers use sandboxes to protect users from malicious JavaScript code. For example, if a website contains malicious JavaScript code, the sandbox will ",(0,i.jsx)(n.strong,{children:"prevent the code from accessing the user's files or other resources"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Sandboxes are also used to improve the performance of browsers. By ",(0,i.jsx)(n.strong,{children:"isolating JavaScript code from the rest of the system"}),", browsers can execute the code more efficiently."]}),"\n",(0,i.jsx)(n.p,{children:"There are a number of different ways to sandbox JavaScript code in a browser. One common method is to use an iframe. An iframe is a HTML element that creates a sandboxed environment for executing JavaScript code."}),"\n",(0,i.jsx)(n.p,{children:"Another common method for sandboxing JavaScript code is to use a web worker. A web worker is a JavaScript script that runs in the background, separate from the main thread of the browser. This allows the JavaScript code to run without affecting the performance of the browser."}),"\n",(0,i.jsx)(n.h3,{id:"javascript-vs-rendering-engine",children:"JavaScript vs. Rendering Engine"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"JavaScript engine executes code, while the rendering engine is responsible for displaying the web pages."}),"\n",(0,i.jsx)(n.li,{children:"Each browser uses its own JavaScript and rendering engine."}),"\n",(0,i.jsx)(n.li,{children:"JavaScript engine runs JavaScript code, while the rendering engine interprets HTML, XML, CSS, etc."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"how-code-is-parsed--compiled",children:"How code is parsed & compiled"}),"\n",(0,i.jsx)(n.p,{children:"JavaScript Engines & What They Do"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"JavaScript Engines",src:r(82836).c+"",width:"1186",height:"592"})}),"\n",(0,i.jsx)(n.h3,{id:"sources",children:"Sources"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://hackernoon.com/javascript-v8-engine-explained-3f940148d4ef",children:"JavaScript V8 Engine Explained - hacker noon"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.freecodecamp.org/news/javascript-under-the-hood-v8/",children:"How JavaScript Works: Under the Hood of the V8 Engine"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://lyamkin.com/blog/what-are-web-standards-and-how-does-web-browser-work/",children:"What are Web Standards and how does Web Browser work?"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.lambdatest.com/blog/browser-engines-the-crux-of-cross-browser-compatibility/",children:"Browser Engines: The Crux Of Cross Browser Compatibility"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://codinglap.com/browser-engine-and-types-of-browser-engines/",children:"Browser Engine and Types of Browser Engines"})}),"\n"]})]})}function l(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},2668:(e,n,r)=>{r.d(n,{c:()=>i});const i=r.p+"assets/images/chromium-browser-14b6d1e207ae518ebd703ace803e6c01.png"},82836:(e,n,r)=>{r.d(n,{c:()=>i});const i=r.p+"assets/images/js-engines-f70bb6a1f5faf69dbbf236a4500372f0.png"},4552:(e,n,r)=>{r.d(n,{I:()=>a,M:()=>o});var i=r(11504);const s={},t=i.createContext(s);function o(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);