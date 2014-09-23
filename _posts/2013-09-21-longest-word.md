---
layout: post
title: "Longest Word"
description: ""
category: 
tags: []
---
{% include JB/setup %}

##### Initial Though Process:

1. ***Split*** the string into a new array

2. ***Loop*** the new array and find the ***length*** of each element

3. Create an ***if*** statement that returns the longest element

However, I kept on getting lost between step 2 and three. I had set up the if statement, but I didn't really know where to go with comparing the lengths of each element. I ended up googling for examples and saw that others created var longest = 0 and var word = null so that they can perform some substitution.

##### New Thought Process:

1. Split the string into a new array

2. Create 2 variables (ie. var1, var2... in my case I used longest, word)

3. Loop the new array and find the length of each element

4. Create an if statement within the loop that executes if var1 (which is set to 0) is less than the length of the elements in the new array.

5. Because var1 was given the value of 0, each element within the new array will be tested against the condition: var1 &lt; length of element in new array.

6. Create substitutions so that each element will be compared with each other.


##### Basically, this is what happens:
	var1 = 0;   
	if var1 &lt; newArray's element's length, then substitute:   
	var1 = newArray's element's length and var2 = newArray's element   
	Round 1) var1 (value of zero) &lt; 1 (length of "I") so substitute...   
	var1 = 1 (length of "I") and var2 = "I"   
	Round 2) var1 (value of 1 from "I") &lt; 4 (length of "love") so substitute...   
	var1 = 4 (length of "love") and var2 = "love"   
	Round 3) var1 (value of 4 from "love") &lt; 6 (length of "eating") so substitute... 
	var1 = 6 (length of "eating") and var2="eating"   
	Round 4) var 1 (length of 6 from "eating") &lt; 4 (length of "rice")... NOT TRUE SO STOP HERE   
	Round 5) return the value of var2 // "eating"


	var sen = "I love eating rice.";
	function longestWord(input) {
		var newArray = input.split(" ");
		var var1 = 0;
		var var2 = "";
		for (var i = 0; i &lt; newArray.length; i++) {
			if (var1 &lt; newArray[i].length) {
				var1 = newArray[i].length;
				var2 = newArray[i];
			}
		}
			return (var2 <del>+":"+var2.length</del>);
	}
	longestWord(sen);

This worked for me. The crossed out sections are superfluous, but I like to see my steps.