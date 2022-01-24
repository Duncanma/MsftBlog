---
title: 'Using Rust in Windows'
description: ""
published: 2019-11-07
type: posts
redirect_from:
            - https://msrc-blog.microsoft.com/2019/11/07/using-rust-in-windows/
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

This Saturday 9th of November, there will be a [keynote](https://barcelona.rustfest.eu/sessions/r-evolution) from Microsoft engineers Ryan Levick and Sebastian Fernandez at RustFest Barcelona. They will be talking about why Microsoft is exploring Rust adoption, some of the challenges we’ve faced in this process, and the future of Rust adoption in Microsoft. If you want to talk with some of the people working on how Microsoft is evolving its code practices for better security, be sure to attend the keynote and talk to Ryan and Sebastian afterwards!

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

This blog describes part of the story of Rust adoption at Microsoft. Recently, I’ve been tasked with an experimental rewrite of a low-level system component of the Windows codebase (sorry, we can’t say which one yet). Instead of rewriting the code in C++, I was asked to use Rust, a memory-safe alternative. Though the project is not yet finished, I can say that my experience with Rust has been generally positive. It’s a good choice for those looking to avoid common mistakes that often lead to security vulnerabilities in C++ code bases.

<!-- /wp:paragraph -->

<!-- wp:heading -->

## Great dev experience

<!-- /wp:heading -->

<!-- wp:paragraph -->

For C++ developers used to writing complex systems, using Rust as a developer is a breath of fresh air. The memory and data safety guarantees made by the compiler give the developer much greater confidence that compiling code will be correct beyond memory safety vulnerabilities. Less time is spent debugging trivial issues or frustrating race conditions. The compiler warning and error messages are extremely well written, allowing novice Rust programmers to quickly identify and resolve issues in their code. VSCode already has a helpful extension ([RLS](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust)), which provides Intellisense suggestions and syntax highlighting. Additionally, the Cargo build tool offers very helpful features around testing, documentation generation, and auto formatting.

<!-- /wp:paragraph -->

<!-- wp:heading -->

## Learning Curve

<!-- /wp:heading -->

<!-- wp:paragraph -->

Thanks to a plethora of online documentation and very helpful compiler error messages, Rust has a pretty easy learning curve for someone like me who has used C++ for the majority of my career. There are [tutorials](https://rust-unofficial.github.io/too-many-lists/) aimed specifically at C/C++ systems engineers. In his [talk at RustConf 2019](https://www.youtube.com/watch?v=kylqq8pEgRs), Jeremy Fitzhardinge at Facebook noted that he saw experienced C/C++ developers become comfortable with Rust in around four weeks and pretty fluent in eight. This aligns with my own experience. I participated in the annual Microsoft internal “One Week” hackathon with one experienced Rust developer and one complete novice. Within three days, the novice Rust developer had written more than 1000 lines of idiomatic Rust code. In addition to the great documentation, there are helpful tools like [Clippy](https://github.com/rust-lang/rust-clippy) which allow experienced C++ developers to jump right into coding Rust without much direct assistance from those experienced with Rust.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

As we expand the use of Rust inside of Microsoft, I believe it will be prudent to start a RustReviewers group for any PRs that include Rust code. This will help novices in diverse teams get feedback from Rust experts, regardless of the specific problem domain.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

In general, new components or existing components with clean interfaces will be the easiest to port to Rust. The component I’ve been rewriting has been challenging as there are many abstractions leaked from one layer to the next, requiring some preliminary refactoring before progress could be made.

<!-- /wp:paragraph -->

<!-- wp:heading -->

## Foreign Function Interfaces (FFI)

<!-- /wp:heading -->

<!-- wp:paragraph -->

It is straightforward to link Rust code against C ABI (application binary interface) boundaries. There is a minimal amount of boilerplate code necessary to write for simple functions using basic types. However, given that FFI functions are always unsafe, a wrapper function is always desired. For functions that involve more complicated structs, it is desirable to automatically generate an equivalent Rust struct using [bindgen](https://github.com/rust-lang/rust-bindgen) as part of the build process. Being able to interoperate with C++ directly will require some more investigation, although we do have some teams already looking into this. Microsoft has recently open sourced a [COM library](https://github.com/microsoft/com-rs) that we see as the first step towards this, but we’ll eventually want more advanced tooling for directly interfacing with complex C++ APIs.

<!-- /wp:paragraph -->

<!-- wp:heading -->

## Keeping it Safe

<!-- /wp:heading -->

<!-- wp:paragraph -->

To obtain the desired safety guarantees from Rust, strict guidelines must be placed around the use of the **unsafe** keyword. Any calls to an FFI function should occur in a wrapper function that provides a safe abstraction around it. Similarly, any other code that must use the **unsafe** keyword should have a wrapper function or struct that provides a safe abstraction.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

In practice, besides FFI boundaries, **unsafe** has only been required for very basic protocol handling. In these cases, it’s simple to write some generic **unsafe** code that can be thoroughly unit tested and used for a variety of scenarios, resulting in code that feels much safer than C++. After writing Rust code, I find writing C++ much more frustrating since I can’t rely on the compiler to ensure memory safety.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Beyond just ensuring safety guarantees, having a set of internal Rust coding standards will help new developers get the most out of the language. Best practices for error handling, logging, locking, and other language-specific issues will obtain higher quality code faster.

<!-- /wp:paragraph -->

<!-- wp:heading -->

## Desired features and the Rust community

<!-- /wp:heading -->

<!-- wp:paragraph -->

Given Rust’s relative youth, there are still some missing language features that would be very desirable for our development. Foremost of these are safe transmutation (safely cast “plain old data” types to and from raw bytes), safe support for C style unions, and fallible allocation (fail gracefully from allocation failure, rather than panic).

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Another amazing capability from Rust is the unit testing built into Cargo which allows developers to write unit tests in the same file as production code and run them easily while developing. Unfortunately, we cannot rely on Cargo as a build tool today inside of our large and complex build system, so we cannot rely on these tests in automatic code integration flows without further work. Talk has already started with the Cargo team on how large companies like Microsoft with complex existing build systems can still take advantage of Cargo.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Due to the interest in using Rust in microcontrollers and low-level systems like kernels and hypervisors, the community is already working in solving these issues. I’m confident that we at Microsoft will be able to help in these endeavors to shape the future of the language to improve its usefulness in these scenarios.

<!-- /wp:paragraph -->

<!-- wp:heading -->

## Going from Here

<!-- /wp:heading -->

<!-- wp:paragraph -->

In general, using Rust has been a really great experience. I look forward to seeing more developers at Microsoft working with the language and working with the wider community on making the language an even better fit for some of the things we do here at Microsoft.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

**_Adam Burch, Software Engineer, Hyper-V team_**

<!-- /wp:paragraph -->
