---
layout: blocks
title: Proposal
permalink: /proposal/

page_sections:
- template: navigation-header
  block: header-2
  logo: "/uploads/logo/openghg_logo_v1.png"
  navigation:
  - link: "/"
    link_text: Home
  - link: "#features"
    link_text: About
  - link: "/proposal/"
    link_text: Proposal
  - link: "https://docs.openghg.org/"
    link_text: Docs
  - link: "/cloud/"
    link_text: OpenGHG Cloud

- template: content-feature
  block: feature-1
  media_alignment: Right
  headline: <strong>Proposal figures</strong>
  content: Interactive versions of the figures contained within our proposal are accessible using our Voila rendered notebooks
  media:
    image: "/uploads/proposal/jupyter_voila.svg"
    alt_text: JupyterHub and Voila logos
  
- template: content-feature-imagelink
  block: feature-imagelink
  media_alignment: Right
  headline: <strong>Figure 2</strong>
  content: Examples of a) Global measuremnts b) Selected national and contintental ICOS stations c) Current and planned sites from the LondonGHG project
  media:
    image: "/uploads/pngs/Figure_2.png"
    alt_text: Figure 2 - Global Measurements

- template: content-feature
  block: feature-imagelink
  media_alignment: Right
  headline: <strong>Figure 3</strong>
  content: Using Voila to convert a Jupyter notebook for analysis of CH<sub>4</sub> data 
  media:
    image: "/uploads/pngs/Figure_3.png"
    alt_text: Figure 3 - Notebook to Voila

- template: content-feature
  block: feature-imagelink
  media_alignment: Right
  headline: <strong>Figure 4</strong>
  content: Source-receptor relationship ("footprint") for a measurement at the Thames Barrier, overlaid on  London's tree canopy cover 
  media:
    image: "/uploads/pngs/Figure_4.png"
    alt_text: London footprint

- template: simple-footer
  block: footer-1
  content: OpenGHG 2020 - CC0

---
foo bar