---
title: 'Guidance for Azure Active Directory (AD) keyCredential property Information Disclosure in Application and Service Principal APIs'
description: ""
published: 2021-11-17
type: posts
redirect_from:
            - https://msrc-blog.microsoft.com/2021/11/17/guidance-for-azure-active-directory-ad-keycredential-property-information-disclosure-in-application-and-service-principal-apis/
author: Sebastian.Fernandez
categories:
- MSRC
hero: ../../../defaultHero.jpg
---
<!-- wp:paragraph -->

Microsoft recently mitigated an information disclosure issue, [CVE-2021-42306](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-42306), to prevent private key data from being stored by some Azure services in the [keyCredentials ](https://docs.microsoft.com/en-us/graph/api/resources/keycredential?view=graph-rest-1.0)property of an Azure Active Directory (Azure AD) [Application ](https://docs.microsoft.com/en-us/graph/api/resources/keycredential?view=graph-rest-1.0)and/or [Service Principal](https://docs.microsoft.com/en-us/graph/api/resources/serviceprincipal?view=graph-rest-1.0), and prevent reading of private key data previously stored in the keyCredentials property.  
The keyCredentials property is used to configure an application’s authentication credentials. It is accessible to any user or service in the organization’s Azure AD tenant with read access to application metadata.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

The property is designed to accept a certificate with public key data for use in authentication, but certificates with private key data could have also been incorrectly stored in the property. Access to private key data can lead to an elevation of privilege attack by allowing a user to impersonate the impacted Application or Service Principal.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Some Microsoft services incorrectly stored private key data in the (keyCredentials) property while creating applications on behalf of their customers. We have conducted an investigation and have found no evidence of malicious access to this data.  
Microsoft Azure services affected by this issue have mitigated by preventing storage of clear text private key information in the keyCredentials property, and Azure AD has mitigated by preventing reading of clear text private key data that was previously added by any user or service in the UI or APIs.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

As a result, clear text private key material in the keyCredentials property is inaccessible, mitigating the risks associated with storage of this material in the property.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

As a precautionary measure, Microsoft is recommending customers using these services take action as described in “Affected products/services,” below. We are also recommending that customers who suspect private key data may have been added to credentials for additional Azure AD applications or Service Principals in their environments follow this guidance.

<!-- /wp:paragraph -->

<!-- wp:heading -->

## Affected products/services

<!-- /wp:heading -->

<!-- wp:paragraph -->

Microsoft has identified the following platforms/services that stored their private keys in the public property. We have notified customers who have impacted Azure AD applications created by these services and notified them via Azure Service Health Notifications to provide remediation guidance specific to the services they use.

<!-- /wp:paragraph -->

<!-- wp:table {"className":"is-style-stripes"} -->

|                                                                                                                                                                                                                                  |                                                                                                                                                                                                                                                                                                                                                                                                                         |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Product/Service**                                                                                                                                                                                                              | **Microsoft’s Mitigation**                                                                                                                                                                                                                                                                                                                                                                                              | **Customer impact assessment and remediation**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Azure Automation uses the [Application and Service Principal keyCredential](https://docs.microsoft.com/en-us/azure/active-directory/develop/app-objects-and-service-principals) APIs when Automation Run-As Accounts are created | Azure Automation deployed an update to the service to prevent private key data in clear text from being uploaded to Azure AD applications. Run-As accounts created or renewed after 10/15/2021 are not impacted and do not require further action.                                                                                                                                                                      | Automation Run As accounts created with an [Azure Automation self-signed certificate](https://docs.microsoft.com/en-us/azure/automation/manage-runas-account#cert-renewal) between 10/15/2020 and 10/15/2021 that have not been renewed are impacted. Separately customers [who bring their own certificates](https://docs.microsoft.com/en-us/azure/automation/manage-runas-account?WT.mc_id=Portal-Microsoft_Azure_Automation#renew-an-enterprise-or-third-party-certificate) could be affected. This is regardless of the renewal date of the certificate. To identify and remediate impacted Azure AD applications associated with impacted Automation Run-As accounts, please navigate to this [Github Repo](https://aka.ms/azure-automation-runas-cred-roll) In addition, Azure Automation supports Managed Identities Support (GA announced on October 2021). Migrating to Managed Identities from Run-As will mitigate this issue. Please follow the guidance [here](https://docs.microsoft.com/en-us/azure/automation/enable-managed-identity-for-automation#migrate-from-existing-run-as-accounts-to-managed-identity) to migrate. |
| Azure Migrate service creates Azure AD applications to enable [Azure Migrate appliances](https://docs.microsoft.com/en-us/azure/migrate/migrate-appliance-architecture) to communicate with the service’s endpoints.             | Azure Migrate deployed an update to prevent private key data in clear text from being uploaded to Azure AD applications. Azure Migrate appliances that were registered after 11/02/2021 and had [Appliance configuration manager version 6.1.220.1 and above](https://docs.microsoft.com/en-us/azure/migrate/migrate-appliance#check-the-appliance-services-version) are not impacted and do not require further action | Azure Migrate appliances registered prior to 11/02/2021 and/or appliances registered after 11/02/2021 where [auto-update was disabled](https://docs.microsoft.com/en-us/azure/migrate/migrate-appliance#appliance-upgrades) could be affected by this issue. To identify and remediate any impacted Azure AD applications associated with Azure Migrate appliances, please navigate to this [link](https://go.microsoft.com/fwlink/?linkid=2180156).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Azure Site Recovery (ASR) creates Azure AD applications to communicate with the ASR [service endpoints](https://docs.microsoft.com/en-us/azure/site-recovery/vmware-azure-architecture-preview#outbound-connectivity-for-urls).  | Azure Site Recovery deployed an update to prevent private keydata from being uploaded to Azure AD applications. Customers using Azure Site Recovery’s preview experience “[VMware to Azure Disaster Recovery](https://docs.microsoft.com/en-us/azure/site-recovery/vmware-azure-set-up-replication-tutorial-preview)” after 11/01/2021 are not impacted and do not require further action                               | Customers who have deployed and registered the preview version of VMware to Azure DR experience with ASR before 11/01/2021 could be affected. To identify and remediate the impacted AAD Apps associated with Azure Site Recovery appliances, please navigate to this [link](https://aka.ms/ASR_AADApp_CertRotation).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Azure AD applications and Service Principals \[1]                                                                                                                                                                                | Microsoft has blocked reading private key data as of 10/30/2021.                                                                                                                                                                                                                                                                                                                                                        | Follow the guidance available at [](https://aad-app-credential-remediation-guide)[aad-app-credential-remediation-guide](https://aka.ms/aad-app-credential-remediation-guide/) to assess if your application key credentials need to be rotated. The guidance walks through the assessment steps to identify if private key information was stored in keyCredentials and provides remediation options for credential rotation.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

<!-- /wp:table -->

<!-- wp:paragraph -->

\[1] This issue only affects Azure AD Applications and Service Principals where private key material in clear text was added to a keyCredential. Microsoft recommends taking precautionary steps to identify any additional instances of this issue in applications where you manage credentials and take remediation steps if impact is found.

<!-- /wp:paragraph -->

<!-- wp:heading -->

## What else can I do to audit and investigate applications for unexpected use?

<!-- /wp:heading -->

<!-- wp:paragraph -->

Additionally, as a best practice, we recommend auditing and investigating applications for unexpected use:

<!-- /wp:paragraph -->

<!-- wp:list -->

- Audit the permissions that have been granted to the impacted entities (e.g., subscription access, roles, OAuth permissions, etc.) to assess impact in case the credentials were exposed. Refer to the [Application permission section](https://docs.microsoft.com/en-us/azure/active-directory/fundamentals/security-operations-applications#application-permissions) in the security operations guide.
- If you rotated the credential for your application/service principal, we suggest investigating for unexpected use of the impacted entity especially if it has high privilege permissions to sensitive resources. Additionally, review the security guidance on [least privilege access](https://docs.microsoft.com/en-us/azure/active-directory/develop/secure-least-privileged-access) for apps to ensure your applications are configured with least privilege access.
- Check [sign-in](https://docs.microsoft.com/en-us/azure/active-directory/reports-monitoring/concept-all-sign-ins) logs, [AAD audit logs](https://docs.microsoft.com/en-us/azure/active-directory/reports-monitoring/concept-audit-logs) and [M365 audit logs](https://docs.microsoft.com/en-us/microsoft-365/compliance/auditing-solutions-overview?view=o365-worldwide), for anomalous activity like sign-ins from unexpected IP addresses.
- Customers who have Microsoft Sentinel deployed in their environment can leverage notebook/playbook/hunting queries to look for potentially malicious activities. Look for more guidance [here](https://aka.ms/aad-app-credential-remediation-sentinel-guide).
- For more information refer to the [security operations guidance](https://aka.ms/app-security-operations-guide).

<!-- /wp:list -->

<!-- wp:paragraph -->

Part of any robust security posture is working with researchers to help find vulnerabilities, so we can fix any findings before they are misused. We want to thank Karl Fosaaen of NetSPI [who reported this vulnerability ](https://www.netspi.com/blog/technical/cloud-penetration-testing/azure-cloud-vulnerability-credmanifest/)and [Allscripts](https://www.allscripts.com/) who worked with the Microsoft Security Response Center (MSRC) under [Coordinated Vulnerability Disclosure (CVD)](https://www.microsoft.com/en-us/msrc/cvd) to help keep Microsoft customers safe.

<!-- /wp:paragraph -->