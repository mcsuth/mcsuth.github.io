---
layout: post
title: "First Reverse"
description: ""
category: 
tags: []
---
{% include JB/setup %}

	var myString = "I will tell you that my name is Smith.";
	function myFunction(input) {
	  x = input.split("");
	  y = x.reverse();
	  return (y.join(""));
	}
	console.log (myFunction(myString));

<em>Explanation</em>: You cannot simply reverse a string by implementing the <strong>reverse()</strong> method as if it were an array. You must split each letter and space in the string such that they become separate elements, then you can reverse each element, and finally you can join the elements to form a new string.