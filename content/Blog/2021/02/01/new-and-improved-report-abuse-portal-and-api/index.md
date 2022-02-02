---
title: 'New and Improved Report Abuse Portal and API!'
description: ""
published: 2021-02-01
type: posts
redirect_from:
            - https://msrc-blog.microsoft.com/2021/02/01/new-and-improved-report-abuse-portal-and-api/
authors:
- simon.pope
categories:
- MSRC
tags:
- CARS
- CERT
- Microsoft Online Services
- Report Abuse
- Report Abuse API
- Report Abuse Portal
hero: /blog/2021/02/01/new-and-improved-report-abuse-portal-and-api/img/wp-content-uploads-2021-01-image.png
---
The [**Report Abuse (CERT) Portal**](https://msrc.microsoft.com/report/abuse) and [**Report Abuse API**](https://msrc.microsoft.com/report/developer) have played a significant role in MSRC’s response to suspected cyberattacks, privacy issues, and abuse originating from Microsoft Online Services. With the contributions from our wonderful community of reporters, we continue to gain insightful perspectives into the various types of attacks that threaten our online services, our cloud, and our customers.

To further commit to MSRC’s mission of responding to and defending against these types of security incidents, our team has been working on some new changes to both the Report Abuse Portal and the Report Abuse API that we are very excited to share with you.

Check it out at [**https://msrc.microsoft.com/report/abuse**](https://msrc.microsoft.com/report/abuse).

### Summary

We have updated our Report Abuse Portal and API to include more granular and up-to-date reportable security incidents, empowering our community to provide more accurate and relevant insights.

**Report Abuse Portal updates:**

- Modernized user interface and user experience
- New fields like _Incident Type_ and _Attack Method_ capturing the type of security incident and the sub-context of the incident
- Refined list of reportable security incidents
- Removed Traffic Light Protocol

**Report Abuse API updates:**

- Updated Report Abuse API endpoint
- New API developer page
- Updated API data schema
- New properties like _incidentType_ and _attackMethod_
- Refined list of reportable security incidents
- Validation providing responses to any formatting issues or incorrect entries

### What do I need to do?

Whether you engage with MSRC via our Report Abuse Portal or API, please review and familiarize yourself with the refined [list of reportable security incidents](https://msrc.microsoft.com/report/developer), as it is vital that both MSRC and our reporting community are aligned.

If you engage with MSRC via the Report Abuse Portal, please ensure that you take the necessary steps to update your reporting processes and procedures, to align with the updated Portal.

If you engage with MSRC programmatically via the Report Abuse API, please review the detailed changes in the "What’s new with the API?” section below. Upon review, please ensure you make any necessary updates in your code and processes, to align with the new API.

If you _do not_ report abuse or engage with MSRC via the Report Abuse API, there is no action to be taken.

### What's new with the Portal?

While much of the Report Abuse Portal remains the same, we have revamped the form’s user interface to provide a more modernized look and feel when reporting.

On the first look of the Report Abuse Portal, you will notice the completely updated user interface:

![The first view that a reporter is presented with of the new Report Abuse Portal.](./img/wp-content-uploads-2021-01-image.png)

Within the navigation bar, there is a tab for “MSRC Portal” which will redirect you back to the [MSRC website](https://www.microsoft.com/msrc); a “Report Abuse” tab directing to the current form; and the “Abuse API” which redirects to our documentation and data schema for the new Report Abuse API, as mentioned in the following section.

From there, we have our informational and instructional content that should be read prior to reporting to ensure that you are reporting in the correct place and using the correct form.

The “Contact Information” section is the first step when reporting abuse – this includes all the same fields that you know from our current Report Abuse Portal.

![The Contact Information section of the report.](./img/wp-content-uploads-2021-01-image-1.png)

We then have an updated “Report Details” section:

![The updated "Report Details" section of the report, showing new fields and values.](./img/wp-content-uploads-2021-01-image-2.png)

This includes new choice options for “Threat Type” and a new “Incident Type” field with a list of up-to-date, reportable security incidents. Each Threat Type has its own list of Incident Types. For example, if URL is chosen as the Threat Type, your options for Incident Type are:

![A dropdown within the "Report Details" section showing the available URL Incident Types.](./img/wp-content-uploads-2021-01-image-3.png)

Similarly, if “IP Address” is chosen as the Threat Type, some of the available Incident Type options will be:

![A dropdown within the "Report Details" section showing the available IP Address Incident Types.](./img/wp-content-uploads-2021-01-image-4.png)

Once a Threat Type and Incident Type have been chosen, a new field may be added to the form called “Attack Method”\_. \_Options for Attack Method are dependent on the Threat Type and Incident Type chosen. Attack Methods allow the reporter to provide sub-context into the threat being reported.

For example, if reporting an “Account Compromise/Unauthorized Access” incident, the available options for an Attack Method will be:

![The new Attack Method drop down allowing a reporter to provide the sub-context of the report.](./img/wp-content-uploads-2021-01-image-5.png)

However, not all Incident Types will have an Attack Method. To familiarize yourself with our list of Incident Types, their definitions, and their valid Attack Methods, please review our [Incident Type Documentation](https://msrc.microsoft.com/report/developer).

The remainder of the “Report Details” section maintains much of the same fields in our current Report Abuse Portal, like: date and time fields; malicious IP Address or URL fields; additional and optional fields; a free text field to include additional information into the incident; and a file attachment.

![The remainder of the "Report Details" section, which remains largely the same as the old Report Abuse Portal.](./img/wp-content-uploads-2021-01-image-6.png)

The goal of the new Report Abuse Portal shown above is to provide a more modernized reporting experience while encouraging even greater insights, and we cannot wait to share this with the community.

> You can view the new Report Abuse Portal at <https://msrc.microsoft.com/report/abuse>

### What's new with the API?

To ensure a consistent MSRC reporting experience, we have also extended much of the reporting changes shown above, in the Portal, to the API. If you engage with MSRC via our Report Abuse API, please review the updates below:

**Updated Data Schema**

While much of the logic and schema of the API remains the same, we did introduce new properties like _incidentType \_and \_attackMethod_, as well as a refined list of valid values. Please review our [API documentation](https://msrc.microsoft.com/report/developer) for the new property names, data types, requirements, and property descriptions.

**Threat Type, Incident Type, and Attack Methods**

Similar to the changes made in the Report Abuse Portal, and to simplify terminology, the new values that are valid for threatType are “IP Address” and “URL”.

Additionally, the new _incidentType_ and \_attackMethod \_properties are also available in the API; allowing for more granular, accurate abuse reports.

Given these updates, it is important to align yourself with the types of security incidents that are reportable through the API, what their attack methods are, and whether they are URL or IP Address based. Please review our [API documentation](https://msrc.microsoft.com/report/developer/) for the definitions and refined list of valid values.

**Developer Page**

As mentioned above, the navigation bar of the Report Abuse Portal includes a tab for the “Abuse API”. Upon clicking, you will be redirected to the API Developer Page, visualizing the new updates to the API.

![The new Developer Page the API spec, data schema, and Incident Type descriptions.](./img/wp-content-uploads-2021-01-image-7-1024x614.png)

In the “Abuse Reporting API” dropdown, you will find the request body type, responses, and examples.

In the “Schemas” dropdown, you will find the property keys, data types, requirements, and property descriptions.

Lastly, you will see a table of "Reportable Incident Types", their descriptions, and their URL or IP Address based Attack Methods.

> You can view the Developer Page at: <https://msrc.microsoft.com/report/developer>

**API Validation Responses**

With the introduction of new properties and values, the Report Abuse API needs to ensure that the reports being sent meet any necessary requirements, logic, or formatting. To support this, the API has validation in place and will provide a verbose response upon any needed modifications to the JSON POST request body. Please review the "Examples" section below, for more information.

**Examples**

Below are some examples of various reports and the resulting API response:

Example 1: A Social Engineering incident regarding a Phishing email, originating from an IP Address, is reported.

![An API example resulting in a successful response.](./img/wp-content-uploads-2021-01-image-8.png)

Since this submission contained the required data points (and was set to test), the API will respond with:

![](./img/wp-content-uploads-2021-01-image-10.png)

Example 2: A Social Engineering incident from a Phishing website, originating from an IP Address, is reported.

![An API example resulting in an unsuccessful response due to an invalid value.](./img/wp-content-uploads-2021-01-image-11.png)

Since a non-valid URL _attackMethod_ (Phishing Website) was reported under IP Address , the API will respond with:

![](./img/wp-content-uploads-2021-01-image-12.png)

Example 3: An Account Compromise, originating from an IP Address, is reported.

![An API example resulting in an unsuccessful response due to an incorrectly formatted value.](./img/wp-content-uploads-2021-01-image-13.png)

Given the incorrect date format, the API responds with:

![](./img/wp-content-uploads-2021-01-image-14.png)

These are are just some scenarios that our API validation covers. There is additional validation and messaging for incorrect _sourceIp_ or _sourceUrl_ formatting, empty _reporterName_, incorrect _reporterEmail_ formatting, and more. To test these different scenarios when interacting with our API, it is recommended that you set _testSubmission_ to `true`.

**Report Abuse API Endpoint**

> The API can now be reached at <https://api.msrc.microsoft.com/report/v2.0/abuse>

### What's next?

As of today, the all new [Report Abuse Portal](https://msrc.microsoft.com/report/abuse) and the updated [Report Abuse API](https://msrc.microsoft.com/report/developer) are now live!

While the new API aims to provide significant impact to MSRC’s security response, we wanted to minimize the effort needed to adopt it. We will continue to support the old version of the Report Abuse API until March 1st, 2021, allowing our developer community to make the necessary changes needed to adapt to the updated API.

We hope these exciting, new changes not only improve the quality of MSRC’s security response but also empower our community of reporters to continue sharing their insights into the ongoing and emerging threats across the cloud.

### Questions or Feedback?

For questions or feedback, please either contact us at [msrc_eng_support@microsoft.com](mailto:msrc_eng_support@microsoft.com) or share your thoughts at <https://aka.ms/msrc-report-abuse-feedback>.

_Justin Powell, Program Manager, Microsoft Security Response Center_
