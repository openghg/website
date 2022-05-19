---
layout: blocks
title: Home
permalink: /

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
      - link: "https://docs.openghg.org/whatsnew/index.html"
        link_text: Releases
      - link: "/cloud/"
        link_text: OpenGHG Cloud

  - template: content-feature
    block: section-header
    header: News

  - template: content-feature
    block: news-1
    headline: OpenGHG version 0.1.0 released!
    date: 2022-05-18
    content: We're very happy to announce that version 0.1.0 of OpenGHG has been released to PyPI and conda. This release contains a lot of features such as data standardisation, comparison, analysis and plotting. It also allows you to retrieve and process NOAA Obspack data and pull data from the ICOS Carbon Portal and the CEDA archive.
    link_text: Click here for release notes.
    link: "https://docs.openghg.org/whatsnew/index.html"

  - template: content-feature
    block: section-header
    header: Getting started

  - template: content-feature
    block: news-1
    headline: Tutorials
    content: As we ready the OpenGHG cloud you can try OpenGHG locally on your own computer. We've created some video tutorials covering how to get setup with OpenGHG and some of the data standardisation, retrieval and plotting tools we've created. You can find the notebooks we use in these videos on our documentation page, and in our repository.
    link_text: Click here for more tutorials.
    link: https://docs.openghg.org/tutorials/index.html

  - template: content-feature
    block: ascii-video-1
    headline: Installing OpenGHG - pip
    date: 2022-05-18
    content: This short video covers creating a Python virtual environment and installing OpenGHG into it.
    ascii_url: https://asciinema.org/a/495780.js
    ascii_id: asciicast-495780
    video_url:  https://asciinema.org/a/495780

  - template: content-feature
    block: ascii-video-1
    headline: Installing OpenGHG - conda
    date: 2022-05-18
    content: This short video covers creating a conda environment and installing OpenGHG.
    ascii_url: https://asciinema.org/a/495812.js
    ascii_id: asciicast-495812
    video_url:  https://asciinema.org/a/495812
    video_side: left

  - template: content-feature
    block: video-tutorial-1
    headline: Installing OpenGHG using pip and standardising some data
    date: 2022-05-17
    video_side: right
    content: This short tutorial covers getting OpenGHG setup, retrieving some example data, standardising it and making a quick plot.
    embed_url: https://www.youtube-nocookie.com/embed/YqiKNvANI9o

  # - template: content-feature
  #   block: video-tutorial-1
  #   headline: Retrieving and plotting data
  #   date: 2022-05-18
  #   youtube_url: something
  #   video_side: left
  #   embed_url: https://www.youtube-nocookie.com/embed/C0DPdy98e4c


  # - template: content-feature
  #   block: video-tutorial-1
  #   headline: Pulling data from the ICOS Carbon Portal
  #   date: 2022-05-18
  #   video_side: left
  #   embed_url: https://www.youtube-nocookie.com/embed/C0DPdy98e4c

  - template: content-feature
    block: section-header
    header: What is OpenGHG?

  - template: content-feature
    block: feature-1
    media_alignment: Right
    headline: <span
      class="light">A platform for collaboration</span>
    content: For researchers, stakeholders and the public, OpenGHG will offer a platform to perform analyses on greenhouse gas measurements from sites around the world.
    media:
      image: "/uploads/pngs/Figure_2.png"
      alt_text: Sites worldwide

  - template: content-feature
    block: feature-1
    media_alignment: Right
    headline: <strong>Easy analysis</strong>
    content: Analyse current data and share with collaborators using our cloud hosted JupyterHub and BinderHub
    media:
      image: "/uploads/screenshots/site_analysis_notebook.png"
      alt_text: Jupyter Notebook powered analysis

  - template: content-feature
    block: feature-1
    media_alignment: Right
    headline: <strong>Open source technologies</strong>
    content: OpenGHG will be built on open source technologies to allow cutting edge research on highly scalable cloud platforms
    media:
      image: "/uploads/pngs/technologies_lower.png"
      alt_text: Open source technologies

  - template: content-feature-imagelink
    block: feature-imagelink
    media_alignment: Right
    headline: <strong>Cloud experience</strong>
    content: Built with knowledge gained during the development of the HUGS Cloud platform, the precursor to this project.
    media:
      image_link: "http://www.hugs-cloud.com"
      image: "/uploads/pngs/hugs_site.png"
      alt_text: HUGS Cloud

  - template: simple-footer
    block: footer-1
    content: OpenGHG 2022 - CC0
---

Error
