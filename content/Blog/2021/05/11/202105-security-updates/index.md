---
title: '2021 年 5 月のセキュリティ更新プログラム (月例)'
description: ""
published: 2021-05-11
type: posts
redirect_from:
            - https://msrc-blog.microsoft.com/2021/05/11/202105-security-updates/
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
2021 年 5 月 12 日 (日本時間)、マイクロソフトは以下のソフトウェアのセキュリティ更新プログラムを公開しました。

- .NET Core & Visual Studio
- HTTP.sys
- Internet Explorer
- Microsoft Accessibility Insights for Web
- Microsoft Bluetooth Driver
- Microsoft Dynamics Finance & Operations
- Microsoft Exchange Server
- Microsoft Graphics Component
- Microsoft Office
- Microsoft Office Access
- Microsoft Office Excel
- Microsoft Office SharePoint
- Microsoft Office Word
- Microsoft Windows Codecs Library
- Microsoft Windows IrDA
- Open Source Software
- Role: Hyper-V
- Skype for Business and Microsoft Lync
- Visual Studio
- Visual Studio Code
- Windows Container Isolation FS Filter Driver
- Windows Container Manager Service
- Windows Cryptographic Services
- Windows CSC Service
- Windows Desktop Bridge
- Windows OLE
- Windows Projected File System FS Filter
- Windows RDP Client
- Windows SMB
- Windows SSDP Service
- Windows WalletService
- Windows Wireless Networking

新規セキュリティ更新プログラムを公開しました。

**_■ セキュリティ更新プログラム、セキュリティ アドバイザリに関する主な注意点_**

- 2021 年 4 月の定例リリースに公開された Windows 10 1909 のセキュリティ更新プログラムを適用後に確認されていた、Visual Basic 6 などのアプリケーションでスクロールバーが表示されなくなる問題は、5 月の月例のセキュリティ更新プログラムにて修正されています。

