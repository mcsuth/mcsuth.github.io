---
layout: post
title: "Recursive Ruby   Factorials"
description: ""
category: [Solution]
tags: [Ruby]
---
{% include JB/setup %}

<pre>
def factorial(n)
  if n == 0
    1
  else
    n * factorial(n - 1)
  end
end
factorial(5)
//=&gt; 120
</pre>