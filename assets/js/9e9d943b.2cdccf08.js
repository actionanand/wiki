"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[7010],{82223:(e,t,n)=>{n.d(t,{A:()=>l});n(96540);var r=n(34164);const a={tabItem:"tabItem_Ymn6"};var s=n(74848);function l(e){let{children:t,hidden:n,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,l),hidden:n,children:t})}},72206:(e,t,n)=>{n.d(t,{A:()=>w});var r=n(96540),a=n(34164),s=n(80052),l=n(56347),o=n(35793),i=n(99025),u=n(4430),c=n(44148);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,u.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function f(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=p(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[u,d]=h({queryString:n,groupId:a}),[m,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,c.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),g=(()=>{const e=u??m;return f({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{g&&i(g)}),[g]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!f({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=n(75251);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(74848);function x(e){let{className:t,block:n,selectedValue:r,selectValue:l,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),c=e=>{const t=e.currentTarget,n=i.indexOf(t),a=o[n].value;a!==r&&(u(t),l(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>{i.push(e)},onKeyDown:d,onClick:c,...s,className:(0,a.A)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:s}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function y(e){const t=m(e);return(0,v.jsxs)("div",{className:(0,a.A)("tabs-container",g.tabList),children:[(0,v.jsx)(x,{...t,...e}),(0,v.jsx)(j,{...t,...e})]})}function w(e){const t=(0,b.A)();return(0,v.jsx)(y,{...e,children:d(e.children)},String(t))}},132:(e,t,n)=>{n.d(t,{A:()=>a});n(96540);var r=n(74848);function a(e){let{children:t,color:n,highlight:a="bg",fontWeight:s="normal",textDecoration:l="none",fontStyle:o="normal",textAlign:i="left"}=e;return"fg"===a?(0,r.jsx)("span",{style:{color:n,fontWeight:s,textDecoration:l,fontStyle:o,textAlign:i},children:t}):"format"===a?(0,r.jsx)("div",{style:{textAlign:i,color:n,fontWeight:s,textDecoration:l,fontStyle:o},children:t}):"lightBg"===a?(0,r.jsx)("span",{style:{backgroundColor:n,borderRadius:"4px",color:"#4B0082",padding:"0.2rem",paddingTop:"0"},children:t}):(0,r.jsx)("span",{style:{backgroundColor:n,borderRadius:"4px",color:"#fff",padding:"0.2rem",paddingTop:"0"},children:t})}},80885:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>f,frontMatter:()=>i,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"js-tips/support-functions","title":"Support Functions","description":"Capitalizing the first letetr (Titlecase)","source":"@site/docs/js-tips/support-functions.md","sourceDirName":"js-tips","slug":"/js-tips/support-functions","permalink":"/wiki/docs/js-tips/support-functions","draft":false,"unlisted":false,"editUrl":"https://github.com/actionanand/wiki/docs/js-tips/support-functions.md","tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"sidebar_position":9,"sidebar_label":"Support Functions"},"sidebar":"tutorialSidebar","previous":{"title":"map in js","permalink":"/wiki/docs/js-tips/map-in-js"},"next":{"title":"RxJs Tips","permalink":"/wiki/docs/category/rxjs-tips"}}');var a=n(74848),s=n(28453),l=n(72206),o=n(82223);n(132);const i={sidebar_position:9,sidebar_label:"Support Functions"},u="Support Functions",c={},d=[{value:"Capitalizing the first letetr (Titlecase)",id:"capitalizing-the-first-letetr-titlecase",level:2},{value:"Shuffling Array Elements",id:"shuffling-array-elements",level:2}];function p(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"support-functions",children:"Support Functions"})}),"\n",(0,a.jsx)(t.h2,{id:"capitalizing-the-first-letetr-titlecase",children:"Capitalizing the first letetr (Titlecase)"}),"\n",(0,a.jsxs)(l.A,{children:[(0,a.jsx)(o.A,{value:"titlecase",label:"Titlecase",default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:"export const capitalize1stLetter = (words: string = 'unkown user') => {\n  const wordArray = words.split(' ');\n  const capitalArray: string[] = [];\n  wordArray.forEach(word => capitalArray.push(word.charAt(0).toUpperCase() + word.slice(1)));\n  return capitalArray.join(' ');\n};\n"})})}),(0,a.jsx)(o.A,{value:"output",label:"output",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:"const mySkills = ['angular', 'Node Js', 'CSS'];\n\nconsole.log(shuffleArrayEls(mySkills));\n\n// Output\n// [\"CSS\", \"angular\", \"Node Js\"] \n"})})})]}),"\n",(0,a.jsx)(t.h2,{id:"shuffling-array-elements",children:"Shuffling Array Elements"}),"\n",(0,a.jsxs)(l.A,{children:[(0,a.jsx)(o.A,{value:"shuffle",label:"Shuffle Logic",default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:"const shuffleArrayEls = (skills: string[]) => {\n  return skills\n    .map(a => ({ sort: Math.random(), value: a }))\n    .sort((a, b) => a.sort - b.sort)\n    .map(a => a.value);\n};\n"})})}),(0,a.jsx)(o.A,{value:"output",label:"output",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:"const myName = 'anand raja';\n\nconsole.log(capitalize1stLetter(myName));\n\n// Output\n// Anand Raja\n"})})})]})]})}function f(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>o});var r=n(96540);const a={},s=r.createContext(a);function l(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);