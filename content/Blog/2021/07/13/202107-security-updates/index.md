---
title: '2021 年 7 月のセキュリティ更新プログラム (月例)'
description: ""
published: 2021-07-13
type: posts
redirect_from:
            - https://msrc-blog.microsoft.com/2021/07/13/202107-security-updates/
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
2021 年 7 月 14 日 (日本時間)、マイクロソフトは以下のソフトウェアのセキュリティ更新プログラムを公開しました。

- .NET Core & Visual Studio
- 3D Viewer
- Microsoft DWM Core Library
- Microsoft Edge (Chromium-based)
- Microsoft Intune
- Microsoft Office
- Microsoft Office Excel
- Microsoft Office Outlook
- Microsoft Office SharePoint
- Microsoft Scripting Engine
- Microsoft Windows Codecs Library
- Paint 3D
- Role: Hyper-V
- Visual Studio Code - Kubernetes Tools
- Windows Bind Filter Driver
- Windows Common Log File System Driver
- Windows Cryptographic Services
- Windows DCOM Server
- Windows Defender
- Windows Drivers
- Windows Event Logging Service
- Windows Filter Manager
- Windows HTML Platform
- Windows Installer
- Windows Kerberos
- Windows Kernel
- Windows Kernel-Mode Drivers
- Windows Network File System
- Windows NTFS
- Windows NTLM
- Windows Print Spooler Components
- Windows Remote Desktop
- Windows TCP/IP

