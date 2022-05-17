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
  - link: "/releases/"
    link_text: Releases
  - link: "/cloud/"
    link_text: OpenGHG Cloud

- template: content-feature
  block: section-header
  header: News

- template: content-feature
  block: news-1
  headline: OpenGHG version 0.1.0 released!
  date: 2022-05-17
  content: We're very happy to announce that version 0.1.0 has been released to PyPI and conda. This release contains a lot of features such as data standardisation, comparison, analysis and plotting. It also allows you to retrieve and process NOAA Obspack data and pull data from the ICOS Carbon Portal and the CEDA archive.
  link_text: Click here for release notes.
  link: "/releases/"

- template: content-feature
  block: section-header
  header: Getting started

- template: content-feature
  block: news-1
  headline: Installing OpenGHG
  date: 2022-05-17
  content: As we ready the OpenGHG cloud you can try OpenGHG locally on your own computer. We've created a set of tutorials that to get you familiar with all of the features of OpenGHG. Once our cloud platform is operation the interface will be exactly the same. All of the workflows you've run locally will be available online in the cloud.
  link_text: Find our installation instructions here.
  link: "https://docs.openghg.org/install.html"
  
- template: content-feature
  block: section-header
  header: What is OpenGHG?

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