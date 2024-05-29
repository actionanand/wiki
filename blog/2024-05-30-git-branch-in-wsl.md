---
slug: git-branch-in-wsl-ubuntu
title: Showing current git branch in Linux/bash(WSL) Terminal
authors: anand
tags: [wsl, linux, ubuntu, git, bash]
---

import Highlight from '@site/src/components/Highlight';

<!-- ## <Highlight color='#800031' highlight='fg' fontWeight='bold'> WSL </Highlight> -->

```sh
if [ "$color_prompt" = yes ]; then
   PS1='${debian_chroot:+($debian_chroot)}\[\033[01;32m\]\u@\h\[\033[00m\]:\[\033[01;34m\]\w\[\033[35m\]$(parse_git_branch)\[\033[36m\]\$\[\033[00m\] '
else
   PS1='${debian_chroot:+($debian_chroot)}\u@\h:\w$(parse_git_branch)\$ '
fi
```