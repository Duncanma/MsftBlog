---
title: '2021 年 9 月のセキュリティ更新プログラム (月例)'
description: ""
published: 2021-09-14
type: posts
redirect_from:
            - https://msrc-blog.microsoft.com/2021/09/14/202109-security-updates/
author: jsecteam
categories:
- Japan Security Team
- セキュリティ情報
hero: ../../../defaultHero.jpg
---
<!-- wp:paragraph -->

**更新**

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

9 月 17 日： 9 月の月例セキュリティ更新日に公開した Open Management Infrastructure (OMI) の脆弱性 [CVE-2021-38645](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-38645), [CVE-2021-38649](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-38649), [CVE-2021-38648](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-38648), [CVE-2021-38647](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-38647) に関して、追加のガイダンスを公開しました。詳細は、ブログ [Additional Guidance Regarding OMI Vulnerabilities within Azure VM Management Extensions – Microsoft Security Response Center](https://msrc-blog.microsoft.com/2021/09/16/additional-guidance-regarding-omi-vulnerabilities-within-azure-vm-management-extensions/) を参照してください。

<!-- /wp:paragraph -->

<!-- wp:separator -->

---

<!-- /wp:separator -->

<!-- wp:paragraph -->

2021 年 9 月 15 日 (日本時間)、マイクロソフトは以下のソフトウェアのセキュリティ更新プログラムを公開しました。お客様はできるだけ早期に、今月公開のセキュリティ更新プログラムを適用するようお願いします。

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

• Azure Open Management Infrastructure  
• Azure Sphere  
• Dynamics Business Central Control  
• Microsoft Accessibility Insights for Android  
• Microsoft Edge (Chromium-based)  
• Microsoft Edge for Android  
• Microsoft MPEG-2 Video Extension  
• Microsoft Office  
• Microsoft Office Access  
• Microsoft Office Excel  
• Microsoft Office SharePoint  
• Microsoft Office Visio  
• Microsoft Office Word  
• Microsoft Windows Codecs Library  
• Microsoft Windows DNS  
• Visual Studio  
• Windows Ancillary Function Driver for WinSock  
• Windows Authenticode  
• Windows Bind Filter Driver  
• Windows BitLocker  
• Windows Common Log File System Driver  
• Windows Event Tracing  
• Windows Installer  
• Windows Kernel  
• Windows Key Storage Provider  
• Windows MSHTML Platform  
• Windows Print Spooler Components  
• Windows Redirected Drive Buffering  
• Windows Scripting  
• Windows SMB  
• Windows Storage  
• Windows Subsystem for Linux  
• Windows TDX.sys  
• Windows Update  
• Windows Win32K  
• Windows WLAN Auto Config Service  
• Windows WLAN Service

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

新規セキュリティ更新プログラムを公開すると共に、既存の脆弱性情報 3 件の更新を行いました。なお、今月の「悪意のあるソフトウェアの削除ツール」では、新たに対応を追加したファミリはありません。

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

**_■ セキュリティ更新プログラム、セキュリティ アドバイザリに関する主な注意点_\*\***\_\_\*\*

<!-- /wp:paragraph -->

<!-- wp:list -->

- 2021 年 9 月 7 日 (米国時間) に定例外で公開した MSHTML の脆弱性情報 [CVE-2021-40444](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-40444) に対応するセキュリティ更新プログラムを、9 月の定例リリースにて公開しています。この脆弱性はすでに悪用が確認されています。早急にセキュリティ更新プログラムを適用してください。
- 2021 年 8 月 11 日 (米国時間) に定例外で公開した Print Spooler の脆弱性情報 [CVE-2021-36958](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-36958)に対応するセキュリティ更新プログラムを公開しています。この脆弱性は、脆弱性の内容が一般に公開されています。早急にセキュリティ更新プログラムを適用してください。
- 2021 年 1 月の定例リリースで公開した脆弱性情報 [CVE-2021-1678](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-1678) に対する保護を強制する更新プログラムを 9 月の定例リリースにて公開しています。詳細は、サポート技術情報[KB4599464](https://support.microsoft.com/help/4599464) をご参照ください。

<!-- /wp:list -->

<!-- wp:paragraph -->

**_■ 2021 年 9 月のセキュリティ更新プログラム_**

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

2021 年 9 月 14 日（米国時間）、マイクロソフトは以下のマイクロソフト製品に影響するセキュリティ更新プログラムを公開しました。

<!-- /wp:paragraph -->

<!-- wp:table {"hasFixedLayout":true} -->

| **製品ファミ\*\***リ\*\*                                                                                                | **最大深刻度** | **最も大きな影響**           | **関連するサポート技術情報またはサポートの\*\*** Web \***\*ページ**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ----------------------------------------------------------------------------------------------------------------------- | -------------- | ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Windows 10 v21H1, v20H2, v2004, and v1909                                                                               | 緊急           | リモートでコードが実行される | Windows 10 v21H1, Windows 10 v20H2, Windows 10 v2004: [5005565](https://support.microsoft.com/help/5005565) Windows 10 v1909: [5005566](https://support.microsoft.com/help/5005566)                                                                                                                                                                                                                                                                                                                                                                                  |
| Windows Server 2022, Windows Server 2019, Windows Server 2016, and Server Core installations (2019, 2016, v20H2, v2004) | 緊急           | リモートでコードが実行される | Windows Server 2022, Windows Server, version 20H2, Windows Server, version 2004: [5005565](https://support.microsoft.com/help/5005565) Windows Server 2019: [5005568](https://support.microsoft.com/help/5005568) Windows Server 2016: [5005573](https://support.microsoft.com/help/5005573)                                                                                                                                                                                                                                                                         |
| Windows 8.1, Windows Server 2012 R2, Windows Server 2012                                                                | 緊急           | リモートでコードが実行される | Windows 8.1 and Windows Server 2012 R2 Monthly Rollup: [5005613](https://support.microsoft.com/help/5005613) Windows 8.1 and Windows Server 2012 R2 Security Only: [5005627](https://support.microsoft.com/help/5005627) Windows Server 2012 Monthly Rollup: [5005623](https://support.microsoft.com/help/5005623) Windows Server 2012 Security Only: [5005607](https://support.microsoft.com/help/5005607)                                                                                                                                                          |
| Microsoft Office 関連のソフトウェア                                                                                     | 重要           | リモートでコードが実行される | [4484103](https://support.microsoft.com/help/4484103), [4484108](https://support.microsoft.com/help/4484108), [5001958](https://support.microsoft.com/help/5001958), [5001997](https://support.microsoft.com/help/5001997), [5001999](https://support.microsoft.com/help/5001999), [5002003](https://support.microsoft.com/help/5002003), [5002005](https://support.microsoft.com/help/5002005), [5002007](https://support.microsoft.com/help/5002007), [5002009](https://support.microsoft.com/help/5002009), [5002014](https://support.microsoft.com/help/5002014) |
| Microsoft SharePoint 関連のソフトウェア                                                                                 | 重要           | なりすまし                   | [5002018](https://support.microsoft.com/help/5002018), [5002020](https://support.microsoft.com/help/5002020), [5002024](https://support.microsoft.com/help/5002024)                                                                                                                                                                                                                                                                                                                                                                                                  |
| Microsoft Visual Studio 関連のソフトウェア                                                                              | 重要           | リモートでコードが実行される | Visual Studio 関連ソフトウェアのセキュリティ更新プログラムの詳細については、<https://docs.microsoft.com/visualstudio> とセキュリティ更新プログラム ガイド<https://msrc.microsoft.com/update-guide> を参照してください。                                                                                                                                                                                                                                                                                                                                              |
| Microsoft Dynamics 365 関連のソフトウェア                                                                               | 重要           | なりすまし                   | [5006075](https://support.microsoft.com/help/5006075) ,[5006076](https://support.microsoft.com/help/5006076)                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Microsoft Azure 関連のソフトウェア                                                                                      | 緊急           | リモートでコードが実行される | Azure 関連ソフトウェアのセキュリティ更新プログラムの詳細については、セキュリティ更新プログラム ガイド <https://msrc.microsoft.com/update-guide> を参照してください。                                                                                                                                                                                                                                                                                                                                                                                                 |

<!-- /wp:table -->

<!-- wp:paragraph -->

最新の情報は、[セキュリティ更新プログラム ガイド](https://portal.msrc.microsoft.com/ja-jp/security-guidance) を確認してください。セキュリティ更新プログラムガイドでは、セキュリティの脆弱性および更新プログラムの情報を、CVE、KB 番号、製品、またはリリース日別に並べ替えたりフィルターをかけたりすることができます。各月のセキュリティ更新プログラムを絞り込むには、日付範囲に絞り込む月の第 2 火曜日を指定して検索してください。

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

なお、セキュリティ更新プログラム ガイド API を活用して、自社に特化したカスタム レポートを作成することができます。API の活用方法を紹介する 6 つのビデオ ([API の情報 (GitHub)](https://aka.ms/SUGAPIdemo1_J)、[API へのアクセス](https://aka.ms/SUGAPIdemo2_J)、[HTML ファイルの出力](https://aka.ms/SUGAPIdemo3_J)、[Excel へのエクスポート](https://aka.ms/SUGAPIdemo4_J)、[CVE リストの取得](https://aka.ms/SUGAPIdemo5_J)、[KB リストの取得](https://aka.ms/SUGAPIdemo6_J)) を公開していますので、是非ご活用ください。

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

**_■ 既存の脆弱性情報の更新_\*\***\_\_\*\*

<!-- /wp:paragraph -->

<!-- wp:table -->

|                                                                                        |                                                  |                                                                                                           |
| -------------------------------------------------------------------------------------- | ------------------------------------------------ | --------------------------------------------------------------------------------------------------------- |
| CVE 番号                                                                               | タイトル                                         | 更新内容                                                                                                  |
| [CVE-2021-36958](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-36958) | Windows Print Spooler リモートコード実行の脆弱性 | セキュリティ更新プログラムを公開しました                                                                  |
| [CVE-2021-40444](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-40444) | Microsoft MSHTML リモートコード実行の脆弱性      | セキュリティ更新プログラムを公開しました                                                                  |
| [CVE-2021-1678](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-1678)   | Windows Print Spooler リモートコード実行の脆弱性 | セキュリティ更新プログラムを公開しました。 また、下記の情報を更新しました。 ・脆弱性タイトル ・FAQ ・謝辞 |

<!-- /wp:table -->

<!-- wp:paragraph -->

最新のサービス スタック更新プログラム (SSU) は、[アドバイザリ ADV990001](https://msrc.microsoft.com/update-guide/vulnerability/ADV990001) にてご確認ください。

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Microsoft Edge (Chromium-based) のセキュリティ情報は、公開のスケジュールが月例のリリースとは異なりますので、セキュリティ更新プログラム ガイド上で製品にて Microsoft Edge (Chromium-based) を選択してご確認ください。[Edge のセキュリティ リリース情報](https://docs.microsoft.com/deployedge/microsoft-edge-relnotes-security)にてご確認ください。

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

次回のセキュリティ更新プログラムのリリースは、10 月 13 日 (日本時間) を予定しています。詳しくは、[年間スケジュール](https://aka.ms/relschedule)を参照してください。

<!-- /wp:paragraph -->

<!-- wp:separator {"className":"is-style-default"} -->

---

<!-- /wp:separator -->

<!-- wp:separator -->

---

<!-- /wp:separator -->
