---
layout: blocks
title: About
permalink: /about/

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

- template: hero-banner-w-image
  block: hero-2
  slug: features
  headline: OpenGHG <br><strong>- challenges and solutions</strong>
  content:
      An open source cloud based platform for greenhouse gas data analysis and collaboration.
  cta:
      enabled: true
      url: https://github.com/openghg/openghg
      button_text: "See on GitHub "
  background_image: "/uploads/images/air-pollution-clouds-coal.jpg"
- template: content-feature
  block: feature-1
  media_alignment: Right
  headline: <strong>Challenges</strong>
  content: |
    Current challenges when dealing with greenhouse gas data include:</br></br>

    • a wide and diverse range of measurements spanning a range of scales (e.g., urban to global)</br></br>
    • a range of non-standard formats leading in difficulty in inter-comparing datasets</br></br>
    • institutional firewalls forming a barrier to sharing of data</br></br>
    • case-by-case data analysis on a subset of all available data</br></br>
    • lack of reproducibility and transparency in the emissions evaluation process</br></br>
  media:
    image: "/uploads/images/chimney-exhaust-gases-factory.jpg"
    alt_text: Challenges

- template: content-feature
  block: feature-1
  media_alignment: Left
  headline: <strong>Solutions</strong>
  content: |
   The <strong>OpenGHG</strong> platform aims to solve these challenges by providing a platform for greenhouse gas data analysis. It will allow comparison of data with vital ancillary information such as atmospheric model output, emissions inventories, and mapping tools. The platform will also provide key analysis methods and functionality. We do not plan on creating another long-term data storage repository, we want <strong>OpenGHG</strong> to be a platform that facilitates sharing and analysis of archived greenhouse gas data.
  media:
    image: "/uploads/images/air-pollution-clouds-coal.jpg"
    alt_text: Solutions

- template: content-feature
  block: feature-1
  media_alignment: Right
  headline: <strong>Interface</strong>
  content: |
   The OpenGHG Cloud will be available through simple to use web interfaces and Jupyter notebook. A web interface will allow upload and simple analyses to be performed and a JupyterHub/BinderHub will allow complex analyses to be developed, hosted and shared.
  media:
    image: "/uploads/screenshots/site_analysis_notebook.png"
    alt_text: Solutions

#   media:
#     image: "/uploads/pngs/Figure_2.png"
#     alt_text: Sites worldwide

- template: content-feature
  block: feature-video
  media_alignment: Left
  headline: <strong>Visualisation</strong>
  content: Run complex simulations on demand, allowing creation of striking visualisations that help transfer knowledge effectively
  media:
    video: "/uploads/videos/UK_footprint_movie.m4v"

- template: content-feature
  block: feature-video
  headline: <strong>Simulation</strong>
  content: Using the inherent scalability of the cloud large scale simulations can easily be run
  media:
    video: "/uploads/videos/Atmospheric_methane_NCAR_mozart_model_sm.mp4"
- template: simple-footer
  block: footer-1
  content: OpenGHG 2020 - CC0

---
Error