---
title: 'Control Flow Guard for Clang/LLVM and Rust'
description: ""
published: 2020-08-17
type: posts
redirect_from:
            - https://msrc-blog.microsoft.com/2020/08/17/control-flow-guard-for-clang-llvm-and-rust/
author: Sebastian.Fernandez
categories:
- Exploit Mitigations
- Rust
- Safe Systems Programming Languages
- Secure Development
- Security Research &amp; Defense
hero: ../../../defaultHero.jpg
---
<!-- wp:paragraph -->

As part of our ongoing efforts towards safer systems programming, we’re pleased to announce that Windows [Control Flow Guard (CFG)](https://docs.microsoft.com/en-us/windows/win32/secbp/control-flow-guard) support is now available in the Clang C/C++ compiler and [Rust](https://www.rust-lang.org/).

<!-- /wp:paragraph -->

<!-- wp:heading -->

## What is Control Flow Guard?

<!-- /wp:heading -->

<!-- wp:paragraph -->

CFG is a platform security technology designed to enforce control flow integrity. It has been available since Windows 8.1 and is now used extensively in Windows 10. For example, given an initial memory safety vulnerability, an attacker might try to launch a code-reuse attack. This almost always requires the attacker to change the control flow of the program, in other words, to violate control flow integrity. For example, the attacker might try to corrupt a function pointer in order to continue execution from an arbitrary location in the program code.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

CFG aims to mitigate this type of exploit by enforcing coarse-grained forward-edge control flow integrity. Specifically, it uses runtime checks to validate the target address of every indirect branch instruction (call, jump, etc.) before allowing the branch to complete. To achieve this, CFG requires the compiler to do two things: add runtime checks at the appropriate places and provide a list of valid indirect branch targets. During compilation, the compiler identifies all indirect branches and adds a CFG check on each such branch. It also emits metadata containing the relative addresses of all address-taken functions. At runtime, if the binary is run on a CFG-aware operating system, the loader uses this CFG metadata to generate a bitmap of the address space and marks which addresses contain valid branch targets. On each indirect branch, the inserted code checks that the target address is marked in this bitmap, or if not, terminates the process.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

CFG is complementary to other exploit mitigations, such as Address Space Layout Randomization (ASLR) and Data Execution Prevention (DEP). Previously CFG was only available for C/C++ code compiled using Microsoft Visual C++.

<!-- /wp:paragraph -->

<!-- wp:heading -->

## Control Flow Guard in LLVM and Clang

<!-- /wp:heading -->

<!-- wp:paragraph -->

The LLVM Project is a collection of modular and reusable compiler and toolchain technologies. In particular, the LLVM Core libraries form a language-independent foundation for various different compiler frontends, including the Clang C/C++ compiler and [rustc](https://doc.rust-lang.org/rustc/), the compiler for Rust. The core libraries include a common set of optimizations and provide machine code generation for multiple CPU architectures.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

[LLVM 10.0](https://releases.llvm.org/10.0.0/docs/ReleaseNotes.html) now supports CFG. Our implementation of CFG is fully contained within the core libraries, making it reusable by any compiler built on LLVM – the frontend compiler simply needs to set the correct flags. Our implementation supports all target architectures for which CFG is currently available, namely x86 (32-bit and 64-bit), ARM, and Aarch64. We’ve added CFG support to [Clang 10.0](https://releases.llvm.org/10.0.0/tools/clang/docs/ReleaseNotes.html) for C/C++ projects. To enable CFG in your projects, simply use the `-cfguard` cc1 option (e.g. `-Xclang -cfguard`), or if you’re using the clang-cl compatibility driver, use the same `/guard:cf` flags as in MSVC. Clang also supports the `__declspec(guard(nocf))` modifier to elide CFG checks in the specified function, but this should only be used if absolutely necessary as it may allow exploits.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Since the Chromium codebase is compiled with Clang, the Chromium team is working to [enable CFG in Windows builds](https://bugs.chromium.org/p/chromium/issues/detail?id=584575) as a first step towards its adoption in Google Chrome and Microsoft Edge.

<!-- /wp:paragraph -->

<!-- wp:heading -->

## Control Flow Guard in Rust

<!-- /wp:heading -->

<!-- wp:paragraph -->

As explained in [previous posts](https://msrc-blog.microsoft.com/tag/rust/), Microsoft is exploring the use of Rust as a safe systems programming language. Previously, Rust didn’t support CFG, which could have been an obstacle to its use within our software. One of Rust’s main selling points is that its ownership model provides strong memory-safety guarantees, which should prevent the vulnerabilities used as the starting point for an exploit. So why would such a language need exploit mitigations like CFG? There are two main cases where you would want to use CFG in Rust:

<!-- /wp:paragraph -->

<!-- wp:list -->

- Codebases where Rust coexists with C/C++,
- Pure Rust codebases that include any unsafe.

<!-- /wp:list -->

<!-- wp:heading {"level":3} -->

### 1. Rust linked with C/C++

<!-- /wp:heading -->

<!-- wp:paragraph -->

The first case for enabling CFG is whenever Rust interoperates with C/C++ code, either as a Rust program calling a C/C++ library, or vice-versa. The simple Rust example below demonstrates two ways to call the `add_one()` function: either calling it directly by name, or calling it indirectly via a function pointer passed in from `main()`. There’s an `init()` function provided by an external C library. The C library is compiled with CFG enabled. As expected, the C function call is in an `unsafe` block. However, the function pointer (`fptr`) is never handled by this unsafe code, so we would not expect it to be modified.

<!-- /wp:paragraph -->

<!-- wp:preformatted -->

```
#[link(name = "init")]
extern "C" { fn init(y: u32); }
 
// A simple function to increment an integer
fn add_one(x: &mut i32) {
    *x += 1;
}

fn do_math(fptr: fn(&mut i32)) {
    unsafe{init(add_one as u32);}
 
    let mut x = 1;
    add_one(&mut x);
    println!("Calling function by name: 1 + 1 = {}", x);
 
    let mut x = 1;
    fptr(&mut x);
    println!("Calling via function pointer: 1 + 1 = {}", x);
}
 
fn main() {
    do_math(add_one);
}
```

<!-- /wp:preformatted -->

<!-- wp:paragraph -->

But when we run this simple program, the results are surprising:

<!-- /wp:paragraph -->

<!-- wp:preformatted -->

```
Calling function by name: 1 + 1 = 2<br>Calling via function pointer: 1 + 1 = 1
```

<!-- /wp:preformatted -->

<!-- wp:paragraph -->

In this example, the `init()` function reaches beyond its stack frame and corrupts the stack to make `fptr` point to somewhere in the middle of the `add_one()` function (if reproducing this example, you might need to change the `0x2D` offset, depending on your platform and compiler settings).

<!-- /wp:paragraph -->

<!-- wp:preformatted -->

```
#include <stdint.h><br>void init(uint32_t y) {<br>    for (uint32_t n = 0x01; n < 0x20; n++) {<br>        if (*(&y + n) == y) { <br>            *(&y + n) += 0x2D;<br>        }<br>    }<br>}
```

<!-- /wp:preformatted -->

<!-- wp:paragraph -->

Whilst this is a very contrived example (and hopefully no real codebase contains this code), it illustrates the possibility of an attacker finding a memory corruption vulnerability in the linked C/C++ code and using it to violate control flow integrity in the (safe) Rust code. Even though the C/C++ code is compiled with CFG enabled, we also need to enable CFG for the Rust code to mitigate this vulnerability.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Furthermore, even if you’re not explicitly linking against C/C++, it’s very likely that any user-space Rust program will use OS-provided C/C++ functionality under the hood (e.g. to print output to the terminal, as above), so it’s always a good idea to enable CFG.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### 2. Pure Rust codebases using unsafe

<!-- /wp:heading -->

<!-- wp:paragraph -->

The second case for enabling CFG is in pure Rust codebases using any unsafe code. Similarly to the above example, the `init()` function could have been a pure Rust function, containing unsafe code that modified the function pointer on the stack, as shown below.

<!-- /wp:paragraph -->

<!-- wp:group -->

<!-- wp:preformatted -->

```
fn init(y: u32) {<br>    for n in 0x20..0x50 {<br>        unsafe { if *(&y as *const u32).offset(n) == y { <br>            *((&y as *const u32).offset(n) as *mut _) = y + 0x2D }; };<br>    }<br>}
```

<!-- /wp:preformatted -->

<!-- /wp:group -->

<!-- wp:paragraph -->

Again, this is a contrived example, but it illustrates the possibility of vulnerabilities in unsafe Rust code affecting other parts of the (safe) Rust program. As in the example above, this is also mitigated by enabling CFG for Rust.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

In addition to codebases using unsafe, CFG can also help to mitigate vulnerabilities arising from bugs in the Rust core language or standard library.

<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->

### How do I enable CFG for Rust?

<!-- /wp:heading -->

<!-- wp:paragraph -->

CFG is available in Rust 1.47 (currently the [nightly](https://forge.rust-lang.org/) version). To enable CFG, simply add the `-C control-flow-guard` flag. If you’re building with cargo, you can enable CFG using the rustc command `cargo rustc -- -C control-flow-guard`. Importantly, to get full protection, you need to use a version of the Rust standard library that also has CFG enabled. At present, CFG is not yet enabled in the pre-built versions of the standard library, but you can enable it in your own builds by adding `control-flow-guard = true` in your config.toml file.

<!-- /wp:paragraph -->

<!-- wp:heading -->

## Overhead of Control Flow Guard

<!-- /wp:heading -->

<!-- wp:paragraph -->

Enabling this type of control flow integrity enforcement typically incurs some overhead in terms of binary size and runtime performance. CFG is highly optimized to minimize both of these aspects. The MSVC and LLVM implementations incur very similar overhead since both use the same OS-provided checking logic. The magnitude of any overhead depends on the number and frequency of indirect calls in the program being compiled. For example, enabling CFG for the Rust standard library increases binary size by approximately 0.14%. Enabling CFG in the SPEC CPU 2017 Integer Speed benchmark suite compiled with Clang/LLVM incurs approximate runtime overheads of up to 8%, with a geometric mean of 2.9%, as shown in the table below:

<!-- /wp:paragraph -->

<!-- wp:table -->

|                    |                           |                        |              |
| ------------------ | ------------------------- | ---------------------- | ------------ |
| **Benchmark**      | **Without CFG (seconds)** | **With CFG (seconds)** | **Overhead** |
| 600.perlbench_s    | 314                       | 322                    | 2.5%         |
| 602.gcc_s          | 538                       | 546                    | 1.5%         |
| 605.mcf_s          | 723                       | 767                    | 6.1%         |
| 620.omnetpp_s      | 486                       | 521                    | 7.2%         |
| 623.xalancbmk_s    | 225                       | 243                    | 8.0%         |
| 625.x264_s         | 186                       | 193                    | 3.8%         |
| 631.deepsjeng_s    | 326                       | 323                    | -0.9%        |
| 641.leela_s        | 435                       | 428                    | -1.6%        |
| 657.xz_s           | 487                       | 488                    | 0.2%         |
| **Geometric mean** | **381.6**                 | **392.7**              | **2.9%**     |

<!-- /wp:table -->

<!-- wp:paragraph -->

These benchmarks were run on an Intel Xeon W-2155 CPU @ 3.30GHz using `clang-cl` with the default SPEC CPU flags for Windows/MSVC. The quoted times are the median of three runs. The 648.exchange2*s benchmark requires Fortran, so was not included. Performance on the 631.deepsjeng_s and 641.leela_s benchmarks actually \_improved* when enabling CFG, likely due to better cache alignment.

<!-- /wp:paragraph -->

<!-- wp:heading -->

## Looking ahead

<!-- /wp:heading -->

<!-- wp:paragraph -->

Control flow integrity is an important topic and many solutions have been proposed in both academic literature and real-world systems. Some approaches offer more fine-grained enforcement so that the set of valid branch targets is further reduced. For example, Microsoft has recently announced XFG, as a successor to CFG. Other solutions make use of new CPU hardware, such as Intel’s recently-announced [CET](https://newsroom.intel.com/editorials/intel-cet-answers-call-protect-common-malware-threats/#gs.8neqnc), which could further improve performance once widely deployed. CFG is just one point in this design space, and although there are other solutions on the horizon, CFG can still help to defend against exploits and is available today on all Windows 10 devices.

<!-- /wp:paragraph -->

<!-- wp:heading -->

## Acknowledgements

<!-- /wp:heading -->

<!-- wp:paragraph -->

Working with the LLVM and Rust open-source communities has been a very positive experience. We particularly thank those members of the communities who contributed to this work through design suggestions, code reviews, and other advice.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

_Andrew Paverd, Senior Researcher, MSRC & Microsoft Research_

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

<!-- /wp:paragraph -->

<!-- wp:separator -->

---

<!-- /wp:separator -->
