"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[9168],{10908:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var n=r(17624),a=r(4552),o=r(94384);r(61268),r(87768);const s={slug:"what-is-cors-error",title:"Understanding and Resolving CORS Error",authors:"anand-tech",tags:["cors","preflight"]},l=void 0,i={permalink:"/wiki/blog/what-is-cors-error",editUrl:"https://github.com/actionanand/wiki/blog/2024-10-08-what-is-cors-error.md",source:"@site/blog/2024-10-08-what-is-cors-error.md",title:"Understanding and Resolving CORS Error",description:"What is CORS and CORS preflight?",date:"2024-10-08T00:00:00.000Z",tags:[{inline:!0,label:"cors",permalink:"/wiki/blog/tags/cors"},{inline:!0,label:"preflight",permalink:"/wiki/blog/tags/preflight"}],readingTime:3.59,hasTruncateMarker:!0,authors:[{name:"Anand Techie",title:"Software Developer, Frontend",url:"https://github.com/AnandRaja-tech",socials:{github:"https://github.com/AnandRaja-tech"},page:{permalink:"/wiki/blog/authors/anand-tech"},imageURL:"https://github.com/AnandRaja-tech.png",key:"anand-tech"}],frontMatter:{slug:"what-is-cors-error",title:"Understanding and Resolving CORS Error",authors:"anand-tech",tags:["cors","preflight"]},unlisted:!1,prevItem:{title:"Bash/Shell cheat sheet",permalink:"/wiki/blog/bash-shell-commands"},nextItem:{title:"Git Commands We Should Know",permalink:"/wiki/blog/git-commands"}},c={authorsImageUrls:[void 0]},u=[{value:"<Highlight> What is CORS and CORS preflight? </Highlight>",id:"-what-is-cors-and-cors-preflight-",level:2}];function d(e){const t={h2:"h2",p:"p",strong:"strong",...(0,a.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"-what-is-cors-and-cors-preflight-",children:(0,n.jsx)(o.c,{color:"#800031",highlight:"fg",fontWeight:"bold",children:" What is CORS and CORS preflight? "})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"C"}),"ross-",(0,n.jsx)(t.strong,{children:"O"}),"rigin ",(0,n.jsx)(t.strong,{children:"R"}),"esource ",(0,n.jsx)(t.strong,{children:"S"}),"haring (",(0,n.jsx)(o.c,{color:"#25c2a0",children:"CORS"}),") is an HTTP-based security mechanism controlled and enforced by the client (web browser) that allows controlled access to resources located outside of a given domain."]}),"\n",(0,n.jsxs)(t.p,{children:["Generally, for security reasons, ",(0,n.jsx)(o.c,{highlight:"lightBg",color:"#D1FFBD",children:"browsers forbid requests that come in from cross-domain sources"}),". However, ",(0,n.jsx)(o.c,{highlight:"lightBg",color:"#D1FFBD",children:"there could be cases where you want to overcome this"})," and access cross-domain resources, and ",(0,n.jsx)(o.c,{highlight:"lightBg",color:"#D1FFBD",children:"CORS makes this possible"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,a.M)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},87768:(e,t,r)=>{r.d(t,{c:()=>s});r(11504);var n=r(65456);const a={tabItem:"tabItem_Ymn6"};var o=r(17624);function s(e){let{children:t,hidden:r,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,n.c)(a.tabItem,s),hidden:r,children:t})}},61268:(e,t,r)=>{r.d(t,{c:()=>k});var n=r(11504),a=r(65456),o=r(53943),s=r(55592),l=r(95288),i=r(10632),c=r(27128),u=r(43216);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}(r);return function(e){const t=(0,c.wn)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function g(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:r}=e;const a=(0,s.Uz)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i._M)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,o=h(e),[s,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[c,d]=p({queryString:r,groupId:a}),[f,m]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.IN)(r);return[a,(0,n.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:a}),b=(()=>{const e=c??f;return g({value:e,tabValues:o})?e:null})();(0,l.c)((()=>{b&&i(b)}),[b]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!g({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),m(e)}),[d,m,o]),tabValues:o}}var m=r(93664);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=r(17624);function w(e){let{className:t,block:r,selectedValue:n,selectValue:s,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.MV)(),u=e=>{const t=e.currentTarget,r=i.indexOf(t),a=l[r].value;a!==n&&(c(t),s(a))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;t=i[r]??i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;t=i[r]??i[i.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.c)("tabs",{"tabs--block":r},t),children:l.map((e=>{let{value:t,label:r,attributes:o}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>i.push(e),onKeyDown:d,onClick:u,...o,className:(0,a.c)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function x(e){let{lazy:t,children:r,selectedValue:o}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===o));return e?(0,n.cloneElement)(e,{className:(0,a.c)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function y(e){const t=f(e);return(0,v.jsxs)("div",{className:(0,a.c)("tabs-container",b.tabList),children:[(0,v.jsx)(w,{...t,...e}),(0,v.jsx)(x,{...t,...e})]})}function k(e){const t=(0,m.c)();return(0,v.jsx)(y,{...e,children:d(e.children)},String(t))}},94384:(e,t,r)=>{r.d(t,{c:()=>a});r(11504);var n=r(17624);function a(e){let{children:t,color:r,highlight:a="bg",fontWeight:o="normal",textDecoration:s="none",fontStyle:l="normal",textAlign:i="left"}=e;return"fg"===a?(0,n.jsx)("span",{style:{color:r,fontWeight:o,textDecoration:s,fontStyle:l,textAlign:i},children:t}):"format"===a?(0,n.jsx)("div",{style:{textAlign:i,color:r,fontWeight:o,textDecoration:s,fontStyle:l},children:t}):"lightBg"===a?(0,n.jsx)("span",{style:{backgroundColor:r,borderRadius:"4px",color:"#4B0082",padding:"0.2rem",paddingTop:"0"},children:t}):(0,n.jsx)("span",{style:{backgroundColor:r,borderRadius:"4px",color:"#fff",padding:"0.2rem",paddingTop:"0"},children:t})}},4552:(e,t,r)=>{r.d(t,{I:()=>l,M:()=>s});var n=r(11504);const a={},o=n.createContext(a);function s(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);