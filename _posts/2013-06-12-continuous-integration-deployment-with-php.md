---
layout: post
title: Why you should consider Continuous Integration
date: 2013-06-12 17:13:15
category: devops
tags:
- agile
- continuous delivery
- continuous deployment
- continuous integration
- devops
- php
comments: true
---

Last night at the [DCPHP](http://www.meetup.com/DC-PHP), I gave a short "lightning" talk on [Continuous Integration and Deployment](https://speakerdeck.com/squinones/continuous-integration-and-deployment-with-php) in the context of PHP applications. I really like the lightning talk format as it forces you to focus on the meat of your topic-- there's no time to get distracted by details. As great as that is, though, I wanted to expand a little on the subject and touch on some of the details that I couldn't include in my presentation.

##What is Continuous Integration?
Continuous Integration is a grand-sounding name for a very simple concept. Every time you make a change to your application's code (or, at least, on a very frequent and recurring basis), you build and test the entire application. Each change is integrated in to the application immediately.

Of course building and testing your entire application after each and every commit seems like a big task, and it is. Because we're building so frequently, it's essential that our building and testing happens automatically. Human intervention in the process has to be limited only to occasions when a build fails. When everything builds successfully, it should happen in the background like magic.

##What's Wrong With Traditional Build/Deployment Practices?
To answer that question, it's important that we think about everything that usually goes in to building and deploying an application, specifically a web-facing PHP application. Very often there are configuration files that need to be modified. Bootstrap scripts and autoloaders need to be updated. Sometimes we find ourselves writing scripts to move files around, or update databases.

Hopefully part of the process involves running some kind of automated tests.

And once all of that is done, and it's time to deploy, we find ourselves staring at an FTP client. Often we use our VCS as a deployment tool, which is great because typing 'svn update' is so simple, but how many of you have ever left a .git directory or some other VCS artifact hanging out there for the world to see?

Sometimes we're stuck copying and editing files by hand in production, which is the kind of thing that gives me nightmares.

To put it bluntly, building and pushing by hand sucks. It's extremely error-prone and however unintuitive it may sound, the more you do it, the more likely you are to screw something up. When it's two in the morning and you're tired and you've done it a million times before, your attention wanders. You forget a step. You push the wrong thing out to production or forget to run a database update script and now you have a fire on your hands. Several years ago I was manually moving a production application between two servers for routine maintenance. It was something I had done hundreds of times before. I forgot to scp a file over and brought the system up on a month-old copy of the database. It took two days to set things straight again. That was a lesson I don't think I could ever forget.

If that's not bad enough, doing it by hand encourages another kind of laziness. We're developers and when we see problems, it's in our nature to fix them. "It's just a simple fix," we'll tell ourselves. Maybe no one's noticed it's broken yet and a quick edit to that one file will save the headache of a problem report in the morning. Maybe we'll remember to commit the change to the repo as well, or maybe in six weeks that bug will show its ugly face again the next time someone deploys the unedited version of the code from git.

##There is a Better Way
Continuous Integration is one of the practices of Extreme Programming and Agile Development. When you think about it, it's a perfect fit. Agile development is all about short, tight iterations. User story, enhancement, build, release. Lather, rinse, repeat. Martin Fowler and Kent Beck first described CI back in the late 90s and [Martin's original article](http://www.martinfowler.com/articles/continuousIntegration.html) is still essential reading for any team looking to adopt the practice.

Before you can get started with CI, though, you need to prepare your codebase. If you don't have automated tests, you're going to need them. Going continuous relies on having confidence in the state of the application and the only way to build that confidence is through automated, repeatable tests.

You're also going to need an environment that's as similar to production as is reasonably possible. Today, thanks to the ease of setting up virtual machines (what up, [vagrant](http://vagrantup.com) and [puphpet](http://puphpet.com)!?), there's no excuse to develop and test in Windows and then deploy on Linux anymore.

Once your codebase is ready, it's time to start automating your builds. There are tons of tools out there to handle build automation, from ye olde make(1) to rake and phing and ant and maven and so on. I'm personally a fan of phing (which is inspired by ant and php-focused), but feel free to use whatever you're most comfortable with.

While you're evaluating build automation tools, don't forget about your databases! If you use an RDBMS and don't use any database migration tools, start! Database migration tools are like version control for your database, and they provide a framework for deploying database changes in a sane way. Many major PHP frameworks include a migration tool, and there are plenty of standalone tools like [dbdeploy](http://dbdeploy.com), [liquibase](http://www.liquibase.org), and [alembic](https://bitbucket.org/zzzeek/alembic) (it's not just for python projects!).

##Now the Real Decisions Have to be Made
What does a good build look like? How much code needs to be covered by tests before you feel confident to deploy? Should a build fail because a developer failed to follow a coding standard or forgot to add auto-documentation tags to her comments? Should a build be considered successful even if the number of findings from your static analysis tool doubled since the last release?

These are questions that every team needs to answer for themselves, but when you think about it, having to consider what concrete, objective criteria need to be met before you deliver software is a great problem to have!

This is a good time to start looking at Continuous Integration servers. There are tons of them out there, both free and commercial, but they all perform essentially the same functions. The CI server is the tool that's going to monitor your VCS repository for changes, run your build automation scripts, notify your team when things go poorly, and kick off your deployments.

In a future article, we'll explore each of these stages in more detail, so stay tuned!

##Further Reading

* [Phing Getting Started Guide](http://www.phing.info/docs/guide/trunk/chapters/GettingStarted.html)
* [Continuous Integration by Martin Fowler](http://www.martinfowler.com/articles/continuousIntegration.html)
