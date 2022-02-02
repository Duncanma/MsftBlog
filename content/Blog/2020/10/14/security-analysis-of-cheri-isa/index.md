---
title: 'Security Analysis of CHERI ISA'
description: ""
published: 2020-10-14
type: posts
redirect_from:
            - https://msrc-blog.microsoft.com/2020/10/14/security-analysis-of-cheri-isa/
authors:
- simon.pope
categories:
- Security Research & Defense
tags:
- Memory Corruption
- Memory Safety
- Secure Development
- Security Research
---
Is it possible to get to a state where memory safety issues would be deterministically mitigated? Our quest to mitigate memory corruption vulnerabilities led us to examine [CHERI](https://www.cl.cam.ac.uk/research/security/ctsrd/cheri/) (Capability Hardware Enhanced RISC Instructions), which provides memory protection features against many exploited vulnerabilities, or in other words, an architectural solution that breaks exploits. We’ve looked at how CHERI would break class-specific categories of vulnerabilities and considered additional mitigations to put in place to get to a comprehensive solution. We’ve assessed the theoretical impact of CHERI on all the memory safety vulnerabilities we received in 2019, and concluded that in its current state, and combined with other mitigations, it would have deterministically mitigated at least two thirds of all those issues.

We’ve reviewed revision 7 and used [CheriBSD](https://github.com/CTSRD-CHERI/cheribsd/) running under QEMU as a test environment. In this research, we’ve also looked for weaknesses in the model and ended up developing exploits for various security issues using CheriBSD and qtwebkit. We've highlighted several areas that warrant improvements, such as vulnerability classes that CHERI doesn’t mitigate at the architectural level, the importance of using reliable and CHERI compliant memory management mechanisms, and multiple exploitation primitives that would still allow memory corruption issues to be exploited. While CHERI does a fantastic job at breaking spatial safety issues, more is needed to tackle temporal and type safety issues.

Your feedback is extremely important to us as there’s certainly much more to discover and mitigate. We’re looking forward to your comments on [our paper](https://github.com/microsoft/MSRC-Security-Research/blob/master/papers/2020/Security%20analysis%20of%20CHERI%20ISA.pdf).

_Nicolas Joly, Saif ElSherei, Saar Amar – Microsoft Security Response Center (MSRC)_

---
