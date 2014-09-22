---
layout: post
title: "Letter Changes"
description: ""
category: 
tags: []
---
{% include JB/setup %}

Using the JavaScript language, have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string.

  	string = "Test.";
  	function letterChange(string) {
      var newArray = string.split("");
      var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
      var capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
      var holder = "";
      for (var i = 0; i &lt; newArray.length; i++) {
        for (var k = 0 ; k &lt; capital.length; k ++) {
          if (newArray[i] === capital[k]) {
            //console.log(newArray[i]+"--&gt;"+capital[k-1]);
            x = capital[k-1];
            console.log(x);
          }
        }
        for (var j = 0 ; j &lt; lowerCase.length; j ++) {
          if (newArray[i] === lowerCase[j]) {
            //console.log(newArray[i]+"--&gt;"+lowerCase[j-1]);
            y = lowerCase[j-1];
            console.log(y);
          }
        }
      }
    }
    letterChange(string);

Will continue later. I'm off to NYC for the weekend!