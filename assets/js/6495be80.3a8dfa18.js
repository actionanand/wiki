"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[3120],{82223:(e,t,n)=>{n.d(t,{A:()=>s});n(96540);var a=n(34164);const r={tabItem:"tabItem_Ymn6"};var l=n(74848);function s(e){let{children:t,hidden:n,className:s}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,s),hidden:n,children:t})}},72206:(e,t,n)=>{n.d(t,{A:()=>k});var a=n(96540),r=n(34164),l=n(80052),s=n(56347),i=n(35793),o=n(99025),u=n(4430),c=n(44148);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}(n);return function(e){const t=(0,u.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const r=(0,s.W6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o.aZ)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,l=h(e),[s,o]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[u,d]=b({queryString:n,groupId:r}),[m,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,c.Dv)(n);return[r,(0,a.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:r}),f=(()=>{const e=u??m;return p({value:e,tabValues:l})?e:null})();(0,i.A)((()=>{f&&o(f)}),[f]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),g(e)}),[d,g,l]),tabValues:l}}var g=n(75251);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(74848);function x(e){let{className:t,block:n,selectedValue:a,selectValue:s,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.a_)(),c=e=>{const t=e.currentTarget,n=o.indexOf(t),r=i[n].value;r!==a&&(u(t),s(r))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:l}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>{o.push(e)},onKeyDown:d,onClick:c,...l,className:(0,r.A)("tabs__item",f.tabItem,l?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function w(e){let{lazy:t,children:n,selectedValue:l}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===l));return e?(0,a.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==l})))})}function y(e){const t=m(e);return(0,v.jsxs)("div",{className:(0,r.A)("tabs-container",f.tabList),children:[(0,v.jsx)(x,{...t,...e}),(0,v.jsx)(w,{...t,...e})]})}function k(e){const t=(0,g.A)();return(0,v.jsx)(y,{...e,children:d(e.children)},String(t))}},23564:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var a=n(11204),r=n(74848),l=n(28453),s=n(72206),i=n(82223);const o={slug:"text-align-center-in-button",title:"Centering a Text Inside a Button",authors:[{name:"Anand Raja",title:"Software Developer",url:"https://github.com/actionanand",image_url:"https://github.com/actionanand.png"},{name:"Anand Techie",title:"Software Developer, JS Specialist"}],tags:["css","center-css"]},u=void 0,c={authorsImageUrls:[void 0,void 0]},d=[];function h(e){const t={code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["Instead of centering headings and paragraphs, let\u2019s center text inside another element (",(0,r.jsx)(t.code,{children:"<button> </button>"}),"). Aligning the button, and the text inside the button, would differ slightly from the examples."]}),"\n",(0,r.jsx)(t.p,{children:"That\u2019s because the text-align property only works on the content inside block-level elements, such as headings and paragraphs, and not inline elements, such as buttons."}),"\n",(0,r.jsx)(t.p,{children:"So here's what we'll do instead:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Wrap the button in a ",(0,r.jsx)(t.code,{children:"div"})]}),"\n",(0,r.jsxs)(t.li,{children:["Then, add an inline style declaration to the div, i.e. ",(0,r.jsx)(t.code,{children:'<div style="text-align:center">'}),"."]}),"\n"]}),"\n","\n",(0,r.jsxs)(s.A,{children:[(0,r.jsx)(i.A,{value:"html",label:"HTML",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-html",children:'<div style="text-align:center">\n  <button type="button" class="btn btn-primary">Click Me</button>\n</div>\n'})})}),(0,r.jsx)(i.A,{value:"css",label:"CSS",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-css",children:".btn{\n  background-color: #0068B1; \n  font-family: 'Lexend Deca', sans-serif;\n  text-transform: uppercase;\n  color: white;\n  padding: 20px; \n  width: 200px;\n  border-radius: 10px;\n}\n\n.btn:hover{\n  background-color: #408EC5;\n}\n"})})})]})]})}function p(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>i});var a=n(96540);const r={},l=a.createContext(r);function s(e){const t=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(l.Provider,{value:t},e.children)}},11204:e=>{e.exports=JSON.parse('{"permalink":"/wiki/blog/text-align-center-in-button","editUrl":"https://github.com/actionanand/wiki/blog/2024-02-08-text-align-center.md","source":"@site/blog/2024-02-08-text-align-center.md","title":"Centering a Text Inside a Button","description":"Instead of centering headings and paragraphs, let\u2019s center text inside another element ( ). Aligning the button, and the text inside the button, would differ slightly from the examples.","date":"2024-02-08T00:00:00.000Z","tags":[{"inline":true,"label":"css","permalink":"/wiki/blog/tags/css"},{"inline":true,"label":"center-css","permalink":"/wiki/blog/tags/center-css"}],"readingTime":0.675,"hasTruncateMarker":true,"authors":[{"name":"Anand Raja","title":"Software Developer","url":"https://github.com/actionanand","image_url":"https://github.com/actionanand.png","imageURL":"https://github.com/actionanand.png","socials":{},"key":null,"page":null},{"name":"Anand Techie","title":"Software Developer, JS Specialist","socials":{},"key":null,"page":null}],"frontMatter":{"slug":"text-align-center-in-button","title":"Centering a Text Inside a Button","authors":[{"name":"Anand Raja","title":"Software Developer","url":"https://github.com/actionanand","image_url":"https://github.com/actionanand.png","imageURL":"https://github.com/actionanand.png"},{"name":"Anand Techie","title":"Software Developer, JS Specialist"}],"tags":["css","center-css"]},"unlisted":false,"prevItem":{"title":"Which came first?","permalink":"/wiki/blog/the-chicken-or-the-egg"}}')}}]);