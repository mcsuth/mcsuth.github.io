---
layout: post
title: "Get Up and Running with Node, Express, and Heroku"
description: ""
category: ['Tutorial']
tags: ['Node', 'Express', 'Heroku']
---
{% include JB/setup %}

## 1. Initialize your node project

`npm init`

  name: [name-of-your-project]
  version: [0.0.0]
  description: [a-description-here]
  entry point: (server.js) *this is auto-populate
  test command: [-]
  git repository:
  keywords:
  author:
  license: (ISC)

A `package.json` document will be created and you should get something similar to the following:

  {
    "name": "playgroundone",
    "version": "0.0.0",
    "description": "playground time",
    "main": "server.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "author": "",
    "license": "ISC"
  }

## 2. Install Node Dependencies

A. Install Express: `npm install express --save`
B. Install React: `npm install react --save`

## 3. Create and Edit Your `server.js`

    var express = require('express');
    var app = express();
    var port = process.env.PORT || 8080;

    // Serve static files
    app.use("/", express.static(__dirname));

    // Serve your app
    console.log('Served: http://localhost:' + port);
    app.listen(port);

Run `node server.js` in your terminal

## 5. Create Your `index.html`

  <!DOCTYPE html>
  <html>
    <head>
      <title>Playground</title>
    </head>
    <body>
      Waddap, this is a static page!
    </body>
  </html>

## 4. Create Your `Procfile`

  web: node server.js

## 5. Add crap into your `.gitignore` file

Add `node_modules` into your `.gitignore` file so that you don't push it up to your master. Nobody wants to see all your node modules. Haha jk, but in all seriousness, if you are expect people to collaborate and clone your project repository you don't want to include the node_nodules for them to download. They can `npm install` and have it locally.

## 6. Deploy to Heroku

A. Log into your Heroku account in your console: `heroku login`

    Email: [your@email.com]
    Password: [typing will be hidden]

B. Create your Heroku project: `heroku create [name-of-your-project]`

  * This will yield [name-of-your-project].herokuapp.com

    Creating [name-of-your-project]... done, stack is cedar-14
    https://[name-of-your-project].herokuapp.com/ | https://git.heroku.com/[name-of-your-project]git

C. Commit and push to Heroku

    git add .
    git commit -m "Init"
    git push heroku master

D. Check out your project! `heroku open`
