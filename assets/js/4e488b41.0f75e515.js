"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[7404],{3664:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>h});var o=r(17624),t=r(4552),l=r(61268),s=r(87768),a=r(94384);const i={sidebar_position:6,sidebar_label:"for-in vs for-of",title:"for-in vs for-of"},c="for...in vs for...of",d={id:"js-tips/for-in-vs-for-of",title:"for-in vs for-of",description:"For In: Loops over the Keys.",source:"@site/docs/js-tips/for-in-vs-for-of.mdx",sourceDirName:"js-tips",slug:"/js-tips/for-in-vs-for-of",permalink:"/wiki/docs/js-tips/for-in-vs-for-of",draft:!1,unlisted:!1,editUrl:"https://github.com/actionanand/wiki/docs/js-tips/for-in-vs-for-of.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,sidebar_label:"for-in vs for-of",title:"for-in vs for-of"},sidebar:"tutorialSidebar",previous:{title:"My Tips - 1",permalink:"/wiki/docs/js-tips/my-tips-1"},next:{title:"map in js",permalink:"/wiki/docs/js-tips/map-in-js"}},u={},h=[{value:"For In: Loops over the <code>Keys</code>.",id:"for-in-loops-over-the-keys",level:3},{value:"For Of: Loops over the <code>Values</code>",id:"for-of-loops-over-the-values",level:3},{value:"<code>for...of</code> - How it works?",id:"forof---how-it-works",level:4},{value:"<code>for...of</code> and NodeLists",id:"forof-and-nodelists",level:4},{value:"Bonus - <code>forEach</code>",id:"bonus---foreach",level:3}];function f(e){const n={code:"code",h1:"h1",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.h1,{id:"forin-vs-forof",children:[(0,o.jsx)(a.c,{color:"#C0C0C0",children:"for...in"})," vs ",(0,o.jsx)(a.c,{color:"#C0C0C0",children:"for...of"})]}),"\n",(0,o.jsxs)(n.h3,{id:"for-in-loops-over-the-keys",children:["For In: Loops over the ",(0,o.jsx)(n.code,{children:"Keys"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(a.c,{color:"#25c2a0",children:"for...in"})," works with those properties whose ",(0,o.jsx)(n.code,{children:"enumerable"})," flag is set to true."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Enumerable flag for properties created via simple assignment or property initializer are by default true."}),"\n",(0,o.jsxs)(n.li,{children:["Enumerable flag for properties created via ",(0,o.jsx)(n.code,{children:"Object.defineProperty"})," are by default false."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["it's used to iterate over all enumerable properties of an object, including inherited enumerable properties. This iteration statement can be ",(0,o.jsxs)(n.strong,{children:["used with ",(0,o.jsx)(n.code,{children:"arrays"}),", ",(0,o.jsx)(n.code,{children:"strings"})," or ",(0,o.jsx)(n.code,{children:"plain objects"})]}),", but ",(0,o.jsxs)(n.strong,{children:["not with ",(0,o.jsx)(n.code,{children:"Map"})," or ",(0,o.jsx)(n.code,{children:"Set"})," objects"]}),"."]}),"\n",(0,o.jsxs)(l.c,{children:[(0,o.jsx)(s.c,{value:"syntax",label:"Syntax",default:!0,children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"for (key in object) {\n    // body of for...in\n}\n"})})}),(0,o.jsx)(s.c,{value:"sample1",label:"Sample 1",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"const person = { \n  name: 'Prakash', \n  age: 29,  \n  gender: 'male', \n  mark: { value: 45, grade: 'A'} \n};\n\nfor (let key in person) {  \n  console.log(key)\n}\n\n// Output\nname\nage\ngender\nmark\n"})})}),(0,o.jsx)(s.c,{value:"sample2",label:"Sample 2",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"  const person = { \n    name: 'Prakash', \n    age: 29,  \n    gender: 'male',\n    mark: { value: 45, grade: 'A'} \n  };\n\n  Object.defineProperty(person, 'color', { value: 'Green', enumerable: false});\n  Object.defineProperty(person, 'Year', { value: 2024, enumerable: true});\n\n  for (let key in person) {  \n    console.log (key, '=>' , person[key] )\n  }\n\n  // Output\n\n  name => Prakash\n  age => 29\n  gender => male\n  mark => {value: 45, grade: 'A'}\n  Year => 2024\n"})})}),(0,o.jsx)(s.c,{value:"sample3",label:"Sample 3",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"for (let prop in ['a', 'b', 'c'])\n  console.log(prop);  // 0, 1, 2 (array indexes)\n\nfor (let prop in 'str')\n  console.log(prop);  // 0, 1, 2 (string indexes)\n\nconst str = 'anand';\nfor (let prop in str)\n  console.log(str[prop]); // 'a', 'n', 'a', 'n', 'd' (characters)\n\nfor (let prop in {a: 1, b: 2, c: 3})\n  console.log(prop);  // a, b, c (object property names)\n\nfor (let prop in new Set(['a', 'b', 'a', 'd']))\n  console.log(prop);  // undefined (no enumerable properties)\n"})})})]}),"\n",(0,o.jsxs)(n.h3,{id:"for-of-loops-over-the-values",children:["For Of: Loops over the ",(0,o.jsx)(n.code,{children:"Values"})]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(a.c,{color:"#25c2a0",children:"for...of"})," loop works only with ",(0,o.jsx)(n.strong,{children:"iterable objects"}),". In JavaScript, iterables are objects which can be looped over."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"String"}),", ",(0,o.jsx)(n.code,{children:"Array"}),", ",(0,o.jsx)(n.code,{children:"TypedArray"}),", ",(0,o.jsx)(n.code,{children:"Map"}),", and ",(0,o.jsx)(n.code,{children:"Set"})," are all ",(0,o.jsx)(n.strong,{children:"built-in iterables"}),", because each of their prototype objects implements an ",(0,o.jsx)(n.code,{children:"@@iterator"})," method. So, ",(0,o.jsx)(n.code,{children:"for...of"})," loop works on the mentioned object types."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Object"})," in JavaScript is ",(0,o.jsx)(n.strong,{children:"not iterable by default"}),". So, ",(0,o.jsxs)(n.strong,{children:[(0,o.jsx)(n.code,{children:"for...of"})," loop does not work on objects"]}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["In simple words, ",(0,o.jsx)(n.code,{children:"for...of"})," works with ",(0,o.jsx)(n.code,{children:"strings"})," and ",(0,o.jsx)(n.code,{children:"arrays"})," but ",(0,o.jsxs)(n.strong,{children:["not with ",(0,o.jsx)(n.code,{children:"objects"})]}),"."]}),"\n",(0,o.jsxs)(n.h4,{id:"forof---how-it-works",children:[(0,o.jsx)(n.code,{children:"for...of"})," - How it works?"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"for...of"})," is a method, introduced in ES2015, for iterating over ",(0,o.jsx)(n.strong,{children:"iterable collections"}),". These are objects that have a ",(0,o.jsx)(n.code,{children:"[Symbol.iterator]"})," property."]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"[Symbol.iterator]"})," property allows us to manually iterate over the collection by calling the ",(0,o.jsx)(n.code,{children:"[Symbol.iterator]().next()"})," method to retrieve the next item in the collection."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"const myArray = ['a','b','c', 'd'];\nconst iterator = myArray[Symbol.iterator]();\nconsole.log( iterator.next().value )\nconsole.log( iterator.next().value )\nconsole.log( iterator.next().value )\nconsole.log( iterator.next().value )\n\n// Output: a, b, c, d\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"for...of"})," syntax is essentially a wrapper around the ",(0,o.jsx)(n.code,{children:"[Symbol.iterator]"})," to create loops. It uses the following syntax"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"for (value of iterable) {\n\t// do stuff\n}\n"})}),"\n",(0,o.jsxs)(l.c,{children:[(0,o.jsx)(s.c,{value:"sample1",label:"Sample 1",default:!0,children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"const myMap = new Map([['name', 'Rajesh'], ['mark', 73], ['school', 'G.H.S, School']]);\n\nfor (let val of myMap)\n  console.log(val);\n/*\n// Output\n  ['name', 'Rajesh']\n  ['mark', 73]\n  ['school', 'G.H.S, School']\n*/\n\nfor (let [key, val] of myMap)\n  console.log(key +': '+ val);\n\n// Output\nname: Rajesh\nmark: 73\nschool: G.H.S, School\n"})})}),(0,o.jsx)(s.c,{value:"sample2",label:"Sample 2",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"for (let val of ['a', 'b', 'c'])\n  console.log(val); // a, b, c (array values)\n\nfor (let val of 'str')\n  console.log(val); // s, t, r (string characters)\n\nfor (let val of {a: 1, b: 2, c: 3})\n  console.log(prop);  // TypeError (not iterable)\n\nfor (let val of new Set(['a', 'b', 'a', 'd']))\n  console.log(val); // a, b, d (Set values)\n"})})}),(0,o.jsx)(s.c,{value:"sample3",label:"Sample 3",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"// creating iterable object\nconst iterableObj = {\n\n  // iterator method\n  [Symbol.iterator]() {\n    let step = 0;\n    return {\n      next() {\n        step++;\n        if (step === 1) {\n          return { value: '1', done: false};\n          }\n        else if (step === 2) {\n          return { value: '2', done: false};\n        }\n        else if (step === 3) {\n          return { value: '3', done: false};\n        }\n        return { value: '', done: true };\n      }\n    }\n  }\n}\n\n// iterating using for...of\nfor (const i of iterableObj) {\nconsole.log(i);\n}\n\n// Output\n1\n2\n3\n"})})}),(0,o.jsx)(s.c,{value:"sample 4",label:"Sample 4",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"function * even(n) {  \n  let index = 0;\n\n  while (index <= n ) {  \n    yield index;\n    index += 2;\n  }\n}\n\nconst evenGenerator = even(6);\n\nfor (let i of evenGenerator ) \n  console.log(i);\n\n// Output\n0\n2\n4\n6\n"})})})]}),"\n",(0,o.jsxs)(n.h4,{id:"forof-and-nodelists",children:[(0,o.jsx)(n.code,{children:"for...of"})," and NodeLists"]}),"\n",(0,o.jsxs)(n.p,{children:["Finally, another really useful case for ",(0,o.jsx)(n.code,{children:"for...of"})," is in iterating of ",(0,o.jsx)(n.code,{children:"NodeLists"}),". When we query the document for a group of elements, what we get returned is a NodeList, not an Array. This means that we ",(0,o.jsx)(n.strong,{children:"can't iterate"})," over the list using Array methods like ",(0,o.jsx)(n.code,{children:"forEach"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["To solve this, we can either convert it to an Array using ",(0,o.jsx)(n.code,{children:"Array.from()"}),", or use the ",(0,o.jsx)(n.code,{children:"for...of loop"}),", which is applicable to more than just Arrays and array-like object."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"const elements = document.querySelectorAll('.foo');\n\nfor (const el of elements) {\n    el.addEventListener('click', doSomething);\n}\n"})}),"\n",(0,o.jsxs)(n.h3,{id:"bonus---foreach",children:["Bonus - ",(0,o.jsx)(n.code,{children:"forEach"})]}),"\n",(0,o.jsxs)(l.c,{children:[(0,o.jsx)(s.c,{value:"sample1",label:"Sample 1",default:!0,children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"const arr = ['B', 'a', 'b', 'e'];\narr.forEach(el => console.log(el));\n\n// Output\n'B'\n'a'\n'b'\n'e'\n"})})}),(0,o.jsx)(s.c,{value:"sample2",label:"Sample 2",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"const arr = ['B', 'a', 'b', 'e', 'l'];\narr.forEach((el, i, array) => console.log(el, i, array));\n\n// Output\n'B' 0 ['B', 'a', 'b', 'e', 'l']\n'a' 1 ['B', 'a', 'b', 'e', 'l']\n'b' 2 ['B', 'a', 'b', 'e', 'l']\n'e' 3 ['B', 'a', 'b', 'e', 'l']\n'l' 4 ['B', 'a', 'b', 'e', 'l']\n"})})})]})]})}function p(e={}){const{wrapper:n}={...(0,t.M)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(f,{...e})}):f(e)}},87768:(e,n,r)=>{r.d(n,{c:()=>s});r(11504);var o=r(65456);const t={tabItem:"tabItem_Ymn6"};var l=r(17624);function s(e){let{children:n,hidden:r,className:s}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,o.c)(t.tabItem,s),hidden:r,children:n})}},61268:(e,n,r)=>{r.d(n,{c:()=>w});var o=r(11504),t=r(65456),l=r(53943),s=r(55592),a=r(95288),i=r(10632),c=r(27128),d=r(21148);function u(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,o.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:r,attributes:o,default:t}}=e;return{value:n,label:r,attributes:o,default:t}}))}(r);return function(e){const n=(0,c.w)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function f(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:r}=e;const t=(0,s.Uz)(),l=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,i._M)(l),(0,o.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(t.location.search);n.set(l,e),t.replace({...t.location,search:n.toString()})}),[l,t])]}function j(e){const{defaultValue:n,queryString:r=!1,groupId:t}=e,l=h(e),[s,i]=(0,o.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const o=r.find((e=>e.default))??r[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:n,tabValues:l}))),[c,u]=p({queryString:r,groupId:t}),[j,b]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,l]=(0,d.IN)(r);return[t,(0,o.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:t}),m=(()=>{const e=c??j;return f({value:e,tabValues:l})?e:null})();(0,a.c)((()=>{m&&i(m)}),[m]);return{selectedValue:s,selectValue:(0,o.useCallback)((e=>{if(!f({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),b(e)}),[u,b,l]),tabValues:l}}var b=r(93664);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=r(17624);function v(e){let{className:n,block:r,selectedValue:o,selectValue:s,tabValues:a}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.MV)(),d=e=>{const n=e.currentTarget,r=i.indexOf(n),t=a[r].value;t!==o&&(c(n),s(t))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;n=i[r]??i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;n=i[r]??i[i.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.c)("tabs",{"tabs--block":r},n),children:a.map((e=>{let{value:n,label:r,attributes:l}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,ref:e=>i.push(e),onKeyDown:u,onClick:d,...l,className:(0,t.c)("tabs__item",m.tabItem,l?.className,{"tabs__item--active":o===n}),children:r??n},n)}))})}function g(e){let{lazy:n,children:r,selectedValue:t}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===t));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function y(e){const n=j(e);return(0,x.jsxs)("div",{className:(0,t.c)("tabs-container",m.tabList),children:[(0,x.jsx)(v,{...e,...n}),(0,x.jsx)(g,{...e,...n})]})}function w(e){const n=(0,b.c)();return(0,x.jsx)(y,{...e,children:u(e.children)},String(n))}},94384:(e,n,r)=>{r.d(n,{c:()=>t});r(11504);var o=r(17624);function t(e){let{children:n,color:r,highlight:t="bg",fontWeight:l="normal",textDecoration:s="none",fontStyle:a="normal",textAlign:i="left"}=e;return"fg"===t?(0,o.jsx)("span",{style:{color:r,fontWeight:l,textDecoration:s,fontStyle:a,textAlign:i},children:n}):"format"===t?(0,o.jsx)("div",{style:{textAlign:i,color:r,fontWeight:l,textDecoration:s,fontStyle:a},children:n}):(0,o.jsx)("span",{style:{backgroundColor:r,borderRadius:"4px",color:"#fff",padding:"0.2rem",paddingTop:"0"},children:n})}},4552:(e,n,r)=>{r.d(n,{I:()=>a,M:()=>s});var o=r(11504);const t={},l=o.createContext(t);function s(e){const n=o.useContext(l);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),o.createElement(l.Provider,{value:n},e.children)}}}]);