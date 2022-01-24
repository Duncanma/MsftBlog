---
title: 'Why Rust for safe systems programming'
description: ""
published: 2019-07-22
type: posts
redirect_from:
            - https://msrc-blog.microsoft.com/2019/07/22/why-rust-for-safe-systems-programming/
author: Sebastian.Fernandez
categories:
- Memory Safety
- Rust
- Safe Systems Programming Languages
- Secure Development
- Security Research &amp; Defense
hero: ../../../defaultHero.jpg
---
<!-- wp:paragraph -->

In [this series](https://msrc-blog.microsoft.com/tag/rust/), we have explored the need for proactive measures to eliminate a class of vulnerabilities and walked through some examples of memory safety issues we’ve found in Microsoft code that could have been avoided with a different language. Now we’ll peek at why we think that [Rust](https://rust-lang.org/) represents the best alternative to C and C++ currently available.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

First, there are plenty of fantastic memory safe languages already available and widely used inside and outside of Microsoft, including .NET languages like C# or F# and other languages like Swift, Go, and Python. We encourage anyone who is currently using C or C++ to consider whether one of these languages would be appropriate to use instead. We, however, are talking about the need for a safe _systems_ programming language (i.e., a language that can build systems other software runs on, like OS kernels). Such workloads need the speed and predictable performance that C, C++, and Rust provide. Languages which achieve memory safety through garbage collection are not ideal choices for systems programming because their runtimes can lead to unpredictable performance and unnecessary overhead.

<!-- /wp:paragraph -->

<!-- wp:heading -->

## Performance and control

<!-- /wp:heading -->

<!-- wp:paragraph -->

When thinking about why Rust is a good alternative, it’s good to think about what we can’t afford to give up by switching from C or C++ -- namely performance and control. Rust, just like C and C++ has a minimal and optional “runtime”. Rust’s standard library depends on libc for platforms that support it just like C and C++, but the standard library is also optional so running on platforms without an operating system is also possible.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Rust, just like C and C++, also gives the programmer fine-grained control on when and how much memory is allocated allowing the programmer to have a very good idea of exactly how the program will perform every time it is run. What this means for performance in terms of raw speed, control, and predictability, is that Rust, C, and C++ can be thought of in similar terms.

<!-- /wp:paragraph -->

<!-- wp:heading -->

## Safety

<!-- /wp:heading -->

<!-- wp:paragraph -->

What separates Rust from C and C++ is its strong safety guarantees. Unless explicitly opted-out of through usage of the “unsafe” keyword, Rust is completely memory safe, meaning that the issues we illustrated in the [previous post](https://msrc-blog.microsoft.com/2019/07/18/we-need-a-safer-systems-programming-language/) are impossible to express. In a future post, we’ll revisit those examples to see how Rust prevents those issues usually without adding any runtime overhead. As [we’ve seen](https://msrc-blog.microsoft.com/2019/07/18/we-need-a-safer-systems-programming-language/), roughly 70% of the security issues that the MSRC assigns a CVE to are memory safety issues. This means that if that software had been written in Rust, 70% of these security issues would most likely have been eliminated. And we’re not the only company to [have reported such findings](https://hacks.mozilla.org/2019/02/rewriting-a-browser-component-in-rust/).

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

In systems programming, sometimes the programmer must perform operations that cannot be statically verified as safe. Rust gives the programmer the tools to wrap these operations in safe abstractions, meaning that what was once relegated to code comments or convention can be statically enforced by the Rust compiler. Furthermore, the memory-unsafe operations must be explicitly marked as such, dramatically reducing the surface area security professionals must scrutinize for memory safety vulnerabilities.

<!-- /wp:paragraph -->

<!-- wp:heading -->

## It’s not just performance and safety

<!-- /wp:heading -->

<!-- wp:paragraph -->

While Rust initially piqued the interest of the MSRC due to the reasons above, other teams at Microsoft have started adopting Rust for other reasons.

<!-- /wp:paragraph -->

<!-- wp:list -->

- According to an internal survey, the top reason for adoption was “correctness” – an extension of Rust’s safety guarantees that work towards making true the adage “if it compiles, then it works”.
- Rust statically enforces many properties of a program beyond memory safety, including null pointer safety and data race safety (i.e., no unsynchronized access of a piece of memory from two or more threads).
- Many teams at Microsoft have found that Rust’s rich type system makes writing expressive programs possible. Concepts like enums with associated data and a powerful trait system further enforce Rust’s goal of making programs as bug-free as possible.
- Rust’s existing community is a huge benefit to the language. Much of the power of a language comes from outside of its core through libraries, tooling, and learning materials. While Rust is still a young language, it boasts a healthy ecosystem with an active and open compiler and language development process, and it shows the ability to both promote a strong open source community and to support production users. This gives us more reason to believe the language has a bright future ahead of it.

<!-- /wp:list -->

<!-- wp:paragraph -->

All of this explains Rust’s track record of having topped [Stack Overflow’s list of most loved languages](https://insights.stackoverflow.com/survey/2018/#technology-_-most-loved-dreaded-and-wanted-languages) for the past four years. While it’s too early to say what Rust adoption looks like at a scale as large as Microsoft’s engineering organization, early adoption of Rust has generally been very positive.

<!-- /wp:paragraph -->

<!-- wp:heading -->

## A bright future

<!-- /wp:heading -->

<!-- wp:paragraph -->

We believe Rust changes the game when it comes to writing safe systems software. Rust provides the performance and control needed to write low-level systems, while empowering software developers to write robust, secure programs.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

While researching Rust, we found some issues that gave and continue to give us pause. Some of these concerns include how to regulate the usage of the “unsafe” superset of Rust at scale, lack of first-class interoperability with C++, and interoperability with existing Microsoft tooling. We’ll be blogging about many of these in the future as they do pose challenges for adoption at the scale of Microsoft, and we want to involve the Rust and wider software communities in helping us find solutions that work for everyone.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

But we’re excited about the possibilities. While there are many questions still left to figure out about how Rust fits into the overall Microsoft engineering story, we encourage others to join us in taking a serious look at the language for their systems programming needs.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

_Ryan Levick, Principal Cloud Developer Advocate_

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Related posts:

<!-- /wp:paragraph -->

<!-- wp:list -->

- [A proactive approach to more secure code](https://msrc-blog.microsoft.com/2019/07/16/a-proactive-approach-to-more-secure-code/)
- [We need a safer systems programming language](https://msrc-blog.microsoft.com/2019/07/18/we-need-a-safer-systems-programming-language/)

<!-- /wp:list -->
