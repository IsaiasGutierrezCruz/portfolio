---
layout: ../../layouts/project.astro
setup: | 
  import Highlight from '../../components/Highlight/index.jsx';
title: Network Biology   
client: Self
publishDate: 2021-02-10 00:00:00
img: /assets/portfolio/biology-networks.jpg
description: |
  I analyzed different pathological states from Alzheimer's Disease (early-onset and late-onset) using graph theory and information theory.
tags:
  - data science
  - networks
  - biology
---

<h2>Problem</h2>

The impact of <Highlight>Alzheimer’s disease (AD)</Highlight> has been increasing in recent decades, specifically in the elderly, which has attracted the interest of researchers. Important risk factors have been found associated to the development of AD, within which <Highlight>aging</Highlight>, genetic factors, cardiovascular diseases, among others, stand out. We decided to focus on the impact of the AD <Highlight>onset age</Highlight> on the development of the pathological state in affected individuals.

## Data source
The data was collected from the Religious Orders Study and Memory and Aging
Project (<a href="https://doi.org/10.3233/jad-179939" target="_blank" style="display: inline;">ROSMAP</a>) and then divided into two grups, patients with early-onset Alzheimer's disease (EOAD) as the <Highlight>control group</Highlight> and late-onset (LOAD) as the <Highlight>experimental group</Highlight>.

## Findings
The code used to perform the current analysis is shown in the following repository: <a href="https://github.com/isaiasgutierrezcruz/biologiaderedesaplicadaaenfermedadesdelsnc" target="_blank" style="display: inline;">Github repository</a>

### Disturbed pathways
After perform a Differential Gene Expresion Analysis and a Pathway Enrichment Analysis, we identified two statistically significant <Highlight>disturbed pathways</Highlight> between the control and experimental groups: 

- Ribosome pathway

<img src='/assets/portfolio/hsa03010.pathview.png' width=700vw style="display: block; margin-left: auto; margin-right: auto;"/> <br>

- Oxidative phosphorylation pathway

<img src='/assets/portfolio/viaFosforilazionOxidativa.png' width=700vw style="display: block; margin-left: auto; margin-right: auto;"/> <br>

- Cardiac muscle contracion pathway

<img src='/assets/portfolio/viaConstracionMusculoCardiaco.png' width=700vw style="display: block; margin-left: auto; margin-right: auto;"/> <br>

### Modular structure of co-expression networks
Co-expression networks were reconstructed from gene expression data (RNA-seq) of each group with the help of the Relevance Networks technique. To set the relationships between genes, we used mutual information. We identified a <Highlight>different behavior</Highlight> in the distributions of the gene expression between the early and late-onset groups. 

The co-expression networks showed a modular behavior, so we calculated the modular structure for the control and experimental group:

- Early-onset group
<img src='/assets/portfolio/flow_earlyOnset.svg' width=600vw style="display: block; margin-left: auto; margin-right: auto;"/> <br>

- Late-onset group
<img src='/assets/portfolio/flow_lateOnset.svg' width=600vw style="display: block; margin-left: auto; margin-right: auto;"/> <br>

### Functional Enrichment
Ultimately, we identified a set of <Highlight>biological functions</Highlight> described as Gene Ontology (GO) terms associated with the modules detected in the early and late-onset networks. We summarized them in the following bipartite networks:

- Early-onset group
<img src='/assets/portfolio/red1.svg' width=600vw style="display: block; margin-left: auto; margin-right: auto;"/> <br>

- Late-onset group
<img src='/assets/portfolio/red2.svg' width=600vw style="display:block; margin-left: auto; margin-right: auto;"/> <br>

Both groups showed an important interaction with biological functions associated with the inmune system. However, the distribution of the network's modules changed. A similar distribution change also can be seen in the modules related to cellular components related to the brain. 

During the development of this project, I obtained mentorship with Dr. Guillermo de Anda-Jáuregui from the Instituto Nacional De Medicina Genómica.

## References 
- Apostolova, L. G. (2016). Alzheimer disease.
- Bennett, D. A., Buchman, A. S., Boyle, P. A., Barnes, L. L., Wilson, R. S., & Schneider, J. A. (2018). Religious orders study and rush memory and aging project. Journal of Alzheimer's disease, 64(s1), S161-S189.