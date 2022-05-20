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
    date: 2022-05-19
    content: This short video covers creating a Python virtual environment and installing OpenGHG into it.
    ascii_url: https://asciinema.org/a/495780.js
    ascii_id: asciicast-495780
    video_url:  https://asciinema.org/a/495780
    video_side: left

  - template: content-feature
    block: ascii-video-1
    headline: Installing OpenGHG - conda
    date: 2022-05-19
    content: This short video covers creating a conda environment and installing OpenGHG.
    ascii_url: https://asciinema.org/a/495812.js
    ascii_id: asciicast-495812
    video_url:  https://asciinema.org/a/495812
    video_side: left

  - template: content-feature
    block: video-tutorial-1
    headline: Installing OpenGHG using pip and standardising some data
    date: 2022-05-19
    video_side: right
    content: This short tutorial covers getting OpenGHG setup, retrieving some example data, standardising it and making a quick plot.
    embed_url: https://www.youtube-nocookie.com/embed/YqiKNvANI9o

  - template: content-feature
    block: video-tutorial-1
    headline: Searching and plotting
    date: 2022-05-20
    video_side: right
    content: Here we cover searching, search refinement and plotting using a function from our <b>openghg.plotting</b> submodule.
    embed_url: https://www.youtube-nocookie.com/embed/noXITbOTo48

  - template: content-feature
    block: video-tutorial-1
    headline: Retrieving data from remote archives
    date: 2022-05-20
    video_side: right
    content: In this tutorial we cover retrieving data from the ICOS Carbon Portal and the CEDA archive.
    embed_url: https://www.youtube-nocookie.com/embed/512sRke9vcE
  

  - template: simple-footer
    block: footer-1
    content: OpenGHG 2022 - CC0
---

Error
