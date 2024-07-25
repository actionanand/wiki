"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[2795],{52680:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>a});var o=s(17624),i=s(4552);const r={slug:"wsl2-and-cisco-vpn-issue-fix",title:"How to fix WSL2 & VPN issue",authors:"anand",tags:["wsl","wsl2","vpn","cisco AnyConnect"]},l=void 0,t={permalink:"/wiki/blog/wsl2-and-cisco-vpn-issue-fix",editUrl:"https://github.com/actionanand/wiki/blog/2024-02-12-wsl2-vpn-issue-fix.md",source:"@site/blog/2024-02-12-wsl2-vpn-issue-fix.md",title:"How to fix WSL2 & VPN issue",description:"How to fix WSL2 and Cisco Anyconnect VPN internet issue.",date:"2024-02-12T00:00:00.000Z",tags:[{inline:!0,label:"wsl",permalink:"/wiki/blog/tags/wsl"},{inline:!0,label:"wsl2",permalink:"/wiki/blog/tags/wsl-2"},{inline:!0,label:"vpn",permalink:"/wiki/blog/tags/vpn"},{inline:!0,label:"cisco AnyConnect",permalink:"/wiki/blog/tags/cisco-any-connect"}],readingTime:9.035,hasTruncateMarker:!0,authors:[{name:"Anand Raja",title:"Senior Software Engineer",url:"https://github.com/actionanand",imageURL:"https://github.com/actionanand.png",key:"anand"}],frontMatter:{slug:"wsl2-and-cisco-vpn-issue-fix",title:"How to fix WSL2 & VPN issue",authors:"anand",tags:["wsl","wsl2","vpn","cisco AnyConnect"]},unlisted:!1,prevItem:{title:"Browser Engines - Digest",permalink:"/wiki/blog/browser-engines"},nextItem:{title:"JS Regex Helper",permalink:"/wiki/blog/js-regex-helper"}},c={authorsImageUrls:[void 0]},a=[{value:"The problem - some samples",id:"the-problem---some-samples",level:3},{value:"Workaround (new - automatic)",id:"workaround-new---automatic",level:2},{value:"Workaround (old manual)",id:"workaround-old-manual",level:2},{value:"DNS Resolution",id:"dns-resolution",level:3},{value:"Network connection",id:"network-connection",level:3},{value:"Workaround (WSL1) - Simplified",id:"workaround-wsl1---simplified",level:2},{value:"Hot Reload not working",id:"hot-reload-not-working",level:2},{value:"Fix for angular running on wsl2",id:"fix-for-angular-running-on-wsl2",level:3},{value:"Bonus",id:"bonus",level:2},{value:"Not able to download RAW files too?",id:"not-able-to-download-raw-files-too",level:3}];function d(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"How to fix WSL2 and Cisco Anyconnect VPN internet issue."}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["There is an issue with DNS Forwarding in ",(0,o.jsx)(n.em,{children:"WSL2"})," /",(0,o.jsx)(n.em,{children:"WSL1"})," when using VPN (see ",(0,o.jsx)(n.a,{href:"https://github.com/microsoft/WSL/issues/1350",children:"github Issue"}),"). Plus there is a issue with the ",(0,o.jsx)(n.em,{children:"Cisco AnyConnect"}),". So here is a workaround for these problems. Should work for Ubuntu and Debian."]}),"\n",(0,o.jsx)(n.h3,{id:"the-problem---some-samples",children:"The problem - some samples"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"sudo apt update"})," will display something similar below:"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",metastring:"showLineNumbers",children:"Err:1 http://archive.ubuntu.com/ubuntu focal-updates InRelease\n  Temporary failure resolving 'archive.ubuntu.com'\nErr:2 http://archive.ubuntu.com/ubuntu focal-backports InRelease\n  Temporary failure resolving 'archive.ubuntu.com'\nReading package lists... Done\nW: Failed to fetch http://archive.ubuntu.com/ubuntu/dists/focal/InRelease  Temporary failure   resolving 'archive.ubuntu.com'\nW: Failed to fetch http://archive.ubuntu.com/ubuntu/dists/focal-updates/InRelease  Temporary   failure resolving 'archive.ubuntu.com'\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"git pull"})," will display something similar below:"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"// code-block-error-line\nfatal: unable to access 'https://github.com/actionanand/wiki.git/': Could not resolve host: github.com\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"ping google.com"})," will display something similar below:"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"ping: google.com: Temporary failure in name resolution\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Trying ",(0,o.jsx)(n.code,{children:"sudo apt update"}),", ",(0,o.jsx)(n.code,{children:"ping google.com"}),", ",(0,o.jsx)(n.code,{children:"git pull"}),", etc on ",(0,o.jsx)(n.code,{children:"wsl2"})," will fail when connected to Cisco Anyconnect VPN but without vpn it works fine. The problem is when you are connected to anyconnect(vpn), wsl fails to resolve the DNS."]}),"\n",(0,o.jsx)(n.h2,{id:"workaround-new---automatic",children:"Workaround (new - automatic)"}),"\n",(0,o.jsxs)(n.p,{children:["This solution is automatic and was created by ",(0,o.jsx)(n.a,{href:"https://www.frakkingsweet.com/automatic-dns-configuration-with-wsl-and-anyconnect-client/",children:"EdwardCooke"}),". This is just the first part of his solution updating ",(0,o.jsx)(n.code,{children:"resolv.conf"})," when starting WSL."]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Re-enable auto generation of ",(0,o.jsx)(n.code,{children:"resolv.conf"})," (if disabled) by commenting out (#)"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo nano /etc/wsl.conf\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"#[network]\n#generateResolvConf = false\n"})}),"\n",(0,o.jsxs)(n.ol,{start:"2",children:["\n",(0,o.jsx)(n.li,{children:"Create the script"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"sudo nano /bin/vpn-dns.sh\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:'#!/bin/bash\n\necho "Getting current DNS servers, this takes a couple of seconds"\n\n/mnt/c/Windows/System32/WindowsPowerShell/v1.0/powershell.exe -Command \'\n$ErrorActionPreference="SilentlyContinue"\nGet-NetAdapter -InterfaceDescription "Cisco AnyConnect*" | Get-DnsClientServerAddress | Select -ExpandProperty ServerAddresses\nGet-NetAdapter | ?{-not ($_.InterfaceDescription -like "Cisco AnyConnect*") } | Get-DnsClientServerAddress | Select -ExpandProperty ServerAddresses\n\' | \\\n        awk \'BEGIN { print "# Generated by vpn fix func on", strftime("%c"); print } { print "nameserver", $1 }\' | \\\n        tr -d \'\\r\' > /etc/resolv.conf\nclear\n'})}),"\n",(0,o.jsxs)(n.ol,{start:"3",children:["\n",(0,o.jsx)(n.li,{children:"Make it executable/run as sudo"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:'sudo chmod +x /bin/vpn-dns.sh\necho "$(whoami) ALL=(ALL) NOPASSWD: /bin/vpn-dns.sh" | sudo tee /etc/sudoers.d/010-$(whoami)-vpn-dns\n'})}),"\n",(0,o.jsxs)(n.ol,{start:"4",children:["\n",(0,o.jsx)(n.li,{children:"Make it run on wsl startup"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:'echo "sudo /bin/vpn-dns.sh" | sudo tee /etc/profile.d/vpn-dns.sh\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Now restart the wsl & try ",(0,o.jsx)(n.code,{children:"wget google.com"})," or ",(0,o.jsx)(n.code,{children:"ping google.com"})]}),"\n",(0,o.jsxs)(n.ol,{start:"5",children:["\n",(0,o.jsx)(n.li,{children:"If you don't want to auto run (step 4), You can also run it manually (You've to do every time)"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"sudo /bin/vpn-dns.sh\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://superuser.com/questions/1630487/no-internet-connection-ubuntu-wsl-while-vpn",children:"For more details - StackOverflow"})}),"\n",(0,o.jsx)(n.h2,{id:"workaround-old-manual",children:"Workaround (old manual)"}),"\n",(0,o.jsx)(n.p,{children:"Internet connection and DNS routing are broken from WSL2 instances, when some VPNs are active. The workaround breaks down into two steps:"}),"\n",(0,o.jsx)(n.h3,{id:"dns-resolution",children:"DNS Resolution"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Having the Cisco Anyconnect VPN connected, you've to kick start powershell as Admin. Then fire the following commands to get all the available DNS/nameservers. Kindly take these DNS/nameservers down as we need them in later stage."}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-powershell",children:"Get-DnsClientServerAddress -AddressFamily IPv4 | Select-Object -ExpandProperty ServerAddresses\n"})}),"\n",(0,o.jsxs)(n.ol,{start:"2",children:["\n",(0,o.jsx)(n.li,{children:"Next you can fire the folowing commands to get all the available search domains that will be needed later with the nameservers above."}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-powershell",children:"Get-DnsClientGlobalSetting | Select-Object -ExpandProperty SuffixSearchList\n"})}),"\n",(0,o.jsxs)(n.ol,{start:"3",children:["\n",(0,o.jsxs)(n.li,{children:["When the VPN is active, the autogenerated ",(0,o.jsx)(n.code,{children:"/etc/resolv.conf"})," does not work. So the list of nameservers must be manually built to include some default DNS Name Servers and the DNS from the VPN."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["First, disable automatically generating ",(0,o.jsx)(n.code,{children:"/etc/resolv.conf"}),". And proceed in ",(0,o.jsx)(n.code,{children:"wsl2"})," as described below:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"  sudo unlink /etc/resolv.conf # this will unlink the default wsl2 resolv.conf\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",metastring:"title='/etc/resolv.conf'",children:"  # This config will prevent wsl2 from overwritting the resolve.conf file everytime you start wsl2\n  cat <<EOF | sudo tee -a /etc/wsl.conf\n  [network]\n  generateResolvConf = false\n  EOF\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Next, manually add the corportate DNS Server as the first ",(0,o.jsx)(n.code,{children:"nameserver"})," in ",(0,o.jsx)(n.code,{children:"/etc/resolv.conf"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",metastring:"title='/etc/resolv.conf'",children:"cat <<EOF | sudo tee -a /etc/resolv.conf\nnameserver 10.50... # The company DNS/nameserver from the command in step 1\nnameserver 10.50... # The company DNS/nameserver from the command in step 1\nnameserver 8.8.8.8\nnameserver 8.8.4.4\nsearch this.searchdomain.com # The search domain that we got from step 2\nEOF\n"})}),"\n",(0,o.jsxs)(n.ol,{start:"4",children:["\n",(0,o.jsxs)(n.li,{children:["To prevent the system from re-writing your ",(0,o.jsx)(n.code,{children:"/etc/resolv.conf"})," on startup of wsl, fire the below command in ",(0,o.jsx)(n.code,{children:"wsl2"})]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo chattr +i /etc/resolv.conf\n"})}),"\n",(0,o.jsxs)(n.ol,{start:"5",children:["\n",(0,o.jsx)(n.li,{children:"For extra information"}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["To get ",(0,o.jsx)(n.code,{children:"<corporateDNS>"})," addresses, use ",(0,o.jsx)(n.code,{children:"ipconfig /all"})," from ",(0,o.jsx)(n.code,{children:"CMD"})," or ",(0,o.jsx)(n.code,{children:"Powershell"})," prompt, and check the details of the VPN adapter:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-powershell",children:"Description . . . . . . . . . . . : Cisco AnyConnect Secure Mobility Client Virtual Miniport Adapter for Windows x64\nPhysical Address. . . . . . . . . : XX-XX-XX-XX-XX-XX\nDHCP Enabled. . . . . . . . . . . : No\nAutoconfiguration Enabled . . . . : Yes\nIPv6 Address. . . . . . . . . . . : xxxx:xxxx:xxxx:xxxx(Preferred)\nLink-local IPv6 Address . . . . . : xxxx:xxxx:xxxx:xxxx(Preferred)\nIPv4 Address. . . . . . . . . . . : 10.20.30.40(Preferred)\nSubnet Mask . . . . . . . . . . . : 255.255.255.255\nDefault Gateway . . . . . . . . . : ::\n                                    0.0.0.0\nDHCPv6 IAID . . . . . . . . . . . :\nDHCPv6 Client DUID. . . . . . . . : \nDNS Servers . . . . . . . . . . . : 123.45.67.89    <- Corporate DNS 1\n                                    123.45.67.90    <- Corporate DNS 2\nPrimary WINS Server . . . . . . . : xxx.xx.xxx.xx\nNetBIOS over Tcpip. . . . . . . . : Enabled\n"})}),"\n",(0,o.jsx)(n.h3,{id:"network-connection",children:"Network connection"}),"\n",(0,o.jsx)(n.p,{children:"When the VPN connection is active, network traffic out of WSL2 is not passed to the internet."}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"Changing the Interface Metric 1 -> 6000 for AnyConnect VPN Adapter will resolve the connection issue. And  this has to be done each time after the VPN connection established."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"By default, the Interface Metrics for AnyConnect are:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"IPv6: 6000"}),"\n",(0,o.jsx)(n.li,{children:"IPv4: 1"}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"ping"})," times out from WSL Shell."]}),"\n",(0,o.jsx)(n.p,{children:"Changing the Interface Metrics as 600 for AnyConnect will reflect as below:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"IPv6: 6000"}),"\n",(0,o.jsx)(n.li,{children:"IPv4: 6000"}),"\n"]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["To chnage ",(0,o.jsx)(n.strong,{children:"Interface Metric 1 -> 6000"}),", fire the below command in powershell"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-powershell",children:'Get-NetAdapter | Where-Object {$_.InterfaceDescription -Match "Cisco AnyConnect"} | Set-NetIPInterface -InterfaceMetric 6000\n'})}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsx)(n.p,{children:"PS: The above command in powershell with admin rights, has to be fired each time after the VPN connection established"})}),"\n",(0,o.jsxs)(n.ol,{start:"2",children:["\n",(0,o.jsx)(n.li,{children:"Optional:"}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Restart the ",(0,o.jsx)(n.code,{children:"wsl2"})," from powershell using the below command or close the wsl2 window and reopen it."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-powershell",children:"Restart-Service LxssManager\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://gist.github.com/machuu/7663aa653828d81efbc2aaad6e3b1431",children:"For more ..."})}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"workaround-wsl1---simplified",children:"Workaround (WSL1) - Simplified"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Get all the available DNS/nameservers"})," after connecting to Cisco VPN Client & before connecting. The nameservers visible before connecting to Cisco client will change frequently. So you have to change that if you add. Or you can leave the nameservers before connecting to Cisco client. Use the below command at ",(0,o.jsx)(n.code,{children:"powershell"})]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-powershell",children:"Get-DnsClientServerAddress -AddressFamily IPv4 | Select-Object -ExpandProperty ServerAddresses\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"#dns-resolution",children:"For detail..."})}),"\n",(0,o.jsxs)(n.ol,{start:"2",children:["\n",(0,o.jsxs)(n.li,{children:["Disable ",(0,o.jsx)(n.code,{children:"systemd-resolved"})," service"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo systemctl disable systemd-resolved.service\n"})}),"\n",(0,o.jsxs)(n.ol,{start:"3",children:["\n",(0,o.jsx)(n.li,{children:"Then stop that service"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo systemctl stop systemd-resolved.service\n"})}),"\n",(0,o.jsxs)(n.ol,{start:"4",children:["\n",(0,o.jsxs)(n.li,{children:["Then remove ",(0,o.jsx)(n.code,{children:"resolv.conf"})]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo rm /etc/resolv.conf\n"})}),"\n",(0,o.jsxs)(n.ol,{start:"5",children:["\n",(0,o.jsxs)(n.li,{children:["Add a manually created ",(0,o.jsx)(n.code,{children:"resolv.conf"})," in ",(0,o.jsx)(n.code,{children:"/etc/"})]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo vim /etc/resolv.conf\n"})}),"\n",(0,o.jsxs)(n.ol,{start:"6",children:["\n",(0,o.jsxs)(n.li,{children:["Add your prefered DNS server in ",(0,o.jsx)(n.code,{children:"resolv.conf"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",metastring:'title="/etc/resolv.conf" ',children:"nameserver 8.8.8.8\nnameserver 1.1.1.1\nnameserver 8.8.4.4\n# Add nameservers got after connecting to cisco client\nnameserver 10.**.**.***\n"})}),"\n",(0,o.jsxs)(n.ol,{start:"7",children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Vi/Vim"})," editor commands"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Press ",(0,o.jsx)(n.code,{children:"Esc"})," to enter the Command mode. Then type ",(0,o.jsx)(n.code,{children:":"})," to launch the prompt bar. After that use the below:"]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"w"})," to save changes to the file without exiting the editor"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"wq"})," to write and quit the editor"]}),"\n",(0,o.jsxs)(n.li,{children:["type ",(0,o.jsx)(n.code,{children:"w"})," and the new name (",(0,o.jsx)(n.code,{children:"testfile2"}),") as ",(0,o.jsx)(n.code,{children:":w testfile2"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"q!"})," to quit without saving"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Other usefull commands"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Command Mode is the default mode you see when launching Vi or Vim. In Command Mode, you issue commands for tasks such as navigating the file, searching, replacing, deleting, copying, and pasting text."}),"\n",(0,o.jsxs)(n.li,{children:["For instance, press ",(0,o.jsx)(n.code,{children:"x"})," to delete a character and ",(0,o.jsx)(n.code,{children:"dd"})," to delete an entire line. Similarly, press ",(0,o.jsx)(n.code,{children:"yy"})," to copy a line and ",(0,o.jsx)(n.code,{children:"p"})," to paste."]}),"\n",(0,o.jsxs)(n.li,{children:["To enter ",(0,o.jsx)(n.strong,{children:"Insert Mode"})," from Command Mode, press the ",(0,o.jsx)(n.code,{children:"i"})," key (lowercase ",(0,o.jsx)(n.strong,{children:"i"}),")"]}),"\n",(0,o.jsxs)(n.li,{children:["To exit Insert Mode and return to Command Mode, press the ",(0,o.jsx)(n.code,{children:"Esc"})," key"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"hot-reload-not-working",children:"Hot Reload not working"}),"\n",(0,o.jsx)(n.h3,{id:"fix-for-angular-running-on-wsl2",children:"Fix for angular running on wsl2"}),"\n",(0,o.jsxs)(n.p,{children:["The issue is because of ",(0,o.jsx)(n.a,{href:"https://man7.org/linux/man-pages/man7/inotify.7.html",children:"inotify"}),", the Linux API used by hot reload, is not supported in WSL2 on 9P filesystem drives (e.g. Windows drives mounted into WSL2). So you can move your files inside ",(0,o.jsx)(n.code,{children:"/home/your_linux_user_name/"})," directory of wsl(linux). And changing wsl2 to wsl1 will also fix the issue. The below fix is for all javascript projects including react. Here I've mentioned as angular, as I work on that."]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Open a terminal window."}),"\n",(0,o.jsx)(n.li,{children:"Navigate to the directory of your Angular project."}),"\n",(0,o.jsxs)(n.li,{children:["Set the ",(0,o.jsx)(n.code,{children:"CHOKIDAR_USEPOLLING"})," environment variable to ",(0,o.jsx)(n.code,{children:"true"})," in env file. This will force Chokidar to use ",(0,o.jsx)(n.strong,{children:"polling"})," instead of watching for file changes."]}),"\n",(0,o.jsx)(n.li,{children:"Start the Angular development server."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"You can also achieve the same by firing the following command in wsl2 terminal inside the desired angular project as below:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"export CHOKIDAR_USEPOLLING=true\nng serve\n"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"CHOKIDAR_USEPOLLING"})," is an environment variable that is used to enable a polling mechanism for file watching. This is useful in situations where the default file watching mechanism does not work properly, such as when using Docker or WSL."]}),"\n",(0,o.jsxs)(n.p,{children:["Once you have set ",(0,o.jsx)(n.code,{children:"CHOKIDAR_USEPOLLING"})," to ",(0,o.jsx)(n.code,{children:"true"}),", your Angular app will use a polling mechanism to watch for file changes. This means that it will periodically check for changes to your files, rather than relying on the operating system to notify it of changes."]}),"\n",(0,o.jsxs)(n.p,{children:["Using CHOKIDAR_USEPOLLING can help to improve the reliability of hot reloading in Angular apps. However, it can also have a negative impact on performance, so it is only recommended to use it if you are experiencing problems with hot reloading. And ",(0,o.jsx)(n.strong,{children:"CHOKIDAR_USEPOLLING"})," is only supported in ",(0,o.jsx)(n.strong,{children:"Node.js versions 10 and above"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"bonus",children:"Bonus"}),"\n",(0,o.jsx)(n.h3,{id:"not-able-to-download-raw-files-too",children:"Not able to download RAW files too?"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"wget -O- https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh\n--2022-12-28 13:02:52-- https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh\nResolving raw.githubusercontent.com (raw.githubusercontent.com)\u2026 49.44.79.236, 2405:200:1607:2820:41::36\nConnecting to raw.githubusercontent.com (raw.githubusercontent.com)|49.44.79.236|:443\u2026 failed: Connection timed out.\nConnecting to raw.githubusercontent.com (raw.githubusercontent.com)|2405:200:1607:2820:41::36|:443\u2026 failed: Network is unreachable.\n"})}),"\n",(0,o.jsxs)(n.p,{children:["If you are in India and using the Jio network, you may face this as well because the ISP blocks the ",(0,o.jsx)(n.code,{children:"raw.githubusercontent.com"})," at the DNS level for some unknown reason!"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Updating the ",(0,o.jsx)(n.code,{children:"/etc/hosts"})," file in Linux & Windows or changing DNS or connecting to vpn will resolve the issue. Here we can see about updating ",(0,o.jsx)(n.code,{children:"hosts"})," file."]}),"\n"]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["For windows, Open ",(0,o.jsx)(n.code,{children:"notepad"})," with admin, then click ",(0,o.jsx)(n.code,{children:"file -> open"})," (",(0,o.jsx)(n.code,{children:"ctr+o"}),") and navigate to path ",(0,o.jsx)(n.strong,{children:"%SystemRoot%\\System32\\drivers\\etc\\hosts"})]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"C:\\System32\\drivers\\etc\\hosts\n"})}),"\n",(0,o.jsx)(n.p,{children:"Then, at the end of this file, add the IP address and the domain name as below:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"185.199.110.133 raw.githubusercontent.com\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Open the ",(0,o.jsx)(n.code,{children:"/etc/hosts"})," file via nano or any editor in linux and mac and add the above code."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo nano /etc/hosts\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},4552:(e,n,s)=>{s.d(n,{I:()=>t,M:()=>l});var o=s(11504);const i={},r=o.createContext(i);function l(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);