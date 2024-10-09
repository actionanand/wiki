---
slug: git-commands
title: Git Commands We Should Know
authors: anand
tags: [git, github]
---

import Highlight from '@site/src/components/Highlight';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem'


<!-- ### <Highlight color='#004080' highlight='fg' fontWeight='bold'> sub tab </Highlight> -->

1. Uninitialize Git repository

```bash
cd path/to/repo
rm -rf .git
```

2. To see your initialized Git user locally

```sh
git config --list
```
{/* truncate */}

3. Drop all the changes

```sh
git stash -u && git stash drop
```
4. Apply all the changes(current  changes) after pulling latest changes from 'master' or same branch

    - `git stash` -> stash the changes from working branch
    - `git pull` or `git pull origin master` -> pull the changes from current or master branch
    - `git stash pop` -> This will apply stashed changes back to working copy and remove the changes from stash unless you have conflicts. In case of conflicts, they will stay in stash so that you can start over if needed.
    - `git stash list` -> if you need to see what is in your stash

## Ref

1. [10 Git Commands Every Developer Should Know](https://www.freecodecamp.org/news/10-important-git-commands-that-every-developer-should-know/)
2. [Git Branching Commands Explained with Examples](https://www.freecodecamp.org/news/git-branching-commands-explained/)
3. [git commands](https://github.com/joshnh/Git-Commands)
4. [Git Branches: List, Create, Switch to, Merge, Push, & Delete](https://www.nobledesktop.com/learn/git/git-branches)
5. [git stash and git pull - Stack Overflow](https://stackoverflow.com/questions/12476239/git-stash-and-git-pull)
