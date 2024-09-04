---
layout: home
author_profile: true
title: "Welcome to My Data Engineering Portfolio"
---

Here you'll find case studies and projects showcasing my experience in data engineering and cloud data warehousing solutions.

## Featured Projects

{% assign featured_posts = site.posts | where: "featured", true | sort: "date" | reverse %}

<div class="grid__wrapper">
  {% for post in featured_posts limit:15 %}
    <div class="grid__item">
      <article class="archive__item" itemscope itemtype="https://schema.org/CreativeWork">
        {% if post.header.teaser %}
          <div class="archive__item-teaser">
            <img src="{{ post.header.teaser | relative_url }}" alt="{{ post.title }}">
          </div>
        {% endif %}
        <h2 class="archive__item-title no_toc" itemprop="headline">
          <a href="{{ post.url | relative_url }}" rel="permalink">{{ post.title }}</a>
        </h2>
        {% if post.excerpt %}
          <p class="archive__item-excerpt" itemprop="description">{{ post.excerpt | markdownify | strip_html | truncate: 160 }}</p>
        {% endif %}
      </article>
    </div>
  {% endfor %}
</div>