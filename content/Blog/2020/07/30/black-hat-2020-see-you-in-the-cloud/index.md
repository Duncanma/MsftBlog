---
title: 'Black Hat 2020: See you in the Cloud!'
description: ""
published: 2020-07-30
type: posts
redirect_from:
            - https://msrc-blog.microsoft.com/2020/07/30/black-hat-2020-see-you-in-the-cloud/
authors:
- christa
categories:
- MSRC
tags:
- Black Hat
- Bug Bounty Programs
- Community-based Defense
- Researcher Recognition
- Security Researcher
hero: ../../../defaultHero.jpg
---
<!-- wp:paragraph {"customFontSize":17} -->

It hardly feels like summer without the annual trip to Las Vegas for Black Hat USA. With this year’s event being totally cloud based, we won’t have the chance to catch up with security researchers, industry partners, and customers in person, an opportunity we look forward to every year. We’ll still be there though, and look forward to the great talks and chatting in the virtual conference platform.

<!-- /wp:paragraph -->

<!-- wp:quote -->

> "_I miss the opportunity to meet face-to-face with industry partners in the MAPP program. This is a highlight of my year where I get to exchange ideas and build synergies with these critical security organizations. Virtual will work, but there is nothing like an in-person meeting._”
>
> _Al B., MSRC-MAPP Team_

<!-- /wp:quote -->

<!-- wp:quote {"align":"left"} -->

> “_While I’m going to miss the opportunity to put a bet on the Kraken to bring the Stanley Cup once again to Seattle, I’m excited about all of the virtual networking and information sharing._”
>
> _Mechele G. MSRC-Vulnerability Response & Resolution_

<!-- /wp:quote -->

<!-- wp:heading {"level":3} -->

### **Tuesday, August 4**

<!-- /wp:heading -->

<!-- wp:paragraph {"customFontSize":17} -->

Kicking off our Black Hat content for the week, on Tuesday morning we will release our Microsoft Bounty Program year in review on the MSRC blog. We will explore how our programs and security researcher partnerships have grown and adapted through a constantly evolving new reality to meet the ever-present needs of the security ecosystem.

<!-- /wp:paragraph -->

<!-- wp:quote {"className":"is-style-default"} -->

> “_It means a lot to be able to meet and thank researchers in person for all their creative and hard work to help us secure customers. It will take a lot of video calls to equal one day at Black Hat or DEFCON._“
>
> _Jarek S., MSRC–Bounty Team_

<!-- /wp:quote -->

<!-- wp:heading {"level":3} -->

### **Wednesday, August 5**

<!-- /wp:heading -->

<!-- wp:paragraph {"customFontSize":17} -->

Our Security Researcher community is incredibly important to us, and \_while we don’t get to see you in person, \_we’re super excited to reveal the **MSRC Most Valuable Security Researchers** for 2020. We’ll be revealing the full list here on our blog on Wednesday morning so make sure to stop by and see who made it!

<!-- /wp:paragraph -->

<!-- wp:quote -->

> “_I’m bummed to not see everyone in person (though not having to shout over the sound of slot machines will be nice). I AM excited for the upcoming reveal of the MSRC MVR list – my personal favorite part of Black Hat!_”
>
> _Chloe B., MSRC-Community Programs_

<!-- /wp:quote -->

<!-- wp:quote {"align":"left"} -->

> “_I'll miss hanging out with my #hackerfamily but once it's safe, I look forward to holding court at Baccarat again with all of you!_”
>
> _Nate W. (@n0x08), vuln herder & security researcher, MSRC-Security PM_

<!-- /wp:quote -->

<!-- wp:heading {"level":3} -->

### **Thursday, August 6**

<!-- /wp:heading -->

<!-- wp:paragraph {"customFontSize":17} -->

We’ve got five talks scheduled through-out the day on Thursday, exploring topics which range from the security of virtualization stacks, exploitation in Excel, a “Swiss Army” tool for security investigations, finding the useful data in real-time feeds – without having to wait for storage. Finally, a moderated conversation of day two's topics and what they indicate for the future of infosec strategy.

