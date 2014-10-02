---
layout: page
title: Smith Suth
tagline: Jr Front-End Developer
---
{% include JB/setup %}

<!-- <ul class=""> -->
  {% for post in site.posts limit: 5 %}  
    <!-- <li class=""> -->
      <h1 class=""><a href="{{ post.url }}">{{ post.title }}</a><small><p>{{ post.date | date:"%B %d, %Y" }}</p></small></h1>
      <!-- <p>{{ post.content | strip_html | truncatewords:20}}</p> -->
      <p class="">{{ post.content }}</p>

      <!-- TAGS AND CATEGORIES -->
      <!-- {% unless post.tags == empty %}
        <div class="tag_box inline">
          <div>Tags: </div>
          {% assign tags_list = post.tags %}
          {% include JB/tags_list %}
        </div>
      {% endunless %}  

      {% unless post.categories == empty %}
        <div class="tag_box inline">
          <div>Categories: </div>
          {% assign categories_list = post.categories %}
          {% include JB/categories_list %}
        </div>
      {% endunless %}   -->

    <!-- </li> -->
  {% endfor %}

  <hr>
  <pre>
    {% for post in site.posts%}
      {{post.title}}
    {% endfor %}
  </pre>
    <ul class="pagination">
    {% if page.previous %}
      <li class="prev"><a href="{{ BASE_PATH }}{{ page.previous.url }}" title="{{ page.previous.title }}">&laquo; Previous</a></li>
    {% else %}
      <li class="prev disabled"><a>&larr; Previous</a></li>
    {% endif %}
      <li><a href="{{ BASE_PATH }}{{ site.JB.archive_path }}">Archive</a></li>
    {% if page.next %}
      <li class="next"><a href="{{ BASE_PATH }}{{ page.next.url }}" title="{{ page.next.title }}">Next &raquo;</a></li>
    {% else %}
      <li class="next disabled"><a>Next &rarr;</a>
    {% endif %}
    </ul>
  <hr>

<!-- USE THIS TO HIGHLIGHT CODE -->
<!-- {% highlight ruby %}
  ruby code in here...
{% endhighlight %} -->
