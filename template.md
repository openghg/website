---
layout: blocks
title: Template page
permalink: /set_my_permalink/

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
      - link: "/my_permalink/"

  - template: content-feature
    block: section-header
    header: New header

  - template: content-feature
    block: news-1
    headline: Some content
    date: 2022-05-18
    content: Some conent
    link_text: Click here for a page
    link: "/releases/"

  - template: simple-footer
    block: footer-1
    content: OpenGHG 2022 - CC0
---

Error