<!-- /wp:paragraph -->

<!-- wp:quote -->

> “_As this is my first Black Hat USA, I am excited to see what will be presented and how it will operate as its first virtual event. I am looking forward to briefing on a few talks_!”
>
> _Britney T. MSRC-Security PM_

<!-- /wp:quote -->

<!-- wp:quote -->

> “I’m excited for my first year at BlackHat! I know this year will be an unusual one, but I'm looking forward to learning from and networking with the InfoSec community.”
>
> Jonathan D., MSRC - Software Engineer

<!-- /wp:quote -->

<!-- wp:separator -->

---

<!-- /wp:separator -->

<!-- wp:heading {"level":5} -->

##### [Breaking VSM by Attacking SecureKernel](https://www.blackhat.com/us-20/briefings/schedule/#breaking-vsm-by-attacking-securekernel-20382) (10:00am-10:40am) [Saar Amar](https://www.blackhat.com/us-20/briefings/schedule/speakers.html#saar-amar-41066), [Daniel King](https://www.blackhat.com/us-20/briefings/schedule/speakers.html#daniel-king-39533)

<!-- /wp:heading -->

<!-- wp:paragraph {"fontSize":"small"} -->

Virtualization based security technologies (VBS) continue to increase the world's dependency on the security of virtualization stacks. But like all software stacks, virtualization stacks are prone to vulnerabilities too.

