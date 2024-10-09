---
slug: bash-shell-commands
title: Bash/Shell cheat sheet
authors: anand-tech
tags: [bash, shell, 'terminal', 'script', 'command', 'cli', 'unix', 'cheat sheet']
---
import Highlight from '@site/src/components/Highlight';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem'

## <Highlight color='#800031' highlight='fg' fontWeight='bold'>Shell cheat sheet</Highlight>

Being well-versed in the <Highlight highlight='lightBg' color='#D1FFBD'>Bourne Again SHell (Bash Shell)</Highlight> as a developer or Linux user can significantly boost productivity

{/* truncate */}

Check out the rest of the document to get more familiar with the command line concepts!

**Quick note:** Anything encased in [ ] means that it’s optional. Some commands can be used without options or specifying files.

1. `cd` -> By itself or with a tilde (~), this command will move the user to their home directory - cd(change directory)
    - **cd ~[username]** -> This command will move the user to the home directory of the specified username, replace username by real username
    - `cd .` -> This command will leave the user in the same directory they are currently in
    - `cd ..` -> This command will move the user up one directory (previous)
    - `cd -` -> This command will move the user to the previous directory
2.  `history` —> list your most recent commands
    - `history-5` -> Display the last five commands.
    - `history-c` -> Clear the history list.
    - `history-d 10 20` -> Delete lines 10 to 20 from the history list.
    - `history | grep python3` -> Get the recent commands from history that include python3 keyword
3. `ps` -> Display active processes(current running processes on the system). You can determine your shell type also using the **ps** command
    - `ps -ef` -> Display a list of all running processes
    - `ps -p PID` -> Display a list of all processes for a specific process ID (PID), Replace PID by real PID (number)
    - With the use of the `&` symbol, we can pass a process into the background.

    For demonstration purposes, we will create a shell script name **sleep** with an infinite loop and will run it in the background.

    ```sh
    anandraja@myhome:~$ ps
    PID TTY          TIME CMD
    14 tty1     00:00:00 bash # my shell is bash & PID is 14
    17955 tty1     00:00:00 ps
    14491 pts/0   00:00:00 sleep
    anandraja@myhome:~$ sleep & # 
    anandraja@myhome:~$ kill 14491 # kill uses PID
    anandraja@myhome:~$ killall sleep # killall uses name
    ```
4. `pwd` -> Displays the present working directory. PWD stands for print working directory
5. **ls [OPTIONS] [FILES]** -> The ls (list) command is used to list directories or files
    - `ls -a` -> List all the files in the current directory including hidden files too
    - `ls -l` -> Long listing of all the files and their size in the current directory
6. **rm [OPTIONS]... FILE...** -> The rm (remove) command is used to delete files, directories or even symbolic links from your file system
    - `rm-i` ->  Remove all the files in the directory but let the user confirm before deleting it.
    - `rm-r` -> Remove non-empty directories including all the files within them.
    - `rm-f` -> Remove files or directories without prompting even if they are write-protected — the f stands for force
    - example: `rm -rf directoryName`
7. **mv [OPTIONS] SOURCE DESTINATION**
    - **SOURCE** can be one or more directories or files
    - **DESTINATION** can be a file (used for renaming files) or a directory (used for moving files and directories into other directories)

    The mv (move) command is used to move one or more directories or files from one location in the file system to another.

    ```sh
    # Rename file
    $ mv file1.txt file2.txt

    # Move a file into a different directory
    $ mv file1.txt anotherDir/
    ```
8. **cp [OPTIONS] SOURCE... DESTINATION**
    - **SOURCE** may contain one or more directories or files
    - **DESTINATION** must be a single directory or file

    ```sh
    # Copy files
    $ cp file1.txt file1_final.txt

    # Copy directories (and preserve ownership)
    $ cp -Rp myDir/ myDirBackup
    ```

