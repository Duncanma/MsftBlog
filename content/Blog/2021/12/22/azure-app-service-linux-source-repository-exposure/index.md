---
title: 'Azure App Service Linux source repository exposure'
description: ""
published: 2021-12-22
type: posts
redirect_from:
            - https://msrc-blog.microsoft.com/2021/12/22/azure-app-service-linux-source-repository-exposure/
author: msrc
categories:
- MSRC
hero: ../../../defaultHero.jpg
---
<!-- wp:paragraph -->

MSRC was informed by Wiz.io, a cloud security vendor, under [Coordinated Vulnerability Disclosure (CVD)](https://www.microsoft.com/en-us/msrc/cvd) of an issue where customers can unintentionally configure the .git folder to be created in the content root, which would put them at risk for information disclosure. This, when combined with an application configured to serve static content, makes it possible for others to download files not intended to be public. We have notified the limited subset of customers that we believe are at risk due to this and we will continue to work with our customers on securing their applications.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Customer Impact:

<!-- /wp:heading -->

<!-- wp:list -->

- App Service Linux customers who deployed applications using Local Git after files were created or modified in the content root directory are impacted. This happens because the system attempts to preserve the currently deployed files as part of repository contents, and activates what is referred to as [in-place deployments](https://www.microsoft.com/en-us/msrc/cvd) by [deployment engine (Kudu)](https://github.com/projectkudu/kudu/wiki/).

- PHP, Node, Python, Ruby and Java applications coded to serve static content:

  - PHP: The images used for PHP runtime were configured to serve all static content in the content root folder. After this issue was brought to our attention, we updated all PHP images to disallow serving the .git folder as static content as a defense in depth measure.
  - Node, Python, Java, and Ruby: For these languages since the application code controls whether it serves static content, we recommend customers review the code to make sure that only the relevant code is served out.

<!-- /wp:list -->

<!-- wp:paragraph -->

Not all users of Local Git were impacted. Customers who deployed code to App Service Linux via Local Git after files were already created in the application were the only impacted customers.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

**Azure App Service Windows is not impacted, as it runs in an IIS based environment.**

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### Microsoft’s Response:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Microsoft took the following steps after this issue was brought to our attention:

<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->

1. We updated all PHP images to disallow serving the .git folder as static content as a defense in depth measure.
2. Notified customers who were impacted due to the activation of in-place deployment with specific guidance on how to mitigate the issue. We also notified customers who had the .git folder uploaded to the content directory.
3. Updated our [Security Recommendations document](https://docs.microsoft.com/en-us/azure/app-service/security-recommendations#data-protection) with an additional section on securing source code. We also updated the documentation for [in-place deployments](https://github.com/projectkudu/kudu/wiki/Deploying-inplace-and-without-repository#inplace-deployment).

<!-- /wp:list -->

<!-- wp:heading {"level":3} -->

### Technical details:

<!-- /wp:heading -->

<!-- wp:paragraph -->

Some web applications are coded to serve all files in the content folder as static content. If the .git folder (which contains the state and history of the source control repository) is also in the content folder in these applications, others are then able to download the files via requests to the web app.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

The cases where the .git folder can be in the content folder are:

<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->

1. Application code deployed via Local Git [_**after**_ ](https://github.com/projectkudu/kudu/wiki/Deploying-inplace-and-without-repository#inplace-deployment)files were created or modified in the content root outside of Git.
2. Explicit configuration to enable in-place deployments via SCM_REPOSITORY_PATH. This is an advanced user operation.
3. When the .git folder is included with application code during non-GIT deployments to App Service.

<!-- /wp:list -->

<!-- wp:paragraph -->

The combination of the .git folder in content folder along with the application which serves out static content makes the app susceptible to source code exposure.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Wiz.io has posted a blog about this issue [available here](https://www.wiz.io/blog/azure-app-service-source-code-leak). We would like to thank Wiz.io who found this issue and worked closely with Microsoft to help secure our customers.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

The MSRC Team

<!-- /wp:paragraph -->
