---
layout: blocks
title: Home
permalink: /

page_sections:
- template: navigation-header
  block: header-2
  logo: "/uploads/logo/openghg_logo_v1.png"
  navigation:
  - link: "/"
    link_text: Home
  - link: "/about/"
    link_text: About
  - link: "https://docs.openghg.org/"
    link_text: Docs
  - link: "/cloud/"
    link_text: OpenGHG Cloud

- template: content-feature
  block: feature-1
  media_alignment: Right
  headline: <strong>OpenGHG<span class="light">&nbsp;</span></strong><span
    class="light">a platform for collaboration</span>
  content: For researchers, stakeholders and the public, OpenGHG will offer a platform to perform analyses on greenhouse gas measurements from sites around the world.
  media:
    image: "/uploads/pngs/Figure_2.png"
    alt_text: Sites worldwide

- template: content-feature
  block: feature-1
  media_alignment: Left
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
  content: OpenGHG 2020 - CC0

---
Error