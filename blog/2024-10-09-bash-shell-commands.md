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

1. **cd** -> By itself or with a tilde (~), this command will move the user to their home directory
2. **cd ~username** -> This command will move the user to the home directory of the specified username
3. **cd .** -> This command will leave the user in the same directory they are currently in
4. **cd ..** -> This command will move the user up one directory
5. **cd -** -> This command will move the user to the previous directory
6. **history** —> list your most recent commands
    - `history-5` -> Display the last five commands.
    - `history-c` -> Clear the history list.
    - `history-d 10 20` -> Delete lines 10 to 20 from the history list.
    - `history | grep python3` -> Get the recent commands from history that include python3 keyword
7. You can determine your shell type using the **ps** command
```sh
anandraja@myhome:~$ ps
  PID TTY          TIME CMD
   14 tty1     00:00:00 bash # my shell is bash
17955 tty1     00:00:00 ps
```
8. **pwd** -> Displays the present working directory
9. **ls [OPTIONS] [FILES]** -> The ls (list) command is used to list directories or files
    - `ls -a` -> List all the files in the current directory including hidden files too
    - `ls -l` -> Long listing of all the files and their size in the current directory
10. **rm [OPTIONS]... FILE...** -> The rm (remove) command is used to delete files, directories or even symbolic links from your file system
    - `rm-i` ->  Remove all the files in the directory but let the user confirm before deleting it.
    - `rm-r` -> Remove non-empty directories including all the files within them.
    - `rm-f` -> Remove files or directories without prompting even if they are write-protected — the f stands for force
    - example: `rm -rf directoryName`
11. **mv [OPTIONS] SOURCE DESTINATION**
    - **SOURCE** can be one or more directories or files
    - **DESTINATION** can be a file (used for renaming files) or a directory (used for moving files and directories into other directories)

    The mv (move) command is used to move one or more directories or files from one location in the file system to another.

    ```sh
    # Rename file
    $ mv file1.txt file2.txt

    # Move a file into a different directory
    $ mv file1.txt anotherDir/
    ```
12. **cp [OPTIONS] SOURCE... DESTINATION**
    - **SOURCE** may contain one or more directories or files
    - **DESTINATION** must be a single directory or file

    ```sh
    # Copy files
    $ cp file1.txt file1_final.txt

    # Copy directories (and preserve ownership)
    $ cp -Rp myDir/ myDirBackup
    ```

12. **mkdir [OPTION] [DIRECTORY]**
    - **DIRECTORY** can be one or more directories
13. **touch [OPTIONS] [FILES]**
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
14. **cat [OPTIONS] [FILE_NAMES]** -> Cat is a very commonly used command that allows users to read concatenate or write file contents to the standard output.
    - `cat-n file1.txt` -> Display the contents of the file file1.txt along with line numbers.
    - `cat-T file1.txt` -> Display the contents of the file file1.txt and distinguish tabs and spaces (tabs will be displayed as ^I in the output)

    ```sh
    # Display the content of file $HOME/.pip/pip.conf
    cat $HOME/.pip/pip.conf

    # Append the content of file1.txt to file2.txt
    cat file1.txt >> file2.txt
    ```
15. The `less` command lets you display the contents of a file one page at a time. Less won’t read the entire file when it is being called; thus, it leads to way faster load times.

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
16. **grep [OPTIONS] PATTERN [FILE...]**
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
17. The `curl` command is used to download or upload data using protocols such as FTP, SFTP, HTTP and HTTPS. 
    ```sh
    $ curl -L google.com
    ```
18. The `which` command is used to identify and report the location of the provided executable. For instance, you may wish to see the location of the executable when calling `python3`
    ```sh
    $ which python3
    /usr/local/bin/python3
    ```
19. The `top` command can help you monitor running processes and the resources (such as memory) they are currently using.
    - `top-u myuser` -> Display processes for the user **myuser**
20. `man` (Manual) -> To access the manual pages for a specific command. It provides detailed information about the command, including its syntax, options, and examples.
    ```sh
    man ls
    ```
    - Use **arrow keys** or the **spacebar** to navigate through the manual pages. Press **q** to exit the manual.
21. The `uname` and `whoami` commands allow you to access some basic information that comes in handy when you work on multiple system
    - The `whoami` command in Linux returns the current user’s username. It stands for **who am I?** and it’s often used to determine the current user’s identity in shell scripts or the terminal.
    - The `uname` command in Linux displays information about the system’s kernel, including the kernel name, hostname, kernel release, kernel version, and machine hardware name.

        - Use `uname -s` to display the kernel name.
        - Use `uname -n` to display the hostname.
        - Use `uname -r` to display the kernel release.
        - Use `uname -v` to display the kernel version.
        - Use `uname -m` to display the machine hardware name.
        - Use `uname -a` to display all.
