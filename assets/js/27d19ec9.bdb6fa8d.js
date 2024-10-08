"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[6098],{97448:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var s=i(17624),t=i(4552);const o={slug:"wsl2-and-cisco-vpn-issue-fix",title:"How to fix WSL2 & VPN issue",authors:"anand",tags:["wsl","wsl2","vpn","cisco AnyConnect"]},a=void 0,l={permalink:"/wiki/blog/wsl2-and-cisco-vpn-issue-fix",editUrl:"https://github.com/actionanand/wiki/blog/2024-02-12-wsl2-vpn-issue-fix.md",source:"@site/blog/2024-02-12-wsl2-vpn-issue-fix.md",title:"How to fix WSL2 & VPN issue",description:"How to fix WSL2 and Cisco Anyconnect VPN internet issue.",date:"2024-02-12T00:00:00.000Z",tags:[{inline:!0,label:"wsl",permalink:"/wiki/blog/tags/wsl"},{inline:!0,label:"wsl2",permalink:"/wiki/blog/tags/wsl-2"},{inline:!0,label:"vpn",permalink:"/wiki/blog/tags/vpn"},{inline:!0,label:"cisco AnyConnect",permalink:"/wiki/blog/tags/cisco-any-connect"}],readingTime:9.035,hasTruncateMarker:!0,authors:[{name:"Anand Raja",title:"Senior Software Engineer",url:"https://github.com/actionanand",socials:{x:"https://x.com/actionanand",linkedin:"https://www.linkedin.com/in/anand-ns/",github:"https://github.com/actionanand",newsletter:"https://stackoverflow.com/users/10907720/anand-raja"},description:"Passionate web developer, who\u2019s enthusiastic about writing clean and efficient codes and able to handle complex situation, keen to learn more & add value to the team.",page:{permalink:"/wiki/blog/authors/actionanand"},imageURL:"https://github.com/actionanand.png",key:"anand"}],frontMatter:{slug:"wsl2-and-cisco-vpn-issue-fix",title:"How to fix WSL2 & VPN issue",authors:"anand",tags:["wsl","wsl2","vpn","cisco AnyConnect"]},unlisted:!1,prevItem:{title:"Browser Engines - Digest",permalink:"/wiki/blog/browser-engines"},nextItem:{title:"JS Regex Helper",permalink:"/wiki/blog/js-regex-helper"}},r={authorsImageUrls:[void 0]},c=[{value:"The problem - some samples",id:"the-problem---some-samples",level:3}];function u(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"How to fix WSL2 and Cisco Anyconnect VPN internet issue."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["There is an issue with DNS Forwarding in ",(0,s.jsx)(n.em,{children:"WSL2"})," /",(0,s.jsx)(n.em,{children:"WSL1"})," when using VPN (see ",(0,s.jsx)(n.a,{href:"https://github.com/microsoft/WSL/issues/1350",children:"github Issue"}),"). Plus there is a issue with the ",(0,s.jsx)(n.em,{children:"Cisco AnyConnect"}),". So here is a workaround for these problems. Should work for Ubuntu and Debian."]}),"\n",(0,s.jsx)(n.h3,{id:"the-problem---some-samples",children:"The problem - some samples"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"sudo apt update"})," will display something similar below:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:"showLineNumbers",children:"Err:1 http://archive.ubuntu.com/ubuntu focal-updates InRelease\n  Temporary failure resolving 'archive.ubuntu.com'\nErr:2 http://archive.ubuntu.com/ubuntu focal-backports InRelease\n  Temporary failure resolving 'archive.ubuntu.com'\nReading package lists... Done\nW: Failed to fetch http://archive.ubuntu.com/ubuntu/dists/focal/InRelease  Temporary failure   resolving 'archive.ubuntu.com'\nW: Failed to fetch http://archive.ubuntu.com/ubuntu/dists/focal-updates/InRelease  Temporary   failure resolving 'archive.ubuntu.com'\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"git pull"})," will display something similar below:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"// code-block-error-line\nfatal: unable to access 'https://github.com/actionanand/wiki.git/': Could not resolve host: github.com\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ping google.com"})," will display something similar below:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"ping: google.com: Temporary failure in name resolution\n"})})]})}function d(e={}){const{wrapper:n}={...(0,t.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},4552:(e,n,i)=>{i.d(n,{I:()=>l,M:()=>a});var s=i(11504);const t={},o=s.createContext(t);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);