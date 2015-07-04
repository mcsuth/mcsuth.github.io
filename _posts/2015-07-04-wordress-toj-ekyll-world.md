---
layout: post
title: "Wordpress to Jekyll Blog"
description: ""
category: ['tutorial', 'tips']
tags: ['jekyll', 'github pages', 'wordpress.com', 'ruby', 'gems', 'git']
---
{% include JB/setup %}

So you've got a github personal website @ `yourname.github.io` and now you want to port over your wordpress.com blog over. Follow through so checkout what I did. The downside to this way of importing is that it doesn't include a way to import image assets.

## 1. Install Jekyll

#### A. Install Jekyll Gem
Jekyll uses Ruby so you'll have to install the [gem](www.google.com): `gem install jekyll`

#### B. Troubleshoot

You try to install the Jekyll gem but you get the errors:

  ERROR:  While executing gem ... (Gem::FilePermissionError)
      You don't have write permissions for the /Library/Ruby/Gems/2.0.0 directory.

Run `sudo gem install jekyll` to force that shit. And since you're sudo-ing this command you will need to input your password.

#### C. Create Blog
`jekyll new bloggity` This will create a 'bloggity' directory.

## 2. Port Over Wordpress.com Content

#### A. Export XML from Wordpress.com

Go to `https://[your-blog-name].wordpress.com/wp-admin/export.php?type=export` to download your XML file. Once you're downloaded the XML file move it to your `bloggity` directory.

#### B. Start Importing Content

Run the following command `ruby -rubygems -e 'require "jekyll-import"; JekyllImport::Importers::WordpressDotCom.run({ "source" => "./[your-blog-name.wordpress.xxx-xx-xx].xml" })'` This use the [Hpricot](https://github.com/hpricot/hpricot) gem to parse through the HTML content of your blog. NOTE: Hpricot is no longer maintained.


You may get an error about Hpricot so you will need to `gem install hpricot` or `sudo gem install hpricot`.

#### C. Check out your blog
Run the command `jekyll serve --watch` while you're in your `bloggity` folder and your blog will serve up on `localhost:4000`

## 3. Restructure Your Github Pages

#### A. Move blog out to main directory
So now, you're thinking: `Cool, now I have my blog in some other folder inside my github page. I want to have a static index.html and I want to link off to '/blog' to go to my blog.` Let's restructure some shit.

If you `cd ../` out into the main directory your `bloggity` folder structure should only contain the nested folder `bloggity`.

Move all the contents of `bloggity` out up into the main directory so that the folder structure looks like the following (you will then have an empty `bloggity` folder):

    _attachments/     _site/
    _config.yml       about.md
    _includes/        assets/
    _layouts/       bloggity
    _nav_menu_items/    [your-blog-name.wordpress.xxx-xx-xx].xml
    _pages/         css/
    _posts/         feed.xml
    _sass/          index.html

#### B. Move index.html inside `bloggity` folder with `mv index.html bloggity/index.html`

    <!DOCTYPE html>
    <html>
    <head>
        <title>Bloggity</title>
    </head>
    <body>
        Hi, checkout mah blog @ <a href="bloggity/">here</a>.
    </body>
    </html>

#### C. Create your static index.html page in the main folder

#### D. Check out `http://localhost:4000/` and your blog at `http://localhost:4000/bloggity/`


# Some Jekkyll Shortcuts

Start server with console updates: `jekyll serve --watch`

Create a post: `rake post title="Wazzap"`

Create a page: `rake page name="pages/about.md"`
or `rake page name="pages/about"` - this will create the file: ./pages/about/index.html

Publish: `git add .` `git commit -m "Add new content"` `git push origin master`