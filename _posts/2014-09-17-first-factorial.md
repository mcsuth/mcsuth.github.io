---
layout: post
title: "First Factorial"
description: ""
category: 
tags: []
---
{% include JB/setup %}

	function myFactorial(input) {
		if (input === 0) {
			return (1);
		} else {
			return (input * myFactorial(input - 1));
		}
	};
	myFactorial(4);     //24