---
title: 'Concluding the Azure Sphere Security Research Challenge, Microsoft Awards $374,300 to Global Security Research Community'
description: ""
published: 2020-10-06
type: posts
redirect_from:
            - https://msrc-blog.microsoft.com/2020/10/06/azure-sphere-security-research-challenge-concluded/
authors:
- sylvliu
categories:
- MSRC
tags:
- Bounty
- Community-based Defense
- Security Research
- Security Researcher
hero: ./img/wp-content-uploads-2020-10-SphereResult-1-1024x187.png
---
<!-- wp:paragraph -->

The [Azure Sphere Security Research Challenge](https://msrc-blog.microsoft.com/2020/05/05/azure-sphere-security-research-challenge/) brought together 70 researchers from 21 countries to help secure Azure Sphere customers and expand Microsoft’s partnerships with the global IoT security research community. During the three-month Azure Sphere Security Research Challenge, researchers surfaced 20 Critical or Important severity security vulnerabilities, with Microsoft awarding \$374,300 in bounty awards for 16 bounty eligible reports.

<!-- /wp:paragraph -->

<!-- wp:image {"id":12234,"sizeSlug":"large"} -->

![Total Reports Received: 40 Reports Led to Improvements: 30 Critical/Important Reports: 20 Bounty Eligible Reports: 16 Total Bounty Awards: $374,300](./img/wp-content-uploads-2020-10-SphereResult-1-1024x187.png)

<!-- /wp:image -->

<!-- wp:paragraph -->

Many of the vulnerabilities found during the research challenge were novel and high impact, and led to major security improvements for Azure Sphere in their [20.07](https://techcommunity.microsoft.com/t5/internet-of-things/azure-sphere-20-07-security-enhancements/ba-p/1548973), [20.08](https://techcommunity.microsoft.com/t5/internet-of-things/azure-sphere-20-08-security-updates/ba-p/1604788) and the [latest 20.09](https://techcommunity.microsoft.com/t5/internet-of-things/azure-sphere-20-09-security-updates/ba-p/1725628) updates, which have been automatically pushed to Azure Sphere devices that are connected to the internet to help secure Azure Sphere customers. Security researchers from [McAfee ATR](https://www.mcafee.com/blogs/other-blogs/mcafee-labs/our-experiences-participating-in-microsofts-azure-sphere-bounty-program/) and\*\* \*\*[Cisco Talos](https://blog.talosintelligence.com/2020/10/Azure-Sphere-Challenge.html) reported some of the highest impact vulnerabilities in Azure Sphere, especially [a full attack chain developed by McAfee ATR](https://www.mcafee.com/enterprise/en-us/assets/white-papers/wp-prisoner-of-azure-kaban.pdf) that exposed a weakness in the cloud and multiple weaknesses on the device including a previously unknown Linux kernel vulnerability.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

To focus research in the highest impact areas, we introduced two [high priority research scenarios](https://www.microsoft.com/en-us/msrc/azure-security-lab-archive) focused on the core of the Azure Sphere OS with \$100,000 awards, and six [general scenarios](https://www.microsoft.com/en-us/msrc/azure-security-lab-archive) focused on various levels of the Azure Sphere OS with up to 20% additional awards on top of the [Azure Bounty Program awards](https://www.microsoft.com/en-us/msrc/bounty-microsoft-azure). Participating researchers shared disclosures that successfully achieved three of the general scenarios:

<!-- /wp:paragraph -->

<!-- wp:list -->

- Anything allowing execution of unsigned code that isn’t pure return oriented programming (ROP) under Linux
- Anything allowing elevation of privilege outside of the capabilities described in the [application manifest](https://docs.microsoft.com/en-us/azure-sphere/app-development/app-manifest) (e.g. changing user ID, adding access to a binary)
- Ability to modify software and configuration options (except full device reset) on a device in the manufacturing state [DeviceComplete](https://docs.microsoft.com/en-us/azure-sphere/hardware/factory-floor-tasks#set-the-device-manufacturing-state)[ ](https://docs.microsoft.com/en-us/azure-sphere/hardware/factory-floor-tasks#set-the-device-manufacturing-state)when claimed to a tenant you are not signed into and have no saved capabilities for

<!-- /wp:list -->

<!-- wp:paragraph -->

Check out the Azure Sphere team’s blog _[Why we invite security researchers to hack Azure Sphere](https://www.microsoft.com/security/blog/?p=91998)_ for more details on the research challenge results and security improvements. Microsoft is also working on assigning CVEs to vulnerabilities found in Azure Sphere, the documentation for which will be released on Update Tuesdays.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

We are excited to see the great results from this research challenge and to learn from the program participants’ experiences. This was our first expansion of the [Azure Security Lab](https://msrc-blog.microsoft.com/2019/08/05/azure-security-lab-a-new-space-for-azure-research-and-collaboration/), an experiment to provide researchers with [additional resources](https://www.microsoft.com/en-us/msrc/azure-security-lab-archive) to help spark new, high impact research, and develop close collaboration between the security research community and the Microsoft engineering teams through weekly office hours and opportunities for direct collaboration. We strongly believe that this challenge and upcoming expansions of the Azure Security Lab will help to continue to protect our cloud and Azure Sphere, and we look forward to expanding the resources available to security researchers to support high impact research. Future research challenges will be published on our [Azure Security Lab program page](https://www.microsoft.com/en-us/msrc/azure-security-lab), stay tuned!

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

We continue to invite researchers to hunt for high impact vulnerabilities in Azure Sphere as part of our [Microsoft Azure Bounty Program](https://www.microsoft.com/en-us/msrc/bounty-microsoft-azure). Qualified submissions are eligible for awards up to \$40,000 USD.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### **Special Thanks to Security Researchers and Industry Partners**

<!-- /wp:heading -->

<!-- wp:paragraph -->

We believe our partnership with the global security research community is crucial for keeping our customers secure. We are humbled to have the opportunity working with so many talented researchers and industry partners through [Coordinated Vulnerability Disclosure](https://www.microsoft.com/msrc/cvd) in making Azure Sphere and the broader IoT ecosystem more secure.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

We appreciate the collaboration in this research challenge with the global security research community, and our key industry partners including [Avira](http://www.avira.com/), [Baidu International Technology](https://www.baidu.com/), [Bitdefender](http://www.bitdefender.com/), [Bugcrowd](https://www.bugcrowd.com/), [Cisco Systems Inc (Talos)](http://www.cisco.com/), [ESET](http://www.eset.com/us/), [FireEye](https://www.fireeye.com/), [F-Secure Corporation](https://www.f-secure.com/us-en), [HackerOne](https://www.hackerone.com/), [K7 Computing](http://www.k7computing.com/), [McAfee](http://www.mcafee.com/us/), [Palo Alto Networks](https://www.paloaltonetworks.com/) and [Zscaler](http://www.zscaler.com/).

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Sylvie Liu & Lynn Miyashita, Security Program Manager, Microsoft Security Response Center

<!-- /wp:paragraph -->
