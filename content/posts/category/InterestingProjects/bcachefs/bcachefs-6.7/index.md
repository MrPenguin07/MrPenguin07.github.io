---
title: "Bcachefs: A COWs Journey"
date: 2023-11-05T08:06:25+06:00
description: My year-long experience with Bcachefs, its kernel inclusion, and benchmark revelations.
menu:
  sidebar:
    name: bcachefs merged into 6.7 kernel
    identifier: bcachefs-6.7
    parent: bcachefs-main
    weight: 12
hero: images/bcachefs.jpg
tags:
- Bcachefs
- Linux Kernel
- Filesystem Performance
---

## What's new with bcachefs

Over the past year, my journey with bcachefs - in pursuit of unknown benefits - sure has been interesting, and full of drama if one reads the fs kernel mailing list. The project, with its vow to deliver enhanced performance and reliability, has no doubt made great progress and reached what many believed would (or should) never happen.
The recent announcement of its inclusion in 6.7 Kernel was a triumphant moment, marking a significant milestone for the project. However the phoronix benchmark results presented have been less than impressive, albeit I do question the testing methadology.

The integration of Bcachefs into the kernel brings it one step closer to becoming a filesystem chosen by many rather than a few willing guinea pigs. Despite these results, the potential is there and it's features are indicative of a promising future.

### The (not so) juicy numbers
{{< img src="images/bench1.jpg" height="700" width="650" align="center" title="Benchmark 1">}}

{{< vs >}}

{{< img src="images/bench2.jpg" height="700" width="650" align="center" title="Benchmark 2">}}
<center>Source: <a href="https://www.phoronix.com/review/bcachefs-linux-67/4">Phoronix Benchmarks</a></center>


The numbers, when juxtaposed with other filesystems, revealed a performance gap that Bcachefs needs to bridge to stand toe-to-toe with its counterparts. The benchmarks were a sobering reminder that while strides have been made, the road ahead is still long and winding.

Despite the slight setback, the community behind bcachefs is vibrant and determined, and with the right amount of polish and tuning, I believe bcachefs can rise to the occasion. The kernel integration is a testament to the filesystem’s potential, and I patiently wait to see to how it evolves.

### Related Video

{{< youtube ekBGZHUl4z0 >}}

{{< vs >}}

