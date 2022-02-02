---
title: 'Machine Learning Security Evasion Competition 2020 Invites Researchers to Defend and Attack'
description: ""
published: 2020-06-01
type: posts
redirect_from:
            - https://msrc-blog.microsoft.com/2020/06/01/machine-learning-security-evasion-competition-2020-invites-researchers-to-defend-and-attack/
authors:
- jarek
categories:
- MSRC
tags:
- artificial intelligence
- Community-based Defense
- Security Research
---
Machine learning (ML) is an increasingly valuable tool in cyber security as adversaries continually evolve their tactics and techniques to evade detection. As machine learning has advanced and sophisticated ML models have been developed to assist security professionals in protecting the cloud, adversaries have been busy developing malware designed to evade ML models.

To proactively address this challenge, Microsoft is sponsoring a [Machine Learning Security Evasion Competition](https://mlsec.io/) with partners CUJO AI, VMRay, and MRG Effitas, providing a unique real world setting that allows researchers to exercise their defender and attacker muscles. Importantly, this competition encourages both ML practitioners and cybersecurity professionals to participate.

This new competition builds on a [similar competition](https://www.elastic.co/blog/machine-learning-static-evasion-competition) launched at AI Village in August 2019 at DEFCON 27, which invited contestants to participate in a white-box attack against static malware ML models. Multiple researchers in the 2019 competition discovered approaches that completely and simultaneously bypassed three ML antimalware models. Dozens of other researchers achieved high scores for their work evading these open source models. Several top contestants published their findings – an explicit goal of the competition.

The 2020 Machine Learning Security Evasion Competition is similarly designed to surface countermeasures to adversarial behavior and raise awareness about the variety of ways ML systems may be evaded by malware, in order to better defend against these techniques. Top researchers must publish their detection or evasion strategies to win the competition.

**Attacking the Malware Challenge from Two Directions**

Microsoft has built on the work of the 2019 competition to offer two different challenges this year, adding a defender challenge, and changing the attacker challenge from a “white-box” to a “black-box” threat model.

The [**_Defender Challenge_**](https://github.com/Azure/2020-machine-learning-security-evasion-competition/tree/master/defender) will run from June 15 through July 23, 2020 and promote the development of countermeasures to adversarial attacks by providing novel defenses for attackers to evade. Submitted defenses must pass real-world tests in detecting real-world malware at moderate false-positive rates.

The [**_Attacker Challenge_**](https://github.com/Azure/2020-machine-learning-security-evasion-competition/tree/master/attacker) will run August 6 through September 18, 2020, providing a black-box threat model giving API access to hosted antimalware models, including those successfully developed in the Defender Challenge. Contestants may discover how to evade them using “hard-label” query results. Samples from final submissions will be detonated in a sandbox to verify that they are still functional. In addition to evasion rates, the total number of API queries required by a contestant will factor into the final ranking.

**Prizes** for the winner and runner-up for each challenge will be a Grand Prize ($2500 in Azure credits) and a First Prize ($500 in Azure credits), respectively. To participate in the competition, individuals or teams may register during the challenge window at [https://mlsec.io/](https://mlsec.io/%20and%20downloa).

Researchers interested in competing in this challenge are invited to learn about [top](https://towardsdatascience.com/evading-machine-learning-malware-classifiers-ce52dabdb713) 2019 contestants who [published](https://dl.acm.org/doi/pdf/10.1145/3375894.3375898) their [findings](https://www.eset.com/blog/company/evading-machine-learning-detection-in-a-cyber-secure-world/) and about 2020 competition partners [CUJO AI](https://cujo.com/), [VMRay](https://www.vmray.com/), and [MRG Effitas](https://www.mrg-effitas.com/).

**Why Microsoft Teams with Researchers and Industry Partners**

The security landscape is constantly evolving, and Microsoft is committed to joining with researchers, practitioners and industry partners to surface, communicate and work to solve challenges for customers and for the benefit of the entire tech ecosystem. This commitment extends to machine learning, which has been an overwhelmingly positive tool for information security.

Although evasion attacks against computer vision models where image pixels are subtly modified have become iconic, this competition seeks to advance the field of adversarial ML research to malware, a significantly more complex security challenge with a more realistic threat model and complex constraints.

One desired outcome of this competition is to encourage ML researchers who have experience in evading image recognition systems, for example, to be introduced to a threat model common to information security. Concurrently, security practitioners can gain deeper insights into what it means to secure ML systems in the context of a domain they are already know.

**The Trustworthy Machine Learning Initiative**

Microsoft’s sponsorship of this competition is one of several investments in Trustworthy Machine Learning. As was recently noted in our white paper [_Adversarial Machine Learning – Industry Perspectives_](https://arxiv.org/pdf/2002.05646.pdf)_,_ companies investing heavily in machine learning are being subjected to various degrees of adversarial behavior, and most organizations are not well-positioned to adapt. It is our goal that through our internal research and external partnerships and engagements—including this competition—we’ll collectively begin to change that.

_Hyrum Anderson, Principal Architect, Enterprise Protection and Detection_
