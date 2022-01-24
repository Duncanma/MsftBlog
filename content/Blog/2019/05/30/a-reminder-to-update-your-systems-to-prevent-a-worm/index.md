---
title: 'A Reminder to Update Your Systems to Prevent a Worm'
description: ""
published: 2019-05-30
type: posts
redirect_from:
            - https://msrc-blog.microsoft.com/2019/05/30/a-reminder-to-update-your-systems-to-prevent-a-worm/
authors:
- msrc
categories:
- MSRC
hero: ../../../defaultHero.jpg
---
On May 14, Microsoft released fixes for a critical Remote Code Execution vulnerability, [CVE-2019-0708](https://portal.msrc.microsoft.com/en-US/security-guidance/advisory/CVE-2019-0708), in Remote Desktop Services – formerly known as Terminal Services – that affects some older versions of Windows. In our [previous blog post](https://blogs.technet.microsoft.com/msrc/2019/05/14/prevent-a-worm-by-updating-remote-desktop-services-cve-2019-0708/) on this topic we warned that the vulnerability is ‘wormable’, and that future malware that exploits this vulnerability could propagate from vulnerable computer to vulnerable computer in a similar way as the WannaCry malware spread across the globe in 2017.

Microsoft is confident that an exploit exists for this vulnerability, and if [recent reports](https://blog.erratasec.com/2019/05/almost-one-million-vulnerable-to.html) are accurate, _nearly one million computers connected directly to the internet are **still **vulnerable to CVE-2019-0708_. Many more within corporate networks may also be vulnerable. It only takes one vulnerable computer connected to the internet to provide a potential gateway into these corporate networks, where advanced malware could spread, infecting computers across the enterprise. This scenario could be even worse for those who have not kept their internal systems updated with the latest fixes, as any future malware may also attempt further exploitation of vulnerabilities that have already been fixed.

It's been only two weeks since the fix was released and there has been no sign of a worm yet. This does not mean that we’re out of the woods. If we look at the events leading up to the start of the WannaCry attacks, they serve to inform the risks of not applying fixes for this vulnerability in a timely manner.

**Our recommendation remains the same. We strongly advise that all affected systems should be updated as soon as possible.**

It is possible that we won’t see this vulnerability incorporated into malware.

But that’s not the way to bet.

**EternalBlue Timeline**

Almost two months passed between the release of fixes for the EternalBlue vulnerability and when ransomware attacks began. Despite having nearly 60 days to patch their systems, many customers had not.

A significant number of these customers were infected by the ransomware.

**March 14, 2017: **Microsoft releases[ security bulletin MS17-010](https://docs.microsoft.com/en-us/security-updates/SecurityBulletins/2017/ms17-010) which includes fixes for a set of SMBv1 vulnerabilities.

**April 14 2017: **[ShadowBrokers publicly releases a set of exploits](https://blogs.technet.microsoft.com/msrc/2017/04/14/protecting-customers-and-evaluating-risk/), including a wormable exploit known as 'EternalBlue' that leverage these SMBv1 vulnerabilities.

**May 12, 2017: **[The EternalBlue exploit is used in ransomware attacks known as WannaCry](https://blogs.technet.microsoft.com/msrc/2017/05/12/customer-guidance-for-wannacrypt-attacks/). Hundreds of thousands of vulnerable computers across the globe are infected.

**Resources** [Links to downloads for Windows 7, Windows 2008 R2, and Windows 2008 ](https://portal.msrc.microsoft.com/en-US/security-guidance/advisory/CVE-2019-0708)[Links to downloads for Windows Vista, Windows 2003 and Windows XP](https://support.microsoft.com/help/4500705)\_ \_

_Simon Pope, Director of Incident Response, Microsoft Security Response Center (MSRC_)
