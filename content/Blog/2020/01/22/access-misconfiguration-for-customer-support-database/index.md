---
title: 'Access Misconfiguration for Customer Support Database'
description: ""
published: 2020-01-22
type: posts
redirect_from:
            - https://msrc-blog.microsoft.com/2020/01/22/access-misconfiguration-for-customer-support-database/
authors:
- simon.pope
categories:
- MSRC
tags:
- Misconfiguration
- Privacy
---
Today, we concluded an investigation into a misconfiguration of an internal customer support database used for Microsoft support case analytics. While the investigation found no malicious use, and although most customers did not have personally identifiable information exposed, we want to be transparent about this incident with all customers and reassure them that we are taking it very seriously and holding ourselves accountable.

Our investigation has determined that a change made to the database’s [network security group](https://docs.microsoft.com/en-us/azure/virtual-network/security-overview) on December 5, 2019 contained misconfigured [security rules](https://docs.microsoft.com/en-us/azure/virtual-network/security-overview#security-rules) that enabled exposure of the data. Upon notification of the issue, engineers remediated the configuration on December 31, 2019 to restrict the database and prevent unauthorized access. This issue was specific to an internal database used for support case analytics and does not represent an exposure of our commercial cloud services.

As part of Microsoft’s standard operating procedures, data stored in the support case analytics database is redacted using automated tools to remove personal information. Our investigation confirmed that the vast majority of records were cleared of personal information in accordance with our standard practices. In some scenarios, the data may have remained unredacted if it met specific conditions. An example of this occurs if the information is in a non-standard format, such as an email address separated with spaces instead of written in a standard format (for example, “XYZ @contoso com” vs “XYZ@contoso.com”). We have begun notifications to customers whose data was present in this redacted database.

We are committed to the privacy and security of our customers and are taking action to prevent future occurrences of this issue. These actions include:

- Auditing the established network security rules for internal resources.
- Expanding the scope of the mechanisms that detect security rule misconfigurations.
- Adding additional alerting to service teams when security rule misconfigurations are detected.
- Implementing additional redaction automation.

Misconfigurations are unfortunately a common error across the industry. We have solutions to help prevent this kind of mistake, but unfortunately, they were not enabled for this database. As we’ve learned, it is good to periodically review your own configurations and ensure you are taking advantage of all protections available.

This documentation is included as general guidance and is not all inclusive or a single source of truth for how to configure your environment.

- [Governing your Azure Workloads](https://azure.microsoft.com/en-us/resources/governing-your-azure-workloads/)
- [Network Security Groups](https://docs.microsoft.com/en-us/azure/virtual-network/security-overview)
- [Managing Network Security Groups](https://docs.microsoft.com/en-us/azure/virtual-network/manage-network-security-group)
- [Network Security Group Security Rules](https://docs.microsoft.com/en-us/azure/virtual-network/security-overview#security-rules)
- [Enabling logging on Network Security Groups](https://docs.microsoft.com/en-us/azure/virtual-network/virtual-network-nsg-manage-log)

We want to sincerely apologize and reassure our customers that we are taking it seriously and working diligently to learn and take action to prevent any future reoccurrence. We also want to thank the researcher, Bob Diachenko, for working closely with us so that we were able to quickly fix this misconfiguration, investigate the situation, and begin notifying customers as appropriate.

_Ann Johnson, Corporate Vice President - Cybersecurity Solutions Group_  
_Eric Doerr, General Manager - Microsoft Security Response Center_