9. **mkdir [OPTION] [DIRECTORY]**
    - **DIRECTORY** can be one or more directories
10. **touch [OPTIONS] [FILES]**
    - `touch -c file1.txt` -> If file file1.txt already exists, then this command will update the file’s time stamps. Otherwise, it will do nothing.
    - `touch -a file1.txt` -> Updates only the access time stamp of the file.
    - `touch -m file1.txt` -> Updates only the modification time of the file.

    The touch command allows you to create new empty files or update the time stamp on existing files or directories. If you use touch with files that already exist, then the command will just update their time stamps. If the files do not exist, then this command will simply create them.

    ```sh
    # Create a new file (file1.txt does not exist)
    touch file1.txt

    # Update the access time of the file (file1.txt already exists)
    touch -a file1.txt
    ```
11. **cat [OPTIONS] [FILE_NAMES]** -> Cat is a very commonly used command that allows users to read concatenate or write file contents to the standard output.
    - `cat-n file1.txt` -> Display the contents of the file file1.txt along with line numbers.
    - `cat-T file1.txt` -> Display the contents of the file file1.txt and distinguish tabs and spaces (tabs will be displayed as ^I in the output)

    ```sh
    # Display the content of file $HOME/.pip/pip.conf
    cat $HOME/.pip/pip.conf

    # Append the content of file1.txt to file2.txt
    cat file1.txt >> file2.txt
    ```
12. The `less` command lets you display the contents of a file one page at a time. Less won’t read the entire file when it is being called; thus, it leads to way faster load times.

    - `less-N file1.txt` -> Display the content (first page) of the file **file1.txt** and show line numbers.
    - `less-X file1.txt` -> By default, when you exit less, the content of the file will be cleared from the command line. If you want to exit but also keep the content of the file on the screen use the `-X` option.

The `more` command can also be used for displaying the content of a file in the command line. In contrast to `less`, this command loads the entire file at once, which is why `less` seems faster.

    - `more -p file1.txt` -> Clear the command line screen and then display the content of file1.txt
    - `more +100 file1.txt` -> Display the content of file1.txt starting from the 100th line onwards.

```sh
# Display the content of file $HOME/.pip/pip.conf
less $HOME/.pip/pip.conf

# Display the content of file $HOME/.pip/pip.conf
more $HOME/.pip/pip.conf
```
13. **grep [OPTIONS] PATTERN [FILE...]**
    - **PATTERN** is the search pattern.
    - **FILE** can be none to more input file names.
  The `grep` (global regular expression) command is useful when you wish to search for a particular string in files.

    - `grep-v Andrew employees.txt` -> Invert match **Andrew** in **employees.txt**. In other words, display all the lines that do not match the pattern **Andrew**.
    - `grep-r Andrew dirName/` -> Recursively search for pattern **Andrew** in all files in the specified directory dirName
    - `grep-i Andrew employees.txt` -> Performs a case-insensitive search.

    ```sh
    # Search for `export` (case insensitive) in user profile
    $ grep -i export ~/.bash_profile
    ```
14. The `curl` command is used to download or upload data using protocols such as FTP, SFTP, HTTP and HTTPS. 
    ```sh
    $ curl -L google.com
    ```
15. The `which` command is used to identify and report the location of the provided executable. For instance, you may wish to see the location of the executable when calling `python3`
    ```sh
    $ which python3
    /usr/local/bin/python3
    ```
16. `top` -> The `top` command is like a CLI version of the task manager in Windows. The `top` command can help you monitor running processes and the resources (such as memory) they are currently using.
    - `top -n 1` -> Display a summary of system resource usage
    - **top -u [username]** -> Display processes for that user **username**. Replace username by real username
    - **top -p [PID]** -> replace PID by real PID. Find PID by running `ps`
    - `top -o %MEM` -> Sort processes by memory usage
