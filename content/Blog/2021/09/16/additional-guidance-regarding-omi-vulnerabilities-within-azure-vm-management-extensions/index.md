---
title: 'Additional Guidance Regarding OMI Vulnerabilities within Azure VM Management Extensions'
description: ""
published: 2021-09-16
type: posts
redirect_from:
            - https://msrc-blog.microsoft.com/2021/09/16/additional-guidance-regarding-omi-vulnerabilities-within-azure-vm-management-extensions/
authors:
- Sebastian.Fernandez
categories:
- MSRC
hero: ../../../defaultHero.jpg
---
<!-- wp:paragraph -->

_Last updated on October 5, 2021: See revision history located at the end of the post_ for changes.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

On September 14, 2021, Microsoft released fixes for three Elevation of Privilege (EoP) vulnerabilities and one unauthenticated Remote Code Execution (RCE) vulnerability in the Open Management Infrastructure (OMI) framework: [CVE-2021-38645](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-38645), [CVE-2021-38649](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-38649), [CVE-2021-38648](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-38648), and [CVE-2021-38647](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-38647), respectively. [Open Management Infrastructure](https://github.com/microsoft/omi) (OMI) is an open-source Web-Based Enterprise Management (WBEM) implementation for managing Linux and UNIX systems. Several Azure Virtual Machine (VM) management extensions use this framework to orchestrate configuration management and log collection on Linux VMs. The remote code execution vulnerability only impacts customers using a Linux management solution (on-premises SCOM or Azure Automation State Configuration or Azure Desired State Configuration extension) that enables remote OMI management. Today, we are providing additional guidance and rolling out additional protections within Azure impacted VM management extensions to resolve these issues.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

**What versions of OMI are vulnerable?**

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

All OMI versions below v1.6.8-1 are vulnerable.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

**Which PaaS services are affected by the OMI vulnerability?**

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

For any PaaS service offerings that use the vulnerable VM extensions for Linux as part of the default service offering, Microsoft has updated the extensions on the affected VM’s transparently for customers. Where customers have installed OMI or any of the extensions on their Azure VMs or on-premises machines, they are required to follow the guidance as provided in table below.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

**How can I determine which VMs are impacted by these vulnerabilities?**

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

VMs that use the VM Management Extensions listed below are impacted. All customers that are impacted will be notified directly.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

To identify the affected VMs in their subscriptions, customers can use one the following:

<!-- /wp:paragraph -->

<!-- wp:list -->

- [Using ASC to find machines affected by OMI vulnerabilities in Azure VM Management Extensions - Microsoft Tech Community](https://techcommunity.microsoft.com/t5/azure-security-center/using-asc-to-find-machines-affected-by-omi-vulnerabilities-in/ba-p/2767240)
- To identify an Azure VM for the vulnerable extensions, leverage Azure Portal or Azure CLI as described in [this article](https://docs.microsoft.com/en-us/azure/virtual-machines/extensions/features-linux#discover-vm-extensions). If the reported extension versions are matching the versions listed for the ‘Fixed Extension Versions’ in below table, no further action is required.
- To scan an Azure subscription for vulnerable VM’s use the script [here](https://github.com/microsoft/OMS-Agent-for-Linux/tree/master/tools/OMIcheck). This script can also be used to patch the affected VMs using the `upgradeOMI` parameter.

<!-- /wp:list -->

<!-- wp:paragraph -->

**What can I do to protect against these vulnerabilities? **

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

**Extension updates: **Customers must update vulnerable extensions for their cloud and on-premises deployments as per the table below. New VMs in a region are protected from these vulnerabilities as they are created. For cloud deployments, Microsoft has deployed the updates to extensions across Azure regions. The automatic extension updates were transparently patched without a reboot. Where possible, customers should ensure that automatic extension updates are enabled. Please see [Automatic Extension Upgrade for VMs and Scale Sets in Azure](https://docs.microsoft.com/en-us/azure/virtual-machines/automatic-extension-upgrade) to evaluate the configuration of automatic updates.

<!-- /wp:paragraph -->

<!-- wp:list -->

- Updates are available for all extensions that use OMI to address the remote execution vulnerability (RCE) and Elevation of Privilege (EoP). Customers can add defense-in-depth and protect against the RCE vulnerability by ensuring VMs are deployed within a Network Security Group (NSG) or behind a perimeter firewall and restrict access to Linux systems that expose the OMI ports (TCP 5985, 5986, and 1270). Note that ports 5985 and 5986 are also used for PowerShell Remoting on Windows and are not impacted by these vulnerabilities. For more information about configuring firewall rules for DSC and SCOM, see [Azure Automation Network Configuration Details](https://docs.microsoft.com/en-us/azure/automation/automation-network-configuration) and [Configuring a Firewall for Operations Manager](https://docs.microsoft.com/en-us/system-center/scom/plan-security-config-firewall?view=sc-om-2019).

<!-- /wp:list -->

<!-- wp:paragraph -->

**How can I detect if this vulnerability has been exploited?**

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

An attacker that leverages these vulnerabilities to execute commands remotely will have commands run by the SCXcore service. The SCXcore provider runs on AIX 6.1 and later, HP/UX 11.31 and later, Solaris 5.10 and later, and most versions of Linux as far back as RedHat 5.0, SuSE 10.1, and Debian 5.0. SCX has a **RunAsProvider **named ExecuteShellCommand. The ExecuteShellCommand **RunAsProvider **will execute any UNIX/Linux command using the /bin/sh shell.

<!-- /wp:paragraph -->

<!-- wp:list -->

- If you have auditd enabled and are collecting execve logs, look for commands running from the working directory ‘/var/opt/microsoft/scx/tmp’.
- You can also enable logging for the SCXadmin tool. If you enable logging using the command: ‘/opt/microsoft/scx/bin/tools/scxadmin -log-set all verbose’, you will see the commands in the /var/opt/microsoft/scx/log/scx.log. To see the commands that are executing, grep for Invoke_ExecuteShellCommand.

<!-- /wp:list -->

<!-- wp:paragraph -->

More details about SCXadmin is available here: [Administering and Configuring the UNIX - Linux Agent | Microsoft Docs.](https://docs.microsoft.com/en-us/system-center/scom/manage-security-administer-crossplat-agent?view=sc-om-2019) For more details on SCXcore, see the GitHub repo here: [microsoft/SCXcore: System Center Cross Platform Provider for Operations Manager (github.com)](https://nam06.safelinks.protection.outlook.com/?url=https%3A%2F%2Fgithub.com%2Fmicrosoft%2FSCXcore%23scxcore-&data=04%7C01%7Crussmc%40microsoft.com%7Ca771b7949c0d4d3c0f2608d979e79bce%7C72f988bf86f141af91ab2d7cd011db47%7C1%7C0%7C637674857946567680%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C1000&sdata=WgAZlI1dNfzoTRFSwxoRs0ikNmhVt4XhRg2q8WgCUb8%3D&reserved=0).

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Microsoft has released additional detection guidance and protections for [Azure Sentinel\_ \_Hunting for OMI Vulnerability Exploitation with Azure Sentinel](https://techcommunity.microsoft.com/t5/azure-sentinel/hunting-for-omi-vulnerability-exploitation-with-azure-sentinel/ba-p/2764093). To further improve security protections for customers, Microsoft will continue to provide additional protections to customers as our investigation progresses. Microsoft has also provided the above detection guidance to major security software providers. Security software providers can use this detection guidance to provide updated protections to customers via their security software or devices, such as antivirus, network-based intrusion detection systems, or host-based intrusion prevention systems. For more information about these security providers, please see the [Microsoft Active Protections Program](https://www.microsoft.com/en-us/msrc/mapp?rtc=1).

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

**Are Azure Marketplace VMs impacted by these vulnerabilities?**  
Microsoft has identified a subset of Azure marketplace VMs that have vulnerable versions of OMI framework installed on them. Microsoft has published Azure Service Health Notifications to customers utilizing impacted VM images to provide them guidance on how to remediate their resources. Microsoft has also notified the Marketplace publishers to release new versions of the VM images for the offers with the updated OMI framework.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

**Engineering teams at Microsoft are working through safe deployment practices and will periodically update this guidance with links to updated instructions and extension update availability.** \*\*\*\*

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

**Please use the scroll bar to view the full table.**

<!-- /wp:paragraph -->

<!-- wp:table {"className":"is-style-stripes"} -->

|                                                                                                                                                                                                                                                                                                     |                              |                                    |                                                                                                                                                                                                                                                |                                                                         |                                                                                                                                                                                                                                                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ---------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \***\*Extension/Package\*\***                                                                                                                                                                                                                                                                       | \***\*Deployment Model\*\*** | \***\*Vulnerability Exposure\*\*** | \***\*Vulnerable Extension Versions\*\***                                                                                                                                                                                                      | **\*\***Fixed Extension Versions**\*\***                                | \***\*Updated Extension Availability\*\***                                                                                                                                                                                                                                                                                                                                              |
| [OMI as standalone package](https://github.com/microsoft/omi)                                                                                                                                                                                                                                       | On Premises/ Cloud           | Remote Code Execution              | OMI module version 1.6.8.0 or less                                                                                                                                                                                                             | OMI version v1.6.8-1                                                    | Manually download the update [here](https://github.com/Microsoft/omi)                                                                                                                                                                                                                                                                                                                   |
| [System Center Operations Manager (SCOM)](https://docs.microsoft.com/en-us/system-center/scom/plan-planning-agent-deployment?view=sc-om-2019#:~:text=In%20System%20Center%20Operations%20Manager%2C%20the%20management%20server,the%20discovery%20of%20agents%20that%20were%20already%20installed.) | On Premises                  | Remote Code Execution              | OMI versions 1.6.8.0 or less (OMI framework is used for Linux/Unix monitoring)                                                                                                                                                                 | OMI version: 1.6.8-1                                                    | Manually download the update [here](https://github.com/Microsoft/omi)                                                                                                                                                                                                                                                                                                                   |
| Azure Automation State Configuration, [DSC Extension](https://docs.microsoft.com/en-us/azure/virtual-machines/extensions/dsc-linux)                                                                                                                                                                 | Cloud                        | Remote Code Execution              | Linux DSC Agent versions: 2.71.X.XX (except the fixed version or higher) 2.70.X.XX (except the fixed version or higher) 3.0.0.1 2.0.0.0                                                                                                        | Linux DSC Agent versions: 2.71.1.25 2.70.0.30 3.0.0.3                   | Microsoft has completed deployment of updates. VMs that continue to be reported as vulnerable: Manually update using instructions [here](https://docs.microsoft.com/en-us/azure/virtual-machines/extensions/dsc-overview#azure-cli-deployment)                                                                                                                                          |
| Azure Automation State Configuration, [DSC Extension](https://docs.microsoft.com/en-us/azure/virtual-machines/extensions/dsc-linux)                                                                                                                                                                 | On Premises                  | Remote Code Execution              | OMI versions below v1.6.8-1 (OMI framework is a pre-requisite install for DSC agent)                                                                                                                                                           | OMI version: 1.6.8-1                                                    | Manually update OMI using instructions [here](https://github.com/Microsoft/omi/releases).                                                                                                                                                                                                                                                                                               |
| [Log Analytics Agent](https://docs.microsoft.com/en-us/azure/azure-monitor/agents/agent-linux)                                                                                                                                                                                                      | On Premises                  | Local Elevation of Privilege       | OMS Agent for Linux GA v1.13.39 or less                                                                                                                                                                                                        | OMS Agent for Linux GA v1.13.40-0                                       | Manually update using instructions [here](https://github.com/microsoft/OMS-Agent-for-Linux/releases/tag/OMSAgent_v1.13.40-0)                                                                                                                                                                                                                                                            |
| [Log Analytics Agent](https://docs.microsoft.com/en-us/azure/virtual-machines/extensions/oms-linux)                                                                                                                                                                                                 | Cloud                        | Local Elevation of Privilege       | OMS Agent for Linux GA v1.13.39 or less                                                                                                                                                                                                        | OMS Agent for Linux GA v1.13.40-0                                       | Microsoft has completed the deployment of updates. VMs that continue to be reported as vulnerable: Manually update using instructions [here](https://docs.microsoft.com/en-us/azure/azure-monitor/agents/agent-linux#upgrade-from-a-previous-release)                                                                                                                                   |
| [Azure Diagnostics (LAD)](https://docs.microsoft.com/en-us/azure/virtual-machines/extensions/diagnostics-linux?context=%2Fazure%2Fvirtual-machines%2Fcontext%2Fcontext&tabs=azcli)                                                                                                                  | Cloud                        | Local Elevation of Privilege       | LAD v4.0.0-v4.0.5 LAD v3.0.131 and earlier                                                                                                                                                                                                     | LAD v4.0.15 and LAD v3.0.135                                            | Microsoft has completed the deployment of updates.                                                                                                                                                                                                                                                                                                                                      |
| [Azure Automation Update Management](https://docs.microsoft.com/en-us/azure/automation/update-management/overview)                                                                                                                                                                                  | Cloud                        | Local Elevation of Privilege       | OMS Agent for Linux GA v1.13.39 or less                                                                                                                                                                                                        | OMS Agent for Linux GA v1.13.40-0                                       | Microsoft has completed the deployment of updates. VMs that continue to be reported as vulnerable: Manually update using instructions [here](https://docs.microsoft.com/en-us/azure/azure-monitor/agents/agent-linux#upgrade-from-a-previous-release)                                                                                                                                   |
| [Azure Automation Update Management](https://docs.microsoft.com/en-us/azure/automation/update-management/overview)                                                                                                                                                                                  | On Premises                  | Local Elevation of Privilege       | OMS Agent for Linux GA v1.13.39 or less                                                                                                                                                                                                        | OMS Agent for Linux GA v1.13.40-0                                       | Manually update using instructions [here](https://github.com/microsoft/OMS-Agent-for-Linux/releases/tag/OMSAgent_v1.13.40-0)                                                                                                                                                                                                                                                            |
| [Azure Automation](https://docs.microsoft.com/en-us/azure/automation/automation-runbook-execution)                                                                                                                                                                                                  | Cloud                        | Local Elevation of Privilege       | OMS Agent for Linux GA v1.13.39 or less                                                                                                                                                                                                        | OMS Agent for Linux GA v1.13.40-0                                       | Microsoft has completed the deployment of updates. VMs that continue to be reported as vulnerable: Manually update using instructions [here](https://docs.microsoft.com/en-us/azure/azure-monitor/agents/agent-linux#upgrade-from-a-previous-release)                                                                                                                                   |
| [Azure Automation](https://docs.microsoft.com/en-us/azure/automation/automation-runbook-execution)                                                                                                                                                                                                  | On Premises                  | Local Elevation of Privilege       | OMS Agent for Linux GA v1.13.39 or less                                                                                                                                                                                                        | OMS Agent for Linux GA v1.13.40-0                                       | Manually update using instructions [here](https://github.com/microsoft/OMS-Agent-for-Linux/releases/tag/OMSAgent_v1.13.40-0)                                                                                                                                                                                                                                                            |
| [Azure Security Center](https://docs.microsoft.com/en-us/azure/security-center/faq-data-collection-agents)                                                                                                                                                                                          | Cloud                        | Local Elevation of Privilege       | OMS Agent for Linux GA v1.13.39 or less                                                                                                                                                                                                        | OMS Agent for Linux GA v1.13.40-0                                       | Microsoft has completed deployment of updates.                                                                                                                                                                                                                                                                                                                                          |
| [Azure Sentinel](https://docs.microsoft.com/en-us/azure/sentinel/overview)                                                                                                                                                                                                                          | Cloud                        | Local Elevation of Privilege       | OMS Agent for Linux GA v1.13.39 or less                                                                                                                                                                                                        | OMS Agent for Linux GA v1.13.40-0                                       | Microsoft has completed deployment of updates.                                                                                                                                                                                                                                                                                                                                          |
| [Container Monitoring Solution](https://docs.microsoft.com/en-us/azure/azure-monitor/containers/containers)                                                                                                                                                                                         | Cloud                        | Local Elevation of Privilege       | **See Note 1**                                                                                                                                                                                                                                 | **See Note 2**                                                          | Updated Container Monitoring Solution Docker image is available [here](https://mcr.microsoft.com/azuremonitor/containerinsights/ciprod:microsoft-oms-latest)                                                                                                                                                                                                                            |
| [Azure Stack Hub](https://docs.microsoft.com/en-us/azure-stack/operator/azure-stack-overview?view=azs-2102)                                                                                                                                                                                         | On Premises                  | Local Elevation of Privilege       | Azure Monitor, Update and Configuration Management Impacted Versions: 1.8 1.8.11 1.12 1.12.17 1.13.27 1.13.33                                                                                                                                  | Azure Monitor, Update and Configuration Management 1.14.02              | New extension version is available via the Azure Stack Hub marketplace. Manually update using instructions [here](https://docs.microsoft.com/en-us/azure-stack/operator/marketplace-update-items?view=azs-2102)                                                                                                                                                                         |
| [Azure Stack Hub](https://docs.microsoft.com/en-us/azure-stack/operator/azure-stack-overview?view=azs-2102)                                                                                                                                                                                         | On Premises                  | Local Elevation of Privilege       | Microsoft Azure Diagnostic Extension for Linux Virtual Machines Impacted Versions: 3.0.111 3.0.121                                                                                                                                             | Microsoft Azure Diagnostic Extension for Linux Virtual Machines 3.1.135 | New extension version is available via the Azure Stack Hub marketplace. Manually update using instructions [here](https://docs.microsoft.com/en-us/azure-stack/operator/marketplace-update-items?view=azs-2102)                                                                                                                                                                         |
| [Azure HDInsight](https://docs.microsoft.com/azure/hdinsight/hdinsight-overview)                                                                                                                                                                                                                    | Cloud                        | Local Elevation of Privilege       | Customers with HDInsight clusters running Ubuntu 16.0.4 **OR** customers that have enabled Azure Monitor for HDInsight cluster integration are susceptible to the Elevation of Privilege vulnerabilities OMI framework version 1.6.8.0 or less | OMI framework v1.6.8-1                                                  | Automatic updates have been completed. Where customer configuration prevented updates, customers must apply the updates by running the following [script](https://hdiconfigactions.blob.core.windows.net/patch-omi/patch-omi.sh) on [every cluster node](https://docs.microsoft.com/en-us/azure/hdinsight/hdinsight-hadoop-customize-cluster-linux#script-action-to-a-running-cluster). |

<!-- /wp:table -->

<!-- wp:paragraph -->

**Please use the scroll bar to view the full table.**

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

**Note 1**: Container Monitoring Solution Docker images with SHA ID different than sha256:12b7682d8f9a2f67752bf121029e315abcae89bc0c34a0e05f07baec72280707

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

**Note 2**: Fixed version in SHA ID: sha256:12b7682d8f9a2f67752bf121029e315abcae89bc0c34a0e05f07baec72280707

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

**Revision History:**  
Revision 1.0 September 16, 2021: Information published.  
Revision 1.1 September 17, 2021: Updated affected software, clarified how customers can determine which VMs are impacted by these vulnerabilities and clarified what customers can do to protect against these vulnerabilities.  
Revision 1.2 September 18, 2021: Added detection guidance.  
Revision 1.3 September 19, 2021: Updated release date for the Azure Monitor, Update and Configuration Management Azure Stack Hub extension  
Revision 1.4 September 20, 2021: Updated version number of Azure Diagnostics (LAD) and added information for new updates available for Azure Stack Hub.  
Revision 1.5 September 21, 2021: Removed the first bullet in the **How can I determine which VMS are impacted by these vulnerabilities?** section.  
Revision 1.6 September 22, 2021: Updated affected software table including HDInsight, Azure StackHub, and the date automatic updates will be enabled.  
Revision 1.7 September 24, 2021: Announced the release of several updates and deployments for Azure Automation State Configuration, DSC Extension, Log Analytics Agent, Azure Automation Update Management, Azure Automation, Azure Security Center, Azure Sentinel and Azure Stack Hub.  
Revision 1.8 September 30, 2021: Updated to reflect completion of Microsoft auto-update processes.  
Revision 1.0 October 5, 2021: Updated the version number for Azure Monitor, Update and Configuration Management to 1.14.02 for Azure Stack Hub (On-premises)

<!-- /wp:paragraph -->
