"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[9952],{34032:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var r=n(17624),a=n(4552);n(61268),n(87768),n(94384);const s={sidebar_position:8,sidebar_label:"map in js",title:"Map in JS"},o="Map in TS and JS",i={id:"js-tips/map-in-js",title:"Map in JS",description:"",source:"@site/docs/js-tips/map-in-js.mdx",sourceDirName:"js-tips",slug:"/js-tips/map-in-js",permalink:"/wiki/docs/js-tips/map-in-js",draft:!1,unlisted:!1,editUrl:"https://github.com/actionanand/wiki/docs/js-tips/map-in-js.mdx",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,sidebar_label:"map in js",title:"Map in JS"},sidebar:"tutorialSidebar",previous:{title:"Typescript Types",permalink:"/wiki/docs/js-tips/typescript-types"},next:{title:"Support Functions",permalink:"/wiki/docs/js-tips/support-functions"}},l={},u=[];function c(e){const t={h1:"h1",header:"header",mermaid:"mermaid",...(0,a.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"map-in-ts-and-js",children:"Map in TS and JS"})}),"\n",(0,r.jsx)(t.mermaid,{value:"%%{init: { 'theme': 'forest' } }%%\ngraph TD;\n  A--\x3eB;\n  A--\x3eC;\n  B--\x3eD;\n  C--\x3eD;"})]})}function d(e={}){const{wrapper:t}={...(0,a.M)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},87768:(e,t,n)=>{n.d(t,{c:()=>o});n(11504);var r=n(65456);const a={tabItem:"tabItem_Ymn6"};var s=n(17624);function o(e){let{children:t,hidden:n,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.c)(a.tabItem,o),hidden:n,children:t})}},61268:(e,t,n)=>{n.d(t,{c:()=>w});var r=n(11504),a=n(65456),s=n(53943),o=n(55592),i=n(95288),l=n(10632),u=n(27128),c=n(43216);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,u.wn)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function f(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.Uz)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._M)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=p(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[u,d]=m({queryString:n,groupId:a}),[h,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,c.IN)(n);return[a,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),g=(()=>{const e=u??h;return f({value:e,tabValues:s})?e:null})();(0,i.c)((()=>{g&&l(g)}),[g]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!f({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=n(93664);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(17624);function x(e){let{className:t,block:n,selectedValue:r,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.MV)(),c=e=>{const t=e.currentTarget,n=l.indexOf(t),a=i[n].value;a!==r&&(u(t),o(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.c)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:d,onClick:c,...s,className:(0,a.c)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:s}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:(0,a.c)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function y(e){const t=h(e);return(0,v.jsxs)("div",{className:(0,a.c)("tabs-container",g.tabList),children:[(0,v.jsx)(x,{...t,...e}),(0,v.jsx)(j,{...t,...e})]})}function w(e){const t=(0,b.c)();return(0,v.jsx)(y,{...e,children:d(e.children)},String(t))}},94384:(e,t,n)=>{n.d(t,{c:()=>a});n(11504);var r=n(17624);function a(e){let{children:t,color:n,highlight:a="bg",fontWeight:s="normal",textDecoration:o="none",fontStyle:i="normal",textAlign:l="left"}=e;return"fg"===a?(0,r.jsx)("span",{style:{color:n,fontWeight:s,textDecoration:o,fontStyle:i,textAlign:l},children:t}):"format"===a?(0,r.jsx)("div",{style:{textAlign:l,color:n,fontWeight:s,textDecoration:o,fontStyle:i},children:t}):"lightBg"===a?(0,r.jsx)("span",{style:{backgroundColor:n,borderRadius:"4px",color:"#4B0082",padding:"0.2rem",paddingTop:"0"},children:t}):(0,r.jsx)("span",{style:{backgroundColor:n,borderRadius:"4px",color:"#fff",padding:"0.2rem",paddingTop:"0"},children:t})}},4552:(e,t,n)=>{n.d(t,{I:()=>i,M:()=>o});var r=n(11504);const a={},s=r.createContext(a);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);