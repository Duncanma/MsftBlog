---
title: 'The Safety Boat: Kubernetes and Rust'
description: ""
published: 2020-04-29
type: posts
redirect_from:
            - https://msrc-blog.microsoft.com/2020/04/29/the-safety-boat-kubernetes-and-rust/
authors:
- Sebastian.Fernandez
categories:
- Security Research & Defense
tags:
- Memory Safety
- Rust
- Safe Systems Programming Languages
- Secure Development
hero: ../../../defaultHero.jpg
---
<!-- wp:paragraph -->

Our team, [DeisLabs](https://deislabs.io/), recently released a new piece of software called [Krustlet](https://deislabs.io/posts/introducing-krustlet/), which is a tool for running [WebAssembly](https://webassembly.org/) modules on the popular, open-source container management tool called [Kubernetes](https://kubernetes.io/). Kubernetes is used quite extensively to run cloud software across many vendors and companies and is primarily written in the [Go](https://golang.org/) programming language. While there have been many stories about using Rust for systems level programming, you don’t often hear stories about cloud software _or_ Kubernetes software being written in Rust. So, we wanted to explain why we made the choice we did.

<!-- /wp:paragraph -->

<!-- wp:heading -->

## WASM anybody?

<!-- /wp:heading -->

<!-- wp:paragraph -->

First off, let’s start with some important context. WebAssembly (abbreviated as WASM) was originally designed to be run in browsers. WASM is a compiled binary that can be downloaded and run in any browser. This allows for performant applications to be run inside of a browser and is currently used in many major web applications. Recent work has enabled compiled WASM binaries (called modules) to be run on any system. Rust is one of the few languages with native build support for these binaries. Because of this, many of the projects that run WASM modules are also written in Rust, which allows us to embed them in our project. This was one of the primary motivators for us choosing Rust.

<!-- /wp:paragraph -->

<!-- wp:heading -->

## Safety and Security

<!-- /wp:heading -->

<!-- wp:paragraph -->

The other reason we chose Rust was its strong safety and security guarantees. Like most Rust newbies, we started off cursing Rust's borrow checker (which statically enforces many of Rust's safety guarantees) and sometimes fighting with it for hours. But after we started to get a better understanding of how to code things, we realized how many bugs and problems the compiler was saving us from. It kept us from exposing possible null pointers, thread safety issues, and other overlooked bugs. The whole learning process took us roughly a month. For the first week or so, we lost much of our time to learning how borrows worked. After about 2 weeks, we were back up to 50% efficiency compared to us writing in Go. After a month, we all were comfortable enough that we were back up to full efficiency (in terms of how much code we could write). However, we noticed that we gained productivity in the sense that we didn’t spend as much time manually checking specific conditions, like null pointers, or not having to debug as many problems (I’ll cover that some more below). Occasionally, we run into a more complex case that takes us longer to figure out than it would with other languages. However, this occurs with diminishing frequency as time goes on and we continue to gain experience.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

A concrete example of this is how the Rust compiler protected us from various concurrency bugs. Krustlet is responsible for running arbitrary numbers of WASM modules in parallel. As we wrote the code for managing the running modules, the borrow checker caught cases of us passing a data structure between threads that would have resulted in unsafe or concurrent data access problems. It also prevented us from using objects that could have already been accessed by previous parts of the code.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Even though we sometimes miss having a garbage collector so we don’t have to worry about cloning, borrowing, ownership, etc., the pain we have avoided because of the Rust compiler’s strict rules is incalculable. For comparison, last week [we caught a significant race condition](https://github.com/helm/helm/pull/7820) in another Kubernetes-related project we maintain called [Helm](https://helm.sh/) (written in Go) that has been there for a year or more, and which passed the race checker for Go. That error would never have escaped the Rust compiler, preventing the bug from ever existing in the first place.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Because of the large amount of customization (at least in Kubernetes) with custom data types and the distributed nature of cloud computing, having these protections and safety guarantees at the compiler level gives us great confidence in the code we are writing. By no means does it eliminate all bugs, but it does help us avoid many of the common concurrency ones from the beginning. In addition, having a strong type system that still allows for extensibility (in the form of [traits](https://doc.rust-lang.org/1.41.0/book/ch10-02-traits.html), which the Rust docs describe as the ability “to define shared behavior in an abstract way” and bind generic parameters to that behavior) is incredibly useful and flexible for projects that need to handle multiple custom data types in similar ways.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

In short, the flexibility, safety, and security of Rust outweighs any inconvenience of having to follow strict lifetime, borrowing, and other compiler rules or even the lack of a garbage collector. These features are a much-needed addition to cloud software projects and will help avoid many bugs commonly found in them.

<!-- /wp:paragraph -->

<!-- wp:heading -->

## Things to watch out for

<!-- /wp:heading -->

<!-- wp:paragraph -->

Just because we love many things about Rust doesn’t mean everything is rosy. We also learned of a few gotchas that we consider important to point out as you make the decision of whether to use Rust for a new cloud software project.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

One of the biggest ones to point out is that async runtimes are still a bit unclear. There are currently two different options to choose from, each of them with their own tradeoffs and problems. Also, many of the implementation details are tied to specific runtimes, meaning that if you have a dependency that uses one runtime over another, you’ll often be locked into that runtime choice. Rust has made great progress in the past year with its async story, but there are still some issues that are being worked out.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

The other thing to watch out for is the learning curve. It takes several weeks of hard effort learning how to code properly in Rust before the learning curve levels out. However, that hard effort up front pays off in dividends due to the aforementioned safety features. We also noticed that once developers are over that initial curve, they are able to contribute to code just as easily as with any other language. Just be aware that there will be some initial pain.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

If you are willing to deal with these current problems, then there is no reason why you shouldn’t at least consider using Rust for your next project. All languages have their tradeoffs, but we feel the benefits gained outweigh any of these pain points.

<!-- /wp:paragraph -->

<!-- wp:heading -->

## Conclusion

<!-- /wp:heading -->

<!-- wp:paragraph -->

We see a bright future for Rust in cloud software. In the immediate future, we plan on continuing its use for any of our projects where it would be a good fit. Given the features Rust brings to the table, even with its lack of some familiar features (such as garbage collection), we highly recommend it as an option for your next cloud software project.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

_By Taylor Thomas, Sr. Software Engineer at DeisLabs, Azure_

<!-- /wp:paragraph -->
