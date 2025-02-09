"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[8086],{82223:(e,r,n)=>{n.d(r,{A:()=>i});n(96540);var t=n(34164);const s={tabItem:"tabItem_Ymn6"};var o=n(74848);function i(e){let{children:r,hidden:n,className:i}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,t.A)(s.tabItem,i),hidden:n,children:r})}},72206:(e,r,n)=>{n.d(r,{A:()=>v});var t=n(96540),s=n(34164),o=n(80052),i=n(56347),a=n(35793),l=n(99025),c=n(4430),h=n(44148);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:r,children:n}=e;return(0,t.useMemo)((()=>{const e=r??function(e){return d(e).map((e=>{let{props:{value:r,label:n,attributes:t,default:s}}=e;return{value:r,label:n,attributes:t,default:s}}))}(n);return function(e){const r=(0,c.XI)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,n])}function p(e){let{value:r,tabValues:n}=e;return n.some((e=>e.value===r))}function g(e){let{queryString:r=!1,groupId:n}=e;const s=(0,i.W6)(),o=function(e){let{queryString:r=!1,groupId:n}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:r,groupId:n});return[(0,l.aZ)(o),(0,t.useCallback)((e=>{if(!o)return;const r=new URLSearchParams(s.location.search);r.set(o,e),s.replace({...s.location,search:r.toString()})}),[o,s])]}function m(e){const{defaultValue:r,queryString:n=!1,groupId:s}=e,o=u(e),[i,l]=(0,t.useState)((()=>function(e){let{defaultValue:r,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:r,tabValues:o}))),[c,d]=g({queryString:n,groupId:s}),[m,f]=function(e){let{groupId:r}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(r),[s,o]=(0,h.Dv)(n);return[s,(0,t.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:s}),x=(()=>{const e=c??m;return p({value:e,tabValues:o})?e:null})();(0,a.A)((()=>{x&&l(x)}),[x]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),f(e)}),[d,f,o]),tabValues:o}}var f=n(75251);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(74848);function w(e){let{className:r,block:n,selectedValue:t,selectValue:i,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),h=e=>{const r=e.currentTarget,n=l.indexOf(r),s=a[n].value;s!==t&&(c(r),i(s))},d=e=>{let r=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;r=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;r=l[n]??l[l.length-1];break}}r?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},r),children:a.map((e=>{let{value:r,label:n,attributes:o}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:t===r?0:-1,"aria-selected":t===r,ref:e=>{l.push(e)},onKeyDown:d,onClick:h,...o,className:(0,s.A)("tabs__item",x.tabItem,o?.className,{"tabs__item--active":t===r}),children:n??r},r)}))})}function y(e){let{lazy:r,children:n,selectedValue:o}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){const e=i.find((e=>e.props.value===o));return e?(0,t.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:i.map(((e,r)=>(0,t.cloneElement)(e,{key:r,hidden:e.props.value!==o})))})}function j(e){const r=m(e);return(0,b.jsxs)("div",{className:(0,s.A)("tabs-container",x.tabList),children:[(0,b.jsx)(w,{...r,...e}),(0,b.jsx)(y,{...r,...e})]})}function v(e){const r=(0,f.A)();return(0,b.jsx)(j,{...e,children:d(e.children)},String(r))}},132:(e,r,n)=>{n.d(r,{A:()=>s});n(96540);var t=n(74848);function s(e){let{children:r,color:n,highlight:s="bg",fontWeight:o="normal",textDecoration:i="none",fontStyle:a="normal",textAlign:l="left"}=e;return"fg"===s?(0,t.jsx)("span",{style:{color:n,fontWeight:o,textDecoration:i,fontStyle:a,textAlign:l},children:r}):"format"===s?(0,t.jsx)("div",{style:{textAlign:l,color:n,fontWeight:o,textDecoration:i,fontStyle:a},children:r}):"lightBg"===s?(0,t.jsx)("span",{style:{backgroundColor:n,borderRadius:"4px",color:"#4B0082",padding:"0.2rem",paddingTop:"0"},children:r}):(0,t.jsx)("span",{style:{backgroundColor:n,borderRadius:"4px",color:"#fff",padding:"0.2rem",paddingTop:"0"},children:r})}},95590:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>t,toc:()=>h});var t=n(77827),s=n(74848),o=n(28453),i=n(132);n(72206),n(82223);const a={slug:"what-is-cors-error",title:"Understanding and Resolving CORS Error",authors:"anand-tech",tags:["cors","preflight"]},l=void 0,c={authorsImageUrls:[void 0]},h=[{value:"<Highlight> What is CORS and CORS preflight? </Highlight>",id:"-what-is-cors-and-cors-preflight-",level:2},{value:"How to fix CORS error?",id:"how-to-fix-cors-error",level:2},{value:"Resouce:",id:"resouce",level:3}];function d(e){const r={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h2,{id:"-what-is-cors-and-cors-preflight-",children:(0,s.jsx)(i.A,{color:"#800031",highlight:"fg",fontWeight:"bold",children:" What is CORS and CORS preflight? "})}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"C"}),"ross-",(0,s.jsx)(r.strong,{children:"O"}),"rigin ",(0,s.jsx)(r.strong,{children:"R"}),"esource ",(0,s.jsx)(r.strong,{children:"S"}),"haring (",(0,s.jsx)(i.A,{color:"#25c2a0",children:"CORS"}),") is an HTTP-based security mechanism controlled and enforced by the client (web browser) that allows controlled access to resources located outside of a given domain."]}),"\n",(0,s.jsxs)(r.p,{children:["Generally, for security reasons, ",(0,s.jsx)(i.A,{highlight:"lightBg",color:"#D1FFBD",children:"browsers forbid requests that come in from cross-domain sources"}),". However, ",(0,s.jsx)(i.A,{highlight:"lightBg",color:"#D1FFBD",children:"there could be cases where you want to overcome this"})," and access cross-domain resources, and ",(0,s.jsx)(i.A,{highlight:"lightBg",color:"#D1FFBD",children:"CORS makes this possible"}),"."]}),"\n","\n",(0,s.jsxs)(r.p,{children:["There is another concept known as ",(0,s.jsx)(r.strong,{children:"S"}),"ame-",(0,s.jsx)(r.strong,{children:"O"}),"rigin ",(0,s.jsx)(r.strong,{children:"P"}),"olicy (",(0,s.jsx)(i.A,{color:"#25c2a0",children:"SOP"}),") which enables resource sharing on similar domains. The Same-Origin Policy was developed as a security mechanism for browsers to protect resources from malicious attacks. SOP allows resource sharing (data exchange) between two objects with the same origins."]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(i.A,{color:"#25c2a0",children:"CORS preflight"}),": When a browser sends a request to a server, it first sends an HTTP Options request. This is called a CORS preflight request. The server then responds with a list of allowed methods and headers. If the browser is allowed to make the actual request, it sends the actual request. If not, it shows an error and does not continue to send the main request."]}),"\n",(0,s.jsx)(r.h2,{id:"how-to-fix-cors-error",children:"How to fix CORS error?"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsxs)(i.A,{highlight:"lightBg",color:"#D1FFBD",children:["The fundamental idea of ",(0,s.jsx)(r.strong,{children:"fixing CORS"})," is to respond to ",(0,s.jsx)(r.strong,{children:"OPTIONS"})," requests sent from a client with proper headers."]})," There are many ways to start responding with the proper CORS. You can use a proxy server, or you can use middleware in your server"]}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsxs)(r.li,{children:["Configure your server: By default, if you are a server owner, you need to configure CORS responses in your server and this is the only way to address the issue properly. Add this header to your server ",(0,s.jsx)(r.code,{children:"'Access-Control-Allow-Origin': '*'"})," as below (simple express framework):"]}),"\n"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",metastring:'title="server.js"',children:'app.use((req, res, next) => {\n  // highlight-next-line\n  res.setHeader("Access-Control-Allow-Origin", "*"); // allow all domains\n  res.setHeader("Access-Control-Allow-Methods", "GET, PUT, DELETE");\n  res.setHeader("Access-Control-Allow-Headers", "Content-Type");\n\n  next();\n});\n'})}),"\n",(0,s.jsxs)(r.ol,{start:"2",children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["Proxy the API Request while using External Calls: You can check ",(0,s.jsx)(r.a,{href:"https://actionanand.github.io/wiki/docs/intro/#proxy-file-in-frontend-angular-react-etc---sample",children:"here"})," for more info"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"Set up a proxy server: Proxy server is a good solution if you don't have access to the service you intend to use.\nList of open-source CORS services that you can find on the internet:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://github.com/Freeboard/thingproxy",children:"https://github.com/Freeboard/thingproxy"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://github.com/bulletmark/corsproxy",children:"https://github.com/bulletmark/corsproxy"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://github.com/Rob--W/cors-anywhere",children:"https://github.com/Rob--W/cors-anywhere"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"Use a Serverless Function: Popular serverless functions include AWS Lambda, Azure Functions, and Google Cloud functions. These services allow you to get just enough server space to run a function or two, as you do not need much space to run a function that calls a web service to return some data. See the below AWS Lambda function example"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:"exports.handler = async (event) => {\ntry{\n// some code...\n    return {\n      statusCode: 200,\n      headers: {\n        'Content-Type': 'application/json',\n        'Access-Control-Allow-Headers':\n          'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',\n        'Access-Control-Allow-Methods': 'OPTIONS,POST',\n        'Access-Control-Allow-Credentials': true,\n        'Access-Control-Allow-Origin': '*',\n        'X-Requested-With': '*',\n      },\n      body: JSON stringified object,\n    };\n  } catch (error) {\n    console.log(error);\n    return {\n      statusCode: 500,\n      headers: {\n        'Content-Type': 'application/json',\n        'Access-Control-Allow-Headers':\n          'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',\n        'Access-Control-Allow-Methods': 'OPTIONS,POST',\n        'Access-Control-Allow-Credentials': true,\n        'Access-Control-Allow-Origin': '*',\n        'X-Requested-With': '*',\n      },\n      body: JSON.stringify({\n        name: error.name,\n        code: error.code,\n        message: error.message,\n      }),\n    };\n  }\n};\n"})}),"\n",(0,s.jsxs)(r.ol,{start:"5",children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"Install a browser extension"}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["Disable browser CORS checks: You can disable CORS checks in your browser completely. To disable CORS checks in Google Chrome, you need to start it with the ",(0,s.jsx)(r.code,{children:"--disable-web-security"})," and ",(0,s.jsx)(r.code,{children:"--user-data-dir"})," flags. By doing that, Google Chrome will not send CORS preflight requests and will not validate CORS headers."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-sh",children:'# Windows\nchrome.exe --user-data-dir="C://chrome-dev-disabled-security" --disable-web-security --disable-site-isolation-trials\n\n# macOS\nopen /Applications/Google\\ Chrome.app --args --user-data-dir="/var/tmp/chrome-dev-disabled-security" --disable-web-security --disable-site-isolation-trials\n\n# Linux\ngoogle-chrome --user-data-dir="~/chrome-dev-disabled-security" --disable-web-security --disable-site-isolation-trials\n'})}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"Open Run Command (win + R)"}),"\n",(0,s.jsx)(r.li,{children:"Paste the below command"}),"\n"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-sh",children:'  chrome.exe --user-data-dir="C:/Chrome dev session" --disable-web-security --disable-site-isolation-trials\n'})}),"\n",(0,s.jsxs)(r.ol,{start:"7",children:["\n",(0,s.jsxs)(r.li,{children:["How to test CORS?\nUsing a browser to test your CORS configuration might be a tedious task. You can use a tool like ",(0,s.jsx)(r.a,{href:"https://cors-test.codehappy.dev/",children:"CORS Tester"}),", ",(0,s.jsx)(r.a,{href:"https://www.test-cors.org/",children:"test-cors.org"}),", or, if you are familiar with the command line, you can use ",(0,s.jsx)(r.a,{href:"https://curl.se/",children:"curl"})," to test your CORS configuration."]}),"\n"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-sh",children:"curl -v -X OPTIONS https://simplelocalize.io/api/v1/translations\n"})}),"\n",(0,s.jsx)(r.h3,{id:"resouce",children:"Resouce:"}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://addons.mozilla.org/en-US/firefox/addon/foxyproxy-standard/",children:"FoxyProxy Standard for putty tunnel dynamic port usage"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://www.interserver.net/tips/kb/setup-ssh-tunneling-foxy-proxy-putty/",children:"How to setup SSH tunneling with foxy proxy and Putty?"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://www.willchatham.com/security/simple-ssh-tunneling-with-foxyproxy/",children:"Simple SSH Tunneling with FoxyProxy"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://www.adamfowlerit.com/2013/01/using-firefox-with-a-putty-ssh-tunnel-as-a-socks-proxy/",children:"Using Firefox with a Putty SSH tunnel as a SOCKS proxy"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://stackoverflow.com/questions/3102819/disable-same-origin-policy-in-chrome/42024918#42024918",children:"stack overflow"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://simplelocalize.io/blog/posts/what-is-cors/",children:"What is CORS?"})}),"\n"]})]})}function u(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>a});var t=n(96540);const s={},o=t.createContext(s);function i(e){const r=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(o.Provider,{value:r},e.children)}},77827:e=>{e.exports=JSON.parse('{"permalink":"/wiki/blog/what-is-cors-error","editUrl":"https://github.com/actionanand/wiki/blog/2024-10-08-what-is-cors-error.md","source":"@site/blog/2024-10-08-what-is-cors-error.md","title":"Understanding and Resolving CORS Error","description":"What is CORS and CORS preflight?","date":"2024-10-08T00:00:00.000Z","tags":[{"inline":true,"label":"cors","permalink":"/wiki/blog/tags/cors"},{"inline":true,"label":"preflight","permalink":"/wiki/blog/tags/preflight"}],"readingTime":3.59,"hasTruncateMarker":true,"authors":[{"name":"Anand Techie","title":"Software Developer, Frontend","url":"https://github.com/AnandRaja-tech","socials":{"github":"https://github.com/AnandRaja-tech"},"page":{"permalink":"/wiki/blog/authors/anand-tech"},"imageURL":"https://github.com/AnandRaja-tech.png","key":"anand-tech"}],"frontMatter":{"slug":"what-is-cors-error","title":"Understanding and Resolving CORS Error","authors":"anand-tech","tags":["cors","preflight"]},"unlisted":false,"prevItem":{"title":"Bash/Shell cheat sheet","permalink":"/wiki/blog/bash-shell-commands"},"nextItem":{"title":"Git Commands We Should Know","permalink":"/wiki/blog/git-commands"}}')}}]);