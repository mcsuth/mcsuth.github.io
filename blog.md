---
layout: page
title: Blogogogooggoog
tagline: Jet lagged in vacation and decided to transition from wordpress to jekyll.
---
{% include JB/setup %}

<ul>
  {% for post in site.posts limit: 10 %}  
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a> - {{ post.date | date:"%B %d, %Y" }} 
      <!-- <p>{{ post.content | strip_html | truncatewords:20}}</p> -->
      <p>{{ post.content }}</p>

		  {% unless post.tags == empty %}
		    <ul class="tag_box inline">
		      <li>Tags: </li>
		      {% assign tags_list = post.tags %}
		      {% include JB/tags_list %}
		    </ul>
		  {% endunless %}  

		  {% unless post.categories == empty %}
		    <ul class="tag_box inline">
		      <li>Categories: </li>
		      {% assign tags_list = post.categories %}
		      {% include JB/tags_list %}
		    </ul>
		  {% endunless %}  

    </li>
  {% endfor %}
</ul>

<!-- USE THIS TO HIGHLIGHT CODE -->
<!-- {% highlight ruby %}
  ruby code in here...
{% endhighlight %} -->
