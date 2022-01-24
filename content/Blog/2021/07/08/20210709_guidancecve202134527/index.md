---
title: 'Windows Print Spooler の脆弱性情報 (CVE-2021-34527) に関するお客様向けガイダンス'
description: ""
published: 2021-07-08
type: posts
redirect_from:
            - https://msrc-blog.microsoft.com/2021/07/08/20210709_guidancecve202134527/
authors:
- jsecteam
categories:
- Japan Security Team
tags:
- アドバイザリ
- セキュリティ情報
- セキュリティ更新
- 定例外
- 脆弱性
hero: ../../../defaultHero.jpg
---
2021 年 7 月 7 日 (日本時間) に、マイクロソフトは Windows Print Spooler の脆弱性情報 CVE-2021-34527 を公開し、7 月 7 日と 8 日 (日本時間) に、この脆弱性を解決するために、すべてのサポート対象のバージョンの Windows 向けにセキュリティ更新プログラムをリリースしました。できるだけ早くセキュリティ更新プログラムを適用することをお勧めします。

[Windows Print Spooler Remote Code Execution Vulnerability](https://msrc.microsoft.com/update-guide/en-us/vulnerability/CVE-2021-34527)

この定例外のリリース (OOB) の後、セキュリティ更新プログラムの有効性に関する主張と、推奨する緩和策に関する質問について調査しました。

**マイクロソフトの調査では、定例外に公開したセキュリティ更新プログラムは設計通りに機能しており、プリンタースプーラーに関する既知の悪用や、PrintNightightmare に関して一般に公開されている他の報告に対しても有効であることが確認されています。調査したレポートのすべては、Point and Print に関連する既定のレジストリ設定が、安全ではない構成に変更されていることを利用しています。**

マイクロソフトは、お客様に対する保護ができる限り迅速に利用可能とすることに重点を置いています。また問題の調査の進展にあわせて、お客様向けのガイダンスも更新しました。次の手順をすぐに実行することをお勧めします。

- 最初に、CVE-2021-34527 に対するセキュリティ更新プログラムを適用してください。このセキュリティ更新プログラムによって、既存のレジストリ設定が変更されることはありません。

- セキュリティ更新プログラムを適用した後、[CVE-2021-34527](https://msrc.microsoft.com/update-guide/en-us/vulnerability/CVE-2021-34527) に記載されているレジストリ設定を確認します。

- 記載されているレジストリ キーが存在しない場合、それ以上の操作は必要ありません。

- 記載されているレジストリ キーが存在する場合、システムをセキュリティで保護するには、次のレジストリ キーが 0 (ゼロ) に設定されているか、もしくは存在しない (未定義) ことを確認します。

  - HKEY_LOCAL_MACHINE\\SOFTWARE\\Policies\\Microsoft\\Windows NT\\Printers\\PointAndPrint
  - NoWarningNoElevationOnInstall = 0 (DWORD) または未定義 (既定の設定では未定義)
  - UpdatePromptSettings = 0 (DWORD) または未定義 (既定の設定では未定義)

詳細なガイダンスについては、「[KB5005010: Restricting installation of new printer drivers after applying the July 6, 2021 updates](https://support.microsoft.com/en-us/help/5005010)」を参照してください。

今後、追加の問題が確認された場合は、必要に応じてお客様を保護する対策を講じます。

<!-- wp:paragraph -->

<!-- /wp:paragraph -->
