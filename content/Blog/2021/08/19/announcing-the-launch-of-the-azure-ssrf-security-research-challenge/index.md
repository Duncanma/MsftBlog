---
title: 'Announcing the Launch of the Azure SSRF Security Research Challenge'
description: ""
published: 2021-08-19
type: posts
redirect_from:
            - https://msrc-blog.microsoft.com/2021/08/19/announcing-the-launch-of-the-azure-ssrf-security-research-challenge/
author: Sebastian.Fernandez
categories:
- Azure
- Azure Security Lab
- Bounty
- Community-based Defense
- Coordinated Vulnerability Disclosure
- MSRC
- security
- Security Research
hero: ../../../defaultHero.jpg
---
<!-- wp:paragraph -->

Microsoft is excited to announce the launch of a new, three-month security research challenge under the [Azure Security Lab](https://www.microsoft.com/en-us/msrc/azure-security-lab) initiative. The [Azure Server-Side Request Forgery (SSRF) Research Challenge](http://www.microsoft.com/en-us/msrc/azure-ssrf-research-challenge) invites security researchers to discover and share high impact SSRF vulnerabilities in Microsoft Azure. Qualified submissions are eligible for bounty rewards up to \$60,000 USD, with additional awards for identifying innovative or novel attack patterns. Up for the challenge? Sign up for updates [here.](https://forms.office.com/Pages/ResponsePage.aspx?id=v4j5cvGGr0GRqy180BHbR-IOn5S2lZFPrml32v6SFq9UNEpOOE40T1hPMUszNFEyMEhSUU5INURZQi4u)

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Microsoft is committed to ensuring our cloud is secure from modern threats. Our [Cyber Defense Operations Center](https://www.microsoft.com/en-us/msrc/cdoc?rtc=1) (CDOC) and security teams work around the clock to identify, analyze and respond to threats in real time, and we work to help customers secure their Azure cloud environments with products such as [Azure Sentinel](https://azure.microsoft.com/en-us/services/azure-sentinel/) and [Azure Security Center](https://azure.microsoft.com/en-us/services/security-center/). Partnerships with the global community of security researchers are an important part of our security strategy.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

This Azure SSRF Research Challenge will run from August 19, 2021, through November 19, 2021, with SSRF research resources and the opportunity to collaborate with members of the Microsoft Cloud security team.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

**Scenarios and Bounty Awards**

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

We will award up to 50% bonuses on top of the current [Azure Bounty Program](https://www.microsoft.com/en-us/msrc/bounty-microsoft-azure?rtc=1) for specific scenarios in the Azure SSRF Challenge during the program period. To learn more about eligible research challenge scope and award amounts, please visit the [Azure Security Lab](https://www.microsoft.com/en-us/msrc/azure-security-lab) page.

<!-- /wp:paragraph -->

<!-- wp:table -->

|                                                                                                                                                                                                                            |                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| **Scenarios**                                                                                                                                                                                                              | **Bonus Amount (up to)** |
| Protocols other than HTTP (e.g., FTP bounce attack)                                                                                                                                                                        | 50%                      |
| Stored SSRF (as analogous to stored XSS)                                                                                                                                                                                   | 50%                      |
| “Deep” SSRF Example: SSRF attacks that are only evident far into the state machine of the victim Example: SSRF manifesting beyond the direct exploitation of a UI/client-side feature exposed by the service to the users. | 50%                      |
| Multi-hop SSRF (i.e., more than one confused deputy)                                                                                                                                                                       | 40%                      |
| SSRF in combination with CSRF                                                                                                                                                                                              | 30%                      |
| General SSRF Award                                                                                                                                                                                                         | 10%                      |

<!-- /wp:table -->

<!-- wp:paragraph -->

**Why Microsoft Partners with Security Researchers**

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

The security landscape is constantly changing with emerging technology and security threats. Microsoft seeks to continually expand and improve how we partner with our researcher community to mitigate those threats. Through this challenge, we will gain further insight into not only how we can better protect Microsoft users against general SSRF vulnerabilities, but also partner with researchers to identify and award new and creative attack patterns.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

If you have any questions about the Azure SSRF Research Challenge or general inquiries about any other security research incentive program, please email us at [bounty@microsoft.com](mailto:bounty@microsoft.com).

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

_Madeline Eckert, Senior Program Manager, MSRC_

<!-- /wp:paragraph -->
