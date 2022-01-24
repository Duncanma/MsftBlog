---
title: 'Building the Azure IoT Edge Security Daemon in Rust'
description: ""
published: 2019-09-30
type: posts
redirect_from:
            - https://msrc-blog.microsoft.com/2019/09/30/building-the-azure-iot-edge-security-daemon-in-rust/
author: christa
categories:
- Azure
- IoT
- Rust
- Safe Systems Programming Languages
- Security Research &amp; Defense
hero: ../../../defaultHero.jpg
---
<!-- wp:paragraph -->

[Azure IoT Edge](https://github.com/azure/iotedge) is an open source, cross platform software project from the Azure IoT team at Microsoft that seeks to solve the problem of managing distribution of compute to the _edge_ of your on-premise network from the cloud. This post explains some of the rationale behind our choice of Rust as the implementation programming language for the _Security Daemon_ component in the product.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

The [Security Daemon](https://github.com/Azure/iotedge/tree/master/edgelet) bootstraps the Azure IoT Edge runtime. It acts as a communication broker between the Azure IoT Edge runtime and many host services such as the container runtime and hardware-based cryptography devices Hardware Security Modules (HSM) and Trusted Platform Modules (TPM).

<!-- /wp:paragraph -->

<!-- wp:heading -->

## Picking a tech stack for the Security Daemon

<!-- /wp:heading -->

<!-- wp:paragraph -->

When we started work on the Security Daemon (internally referred to as the _edgelet_) we identified the following broad design goals:

<!-- /wp:paragraph -->

<!-- wp:list -->

- The edgelet needs to be a native component that does not require a runtime such as the .NET CLR to execute.
- Since the edgelet will serve as the channel for accessing the HSM/TPM hardware on the device, it needs to be secure.
- The edgelet will communicate with HSM/TPM hardware via a C Application Binary Interface (ABI), so loading shared objects/DLLs and calling C functions should be straightforward.

<!-- /wp:list -->

<!-- wp:paragraph -->

These design goals meant that we would have to pick a programming language such as C or C++ or Rust that compiled to native code. Not wanting to incur the runtime overhead of a garbage collector meant that Go wasn’t a desirable option. The security-related requirements of the daemon meant that we wanted to avoid having to deal with memory and concurrency bugs. As it turned out, Rust perfectly fit the bill for us given these constraints. This [earlier post](https://msrc-blog.microsoft.com/2019/07/22/why-rust-for-safe-systems-programming/) on this blog captures many of the benefits that we came up with when determining Rust was the programming language of choice.

<!-- /wp:paragraph -->

<!-- wp:heading -->

## What worked well

<!-- /wp:heading -->

<!-- wp:paragraph -->

Before we shipped Azure IoT Edge for general availability, we engaged an external security vendor to perform penetration testing on the software. The fact that they discovered zero security issues with the Rust part of the codebase was to us a vindication of our choice of Rust. Right from the start we decided that we would have the compiler treat all warnings as errors including lints checked for by [clippy](https://github.com/rust-lang/rust-clippy). Our continuous integration system would reject pull requests that did not pass a [rustfmt](https://github.com/rust-lang/rustfmt) run which made sure that we had consistent code formatting throughout the codebase.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

The Rust compiler update process and the cargo tooling has worked well for Azure IoT Edge. Upgrading to a new compiler version is almost always a painless exercise.

<!-- /wp:paragraph -->

<!-- wp:heading -->

## Rust adoption

<!-- /wp:heading -->

<!-- wp:paragraph -->

The next step was to ramp up on the language. Compared with other popular programming languages, Rust has a rather steep learning curve and we were apprehensive about the impact this ramp up would have on project timelines. Our team already had developers well versed in C, C++, C# and Java. Luckily for us, we also had a couple of developers who were very passionate about Rust! We came up with hands-on Rust workshops where we walked the team through the parts of the language that in our experience have been somewhat hard to gain an intuition for. This time investment proved to be quite useful. We discovered that learning the language in the end proved to not be as much of a problem as we had imagined.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

In a matter of 4-6 weeks, we found that nearly every single member in the team had made non-trivial contributions to the Rust part of the codebase.

<!-- /wp:paragraph -->

<!-- wp:heading -->

## Challenges

<!-- /wp:heading -->

<!-- wp:paragraph -->

While our experience with shipping some of the first production Rust code by Microsoft has been delightful overall, we had a few challenges:

<!-- /wp:paragraph -->

<!-- wp:list -->

- The Rust ecosystem is still relatively new compared with some of the other more established languages. This meant that we’d often have to build pieces of infrastructure that we would otherwise probably not have had to.
- Parsing compiler error messages would occasionally prove to be difficult especially when dealing with code that made heavy use of combinators from [Tokio](https://tokio.rs/) Futures or `std::iter::Iterator`.
- Teams that are used to stellar tooling support for editing and debugging C# and Java code found the Rust editing/debugging experience somewhat subpar. The VS Code Rust RLS extension was notoriously unstable in practice.
- Reasoning about complex types that invariably get built when building complex Tokio Future combinator chains was sometimes tricky.

<!-- /wp:list -->

<!-- wp:heading -->

## What’s next

<!-- /wp:heading -->

<!-- wp:paragraph -->

At this point it would be fair to state that Azure IoT is completely on-board with the Rust programming language. Usage of Rust has only expanded even more since we shipped Azure IoT Edge. Multiple cloud service projects that are currently being actively worked upon are being written in Rust. The trifecta of memory safety, data race safety and performance that Rust offers has been a great fit for Azure IoT. We hope to have more to say about this in the future!

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

_Ra\_\_j Vengalil, Principal SWE Manager, IoT Platform_

<!-- /wp:paragraph -->
