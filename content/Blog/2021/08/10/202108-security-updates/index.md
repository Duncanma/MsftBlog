---
title: '2021 年 8 月のセキュリティ更新プログラム (月例)'
description: ""
published: 2021-08-10
type: posts
redirect_from:
            - https://msrc-blog.microsoft.com/2021/08/10/202108-security-updates/
authors:
- jsecteam
categories:
- Japan Security Team
tags:
- アドバイザリ
- セキュリティ情報
- セキュリティ更新
- 脆弱性
hero: ../../../defaultHero.jpg
---
2021 年 8 月 11 日 (日本時間)、マイクロソフトは以下のソフトウェアのセキュリティ更新プログラムを公開しました。

- .NET Core & Visual Studio
- ASP .NET
- Azure
- Azure Sphere
- Microsoft Azure Active Directory Connect
- Microsoft Dynamics
- Microsoft Graphics Component
- Microsoft Office
- Microsoft Office SharePoint
- Microsoft Office Word
- Microsoft Scripting Engine
- Microsoft Windows Codecs Library
- Remote Desktop Client
- Windows Bluetooth Service
- Windows Cryptographic Services
- Windows Defender
- Windows Event Tracing
- Windows Media
- Windows MSHTML Platform
- Windows NTLM
- Windows Print Spooler Components
- Windows Services for NFS ONCRPC XDR Driver
- Windows Storage Spaces Controller
- Windows TCP/IP
- Windows Update
- Windows Update Assistant
- Windows User Profile Service

新規セキュリティ更新プログラムを公開すると共に、既存の脆弱性情報 3 件の更新を行いました。なお、今月の「悪意のあるソフトウェアの削除ツール」では、新たに対応を追加したファミリはありません。

**_■ セキュリティ更新プログラム、セキュリティ アドバイザリに関する主な注意点_**

