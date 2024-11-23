"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[6780],{17612:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>t,metadata:()=>c,toc:()=>d});var i=s(17624),r=s(4552),l=s(94384);s(61268),s(87768);const t={slug:"bash-shell-commands",title:"Bash/Shell cheat sheet",authors:"anand-tech",tags:["bash","shell","terminal","script","command","cli","unix","cheat sheet"]},a=void 0,c={permalink:"/wiki/blog/bash-shell-commands",editUrl:"https://github.com/actionanand/wiki/blog/2024-10-09-bash-shell-commands.md",source:"@site/blog/2024-10-09-bash-shell-commands.md",title:"Bash/Shell cheat sheet",description:"Shell cheat sheet",date:"2024-10-09T00:00:00.000Z",tags:[{inline:!0,label:"bash",permalink:"/wiki/blog/tags/bash"},{inline:!0,label:"shell",permalink:"/wiki/blog/tags/shell"},{inline:!0,label:"terminal",permalink:"/wiki/blog/tags/terminal"},{inline:!0,label:"script",permalink:"/wiki/blog/tags/script"},{inline:!0,label:"command",permalink:"/wiki/blog/tags/command"},{inline:!0,label:"cli",permalink:"/wiki/blog/tags/cli"},{inline:!0,label:"unix",permalink:"/wiki/blog/tags/unix"},{inline:!0,label:"cheat sheet",permalink:"/wiki/blog/tags/cheat-sheet"}],readingTime:9.63,hasTruncateMarker:!0,authors:[{name:"Anand Techie",title:"Software Developer, Frontend",url:"https://github.com/AnandRaja-tech",socials:{github:"https://github.com/AnandRaja-tech"},page:{permalink:"/wiki/blog/authors/anand-tech"},imageURL:"https://github.com/AnandRaja-tech.png",key:"anand-tech"}],frontMatter:{slug:"bash-shell-commands",title:"Bash/Shell cheat sheet",authors:"anand-tech",tags:["bash","shell","terminal","script","command","cli","unix","cheat sheet"]},unlisted:!1,nextItem:{title:"Understanding and Resolving CORS Error",permalink:"/wiki/blog/what-is-cors-error"}},o={authorsImageUrls:[void 0]},d=[{value:"<Highlight>Shell cheat sheet</Highlight>",id:"shell-cheat-sheet",level:2}];function h(e){const n={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"shell-cheat-sheet",children:(0,i.jsx)(l.c,{color:"#800031",highlight:"fg",fontWeight:"bold",children:"Shell cheat sheet"})}),"\n",(0,i.jsxs)(n.p,{children:["Being well-versed in the ",(0,i.jsx)(l.c,{highlight:"lightBg",color:"#D1FFBD",children:"Bourne Again SHell (Bash Shell)"})," as a developer or Linux user can significantly boost productivity"]}),"\n","\n",(0,i.jsx)(n.p,{children:"Check out the rest of the document to get more familiar with the command line concepts!"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Quick note:"})," Anything encased in [ ] means that it\u2019s optional. Some commands can be used without options or specifying files."]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"cd"})," -> By itself or with a tilde (~), this command will move the user to their home directory - cd(change directory)"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"cd ~[username]"})," -> This command will move the user to the home directory of the specified username, replace username by real username"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"cd ."})," -> This command will leave the user in the same directory they are currently in"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"cd .."})," -> This command will move the user up one directory (previous)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"cd -"})," -> This command will move the user to the previous directory"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"history"})," \u2014> list your most recent commands"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"history-5"})," -> Display the last five commands."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"history-c"})," -> Clear the history list."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"history-d 10 20"})," -> Delete lines 10 to 20 from the history list."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"history | grep python3"})," -> Get the recent commands from history that include python3 keyword"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"ps"})," -> Display active processes(current running processes on the system). You can determine your shell type also using the ",(0,i.jsx)(n.strong,{children:"ps"})," command"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ps -ef"})," -> Display a list of all running processes"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ps -p PID"})," -> Display a list of all processes for a specific process ID (PID), Replace PID by real PID (number)"]}),"\n",(0,i.jsxs)(n.li,{children:["With the use of the ",(0,i.jsx)(n.code,{children:"&"})," symbol, we can pass a process into the background."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["For demonstration purposes, we will create a shell script name ",(0,i.jsx)(n.strong,{children:"sleep"})," with an infinite loop and will run it in the background."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"anandraja@myhome:~$ ps\nPID TTY          TIME CMD\n14 tty1     00:00:00 bash # my shell is bash & PID is 14\n17955 tty1     00:00:00 ps\n14491 pts/0   00:00:00 sleep\nanandraja@myhome:~$ sleep & # \nanandraja@myhome:~$ kill 14491 # kill uses PID\nanandraja@myhome:~$ killall sleep # killall uses name\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"pwd"})," -> Displays the present working directory. PWD stands for print working directory"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"ls [OPTIONS] [FILES]"})," -> The ls (list) command is used to list directories or files"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ls -a"})," -> List all the files in the current directory including hidden files too"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ls -l"})," -> Long listing of all the files and their size in the current directory"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"rm [OPTIONS]... FILE..."})," -> The rm (remove) command is used to delete files, directories or even symbolic links from your file system"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"rm-i"})," ->  Remove all the files in the directory but let the user confirm before deleting it."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"rm-r"})," -> Remove non-empty directories including all the files within them."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"rm-f"})," -> Remove files or directories without prompting even if they are write-protected \u2014 the f stands for force"]}),"\n",(0,i.jsxs)(n.li,{children:["example: ",(0,i.jsx)(n.code,{children:"rm -rf directoryName"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"mv [OPTIONS] SOURCE DESTINATION"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"SOURCE"})," can be one or more directories or files"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"DESTINATION"})," can be a file (used for renaming files) or a directory (used for moving files and directories into other directories)"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The mv (move) command is used to move one or more directories or files from one location in the file system to another."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"# Rename file\n$ mv file1.txt file2.txt\n\n# Move a file into a different directory\n$ mv file1.txt anotherDir/\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"cp [OPTIONS] SOURCE... DESTINATION"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"SOURCE"})," may contain one or more directories or files"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"DESTINATION"})," must be a single directory or file"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"# Copy files\n$ cp file1.txt file1_final.txt\n\n# Copy directories (and preserve ownership)\n$ cp -Rp myDir/ myDirBackup\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"mkdir [OPTION] [DIRECTORY]"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"DIRECTORY"})," can be one or more directories"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"touch [OPTIONS] [FILES]"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"touch -c file1.txt"})," -> If file file1.txt already exists, then this command will update the file\u2019s time stamps. Otherwise, it will do nothing."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"touch -a file1.txt"})," -> Updates only the access time stamp of the file."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"touch -m file1.txt"})," -> Updates only the modification time of the file."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The touch command allows you to create new empty files or update the time stamp on existing files or directories. If you use touch with files that already exist, then the command will just update their time stamps. If the files do not exist, then this command will simply create them."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"# Create a new file (file1.txt does not exist)\ntouch file1.txt\n\n# Update the access time of the file (file1.txt already exists)\ntouch -a file1.txt\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"cat [OPTIONS] [FILE_NAMES]"})," -> Cat is a very commonly used command that allows users to read concatenate or write file contents to the standard output."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"cat-n file1.txt"})," -> Display the contents of the file file1.txt along with line numbers."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"cat-T file1.txt"})," -> Display the contents of the file file1.txt and distinguish tabs and spaces (tabs will be displayed as ^I in the output)"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"# Display the content of file $HOME/.pip/pip.conf\ncat $HOME/.pip/pip.conf\n\n# Append the content of file1.txt to file2.txt\ncat file1.txt >> file2.txt\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"less"})," command lets you display the contents of a file one page at a time. Less won\u2019t read the entire file when it is being called; thus, it leads to way faster load times."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"less-N file1.txt"})," -> Display the content (first page) of the file ",(0,i.jsx)(n.strong,{children:"file1.txt"})," and show line numbers."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"less-X file1.txt"})," -> By default, when you exit less, the content of the file will be cleared from the command line. If you want to exit but also keep the content of the file on the screen use the ",(0,i.jsx)(n.code,{children:"-X"})," option."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"more"})," command can also be used for displaying the content of a file in the command line. In contrast to ",(0,i.jsx)(n.code,{children:"less"}),", this command loads the entire file at once, which is why ",(0,i.jsx)(n.code,{children:"less"})," seems faster."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"more -p file1.txt"})," -> Clear the command line screen and then display the content of file1.txt"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"more +100 file1.txt"})," -> Display the content of file1.txt starting from the 100th line onwards."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"# Display the content of file $HOME/.pip/pip.conf\nless $HOME/.pip/pip.conf\n\n# Display the content of file $HOME/.pip/pip.conf\nmore $HOME/.pip/pip.conf\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"13",children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"grep [OPTIONS] PATTERN [FILE...]"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"PATTERN"})," is the search pattern."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"FILE"})," can be none to more input file names.\nThe ",(0,i.jsx)(n.code,{children:"grep"})," (global regular expression) command is useful when you wish to search for a particular string in files."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"grep-v Andrew employees.txt"})," -> Invert match ",(0,i.jsx)(n.strong,{children:"Andrew"})," in ",(0,i.jsx)(n.strong,{children:"employees.txt"}),". In other words, display all the lines that do not match the pattern ",(0,i.jsx)(n.strong,{children:"Andrew"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"grep-r Andrew dirName/"})," -> Recursively search for pattern ",(0,i.jsx)(n.strong,{children:"Andrew"})," in all files in the specified directory dirName"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"grep-i Andrew employees.txt"})," -> Performs a case-insensitive search."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"# Search for `export` (case insensitive) in user profile\n$ grep -i export ~/.bash_profile\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"curl"})," command is used to download or upload data using protocols such as FTP, SFTP, HTTP and HTTPS."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"$ curl -L google.com\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"which"})," command is used to identify and report the location of the provided executable. For instance, you may wish to see the location of the executable when calling ",(0,i.jsx)(n.code,{children:"python3"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"$ which python3\n/usr/local/bin/python3\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"top"})," -> The ",(0,i.jsx)(n.code,{children:"top"})," command is like a CLI version of the task manager in Windows. The ",(0,i.jsx)(n.code,{children:"top"})," command can help you monitor running processes and the resources (such as memory) they are currently using."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"top -n 1"})," -> Display a summary of system resource usage"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"top -u [username]"})," -> Display processes for that user ",(0,i.jsx)(n.strong,{children:"username"}),". Replace username by real username"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"top -p [PID]"})," -> replace PID by real PID. Find PID by running ",(0,i.jsx)(n.code,{children:"ps"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"top -o %MEM"})," -> Sort processes by memory usage"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"man"})," (Manual) -> To access the manual pages for a specific command. It provides detailed information about the command, including its syntax, options, and examples."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"man ls\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Use ",(0,i.jsx)(n.strong,{children:"arrow keys"})," or the ",(0,i.jsx)(n.strong,{children:"spacebar"})," to navigate through the manual pages. Press ",(0,i.jsx)(n.strong,{children:"q"})," to exit the manual."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"uname"})," and ",(0,i.jsx)(n.code,{children:"whoami"})," commands allow you to access some basic information that comes in handy when you work on multiple system"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"whoami"})," command in Linux returns the current user\u2019s username. It stands for ",(0,i.jsx)(n.strong,{children:"who am I?"})," and it\u2019s often used to determine the current user\u2019s identity in shell scripts or the terminal."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"uname"})," command in Linux displays information about the system\u2019s kernel, including the kernel name, hostname, kernel release, kernel version, and machine hardware name."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Use ",(0,i.jsx)(n.code,{children:"uname -s"})," to display the kernel name."]}),"\n",(0,i.jsxs)(n.li,{children:["Use ",(0,i.jsx)(n.code,{children:"uname -n"})," to display the hostname."]}),"\n",(0,i.jsxs)(n.li,{children:["Use ",(0,i.jsx)(n.code,{children:"uname -r"})," to display the kernel release."]}),"\n",(0,i.jsxs)(n.li,{children:["Use ",(0,i.jsx)(n.code,{children:"uname -v"})," to display the kernel version."]}),"\n",(0,i.jsxs)(n.li,{children:["Use ",(0,i.jsx)(n.code,{children:"uname -m"})," to display the machine hardware name."]}),"\n",(0,i.jsxs)(n.li,{children:["Use ",(0,i.jsx)(n.code,{children:"uname -a"})," to display all."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"wget"})," -> ",(0,i.jsx)(n.strong,{children:"wget"})," stands for web get. The wget is a free non-interactive file downloader command."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"wget [URL]"})," -> to download single file"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"wget -O [fileName] [URL]"})," -> to store with a different file name"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"wget --limit-rate=[Number] [URL]"})," -> to specify download rate/speed"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"wget -c [URL]"})," -> to Continue Interrupted Downloads"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"wget -b [URL]"})," -> to download in background"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"$ wget https://wordpress.org/latest.zip\n$ wget google.com\n$ wget -O wordpress.zip https://wordpress.org/latest.zip\n$ wget -P documents/archives/ https://wordpress.org/latest.zip # file will be saved at documents/archives/\n$ wget --limit-rate=500k https://wordpress.org/latest.zip\n$ wget -tries=100 https://wordpress.org/latest.zip # `-tries` to set retrying attempts \n"})}),"\n",(0,i.jsxs)(n.ol,{start:"20",children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Package Managers in Linux: Ubuntu server uses ",(0,i.jsx)(n.code,{children:"apt"})," package manager. And Fedora, Red Hat, Arch, or Centos machine, use different package manager."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Debian and Debian-based distros -> ",(0,i.jsx)(n.strong,{children:"apt install [package name]"})]}),"\n",(0,i.jsxs)(n.li,{children:["Arch and Arch-based distros -> ",(0,i.jsx)(n.strong,{children:"pacman -S [package name]"})]}),"\n",(0,i.jsxs)(n.li,{children:["Red Hat and Red Hat-based distros -> ",(0,i.jsx)(n.strong,{children:"yum install [package name]"})]}),"\n",(0,i.jsxs)(n.li,{children:["Fedora and CentOS -> ",(0,i.jsx)(n.strong,{children:"yum install [package name]"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"cal"})," command displays a well-presented calendar on the terminal"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"anandraja@myhome:~$ cal\nanandraja@myhome:~$ cal March 2024\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"22",children:["\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"tar"}),", ",(0,i.jsx)(n.code,{children:"zip"}),", and ",(0,i.jsx)(n.code,{children:"unzip"})," commands","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"tar"})," command in Linux is used to create and extract archived files. We can extract multiple different archive files using the ",(0,i.jsx)(n.code,{children:"tar"})," command."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["To ",(0,i.jsx)(n.strong,{children:"create an archive"}),", we use the ",(0,i.jsx)(n.code,{children:"-c"})," parameter, and to ",(0,i.jsx)(n.strong,{children:"extract an archive"}),", we use the ",(0,i.jsx)(n.code,{children:"-x"})," parameter."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"tar -cvf [archive name] [files separated by space]"})," -> to compress"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"tar -xvf [archive name]"})," -> to extract"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"zip [archive name] [file names separated by space]"})," -> to compress"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"unzip [archive name]"})," -> to extract"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"#Compress\nanandraja@myhome:~$ tar -cvf compress.tar new-file.txt new-file-2\n#Extract\nanandraja@myhome:~$ tar -xvf compress.tar\n#Compress\nanandraja@myhome:~$ zip compress.zip new-file.txt new-file-2\n#Extract\nanandraja@myhome:~$ unzip compress.zip\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"23",children:["\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"alias"})," command"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:'alias lsl="ls -l"\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"lsl"})," will execute ",(0,i.jsx)(n.code,{children:"ls -l"})]}),"\n"]}),"\n",(0,i.jsxs)(n.ol,{start:"24",children:["\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"whereis"})," and ",(0,i.jsx)(n.code,{children:"whatis"})," commands are used in Linux to search for information about programs and files."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"anandraja@myhome:~$ whereis sudo\nsudo: /usr/bin/sudo /usr/lib/sudo /usr/share/man/man8/sudo.8.gz\nanandraja@myhome:~$ whatis sudo\nsudo (8) - execute a command as another user\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"25",children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"passwd"})," -> Change the password for the current user","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"passwd [username]"})," -> Change the password for a specific user. Replace username by real username"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"passwd -f [username]"})," -> Force a user to change their password at the next login"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"passwd -e -n [days] -w [warndays] [username]"})," -> Replace ",(0,i.jsx)(n.strong,{children:"days"})," with the number of days before the password expires and ",(0,i.jsx)(n.strong,{children:"warmdays"})," with the number of days before the password expires that the user will be warned."]}),"\n"]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},87768:(e,n,s)=>{s.d(n,{c:()=>t});s(11504);var i=s(65456);const r={tabItem:"tabItem_Ymn6"};var l=s(17624);function t(e){let{children:n,hidden:s,className:t}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,i.c)(r.tabItem,t),hidden:s,children:n})}},61268:(e,n,s)=>{s.d(n,{c:()=>v});var i=s(11504),r=s(65456),l=s(53943),t=s(55592),a=s(95288),c=s(10632),o=s(27128),d=s(43216);function h(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:s}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:s,attributes:i,default:r}}=e;return{value:n,label:s,attributes:i,default:r}}))}(s);return function(e){const n=(0,o.wn)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function m(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:s}=e;const r=(0,t.Uz)(),l=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,c._M)(l),(0,i.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(r.location.search);n.set(l,e),r.replace({...r.location,search:n.toString()})}),[l,r])]}function p(e){const{defaultValue:n,queryString:s=!1,groupId:r}=e,l=u(e),[t,c]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=s.find((e=>e.default))??s[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:l}))),[o,h]=x({queryString:s,groupId:r}),[p,j]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,l]=(0,d.IN)(s);return[r,(0,i.useCallback)((e=>{s&&l.set(e)}),[s,l])]}({groupId:r}),f=(()=>{const e=o??p;return m({value:e,tabValues:l})?e:null})();(0,a.c)((()=>{f&&c(f)}),[f]);return{selectedValue:t,selectValue:(0,i.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);c(e),h(e),j(e)}),[h,j,l]),tabValues:l}}var j=s(93664);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=s(17624);function y(e){let{className:n,block:s,selectedValue:i,selectValue:t,tabValues:a}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,l.MV)(),d=e=>{const n=e.currentTarget,s=c.indexOf(n),r=a[s].value;r!==i&&(o(n),t(r))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const s=c.indexOf(e.currentTarget)+1;n=c[s]??c[0];break}case"ArrowLeft":{const s=c.indexOf(e.currentTarget)-1;n=c[s]??c[c.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.c)("tabs",{"tabs--block":s},n),children:a.map((e=>{let{value:n,label:s,attributes:l}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>c.push(e),onKeyDown:h,onClick:d,...l,className:(0,r.c)("tabs__item",f.tabItem,l?.className,{"tabs__item--active":i===n}),children:s??n},n)}))})}function b(e){let{lazy:n,children:s,selectedValue:l}=e;const t=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=t.find((e=>e.props.value===l));return e?(0,i.cloneElement)(e,{className:(0,r.c)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:t.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==l})))})}function w(e){const n=p(e);return(0,g.jsxs)("div",{className:(0,r.c)("tabs-container",f.tabList),children:[(0,g.jsx)(y,{...n,...e}),(0,g.jsx)(b,{...n,...e})]})}function v(e){const n=(0,j.c)();return(0,g.jsx)(w,{...e,children:h(e.children)},String(n))}},94384:(e,n,s)=>{s.d(n,{c:()=>r});s(11504);var i=s(17624);function r(e){let{children:n,color:s,highlight:r="bg",fontWeight:l="normal",textDecoration:t="none",fontStyle:a="normal",textAlign:c="left"}=e;return"fg"===r?(0,i.jsx)("span",{style:{color:s,fontWeight:l,textDecoration:t,fontStyle:a,textAlign:c},children:n}):"format"===r?(0,i.jsx)("div",{style:{textAlign:c,color:s,fontWeight:l,textDecoration:t,fontStyle:a},children:n}):"lightBg"===r?(0,i.jsx)("span",{style:{backgroundColor:s,borderRadius:"4px",color:"#4B0082",padding:"0.2rem",paddingTop:"0"},children:n}):(0,i.jsx)("span",{style:{backgroundColor:s,borderRadius:"4px",color:"#fff",padding:"0.2rem",paddingTop:"0"},children:n})}},4552:(e,n,s)=>{s.d(n,{I:()=>a,M:()=>t});var i=s(11504);const r={},l=i.createContext(r);function t(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);