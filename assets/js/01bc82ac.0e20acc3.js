"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[544],{19484:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var r=t(17624),i=t(4552),s=t(61268),a=t(87768);const l={sidebar_position:3,sidebar_label:"Obj. Chain into Array"},o="Object Chain into Array",c={id:"js-tips/object-into-array",title:"Object Chain into Array",description:"TypeScript Model",source:"@site/docs/js-tips/object-into-array.mdx",sourceDirName:"js-tips",slug:"/js-tips/object-into-array",permalink:"/wiki/docs/js-tips/object-into-array",draft:!1,unlisted:!1,editUrl:"https://github.com/actionanand/wiki/docs/js-tips/object-into-array.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Obj. Chain into Array"},sidebar:"tutorialSidebar",previous:{title:"Array.from()",permalink:"/wiki/docs/js-tips/array-from"},next:{title:"JS reduce() in depth",permalink:"/wiki/docs/js-tips/js-reduce"}},u={},d=[{value:"Let see the main logic loop:",id:"let-see-the-main-logic-loop",level:3},{value:"Breakthrough of the above code",id:"breakthrough-of-the-above-code",level:3},{value:"Resources",id:"resources",level:3}];function h(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.M)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"object-chain-into-array",children:"Object Chain into Array"}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"TypeScript Model"}),(0,r.jsx)("div",{children:(0,r.jsxs)(s.c,{className:"unique-tabs",children:[(0,r.jsx)(a.c,{value:"Class",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:"showLineNumbers",children:"// `MyPreference` Class\nexport class MyPreference {\n  preferences!: Subscription;\n}\n\n// `Subscription` class\nexport class Subscription {\n  consent!: boolean;\n  email!: string;\n  daily_alert_status!: Status;\n  special_alert_status!: Status;\n  daily!: {\n    // highlight-next-line\n    dual: SubscriptionList;\n    high_priority: SubscriptionList;\n    low_priority: SubscriptionList;\n  };\n  special?: {\n    dual: SubscriptionList;\n    high_priority: SubscriptionList;\n    low_priority: SubscriptionList;\n  };\n}\n"})})}),(0,r.jsx)(a.c,{value:"Interface",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:"showLineNumbers",children:"// `SubscriptionList` interface\nexport interface SubscriptionList {\n  filter: string;\n  query: string;\n  type: string;\n  status: boolean;\n}\n\n// `ProcessedList` interface\nexport interface ProcessedList extends SubscriptionList {\n  category: string;\n  subscription: string;\n  unique: string;\n  index: number;\n}\n"})})}),(0,r.jsx)(a.c,{value:"Enum",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:"showLineNumbers",children:"// `Status` enum\nexport enum Status {\n  OptedIn = 'OptedIn',\n  OptedOut = 'OptedOut',\n  ConsentNotGivenYet = 'ConsentNotGivenYet',\n}\n"})})})]})})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:"showLineNumbers",children:"const pref: Subscription = {\n  consent: false,\n  email: 'rajesh@ar.com',\n  daily_alert_status: Status.ConsentNotGivenYet,\n  special_alert_status: Status.OptedIn,\n  daily: {\n    dual: { filter: 'utm=facebook', query: 'newsletter', type: 'standard', status: false },\n    high_priority: { filter: 'utm=facebook', query: 'newsletter', type: 'standard', status: true },\n    low_priority: { filter: 'utm=facebook', query: '', type: 'standard', status: false },\n  },\n  special: {\n    dual: { filter: 'utm=facebook', query: 'newsletter', type: 'standard', status: true },\n    high_priority: { filter: 'utm=facebook', query: 'newsletter', type: 'standard', status: false },\n    low_priority: { filter: 'utm=facebook', query: 'newsletter', type: 'standard', status: false },\n  },\n};\n"})}),"\n",(0,r.jsxs)(s.c,{className:"unique-tabs",children:[(0,r.jsx)(a.c,{value:"Code",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"type SubObj = Record<'dual' | 'high_priority' | 'low_priority', SubscriptionList>;\ntype SubObjKeys = keyof SubObj; // 'dual' | 'high_priority' | 'low_priority'\n// SubObj and { [key: string]: SubscriptionList } are kind of same data type.\n\nconst arrayVal: [string, { [key: string]: SubscriptionList }][] = Object.entries(pref).filter(val => {\n  return val[0] === 'daily' || val[0] === 'special';\n});\n\n"})})}),(0,r.jsx)(a.c,{value:"Result",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"[\n  [\n    'daily',\n    {\n      dual: SubscriptionList;\n      high_priority: SubscriptionList;\n      low_priority: SubscriptionList;\n    }\n  ],\n  [\n    'special',\n    {\n      dual: SubscriptionList;\n      high_priority: SubscriptionList;\n      low_priority: SubscriptionList;\n    }\n  ]\n]\n"})})}),(0,r.jsx)(a.c,{value:"SubscriptionList Data",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"{ \n  filter: 'utm=facebook', \n  query: 'newsletter', \n  type: 'standard', \n  status: true \n}\n"})})})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Object.entries(pref)"})," will give ",(0,r.jsx)(n.code,{children:"['property','value'][] "}),". See the below example."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"[['consent', false], ['email', 'rajesh@ar.com'], ...]\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Output format is : ",(0,r.jsx)(n.code,{children:"[string, Object][]"}),"."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Here ",(0,r.jsx)(n.code,{children:"Object"})," type is ",(0,r.jsx)(n.code,{children:"Record<'dual' | 'high_priority' | 'low_priority', SubscriptionList>"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"let-see-the-main-logic-loop",children:"Let see the main logic loop:"}),"\n",(0,r.jsxs)(s.c,{children:[(0,r.jsx)(a.c,{value:"Code",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"let index = 0;\nconst temp: ProcessedList[] = [];\n\narrayVal.forEach(val => {\n  const category = val[0];\n  for (const key in val[1]) {\n    const unique = `${val[0]}_${key}`;\n    const obj: ProcessedList = { category, subscription: key, unique, index: index, ...pref[val[0]][key] };\n    temp.push(obj);\n    index++;\n  }\n});\n"})})}),(0,r.jsx)(a.c,{value:"Result",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"[\n  {\n    category: 'daily',\n    subscription: 'dual',\n    unique: 'daily_dual',\n    index: 0,\n    filter: 'utm=facebook',\n    query: 'newsletter',\n    type: 'standard',\n    status: false,\n  },\n  {\n    category: 'daily',\n    subscription: 'high_priority',\n    unique: 'daily_high_priority',\n    index: 1,\n    filter: 'utm=facebook',\n    query: 'newsletter',\n    type: 'standard',\n    status: true,\n  },\n  {\n    category: 'daily',\n    subscription: 'low_priority',\n    unique: 'daily_low_priority',\n    index: 2,\n    filter: 'utm=facebook',\n    query: '',\n    type: 'standard',\n    status: false,\n  },\n  {\n    category: 'special',\n    subscription: 'dual',\n    unique: 'special_dual',\n    index: 3,\n    filter: 'utm=facebook',\n    query: 'newsletter',\n    type: 'standard',\n    status: true,\n  },\n  {\n    category: 'special',\n    subscription: 'high_priority',\n    unique: 'special_high_priority',\n    index: 4,\n    filter: 'utm=facebook',\n    query: 'newsletter',\n    type: 'standard',\n    status: false,\n  },\n  {\n    category: 'special',\n    subscription: 'low_priority',\n    unique: 'special_low_priority',\n    index: 5,\n    filter: 'utm=facebook',\n    query: 'newsletter',\n    type: 'standard',\n    status: false,\n  },\n];\n"})})})]}),"\n",(0,r.jsx)(n.h3,{id:"breakthrough-of-the-above-code",children:"Breakthrough of the above code"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"val"})," will iterate over array of ",(0,r.jsx)(n.code,{children:"arrayVal"}),". Here ",(0,r.jsx)(n.code,{children:"arrayVal"})," is like ",(0,r.jsx)(n.code,{children:"[[array1], [array2]]"}),". ",(0,r.jsx)(n.code,{children:"val"})," is either ",(0,r.jsx)(n.code,{children:"array1"})," or ",(0,r.jsx)(n.code,{children:"array2"}),". And inner array has the type of ",(0,r.jsx)(n.code,{children:"[string, Object]"}),", here ",(0,r.jsx)(n.code,{children:"[string, Record<'dual' | 'high_priority' | 'low_priority', SubscriptionList>]"})]}),"\n",(0,r.jsxs)(n.li,{children:["so ",(0,r.jsx)(n.code,{children:"val[0]"})," will be always ",(0,r.jsx)(n.code,{children:"string"}),". And here ",(0,r.jsx)(n.code,{children:"string"})," will be either ",(0,r.jsx)(n.code,{children:"daily"})," or ",(0,r.jsx)(n.code,{children:"special"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["And ",(0,r.jsx)(n.code,{children:"val[1]"})," will be an object, here its type is ",(0,r.jsx)(n.code,{children:"Record<'dual' | 'high_priority' | 'low_priority', SubscriptionList>"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"const key in val[1]"})," will give the array which contains the keys of object. here ",(0,r.jsx)(n.code,{children:"dual"}),", ",(0,r.jsx)(n.code,{children:"high_priority"})," and ",(0,r.jsx)(n.code,{children:"low_priority"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["So basically here, ",(0,r.jsx)(n.code,{children:"val[0]"})," is one of the keys of object ",(0,r.jsx)(n.code,{children:"pref"})," (its type is ",(0,r.jsx)(n.code,{children:"Subscription"}),") and ",(0,r.jsx)(n.code,{children:"key"})," is one of the keys of the object containing keys ",(0,r.jsx)(n.code,{children:"val[0]"})," (i.e, keys of the object either ",(0,r.jsx)(n.code,{children:"daily"})," or ",(0,r.jsx)(n.code,{children:"special"}),")."]}),"\n",(0,r.jsxs)(n.li,{children:["So refereing both the keys. key of object and key of object's key (inner object) will give the output like this ",(0,r.jsx)(n.code,{children:"{ filter: 'utm=facebook', query: 'newsletter', type: 'standard', status: true }"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"pref[val[0]][key]"})," will be like ",(0,r.jsx)(n.code,{children:"pref['daily']['dual']"})," (this is an example)"]}),"\n",(0,r.jsxs)(n.li,{children:["See the final output as below: The final output type is ",(0,r.jsx)(n.code,{children:"Object[]"}),", here ",(0,r.jsx)(n.code,{children:"ProcessedList[]"})]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"resources",children:"Resources"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/actionanand/js-helper-code/tree/main/src/obj-array",children:"Object Chain into Array - GitHub"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://bobbyhadz.com/blog/typescript-element-implicitly-has-any-type-expression",children:"Element implicitly has an 'any' type because expression of type 'string' can't be used to index type"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://stackoverflow.com/questions/57086672/element-implicitly-has-an-any-type-because-expression-of-type-string-cant-b",children:"Element implicitly has an 'any' type because expression of type 'string' can't be used to index - stackoverflow"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://blog.logrocket.com/how-to-dynamically-assign-properties-object-typescript/",children:"How to dynamically assign properties to an object in TypeScript"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://stackoverflow.com/questions/59571049/typescript-multiple-object-properties-with-shared-types",children:"Typescript multiple object properties with shared types - stackoverflow"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map",children:"Map - mdn"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},87768:(e,n,t)=>{t.d(n,{c:()=>a});t(11504);var r=t(65456);const i={tabItem:"tabItem_Ymn6"};var s=t(17624);function a(e){let{children:n,hidden:t,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.c)(i.tabItem,a),hidden:t,children:n})}},61268:(e,n,t)=>{t.d(n,{c:()=>w});var r=t(11504),i=t(65456),s=t(53943),a=t(55592),l=t(95288),o=t(10632),c=t(27128),u=t(43216);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:i}}=e;return{value:n,label:t,attributes:r,default:i}}))}(t);return function(e){const n=(0,c.w)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function b(e){let{queryString:n=!1,groupId:t}=e;const i=(0,a.Uz)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o._M)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(i.location.search);n.set(s,e),i.replace({...i.location,search:n.toString()})}),[s,i])]}function y(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,s=h(e),[a,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[c,d]=b({queryString:t,groupId:i}),[y,j]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,s]=(0,u.IN)(t);return[i,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:i}),f=(()=>{const e=c??y;return p({value:e,tabValues:s})?e:null})();(0,l.c)((()=>{f&&o(f)}),[f]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),j(e)}),[d,j,s]),tabValues:s}}var j=t(93664);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(17624);function m(e){let{className:n,block:t,selectedValue:r,selectValue:a,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.MV)(),u=e=>{const n=e.currentTarget,t=o.indexOf(n),i=l[t].value;i!==r&&(c(n),a(i))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.c)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>o.push(e),onKeyDown:d,onClick:u,...s,className:(0,i.c)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function g(e){let{lazy:n,children:t,selectedValue:i}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function v(e){const n=y(e);return(0,x.jsxs)("div",{className:(0,i.c)("tabs-container",f.tabList),children:[(0,x.jsx)(m,{...n,...e}),(0,x.jsx)(g,{...n,...e})]})}function w(e){const n=(0,j.c)();return(0,x.jsx)(v,{...e,children:d(e.children)},String(n))}},4552:(e,n,t)=>{t.d(n,{I:()=>l,M:()=>a});var r=t(11504);const i={},s=r.createContext(i);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);