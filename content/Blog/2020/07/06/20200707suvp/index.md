---
title: 'Security Update Validation Program (SUVP) のご紹介'
description: ""
published: 2020-07-06
type: posts
redirect_from:
            - https://msrc-blog.microsoft.com/2020/07/06/20200707suvp/
authors:
- jsecteam
categories:
- Japan Security Team
tags:
- SUVP
- セキュリティ更新プログラム
hero: ../../../defaultHero.jpg
---
本記事は、[What is the Security Update Validation Program?](https://techcommunity.microsoft.com/t5/windows-it-pro-blog/what-is-the-security-update-validation-program/ba-p/275767) の日本語抄訳です。

Security Update Validation Program は、マイクロソフトが毎月第二火曜 (米国時間) に公開するセキュリティ更新プログラムの品質を確保するための事前検証プログラムです。SUVP では、動作検証や互換性テストを目的に、通常の公開よりも最大で 3 週間前倒しでセキュリティ更新プログラムを入手するできることができます。このプログラムでは、Windows や Office、Exchange、SQL といった脆弱性を修正している、すべてのマイクロソフト製品を対象としています。そしてプログラムの参加者は、マイクロソフトと NDA 契約を締結していて、かつマイクロソフトの担当者が推薦することにより信用を得ているお客様に限定されています。

SUVP の目的は、参加者 (お客様) 自身の検証環境やインフラ環境、また LoB やサードパーティー、社内アプリケーションにて、マイクロソフトのセキュリティ更新プログラムを検証することです。通常の公開よりも前に見つかった問題はただちに SUVP を通じて製品開発チームに報告され、問題の修正を担当する製品チーム関係者に情報が渡ります。これにより原因調査や対処が迅速に行われ、報告したパートナー様がすぐにその修正を検証することができるようになっています。内密に報告された脆弱性情報の守秘義務を守るために、SUVP を通じて脆弱性の詳細は提供されず、更新プログラムをリバース エンジニアリングしたり実装されたセキュリティ対策の効果を試したりするような行為は認められていません。

SUVP に参加することのメリットは、マイクロソフトのセキュリティ更新プログラムが一般に広く展開される前に、お客様のビジネスに影響を及ぼす可能性がある問題を特定することができることです。問題を特定することができれば、お客様がその問題の重要性を判定し、可能な限りその影響を抑えることができます。それにより毎月、適用後の機能的な問題に煩わされずに、お客様の Windows 端末 (もしくはお客様の顧客端末) を安全に、そして最新の状態に保つことができるようになります。

SUVP への参加にご興味がある場合には、マイクロソフトの担当者に連絡を取り、SVVP Onboarding チーム ([SUVPRecruit@microsoft.com](mailto:SUVPRecruit@microsoft.com)) (英語のみ) へ推薦することを依頼してください。このプログラムに参加するためには、SUVP 契約の締結と、Microsoft Collaborate 経由で検証用のパッケージなどのコンテンツを入手するために有効化された Azure Active Directory のテナントが必要となります。
