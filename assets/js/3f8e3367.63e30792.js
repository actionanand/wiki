"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[2685],{7820:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(17624),r=n(4552),l=n(94384);n(61268),n(87768);const i={slug:"bash-terminal-customization",title:"Bash terminal customization",authors:"anand",tags:["wsl","linux","ubuntu","git","bash"]},o=void 0,s={permalink:"/wiki/blog/bash-terminal-customization",editUrl:"https://github.com/actionanand/wiki/blog/2024-05-30-bash-terminal-customization.md",source:"@site/blog/2024-05-30-bash-terminal-customization.md",title:"Bash terminal customization",description:"Linux Shells",date:"2024-05-30T00:00:00.000Z",tags:[{inline:!0,label:"wsl",permalink:"/wiki/blog/tags/wsl"},{inline:!0,label:"linux",permalink:"/wiki/blog/tags/linux"},{inline:!0,label:"ubuntu",permalink:"/wiki/blog/tags/ubuntu"},{inline:!0,label:"git",permalink:"/wiki/blog/tags/git"},{inline:!0,label:"bash",permalink:"/wiki/blog/tags/bash"}],readingTime:7.445,hasTruncateMarker:!0,authors:[{name:"Anand Raja",title:"Senior Software Engineer",url:"https://github.com/actionanand",imageURL:"https://github.com/actionanand.png",key:"anand"}],frontMatter:{slug:"bash-terminal-customization",title:"Bash terminal customization",authors:"anand",tags:["wsl","linux","ubuntu","git","bash"]},unlisted:!1,prevItem:{title:"Kannada via Tamizh part 2",permalink:"/wiki/blog/Kannada-through-tamizh-part2"},nextItem:{title:"WSL and Miniconda",permalink:"/wiki/blog/wsl-and-miniconda"}},u={authorsImageUrls:[void 0]},c=[{value:"<Highlight> Linux Shells </Highlight>",id:"-linux-shells-",level:2}];function h(e){const t={h2:"h2",p:"p",strong:"strong",...(0,r.M)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"-linux-shells-",children:(0,a.jsx)(l.c,{color:"#800031",highlight:"fg",fontWeight:"bold",children:" Linux Shells "})}),"\n",(0,a.jsxs)(t.p,{children:["When we open up our terminal, chances are that it uses Bash as its UNIX shell environment. But other ",(0,a.jsx)(t.strong,{children:"shell"})," environments exist such as the C Shell, Korn Shell, Z Shell, and even the Fish Shell. All of these different shell environments have their own pros and cons, and you should consider them before you choose one to use on your own system."]})]})}function d(e={}){const{wrapper:t}={...(0,r.M)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},87768:(e,t,n)=>{n.d(t,{c:()=>i});n(11504);var a=n(65456);const r={tabItem:"tabItem_Ymn6"};var l=n(17624);function i(e){let{children:t,hidden:n,className:i}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,a.c)(r.tabItem,i),hidden:n,children:t})}},61268:(e,t,n)=>{n.d(t,{c:()=>y});var a=n(11504),r=n(65456),l=n(53943),i=n(55592),o=n(95288),s=n(10632),u=n(27128),c=n(43216);function h(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}(n);return function(e){const t=(0,u.w)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.Uz)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._M)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,l=d(e),[i,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[u,h]=b({queryString:n,groupId:r}),[f,p]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,c.IN)(n);return[r,(0,a.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:r}),g=(()=>{const e=u??f;return m({value:e,tabValues:l})?e:null})();(0,o.c)((()=>{g&&s(g)}),[g]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),h(e),p(e)}),[h,p,l]),tabValues:l}}var p=n(93664);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(17624);function x(e){let{className:t,block:n,selectedValue:a,selectValue:i,tabValues:o}=e;const s=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.MV)(),c=e=>{const t=e.currentTarget,n=s.indexOf(t),r=o[n].value;r!==a&&(u(t),i(r))},h=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=s.indexOf(e.currentTarget)+1;t=s[n]??s[0];break}case"ArrowLeft":{const n=s.indexOf(e.currentTarget)-1;t=s[n]??s[s.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.c)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:l}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>s.push(e),onKeyDown:h,onClick:c,...l,className:(0,r.c)("tabs__item",g.tabItem,l?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function w(e){let{lazy:t,children:n,selectedValue:r}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function k(e){const t=f(e);return(0,v.jsxs)("div",{className:(0,r.c)("tabs-container",g.tabList),children:[(0,v.jsx)(x,{...t,...e}),(0,v.jsx)(w,{...t,...e})]})}function y(e){const t=(0,p.c)();return(0,v.jsx)(k,{...e,children:h(e.children)},String(t))}},94384:(e,t,n)=>{n.d(t,{c:()=>r});n(11504);var a=n(17624);function r(e){let{children:t,color:n,highlight:r="bg",fontWeight:l="normal",textDecoration:i="none",fontStyle:o="normal",textAlign:s="left"}=e;return"fg"===r?(0,a.jsx)("span",{style:{color:n,fontWeight:l,textDecoration:i,fontStyle:o,textAlign:s},children:t}):"format"===r?(0,a.jsx)("div",{style:{textAlign:s,color:n,fontWeight:l,textDecoration:i,fontStyle:o},children:t}):(0,a.jsx)("span",{style:{backgroundColor:n,borderRadius:"4px",color:"#fff",padding:"0.2rem",paddingTop:"0"},children:t})}},4552:(e,t,n)=>{n.d(t,{I:()=>o,M:()=>i});var a=n(11504);const r={},l=a.createContext(r);function i(e){const t=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(l.Provider,{value:t},e.children)}}}]);