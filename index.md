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
        link_text: Documentation
      - link: "https://gemmadashboard.openghg.org/"
        link_text: Gemma Dashboard
      - link: "https://openghg.github.io/decc_dashboard/"
        link_text: Measurements Dashboard 
      - link: "https://github.com/openghg/openghg/blob/devel/CHANGELOG.md"
        link_text: Changelog

  - template: content-feature
    block: section-header
    header: Getting started

  - template: content-feature
    block: news-1
    headline: Installation
    content: You can get up and running with OpenGHG within a few minutes by following our installation guide. Along with our range of tutorials you'll get OpenGHG installed using conda or pip, your own local data store setup and be able to retrieve data from archives such as ICOS and CEDA in no time.
    link_text: Click here for our installation guide.
    link: https://docs.openghg.org/install.html

  - template: content-feature
    block: news-1
    headline: Tutorials
    content: We've created some video tutorials covering how to get setup with OpenGHG and some of the data standardisation, retrieval and plotting tools we've created. You can find the notebooks we use in these videos on our documentation page, and in our repository.
    link_text: Click here for more tutorials.
    link: https://docs.openghg.org/tutorials/index.html


  - template: content-feature
    block: section-header
    header: News

  - template: content-feature
    block: news-1
    headline: Version 0.10.1 released
    date: 2024-09-27
    content: Version 0.10.1 of OpenGHG brings bug fixes to search by passing a dictionary to data_level parameter.
    link_text: For the full list of changes see our changelog.
    link: https://github.com/openghg/openghg/blob/devel/CHANGELOG.md#0101---2024-09-27

  - template: content-feature
    block: news-1
    headline: Version 0.10.0 released
    date: 2024-09-24
    content: Version 0.10.0 of OpenGHG brings an update for data type classes to dynamically select inputs for the parse function and include any required/optional keys not passed to it in the metadata. Also range of other bug fixes.
    link_text: For the full list of changes see our changelog.
    link: https://github.com/openghg/openghg/blob/devel/CHANGELOG.md#0100---2024-09-24

  - template: content-feature
    block: section-header
    header: Videos

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
    content: OpenGHG 2023 - CC0
---

Error
