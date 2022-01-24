---
title: 'Microsoft Exchange Server Vulnerabilities Mitigations - updated March 15, 2021'
description: ""
published: 2021-03-05
type: posts
redirect_from:
            - https://msrc-blog.microsoft.com/2021/03/05/microsoft-exchange-server-vulnerabilities-mitigations-march-2021/
author: simon.pope
categories:
- CVE-2021-26855
- CVE-2021-26857
- CVE-2021-26858
- CVE-2021-27065
- MSRC
- partial mitigations
hero: ../../../defaultHero.jpg
---
<!-- wp:paragraph -->

**Update March 15, 2021:** _If you have not yet patched, and have not applied the mitigations referenced below, a one-click tool, the [Exchange On-premises Mitigation Tool](https://msrc-blog.microsoft.com/2021/03/15/one-click-microsoft-exchange-on-premises-mitigation-tool-march-2021/) is now our recommended path to mitigate until you can patch._

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Microsoft previously [blogged](https://www.microsoft.com/security/blog/2021/03/02/hafnium-targeting-exchange-servers/) our** strong recommendation that customers upgrade their on-premises Exchange environments to the latest supported version**. For customers that are not able to quickly apply updates, we are providing the following alternative mitigation techniques to help Microsoft Exchange customers who need more time to patch their deployments and are willing to make risk and service function trade-offs.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

**These mitigations are not a remediation if your Exchange servers have already been compromised, nor are they full protection against attack.** We strongly recommend investigating your Exchange deployments using the hunting recommendations [here](https://www.microsoft.com/security/blog/2021/03/02/hafnium-targeting-exchange-servers/#scan-log) to ensure that they have not been compromised. We recommend initiating an investigation in parallel with or after applying one of the following mitigation strategies. **All the scripts and tools mentioned in this blog, along with guidance on using them can be found here:** <https://github.com/microsoft/CSS-Exchange/blob/main/Security/>

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Customers should choose one of the following mitigation strategies based on your organization’s priorities:

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

**Recommended solution: _Install the security patch_**

<!-- /wp:paragraph -->

<!-- wp:list -->

- This method is the **only complete mitigation **and has no impact to functionality.
- The following has details on how to install the security update: <https://techcommunity.microsoft.com/t5/exchange-team-blog/released-march-2021-exchange-server-security-updates/ba-p/2175901>
- This will not evict an adversary who has already compromised a server.

<!-- /wp:list -->

<!-- wp:paragraph -->

\***\*Interim mitigations if unable to patch Exchange Server 2013, 2016, and 2019:\*\***

<!-- /wp:paragraph -->

<!-- wp:list -->

- Implement an IIS Re-Write Rule to filter malicious https requests
- Disable Unified Messaging (UM)
- Disable Exchange Control Panel (ECP) VDir
- Disable Offline Address Book (OAB) VDir

<!-- /wp:list -->

<!-- wp:paragraph -->

These mitigations can be applied or rolled back using the [ExchangeMitigations.ps1](https://github.com/microsoft/CSS-Exchange/blob/main/Security/) script described below and have some known impact to Exchange Server functionality. The mitigations are effective against the attacks we have seen so far in the wild but are not guaranteed to be complete mitigations for all possible exploitation of these vulnerabilities. This will not evict an adversary who has already compromised a server. **_This should only be used as a temporary mitigation until Exchange servers can be fully patched, and we recommend applying all of the mitigations at once._**

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### ExchangeMitigations.ps1

<!-- /wp:heading -->

<!-- wp:heading {"level":4} -->

#### Overview

<!-- /wp:heading -->

<!-- wp:paragraph -->

This script contains mitigations to help address the following vulnerabilities:

<!-- /wp:paragraph -->

<!-- wp:list -->

- [CVE-2021-26855](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-26855)
- [CVE-2021-26857](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-26857)
- [CVE-2021-27065](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-27065)
- [CVE-2021-26858](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-26858)

<!-- /wp:list -->

<!-- wp:paragraph -->

This script is to be executed via an elevated Exchange PowerShell Session or elevated Exchange Management Shell. Details for mitigations are below and additional information is on the aforementioned [GitHub](https://github.com/microsoft/CSS-Exchange/blob/main/Security/).

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Backend Cookie Mitigation

<!-- /wp:heading -->

<!-- wp:paragraph -->

**Applies To**: [CVE-2021-26855](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-26855)

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

**Description:** This mitigation will filter https requests that contain malicious X-AnonResource-Backend and malformed X-BEResource cookies which were found to be used in the SSRF attacks in the wild. This will help with defense against the known patterns observed but not the SSRF as a whole.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

**Note:** The IIS Rewrite rules will be removed after Exchange is upgraded and the mitigation will need to be reapplied if the security patch has not been installed.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

**Requirements: **URL Rewrite Module

<!-- /wp:paragraph -->

<!-- wp:list -->

- For IIS 10 and higher URL Rewrite Module 2.1 is recommended, version 2.1 (x86 and x64) can be downloaded here:

  - <https://www.iis.net/downloads/microsoft/url-rewrite>

- For IIS 8.5 and lower Rewrite Module 2.0 is recommended, version 2.0 can be downloaded here:

  - x86 - <https://www.microsoft.com/en-us/download/details.aspx?id=5747>
  - x64 - <https://www.microsoft.com/en-us/download/details.aspx?id=7435>

<!-- /wp:list -->

<!-- wp:paragraph -->

**Impact: **No **known **impact to Exchange functionality if URL Rewrite module is installed as recommended**.**

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Installing URL Rewrite version 2.1 on IIS versions 8.5 and lower may cause IIS and Exchange to become unstable. If there is a mismatch between the URL Rewrite module and IIS version, ExchangeMitigations.ps1 will not apply the mitigation for CVE-2021-26855. You must uninstall the URL Rewrite module and reinstall the correct version.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Unified Messaging Mitigation

<!-- /wp:heading -->

<!-- wp:paragraph -->

**Applies To: **[CVE-2021-26857](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-26857)

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

**Description:** This mitigation will disable the Unified Message services in Exchange. Microsoft Exchange Managed Availability services are also disabled to prevent mitigation regression.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

**Impact: **Unified Messaging/Voicemail outage when these services are disabled. The advanced monitoring capabilities of Exchange are also disabled, due to disabling Microsoft Exchange Managed Availability services.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### ECP Application Pool Mitigation

<!-- /wp:heading -->

<!-- wp:paragraph -->

**Applies To:** [CVE-2021-27065](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-27065) & [CVE-2021-26858](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-26858)

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

**Description: **This mitigation will disable the Exchange Control Panel (ECP) Virtual Directory. Microsoft Exchange Managed Availability services are also disabled to prevent mitigation regression.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

**Impact: **The Exchange Control Panel will no longer be available. All Exchange Administration can be done via Remote PowerShell while the Exchange Control Panel is disabled. The advanced monitoring capabilities of Exchange are also disabled, due to disabling Microsoft Exchange Managed Availability services.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### OAB Application Pool Mitigation

<!-- /wp:heading -->

<!-- wp:paragraph -->

**Applies To:** [CVE-2021-27065](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-27065) & [CVE-2021-26858](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-26858)

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

**Description:** This mitigation disables the Offline Address Book (OAB) Application Pool and API. Microsoft Exchange Managed Availability services are also disabled to prevent mitigation regression.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

**Impact: **OAB will be unavailable, including downloads of the Offline Address Book by Outlook clients. This may result in stale address book results in some scenarios and configurations. The advanced monitoring capabilities of Exchange are also disabled, due to disabling Microsoft Exchange Managed Availability services.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Additional hunting and investigation techniques

<!-- /wp:heading -->

<!-- wp:heading {"level":4} -->

#### Nmap Script To Scan For CVE-2021-26855

<!-- /wp:heading -->

<!-- wp:paragraph -->

**Description:** Detects whether the specified URL is vulnerable to the Exchange Server SSRF Vulnerability (CVE-2021-26855). This can be used to validate patch and mitigation state of exposed servers.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->

#### Test-ProxyLogon.Ps1

<!-- /wp:heading -->

<!-- wp:paragraph -->

**Description:**

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

This script checks targeted exchange servers for signs of the proxy logon compromise. Proxy logon vulnerabilities are described in CVE-2021-26855, 26858, 26857, and 27065. This script is intended to be run via an elevated Exchange Management Shell.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Microsoft Support Emergency Response Tool (MSERT) to scan Microsoft Exchange Server

<!-- /wp:heading -->

<!-- wp:paragraph -->

Microsoft Defender has included security intelligence updates to the latest version of the [Microsoft Safety Scanner](https://docs.microsoft.com/en-us/windows/security/threat-protection/intelligence/safety-scanner-download) (MSERT.EXE) to detect and remediate the latest threats known to abuse the [Exchange Server vulnerabilities](https://msrc-blog.microsoft.com/2021/03/05/microsoft-exchange-server-vulnerabilities-mitigations-march-2021/) disclosed on March 2, 2021. Administrators can use this tool for servers not protected by Microsoft Defender for Endpoint or where exclusions are configured for the recommended folders below.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

To use the Microsoft Support Emergency Response Tool (MSERT) to scan the Microsoft Exchange Server locations for known indicators from adversaries:

<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true,"type":"1"} -->

1. Download MSERT from [Microsoft Safety Scanner Download - Windows security](https://docs.microsoft.com/en-us/windows/security/threat-protection/intelligence/safety-scanner-download)[.](https://nam06.safelinks.protection.outlook.com/?url=https%3A%2F%2Fdocs.microsoft.com%2Fen-us%2Fwindows%2Fsecurity%2Fthreat-protection%2Fintelligence%2Fsafety-scanner-download&data=04%7C01%7Crmcree%40microsoft.com%7Cb8e538e9f8774dd86fff08d8e0ea60a5%7C72f988bf86f141af91ab2d7cd011db47%7C1%7C0%7C637506644592225223%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C1000&sdata=jf9RnovFuZKS8jjlbChMOZvKOYDva%2BYQNA%2BZHLPqF0s%3D&reserved=0) **Note:** In case you need to troubleshoot it, see [How to troubleshoot an error when you run the Microsoft Safety Scanner](https://support.microsoft.com/en-us/topic/how-to-troubleshoot-an-error-when-you-run-the-microsoft-safety-scanner-6cd5faa1-f7b4-afd2-85c7-9bed02860f1c).
2. Read and accept the **End user license agreement**, then click **Next**.
3. Read the **Microsoft Safety Scanner Privacy Statement**, then click **Next**.
4. Select whether you want to do full scan, or customized scan.

<!-- /wp:list -->

<!-- wp:list -->

- **Full scan** – The most effective way to thoroughly scan every file on the device. It is the most effective option although it might take a long time to complete depending on the directory size of your server.
- **Customized scan** – This can be configured to scan the following file paths where malicious files from the threat actor have been observed:
- _%IIS installation path%\\aspnet_client\\\*_
- _%IIS installation path%\\aspnet_client\\system_web\\\*_
- _%Exchange Server installation path%\\FrontEnd\\HttpProxy\\owa\\auth\\\*_
- _Configured temporary ASP.NET files path_
- _%Exchange Server Installation%\\FrontEnd\\HttpProxy\\ecp\\auth\\\*_

<!-- /wp:list -->

<!-- wp:paragraph -->

These remediation steps are effective against known attack patterns but are **not guaranteed as complete mitigation for all possible exploitation** of these vulnerabilities. Microsoft Defender will continue to monitor and provide the latest security updates.

<!-- /wp:paragraph -->
