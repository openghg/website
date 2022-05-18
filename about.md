---
layout: blocks
title: About
permalink: /about/

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
  block: one-column-text
  slug: responsive
  headline: Why OpenGHG?
  content: |
    The rapid growth in remotely sensed and in situ greenhouse gas (GHG) observations will dramatically improve our understanding of the drivers of change in atmospheric radiative forcing. However, the volume and diversity of available data presents a range of challenges. For example, efficient, near-real-time sharing and inter-comparison of data and model outputs is hampered by strict institutional firewalls and, in some cases, lack of computational expertise by data providers and users.</br></br>

    The data span a range of scales and sample different parts of the atmosphere, so inter-comparison and interpretation requires the use of Chemical transport models (CTMs); the “inverse” statistical methods for inferring fluxes using the data and models are computationally intensive and technically challenging to implement.</br></br>

    At present, these limitations mean that GHG flux estimates are generally only carried out on a case-by-case basis for specific research projects, each requiring intensive investigator effort. To address these challenges, we present a feasibility study demonstrating a cloud-based data analysis “hub” for the GHG community. We have brought together measurement, modelling, statistical and cloud-computing expertise to build the architecture for a cloud framework that will streamline the process for data sharing, validation, analysis and visualisation.</br></br>

    Using open-source tools, this framework will be extensible by GHG scientists to carry out the full workflow from data acquisition to operational GHG flux estimation. Such a system will allow us to more effectively integrate data from multiple sources and ultimately provide stakeholders and researchers with more rapid, more robust estimates of GHG sources and sinks.</br>
- template: content-feature
  block: feature-1
  media_alignment: Right
  headline: <strong>Challenges</strong>
  content: |
    Current challenges when dealing with greenhouse gas data include having both a wide and diverse range of measurements spanning a range of scales (e.g., urban to global) and range of non-standard formats leading to difficulty in inter-comparing datasets. To add to this institutional firewalls often form a barrier to sharing of data resulting in lack of reproducibility and transparency in the emissions evaluation process. 
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
  content: Run complex simulations on demand, allowing creation of striking visualisations that help transfer knowledge effectively.
  media:
    video: "/uploads/videos/UK_footprint_movie.m4v"

- template: content-feature
  block: feature-video
  headline: <strong>Simulation</strong>
  content: Using the inherent scalability of the cloud large scale simulations can easily be run.
  media:
    video: "/uploads/videos/Atmospheric_methane_NCAR_mozart_model_sm.mp4"
- template: simple-footer
  block: footer-1
  content: OpenGHG 2022 - CC0

---

Error
