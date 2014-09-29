---
layout: post
title: "Code School: JavaScript Part 2 - 1.7"
description: ""
category: 
tags: []
---
{% include JB/setup %}

    var currentGen = 1;
    var totalGen = 19;
    var totalMW = 0;

    while (currentGen &lt;= 4) {
      var megaWatts = 62;
      var totalMW = totalMW + megaWatts;
      console.log("Generator #" + currentGen + " is on, adding " + megaWatts + " MW, for a total of " + totalMW + " MW!");
      currentGen ++;
    }
    
    for(var nextGen = currentGen; nextGen &lt;= totalGen; nextGen++) {
      var megaWatts = 124;
      var totalMW = totalMW + megaWatts;
      console.log("Generator #" + nextGen + " is on, adding " + megaWatts + " MW, for a total of " + totalMW + " MW!");
    }