In this talk, we will explain how we found and fixed two vulnerabilities in SecureKernel in Windows 10, which is a critical component of the core of the TCB (Trusted Computing Base) for Microsoft's VBS model. The vulnerabilities could allow an attacker to gain arbitrary code execution in VTL1, compromising the entire VBS model. We will also walk through our process to exploit both vulnerabilities on the latest version of Windows (at the time of writing).  
([Full abstract here](https://www.blackhat.com/us-20/briefings/schedule/#breaking-vsm-by-attacking-securekernel-20382))

<!-- /wp:paragraph -->

<!-- wp:separator -->

---

<!-- /wp:separator -->

<!-- wp:group -->

<!-- wp:heading {"level":5} -->

##### [I calc'd Calc - Exploiting Excel Online](https://www.blackhat.com/us-20/briefings/schedule/#i-calcd-calc---exploiting-excel-online-20379) (11:00am-11:40am) [Nicolas Joly](https://www.blackhat.com/us-20/briefings/schedule/speakers.html#nicolas-joly-37640)

<!-- /wp:heading -->

<!-- /wp:group -->

<!-- wp:paragraph {"fontSize":"small"} -->

The Microsoft Security Response Center has a unique position in monitoring exploits in the wild. While we have seen several cases in the past years of exploits targeting Office applications, often PowerPoint or Word, exploits targeting online applications are less common. Are they only possible? And in which case, how would one attack the Office Web Application server (WAC)? Can a malicious document be used? How hard would that be, how much time would it take?

This is the story of a project realized during summer 2018 to try to answer these questions with Excel Online. This short presentation describes an integer overflow vulnerability in the fnConcatenate formula (CVE-2018-8331) and how one could chain Excel formulas together to get RCE on the server. This talk will detail the research from scratch up to showing a demo of the exploit against Excel OnPrem.

<!-- /wp:paragraph -->

<!-- wp:separator -->

---

<!-- /wp:separator -->

<!-- wp:heading {"level":5} -->

##### [MSTICpy: The Security Analysis Swiss Army Knife](https://www.blackhat.com/us-20/arsenal/schedule/#msticpy-the-security-analysis-swiss-army-knife-19872) (1:00pm-2:00pm) [Pete Bryan](https://www.blackhat.com/us-20/arsenal/schedule/presenters.html#pete-bryan-40199), [Ian Hellen](https://www.blackhat.com/us-20/arsenal/schedule/presenters.html#ian-hellen-40910), [Ashwin Patil](https://www.blackhat.com/us-20/arsenal/schedule/presenters.html#ashwin-patil-36926)

<!-- /wp:heading -->

<!-- wp:paragraph {"fontSize":"small"} -->

MSTIC Jupyter and Python Security Tools (MSTICpy) is a Python library of security investigation tools developed by the Microsoft Threat Intelligence Center (MSTIC) to assist and support security analysts conducting security investigations and threat hunting.

The library provides features to collect data from a range of data sources, to enrich the data with Threat Intelligence and OSINT, to analyse the data using ML and data analysis techniques, and to visualize the output of this analysis for quick and easy comprehension.

Rather than a single tool MSTICpy is a Swiss Army knife for security investigations.

<!-- /wp:paragraph -->

<!-- wp:separator -->

---

<!-- /wp:separator -->

<!-- wp:group -->

<!-- wp:heading {"level":5} -->

##### [Experimenting with Real-Time Event Feeds](https://www.blackhat.com/us-20/briefings/schedule/#experimenting-with-real-time-event-feeds-20409) (1:30pm-2:10pm) [Jose Morris](https://www.blackhat.com/us-20/briefings/schedule/speakers.html#jose-morris-41079)

<!-- /wp:heading -->

<!-- wp:group -->

<!-- wp:paragraph {"fontSize":"small"} -->

Today, defenders in a typical security operation center rely on their SIEM to do forensics on past logs, and to define real-time detections. This assumes that the SIEM was configured ahead of time to collect the subset of logs that are useful. But how does one decide what is useful? Further, some data comes at such high-volume that storing it in raw form is prohibitively expensive. Such data must be prefiltered and summarized before storage for query.

<!-- /wp:paragraph -->

<!-- wp:paragraph {"fontSize":"small"} -->

We present tools and a method of comparing various options of filtering and pre-processing real-time feeds of data before storage. This can be done in isolated environments without SIEM coverage, such as labs/honeypots for researching Malware or Proof of Concept (POC) for exploits.

<!-- /wp:paragraph -->

<!-- wp:paragraph {"fontSize":"small"} -->

The learnings of the method can be applied to understanding novel threats and creating true-real-time detections that work directly on the stream of events (no storage involved).

<!-- /wp:paragraph -->

<!-- /wp:group -->

<!-- /wp:group -->

<!-- wp:separator -->

---

<!-- /wp:separator -->

<!-- wp:heading {"level":5} -->

##### [Locknote: Conclusions and Key Takeaways from Day 2](https://www.blackhat.com/us-20/briefings/schedule/#locknote-conclusions-and-key-takeaways-from-day--21323) (3:30pm-4:00pm) [Aanchal Gupta](https://www.blackhat.com/us-20/briefings/schedule/speakers.html#aanchal-gupta-34084), [Rodrigo Rubira Branco](https://www.blackhat.com/us-20/briefings/schedule/speakers.html#rodrigo-rubira-branco--34120), [Stefano Zanero](https://www.blackhat.com/us-20/briefings/schedule/speakers.html#stefano-zanero-34820), moderated by [Kymberlee Price](https://www.blackhat.com/us-20/briefings/schedule/speakers.html#kymberlee-price-32646)

<!-- /wp:heading -->

<!-- wp:paragraph {"fontSize":"small"} -->

At the end of day two of this year's virtual conference, join Black Hat Review Board members Rodrigo Rubira Branco, Aanchal Gupta, and Stefano Zanero as they are moderated by Kymberlee Price for an insightful conversation on the most pressing issues facing the InfoSec community. This Locknote will feature a candid discussion on the key takeaways from day two and how these trends will impact future InfoSec strategies.

<!-- /wp:paragraph -->

<!-- wp:separator -->

---

<!-- /wp:separator -->

<!-- wp:paragraph {"customFontSize":17} -->

Keep watching this blog and follow the [@msftsecresponse](https://twitter.com/msftsecresponse) Twitter account for all the up-to-date news for this year’s event.

We’ll see you online next week, and hopefully in person next year!  
_Microsoft Security Response Center (MSRC)_

<!-- /wp:paragraph -->

<!-- wp:separator -->

---

<!-- /wp:separator -->

<!-- wp:paragraph -->

<!-- /wp:paragraph -->
