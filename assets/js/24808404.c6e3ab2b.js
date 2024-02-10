"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[9760],{8928:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>h,contentTitle:()=>c,default:()=>x,frontMatter:()=>l,metadata:()=>d,toc:()=>a});var r=s(7624),t=s(2172),i=s(4384);const l={slug:"js-regex-helper",title:"JS Regex Helper",authors:"anand-tech",description:"Regex - short Regular Expression",tags:["regex"]},c=void 0,d={permalink:"/wiki/blog/js-regex-helper",editUrl:"https://github.com/actionanand/wiki/blog/2024-02-09-js-regex-helper.mdx",source:"@site/blog/2024-02-09-js-regex-helper.mdx",title:"JS Regex Helper",description:"Regex - short Regular Expression",date:"2024-02-09T00:00:00.000Z",formattedDate:"February 9, 2024",tags:[{label:"regex",permalink:"/wiki/blog/tags/regex"}],readingTime:9.06,hasTruncateMarker:!0,authors:[{name:"Anand Techie",title:"Software Developer, Frontend",url:"https://github.com/AnandRaja-tech",imageURL:"https://github.com/AnandRaja-tech.png",key:"anand-tech"}],frontMatter:{slug:"js-regex-helper",title:"JS Regex Helper",authors:"anand-tech",description:"Regex - short Regular Expression",tags:["regex"]},unlisted:!1,nextItem:{title:"Which came first?",permalink:"/wiki/blog/the-chicken-or-the-egg"}},h={authorsImageUrls:[void 0]},a=[{value:"1. General view",id:"1-general-view",level:3},{value:"2. Modes or Flags in regex",id:"2-modes-or-flags-in-regex",level:3},{value:"3. Metacharacters",id:"3-metacharacters",level:3},{value:"4. Range sets",id:"4-range-sets",level:3},{value:"5. Negative sets",id:"5-negative-sets",level:3},{value:"6. Shorthand for sets",id:"6-shorthand-for-sets",level:3},{value:"7. Repetition Metacharacters",id:"7-repetition-metacharacters",level:3},{value:"8. Greedy Expression vs Lazy",id:"8-greedy-expression-vs-lazy",level:3},{value:"9. Grouping &amp; Alternation",id:"9-grouping--alternation",level:3},{value:"10. Anchors",id:"10-anchors",level:3},{value:"11. Boundaries",id:"11-boundaries",level:3},{value:"12. Backreferences",id:"12-backreferences",level:3},{value:"13. Positive &amp; Negative Lookaheads",id:"13-positive--negative-lookaheads",level:3},{value:"14. Positive &amp; Negative Lookbehind",id:"14-positive--negative-lookbehind",level:3},{value:"15. Examples",id:"15-examples",level:3},{value:"Usefull online Regex validator",id:"usefull-online-regex-validator",level:3},{value:"Resources",id:"resources",level:3}];function o(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["A ",(0,r.jsx)(i.c,{color:"#25c2a0",children:" regular expression "}),", also known as ",(0,r.jsx)(i.c,{color:"#1877F2",children:" regex "})," or ",(0,r.jsx)(i.c,{color:"#1877F2",children:" regexp "}),", is a sequence of characters that define a search pattern. It can be used to search, edit, or manipulate text and data."]}),"\n",(0,r.jsxs)(n.p,{children:["In JavaScript, regular expressions are created using the ",(0,r.jsx)(i.c,{color:"#ff1b68",children:" RegExp object "}),". The RegExp object has a number of methods that can be used to search for and manipulate strings."]}),"\n",(0,r.jsx)(n.p,{children:"Here are some examples of regular expressions in JavaScript:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:"showLineNumbers",children:'// Find all occurrences of the letter "a" in a string\nconst regex = /a/g;\nconst string = "This is a string.";\nconst matches = regex.exec(string);\n\n// Replace all occurrences of the letter "a" with the letter "e" in a string\nconst regex = /a/g;\nconst string = "This is a string.";\nconst newString = string.replace(regex, "e");\n\n// Check if a string contains a particular pattern\nconst regex = /^abc/g;\nconst string = "abc123";\nconst match = regex.test(string);\n'})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(i.c,{color:"#25c2a0",children:" Regex "})," short Regular Expression"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"1-general-view",children:"1. General view"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Expressions need to be surrounded by forward slashes - Eg. ",(0,r.jsx)(n.code,{children:"/expression/"})]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"2-modes-or-flags-in-regex",children:"2. Modes or Flags in regex"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Standard - ",(0,r.jsx)(n.code,{children:"/expression/"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Case-insensitive - ",(0,r.jsx)(n.code,{children:"/expression/i"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["With this flag the search is case-insensitive: no difference between ",(0,r.jsx)(n.strong,{children:"A"})," and ",(0,r.jsx)(n.strong,{children:"a"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Dot-matches-all - ",(0,r.jsx)(n.code,{children:"/expression/s"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Enables ",(0,r.jsx)(n.strong,{children:"dotall"})," mode, that allows a dot ",(0,r.jsx)(n.code,{children:"."})," to match newline character ",(0,r.jsx)(n.code,{children:"\\n"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["By default, a dot doesn\u2019t match the newline character ",(0,r.jsx)(n.code,{children:"\\n"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["For instance, the regexp ",(0,r.jsx)(n.code,{children:"A.B"})," matches A, and then B with any character between them, except a newline ",(0,r.jsx)(n.code,{children:"\\n"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"alert('A\\nB'.match(/A.B/)); // null (no match)\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["There are many situations when we\u2019d like a dot to mean literally ",(0,r.jsx)(n.strong,{children:"any character"}),", newline included."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["That\u2019s what flag ",(0,r.jsx)(n.code,{children:"s"})," does. If a regexp has it, then a dot ",(0,r.jsx)(n.code,{children:"."})," matches literally any character:"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"alert('A\\nB'.match(/A.B/s)); // A\\nB (match!)\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Multiline - ",(0,r.jsx)(n.code,{children:"/expression/m"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Global - ",(0,r.jsx)(n.code,{children:"/expression/g"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"With this flag the search looks for all matches, without it \u2013 only the first match is returned"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"3-metacharacters",children:"3. Metacharacters"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["They're characters with special meaning the most common metacharacters we use in expressions are ",(0,r.jsx)(n.code,{children:". + - * $ {} () [] ! : = ^ | "})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Escaping Metacharacters:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Sometmes we need to escape our symbols if they look the same as the text we want to find,"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["for example, As you can see here ",(0,r.jsx)(n.code,{children:"/4.500/ "})," these match will cause issues if we need to find ",(0,r.jsx)(n.code,{children:"4.500"})," since the dot its the wildecard but what we need is the literal dot, we need to do something like the below."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"/4\\.500/"})," we use a back slash here to escape the wildcard making it a literal character now, meaning its just a dot."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"4-range-sets",children:"4. Range sets"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"[A-Z]"})," matches any uppercase character from A to Z"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"[a-z]"})," matches any lowercase character from A to Z"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"[0-9]"})," matches any digit character from 0 to 9"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"[A-Za-z0-9]"})," we can also combine them"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"/au[acdt]o/"})," matches ",(0,r.jsx)(n.code,{children:"auto"})," - third character should be either one from the set ",(0,r.jsx)(n.code,{children:"[acdt]"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"5-negative-sets",children:"5. Negative sets"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"[^abc]"})," match anything except ",(0,r.jsx)(n.code,{children:"abc"})," or what is after the caret inside the brackets. We are still matching one character here, not group of all character."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"6-shorthand-for-sets",children:"6. Shorthand for sets"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{style:{textAlign:"center"},children:(0,r.jsx)(n.strong,{children:"Code"})}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:(0,r.jsx)(n.strong,{children:"Description"})}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:(0,r.jsx)(n.strong,{children:"Equivalent"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"\\d"}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"Digit"}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"[0-9]"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"\\D"}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"Non digit"}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"[^0-9]"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"\\s"}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"Any tab carriage return or new line"}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"[ \\t\\r\\n]"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"\\S"}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"No whitespace of any kind"}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"[^ \\t\\r\\n]"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"\\w"}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"Word characters including underscore & digits, NO Hyphen(-)"}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"[_A-Za-z0-9]"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"\\W"}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"No word characters"}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"[ ^_A-Za-z0-9]"})]})]})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"/\\w\\w\\w/"})," matches 123, abc, and _1Z (i.e, 3 word characters)"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"/\\d\\d\\d/"})," matches 123 bot not car (i.e, 3 digits)"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"7-repetition-metacharacters",children:"7. Repetition Metacharacters"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Quantifier"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"center"},children:(0,r.jsx)(n.code,{children:"\\*"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"Matches the previous element zero or more times."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"center"},children:(0,r.jsx)(n.code,{children:"+"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"Matches the previous element one or more times."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"center"},children:(0,r.jsx)(n.code,{children:"?"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"Matches the previous element zero or one time."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"center"},children:(0,r.jsx)(n.code,{children:"{n}"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"Matches the previous element exactly n times."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"center"},children:(0,r.jsx)(n.code,{children:"{n,}"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"Matches the previous element at least n times."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"center"},children:(0,r.jsx)(n.code,{children:"{n,m}"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"Matches the previous element at least n times, but no more than m times."})]})]})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"/cars*/"})," - matches car, cars and carsssssssssss and many more"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"/\\d\\d\\d*/"})," - matches two digits or more (remember this is starts from zero to more)"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"/cars+/"})," - does not match car since it needs to be more more than 1 character ,E.G, cars or carsssssssssss"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"/\\d\\d\\d+/"})," - matches three digits or more (remember this is starts from 1 to more)"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"/cars?/"})," - the (s) its optional meaning it matches car and cars not carssssssss"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"/\\d{1}/"})," - matches 1 single digits"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"/\\d{1,}/"})," - matches 1 or more digits"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"/\\d{1,2}/"})," - matches 1 to 2 digits"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"8-greedy-expression-vs-lazy",children:"8. Greedy Expression vs Lazy"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Greedy ",(0,r.jsx)(n.code,{children:"\\w+\\d+\\w+"})," it maches ",(0,r.jsx)(n.code,{children:"file1_export"})," from ",(0,r.jsx)(n.code,{children:"file1_export.sql"})," since it tries to math as much as possible"]}),"\n",(0,r.jsxs)(n.li,{children:["Lazy ",(0,r.jsx)(n.code,{children:"\\w+\\d+\\w+?"})," , this matches ",(0,r.jsx)(n.code,{children:"file1_"})," from ",(0,r.jsx)(n.code,{children:"file1_export.sql"}),' why is gives up when it find the first word character at the end. (Notice we have a question mark at the end of the w "?" )']}),"\n",(0,r.jsxs)(n.li,{children:["You can use the lazy format in these quantifiers ",(0,r.jsx)(n.code,{children:"_, +. {} ?"}),", you would have something likes this ",(0,r.jsx)(n.code,{children:"_?, +?, {}?, ??"})]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"9-grouping--alternation",children:"9. Grouping & Alternation"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Grouping:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"/(cde)+/"})," matches ",(0,r.jsx)(n.code,{children:"cde"})," and ",(0,r.jsx)(n.code,{children:"cdecdecdecde"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"/(super)?market/"})," matches ",(0,r.jsx)(n.code,{children:"market"})," and ",(0,r.jsx)(n.code,{children:"supermarket"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"(super)market"})," matches ",(0,r.jsx)(n.code,{children:"supermarket"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Alternation"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"super|market"})," matches ",(0,r.jsx)(n.code,{children:"super"})," or ",(0,r.jsx)(n.code,{children:"market"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"super(market|bowl)"})," matches ",(0,r.jsx)(n.code,{children:"supermarket"})," or ",(0,r.jsx)(n.code,{children:"superbowl"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"\\(12|ab|#%){8}\\"})," this matches ",(0,r.jsx)(n.code,{children:"12ab#%12ab#%12ab"}),"\nThe code above might seen confusing but was happening is that the sets of characters are repeating until they reach eight times in sets of two. Notice we are wrapping the symbols in parenthesis, basically groping then and then applying the quantifier."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"10-anchors",children:"10. Anchors"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Metacharacter"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"^"}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"The match must start at the beginning of the string or line."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"$"}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"The match must occur at the end of the string or before \\n at the end of the line or string."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"\\A"}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"The match must occur at the start of the string."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"\\Z"}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"The match must occur at the end of the string or before \\n at the end of the string"})]})]})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"\\A"})," and ",(0,r.jsx)(n.code,{children:"\\Z"})," are supported by PHP, Python, Perl, Java and .NET . Maybe other engines will start supporting it the future."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["the",(0,r.jsx)(n.code,{children:" ^"})," and ",(0,r.jsx)(n.code,{children:"$"})," support ",(0,r.jsx)(n.code,{children:"multiline mode"}),", meaning they can match not just then end of string but the end of lines. With ",(0,r.jsx)(n.code,{children:"\\A"})," and ",(0,r.jsx)(n.code,{children:"\\Z"})," you cannot do that."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"/^\\./ "})," this matches the first dot on ",(0,r.jsx)(n.code,{children:".car."})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"/\\.$/"})," this matches the last dot on ",(0,r.jsx)(n.code,{children:".car. "})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"11-boundaries",children:"11. Boundaries"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"\\b\\w+\\b"})," matches ",(0,r.jsx)(n.code,{children:"my car is black"}),", this will be default behavior without ",(0,r.jsx)(n.code,{children:"\\b"})," in this case, so every beginning and end of the word is matched."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"\\B\\w+\\B"})," matches ",(0,r.jsx)(n.code,{children:"a"})," from ",(0,r.jsx)(n.code,{children:"car"})," and ",(0,r.jsx)(n.code,{children:"lack"})," from ",(0,r.jsx)(n.code,{children:"black"}),", so letters that are NOT the beginning or end of words are matched here."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"12-backreferences",children:"12. Backreferences"}),"\n",(0,r.jsx)(n.p,{children:"Grouped expressions that are capture for later usage"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"/super(market)/"})," matches ",(0,r.jsx)(n.code,{children:"supermarket"})," and stores ",(0,r.jsx)(n.code,{children:"market"}),". So if we wanted to use this store value we would use numbers from 1-9 for example ",(0,r.jsx)(n.code,{children:"\\1"}),"."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"super(market) \\1"})," matches ",(0,r.jsx)(n.code,{children:"supermarket market"})," -> ",(0,r.jsx)(n.code,{children:"\\1"})," means ",(0,r.jsx)(n.code,{children:"market"})," here."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"super(market) \\1 super(bowl) \\2"})," matches ",(0,r.jsx)(n.code,{children:"supermarket market superbowl bowl"})]}),"\n",(0,r.jsx)(n.li,{children:"As you can see we are using the numbers from left to right in order to use the data stored int the parenthesis."}),"\n",(0,r.jsxs)(n.li,{children:["since capturing happens by default it will eat up the spaces 1-9 that we have, and can slow down our app, to turn this off we just use question mark followed by a colon in the parenthesis like so.. ",(0,r.jsx)(n.code,{children:"super(?:market) "})]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:"showLineNumbers",children:"let phrase = 'Anand Raja';\nlet pattern = /(\\w+)\\s(\\w+)/;\n\nlet newPhrase = phrase.replace(pattern, '$1');\nconsole.log('First: ' + newPhrase);\n// Output will be first parenthesis's data\n// First: Anand\n\nnewPhrase = phrase.replace(pattern, '$2');\nconsole.log('Second: ' + newPhrase);\n// Output will be second parenthesis's data\n// Second: Raja\n\npattern = /(?:\\w+)\\s(\\w+)/;\nnewPhrase = phrase.replace(pattern, '$1');\nconsole.log('Third: ' + newPhrase);\n// Output will be second parenthesis's data as we're turning off capturing for first parenthesis\n// Third: Raja\n\npattern = /(\\w+)\\s(\\w+)\\s\\1/;\nphrase = `love is love`; // \\1 denotes love\nnewPhrase = phrase.replace(pattern, '$1');\nconsole.log('Fourth: ' + newPhrase);\n// Output will be first parenthesis's data\n// Fourth: love\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"13-positive--negative-lookaheads",children:"13. Positive & Negative Lookaheads"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"super(?=market)"})," if ",(0,r.jsx)(n.code,{children:"super"})," is preceded by ",(0,r.jsx)(n.code,{children:"market"}),", match it, this will match ",(0,r.jsx)(n.code,{children:"super"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["if ",(0,r.jsx)(n.code,{children:"supermarket superbowl"})," is phrase to be checked, ",(0,r.jsx)(n.code,{children:"super"})," from ",(0,r.jsx)(n.code,{children:"supermarket"})," will only be matched. -> meaning market should be preceded by super(i.e, super with market)"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["To do the apposite we do this, ",(0,r.jsx)(n.code,{children:"super(?!market)"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["if ",(0,r.jsx)(n.code,{children:"supermarket superbowl"})," is phrase to be checked, ",(0,r.jsx)(n.code,{children:"super"})," from ",(0,r.jsx)(n.code,{children:"superbowl"})," will only be matched. -> meaning market should not be there after super(i.e, super without market)"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"14-positive--negative-lookbehind",children:"14. Positive & Negative Lookbehind"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"(?<=super)market"})," matches ",(0,r.jsx)(n.code,{children:"market"})," in ",(0,r.jsx)(n.code,{children:"supermarket"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"(?<!market)super"})," matches ",(0,r.jsx)(n.code,{children:"super"})," in ",(0,r.jsx)(n.code,{children:"supermarket"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Lookbehind is not supported in non-V8 browsers, such as Safari, Internet Explorer"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"The syntaxes are:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Positive lookbehind: ",(0,r.jsx)(n.code,{children:"(?<=Y)X"}),", matches ",(0,r.jsx)(n.code,{children:"X"}),", but only if there\u2019s ",(0,r.jsx)(n.code,{children:"Y"})," before it."]}),"\n",(0,r.jsxs)(n.li,{children:["Negative lookbehind: ",(0,r.jsx)(n.code,{children:"(?<!Y)X"}),", matches ",(0,r.jsx)(n.code,{children:"X"}),", but only if there\u2019s no ",(0,r.jsx)(n.code,{children:"Y"})," before it."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"15-examples",children:"15. Examples"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Postal code to choose either 4 or 5 digits in the begining, or along with that dash and another 4 digits at the end (say ",(0,r.jsx)(n.code,{children:"34216-6501"}),")"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-regex",children:"  /^\\d{4,5}(-\\d{4})?$/\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Password with altest one uppercase, lowercase, and one special character from the list (!,@,$,#,-,^,%,&,*) with min. 8 and max. 13 characters"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-regex",children:"  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[!@$#\\-\\^%&*])\\S{8,13}$/\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The below regex will match ",(0,r.jsx)(n.code,{children:"27-11-1996"})," or ",(0,r.jsx)(n.code,{children:"05/10/2023"})," or ",(0,r.jsx)(n.code,{children:"7-1-1954"})," or ",(0,r.jsx)(n.code,{children:"7-03-1954"}),". One disadvantage is year can be any 4 digits."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-regex",children:"  /^(0?[1-9]|[1-2][0-9]|3[0-1])[/-](0?[1-9]|1[0-2])[/-]\\d{4}$/\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Select all html tags except [a, ul, li, ol]"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-regex",children:"  /<(?!\\/?(a|ul|li|ol)(?=>|\\s?.*>))\\/?.*?>/g\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Select all anchor tags(a tag) in html"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-regex",children:"  /<a.*?>|<\\/a>/g\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"How to select all html tags"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-regex",children:"  /<[^>]*>/g\n"})}),"\n",(0,r.jsx)(n.h3,{id:"usefull-online-regex-validator",children:"Usefull online Regex validator"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://regex101.com/",children:"Regex101"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.regexpal.com/",children:"Regex Pal"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/rpayanm/regexpal",children:"Regex Pal github source code"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/geongeorge/i-hate-regex",children:"I hate Regex source code - Vue"})}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"resources",children:"Resources"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://stackoverflow.com/questions/15491894/regex-to-validate-date-formats-dd-mm-yyyy-dd-mm-yyyy-dd-mm-yyyy-dd-mmm-yyyy",children:"Regex to validate date formats dd/mm/YYYY, dd-mm-YYYY, dd.mm.YYYY, dd mmm YYYY, dd-mmm-YYYY, dd/mmm/YYYY, dd.mmm.YYYY with Leap Year Support"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://javascript.info/regexp-introduction",children:"Javascript info - regex"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/ziishaned/learn-regex",children:"Learn Regex - github"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.freecodecamp.org/news/regular-expressions-for-beginners/",children:"How to Use Regular Expressions in JavaScript \u2013 Tutorial for Beginners"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.programiz.com/javascript/regex",children:"JavaScript Regex - Programiz"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://builtin.com/software-engineering-perspectives/javascript-regex",children:"A Guide to Regular Expressions (Regex) in JavaScript"})}),"\n"]})]})}function x(e={}){const{wrapper:n}={...(0,t.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},4384:(e,n,s)=>{s.d(n,{c:()=>t});s(1504);var r=s(7624);function t(e){let{children:n,color:s}=e;return(0,r.jsx)("span",{style:{backgroundColor:s,borderRadius:"4px",color:"#fff",padding:"0.2rem",paddingTop:"0"},children:n})}},2172:(e,n,s)=>{s.d(n,{I:()=>c,M:()=>l});var r=s(1504);const t={},i=r.createContext(t);function l(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);