---
layout: blocks
title: Home
permalink: /

page_sections:
  # --- Navigation Header ---
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
      - link: "https://gemmaconsole.openghg.org/"
        link_text: Gemma Console
      - link: "https://openghg.github.io/decc_dashboard/"
        link_text: Measurements Dashboard 
      - link: "https://github.com/openghg/openghg/blob/devel/CHANGELOG.md"
        link_text: Changelog

  # --- Getting Started ---
  - template: content-feature
    block: section-header
    header: Getting Started
    section_class: card-grid-container
  - template: content-feature
    block: card-grid
    cards:
      - headline: Installation
        content: You can get up and running with OpenGHG within a few minutes by following our installation guide. Along with our range of tutorials you'll get OpenGHG installed using conda or pip, your own local data store setup and be able to retrieve data from archives such as ICOS and CEDA in no time.
        link_text: Click here for our installation guide.
        link: https://docs.openghg.org/install.html
        icon: "fas fa-download"
      - headline: Tutorials
        content: We've created some video tutorials covering how to get setup with OpenGHG and some of the data standardisation, retrieval and plotting tools we've created. You can find the notebooks we use in these videos on our documentation page, and in our repository.
        link_text: Click here for more tutorials.
        link: https://docs.openghg.org/tutorials/index.html
        icon: "fas fa-video"
    section_class: section-container

  # --- News Section ---
  - template: content-feature
    block: section-header
    header: News
    section_class: card-grid-container 
  - template: content-feature
    block: carousel
    carousel_items:
      - headline: Version 0.17.0 released
        date: 2025-11-14
        content: Version 0.17.0 released – This release focuses on implementing transferm workflow for CAMS boundary condition processing, improving dataset storage infrastructure, and enhancing consistency across all data-type workflows.
        link_text: For the full list of changes see our changelog.
        link: https://github.com/openghg/openghg/blob/devel/CHANGELOG.md#0170---2025-11-14
      - headline: Version 0.16.0 released
        date: 2025-08-29
        content: Version 0.16.0 released – Added TCCON support, multi-file processing for standardisation, new data type schemas, unit tracking and conversion using pint-xarray, and various bug fixes and workflow improvements
        link_text: For the full list of changes see our changelog.
        link: https://github.com/openghg/openghg/blob/devel/CHANGELOG.md#0160---2025-08-29
    section_class: section-container
  # --- Videos Section ---
  - template: content-feature
    block: section-header
    header: Tutorials & Videos

  - template: content-feature
    block: video-grid
    videos:
      - headline: Installing OpenGHG - pip
        date: 2022-05-19
        content: This short video covers creating a Python virtual environment and installing OpenGHG into it.
        embed_url: https://asciinema.org/a/495780.js
        video_url: https://asciinema.org/a/495780
      - headline: Installing OpenGHG - conda
        date: 2022-05-19
        content: This short video covers creating a conda environment and installing OpenGHG.
        embed_url: https://asciinema.org/a/495812.js
        video_url: https://asciinema.org/a/495812
      - headline: Installing OpenGHG using pip and standardising some data
        date: 2022-05-19
        content: This short tutorial covers getting OpenGHG setup, retrieving some example data, standardising it and making a quick plot.
        embed_url: https://www.youtube-nocookie.com/embed/YqiKNvANI9o
      - headline: Searching and plotting
        date: 2022-05-20
        content: Here we cover searching, search refinement and plotting using a function from our <b>openghg.plotting</b> submodule.
        embed_url: https://www.youtube-nocookie.com/embed/noXITbOTo48
      - headline: Retrieving data from remote archives
        date: 2022-05-20
        content: In this tutorial we cover retrieving data from the ICOS Carbon Portal and the CEDA archive.
        embed_url: https://www.youtube-nocookie.com/embed/512sRke9vcE

  # --- Footer ---
  - template: simple-footer
    block: footer-1
    content: OpenGHG 2023 - CC0
---
