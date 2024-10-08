"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[418],{70536:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=t(17624),a=t(4552),s=t(61268),i=t(87768);const l={sidebar_position:10},c="CSS Grid",o={id:"advanced-css/css-grid",title:"CSS Grid",description:"image",source:"@site/docs/advanced-css/css-grid.md",sourceDirName:"advanced-css",slug:"/advanced-css/css-grid",permalink:"/wiki/docs/advanced-css/css-grid",draft:!1,unlisted:!1,editUrl:"https://github.com/actionanand/wiki/docs/advanced-css/css-grid.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Flex Box",permalink:"/wiki/docs/advanced-css/flex-box"},next:{title:"Transitions & Animations",permalink:"/wiki/docs/advanced-css/transitions-animations"}},d={},u=[{value:"GitHub Repo",id:"github-repo",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"css-grid",children:"CSS Grid"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://github.com/actionanand/css-uhost/assets/46064269/1b4eff98-edcb-4379-8865-56261417efc9",alt:"image"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://github.com/actionanand/css-uhost/assets/46064269/ad588a70-27dc-436f-b869-78561ee607fd",alt:"image"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://github.com/actionanand/css-uhost/assets/46064269/aaf07043-831a-4582-b4a4-70da247df3b3",alt:"image"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://github.com/actionanand/css-uhost/assets/46064269/580f45b6-0438-4643-869e-ac1adaa15b42",alt:"image"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://github.com/actionanand/css-uhost/assets/46064269/79854f82-936b-459a-872f-22434218ad3a",alt:"image"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://github.com/actionanand/css-uhost/assets/46064269/c7bd6b0d-7b48-487c-a376-a1a4ae50caa7",alt:"image"})}),"\n",(0,r.jsxs)(s.c,{children:[(0,r.jsx)(i.c,{value:"grid",label:"Grid",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-css",children:".container {\n  margin: 20px;\n  display: grid;\n  height: 100vh;\n  /* grid-template-columns: 200px 2fr 20% 1fr; */\n  grid-template-columns: repeat(4, [col-start] 20% [col-end]);\n  /* grid-template-rows: 5rem minmax(3rem, 5.5rem); */\n  /* rows with names */\n  grid-template-rows: [row-1-start] 5rem [row-1-end row-2-start] minmax(3rem, 5.5rem) [row-2-end];\n  // highlight-start\n  column-gap: 10px;\n  row-gap: 10px;\n  // highlight-end \n  /* justifying inner items in grid */\n  justify-items: stretch;\n  align-items: stretch;\n  /* justifying the grid */\n  justify-content: center;\n  align-content: center;\n}\n"})})}),(0,r.jsx)(i.c,{value:"grid-short",label:"Grid - Shorthand",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-css",children:".container {\n  margin: 20px;\n  display: grid;\n  height: 100vh;\n  /* grid-template-columns: 200px 2fr 20% 1fr; */\n  grid-template-columns: repeat(4, [col-start] 20% [col-end]);\n  /* grid-template-rows: 5rem minmax(3rem, 5.5rem); */\n  /* rows with names */\n  grid-template-rows: [row-1-start] 5rem [row-1-end row-2-start] minmax(3rem, 5.5rem) [row-2-end];\n  // highlight-next-line\n  gap: 10px;\n  /* justifying inner items in grid */\n  justify-items: stretch;\n  align-items: stretch;\n  /* justifying the grid */\n  justify-content: center;\n  align-content: center;\n}\n"})})})]}),"\n",(0,r.jsxs)(s.c,{children:[(0,r.jsx)(i.c,{value:"grid-item",label:"Grid Item",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-css",children:".el3 {\n  background: rgba(0, 128, 0, 0.5);\n  // highlight-start\n  grid-column-start: 3;\n  grid-column-end: 5; \n  /* grid-row-start: 1; */\n  grid-row-start: row-1-start;\n  grid-row-end: row-2-end;\n  // highlight-end\n  justify-self: center;\n  align-self: center; \n}\n"})})}),(0,r.jsx)(i.c,{value:"grid-item-short",label:"Grid Item - Shorthand",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-css",metastring:"{3-5}",children:".el3 {\n  background: rgba(0, 128, 0, 0.5);\n  grid-column: 3 / 5;\n  grid-row: row-1-start / row-2-end;\n  grid-area: row-1-start / 3 / row-2-end / 5;\n  justify-self: center;\n  align-self: center;\n}\n"})})})]}),"\n",(0,r.jsx)(n.h2,{id:"github-repo",children:"GitHub Repo"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/actionanand/css-grid-lab",children:"CSS Grid Lab - GitHub"})}),"\n"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["To view ",(0,r.jsx)(n.a,{href:"https://actionanand.github.io/css-grid-lab/",children:"normal page - Demo"})," : ",(0,r.jsx)(n.code,{children:"http://localhost:5173/"})]}),"\n",(0,r.jsxs)(n.li,{children:["To view ",(0,r.jsx)(n.a,{href:"https://actionanand.github.io/css-grid-lab/home/",children:"home page - Demo"})," : ",(0,r.jsx)(n.code,{children:"http://localhost:5173/home/"})]}),"\n",(0,r.jsxs)(n.li,{children:["To view ",(0,r.jsx)(n.a,{href:"https://actionanand.github.io/css-grid-lab/media-query/",children:"media-query page - Demo"})," : ",(0,r.jsx)(n.code,{children:"http://localhost:5173/media-query/"})]}),"\n",(0,r.jsxs)(n.li,{children:["To view ",(0,r.jsx)(n.a,{href:"https://actionanand.github.io/css-grid-lab/autoflow/",children:"autoflow page - Demo"})," : ",(0,r.jsx)(n.code,{children:"http://localhost:5173/autoflow/"})]}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,a.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},87768:(e,n,t)=>{t.d(n,{c:()=>i});t(11504);var r=t(65456);const a={tabItem:"tabItem_Ymn6"};var s=t(17624);function i(e){let{children:n,hidden:t,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.c)(a.tabItem,i),hidden:t,children:n})}},61268:(e,n,t)=>{t.d(n,{c:()=>y});var r=t(11504),a=t(65456),s=t(53943),i=t(55592),l=t(95288),c=t(10632),o=t(27128),d=t(43216);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,o.wn)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const a=(0,i.Uz)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c._M)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function p(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,s=h(e),[i,c]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[o,u]=g({queryString:t,groupId:a}),[p,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,d.IN)(t);return[a,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),f=(()=>{const e=o??p;return m({value:e,tabValues:s})?e:null})();(0,l.c)((()=>{f&&c(f)}),[f]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),b(e)}),[u,b,s]),tabValues:s}}var b=t(93664);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(17624);function j(e){let{className:n,block:t,selectedValue:r,selectValue:i,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,s.MV)(),d=e=>{const n=e.currentTarget,t=c.indexOf(n),a=l[t].value;a!==r&&(o(n),i(a))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.c)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>c.push(e),onKeyDown:u,onClick:d,...s,className:(0,a.c)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:s}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:(0,a.c)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function w(e){const n=p(e);return(0,x.jsxs)("div",{className:(0,a.c)("tabs-container",f.tabList),children:[(0,x.jsx)(j,{...n,...e}),(0,x.jsx)(v,{...n,...e})]})}function y(e){const n=(0,b.c)();return(0,x.jsx)(w,{...e,children:u(e.children)},String(n))}},4552:(e,n,t)=>{t.d(n,{I:()=>l,M:()=>i});var r=t(11504);const a={},s=r.createContext(a);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);