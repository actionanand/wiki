"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[6980],{53380:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>h});var a=r(17624),t=r(4552),l=r(61268),s=r(87768),i=r(94384);const o={sidebar_position:2,sidebar_label:"Array.from()",title:"Use cases of Array.from()"},c="Amazing use cases of  Array.from() in JavaScript",d={id:"js-tips/array-from",title:"Use cases of Array.from()",description:"The  Array.from() method returns an array from any array-like or iterable object. The method takes in one compulsory parameter and two other optional parameters:",source:"@site/docs/js-tips/array-from.mdx",sourceDirName:"js-tips",slug:"/js-tips/array-from",permalink:"/wiki/docs/js-tips/array-from",draft:!1,unlisted:!1,editUrl:"https://github.com/actionanand/wiki/docs/js-tips/array-from.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Array.from()",title:"Use cases of Array.from()"},sidebar:"tutorialSidebar",previous:{title:"Data Types in JS",permalink:"/wiki/docs/js-tips/data-type-in-js"},next:{title:"Obj. Chain into Array",permalink:"/wiki/docs/js-tips/object-into-array"}},u={},h=[{value:"<code>from()</code> Method with Array-like Objects",id:"from-method-with-array-like-objects",level:3},{value:"Sequence of Numbers with the <code>from()</code> Method",id:"sequence-of-numbers-with-the-from-method",level:3},{value:"Create a Range of Numbers with the <code>from()</code> Method",id:"create-a-range-of-numbers-with-the-from-method",level:3},{value:"<code>from()</code> Method with Mapping Function",id:"from-method-with-mapping-function",level:3},{value:"<code>from()</code> Method with a <code>Set</code> - creating unique array elements",id:"from-method-with-a-set---creating-unique-array-elements",level:3},{value:"Creating a Matrix",id:"creating-a-matrix",level:3},{value:"Mapping object properties into arrays",id:"mapping-object-properties-into-arrays",level:3},{value:"Using Array.from() in JavaScript with a <code>this</code> Value",id:"using-arrayfrom-in-javascript-with-a-this-value",level:3},{value:"Array from an Iterable Object",id:"array-from-an-iterable-object",level:3},{value:"Map to an Array in JavaScript",id:"map-to-an-array-in-javascript",level:3},{value:"NodeList &amp; HTMLCollection into an Array",id:"nodelist--htmlcollection-into-an-array",level:3}];function m(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.M)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsxs)(n.h1,{id:"amazing-use-cases-of--arrayfrom-in-javascript",children:["Amazing use cases of ",(0,a.jsx)(i.c,{color:"#C0C0C0",children:" Array.from()"})," in JavaScript"]})}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(i.c,{color:"#C0C0C0",children:" Array.from()"})," method returns an array from any array-like or iterable object. The method takes in one compulsory parameter and two other optional parameters:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"// Syntax\nArray.from(arraylike, mapFunc, thisArg);\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"from()"})," method, being a ",(0,a.jsx)(n.strong,{children:"static method"}),", is called using the ",(0,a.jsx)(n.code,{children:"Array"})," class name."]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(i.c,{color:"#C0C0C0",children:"arraylike"})," - An Array-like or iterable object to convert to an array.","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["This method can create an array from:","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["array-like objects - The objects that have length property and have indexed elements like ",(0,a.jsx)(n.code,{children:"String"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["Iterable objects like ",(0,a.jsx)(n.code,{children:"Map"})," or ",(0,a.jsx)(n.code,{children:"Set"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(i.c,{color:"#C0C0C0",children:"mapFunc"})," (optional) - This is an optional parameter. The Map function is called on each element."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(i.c,{color:"#C0C0C0",children:"thisArg"})," (optional) - This value is used when executing ",(0,a.jsx)(i.c,{color:"#C0C0C0",children:"mapFunc"})," as ",(0,a.jsx)(i.c,{color:"#C0C0C0",children:"this"}),". It is also optional."]}),"\n"]}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"Array.from(obj, mapFunc, thisArg)"})," is equivalent to ",(0,a.jsx)(n.code,{children:"Array.from(obj).map(mapFunc, thisArg)"}),"."]})}),"\n",(0,a.jsxs)(n.h3,{id:"from-method-with-array-like-objects",children:[(0,a.jsx)(n.code,{children:"from()"})," Method with Array-like Objects"]}),"\n",(0,a.jsxs)(n.p,{children:["To see how this works, let\u2019s create an array from a string using the ",(0,a.jsx)(i.c,{color:"#C0C0C0",children:"Array.from()"})," method:"]}),"\n",(0,a.jsxs)(l.c,{children:[(0,a.jsx)(s.c,{value:"array",label:"Array.from()",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"// creating an array from a string \nArray.from('JavaScript');\n"})})}),(0,a.jsx)(s.c,{value:"split",label:"JS split()",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"// creating an array from a string \n'JavaScript'.split('');\n"})})}),(0,a.jsx)(s.c,{value:"result",label:"Result",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"// Output\n['J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't']\n"})})})]}),"\n",(0,a.jsxs)(n.p,{children:["In the example above, the ",(0,a.jsx)(i.c,{color:"#C0C0C0",children:"Array.from()"})," method returned an array of the string. You can also use the method to return an array from any object with a length property that specifies the number of elements in the object."]}),"\n",(0,a.jsxs)(l.c,{children:[(0,a.jsx)(s.c,{value:"sample-1",label:"Sample 1",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"let arrayLike = {0: 5, 1: 7, 2: 1, length: 5};\nArray.from(arrayLike);\n\n// Output\n[5, 7, 1, undefined, undefined]\n"})})}),(0,a.jsx)(s.c,{value:"sample-2",label:"Sample 2",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"let arrayLike = {0: 5, 1: 7, 2: 1, length: 3};\nArray.from(arrayLike);\n\n// Output\n[5, 7, 1]\n"})})}),(0,a.jsx)(s.c,{value:"map-fn",label:"With Map fn.",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"let arrayLike = {0: 1, 1: 2, 2: 3, length: 3};\n\nArray.from(arrayLike, val => val * 2);\n// Output\n// [2,4,6]\n\nArray.from(arrayLike, (val, i) => i * 2);\n// Output\n// [0,2,4]\n"})})})]}),"\n",(0,a.jsxs)(n.h3,{id:"sequence-of-numbers-with-the-from-method",children:["Sequence of Numbers with the ",(0,a.jsx)(n.code,{children:"from()"})," Method"]}),"\n",(0,a.jsxs)(n.p,{children:["(Creating Array with ",(0,a.jsx)(n.strong,{children:"N"})," elements, 1...N)"]}),"\n",(0,a.jsxs)(l.c,{children:[(0,a.jsx)(s.c,{value:"sample-1",label:"Sample 1",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"Array.from({ length: 5 }, (value, index) => value);\n\n// Output\n[undefined, undefined, undefined, undefined, undefined]\n"})})}),(0,a.jsx)(s.c,{value:"sample-2",label:"Sample 2",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"Array.from({ length: 5 }, (value, index) => index);\n\n// Output\n[0, 1, 2, 3, 4]\n"})})}),(0,a.jsx)(s.c,{value:"sample-3",label:"Sequence from 1",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"Array.from({ length: 5 }, (_, i) => i+1);\n\n// Output\n[1, 2, 3, 4, 5]\n"})})}),(0,a.jsx)(s.c,{value:"sample-4",label:"Traditional",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"const numberCount = [];\n\nfor( let i=0; i < 5; i++) {\n  numberCount.push(i + 1);\n}\nconsole.log(numberCount);\n\n// Output\n[1, 2, 3, 4, 5 ]\n"})})}),(0,a.jsx)(s.c,{value:"others",label:"Others",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"Array.from(Array(10).keys());\n// Using Spread Operator\n[...Array(10).keys()];\n\n// Output\n[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]\n\n[...Array(10).keys()].map(x => ++x);\nArray.from(Array(10)).map((e, i) => i + 1);\nArray.from(Array(10), (e, i) => i + 1);\n// using Fill and Map\nArray(10).fill().map((_, i) => i + 1);\n// Output\n[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\n\nArray(3).fill();\n// Output\n[undefined, undefined, undefined]\nArray(3).fill('*');\n// Output\n['*', '*', '*']\n"})})})]}),"\n",(0,a.jsxs)(n.h3,{id:"create-a-range-of-numbers-with-the-from-method",children:["Create a Range of Numbers with the ",(0,a.jsx)(n.code,{children:"from()"})," Method"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:"showLineNumbers",children:"const arrayRange = (start, stop, step) =>\n    Array.from(\n    { length: (stop - start) / step + 1 },\n    (value, index) => start + index * step\n    );\n"})}),"\n",(0,a.jsx)(n.p,{children:"Let's try the method with a few examples:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:"showLineNumbers",children:"// Generate numbers between range 2 and 7\nlet range = arrayRange(2, 7, 1);\nconsole.log(range); // [2,3,4,5,6,7]\n\n// Generate even numbers between range 2 and 7\nlet evenRange = arrayRange(2, 7, 2);\nconsole.log(evenRange); // [2,4,6]\n\n// Generate odd numbers between range 1 and 5\nlet oddRange = arrayRange(1, 5, 2);\nconsole.log(oddRange); // [1,3,5]\n"})}),"\n",(0,a.jsxs)(n.h3,{id:"from-method-with-mapping-function",children:[(0,a.jsx)(n.code,{children:"from()"})," Method with Mapping Function"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"Array.from([2,4,6], e => e + 2);\n// Output\n[4, 6, 8]\n"})}),"\n",(0,a.jsxs)(l.c,{children:[(0,a.jsx)(s.c,{value:"map-fn",label:"mapFn as arg",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"Array.from([2,4,6], e => e + 2);\n// Output\n[4, 6, 8]\n"})})}),(0,a.jsx)(s.c,{value:"array-map",label:"Array with mapFn",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"Array.from([2,4,6]).map(e => e + 2);\n// Output\n[4, 6, 8]\n"})})})]}),"\n",(0,a.jsxs)(n.h3,{id:"from-method-with-a-set---creating-unique-array-elements",children:[(0,a.jsx)(n.code,{children:"from()"})," Method with a ",(0,a.jsx)(n.code,{children:"Set"})," - creating unique array elements"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"let myArray = ['apple', 'bird', 'apple', 'chicken', 'egg', 'apple'];\nlet setArray = new Set(myArray);\n// Set(4) {'apple', 'bird', 'chicken', 'egg'}\n\nArray.from(setArray);\n// ['apple', 'bird', 'chicken', 'egg']  \n"})}),"\n",(0,a.jsx)(n.h3,{id:"creating-a-matrix",children:"Creating a Matrix"}),"\n",(0,a.jsxs)(l.c,{children:[(0,a.jsx)(s.c,{value:"default-val",label:"With Default value",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"let defaultValue = 0;\nArray.from({ length: 3 }, () => Array.from({ length: 3 }, () => defaultValue ));\n// Output: \n[ [ 0, 0, 0 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ]\n"})})}),(0,a.jsx)(s.c,{value:"inc-order",label:"inc. order",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"Array.from({ length: 3 }, () => Array.from({ length: 3 }, (_, i) => i + 1));\n// Output: \n[ [ 1, 2, 3 ], [ 1, 2, 3 ], [ 1, 2, 3 ] ]\n"})})})]}),"\n",(0,a.jsx)(n.h3,{id:"mapping-object-properties-into-arrays",children:"Mapping object properties into arrays"}),"\n",(0,a.jsxs)(l.c,{children:[(0,a.jsx)(s.c,{value:"obj-val",label:"Object value",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"const user = { name: 'Ram', age: 23, city: 'Chennai' };\nArray.from( Object.values(user) );\n// Output\n// Object.values(user); will also return the same below output. \n// Array.from() is not necessary here \n[ 'Ram', 23, 'Chennai' ]\n"})})}),(0,a.jsx)(s.c,{value:"obj-key",label:"Object key",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"const user = { name: 'Ram', age: 23, city: 'Chennai' };\nArray.from( Object.keys(user) );\n// Output\n[ 'name', 'age', 'city' ]\n"})})})]}),"\n",(0,a.jsxs)(n.h3,{id:"using-arrayfrom-in-javascript-with-a-this-value",children:["Using Array.from() in JavaScript with a ",(0,a.jsx)(n.code,{children:"this"})," Value"]}),"\n",(0,a.jsxs)(l.c,{children:[(0,a.jsx)(s.c,{value:"sample-1",label:"Sample 1",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:"showLineNumbers",children:"let doubler = {\n  factor: 2,\n  double(x) {\n    // highlight-next-line\n    return x * this.factor;\n    // `this` ref. to `doubler`\n  }\n};\n\nlet scores = [5, 6, 7];\n\nArray.from(scores, doubler.double, doubler);\n// 3rd arg. `doubler` will help fetch `factor`\n\n// Output\n[10, 12, 14]\n"})})}),(0,a.jsx)(s.c,{value:"sample-2",label:"Sample 2",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:"showLineNumbers",children:"let doubler = {\n  factor: 2,\n  double(x) {\n    // highlight-next-line\n    return x * 2;\n  }\n};\n\nlet scores = [5, 6, 7];\n\nArray.from(scores, doubler.double);\n\n// Output\n[10, 12, 14]\n"})})}),(0,a.jsx)(s.c,{value:"sample-3",label:"Sample 3",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:"showLineNumbers",children:"function double(x) {\n  // highlight-next-line\n  return x * 2;\n}\n\nlet scores = [5, 6, 7];\n\nArray.from(scores, double);\n\n// Output\n[10, 12, 14] \n"})})})]}),"\n",(0,a.jsx)(n.h3,{id:"array-from-an-iterable-object",children:"Array from an Iterable Object"}),"\n",(0,a.jsxs)(n.p,{children:["We can generate an array from any object that has a ",(0,a.jsx)(n.code,{children:"[symbol.iterator]"})," attribute because it also operates on iterable objects."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:"showLineNumbers",children:"let even = {\n  *[Symbol.iterator]() {\n    for (let i = 0; i < 10; i += 2) {\n      yield i;\n    }\n  }\n};\n\nArray.from(even);\n\n// Output\n[0, 2, 4, 6, 8]\n"})}),"\n",(0,a.jsx)(n.h3,{id:"map-to-an-array-in-javascript",children:"Map to an Array in JavaScript"}),"\n",(0,a.jsxs)(l.c,{children:[(0,a.jsx)(s.c,{value:"sample-1",label:"Sample 1",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:"showLineNumbers",children:"const map = new Map();\nmap.set('user1', 'John');\nmap.set('user2', 'Mottu');\nmap.set('user3', 'Patlu');\n\nArray.from(map);\n// we can use spread operator also as below\n[...map];\n\n// Output\n[ \n  ['user1', 'John'], \n  ['user2', 'Mottu'], \n  ['user3', 'Patlu'] \n]\n\nArray.from(map.values());\n// Output\n['John', 'Mottu', 'Patlu']\n"})})}),(0,a.jsx)(s.c,{value:"sample-2",label:"Sample 2",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:"showLineNumbers",children:"const map = new Map();\nmap.set('user1', 'John');\nmap.set('user2', 'Mottu');\nmap.set('user3', 'Patlu');\n\n// highlight-start\nArray.from(map, (el) => {\n  return { key: el[0], value: el[1] };\n});\n// highlight-end\n\n// We can use array destructuring to shorten the code above:\n// highlight-start\nArray.from(map, ([key, value]) => ({\n  key,\n  value,\n}));\n// highlight-end\n\n// Output\n[\n  { key: 'user1', value: 'John' },\n  { key: 'user2', value: 'Mottu' },\n  { key: 'user3', value: 'Patlu' }\n]\n"})})}),(0,a.jsx)(s.c,{value:"sample-3",label:"Sample 3",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:"showLineNumbers",children:"const map = new Map();\nmap.set('user1', 'John');\nmap.set('user2', 'Mottu');\nmap.set('user3', 'Patlu');\n\n// Map to an array of key-value objects\n// highlight-start\nArray.from(map, ([key, value]) => ({\n  [key]: value,\n}));\n// highlight-end\n\n// Output\n[\n  {user1: 'John'},\n  {user2: 'Mottu'},\n  {user3: 'Patlu'}\n]\n"})})})]}),"\n",(0,a.jsx)(n.h3,{id:"nodelist--htmlcollection-into-an-array",children:"NodeList & HTMLCollection into an Array"}),"\n",(0,a.jsxs)(l.c,{children:[(0,a.jsx)(s.c,{value:"html",label:"Html",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-html",children:'<body>\n  <p class="my-para">Hello world</p> \n  <p class="my-para">Hello Folks</p> \n  <p class="my-para">Hello budies</p> \n  <p class="my-para">Hello Man</p> \n</body>\n'})})}),(0,a.jsx)(s.c,{value:"js-part",label:"JS",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:"showLineNumbers",children:"// highlight-next-line\nconst htmlCollectionz = document.getElementsByClassName('my-para');\n// HTMLCollection(4)\xa0[p.my-para, p.my-para, p.my-para, p.my-para]\n\n// highlight-next-line\nconst nodeList = document.querySelectorAll('.my-para');\n// NodeList(4) [p.my-para, p.my-para, p.my-para, p.my-para]\n\n// converting into Array\n// highlight-start\nconst myArray = Array.from(nodeList);\nArray.from(htmlCollectionz);\n[...nodeList];\n[...htmlCollectionz];\n// highlight-end\n\n// Output\n[p.my-para, p.my-para, p.my-para, p.my-para]\n\nmyArray.forEach((el) => {\n  // Do something with the element\n});\n"})})})]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"getElementsByClassName()"})," and ",(0,a.jsx)(n.code,{children:"querySelectorAll()"})," are not arrays. They're ",(0,a.jsx)(n.strong,{children:"array-like objects"})," called an ",(0,a.jsx)(n.code,{children:"HTMLCollection"})," and ",(0,a.jsx)(n.code,{children:"NodeList"})," respectively. This means that it has some of the same properties and methods as an array, but it is not a true array."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"One difference"})," between an HTMLCollection (NodeList) and an array is that an HTMLCollection (NodeList) does not have a ",(0,a.jsx)(n.code,{children:"forEach()"})," method. So If you need to iterate over the elements in an HTMLCollection (NodeList), you can use a ",(0,a.jsx)(n.code,{children:"for loop"})," or convert into array using ",(0,a.jsx)(n.code,{children:"Array.from()"})]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(i.c,{color:"#25c2a0",children:" HTMLCollection vs NodeList"}),": If you want a ",(0,a.jsx)(n.strong,{children:"live collection"})," that automatically updates when there's a change in the document, then you should use an ",(0,a.jsx)(i.c,{color:"#C0C0C0",children:"HTMLCollection"}),". But if you prefer a ",(0,a.jsx)(n.strong,{children:"static collection"})," that doesn't update with a change in the document, then you should use a ",(0,a.jsx)(i.c,{color:"#C0C0C0",children:"NodeList"}),"."]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://www.freecodecamp.org/news/dom-manipulation-htmlcollection-vs-nodelist/",children:"HTMLCollection vs NodeList - What's the Difference?"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://ultimatecourses.com/blog/a-comprehensive-dive-into-nodelists-arrays-converting-nodelists-and-understanding-the-dom",children:"A comprehensive dive into NodeLists, Arrays, converting NodeLists and understanding the DOM"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://dev.to/subaash_b/7-amazing-use-cases-of-arrayfrom-method-in-javascript-50l",children:"7 Amazing use cases of Array.from() method in JavaScript"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://www.prepbytes.com/blog/javascript/javascript-array-from-method/",children:"JavaScript Array from() Method"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://www.codingbeautydev.com/blog/javascript-convert-map-to-array",children:"How to Convert a Map to an Array in JavaScript"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,t.M)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},87768:(e,n,r)=>{r.d(n,{c:()=>s});r(11504);var a=r(65456);const t={tabItem:"tabItem_Ymn6"};var l=r(17624);function s(e){let{children:n,hidden:r,className:s}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,a.c)(t.tabItem,s),hidden:r,children:n})}},61268:(e,n,r)=>{r.d(n,{c:()=>A});var a=r(11504),t=r(65456),l=r(53943),s=r(55592),i=r(95288),o=r(10632),c=r(27128),d=r(43216);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:r,attributes:a,default:t}}=e;return{value:n,label:r,attributes:a,default:t}}))}(r);return function(e){const n=(0,c.wn)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function m(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:r}=e;const t=(0,s.Uz)(),l=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,o._M)(l),(0,a.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(t.location.search);n.set(l,e),t.replace({...t.location,search:n.toString()})}),[l,t])]}function j(e){const{defaultValue:n,queryString:r=!1,groupId:t}=e,l=h(e),[s,o]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:l}))),[c,u]=p({queryString:r,groupId:t}),[j,f]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,l]=(0,d.IN)(r);return[t,(0,a.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:t}),g=(()=>{const e=c??j;return m({value:e,tabValues:l})?e:null})();(0,i.c)((()=>{g&&o(g)}),[g]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),f(e)}),[u,f,l]),tabValues:l}}var f=r(93664);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=r(17624);function x(e){let{className:n,block:r,selectedValue:a,selectValue:s,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.MV)(),d=e=>{const n=e.currentTarget,r=o.indexOf(n),t=i[r].value;t!==a&&(c(n),s(t))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;n=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;n=o[r]??o[o.length-1];break}}n?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.c)("tabs",{"tabs--block":r},n),children:i.map((e=>{let{value:n,label:r,attributes:l}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>o.push(e),onKeyDown:u,onClick:d,...l,className:(0,t.c)("tabs__item",g.tabItem,l?.className,{"tabs__item--active":a===n}),children:r??n},n)}))})}function b(e){let{lazy:n,children:r,selectedValue:l}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===l));return e?(0,a.cloneElement)(e,{className:(0,t.c)("margin-top--md",e.props.className)}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==l})))})}function v(e){const n=j(e);return(0,y.jsxs)("div",{className:(0,t.c)("tabs-container",g.tabList),children:[(0,y.jsx)(x,{...n,...e}),(0,y.jsx)(b,{...n,...e})]})}function A(e){const n=(0,f.c)();return(0,y.jsx)(v,{...e,children:u(e.children)},String(n))}},94384:(e,n,r)=>{r.d(n,{c:()=>t});r(11504);var a=r(17624);function t(e){let{children:n,color:r,highlight:t="bg",fontWeight:l="normal",textDecoration:s="none",fontStyle:i="normal",textAlign:o="left"}=e;return"fg"===t?(0,a.jsx)("span",{style:{color:r,fontWeight:l,textDecoration:s,fontStyle:i,textAlign:o},children:n}):"format"===t?(0,a.jsx)("div",{style:{textAlign:o,color:r,fontWeight:l,textDecoration:s,fontStyle:i},children:n}):"lightBg"===t?(0,a.jsx)("span",{style:{backgroundColor:r,borderRadius:"4px",color:"#4B0082",padding:"0.2rem",paddingTop:"0"},children:n}):(0,a.jsx)("span",{style:{backgroundColor:r,borderRadius:"4px",color:"#fff",padding:"0.2rem",paddingTop:"0"},children:n})}},4552:(e,n,r)=>{r.d(n,{I:()=>i,M:()=>s});var a=r(11504);const t={},l=a.createContext(t);function s(e){const n=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);