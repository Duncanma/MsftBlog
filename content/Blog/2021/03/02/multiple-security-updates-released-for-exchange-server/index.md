---
title: 'On-Premises Exchange Server Vulnerabilities Resource Center - updated March 25, 2021'
description: ""
published: 2021-03-02
type: posts
redirect_from:
            - https://msrc-blog.microsoft.com/2021/03/02/multiple-security-updates-released-for-exchange-server/
author: Sebastian.Fernandez
categories:
- MSRC
hero: ../../../defaultHero.jpg
---
<!-- wp:paragraph -->

\***\*[**MSRC**](https://msrc-blog.microsoft.com/category/msrc/)** / By **[**MSRC Team **](https://msrc-blog.microsoft.com/author/sebastian-fernandez/)**/ March 2, 2021\*\*

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

On March 2nd, we released several security updates for Microsoft Exchange Server to address vulnerabilities that are being used in ongoing attacks. Due to the critical nature of these vulnerabilities, we recommend that customers protect their organizations by applying the patches immediately to affected systems.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

The vulnerabilities affect Exchange Server versions 2013, 2016, and 2019, while Exchange Server 2010 is also being updated for defense-in-depth purposes. Exchange Online is not affected.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

These vulnerabilities are being exploited as part of an attack chain. The initial attack requires the ability to make an untrusted connection to the Exchange server, but other portions of the attack can be triggered if the attacker already has access or gets access through other means. This means that mitigations such as restricting untrusted connections or setting up a VPN will only protect against the initial portion of the attack to change the attack surface or partially mitigate, and that patching is the only way to mitigate completely.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Since these patches were released, we have published several articles and blog posts helping customers understand these vulnerabilities, and their exploitation patterns, and shared detailed guidance on how the malicious actors are exploiting these vulnerabilities and targeting customers. We are aware that there is a lot of detail to understand and are adding this summary of Microsoft’s guidance for security incident responders and Exchange administrators on what steps to take to secure their Exchange environments.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Organizations should review and digest the entirety of this guidance before taking action, as the specific order of actions taken to achieve the response objectives is situational and depends on the outcomes of the investigation.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Executive Summary and Background Information

<!-- /wp:heading -->

<!-- wp:paragraph -->

Microsoft continues to investigate the extent of the recent Exchange Server on-premises attacks. Our goal is to provide the latest threat intelligence, Indicators of Compromise (IOC)s, and guidance across our products and solutions to help the community respond, harden infrastructure, and begin to recover from this unprecedented attack. As new information becomes available, we will make updates to this article at <https://aka.ms/ExchangeVulns>

<!-- /wp:paragraph -->

<!-- wp:list -->

- March 25, 2021 - [Analyzing attacks taking advantage of the Exchange Server vulnerabilities](https://www.microsoft.com/security/blog/2021/03/25/analyzing-attacks-taking-advantage-of-the-exchange-server-vulnerabilities/)
- March 25, 2021 - [Web Shell Threat Hunting with Azure Sentinel](https://techcommunity.microsoft.com/t5/azure-sentinel/web-shell-threat-hunting-with-azure-sentinel/ba-p/2234968)
- March 18, 2021 - [Automatic on-premises Exchange Server mitigation now in Microsoft Defender Antivirus](https://www.microsoft.com/security/blog/2021/03/18/automatic-on-premises-exchange-server-mitigation-now-in-microsoft-defender-antivirus/)
- March 16, 2021 - [Guidance for responders: Investigating and remediating on-premises Exchange Server vulnerabilities](https://msrc-blog.microsoft.com/2021/03/16/guidance-for-responders-investigating-and-remediating-on-premises-exchange-server-vulnerabilities/)
- March 15, 2021 -[One-Click Microsoft Exchange On-premises Mitigation Tool](https://aka.ms/eomt)
- March 8, 2021 - [March 8 Exchange Team Blog](https://techcommunity.microsoft.com/t5/exchange-team-blog/march-2021-exchange-server-security-updates-for-older-cumulative/ba-p/2192020)
- March 5, 2021 - [Microsoft Exchange Server Vulnerabilities Mitigations](https://msrc-blog.microsoft.com/2021/03/05/microsoft-exchange-server-vulnerabilities-mitigations-march-2021/)
- March 2, 2021 - [Microsoft Security Blog: Hafnium Targeting Exchange](https://www.microsoft.com/security/blog/2021/03/02/hafnium-targeting-exchange-servers/)
- March 2, 2021 - [Microsoft on the Issues](https://blogs.microsoft.com/on-the-issues/2021/03/02/new-nation-state-cyberattacks/)
- March 2, 2021 - [Exchange Team Blog](https://techcommunity.microsoft.com/t5/exchange-team-blog/released-march-2021-exchange-server-security-updates/ba-p/2175901)

<!-- /wp:list -->

<!-- wp:list -->

- [CVE-2021-26855](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-26855)

- [CVE-2021-26857](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-26857)

- [CVE-2021-26858](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-26858)

- [CVE-2021-27065](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-27065)

- Not related to known attacks

  - [CVE-2021-26412](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-26412)
  - [CVE-2021-26854](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-26854)
  - [CVE-2021-27078](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-27078)

<!-- /wp:list -->

<!-- wp:paragraph -->

**Overview of the Attack and Exploitation**

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Microsoft originally followed the adversary group HAFNIUM launching targeted attacks against specific organizations. Recently other adversary groups have started targeting these vulnerabilities, and we expect that these attacks will continue to increase as attackers investigate and automate exploitation of these vulnerabilities. Not all these footholds are being utilized immediately, and some were likely put in place for future exploitation. A detailed overview is available here: [_HAFNIUM targeting Exchange Servers with 0-day exploits - Microsoft Security_](https://www.microsoft.com/security/blog/2021/03/02/hafnium-targeting-exchange-servers/)

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

While some adversary groups are installing web shells as broadly as possible for future use, some are also conducting further operations on compromised servers and attempting to move laterally into organizations’ environments to establish deeper persistence. This document provides instructions to remediate web shells and determine the initial ingress of an adversary.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Organizations that have detected or suspect more advanced post exploitation activities, such as credential dumps, lateral movement, and installation of further malware/ransomware, should consider enlisting the services of cybersecurity response professionals. Investigating and remediating post-exploitation across an IT environment is beyond the scope of this blog, but we want organizations to understand where we recommend they begin their investigations based on the patterns of behavior we’ve seen associated with exploitation of these vulnerabilities.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

**Recommended Response Steps**

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Successful response requires being able to communicate without the attacker eavesdropping on your communications. Until you have achieved assurance of the privacy of your communications on your current infrastructure, use completely isolated identities and communication resources to coordinate your response and discuss topics that could potentially tip off the attacker to your investigation.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Successful response should consist of the following steps:

<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->

1. Deploy updates to affected Exchange Servers.

<!-- /wp:list -->

<!-- wp:list {"ordered":true,"start":2} -->

2. Investigate for exploitation or indicators of persistence.

<!-- /wp:list -->

<!-- wp:list {"ordered":true,"start":3} -->

3. Remediate any identified exploitation or persistence and investigate your environment for indicators of lateral movement or further compromise.

<!-- /wp:list -->

<!-- wp:paragraph -->

Microsoft recommends that you update and investigate in parallel, but if you must prioritize one, prioritize updating and mitigation of the vulnerability.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

**It is imperative that you update or mitigate your affected Exchange deployments immediately.** These vulnerabilities are being actively exploited by multiple adversary groups. For the highest assurance, block access to vulnerable Exchange servers from untrusted networks until your Exchange servers are patched or mitigated. If you have not yet patched, and have not applied the mitigations referenced below, a one-click tool, the [Exchange On-premises Mitigation Tool](https://msrc-blog.microsoft.com/2021/03/15/one-click-microsoft-exchange-on-premises-mitigation-tool-march-2021/) is now our recommended path to mitigate until you can patch.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

If you are an experienced IT professional or incident responder, review our [Guidance for Responders](https://msrc-blog.microsoft.com/2021/03/16/guidance-for-responders-investigating-and-remediating-on-premises-exchange-server-vulnerabilities/) post for more detailed recommendations that will be continually updated when Microsoft has new information about responding to these attacks.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

**Deploy updates to affected Exchange Servers**

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

If you do not have an inventory of servers in your environments that run Exchange, you can use the nmap script Microsoft has [provided](https://github.com/microsoft/CSS-Exchange/blob/main/Security/http-vuln-cve2021-26855.nse) to scan your networks for vulnerable Exchange deployments. For the Exchange servers in your environment, immediately apply [updates](https://support.microsoft.com/en-us/topic/description-of-the-security-update-for-microsoft-exchange-server-2019-2016-and-2013-march-2-2021-kb5000871-9800a6bb-0a21-4ee7-b9da-fa85b3e1d23b) for the version of Exchange you are running. While these Security Updates do not apply to Exchange Online / Office 365, if you are in Hybrid mode you need to apply them to your on-premises Exchange Server, even if it is used for management purposes only. You do not need to re-run (Hybrid Configuration Wizard) HCW if you are using it. The high-level summary of our patching guidance is:

<!-- /wp:paragraph -->

<!-- wp:list -->

- **Exchange Online is not affected.**
- **Exchange 2003 and 2007** are no longer supported but are not believed to be affected by the March 2021 vulnerabilities. You must upgrade to a supported version of Exchange to ensure that you are able to secure your deployment against vulnerabilities fixed in current versions of Microsoft Exchange and future fixes for security issues.
- **Exchange 2010** is only impacted by [CVE-2021-26857](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-26857), which is not the first step in the attack chain. Organizations should apply the update and then follow the guidance below to investigate for potential exploitation and persistence.

<!-- /wp:list -->

<!-- wp:list -->

- **Exchange 2013, 2016, and 2019** are impacted. Immediately deploy the updates or apply mitigations described below. For help identifying which updates you need to get from your current CU version to a version with the latest security patches follow this guidance: [Released: March 2021 Exchange Server Security Updates - Microsoft Tech Community](https://techcommunity.microsoft.com/t5/exchange-team-blog/released-march-2021-exchange-server-security-updates/ba-p/2175901). You can use the linked Health Checker script [here](https://github.com/dpaulson45/HealthChecker#download) to help you identify exactly which CUs are needed for your deployment. Microsoft has also [released additional Security Updates](https://techcommunity.microsoft.com/t5/exchange-team-blog/march-2021-exchange-server-security-updates-for-older-cumulative/ba-p/2192020) for select older Exchange CUs to accelerate their path to patched for these vulnerabilities.

<!-- /wp:list -->

<!-- wp:paragraph -->

**Mitigations:** If for some reason you cannot update your Exchange servers immediately, we have released instructions for how to mitigate these vulnerabilities through reconfiguration. We recognize that applying the latest patches to Exchange servers may take time and planning, especially if organizations are not on recent versions and/or associated cumulative and security patches. We recommend prioritizing installing the patches on Exchange Servers that are externally facing first, but all affected Exchange Servers should be updated urgently. The Mitigations suggested **are not substitutes for installing the updates** and will impact some Exchange functionality while in place. Detailed guidance on applying the alternate mitigations is provided here:\_ _[\_Microsoft Exchange Server Vulnerabilities Mitigations – March 2021_](https://msrc-blog.microsoft.com/2021/03/05/microsoft-exchange-server-vulnerabilities-mitigations-march-2021/)_._

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Applying the update or the alternative mitigation techniques will not evict an adversary who has already compromised your environment. The remainder of this document shares guidance to help you determine whether your Exchange servers were exploited before mitigating the issue and how to remediate some types of attacks.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

**Investigate for exploitation, persistence, or evidence of lateral movement**

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

In addition to protecting your Exchange servers from exploitation, you should assess to ensure that the vulnerabilities were not exploited _before_ you got them to a protected state.

<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->

1. **Analyze the Exchange product logs for evidence of exploitation**. Microsoft released detailed steps here including scripts to help automate: [_Scan Exchange log files for indicators of c_](https://www.microsoft.com/security/blog/2021/03/02/hafnium-targeting-exchange-servers/#scan-log)_ompromise_. If you choose to use the script provided, you will have an option to scan some or all of your Exchange servers at the same time.

<!-- /wp:list -->

<!-- wp:list {"ordered":true,"start":2} -->

2. **Scan for known web shells.** The Microsoft Defender team has included security intelligence for known malware related to these vulnerabilities in the latest version of the [Microsoft Safety Scanner](https://docs.microsoft.com/en-us/windows/security/threat-protection/intelligence/safety-scanner-download). Run this Safety Scanner on every Exchange server in your environment. If you need assistance, detailed guidance can be found here: [CSS-Exchange/Defender-MSERT-Guidance.md at main · microsoft/CSS-Exchange · GitHub](https://github.com/microsoft/CSS-Exchange/blob/main/Security/Defender-MSERT-Guidance.md)\*\*\*\*

<!-- /wp:list -->

<!-- wp:paragraph -->

For Microsoft Defender and Microsoft Defender for Endpoint customers, please make sure you are on the latest security intelligence patch: [_Latest security intelligence patches for Microsoft Defender Antivirus and other Microsoft antimalware - Microsoft Security Intelligence_](https://www.microsoft.com/en-us/wdsi/defenderupdates)

<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true,"start":3} -->

3. **Use the Microsoft IOC feed for newly observed indicators.** To aid defenders in investigating these attacks where Microsoft security products and tooling may not be deployed, we are releasing a feed of observed indicators of compromise (IOCs). The feed of malware hashes and known malicious file paths observed in related attacks is available in both JSON and CSV formats at the below GitHub links. This information is being shared as TLP:WHITE (free for all to use)

<!-- /wp:list -->

<!-- wp:list -->

- [**CSV format**](https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Sample%20Data/Feeds/MSTICIoCs-ExchangeServerVulnerabilitiesDisclosedMarch2021.csv)
- [**JSON format**](https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Sample%20Data/Feeds/MSTICIoCs-ExchangeServerVulnerabilitiesDisclosedMarch2021.json)

<!-- /wp:list -->

<!-- wp:list {"ordered":true,"start":4} -->

4. **Leverage other organizational security capabilities** in addition to these tools. The tools above make the threat intelligence that Microsoft has been accumulating related to exploitation of these vulnerabilities available to all organizations. Your organization may also have its own security controls, and we recommend that you increase your vigilance on signals from Exchange servers in your current security controls too.

<!-- /wp:list -->

<!-- wp:paragraph -->

**Remediate any identified exploitation or persistence**

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

If you find any evidence of exploitation (e.g., in Exchange application logs), ensure you are retaining the logs, and use the details such as timestamps and source IPs to drive further investigation.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

If you find known bad files using your endpoint security solution, the Microsoft IOC feed, or the Microsoft Safety Scanner, take the following actions:

<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->

1. Remediate and quarantine them for further investigation unless they are expected customizations in your environment.

<!-- /wp:list -->

<!-- wp:list {"ordered":true,"start":2} -->

2. Search your IIS logs to identify whether or not the files identified as malicious have been accessed.

<!-- /wp:list -->

<!-- wp:list {"ordered":true,"start":3} -->

3. Consider submitting suspected malicious files to Microsoft for analysis following this guidance: [Submit files for analysis by Microsoft - Windows security | Microsoft Docs](https://docs.microsoft.com/en-us/windows/security/threat-protection/intelligence/submission-guide) and include the string “ExchangeMarchCVE” in the Additional Information text box of the submission form.

<!-- /wp:list -->

<!-- wp:paragraph -->

As part of hunting and scanning, if you find evidence of exploitation of the Unified Messaging RCE (CVE-2021-26857), you should delete potential uncleaned exploit files in %ExchangeInstallPath%\\UnifiedMessaging\\voicemail

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

If you find any evidence of external access to a suspect file identified above, use this information to drive further investigation on impacted servers and across your environment. Our blog post on the Hafnium attack goes into details for folks who need additional details for IOC’s, File Hashes, etc.: [HAFNIUM targeting Exchange Servers with 0-day exploits - Microsoft Security](https://www.microsoft.com/security/blog/2021/03/02/hafnium-targeting-exchange-servers/)

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

If any of your security detections or the investigation tools results lead you to suspect that your Exchange servers have been compromised and an attacker has actively engaged in your environment, execute your Security Incident Response plans, and consider engaging experienced Incident Response assistance. It is particularly critical if you suspect that your Exchange environment is compromised by a persistent adversary that you coordinate your response using alternative communications channels as mentioned earlier in this document.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

<!-- /wp:paragraph -->
