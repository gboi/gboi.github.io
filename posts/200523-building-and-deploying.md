---
pageTitle: Building and Deploying
date: 2020-05-23
---

I work in IT: my job is to figure out stuff while vaguely grasping concepts.

So here I am, deciphering .yml build files, obsolete documentation and bickering with user interfaces that just *won't* look the way I expect them to.

But let's start from the beginning.

All those who drank from the fountain of programming knowledge are forever tainted by the sweet, sweet taste of *automation*.

First of all: this is an automatically generated static site. For all those non-tech-savvy who read me, it means there's no hidden magic *where the site is uploaded*; I put building blocks together (posts, menus, images) *before* uploading, press a button and voilà! What you're seeing right now comes out. First time I familiarized myself with the system was with my [music portfolio](https://crescendotto.com), albeit using a different system: while I use Jekyll to build and a personal hosting to get it up, this time I wanted to play with 11ty's building and Github pages' free hosting plan.

The cool thing about using Github as a hosting platform is that I can put my source code on the cloud and get it whenever, have a history of my edits (but explaining further would require an entire post about git — cool stuff by the way) and put everything up there just by writing `git push` on command line.

Problem: building. The difference between source code and the build is that, well, source code still has to be *built*. `git push`ing without building is like serving raw ingredients for lunch. We need a chef (or at least someone who knows how to turn on a grill).

So here comes [this post](https://snook.ca/archives/servers/deploying-11ty-to-gh-pages) to the rescue! Why building the site on my own (which is literally just another line of commands) and *then* pushing it when I could just push it and let Travis-CI build it and delivering it for me?

Did I really spend three to four hours looking into this system just to avoid writing two lines of commands instead of one? Yes.

Here's what happens:

1. I edit my cute little building blocks (e.g. write a new post)
2. I `git commit` and `git push` directly to Github
3. Travis knows I pushed the source to my ol' buddy Github, takes it and builds it
4. Travis sends over the built files to Github, which displays them all nicely
5. And presto, it's alive!

Of course, things didn't go quite as planned.

It's very rare for a blog post made "to clear confusion" and "to document one's own journey" to be perfectly clear. This one makes no exception. A programmer's experience differs too much from another's. It's just how it is, we're travelers of the web, wandering from a stack overflow issue to another. It's part of the journey.

I admit I did take my first steps on an unorthodox path: cannibalized a .travis.yml file (which is used by Travis to know *how* to build) from another repo (that blog post encouraged me, though!), didn't ask myself too many questions about what was written in it. Most of the problems I had actually stem from this. Do not be like me.

After a bit of tinkering and skimming through documentation, I managed to build the site... on another branch (to those unfamiliar: please imagine branches as parallel boxes where the code rests) on git.

I had two problems now:

+ I could only trigger a build by pressing a button on the Travis-CI site: way more cumbersome than writing two commands on command line!
+ I had to force my site to display the resources from the secondary branch where Travis sent the build.

Apparently I could, except I could find **no** option to do so, despite what all guides (even the official one!) claimed.

After a bit of looking around I found out another lost soul had my same problem and got my same diagnosis: *learn how to read, dude*. If you look for a *specific* part of the documentation, in fact (💢), you'll discover Github Pages supports two kinds of hosting:

+ github.io, which is restricted to personal use and only allows the master branch to be used as a display branch
+ githubpages.io, which is for projects and lets you choose which branch you want to display data from

Guess which one I picked. The hint's in the URL.

So I know had another problem to solve: how to tell Travis I needed to monitor my new **dev** branch, where I would push all my source code, then build from there and push it directly onto **master**? 

Meanwhile, years of dabbling into front-end development enlightened me on a trivial but worrying matter: what if it's my browser's fault? What if Firefox doesn't render a button correctly, that same button I keep seeing in all video tutorials which I just assumed was removed recently from the UI?

Indeed, Firefox didn't render that button correctly. I set everything up on Chrome, turned the switch on and everything worked just fine.

At this point I was free to focus on the whole choose-the-branch-I-tell-you thing. It was time to properly read documentation.

I easily find a Github Pages Deployement section on the docs and stumble upon this warning:

> This page documents deployments using dpl v1 which currently is the default version. The next major version dpl v2 will be released soon, and we recommend starting to use it. Please see [our blog post](https://blog.travis-ci.com/2019-08-27-deployment-tooling-dpl-v2-preview-release) for details. [dpl v2 documentation can be found here](https://docs.travis-ci.com/user/deployment-v2).

Who am I to ignore recommendations? I immediately start rewriting my file to make it dpl v2 compatible, sure it will work on first try. It doesn't.

After quite a bit of trying I finally look at the logs Travis-CI spits out on building and realize the configuration I wrote is *wrong*: said so on the first line. After a bit of fixing, this is what came out of it (so you can copy in your own project without understanding a single thing and then have my same exact issues):

```javascript
language: node_js
node_js:
  - 12.6.0
before_script:
  - npm install @11ty/eleventy -g
script: eleventy --pathprefix="/"
branches:
  only:
  - dev
deploy:
  - provider: pages
    token: $GITHUB_TOKEN  # Set in travis-ci.org dashboard, marked secure
    edge: true
    local_dir: _site
    target_branch: master
    on:
      branch: dev
```

Hopefully it's easier for you.

Next up is studying from 11ty templates and get some ideas, OR... play around with [Webmention](https://webmention.io) and figure out if I can implement a comments system.