"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[3896],{6584:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>h});var t=i(7624),o=i(2172),l=i(1268),a=i(5388);const s={sidebar_position:3,sidebar_label:"Box Model & Positioning el."},r="Box Model & Positioning Elements",c={id:"advanced-css/box-model-positioning",title:"Box Model & Positioning Elements",description:"* For practice - CSS Position Lab GitHub",source:"@site/docs/advanced-css/box-model-positioning.md",sourceDirName:"advanced-css",slug:"/advanced-css/box-model-positioning",permalink:"/wiki/docs/advanced-css/box-model-positioning",draft:!1,unlisted:!1,editUrl:"https://github.com/actionanand/wiki/docs/advanced-css/box-model-positioning.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Box Model & Positioning el."},sidebar:"tutorialSidebar",previous:{title:"CSS Combinators",permalink:"/wiki/docs/advanced-css/css-combinators"},next:{title:"Background and Image",permalink:"/wiki/docs/advanced-css/background-image"}},d={},h=[{value:"The Box Model",id:"the-box-model",level:2},{value:"The Box Model with <code>box-sizing: border-box;</code>",id:"the-box-model-with-box-sizing-border-box",level:3},{value:"Deep Dive on <strong>Margin Collapsing</strong>",id:"deep-dive-on-margin-collapsing",level:3},{value:"Shorthand Properties",id:"shorthand-properties",level:3},{value:"&quot;display: none&quot; vs &quot;visibility: hidden&quot;",id:"display-none-vs-visibility-hidden",level:3},{value:"Box Types: inline, block-level and inline-block",id:"box-types-inline-block-level-and-inline-block",level:3},{value:"Positioning Schemes: Normal flow, Absolute positioning and Floats",id:"positioning-schemes-normal-flow-absolute-positioning-and-floats",level:2},{value:"Float and Clear fix",id:"float-and-clear-fix",level:3}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"box-model--positioning-elements",children:"Box Model & Positioning Elements"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/actionanand/css-position-lab",children:"For practice - CSS Position Lab GitHub"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://actionanand.github.io/css-position-lab/",children:"Demo - CSS Position Lab"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"the-box-model",children:"The Box Model"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://github.com/actionanand/wiki/assets/46064269/02cce7c0-d647-4e04-b6b6-bfb5cb317a78",alt:"image"})}),"\n",(0,t.jsxs)(n.h3,{id:"the-box-model-with-box-sizing-border-box",children:["The Box Model with ",(0,t.jsx)(n.code,{children:"box-sizing: border-box;"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://github.com/actionanand/wiki/assets/46064269/5cf5b5c0-0216-4fde-903d-9181670fd234",alt:"image"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Positioning",children:"Positioning theory"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/position",children:'More about the "position" property'})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/z-index",children:"The z-index"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context",children:"The Stacking Context"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing",children:"Mastering margin collapsing"})}),"\n"]}),"\n",(0,t.jsxs)(n.h3,{id:"deep-dive-on-margin-collapsing",children:["Deep Dive on ",(0,t.jsx)(n.strong,{children:"Margin Collapsing"})]}),"\n",(0,t.jsx)(n.admonition,{title:"Margin Collapsing",type:"tip",children:(0,t.jsxs)(l.c,{children:[(0,t.jsx)(a.c,{value:"adj-sibling",label:"Adjacent Siblings",children:(0,t.jsxs)(n.p,{children:["In this case, the first element might have a margin of 10px  (on all sides let's say) and the second one has 5px  (or 20px  - the values don't matter). ",(0,t.jsx)(n.strong,{children:"CSS will collapse the margins and only add the bigger one between the elements"}),". So if we got margins of 10px  and 5px , a 10px  margin would be added between the elements"]})}),(0,t.jsx)(a.c,{value:"parent-with-children",label:"A Parent with Children that have a margin",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"To be precise, the first and/ or last or the only child has to have margins (top and/ or bottom). In that case, the parent elements margin will collapse with the child element(s)' margins. Again, the bigger margin wins and will be applied to the parent element."}),"\n",(0,t.jsx)(n.li,{children:"If the parent element has padding, inline content (other than the child elements) or a border, this behavior should not occur, the child margin will instead be added to the content of the wrapping parent element."}),"\n"]})}),(0,t.jsx)(a.c,{value:"empty-el",label:"An Empty Element with margins",children:(0,t.jsx)(n.p,{children:"This case probably doesn't occur that often but if you got an element with no content, no padding, no border and no height, then the top and bottom margin will be merged into one single margin. Again, the bigger one wins."})})]})}),"\n",(0,t.jsx)(n.h3,{id:"shorthand-properties",children:"Shorthand Properties"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://github.com/actionanand/wiki/assets/46064269/5b8444e2-2880-4be4-8255-943657a4c193",alt:"image"})}),"\n",(0,t.jsx)(n.h3,{id:"display-none-vs-visibility-hidden",children:'"display: none" vs "visibility: hidden"'}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(l.c,{children:[(0,t.jsx)(a.c,{value:"display-none",label:"None",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"display: none;"}),": This value removes the element to which you apply it from the document flow. This means that the element is not visible and it also doesn't ",(0,t.jsx)(n.strong,{children:"block its position"}),". Other elements can (and will) take its place instead. ",(0,t.jsx)(n.strong,{children:"It's still part of the DOM though"}),", you can still ",(0,t.jsx)(n.strong,{children:"access it via JavaScript"})," for example."]})}),(0,t.jsx)(a.c,{value:"visibility-hidden",label:"Hidden",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"visibility: hidden;"}),": There is an alternative to that though. If you only want to hide an element but you want to keep its place (i.e. other elements don't fill the empty spot), you can use ",(0,t.jsx)(n.code,{children:"visibility: hidden;"}),". Here it's not removed from the document flow and of course also not from the DOM."]})})]})}),"\n",(0,t.jsx)(n.h3,{id:"box-types-inline-block-level-and-inline-block",children:"Box Types: inline, block-level and inline-block"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://github.com/actionanand/wiki/assets/46064269/d1b72eee-8c45-4c42-95ee-3d5e37a44b83",alt:"image"})}),"\n",(0,t.jsx)(n.h2,{id:"positioning-schemes-normal-flow-absolute-positioning-and-floats",children:"Positioning Schemes: Normal flow, Absolute positioning and Floats"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://github.com/actionanand/wiki/assets/46064269/ef46fe56-e673-4322-9340-4349fc4b23ad",alt:"image"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsxs)(n.a,{href:"https://css-tricks.com/when-using-important-is-the-right-choice/",children:["When Using ",(0,t.jsx)(n.code,{children:"!important"})," is The Right Choice"]})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsxs)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/:not",children:["The ",(0,t.jsx)(n.code,{children:":not()"}),"  pseudo class"]})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"float-and-clear-fix",children:"Float and Clear fix"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://blog.openreplay.com/working-with-css-float-and-clear-properties/",children:"Working With CSS Float And Clear Properties"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/float",children:"More on float - MDN"})}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["In CSS, floating elements automatically have a ",(0,t.jsx)(n.code,{children:"display: block;"})," applied to them. Floating elements behave similarly to blocks, and you can set a specific height and width."]}),"\n",(0,t.jsxs)(n.li,{children:["When floating block-level elements, they wrap around their content instead of taking up all available width. This means they behave more like ",(0,t.jsx)(n.code,{children:"inline-block"})," elements, even though their display property remains as block in CSS."]}),"\n"]})})]})}function p(e={}){const{wrapper:n}={...(0,o.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},5388:(e,n,i)=>{i.d(n,{c:()=>a});i(1504);var t=i(5456);const o={tabItem:"tabItem_Ymn6"};var l=i(7624);function a(e){let{children:n,hidden:i,className:a}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,t.c)(o.tabItem,a),hidden:i,children:n})}},1268:(e,n,i)=>{i.d(n,{c:()=>w});var t=i(1504),o=i(5456),l=i(3943),a=i(5592),s=i(5288),r=i(632),c=i(7128),d=i(1148);function h(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:i}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:i,attributes:t,default:o}}=e;return{value:n,label:i,attributes:t,default:o}}))}(i);return function(e){const n=(0,c.w)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,i])}function p(e){let{value:n,tabValues:i}=e;return i.some((e=>e.value===n))}function b(e){let{queryString:n=!1,groupId:i}=e;const o=(0,a.Uz)(),l=function(e){let{queryString:n=!1,groupId:i}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!i)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return i??null}({queryString:n,groupId:i});return[(0,r._M)(l),(0,t.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(o.location.search);n.set(l,e),o.replace({...o.location,search:n.toString()})}),[l,o])]}function m(e){const{defaultValue:n,queryString:i=!1,groupId:o}=e,l=u(e),[a,r]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:i}=e;if(0===i.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:i}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${i.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=i.find((e=>e.default))??i[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:l}))),[c,h]=b({queryString:i,groupId:o}),[m,g]=function(e){let{groupId:n}=e;const i=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,l]=(0,d.IN)(i);return[o,(0,t.useCallback)((e=>{i&&l.set(e)}),[i,l])]}({groupId:o}),x=(()=>{const e=c??m;return p({value:e,tabValues:l})?e:null})();(0,s.c)((()=>{x&&r(x)}),[x]);return{selectedValue:a,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);r(e),h(e),g(e)}),[h,g,l]),tabValues:l}}var g=i(3664);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=i(7624);function v(e){let{className:n,block:i,selectedValue:t,selectValue:a,tabValues:s}=e;const r=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.MV)(),d=e=>{const n=e.currentTarget,i=r.indexOf(n),o=s[i].value;o!==t&&(c(n),a(o))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const i=r.indexOf(e.currentTarget)+1;n=r[i]??r[0];break}case"ArrowLeft":{const i=r.indexOf(e.currentTarget)-1;n=r[i]??r[r.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.c)("tabs",{"tabs--block":i},n),children:s.map((e=>{let{value:n,label:i,attributes:l}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>r.push(e),onKeyDown:h,onClick:d,...l,className:(0,o.c)("tabs__item",x.tabItem,l?.className,{"tabs__item--active":t===n}),children:i??n},n)}))})}function j(e){let{lazy:n,children:i,selectedValue:o}=e;const l=(Array.isArray(i)?i:[i]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===o));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function y(e){const n=m(e);return(0,f.jsxs)("div",{className:(0,o.c)("tabs-container",x.tabList),children:[(0,f.jsx)(v,{...e,...n}),(0,f.jsx)(j,{...e,...n})]})}function w(e){const n=(0,g.c)();return(0,f.jsx)(y,{...e,children:h(e.children)},String(n))}},2172:(e,n,i)=>{i.d(n,{I:()=>s,M:()=>a});var t=i(1504);const o={},l=t.createContext(o);function a(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);