注: Windows Print Spooler の脆弱性 [CVE-2021-34527](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-34527) のセキュリティ更新プログラムは、7 月 7 日 (日本時間) に定例外で公開されました。この定例外のセキュリティ更新プログラムは 2021 年 7 月の定例リリースにて公開した累積的な更新プログラムにも含まれています。詳しくは「[Windows Print Spooler の脆弱性情報 (CVE-2021-34527) に対するセキュリティ更新プログラムの定例外での公開](https://msrc-blog.microsoft.com/2021/07/06/20210707_windowsprintspooleroob/)」をご参照ください。

新規セキュリティ更新プログラムを公開すると共に、既存のセキュリティアドバイザリ 1 件と既存の脆弱性情報 1 件の更新を行いました。なお、今月の「悪意のあるソフトウェアの削除ツール」では、新たに Win32/Caspetlod、Win32/CobaltStrike、Win32/CobaltStrikeLoader、Win32/TurtleLoader、Win32/TurtleSimple に対する定義ファイルが追加されています。

**_■ セキュリティ更新プログラム、セキュリティ アドバイザリに関する主な注意点_**

- 2020 年 11 月の定例リリースにて公開した Kerberos KDC Security の脆弱性情報 [CVE-2020-17049](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2020-17049) への対応として、2021 年 7 月のセキュリティ更新プログラムを適用後は、セキュリティ修正に準拠していない Kerberos チケットは拒否する動作になります (強制モード フェーズ)。なお、PerformTicketSignature のレジストリで設定している値に関わらず、2021 年 7 月のセキュリティ更新プログラムを適用後は、セキュリティ修正に準拠していない Kerberos チケットは拒否する動作になります。この変更に関する詳細は、「[Kerberos KDC の脆弱性 (CVE-2020-17049) に対応するためのガイダンス](https://msrc-blog.microsoft.com/2020/11/19/20201120_cve-2020-17049/)」をご参照ください。
- 2021 年 7 月の定例リリースに公開された Windows 向けのセキュリティ更新プログラムには、Adobe Flash Player の削除に関する更新プログラム ([KB4577586](https://support.microsoft.com/ja-jp/help/4577586)) が含まれています。詳しくは、「[Update on Adobe Flash Player End of Support](https://blogs.windows.com/msedgedev/2020/09/04/update-adobe-flash-end-support/)」 (英語情報) をご参照ください。
- 2021 年 6 月の定例リリースに公開された Windows 10 version 2004 以降のセキュリティ更新プログラムを適用後に確認されていた Xbox Game Pass ゲームをインストール、または起動するときに確認されていた問題は、6 月 11 日に修正プログラムが定例外で公開され、今月のセキュリティ更新プログラムにも含まれています。詳細は、サポート技術情報 [5004327](https://support.microsoft.com/ja-jp/help/5004327) をご参照ください。
- 2021 年 6 月の定例リリースに公開された Windows 10 version 1909 以降のセキュリティ更新プログラムを適用後に確認されていた、タスク バーの \[ニュースと関心] に関する問題は、今月のセキュリティ更新プログラムにて修正されています。
- 2021 年 7 月の定例リリースに公開された Microsoft Exchange Server の脆弱性情報 [CVE-2021-34470](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-34470) に対するセキュリティ修正は、6 月 30 日 (日本時間) に公開された累積的な更新プログラム (CU) に含まれています。CU のリリースに関する詳細は「[Released: June 2021 Quarterly Exchange Updates](https://techcommunity.microsoft.com/t5/exchange-team-blog/released-june-2021-quarterly-exchange-updates/ba-p/2459826)」 (英語情報) をご参照ください。
- 2021 年 7 月の定例リリースに公開された Microsoft Exchange Server の脆弱性情報 [CVE-2021-33766](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-33766)、[CVE-2021-34473](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-34473)、[CVE-2021-34523](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-34523) に対するセキュリティ更新プログラムは、4 月のセキュリティ更新プログラム ([5001779](https://support.microsoft.com/ja-jp/help/5001779)) として公開されました。
- UAC が有効になっているサーバー上で、Exchange 向けの更新プログラムを標準モード (管理者権限ではなく) で手動でインストールした際に、いくつかのファイルが正しく更新されず、OWA や ECP が正常に動作しない可能性があります。管理者権限で更新プログラムをインストールすることをお勧めします。詳細は、サポート技術情報 [5004780](https://support.microsoft.com/ja-jp/help/5004780) ならびに [5004779](https://support.microsoft.com/ja-jp/help/5004779)、[5004778](https://support.microsoft.com/ja-jp/help/5004778) をご参照ください。

お客様はできるだけ早期に、今月公開のセキュリティ更新プログラムを適用するようお願いします。

**_■ _\*\***_2021_\***\*_ 年 _\*\***_7_\***\*_ 月のセキュリティ更新プログラム_**

セキュリティの脆弱性および更新プログラムの情報を、CVE、KB 番号、製品、またはリリース日別に並べ替えたりフィルターをかけたりすることができます。

[セキュリティ更新プログラム ガイド](https://portal.msrc.microsoft.com/ja-jp/security-guidance)

各月のセキュリティ更新プログラムを絞り込むには、日付範囲に絞り込む月の第 2 火曜日を指定して検索してください。

なお、セキュリティ更新プログラム ガイド API を活用して、自社に特化したカスタム レポートを作成することができます。API の活用方法を紹介する 6 つのビデオ ([API の情報 (GitHub)](https://aka.ms/SUGAPIdemo1_J)、[API へのアクセス](https://aka.ms/SUGAPIdemo2_J)、[HTML ファイルの出力](https://aka.ms/SUGAPIdemo3_J)、[Excel へのエクスポート](https://aka.ms/SUGAPIdemo4_J)、[CVE リストの取得](https://aka.ms/SUGAPIdemo5_J)、[KB リストの取得](https://aka.ms/SUGAPIdemo6_J)) を公開していますので、是非ご活用ください。

マイクロソフトは新たに確認した脆弱性について、下記の新しいセキュリティ更新プログラムを公開しました。

|                                                                                                                                                                           |                |                              |                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- | ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **製品ファミリ**                                                                                                                                                          | **最大深刻度** | **最も大きな影響**           | **関連するサポート技術情報またはサポートの\*\*** Web \***\*ページ**                                                                                                                                                                                                                                                                                                                                                                                                    |
| **Windows 10 v21H1\*\***、\***\*v20H2\*\***、\***\*v2004\*\***、\***\*v1909**                                                                                             | **緊急**       | リモートでコードが実行される | Windows 10 v21H1、Windows 10 v20H2、Windows 10 v2004: [_5004237_](https://support.microsoft.com/ja-jp/help/5004237)Windows 10 v1909: [_5004245_](https://support.microsoft.com/ja-jp/help/5004245)                                                                                                                                                                                                                                                                     |
| **Windows Server 2019\*\***、\***\*Windows Server 2016\*\***、\***\*Server Core \*\***インストール\***\* (2019\*\***、\***\*2016\*\***、\***\*v20H2\*\***、\***\*v2004)** | **緊急**       | リモートでコードが実行される | Windows Server Version 20H2、Windows Server Version 2004: [_5004237_](https://support.microsoft.com/ja-jp/help/5004237)Windows Server 2019: [_5004244_](https://support.microsoft.com/ja-jp/help/5004244)Windows Server 2016: [_5004238_](https://support.microsoft.com/ja-jp/help/5004238)                                                                                                                                                                            |
| **Windows 8.1\*\***、\***\*Windows Server 2012 R2\*\***、\***\*Windows Server 2012 (Internet Explorer 11 \*\***を含む\***\*)**                                            | **緊急**       | リモートでコードが実行される | Windows 8.1 および Windows Server 2012 R2 マンスリー ロールアップ: [_5004298_](https://support.microsoft.com/ja-jp/help/5004298)Windows 8.1 および Windows Server 2012 R2 セキュリティのみ: [_5004285_](https://support.microsoft.com/ja-jp/help/5004285)Windows Server 2012 マンスリー ロールアップ: [_5004294_](https://support.microsoft.com/ja-jp/help/5004294)Windows Server 2012 セキュリティのみ: [_5004302_](https://support.microsoft.com/ja-jp/help/5004302) |
| **Internet Explorer**                                                                                                                                                     | **緊急**       | リモートでコードが実行される | IE の累積的な更新プログラム: [_5004233_](https://support.microsoft.com/ja-jp/help/5004233)                                                                                                                                                                                                                                                                                                                                                                             |
| **Microsoft Office \*\***関連のソフトウェア\*\*                                                                                                                           | **重要**       | リモートでコードが実行される | [_5001949_](https://support.microsoft.com/ja-jp/help/5001949)、 [_5001973_](https://support.microsoft.com/ja-jp/help/5001973)、 [_5001977_](https://support.microsoft.com/ja-jp/help/5001977)、 [_5001979_](https://support.microsoft.com/ja-jp/help/5001979)、 [_5001983_](https://support.microsoft.com/ja-jp/help/5001983)、 [_5001986_](https://support.microsoft.com/ja-jp/help/5001986)、 [_5001993_](https://support.microsoft.com/ja-jp/help/5001993)          |
| **Microsoft SharePoint \*\***関連のソフトウェア\*\*                                                                                                                       | **重要**       | リモートでコードが実行される | [_5001975_](https://support.microsoft.com/ja-jp/help/5001975)、 [_5001976_](https://support.microsoft.com/ja-jp/help/5001976)、 [_5001981_](https://support.microsoft.com/ja-jp/help/5001981)、 [_5001984_](https://support.microsoft.com/ja-jp/help/5001984)、 [_5001992_](https://support.microsoft.com/ja-jp/help/5001992)、 [_5001996_](https://support.microsoft.com/ja-jp/help/5001996)                                                                          |
| **Microsoft Exchange Server**                                                                                                                                             | **緊急**       | リモートでコードが実行される | [_5004778_](https://support.microsoft.com/ja-jp/help/5004778)、 [_5004779_](https://support.microsoft.com/ja-jp/help/5004779)、 [_5004780_](https://support.microsoft.com/ja-jp/help/5004780)                                                                                                                                                                                                                                                                          |
| **Power BI Report Server**                                                                                                                                                | **重要**       | リモートでコードが実行される | Power BI Report Server のセキュリティ更新プログラムの詳細については、セキュリティ更新プログラム ガイドを参照してください。 [_https://msrc.microsoft.com/update-guide_](https://msrc.microsoft.com/update-guide)                                                                                                                                                                                                                                                        |
| **Microsoft Dynamics 365 \*\***関連のソフトウェア\*\*                                                                                                                     | **緊急**       | リモートでコードが実行される | _[5004715](https://support.microsoft.com/ja-jp/help/5004715)_、 _[5004716](https://support.microsoft.com/ja-jp/help/5004716)_、 _[5004717](https://support.microsoft.com/ja-jp/help/5004717)_                                                                                                                                                                                                                                                                          |
| **Microsoft .NET \*\***関連のソフトウェア\*\*                                                                                                                             | **重要**       | 特権の昇格                   | .NET 関連ソフトウェアのセキュリティ更新プログラムの詳細については、セキュリティ更新プログラム ガイドを参照してください。 [_https://msrc.microsoft.com/update-guide_](https://msrc.microsoft.com/update-guide)                                                                                                                                                                                                                                                          |
| **Microsoft Visual Studio \*\***関連のソフトウェア\*\*                                                                                                                    | **重要**       | リモートでコードが実行される | Visual Studio 関連ソフトウェアのセキュリティ更新プログラムの詳細については、 [_https://docs.microsoft.com/ja-jp/visualstudio_](https://docs.microsoft.com/ja-jp/visualstudio) とセキュリティ更新プログラム ガイド [_https://msrc.microsoft.com/update-guide_](https://msrc.microsoft.com/update-guide)                                                                                                                                                                 |
| **Microsoft Malware Protection Engine**                                                                                                                                   | **緊急**       | リモートでコードが実行される | Microsoft Malware Protection Engine のセキュリティ更新プログラムの詳細については、セキュリティ更新プログラム ガイドを参照してください。 [_https://msrc.microsoft.com/update-guide_](https://msrc.microsoft.com/update-guide)                                                                                                                                                                                                                                           |

**_■ 既存のセキュリティアドバイザリと脆弱性情報の更新_**

- [ADV200011](https://msrc.microsoft.com/update-guide/vulnerability/ADV200011) (GRUB) を更新しました。
- [CVE-2020-17049](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2020-17049) (Kerberos KDC Security) を更新しました。

最新のサービス スタック更新プログラム (SSU) は、[アドバイザリ ADV990001](https://msrc.microsoft.com/update-guide/vulnerability/ADV990001) にてご確認ください。

Microsoft Edge (Chromium-based) のセキュリティ情報は、公開のスケジュールが月例のリリースとは異なりますので、セキュリティ更新プログラム ガイド上で製品にて Microsoft Edge (Chromium-based) を選択してご確認ください。[Edge のセキュリティ リリース情報](https://docs.microsoft.com/deployedge/microsoft-edge-relnotes-security)にてご確認ください。

次回のセキュリティ更新プログラムのリリースは、8 月 11 日 (日本時間) を予定しています。詳しくは、[年間スケジュール](https://aka.ms/relschedule)を参照してください。
