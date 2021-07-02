# GIT WORKFLOW RULES 

The following is a outline of the rules we are going to follow while working in the guidance request app. 
 
The sections are as follows: 

1) [How should I keep my branch up to date with main?](#1)
2) [How often should I make commits?](#2)
3) [How do I push up to main?](#3) 
4) [How do I handle when I am ready to make a pull request?](#4)
5) [What if my code needs to be changed during the review process?](#5)
6) [What happens after my code has been merged into main?](#6)
7) [How do I name my branch?](#7)
8) [How should I format my commit messages?](#8)
9) [Why am I doing git push --force?](#9)


## <a name="1"></a> How should I keep my branch up to date with main?
* git checkout main
* git pull origin main
* git checkout your-branch-name
* git rebase main


## <a name="2"></a> How often should I make commits?
* Often 
* Small frequent commits are a better way of keeping the branch up to date

## <a name="3"></a> How do I push up my local branch to my remote branch? 
* git push --force

## <a name="4"></a> How do I handle when I am ready to make a pull request?
* You are going to squash your commits using:
* git rebase -i HEAD~ insert number of commits to be squashed
* Then do git push --force 

## <a name="5"></a> What if my code needs to be changes during the review process?
* If code needs to be updated
* Go back to branch 
* Fix issue 
* git add . 
* git commit
* git push --force  
  
## <a name="6"></a> What happens after my code has been merged into main?
* Delete remote branch
* Delete local branch
* delete command: git branch -d <local-branch>
  
## <a name="7"></a>How do I name my branch? 
* Initials-issue-name
* Example, 
aa-login-feature 

## <a name="8"></a> How should I format my commit messages? 
Capitalized, short (50 chars or less) summary

More detailed explanatory text, if necessary.  Wrap it to about 72
characters or so. The blank
line separating the summary from the body is critical (unless you omit
the body entirely); tools like rebase can get confused if you run the
two together.

Write your commit message in the imperative: "Fix bug" and not "Fixed bug"
or "Fixes bug."  This convention matches up with commit messages generated
by commands like git merge and git revert.

Further paragraphs come after blank lines.

- Bullet points are okay, too

- Typically a hyphen or asterisk is used for the bullet, followed by a
  single space, with blank lines in between, but conventions vary here

- Use a hanging indent

If you use an issue tracker, add a reference(s) to them at the bottom,
like so:

Resolves: #123

## <a name="9"></a> Why am I doing git push --force? 
 You don't have do this if your commit has not be rebased and then merged into main in the remote repo. 
 However, if you are push from a branch which has already been rebased into main you need to do a git push --force.
