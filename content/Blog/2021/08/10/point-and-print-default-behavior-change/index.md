---
title: 'Point and Print Default Behavior Change'
description: ""
published: 2021-08-10
type: posts
redirect_from:
            - https://msrc-blog.microsoft.com/2021/08/10/point-and-print-default-behavior-change/
authors:
- Sebastian.Fernandez
categories:
- MSRC
hero: ../../../defaultHero.jpg
---
<!-- wp:paragraph -->

Our investigation into several vulnerabilities collectively referred to as “PrintNightmare” has determined that the default behavior of Point and Print does not provide customers with the level of security required to protect against potential attacks.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Today, we are addressing this risk by changing the default Point and Print driver installation and update behavior to require administrator privileges. The installation of this update with default settings will mitigate the publicly documented vulnerabilities in the Windows Print Spooler service. This change will take effect with the installation of the security updates released on August 10, 2021 for all supported versions of Windows, and is documented as [CVE-2021-34481.](https://msrc.microsoft.com/update-guide/en-US/vulnerability/CVE-2021-34481)

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

This change may impact Windows print clients in scenarios where non-elevated users were previously able to add or update printers. However, we strongly believe that the security risk justifies this change. While not recommended, customers can manually disable this mitigation with a registry key, which is outlined in the following KB Article:

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

[KB5005652 How to manage new Point and Print default driver installation behavior](https://support.microsoft.com/topic/873642bf-2634-49c5-a23b-6d8e9a302872)

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Disabling this mitigation will expose your environment to the publicly known vulnerabilities in the Windows Print Spooler service and we recommend administrators assess their security needs before assuming this risk.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

As always, we recommend customers install all security updates as soon as possible. More details on all updates can be found in the [Microsoft Security Update Guide](https://aka.ms/sug). Customers who have automatic updates enabled are automatically protected.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

The MSRC Team

<!-- /wp:paragraph -->