17. `man` (Manual) -> To access the manual pages for a specific command. It provides detailed information about the command, including its syntax, options, and examples.
    ```sh
    man ls
    ```
    - Use **arrow keys** or the **spacebar** to navigate through the manual pages. Press **q** to exit the manual.
18. The `uname` and `whoami` commands allow you to access some basic information that comes in handy when you work on multiple system
    - The `whoami` command in Linux returns the current user’s username. It stands for **who am I?** and it’s often used to determine the current user’s identity in shell scripts or the terminal.
    - The `uname` command in Linux displays information about the system’s kernel, including the kernel name, hostname, kernel release, kernel version, and machine hardware name.

        - Use `uname -s` to display the kernel name.
        - Use `uname -n` to display the hostname.
        - Use `uname -r` to display the kernel release.
        - Use `uname -v` to display the kernel version.
        - Use `uname -m` to display the machine hardware name.
        - Use `uname -a` to display all.
19. `wget` -> **wget** stands for web get. The wget is a free non-interactive file downloader command.
    - **wget [URL]** -> to download single file
    - **wget -O [fileName] [URL]** -> to store with a different file name
    - **wget --limit-rate=[Number] [URL]** -> to specify download rate/speed
    - **wget -c [URL]** -> to Continue Interrupted Downloads
    - **wget -b [URL]** -> to download in background
```sh
$ wget https://wordpress.org/latest.zip
$ wget google.com
$ wget -O wordpress.zip https://wordpress.org/latest.zip
$ wget -P documents/archives/ https://wordpress.org/latest.zip # file will be saved at documents/archives/
$ wget --limit-rate=500k https://wordpress.org/latest.zip
$ wget -tries=100 https://wordpress.org/latest.zip # `-tries` to set retrying attempts 
```

20. Package Managers in Linux: Ubuntu server uses `apt` package manager. And Fedora, Red Hat, Arch, or Centos machine, use different package manager.
    - Debian and Debian-based distros -> **apt install [package name]**
    - Arch and Arch-based distros -> **pacman -S [package name]**
    - Red Hat and Red Hat-based distros -> **yum install [package name]**
    - Fedora and CentOS -> **yum install [package name]**

21. The `cal` command displays a well-presented calendar on the terminal
```sh
anandraja@myhome:~$ cal
anandraja@myhome:~$ cal March 2024
```
22. The `tar`, `zip`, and `unzip` commands
    - The `tar` command in Linux is used to create and extract archived files. We can extract multiple different archive files using the `tar` command.

    - To **create an archive**, we use the `-c` parameter, and to **extract an archive**, we use the `-x` parameter.

        - **tar -cvf [archive name] [files separated by space]** -> to compress
        - **tar -xvf [archive name]** -> to extract
        - **zip [archive name] [file names separated by space]** -> to compress
        - **unzip [archive name]** -> to extract

```sh
#Compress
anandraja@myhome:~$ tar -cvf compress.tar new-file.txt new-file-2
#Extract
anandraja@myhome:~$ tar -xvf compress.tar
#Compress
anandraja@myhome:~$ zip compress.zip new-file.txt new-file-2
#Extract
anandraja@myhome:~$ unzip compress.zip
```

23. The `alias` command

```sh
alias lsl="ls -l"
```
- `lsl` will execute `ls -l`

24. The `whereis` and `whatis` commands are used in Linux to search for information about programs and files.

```sh
anandraja@myhome:~$ whereis sudo
sudo: /usr/bin/sudo /usr/lib/sudo /usr/share/man/man8/sudo.8.gz
anandraja@myhome:~$ whatis sudo
sudo (8) - execute a command as another user
```

25. `passwd` -> Change the password for the current user
    - **passwd [username]** -> Change the password for a specific user. Replace username by real username
    - **passwd -f [username]** -> Force a user to change their password at the next login
    - **passwd -e -n [days] -w [warndays] [username]** -> Replace **days** with the number of days before the password expires and **warmdays** with the number of days before the password expires that the user will be warned.

