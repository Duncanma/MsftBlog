---
title: 'An Armful of CHERIs'
description: ""
published: 2022-01-20
type: posts
redirect_from:
            - https://msrc-blog.microsoft.com/2022/01/20/an_armful_of_cheris/
author: Saar.Amar
categories:
- Security Research &amp; Defense
hero: ./img/wp-content-uploads-2022-01-morello-1-1024x768.jpg
---
<!-- wp:image {"id":13815,"sizeSlug":"large","linkDestination":"none"} -->

![](./img/wp-content-uploads-2022-01-morello-1-1024x768.jpg)

<!-- /wp:image -->

<!-- wp:paragraph -->

Today, [Arm announced](https://www.arm.com/company/news/2022/01/morello-research-program-hits-major-milestone-with-hardware-now-available-for-testing) that the first silicon supporting the Morello prototype architecture, a research project led by Arm, Microsoft, University of Cambridge and others, is now available on a limited run of demonstration boards, which are being shipped from today to industry partners for testing. Morello is the first high-performance implementation of the [CHERI extensions](https://www.cl.cam.ac.uk/research/security/ctsrd/cheri/). CHERI provides fine-grained spatial memory safety at a hardware level. We’ve previously completed [a security review of a prototype of the CHERI software stack](https://msrc-blog.microsoft.com/2020/10/14/security-analysis-of-cheri-isa/) on QEMU and will now have the opportunity to more deeply evaluate CHERI on a fast contemporary superscalar processor.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

The [Portmeirion Project](https://www.microsoft.com/en-us/research/project/portmeirion/) is a collaboration between [Microsoft Research’s Confidential Computing Group](https://www.microsoft.com/en-us/research/theme/confidential-computing/) and the Microsoft Security Response Center that is exploring hardware-software co-design for security and will be working with these systems.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Unlike many other proposed memory-safety technologies, CHERI (by design) does not depend on secrets. This means that it deterministically mitigates vulnerability classes, rather than giving a high probability of detecting them. Probabilistic mitigations have not historically shown to be durable because attackers find ways of leaking the secrets and turning low-probability attacks into high-probability attacks. An attacker can bypass any mitigation that depends on secrets by leaking the secret and may be able to bypass it with a high probability if they can reduce the entropy of the secret. The deterministic aspect of CHERI also means that it can be used as a building block for higher-level security abstractions.

<!-- /wp:paragraph -->

<!-- wp:heading -->

## CHERI changes the abstract machine

<!-- /wp:heading -->

<!-- wp:paragraph -->

[CHERI](https://www.cl.cam.ac.uk/techreports/UCAM-CL-TR-951.pdf) began as joint research effort by SRI International and the University of Cambridge in 2010, funded by the [DARPA Clean-slate design of Resilient, Adaptive and Secure Hosts (CRASH) program](https://www.darpa.mil/program/clean-slate-design-of-resilient-adaptive-secure-hosts). The program asked participants to be willing to rethink everything in the hardware/software stack to improve security.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

In the case of CHERI, this was to change the user-visible abstract machine exposed by hardware in a way that hasn’t been done for mainstream hardware since the PDP-11. Subsequent machines added MMUs for virtual memory, but did not add mechanisms for intra-process memory isolation. Within a process, these machines retained the abstraction that addresses are just integers and so can be materialized from thin air. Virtualization extensions allowed multiple instances of the operating system to be isolated in a similar manner but each one retained the same abstractions within a process. Any piece of code running in a process can construct an integer value and, if this integer corresponds to a valid location in the process’ address space, then it can access memory at that location. Attackers take advantage of these weaknesses – essential to current hardware architectures – every day.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

CHERI changes this. Every load or store instruction and every instruction fetch must be authorized by an _architectural_ _capability_. Load and store instructions take a capability as the base instead of an integer address. The capability both identifies an address and grants access to a range of memory (including permissions, such as read, write, or execute). The ISA provides operations for restricting the rights on a capability (for example, reducing the bounds or removing permissions) but there is no mechanism for increasing the rights without starting from a more powerful capability (capability* monotonicity*). This includes storing capabilities to memory, where they are protected by a (non-addressable) _tag bit_ and any attempt to overwrite part or all of a capability in memory clears the tag bit and invalidates the capability.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

CHERI permissions compose with the MMU. The rights granted by a capability are relative to an address space and subject to process and VM isolation in addition to the CHERI restrictions.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

There are a lot of different ways of using CHERI, just as there are a lot of ways to use a conventional MMU. At the coarsest granularity, you can use just two of the capability registers: the program counter capability (PCC) and the default data capability (DDC). These restrict the range for relative jumps and jumps that take an integer address, and for legacy (non-CHERI) load and store instructions, respectively. In this mode you can create lightweight carveouts in a process’ address space as isolated sandboxes, giving WebAssembly-like isolation for existing native code.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

At the finest granularity (referred to as the ‘pure-capability ABI’ or ‘[CheriABI’](https://www.cl.cam.ac.uk/techreports/UCAM-CL-TR-932.pdf)), every pointer in the implementation of a language such as C or C++ is lowered to a capability. When you request more address space from the OS via, mmap, VirtualAlloc or similar, the OS will provide a new capability granting rights to that memory. When malloc or operator new returns a new object, it will subdivide one of these capabilities and provide a pointer that gives access to precisely one object. No mechanism in the system can turn that into a pointer to another object. There are various possibilities between these two extremes.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

CheriABI provides complete object-granularity (and, potentially, field- or array-element-granularity) spatial memory safety. Composed with other existing mitigations, our prior analysis showed that this [would have deterministically prevented around 43% of vulnerabilities submitted to MSRC in 2019](https://github.com/microsoft/MSRC-Security-Research/blob/master/papers/2020/Security%20analysis%20of%20CHERI%20ISA.pdf). Compartmentalization could further limit the damage that an attacker could do with some of these vulnerabilities. Our ongoing work, in collaboration with the University of Cambridge and SRI, on CHERI heap temporal safety would increase this to almost 70%.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Having hardware now available for testing is a significant step forward in this program, as the industry can begin to test how this might work in real-world applications, as well as starting to address some of the challenges it faces, for example software compatibility. In a pure-capability ABI, pointers grow to 128 bits. They may be stored in variables declared as intptr*t, but not long or other integer types, and they may not be materialized from integer values. All of this means that C/C++ software is \_at best* source compatible (requiring a recompile) and [typically requires at least some small source co](https://www.capabilitieslimited.co.uk/pdfs/20210917-capltd-cheri-desktop-report-version1-FINAL.pdf)[d]()e modification, at least if you want any of the security benefits. You can also run non-CHERI software on a CHERI system just as you can run 32-bit software on most 64-bit processors.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

This leads to a bootstrapping problem: No one wants to modify their code (potentially in invasive ways) to support an architecture with no industrial traction and no one wants to ship an ISA with no software. The [Digital Security by Design (DSbD)](https://www.ukri.org/our-work/our-main-funds/industrial-strategy-challenge-fund/artificial-intelligence-and-data-economy/digital-security-by-design-challenge/) challenge from UKRI is a massive government and industry investment to break this deadlock by building a realistic prototype and funding software development with it. The Morello CPU is a quad-core, 2.5GHz modified Arm Neoverse N1, a contemporary superscalar server core. Prior to this, the most advanced CHERI implementation was the CHERI version of [Toooba](https://github.com/CTSRD-CHERI/Toooba), which can run in an FPGA at 50MHz in a dual-core configuration and is roughly equivalent in microarchitecture to a mid-‘90s CPU. Although Toooba is a significant achievement, it isn’t fast or realistic enough for bringing up complex software stacks at scale, or for running detailed performance analyses.

<!-- /wp:paragraph -->

<!-- wp:heading -->

## Improving temporal safety

<!-- /wp:heading -->

<!-- wp:paragraph -->

CHERI does not directly implement temporal safety in the architecture. It does provide the architectural building blocks required for a software implementation. Specifically, software can use the tag bit to accurately identify every pointer in memory and can rely on the monotonicity guarantees to ensure that every pointer can be mapped to the allocation that it was created to point to.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

These guarantees are similar to those found in garbage collected environments. For C and C++ code, we don’t want to add garbage collection because the abstract machine already has explicit deallocation and C++ code relies on destructors running at deterministic points. Instead, we want to add _revocation_, the logical dual. Garbage collection ensures that objects last until all pointers to them have gone away. Revocation ensures that pointers to an object are deleted when the object goes away (or, at least, before the memory is reused). This is the same abstract guarantee as Microsoft’s [Project Snowflake](https://www.microsoft.com/en-us/research/publication/project-snowflake-non-blocking-safe-manual-memory-management-net/) provided for manual memory management in .NET: any attempt to access a pointer to a deallocated object is guaranteed to either access the old object (not any new object allocated in the same space) or trap.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

A naïve implementation would simply pause execution of the program and walk 16-byte chunks of the address space. For every capability that it finds, it would query the allocator to see if the pointee had been deallocated and then zero the capability if so. This would work, as long as you’re willing to put up with multi-second pause times periodically. Unfortunately, most software is not.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

There are several tricks that you can do to speed this up. First, most memory does not contain any pointers. Large buffers of text, images, or other data typically make up 80% or so of heap allocations. A capability-dirty bit in the MMU lets the revocation sweep identify only the pages that have had one or more capabilities stored to them, eliminating the other parts. This reduces the pause time considerably but still means that you have a pause time proportional to the size of the heap.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

[Cornucopia](https://www.cl.cam.ac.uk/research/security/ctsrd/pdfs/2020oakland-cornucopia.pdf) improved on this by using an MMU-enforced store barrier and running mostly concurrently. Every time that a page has a capability stored to it while the revoker runs in the background, it can potentially have more invalid capabilities that need revoking. Eventually, the set of unscanned pages is small enough that the revoker can pause the program and scan the remainder, using a technique very similar to VM live migration.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

With Morello, we have worked with Arm and the University of Cambridge to add features that enable follow-on work to Cornucopia that will allow a read barrier to replace the write barrier and a shorter synchronization phase. Each Morello core has a one-bit field in a machine-specific register (MSR) that works as a generation counter. If this bit matches a corresponding bit of the page table _and_ a valid capability is loaded from the page, then Morello delivers a trap. This means that, after a small synchronization phase that toggles the MSR bit on every core and scans the register file for each running thread, the running program maintains the invariant that any capability in its register file was valid at the start of the revocation pass. We believe that we can build a much more efficient temporal safety design on top of this.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

We’re also interested in how this kind of design would compose with another Arm memory safety technology: [Arm Memory Tagging Extension (MTE)](https://community.arm.com/arm-community-blogs/b/architectures-and-processors-blog/posts/enhancing-memory-safety). MTE was originally designed for at-scale detection of bugs that cause vulnerabilities but we are primarily interested in it as an enforcement technology. MTE is in a very different place in the design space to CHERI. It aims for close to 100% binary compatibility with existing code. This imposes an upper bound on the security that it can enforce by requiring it to support idioms that may be secure in one context but not in others, for example casting a `long` to a pointer. It associates a 4-bit “color” with every 16-byte memory chunk and embeds the same color in the top bits of pointers, providing a lock-and-key mechanism where mismatches between the color in the pointer and the memory are detected by the hardware. The security of MTE, unlike CHERI, depends on secrets (the colors) and does not prevent pointer injection. MTE can deterministically mitigate linear overflows but, if an attacker can leak the color of a particular address (for example, by reading an existing pointer or using a speculative side channel to disclose it), then they can inject a pointer that MTE will consider valid.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

What happens if you have both? CHERI protects against guarded manipulation and so makes it possible to restrict the rights to recolor memory to the memory allocator (or the owner of any given piece of address space) and prevents pointer forging, including preventing recoloring pointers. CHERI also provides bounds checks, removing the MTE requirement that two adjacent allocations must have different colors (to protect against linear overflows). In a system supporting both, recoloring memory immediately on deallocation protects against use after free, including allowing the allocator to safely store metadata in freed objects. Through using performance data from Morello, we will be able to explore research questions such as whether this would allow us to implement CHERI revocation more efficiently.

<!-- /wp:paragraph -->

<!-- wp:heading -->

## Do we still need safe languages with CHERI?

<!-- /wp:heading -->

<!-- wp:paragraph -->

If it turns out that we can provide full spatial and temporal memory safety for C/C++ with CHERI, do we still need safe programming languages? Don’t we get the same guarantees for C++ as for Rust or C#?

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Memory safety for C and C++ works by adding restrictions on categories of undefined behavior. C says that any use of a pointer after it has been passed to free() is undefined. This is about all that a language such as C can say because there is no strong definition than ‘some unspecified bad thing may happen’ that is feasible to implement on all C targets. The same is true for accessing past the end of an array. On a CHERI system with a software temporal safety solution, we can guarantee that you won’t access the wrong object. We can’t guarantee that you’ll get a trap (the compiler may elide the load or store entirely if it proves that it is undefined behavior) but we can guarantee that you’ll either get a trap or do something that doesn’t violate memory safety.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

What do you do with that trap? There have been enough vulnerabilities in error-recovery code from this kind of error that it’s likely that the only safe thing that you can do is kill the component that triggered the trap. In contrast, a safe language prevents you from doing the operation that would trigger the trap _by construction_. Even though the security properties of CHERI C++ and C# may be similar, the availability properties will be very different. Some bug categories in CHERI C++ that causes a trap would either cause a compile failure or simply be impossible to express in C#.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Because CHERI C/C++ relies on defining undefined behavior to add security, it can’t do anything about existing defined-but-dangerous behavior without disrupting further software semantics, which would require more software change. CHERI C still permits unions or arbitrary pointer casting that can lead to type confusion bugs. It enforces a 1-bit type safety guarantee: you can’t accidentally interpret non-pointer data as a pointer, but you can still confuse a pointer to one type with a pointer to another type. Again, this kind of bug is prevented by construction in a safe language. Contemporary type-safe languages prevent big classes by construction, whereas CHERI memory protection prevents the exploitation of some of these bug classes. There are billions of lines of C and C++ code in widespread use, and CHERI’s strong source-level compatibility provides a path to achieving the goals of high-performance memory safety without requiring a ground-up rewrite.

<!-- /wp:paragraph -->

<!-- wp:heading -->

## What about compartmentalization?

<!-- /wp:heading -->

<!-- wp:paragraph -->

A lot of the focus for CHERI is on C/C++ memory safety. This is still the most common source of security vulnerabilities and so this focus makes sense. CHERI is intended to enforce two important principles for security:

<!-- /wp:paragraph -->

<!-- wp:list -->

- The principle of least privilege
- The principle of intentional use

<!-- /wp:list -->

<!-- wp:paragraph -->

Least privilege means that a program, component, and so on runs with only the minimum set of rights that it needs. In a memory-safe environment this means that it can access only the set of objects that it should be able to use (and can only write to the ones that it should be able to write to). Intentionality means that any use of rights should be explicit. Again, in a memory-safe environment this means that you should only access an object via a pointer that you expect to point to it. If you were to try to use MMU protections to isolate a component then you’d get the first of these but not the second: the component could only access objects that are mapped into its address space but a pointer-arithmetic bug could allow it to accidentally modify an object that it held the rights to but did not intend to modify.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

These principles extend beyond just memory safety. Web browsers use multiple processes to run components that deal with untrusted data at lower privilege. Windows uses a hypervisor-isolated component (the “secure kernel”) to protect secrets from a potential kernel compromise. There are other examples of this kind of compartmentalized system but they are very few and even the most successful ones typically have only a handful of compartments. There are two obstacles to writing aggressively compartmentalized software:

<!-- /wp:paragraph -->

<!-- wp:list -->

- MMU-isolated processes are expensive and TLB thrashing dominates performance if you have too many.
- C/C++ assume a single privilege domain and don’t provide any tools for reasoning about isolation.

<!-- /wp:list -->

<!-- wp:paragraph -->

[CHERI addresses the first of these](https://www.cl.cam.ac.uk/research/security/ctsrd/pdfs/201505-oakland2015-cheri-compartmentalization.pdf). Creating a compartment can be as cheap as a malloc() call in the simplest case. A compartment in a CHERI system is just the transitive closure of the reachable memory from the capability registers. In a C-like language, this is difficult to reason about. Consider the following C example:

<!-- /wp:paragraph -->

<!-- wp:code -->

```
void append(struct list *l1, struct list *l2)
{
   l1->next = l2;
}
```

<!-- /wp:code -->

<!-- wp:paragraph -->

In this trivial example, you might have broken compartment isolation. If l1 is in a compartment but l2 isn’t (or is in a different compartment), then you’ve just passed the compartment a pointer that allows it to access memory that it shouldn’t use. If l2 is in a compartment but l1 isn’t, then you’ve created a list where trusted code will follow an attacker-controlled pointer.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Avoiding this kind of problem is one of the goals of [Project Verona](https://www.microsoft.com/en-us/research/project/project-verona/), a Microsoft Research project under the Portmeirion umbrella that aims to build a language with first-class support for compartmentalization. We can implement this model on a variety of mechanisms, such as MMU-based isolation or software fault isolation, but expect that CHERI will provide better performance and scalability than anything on current commodity hardware.

<!-- /wp:paragraph -->

<!-- wp:heading -->

## Goals for the Morello program

<!-- /wp:heading -->

<!-- wp:paragraph -->

We’re looking forward to being able to prototype Verona’s isolation on Morello as well as exploring faster temporal safety, overall performance for memory-safe code, isolation in minimal-TCB systems and much more. If the Morello program can demonstrate that CHERI meets the performance goals for real-world use then it is a game changer for security, deterministically preventing spatial safety vulnerabilities and (with software support) heap temporal safety bugs, dramatically reducing the set of bugs that become exploitable as for anything other than denial of service.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

It is rare for any security technology to reach widespread adoption if the performance overhead is over 5% and incredibly rare if the overhead is over 10%. Morello will give us much better data on the performance impact of CHERI C with spatial safety alone, with heap temporal safety, and with compartmentalization. Morello provides an upper bound on overhead for a server-class microarchitecture: it is a minimally modified Arm Neoverse N1 and so does not represent a core and memory subsystem designed to support CHERI from the start. In general, backwards-compatible solutions also have an advantage over incompatible ones and we hope that the Morello program will give more data on the effort in supporting CHERI with very large ecosystems containing legacy software.

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

_Saar Amar, Nicolas Joly – Microsoft Security Response Center (MSRC)_

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

\_David Chisnall, Manuel Costa, Sylvan Clebsch, Wes Filardo, Boris Köpf, Robert Norton-Wright, Matthew Parkinson **– Microsoft Research (MSR)\_**

<!-- /wp:paragraph -->
