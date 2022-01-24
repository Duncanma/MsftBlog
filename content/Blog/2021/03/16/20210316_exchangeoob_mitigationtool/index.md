---
title: 'オンプレミス Exchange 緩和ツール (ワンクリックの緩和ツール)'
description: ""
published: 2021-03-16
type: posts
redirect_from:
            - https://msrc-blog.microsoft.com/2021/03/16/20210316_exchangeoob_mitigationtool/
authors:
- jsecteam
categories:
- Japan Security Team
tags:
- Exchange
- セキュリティ情報
- 脆弱性
hero: ./img/wp-content-uploads-2021-03-image-28.png
---
「[One-Click Microsoft Exchange On-Premises Mitigation Tool – March 2021](https://msrc-blog.microsoft.com/2021/03/15/one-click-microsoft-exchange-on-premises-mitigation-tool-march-2021/)」の日本語抄訳です。

[最近のオンプレミスの Exchange Server を狙った攻撃](https://www.microsoft.com/security/blog/2021/03/12/protecting-on-premises-exchange-servers-against-recent-attacks/)に関連した脅威に対応し、お客様環境を安全にするために、マイクロソフトのサポートチームやサードパーティのホスティング会社、パートナーネットワークを通じてお客様と活発にやり取りしています。これらの活動をもとに、サポート対象内外のオンプレミスの Exchange Server をお使いのお客様からの要望に応えるには、シンプルで使いやすい自動化された解決策が必要であることに気づかされました。

_マイクロソフトは、セキュリティ更新プログラムを適用するにあたり、専任のセキュリティチームや\_\_ IT チームを持っていないお客様向けに、新しいオンプレミス Exchange 緩和ツール (_[ワンクリックの緩和ツール](https://aka.ms/eomt)*) をリリースしました。*このツールは、Exchange Server 2013/2016/2019 環境にてテストを実施しています。この新しいツールは更新プログラムの適用プロセスに不慣れなお客様やオンプレミスの Exchange Server にまだセキュリティ更新プログラムを適用していないお客様向けの暫定的な緩和策として設計されています。

最新の [Microsoft Safety Scanner](https://docs.microsoft.com/en-us/windows/security/threat-protection/intelligence/safety-scanner-download) を含んだこのツールをダウンロードして実行することで、お客様は自動的に、お客様環境に展開されている Exchange Server 上での CVE-2021-26855 の脆弱性を緩和することができます。このツールは Exchange のセキュリティ更新プログラムを置き換えるものではありませんが、セキュリティ更新プログラムを適用するまで、インターネットに接続されたオンプレミスの Exchange Server に対する高いリスクを緩和するために最速で最も簡単なものとなります。

オンプレミスの Exchange のセキュリティ更新プログラムをまだ適用していないお客様全員に、下記の手順を実行することを推奨します:

・[ツール](https://aka.ms/eomt)をダウンロードします。

・すぐに Exchange Server 上で実行します。

・お客様のオンプレミスの Exchange が保護されているかを、この[ブログ記事](https://msrc-blog.microsoft.com/2021/03/02/20210303_exchangeoob/)の詳細なガイダンスに従って確認します。

・もし既に [Microsoft Safety Scanner](https://docs.microsoft.com/en-us/windows/security/threat-protection/intelligence/safety-scanner-download) を利用している場合は、それは引き続き有効です。さらなる緩和策として実行し続けることをお勧めします。

この [EOMT.ps1](https://aka.ms/eomt) ツールを実行すると、下記の 3 つの操作が実行されます。

・URL Rewrite を構成変更することで、CVE-2021-26855 を利用した既知の攻撃を緩和します。

・[Microsoft Safety Scanner](https://docs.microsoft.com/en-us/windows/security/threat-protection/intelligence/safety-scanner-download) を使って、Exchange Server をスキャンします。

・見つかった脅威によって加えられた変更を元に戻そうとします。

![](./img/wp-content-uploads-2021-03-image-28.png)

このツールを実行する前に、下記の事項をご確認ください。

・オンプレミス Exchange 緩和ツールは、現在一般に確認されている攻撃に限り有効ではありますが、脆弱性に対しての完全な緩和策となる保証はありません。**Exchange Server にセキュリティ更新プログラムが完全に展開されるまでの暫定的な緩和策としてのみ利用できます。**

・**最新の脅威インテリジェンスを利用できるため、以前の\*\*** ExchangeMitigation.ps1 よりも、このスクリプトを利用することをお勧めします。\*\*既に他のスクリプトにて対応を開始していても、このツールに切り替えることも可能です。

・インターネットに接続された Exchange 環境や改善策を自動化しようとしているお客様向けにお勧めの方法となります。

・これまでのところ、これらの緩和策が展開された際の Exchange Server の機能性への影響は確認されていません。

詳細な技術情報や実行例、ガイダンスは [GitHub](https://github.com/microsoft/CSS-Exchange/blob/main/Security/) をご参照ください。

マイクロソフトはお客様をご支援することを約束し、<https://aka.ms/exchangevulns> にてガイダンスや更新を提供し続けます。

MICROSOFT MAKES NO WARRANTIES, EXPRESS, IMPLIED, OR STATUTORY, AS TO THE INFORMATION IN THIS GUIDANCE.

オンプレミス Exchange 緩和ツールは、GitHub レポジトリに明示してあるとおり、MIT ライセンスを通じて利用可能です。
