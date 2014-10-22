---
layout: post
title: "Week 5: General Assembly – WDI SF"
description: ""
category: 
tags: []
---
{% include JB/setup %}

I definitely dropped the ball last weekend and forgot to write a blog post about my first project.

#### Project #1

1. Solo Ruby on Rails project
2. Used APIs and Gems
3. Created multiple/associated models
4. Incorporated user authentication

Website: [sentivestor.herokuapp.com](http://sentivestor.herokuapp.com)

[gallery type="square" ids="364,366,365"]

My first project revolved around the notion of Behavioral Economics/Finance. Initially, I wanted to create a web application that allowed users to have free range of the website, search for a stock symbol, and then see a breakdown of recent tweets and its sentiment analysis. In addition to the sentiment analysis, I wanted users to be able to view the geographical location of the tweets. If I created this web application I would have had to only use 2-3 APIs (one for "grabbing" the tweets, one to perform sentiment analysis on the tweet, and another to use a map) and JavaScript to render the sentiment charts and map. This didn't pan out exactly the way I wanted it to.

#### Saturday

I devoted a few hours on Saturday to outline my schema and conceptualize the layout of the application.

#### Sunday

On Sunday, I spent a few hours collecting all the APIs/Gems I would/might use, read documentation, and atempted to get the Twitter API to work. Unfortunately, I freaked out real fast after I reached the Twitter API request limit and stopped all work. This happened after I requested to retrieve all Tweets that contained @AAPL...

#### Monday

By the end of the day on Monday I was able to successfully request from my APIs and they were fully functional. I learned that the Twitter API does not provide geolocation. So my idea of displaying a may to view sentiment trends was out of the window.

#### Tuesday

Since my idea of including a map was out, my instructor suggested that I create user authentication and then allow users to save symbols for future viewing. So, I created a User model to have a log-in/sign-up feature. For some odd reason it took me 4-5 tries to get the user authentication to work so it took me the whole day to do it.

#### Wednesday

On Wednesday, I worked on creating another model to allow users to save symbols. This functionality took me a longer time to do as well.

#### Thursday

The day before the presentation I styled my project a few times. Broke my stuff. Put it up on Heroku.

#### Friday

#### Presentation day!:
Wow, I was blown away by all the amazing projects! After presentations our instructors presented us with a General Assembly book-bag and shots of tequila, whiskey, and champagne. This was followed by  a few hours of bowling with food and more beer.

[gallery type="square" ids="369,370,372"]