- 2021 年 7 月 15 日 (米国時間) に定例外で公開された Windows Print Spooler の脆弱性情報 [CVE-2021-34481](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-34481) に対応するセキュリティ更新プログラムを、8 月の定例リリースにて公開しています。また 8 月の定例リリースのセキュリティ更新プログラムには、Point and Print の既定でのインストールやアップデートの動作に変更が入っています。詳細は「[Point and Print の既定動作の変更](https://msrc-blog.microsoft.com/2021/08/10/20210811_pointandprint/)」をご確認ください。
- 2021 年 7 月 20 日 (米国時間) に定例外で公開された Windows の脆弱性情報 に対応する Windows 10 向けのセキュリティ更新プログラムを、8 月の定例リリースにて公開しています。また本脆弱性に完全に対応するにはボリュームシャドウコピーを削除する必要があります。この手順の詳細はサポート技術情報 [5005357](https://support.microsoft.com/help/5005357) をご参照ください。
- 2021 年 7 月 23 日 (米国時間) に定例外で公開された Active Directory Certificate Services のセキュリティアドバイザリ [ADV210003](https://msrc.microsoft.com/update-guide/vulnerability/ADV210003) に関連して、8 月の定例リリースにて Windows LSA の脆弱性情報 [CVE-2021-36942](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-36942) を公開し、対応するセキュリティ更新プログラムを公開しています。また追加での対応手順が必要となりますので、詳細はサポート技術情報 [5005413](https://support.microsoft.com/ja-jp/help/5005413) をご参照ください。
- 2021 年 7 月の定例リリースに公開された Windows のセキュリティ更新プログラムを適用後に確認されていた、スマートカード認証を使ったデバイスで印刷やスキャンが失敗する問題に対する緩和策が [5005408](https://support.microsoft.com/ja-jp/help/5005408) にて公開されており、8 月の月例の累積的なセキュリティ更新プログラムにも含まれています。この緩和策は 2022 年 2 月に削除される予定です。詳細は、サポート技術情報 [5005408](https://support.microsoft.com/ja-jp/help/5005408) をご参照ください。
- 2021 年 7 月の定例リリースに公開された Exchange の脆弱性情報 [CVE-2021-34470](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-34470) に対応するためには、Active Directory のスキーマ拡張の更新が必要となります。過去に Exchange を実行していた、もしくは Exchange 2013 よりも古いバージョンの Exchange Server のみをまだ利用している場合にも対応が必要となります。詳細は [Exchange Team Blog](https://techcommunity.microsoft.com/t5/exchange-team-blog/how-to-update-ad-schema-to-address-cve-2021-34470-if-exchange-is/ba-p/2617083) (英語情報) をご参照ください。

お客様はできるだけ早期に、今月公開のセキュリティ更新プログラムを適用するようお願いします。

**_■ _\*\***_2021_\***\*_ 年 _\*\***_8_\***\*_ 月のセキュリティ更新プログラム_**

セキュリティの脆弱性および更新プログラムの情報を、CVE、KB 番号、製品、またはリリース日別に並べ替えたりフィルターをかけたりすることができます。

[セキュリティ更新プログラム ガイド](https://portal.msrc.microsoft.com/ja-jp/security-guidance)

各月のセキュリティ更新プログラムを絞り込むには、日付範囲に絞り込む月の第 2 火曜日を指定して検索してください。

なお、セキュリティ更新プログラム ガイド API を活用して、自社に特化したカスタム レポートを作成することができます。API の活用方法を紹介する 6 つのビデオ ([API の情報 (GitHub)](https://aka.ms/SUGAPIdemo1_J)、[API へのアクセス](https://aka.ms/SUGAPIdemo2_J)、[HTML ファイルの出力](https://aka.ms/SUGAPIdemo3_J)、[Excel へのエクスポート](https://aka.ms/SUGAPIdemo4_J)、[CVE リストの取得](https://aka.ms/SUGAPIdemo5_J)、[KB リストの取得](https://aka.ms/SUGAPIdemo6_J)) を公開していますので、是非ご活用ください。

---

マイクロソフトは新たに確認した脆弱性について、下記の新しいセキュリティ更新プログラムを公開しました。

|                                                                                                                                                                           |                |                              |                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- | ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **製品ファミリ**                                                                                                                                                          | **最大深刻度** | **最も大きな影響**           | **関連するサポート技術情報またはサポートの\*\*** Web \***\*ページ**                                                                                                                                                                                                                                                                                                                                                                                                    |
| **Windows 10 v21H1\*\***、\***\*v20H2\*\***、\***\*v2004\*\***、\***\*v1909**                                                                                             | **緊急**       | リモートでコードが実行される | Windows 10 v21H1、Windows 10 v20H2、Windows 10 v2004: [_5005033_](https://support.microsoft.com/ja-jp/help/5005033)Windows 10 v1909: [_5005031_](https://support.microsoft.com/ja-jp/help/5005031)                                                                                                                                                                                                                                                                     |
| **Windows Server 2019\*\***、\***\*Windows Server 2016\*\***、\***\*Server Core \*\***インストール\***\* (2019\*\***、\***\*2016\*\***、\***\*v20H2\*\***、\***\*v2004)** | **緊急**       | リモートでコードが実行される | Windows Server Version 20H2、Windows Server Version 2004: [_5005033_](https://support.microsoft.com/ja-jp/help/5005033)Windows Server 2019: [_5005030_](https://support.microsoft.com/ja-jp/help/5005030)Windows Server 2016: [_5005043_](https://support.microsoft.com/ja-jp/help/5005043)                                                                                                                                                                            |
| **Windows 8.1\*\***、\***\*Windows Server 2012 R2\*\***、および\***\* Windows Server 2012**                                                                               | **緊急**       | リモートでコードが実行される | Windows 8.1 および Windows Server 2012 R2 マンスリー ロールアップ: [_5005076_](https://support.microsoft.com/ja-jp/help/5005076)Windows 8.1 および Windows Server 2012 R2 セキュリティのみ: [_5005106_](https://support.microsoft.com/ja-jp/help/5005106)Windows Server 2012 マンスリー ロールアップ: [_5005099_](https://support.microsoft.com/ja-jp/help/5005099)Windows Server 2012 セキュリティのみ: [_5005094_](https://support.microsoft.com/ja-jp/help/5005094) |
| **Internet Explorer**                                                                                                                                                     | **緊急**       | リモートでコードが実行される | Internet Explorer 用の累積的なセキュリティ更新プログラム: [_5005036_](https://support.microsoft.com/ja-jp/help/5005036)                                                                                                                                                                                                                                                                                                                                                |
| **Microsoft Office \*\***関連のソフトウェア\*\*                                                                                                                           | **重要**       | リモートでコードが実行される | Office 関連ソフトウェアのセキュリティ更新プログラムの詳細については、セキュリティ更新プログラム ガイドを参照してください: [_https://msrc.microsoft.com/update-guide_](https://msrc.microsoft.com/update-guide)                                                                                                                                                                                                                                                         |
| **Microsoft SharePoint \*\***関連のソフトウェア\*\*                                                                                                                       | **重要**       | なりすまし                   | [_4011600_](https://support.microsoft.com/ja-jp/help/4011600)、 [_5002000_](https://support.microsoft.com/ja-jp/help/5002000)、 [_5002002_](https://support.microsoft.com/ja-jp/help/5002002)                                                                                                                                                                                                                                                                          |
| **Microsoft Visual Studio \*\***関連のソフトウェア\*\*                                                                                                                    | **重要**       | 情報漏えい                   | Visual Studio 関連ソフトウェアのセキュリティ更新プログラムの詳細については、 [_https://docs.microsoft.com/ja-jp/visualstudio_](https://docs.microsoft.com/ja-jp/visualstudio) とセキュリティ更新プログラム ガイド [_https://msrc.microsoft.com/update-guide_](https://msrc.microsoft.com/update-guide)                                                                                                                                                                 |
| **Microsoft Dynamics \*\***関連のソフトウェア\*\*                                                                                                                         | **重要**       | リモートでコードが実行される | Dynamics 関連ソフトウェアのセキュリティ更新プログラムの詳細については、セキュリティ更新プログラム ガイド [_https://msrc.microsoft.com/update-guide_](https://msrc.microsoft.com/update-guide)                                                                                                                                                                                                                                                                          |
| **Microsoft .NET \*\***関連のソフトウェア\*\*                                                                                                                             | **重要**       | 情報漏えい                   | .NET 関連ソフトウェアのセキュリティ更新プログラムの詳細については、セキュリティ更新プログラム ガイドを参照してください。 [_https://msrc.microsoft.com/update-guide_](https://msrc.microsoft.com/update-guide)                                                                                                                                                                                                                                                          |
| **Microsoft Azure \*\***関連のソフトウェア\*\*                                                                                                                            | **重要**       | 特権の昇格                   | Azure 関連ソフトウェアのセキュリティ更新プログラムの詳細については、セキュリティ更新プログラム ガイド [_https://msrc.microsoft.com/update-guide_](https://msrc.microsoft.com/update-guide)                                                                                                                                                                                                                                                                             |
| **Microsoft Malware Protection Engine**                                                                                                                                   | **重要**       | 特権の昇格                   | Microsoft Malware Protection Engine のセキュリティ更新プログラムの詳細については、セキュリティ更新プログラム ガイドを参照してください。 [_https://msrc.microsoft.com/update-guide_](https://msrc.microsoft.com/update-guide)                                                                                                                                                                                                                                           |

**_■ 既存の脆弱性情報の更新_**

- [CVE-2021-34481](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-34481) (Windows Print Spooler) を更新しました。
- [CVE-2021-36934](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-36934) (Windows) を更新しました。
- [CVE-2020-0765](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2020-0765) (Remote Desktop Connection Manager) を更新しました。

最新のサービス スタック更新プログラム (SSU) は、[アドバイザリ ADV990001](https://msrc.microsoft.com/update-guide/vulnerability/ADV990001) にてご確認ください。

Microsoft Edge (Chromium-based) のセキュリティ情報は、公開のスケジュールが月例のリリースとは異なりますので、セキュリティ更新プログラム ガイド上で製品にて Microsoft Edge (Chromium-based) を選択してご確認ください。[Edge のセキュリティ リリース情報](https://docs.microsoft.com/deployedge/microsoft-edge-relnotes-security)にてご確認ください。

次回のセキュリティ更新プログラムのリリースは、9 月 15 日 (日本時間) を予定しています。詳しくは、[年間スケジュール](https://aka.ms/relschedule)を参照してください。
