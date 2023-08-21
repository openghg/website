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
    headline: Version 0.6.2 released
    date: 2023-08-07
    content: Version 0.6.2 of OpenGHG brings a fix for incorrect object store paths being loaded in from JSON
    link_text: For the full list of changes see our changelog.
    link: https://github.com/openghg/openghg/blob/devel/CHANGELOG.md#062---2023-08-07

  - template: content-feature
    block: news-1
    headline: Version 0.6.1 released
    date: 2023-08-04
    content: Version 0.6.1 of OpenGHG brings some bug fixes for metadata handling with multiple object stores and the storage of high time resolution footprints
    link_text: For the full list of changes see our changelog.
    link: https://github.com/openghg/openghg/blob/devel/CHANGELOG.md#061---2023-08-04

  - template: content-feature
    block: news-1
    headline: Version 0.6.0 released
    date: 2023-07-18
    content: Today we release version 0.6.0 of OpenGHG. This release contains a number of new features including multiple object store support and an updated data management tool
    link_text: For the full list of changes see our changelog.
    link: https://github.com/openghg/openghg/blob/devel/CHANGELOG.md#060---2023-07-18

- template: content-feature
    block: news-1
    headline: Updated NOAA ObsPack retrieval
    date: 2023-05-10
    content: With the release of version 0.5.1 of OpenGHG we've made some fixes to our NOAA ObsPack retrieval tutorial, install the latest version of OpenGHG from PyPI or conda today.
    link_text: Try the OpenGHG ObsPack tutorial.
    link: https://docs.openghg.org/tutorials/local/Exploring_data/Explore_NOAA_ObsPack.html

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
