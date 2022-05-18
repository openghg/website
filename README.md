# OpenGHG website

A simple [Jekyll](https://jekyllrb.com/) based site for [openghg.org](https://openghg.org)

## Modify and build locally

This site uses Jekyll to create pages using a simple Markdown / YAML format. Pages are easily modified by changing
the `.md` files in the root directory of the repo.

### Install Ruby - macOS

We recommend using `rbenv` to get Ruby installed. This makes handling different versions of Ruby easy. Follow [this guide](https://www.digitalocean.com/community/tutorials/how-to-install-ruby-on-rails-with-rbenv-on-macos) to get setup. We've built the
site using Ruby 3.1.2.

### Install Ruby - Linux

To get `rbenv` installed on Ubuntu please follow the [instructions here](https://www.digitalocean.com/community/tutorials/how-to-install-ruby-on-rails-with-rbenv-on-ubuntu-20-04). `rbenv` should be available for most Linux distributions.

### Install Ruby - Windows

The [RubyInstall](https://rubyinstaller.org/) is the recommended way of installing Ruby on Windows.

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

## Development

### News content

The site is based on templated blocks. These are just HTML files that are passed data from the markdown. For example, to create a new short post you could use the `news-1` block. Add this to the top of the `index.md` file (but below the navigation section).

```yaml
- template: content-feature
  block: news-1
  headline: OpenGHG version x.x.x released!
  date: 2023-05-18
  content: We're very happy to announce that version x.x.x of OpenGHG has been released to PyPI and conda! This release contains a lot of new features...
  link_text: Click here for release notes.
  link: "/releases/"
```

The `link` can either be a local link (taking us to the releases page here) or any URL.

### Video content

To add a new video tutorial post to the the front page you can use the `video-tutorial-1` block.

```yaml
- template: content-feature
  block: video-tutorial-1
  headline: Installing OpenGHG using pip or conda
  date: 2022-05-17
  video_side: left
  embed_url: https://www.youtube-nocookie.com/embed/your-embed-code
```

Notice you can specify the headline, date, the side of the page the video should be on and the embed URL of the YouTube video.

### Adding another main page

To add another page to the header bar, first create your new Markdown file in the root directory of the repository. Then add it to
the navigation bar at the top of each page. Note that you'll need to edit the navigation section of each of the root level markdown
files.

```yaml
page_sections:
  - template: navigation-header
    block: header-2
    logo: "/uploads/logo/OpenGHG_Logo_Portrait.png"
    navigation:
      - link: "/"
        link_text: Home
      - link: "/about/"
        link_text: About
      - link: "https://docs.openghg.org/"
        link_text: Docs
      - link: "/releases/"
        link_text: Releases
      - link: "/cloud/"
        link_text: OpenGHG Cloud
        # Add your page at the end
      - link: "/my_new_page/"
        link_text: New page
```

You can use `template.md` as a starting point for your new page.

### Adding images

All images should be added to the `uploads` folder and if necessary a sub-folder within that.

### Modifying page layout

If you want to modify the layout of a template or create a new template and use some custom CSS modify / add to the
`openghg_site.css` file under `uploads/css`.

## Deploy

Deployment is done automatically by GitHub pages.

## Credits

The template used to build the site is a modified version of a template by [Forestry.io](https://github.com/forestryio/ubuild-jekyll).
