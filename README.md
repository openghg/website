## OpenGHG website

A simple [Jekyll](https://jekyllrb.com/) based site for [openghg.org](https://openghg.org)

## Modify and build locally

This site uses Jekyll to create pages using a simple markdown format. Pages are easily modified by changing
the `.md` files in the root directory of the repo.

### Install ruby
You will first need to install ruby. To do this please follow the [instructions here](https://www.digitalocean.com/community/tutorials/how-to-install-ruby-on-rails-with-rbenv-on-ubuntu-18-04). Note that this site has been built and tested to work with Ruby 3.1.2 but should work with other versions of Ruby as well.

### Build the site 

Next run
```console
$ gem install bundler jekyll
```

Next move into the `website` directory and run

```console
$ bundle install
```

This stage installs the gems (Ruby libraries) used to build the site. You are now ready to serve a local version of the site using

```console
$ bundle exec jekyll serve
```

This will start a local server at `127.0.0.1:4000` to allow you to see changes made to the site.

## Deploy

Deployment is done automatically by GitHub pages.

## Credits

The template used to build the site is a modified version of a template by [Forestry.io](https://github.com/forestryio/ubuild-jekyll).
