## Glasses & Shades - built with cloudcannon jekyll starter called Fur

E-commerce with Jekyll. Browse through the [live site](https://glassesandshades.com).

## Features

* List product with multiple colours and sizes
* Take payment online using SnipCart
* Contact form
* Optimised for editing in [CloudCannon](http://cloudcannon.com/)
* RSS/Atom feed
* SEO tags
* Google Analytics

## Develop

Built with [Jekyll](http://jekyllrb.com/) version 3.4.3, but should support newer versions as well.

Install the dependencies with [Bundler](http://bundler.io/):

~~~bash
$ bundle install
~~~

Run `jekyll` commands through Bundler to ensure you're using the right versions:

~~~bash
$ bundle exec jekyll serve
~~~

## Editing

Optimised for adding, updating and removing products and editing the navigation and footer in CloudCannon.

### Posts

* Add, update or remove a post in the *Posts* collection.
* Change the defaults when new posts are created in `_posts/_defaults.md`.

### Navigation

* Exposed as a data file to give clients better access.
* Set in the *Data* / *Navigation* section.

### Footer

* Exposed as a data file to give clients better access.
* Set in the *Data* / *Footer* section.
