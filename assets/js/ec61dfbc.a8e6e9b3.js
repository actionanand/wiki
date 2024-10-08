"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[4440],{72560:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>x,frontMatter:()=>a,metadata:()=>o,toc:()=>h});var i=s(17624),r=s(4552),t=s(61268),l=s(87768);const a={sidebar_position:13,sidebar_label:"Sassy CSS"},c="SASS and SCSS (Sassy CSS)",o={id:"advanced-css/sassy-css",title:"SASS and SCSS (Sassy CSS)",description:"* SASS -> Systematically Awesome Style Sheets",source:"@site/docs/advanced-css/sassy-css.md",sourceDirName:"advanced-css",slug:"/advanced-css/sassy-css",permalink:"/wiki/docs/advanced-css/sassy-css",draft:!1,unlisted:!1,editUrl:"https://github.com/actionanand/wiki/docs/advanced-css/sassy-css.md",tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13,sidebar_label:"Sassy CSS"},sidebar:"tutorialSidebar",previous:{title:"Future Proof CSS code",permalink:"/wiki/docs/advanced-css/future-proof-css"},next:{title:": vs :: in CSS3",permalink:"/wiki/docs/advanced-css/colon-vs-double-colon-in-CSS3"}},d={},h=[{value:"Nested Properties",id:"nested-properties",level:3},{value:"Lists &amp; Maps",id:"lists--maps",level:3},{value:"Built-in functions",id:"built-in-functions",level:3},{value:"Arithmetic operations in SASS/SCSS",id:"arithmetic-operations-in-sassscss",level:3},{value:"Media query in SASS/SCSS",id:"media-query-in-sassscss",level:3},{value:"Inheritance in SCSS/SASS",id:"inheritance-in-scsssass",level:3},{value:"Mixins",id:"mixins",level:3}];function u(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",header:"header",li:"li",ol:"ol",pre:"pre",ul:"ul",...(0,r.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"sass-and-scss-sassy-css",children:"SASS and SCSS (Sassy CSS)"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"SASS"})," -> Systematically Awesome Style Sheets"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"SCSS"})," -> Sassy Cascading Style Sheets"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"nested-properties",children:"Nested Properties"}),"\n",(0,i.jsxs)(t.c,{children:[(0,i.jsx)(l.c,{value:"scss",label:"SCSS",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scss",children:"  // highlight-next-line\n  $full-width: 100%;\n\n  .mobile-nav__items {\n    width: 90%;\n    // highlight-next-line\n    height: $full-width;\n    display: flex;\n    // highlight-start\n    flex: {\n      direction: column;\n      wrap: nowrap;\n    }\n    // highlight-end\n  }\n"})})}),(0,i.jsx)(l.c,{value:"css",label:"CSS",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",metastring:"{3,5-6}",children:"  .mobile-nav__items {\n    width: 90%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    flex-wrap: nowrap;\n  }\n"})})})]}),"\n",(0,i.jsx)(n.h3,{id:"lists--maps",children:"Lists & Maps"}),"\n",(0,i.jsxs)(t.c,{children:[(0,i.jsx)(l.c,{value:"scss",label:"SCSS",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scss",children:"  $border-size: 1.5px;\n\n  // map\n  // highlight-next-line\n  $color: (green-dark: #0e4f1f, red-bright: #ff1b68);\n\n  // List\n  // highlight-next-line\n  $border-default: $border-size solid map-get($color, green-dark);\n\n\n  .button {\n    // highlight-next-line\n    background: map-get($color, red-bright);\n    color: white;\n    font: inherit;\n    // highlight-next-line\n    border: $border-default;\n    padding: .5rem;\n    border-radius: 8px;\n    font-weight: bold;\n    cursor: pointer;\n  }\n"})})}),(0,i.jsx)(l.c,{value:"css",label:"CSS",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",metastring:"{2,5}",children:"  .button {\n    background: #ff1b68;\n    color: white;\n    font: inherit;\n    border: 1.5px solid #0e4f1f;\n    padding: 0.5rem;\n    border-radius: 8px;\n    font-weight: bold;\n    cursor: pointer;\n  }\n"})})})]}),"\n",(0,i.jsx)(n.h3,{id:"built-in-functions",children:"Built-in functions"}),"\n",(0,i.jsxs)(t.c,{children:[(0,i.jsx)(l.c,{value:"scss",label:"SCSS",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scss",children:"$dark-green: #0e4f1f;\n\n.background {\n  // highlight-next-line\n  background: lighten($dark-green, 72%);\n}\n"})})}),(0,i.jsx)(l.c,{value:"css",label:"CSS",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:".background {\n  // highlight-next-line\n  background: #d5f8de;\n}\n"})})})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://gist.github.com/AllThingsSmitty/3bcc79da563df756be46",children:"SCSS/SASS built-in functions - github"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://sass-lang.com/documentation/modules/",children:"SASS built-in modules"})}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"arithmetic-operations-in-sassscss",children:"Arithmetic operations in SASS/SCSS"}),"\n",(0,i.jsxs)(t.c,{children:[(0,i.jsx)(l.c,{value:"scss",label:"SCSS",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scss",children:"$border-size: 1rem;\n\n.maths {\n  // highlight-next-line\n  border-radius: $border-size * 3;\n}\n"})})}),(0,i.jsx)(l.c,{value:"css",label:"CSS",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:".maths {\n  // highlight-next-line\n  border-radius: 3rem;\n}\n"})})})]}),"\n",(0,i.jsx)(n.h3,{id:"media-query-in-sassscss",children:"Media query in SASS/SCSS"}),"\n",(0,i.jsxs)(t.c,{children:[(0,i.jsx)(l.c,{value:"scss",label:"SCSS",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scss",children:".container {\n  display: flex;\n  flex-direction: row;\n  font-size: 15px;\n\n  // highlight-start\n  @media (min-width: 40rem) {\n    flex-direction: column;\n    font-size: 10px;\n  }\n  // highlight-end\n}\n"})})}),(0,i.jsx)(l.c,{value:"css",label:"CSS",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:".container {\n  display: flex;\n  flex-direction: row;\n  font-size: 15px;\n}\n\n// highlight-start\n@media (min-width: 40rem) {\n  .container {\n    flex-direction: column;\n    font-size: 10px;\n  }\n}\n// highlight-end\n"})})})]}),"\n",(0,i.jsx)(n.h3,{id:"inheritance-in-scsssass",children:"Inheritance in SCSS/SASS"}),"\n",(0,i.jsxs)(t.c,{children:[(0,i.jsx)(l.c,{value:"scss",label:"SCSS",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scss",children:"$color: (green-dark: #0e4f1f, red-bright: #ff1b68);\n$border-size: 1.5px;\n\n// highlight-start\n.sass-section {\n  font-family: 'Montserrat', sans-serif;\n  border: $border-size solid map-get($color, green-dark);\n  width: 50px;\n}\n// highlight-end\n\n.box1 {\n  // highlight-next-line\n  @extend .sass-section;\n  height: 60px;\n}\n\n.box2 {\n  // highlight-next-line\n  @extend .sass-section;\n  height: 70px;\n}\n"})})}),(0,i.jsx)(l.c,{value:"css",label:"CSS",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:"// highlight-start\n.sass-section, .box1, .box2 {\n  font-family: 'Montserrat', sans-serif;\n  border: 1.5px solid #0e4f1f;\n  width: 50px;\n}\n// highlight-end\n\n.box1 {\n  height: 60px;\n}\n\n.box2 {\n  height: 70px;\n}\n\n/* OR */\n\n.box1 {\n  font-family: 'Montserrat', sans-serif;\n  border: 1.5px solid #0e4f1f;\n  width: 50px;\n  height: 60px;\n}\n.box2 {\n  font-family: 'Montserrat', sans-serif;\n  border: 1.5px solid #0e4f1f;\n  width: 50px;\n  height: 70px;\n}\n"})})})]}),"\n",(0,i.jsx)(n.h3,{id:"mixins",children:"Mixins"}),"\n",(0,i.jsxs)(t.c,{groupId:"scss-mixins",children:[(0,i.jsx)(l.c,{value:"scss",label:"SCSS",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scss",children:"$dark-green: #0e4f1f;\n\n// mixin without arguments\n// highlight-start\n@mixin display-flex() {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n// highlight-end\n\n.container {\n  // highlight-next-line\n  @include display-flex();\n  flex-direction: column;\n}\n"})})}),(0,i.jsx)(l.c,{value:"css",label:"CSS",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:".container {\n  // highlight-start\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  // highlight-end\n  flex-direction: column;\n}\n"})})})]}),"\n",(0,i.jsxs)(t.c,{groupId:"scss-mixins",children:[(0,i.jsx)(l.c,{value:"scss",label:"SCSS",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scss",children:"$dark-green: #0e4f1f;\n\n// mixin with arguments\n// highlight-start\n@mixin media-min-width($width) {\n  @media (min-width: $width) {\n    border: 2px solid green;\n    @content;\n  }\n}\n// highlight-end\n\nbody {\n  background: $dark-green;\n  font-size: 15px;\n\n  // highlight-start\n  @include media-min-width(40rem) {\n    font-family: 'Montserrat', sans-serif;\n    font-size: 10px;\n  }\n  // highlight-end\n}\n"})})}),(0,i.jsx)(l.c,{value:"css",label:"CSS",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:"body {\n  background: #0e4f1f;\n  font-size: 15px;\n}\n\n// highlight-start\n@media (min-width: 40rem) {\n  body {\n    border: 2px solid green;\n    font-family: 'Montserrat', sans-serif;\n    font-size: 10px;\n  }\n}\n// highlight-end\n"})})})]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsxs)(n.a,{href:"https://www.w3schools.com/cssref/pr_import_rule.php",children:["CSS ",(0,i.jsx)(n.code,{children:"@import"})," Rule"]})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://dev.to/sarah_chima/using-sass-partials-7mh",children:"Using SASS partials"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.w3schools.com/sass/sass_import.php",children:"Sass @import and Partials"})}),"\n"]})]})}function x(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},87768:(e,n,s)=>{s.d(n,{c:()=>l});s(11504);var i=s(65456);const r={tabItem:"tabItem_Ymn6"};var t=s(17624);function l(e){let{children:n,hidden:s,className:l}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,i.c)(r.tabItem,l),hidden:s,children:n})}},61268:(e,n,s)=>{s.d(n,{c:()=>y});var i=s(11504),r=s(65456),t=s(53943),l=s(55592),a=s(95288),c=s(10632),o=s(27128),d=s(43216);function h(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:s}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:s,attributes:i,default:r}}=e;return{value:n,label:s,attributes:i,default:r}}))}(s);return function(e){const n=(0,o.wn)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function x(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:s}=e;const r=(0,l.Uz)(),t=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,c._M)(t),(0,i.useCallback)((e=>{if(!t)return;const n=new URLSearchParams(r.location.search);n.set(t,e),r.replace({...r.location,search:n.toString()})}),[t,r])]}function p(e){const{defaultValue:n,queryString:s=!1,groupId:r}=e,t=u(e),[l,c]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!x({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=s.find((e=>e.default))??s[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:t}))),[o,h]=g({queryString:s,groupId:r}),[p,f]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,t]=(0,d.IN)(s);return[r,(0,i.useCallback)((e=>{s&&t.set(e)}),[s,t])]}({groupId:r}),m=(()=>{const e=o??p;return x({value:e,tabValues:t})?e:null})();(0,a.c)((()=>{m&&c(m)}),[m]);return{selectedValue:l,selectValue:(0,i.useCallback)((e=>{if(!x({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);c(e),h(e),f(e)}),[h,f,t]),tabValues:t}}var f=s(93664);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var S=s(17624);function b(e){let{className:n,block:s,selectedValue:i,selectValue:l,tabValues:a}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,t.MV)(),d=e=>{const n=e.currentTarget,s=c.indexOf(n),r=a[s].value;r!==i&&(o(n),l(r))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const s=c.indexOf(e.currentTarget)+1;n=c[s]??c[0];break}case"ArrowLeft":{const s=c.indexOf(e.currentTarget)-1;n=c[s]??c[c.length-1];break}}n?.focus()};return(0,S.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.c)("tabs",{"tabs--block":s},n),children:a.map((e=>{let{value:n,label:s,attributes:t}=e;return(0,S.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>c.push(e),onKeyDown:h,onClick:d,...t,className:(0,r.c)("tabs__item",m.tabItem,t?.className,{"tabs__item--active":i===n}),children:s??n},n)}))})}function j(e){let{lazy:n,children:s,selectedValue:t}=e;const l=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===t));return e?(0,i.cloneElement)(e,{className:(0,r.c)("margin-top--md",e.props.className)}):null}return(0,S.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function v(e){const n=p(e);return(0,S.jsxs)("div",{className:(0,r.c)("tabs-container",m.tabList),children:[(0,S.jsx)(b,{...n,...e}),(0,S.jsx)(j,{...n,...e})]})}function y(e){const n=(0,f.c)();return(0,S.jsx)(v,{...e,children:h(e.children)},String(n))}},4552:(e,n,s)=>{s.d(n,{I:()=>a,M:()=>l});var i=s(11504);const r={},t=i.createContext(r);function l(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);