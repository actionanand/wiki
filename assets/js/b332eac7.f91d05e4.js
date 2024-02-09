"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[1268],{3592:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=n(7624),r=n(2172);n(1268),n(5388);const i={slug:"the-chicken-or-the-egg",title:"Which came first?",authors:["anand","anand-tech"],tags:["js","riddle","puzzle"]},l=void 0,o={permalink:"/wiki/blog/the-chicken-or-the-egg",editUrl:"https://github.com/actionanand/wiki/blog/2024-02-09-chicken-or-egg/index.mdx",source:"@site/blog/2024-02-09-chicken-or-egg/index.mdx",title:"Which came first?",description:"You've heard the age-old riddle the chicken or the egg?\" Taken metaphorically, it's a meditation on the futility of determining the cause of a self-perpetuating cycle. Taken literally, it's a great question for evolutionary biologists.",date:"2024-02-09T00:00:00.000Z",formattedDate:"February 9, 2024",tags:[{label:"js",permalink:"/wiki/blog/tags/js"},{label:"riddle",permalink:"/wiki/blog/tags/riddle"},{label:"puzzle",permalink:"/wiki/blog/tags/puzzle"}],readingTime:.74,hasTruncateMarker:!0,authors:[{name:"Anand Raja",title:"Software Developer",url:"https://github.com/actionanand",imageURL:"https://github.com/actionanand.png",key:"anand"},{name:"Anand Techie",title:"Software Developer, Frontend",url:"https://github.com/AnandRaja-tech",imageURL:"https://github.com/AnandRaja-tech.png",key:"anand-tech"}],frontMatter:{slug:"the-chicken-or-the-egg",title:"Which came first?",authors:["anand","anand-tech"],tags:["js","riddle","puzzle"]},unlisted:!1,prevItem:{title:"JS Regex Helper",permalink:"/wiki/blog/js-regex-helper"},nextItem:{title:"Centering a Text Inside a Button",permalink:"/wiki/blog/text-align-center-in-button"}},u={authorsImageUrls:[void 0,void 0]},s=[];function c(e){const t={p:"p",...(0,r.M)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"You've heard the age-old riddle: \"Which came first: the chicken or the egg?\" Taken metaphorically, it's a meditation on the futility of determining the cause of a self-perpetuating cycle. Taken literally, it's a great question for evolutionary biologists."}),"\n",(0,a.jsx)(t.p,{children:"Chickens come from eggs, but eggs come from chickens. So which came first?"})]})}function d(e={}){const{wrapper:t}={...(0,r.M)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},5388:(e,t,n)=>{n.d(t,{c:()=>l});n(1504);var a=n(5456);const r={tabItem:"tabItem_Ymn6"};var i=n(7624);function l(e){let{children:t,hidden:n,className:l}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.c)(r.tabItem,l),hidden:n,children:t})}},1268:(e,t,n)=>{n.d(t,{c:()=>x});var a=n(1504),r=n(5456),i=n(3943),l=n(5592),o=n(5288),u=n(632),s=n(7128),c=n(1148);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}(n);return function(e){const t=(0,s.w)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const r=(0,l.Uz)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._M)(i),(0,a.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(r.location.search);t.set(i,e),r.replace({...r.location,search:t.toString()})}),[i,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,i=h(e),[l,u]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[s,d]=p({queryString:n,groupId:r}),[f,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,i]=(0,c.IN)(n);return[r,(0,a.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:r}),b=(()=>{const e=s??f;return m({value:e,tabValues:i})?e:null})();(0,o.c)((()=>{b&&u(b)}),[b]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),g(e)}),[d,g,i]),tabValues:i}}var g=n(3664);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(7624);function k(e){let{className:t,block:n,selectedValue:a,selectValue:l,tabValues:o}=e;const u=[],{blockElementScrollPositionUntilNextRender:s}=(0,i.MV)(),c=e=>{const t=e.currentTarget,n=u.indexOf(t),r=o[n].value;r!==a&&(s(t),l(r))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.c)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>u.push(e),onKeyDown:d,onClick:c,...i,className:(0,r.c)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function y(e){let{lazy:t,children:n,selectedValue:r}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function w(e){const t=f(e);return(0,v.jsxs)("div",{className:(0,r.c)("tabs-container",b.tabList),children:[(0,v.jsx)(k,{...e,...t}),(0,v.jsx)(y,{...e,...t})]})}function x(e){const t=(0,g.c)();return(0,v.jsx)(w,{...e,children:d(e.children)},String(t))}},2172:(e,t,n)=>{n.d(t,{I:()=>o,M:()=>l});var a=n(1504);const r={},i=a.createContext(r);function l(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);