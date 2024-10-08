"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[9676],{72112:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var a=n(17624),r=n(4552),i=n(61268),o=n(87768);const s={slug:"the-chicken-or-the-egg",title:"Which came first?",authors:["anand","anand-tech"],tags:["js","riddle","puzzle"]},l=void 0,c={permalink:"/wiki/blog/the-chicken-or-the-egg",editUrl:"https://github.com/actionanand/wiki/blog/2024-02-09-chicken-or-egg/index.mdx",source:"@site/blog/2024-02-09-chicken-or-egg/index.mdx",title:"Which came first?",description:"You've heard the age-old riddle the chicken or the egg?\" Taken metaphorically, it's a meditation on the futility of determining the cause of a self-perpetuating cycle. Taken literally, it's a great question for evolutionary biologists.",date:"2024-02-09T00:00:00.000Z",tags:[{inline:!0,label:"js",permalink:"/wiki/blog/tags/js"},{inline:!0,label:"riddle",permalink:"/wiki/blog/tags/riddle"},{inline:!0,label:"puzzle",permalink:"/wiki/blog/tags/puzzle"}],readingTime:.735,hasTruncateMarker:!0,authors:[{name:"Anand Raja",title:"Senior Software Engineer",url:"https://github.com/actionanand",socials:{x:"https://x.com/actionanand",linkedin:"https://www.linkedin.com/in/anand-ns/",github:"https://github.com/actionanand",newsletter:"https://stackoverflow.com/users/10907720/anand-raja"},description:"Passionate web developer, who\u2019s enthusiastic about writing clean and efficient codes and able to handle complex situation, keen to learn more & add value to the team.",page:{permalink:"/wiki/blog/authors/actionanand"},imageURL:"https://github.com/actionanand.png",key:"anand"},{name:"Anand Techie",title:"Software Developer, Frontend",url:"https://github.com/AnandRaja-tech",socials:{github:"https://github.com/AnandRaja-tech"},page:{permalink:"/wiki/blog/authors/anand-tech"},imageURL:"https://github.com/AnandRaja-tech.png",key:"anand-tech"}],frontMatter:{slug:"the-chicken-or-the-egg",title:"Which came first?",authors:["anand","anand-tech"],tags:["js","riddle","puzzle"]},unlisted:!1,prevItem:{title:"JS Regex Helper",permalink:"/wiki/blog/js-regex-helper"},nextItem:{title:"Centering a Text Inside a Button",permalink:"/wiki/blog/text-align-center-in-button"}},u={authorsImageUrls:[void 0,void 0]},d=[];function h(e){const t={admonition:"admonition",code:"code",em:"em",img:"img",p:"p",pre:"pre",...(0,r.M)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"You've heard the age-old riddle: \"Which came first: the chicken or the egg?\" Taken metaphorically, it's a meditation on the futility of determining the cause of a self-perpetuating cycle. Taken literally, it's a great question for evolutionary biologists."}),"\n",(0,a.jsx)(t.p,{children:"Chickens come from eggs, but eggs come from chickens. So which came first?"}),"\n",(0,a.jsxs)(t.admonition,{type:"tip",children:[(0,a.jsxs)(t.p,{children:["Which came first, ",(0,a.jsx)(t.em,{children:"the chicken"})," or ",(0,a.jsx)(t.em,{children:"the egg"}),"?"]}),(0,a.jsxs)(i.c,{children:[(0,a.jsx)(o.c,{value:"js",label:"JS",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"const question = ['\ud83e\udd5a','\ud83d\udc14'];\nconst answer = question.sort();\nconsole.log(answer[0] + ' was first!');\n"})})}),(0,a.jsx)(o.c,{value:"react",label:"React",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-jsx",children:"<button onClick={\n  () => {\n    const question = ['\ud83e\udd5a','\ud83d\udc14'];\n    const answer = question.sort();\n    return alert(answer[0] + ' was first!');\n  } \n}>Click me!</button>\n"})})})]}),(0,a.jsx)("button",{onClick:()=>{const e=["\ud83e\udd5a","\ud83d\udc14"].sort();return alert(e[0]+" was first!")},children:"Click me!"})]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"chicken or egg",src:n(3240).c+"",width:"1200",height:"800"})})]})}function m(e={}){const{wrapper:t}={...(0,r.M)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},87768:(e,t,n)=>{n.d(t,{c:()=>o});n(11504);var a=n(65456);const r={tabItem:"tabItem_Ymn6"};var i=n(17624);function o(e){let{children:t,hidden:n,className:o}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.c)(r.tabItem,o),hidden:n,children:t})}},61268:(e,t,n)=>{n.d(t,{c:()=>j});var a=n(11504),r=n(65456),i=n(53943),o=n(55592),s=n(95288),l=n(10632),c=n(27128),u=n(43216);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}(n);return function(e){const t=(0,c.wn)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const r=(0,o.Uz)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._M)(i),(0,a.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(r.location.search);t.set(i,e),r.replace({...r.location,search:t.toString()})}),[i,r])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,i=h(e),[o,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[c,d]=p({queryString:n,groupId:r}),[g,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,i]=(0,u.IN)(n);return[r,(0,a.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:r}),b=(()=>{const e=c??g;return m({value:e,tabValues:i})?e:null})();(0,s.c)((()=>{b&&l(b)}),[b]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),f(e)}),[d,f,i]),tabValues:i}}var f=n(93664);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var k=n(17624);function v(e){let{className:t,block:n,selectedValue:a,selectValue:o,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.MV)(),u=e=>{const t=e.currentTarget,n=l.indexOf(t),r=s[n].value;r!==a&&(c(t),o(r))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,k.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.c)("tabs",{"tabs--block":n},t),children:s.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,k.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...i,className:(0,r.c)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function w(e){let{lazy:t,children:n,selectedValue:i}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===i));return e?(0,a.cloneElement)(e,{className:(0,r.c)("margin-top--md",e.props.className)}):null}return(0,k.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function x(e){const t=g(e);return(0,k.jsxs)("div",{className:(0,r.c)("tabs-container",b.tabList),children:[(0,k.jsx)(v,{...t,...e}),(0,k.jsx)(w,{...t,...e})]})}function j(e){const t=(0,f.c)();return(0,k.jsx)(x,{...e,children:d(e.children)},String(t))}},3240:(e,t,n)=>{n.d(t,{c:()=>a});const a=n.p+"assets/images/chicken-egg-4b84e3a0078f9210a840f5fd548ee1d9.jpg"},4552:(e,t,n)=>{n.d(t,{I:()=>s,M:()=>o});var a=n(11504);const r={},i=a.createContext(r);function o(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);