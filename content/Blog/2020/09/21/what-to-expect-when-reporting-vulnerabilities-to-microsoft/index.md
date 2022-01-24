---
title: 'What to Expect When Reporting Vulnerabilities to Microsoft'
description: ""
published: 2020-09-21
type: posts
redirect_from:
            - https://msrc-blog.microsoft.com/2020/09/21/what-to-expect-when-reporting-vulnerabilities-to-microsoft/
authors:
- simon.pope
categories:
- MSRC
tags:
- Community-based Defense
- Coordinated Vulnerability Disclosure
- MSRC
- Security Research
- Security Researcher
hero: ../../../defaultHero.jpg
---
<!-- wp:paragraph -->

At the Microsoft Security Response Center’s (MSRC), our primary mission is to help protect our customers. One of the ways we do this is by working with security researchers to discover security vulnerabilities in our services and products, and then making sure those that pose a threat to customers get fixed. Many researchers report these types of issues to many different companies, and how these companies manage their process for receiving, assessing, and fixing these can vary considerably. So, we would like to let you know what you can do to help speed your submission through our process when reporting security vulnerabilities to Microsoft, and what to expect afterwards.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Before you submit you should check whether the issue you’re reporting meets the [definition of a security vulnerability](https://www.microsoft.com/msrc/definition-of-a-security-vulnerability). Once you are confident that it meets this definition, go to our [Researcher Portal](https://msrc.microsoft.com/create-report) and log in to report it. If you don’t yet have an account, you will have the option of creating one at that time.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Using our portal provides the best experience and usually results in faster case management. It provides a secure and guided way to provide the necessary information for us so we can reproduce and fix the vulnerability. The portal will also guide you in working out what additional information you will need to [write a high-quality report](https://www.microsoft.com/msrc/bounty-example-report-submission). High-quality reports will help your researcher reputation score, and if your report qualifies for one of our [bounty program rewards](https://www.microsoft.com/msrc/bounty), you also may receive a higher reward amount too.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

You should also create a separate submission for each different security vulnerability. This will help move your submission faster through the process.

<!-- /wp:paragraph -->

<!-- wp:paragraph {"fontSize":"normal"} -->

**Here's what you can expect to happen after you submit a vulnerability:**

<!-- /wp:paragraph -->

<!-- wp:group -->

<!-- wp:paragraph -->

**Triage:** Our team will check that your report is a [security vulnerability](https://www.microsoft.com/msrc/definition-of-a-security-vulnerability) and will assign it to the relevant product engineering team. This typically takes two business days. If you opted-in for automatic communications, you will receive a message from our triage team when the case is either closed as non-serviceable or will need further evaluation. During this process, your submission will be labeled as “New” in the portal.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

**Case Assignment:** If your report is a security vulnerability _and_ it meets our servicing criteria it will be assigned a case number. A case manager will oversee its assessment and the creation of a plan to address the vulnerability. Case assignment is automatic when triage is complete.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

**Review/Reproduce: **Assuming we are able to reproduce your issue, we will evaluate the severity and impact, and send it to our product engineers for further action. The case state in the portal will switch to “Review/Repro” and you will receive an email to confirm the state change. This process can take some time, depending on the complexity of the issue and the completeness of your submission. You will receive an email when your case moves to the development stage, and this can take up to one or two weeks, sometimes less and occasionally more. If you do not hear back from us within two weeks, please check your junk folder before reaching out to us. During this time, we may reach out to you for additional information.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

**Developing a fix:** If we were able to reproduce your reported issue and determine that it is something that should be addressed through immediate servicing, the product engineering team will take the appropriate action. Reports in this state have the “Develop” state in the Researcher Portal. This stage typically takes the longest of any while we prepare a fix and coordinate with our release teams. Our case managers are in regular contact with our developers during this stage and will update you if there are unusual delays. However, updates will generally be less frequent during the this stage. If you are concerned or have a question about disclosure during this time, you should reach out to the assigned case manager. Cases that do not warrant immediate servicing will be considered when the engineering team is developing the next or other future releases of the software.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

**Also **during the Develop stage, the Bounty team will review your submission for award eligibility. If your submission qualifies for a Bounty Award, you will receive an email notifying you of the good news! If this is your first award from Microsoft Bounty Programs, you will need to set up an account with one of our payment providers to receive your award. We will send instructions on how to do this in the bounty award email. Please see the [Microsoft Bounty Program FAQs](https://www.microsoft.com/msrc/faqs-bounty) for more information.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

**Release Process:** Cases in the “Release” state are in _preparation_ for release. Sometimes this means they are awaiting official publication as part of our _Update Tuesday_ release, or other service update.**\_\_**

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

**Complete:** After the case has been fixed, its state will show as “Complete” in the portal. Congratulations! You will now be free to discuss your findings publicly if that’s what you want to do. We will also give you credit for your work (unless you told us otherwise) on our [Researcher Acknowledgements](https://portal.msrc.microsoft.com/security-guidance/acknowledgments) page.

<!-- /wp:paragraph -->

<!-- /wp:group -->

<!-- wp:paragraph -->

Hopefully, this blog post will have helped you understand how to speed your submission through our process, how to maximize your researcher reputation score and any applicable bounty rewards, given you some insight as to how our process works, and what to expect from us while we triage, reproduce, develop, and release any fix. If you have additional questions, please visit our [Frequently Asked Questions (FAQ)](https://www.microsoft.com/msrc/faqs-report-an-issue) page.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

_Microsoft Security Response Center (MSRC)_

<!-- /wp:paragraph -->

<!-- wp:separator -->

---

<!-- /wp:separator -->

<!-- wp:paragraph -->

<!-- /wp:paragraph -->
