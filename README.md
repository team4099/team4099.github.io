# FRC Team 4099 Website:

This website is built using [Jekyll](http://jekyllrb.com/), a tool that generates static webpages. This means that you get the performance advantages of a static website, but you get the convenience of using `includes` and `layouts` like PHP. 

## Getting Jekyll Set Up Locally

You can set up Jekyll to run on your computer, allowing you to make changes and see their effect before modifying the live page. In fact, **do not push any changes to GitHub before you verify that they work locally.** 

Jekyll setup instructions are available on their website for both [Windows](http://jekyllrb.com/docs/windows/) and [Linux/macOS](http://jekyllrb.com/docs/installation/). If you are using Windows, we recommend that you follow the RubyInstaller option - that is the one that has worked best for us so far.

## Getting Git Set Up Locally

Before you can push changes to the server, you'll need to make a GitHub account and have a team lead add you to the Team 4099 organization. 

### Git Terms
- repository/repo - a folder that contains files for a project. We use different repos for each project.
- local copy  / working copy - a version of a repository stored on your computer, as opposed to on GitHub servers
- `clone` - making a working copy of the repository. With GitHub, the main copy of the repository is saved on GitHub's servers. To modify it or to view it, you have to make a local copy and edit that.
- `add` or stage changes - making Git keep track of the changes you've made. If you make changes aand you don't stage them, they wil not be uploaded to the server. This can be useful (personal settings files that may be created), but can also be annoying to forget if you didn't stage files when you meant to.
- `commit` - store staged changes locally with a message. This logs whatever is staged and keeps track of it with a message. Make sure to commit often, because it is easier to keep track of what changed if commits do not contain a super long list of changes. Rules for how to write a good commit message are [here](https://chris.beams.io/posts/git-commit/#seven-rules).
- `push` - send commits to the server. This is usually simple - until someone makes edits to the same files as you at the same time as you.
- `pull` - retrieve commits from other people. Make sure all of your changes are staged and committed before you pull. 
- merge conflict - when your changes conflict with changes that someone else made. People will make these sound scary, but they're easy to fix if you remember that all you have to do is make the conflicting files look like whatever you want on the server. It's even easier if you use a nice editor like Visual Studio Code, which just lets you click "Accept Yours" or "Accept Theirs" on each conflict. Remember to `commit` and `push` once you do this.

If you are unfamiliar with the command line, we recommend that you use [GitHub Desktop](https://desktop.github.com/) to do all of this.

### Actually Getting our Website Running Locally

In GitHub Desktop, enter the URL of this repository (it's also in the little green button that says `clone` on the GitHub page). If you are using the command line and need help, ask a team lead - we'll assume that if you need the guide, you are using GitHub Desktop.

This should get a local copy of the repository downloaded. Then, open the RubyInstaller `bash` shell that you installed while installing Jekyll.

#### Bash Crash Course

- Commands are formatted as follows: `<command> <arguments>` and run by pressing `enter`. 
- Press `tab` to autocomplete whatever file/directory name you are typing if it is valid. Press it multiple times to cycle through suggestions.
- directory - a synonym for folder
- `ls` - a command with no required arguments that lists all files rnd directories in your `pwd`
- `pwd` - Present Working Directory - whatever folder you're in right now. Also works as a command to rhow you what the `pwd` is.
- `cd` - change directory. This command takes one argument - which directory to change to. This directory has to be in the `pwd`.


Use the above crarh course to get to the directory that you `clone`d the website repository to. Then, run `bundle install`. Note that this command only has to be run the first time you are doing this.

Finally, run `bundle exec jekyll serve`. This will run Jekyll and allow you to view the website locally by going to `localhost:4000` in your browser. Note that sometimes, Jekyll takes a few seconds to update with changes you make. Also, sometimes, Chrome will not load in new changes. If this happens, press `F12` and then right click the refresh button, and select `Empty Cache and Hard Reload`. 

## Editing Pages and Creating Posts

Blog posts go in tne `_posts` directory, while learning pages go in the `_learn` directory. Both of these types of pages are written in Markdown, a guide for which can be found [here](https://guides.github.com/features/mastering-markdown/). 

All blog posts must begin with what Jekyll calls "front matter", which is data that gives Jekyll some information about your page:
```liquid
---
layout: post
title:  <title>
date:   yyyy-mm-dd hh:MM:ss -0500
categories: blog
author: <your name>
---
```
The blog post file names need to be as follows: `yyyy-mm-dd-<title>.md`, and the title in the filename must have spaces replaced by underscores. 

The learn pages need less front matter:
```liquid
---
title: <title>
categories: business
---
```

Their filenames should make it so that alphabetical order for the files is the correct display order on the page. 