- 2021 年 5 月の定例リリースにて公開された Microsoft Access の脆弱性情報 [CVE-2021-28455](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-28455) に対応するためには、セキュリティ更新プログラムを適用後に、リモートデータベースにアクセスするクエリ実行をブロックするようレジストリを追加する必要があります。詳細はサポート技術情報 [5002984](https://support.microsoft.com/ja-jp/help/5002984) をご参照ください。

- 2021 年 5 月 9 日 (米国時間) より、マイクロソフトのサービスは SHA-2 アルゴリズムを利用するように変更されています。詳細はサポート技術情報 [5003341](https://support.microsoft.com/ja-jp/help/5003341) をご参照ください。

- 2021 年 5 月 11 日 (米国時間) を持ちまして、下記の製品のサポートが終了となります。2021 年 5 月の定例リリースで最新のセキュリティ更新プログラムを公開しています。

  - Windows 10, version 1803 (Enterprise, Education, IoT Enterprise)
  - Windows 10, version 1809 (Enterprise, Education, IoT Enterprise)
  - Windows 10, version 1909 (Home, Pro, Pro Education, Pro for Workstations)
  - Windows Server, version 1909 (Datacenter, Standard)

- UAC が有効になっているサーバー上で、Exchange 向けの更新プログラムを標準モード (管理者権限ではなく) で手動でインストールした際に、いくつかのファイルが正しく更新されず、OWA や ECP が正常に動作しない可能性があります。管理者権限で更新プログラムをインストールすることをお勧めします。詳細は、サポート技術情報 [5003435](https://support.microsoft.com/ja-jp/help/5003435) をご参照ください。

お客様はできるだけ早期に、今月公開のセキュリティ更新プログラムを適用するようお願いします。

**_■ _\*\***_2021_\***\*_ 年 _\*\***_5_\***\*_ 月のセキュリティ更新プログラム_**

セキュリティの脆弱性および更新プログラムの情報を、CVE、KB 番号、製品、またはリリース日別に並べ替えたりフィルターをかけたりすることができます。

[セキュリティ更新プログラム ガイド](https://portal.msrc.microsoft.com/ja-jp/security-guidance)

各月のセキュリティ更新プログラムを絞り込むには、日付範囲に絞り込む月の第 2 火曜日を指定して検索してください。

なお、セキュリティ更新プログラム ガイド API を活用して、自社に特化したカスタム レポートを作成することができます。API の活用方法を紹介する 6 つのビデオ ([API の情報 (GitHub)](https://aka.ms/SUGAPIdemo1_J)、[API へのアクセス](https://aka.ms/SUGAPIdemo2_J)、[HTML ファイルの出力](https://aka.ms/SUGAPIdemo3_J)、[Excel へのエクスポート](https://aka.ms/SUGAPIdemo4_J)、[CVE リストの取得](https://aka.ms/SUGAPIdemo5_J)、[KB リストの取得](https://aka.ms/SUGAPIdemo6_J)) を公開していますので、是非ご活用ください。

---

マイクロソフトは新たに確認した脆弱性について、下記の新しいセキュリティ更新プログラムを公開しました。

|                                                                                                                                                                                              |                |                              |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **製品ファミリ**                                                                                                                                                                             | **最大深刻度** | **最も大きな影響**           | **関連するサポート技術情報またはサポートの\*\*** Web \***\*ページ**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| **Windows 10 v20H2\*\***、\***\*v2004\*\***、\***\*v1909\*\***、\***\*v1809\*\***、\***\*v1803**                                                                                             | **緊急**       | リモートでコードが実行される | Windows 10 v2004 および Windows 10 v20H2: [_5003173_](https://support.microsoft.com/ja-jp/help/5003173)Windows 10 v1909: [_5003169_](https://support.microsoft.com/ja-jp/help/5003169)Windows 10 v1809: [_5003171_](https://support.microsoft.com/ja-jp/help/5003171)Windows 10 v1803: [_5003174_](https://support.microsoft.com/ja-jp/help/5003174)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| **Windows Server 2019\*\***、\***\*Windows Server 2016\*\***、\***\*Server Core \*\***インストール\***\* (2019\*\***、\***\*2016\*\***、\***\*v20H2\*\***、\***\*v2004\*\***、\***\*v1909)** | **緊急**       | リモートでコードが実行される | Windows Server 2019: [_5003171_](https://support.microsoft.com/ja-jp/help/5003171)Windows Server 2016: [_5003197_](https://support.microsoft.com/ja-jp/help/5003197)Windows Server v2004 および Windows Server v20H2: [_5003173_](https://support.microsoft.com/ja-jp/help/5003173)Windows Server v1909: [_5003169_](https://support.microsoft.com/ja-jp/help/5003169)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| **Windows 8.1\*\***、\***\*Windows Server 2012 R2\*\***、および\***\* Windows Server 2012**                                                                                                  | **緊急**       | リモートでコードが実行される | Windows 8.1 および Windows Server 2012 R2 マンスリー ロールアップ: [_5003209_](https://support.microsoft.com/ja-jp/help/5003209)Windows 8.1 および Windows Server 2012 R2 セキュリティのみ: [_5003220_](https://support.microsoft.com/ja-jp/help/5003220)Windows Server 2012 マンスリー ロールアップ: [_5003208_](https://support.microsoft.com/ja-jp/help/5003208)Windows Server 2012 セキュリティのみ: [_5003203_](https://support.microsoft.com/ja-jp/help/5003203)                                                                                                                                                                                                                                                                                                                                                                                        |
| **Internet Explorer 11**                                                                                                                                                                     | **緊急**       | リモートでコードが実行される | Internet Explorer 11 の累積的な更新プログラム: [_5003165_](https://support.microsoft.com/ja-jp/help/5003165)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| **Microsoft Office \*\***関連のソフトウェア\*\*                                                                                                                                              | **重要**       | リモートでコードが実行される | [_4464542_](https://support.microsoft.com/ja-jp/help/4464542)、 [_4493197_](https://support.microsoft.com/ja-jp/help/4493197)、 [_4493206_](https://support.microsoft.com/ja-jp/help/4493206)、 [_5001914_](https://support.microsoft.com/ja-jp/help/5001914)、 [_5001918_](https://support.microsoft.com/ja-jp/help/5001918)、 [_5001919_](https://support.microsoft.com/ja-jp/help/5001919)、 [_5001920_](https://support.microsoft.com/ja-jp/help/5001920)、 [_5001923_](https://support.microsoft.com/ja-jp/help/5001923)、 [_5001925_](https://support.microsoft.com/ja-jp/help/5001925)、 [_5001927_](https://support.microsoft.com/ja-jp/help/5001927)、 [_5001928_](https://support.microsoft.com/ja-jp/help/5001928)、 [_5001931_](https://support.microsoft.com/ja-jp/help/5001931)、 [_5001936_](https://support.microsoft.com/ja-jp/help/5001936) |
| **Microsoft SharePoint \*\***関連のソフトウェア\*\*                                                                                                                                          | **重要**       | リモートでコードが実行される | [_5001916_](https://support.microsoft.com/ja-jp/help/5001916)、 [_5001917_](https://support.microsoft.com/ja-jp/help/5001917)、 [_5001935_](https://support.microsoft.com/ja-jp/help/5001935)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| **Microsoft Exchange Server**                                                                                                                                                                | **重要**       | リモートでコードが実行される | [_5003435_](https://support.microsoft.com/ja-jp/help/5003435)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| **Microsoft .NET \*\***関連のソフトウェア\*\*                                                                                                                                                | **重要**       | 特権の昇格                   | .NET 関連ソフトウェアのセキュリティ更新プログラムの詳細については、セキュリティ更新プログラム ガイド [_https://msrc.microsoft.com/update-guide_](https://msrc.microsoft.com/update-guide) を参照してください                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| **Microsoft Dynamics \*\***関連のソフトウェア\*\*                                                                                                                                            | **重要**       | なりすまし                   | Dynamics 関連ソフトウェアのセキュリティ更新プログラムの詳細については、セキュリティ更新プログラム ガイド [_https://msrc.microsoft.com/update-guide_](https://msrc.microsoft.com/update-guide) を参照してください                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| **Microsoft Visual Studio \*\***関連のソフトウェア\*\*                                                                                                                                       | **重要**       | リモートでコードが実行される | Visual Studio 関連ソフトウェアのセキュリティ更新プログラムの詳細については、 [_https://docs.microsoft.com/ja-jp/visualstudio_](https://docs.microsoft.com/ja-jp/visualstudio) とセキュリティ更新プログラム ガイド [_https://msrc.microsoft.com/update-guide_](https://msrc.microsoft.com/update-guide) を参照してください                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| **Microsoft Lync/Skype for Business**                                                                                                                                                        | **重要**       | リモートでコードが実行される | Lync/Skype for Business のセキュリティ更新プログラムの詳細については、 [_https://docs.microsoft.com/ja-jp/SkypeForBusiness/_](https://docs.microsoft.com/ja-jp/SkypeForBusiness/) を参照してください                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |

最新のサービス スタック更新プログラム (SSU) は、[アドバイザリ ADV990001](https://msrc.microsoft.com/update-guide/vulnerability/ADV990001) にてご確認ください。

Microsoft Edge (Chromium-based) のセキュリティ情報は、公開のスケジュールが月例のリリースとは異なりますので、セキュリティ更新プログラム ガイド上で製品にて Microsoft Edge (Chromium-based) を選択してご確認ください。[Edge のセキュリティ リリース情報](https://docs.microsoft.com/deployedge/microsoft-edge-relnotes-security)にてご確認ください。

次回のセキュリティ更新プログラムのリリースは、6 月 9 日 (日本時間) を予定しています。詳しくは、[年間スケジュール](https://aka.ms/relschedule)を参照してください。

---

2021 年 5 月 20 日更新: Windows Server 2016 のサポート技術情報を修正しました。
