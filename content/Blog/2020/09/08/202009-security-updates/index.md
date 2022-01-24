---
title: '2020 年 9 月のセキュリティ更新プログラム (月例)'
description: ""
published: 2020-09-08
type: posts
redirect_from:
            - https://msrc-blog.microsoft.com/2020/09/08/202009-security-updates/
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
<!-- wp:paragraph -->

2020 年 9 月 9 日 (日本時間)、マイクロソフトは以下のソフトウェアのセキュリティ更新情報を公開しました。

<!-- /wp:paragraph -->

<!-- wp:list -->

- Microsoft Windows
- Microsoft Edge (EdgeHTML-based)
- Microsoft Edge (Chromium -based)
- ChakraCore
- Internet Explorer
- SQL Server
- Microsoft JET Database Engine
- Microsoft Office、Microsoft Office Servers および Web Apps
- Microsoft Dynamics
- Visual Studio
- Microsoft Exchange Server
- Microsoft Malware Protection Engine
- SQL Server
- ASP.NET
- Microsoft OneDrive
- Azure DevOps

<!-- /wp:list -->

注: Microsoft Edge (Chromium -based) の更新プログラム ([Version 85.0.564.44](https://docs.microsoft.com/ja-jp/deployedge/microsoft-edge-relnote-stable-channel)) は、8 月 31 日 (米国時間) に公開されています。

<!-- wp:paragraph -->

新規セキュリティ更新プログラムを公開すると共に、既存の脆弱性情報 1 件の更新を行いました。なお、今月の「悪意のあるソフトウェアの削除ツール」では、新たに Win32/Ammyrat、Cipduk、Badaxis、Basicape、Mackler、Strilix に対する定義ファイルが追加されています。

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

**_■ セキュリティ更新プログラム、セキュリティ アドバイザリに関する主な注意点_\*\***\_\_\*\*

<!-- /wp:paragraph -->

<!-- wp:list -->

- UAC が有効になっているサーバー上で、Exchange 向けの更新プログラムを標準モード (管理者権限ではなく) で手動でインストールした際に、いくつかのファイルが正しく更新されず、OWA や ECP が正常に動作しない可能性があります。管理者権限で更新プログラムをインストールすることをお勧めします。詳細は、サポート技術情報 [4577352](https://support.microsoft.com/ja-jp/help/4577352) をご参照ください。

- 製品のサポート終了に関するお知らせ

  - Office 2010/Office 2010 for Mac は 2020 年 10 月 13 日にサポートを終了します。詳細は[ Office サポートサイト](https://support.microsoft.com/ja-jp/office/office-2010-%E3%81%AE%E3%82%B5%E3%83%9D%E3%83%BC%E3%83%88%E3%81%AE%E7%B5%82%E4%BA%86-3a3e45de-51ac-4944-b2ba-c2e415432789?ui=ja-jp&rs=ja-jp&ad=jp)をご参照ください。また同日以降、Microsoft 365 のサービスへの接続は、Microsoft 365 Apps や Office 2016/2019 のみがサポートされるようになります。詳細は [Docs ドキュメント](https://docs.microsoft.com/ja-jp/deployoffice/endofsupport/office-365-services-connectivity)をご参照ください。

  - Windows 10 Version 1803 の Enterprise/Education/IoT Enterprise エディションのサービス終了日が 2021 年 5 月 11 日に延期されました。詳細は [Japan Windows Blog](https://blogs.windows.com/japan/2020/08/27/end-of-service-date-for-windows-10-version-1803-extended/) をご参照ください。

  - Adobe Flash Player のサポート終了に関する詳細情報を、[Microsoft Edge Blog](https://blogs.windows.com/msedgedev/2020/09/04/update-adobe-flash-end-support/) (英語情報) にて公開しています。

- Microsoft Edge (EdgeHTML-based) ならびに Internet Explorer における TLS 1.0/1.1 の既定で無効化する措置は、2021 年春の予定となりました。詳細は過去ブログ「[より安全な TLS 設定を利用しましょう](https://msrc-blog.microsoft.com/2020/08/03/20200804-securetls/)」や [Microsoft Edge Blog](https://blogs.windows.com/msedgedev/2020/03/31/tls-1-0-tls-1-1-schedule-update-edge-ie11/) (英語情報) をご参照ください。

- サービススタック更新 (SSU) を円滑に展開するために、将来的に SSU を最新の累積的な更新プログラムに含めていく計画があることを公開しました。詳細は [Windows IT Pro Blog](https://techcommunity.microsoft.com/t5/windows-it-pro-blog/simplifying-on-premises-deployment-of-servicing-stack-updates/ba-p/1646039) (英語情報) をご参照ください。

- 2020 年 9 月の定例リリースで公開した Windows 10 向けの累積的な更新プログラムでは、WSUS におけるスキャンの動作が変更になっています。詳細は [Windows IT Pro Blog](https://techcommunity.microsoft.com/t5/windows-it-pro-blog/changes-to-improve-security-for-windows-devices-scanning-wsus/ba-p/1645547) (英語情報) をご参照ください。

<!-- /wp:list -->

<!-- wp:paragraph -->

お客様はできるだけ早期に、今月公開のセキュリティ更新プログラムを適用するようお願いします。

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

**_■ _\*\***_2020_\***\*_ 年 _\*\***_9_\***\*_ 月のセキュリティ更新プログラム_\*\***\_\_\*\*

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

セキュリティの脆弱性および更新プログラムの情報を、CVE、KB 番号、製品、またはリリース日別に並べ替えたりフィルターをかけたりすることができます。

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

[セキュリティ更新プログラム ガイド](https://portal.msrc.microsoft.com/ja-jp/security-guidance)

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

各月のセキュリティ更新プログラムを絞り込むには、日付範囲に絞り込む月の第 2 火曜日を指定して検索してください。

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

なお、セキュリティ更新プログラム ガイド API を活用して、自社に特化したカスタム レポートを作成することができます。API の活用方法を紹介する 6 つのビデオ ([API の情報 (GitHub)](https://aka.ms/SUGAPIdemo1_J)、[API へのアクセス](https://aka.ms/SUGAPIdemo2_J)、[HTML ファイルの出力](https://aka.ms/SUGAPIdemo3_J)、[Excel へのエクスポート](https://aka.ms/SUGAPIdemo4_J)、[CVE リストの取得](https://aka.ms/SUGAPIdemo5_J)、[KB リストの取得](https://aka.ms/SUGAPIdemo6_J)) を公開していますので、是非ご活用ください。

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

マイクロソフトは新たに確認した脆弱性について、下記の新しいセキュリティ更新プログラムを公開しました。

<!-- /wp:paragraph -->

<!-- wp:html -->

|                                                                                                                  |                        |                              |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **製品ファミリ\*\*\*\***                                                                                         | **最大深刻度\*\*\*\*** | **最も大きな影響\*\*\*\***   | **関連するサポート技術情報またはサポートの\*\*** Web \***\*ページ\*\*\*\***                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| **Windows 10 v2004、v1909、v1903、v1809、v1803、v1709\*\*\*\***                                                  | **緊急\*\*\*\***       | リモートでコードが実行される | Windows 10 v2004: [_4571756_](https://support.microsoft.com/ja-jp/help/4571756) Windows 10 v1903 および Windows 10 v1909: [_4574727_](https://support.microsoft.com/ja-jp/help/4574727) Windows 10 v1809: [_4570333_](https://support.microsoft.com/ja-jp/help/4570333) Windows 10 v1803: [_4577032_](https://support.microsoft.com/ja-jp/help/4577032) Windows 10 v1709: [_4577041_](https://support.microsoft.com/ja-jp/help/4577041)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| **Windows Server 2019、Windows Server 2016、Server Core インストール (2019、2016、v2004、v1909、v1903)\*\*\*\*** | **緊急\*\*\*\***       | リモートでコードが実行される | Windows Server 2019: [_4570333_](https://support.microsoft.com/ja-jp/help/4570333) Windows Server 2016: [_4577015_](https://support.microsoft.com/ja-jp/help/4577015) Windows Server v2004: [_4571756_](https://support.microsoft.com/ja-jp/help/4571756) Windows Server v1903 および Windows Server v1909: [_4574727_](https://support.microsoft.com/ja-jp/help/4574727)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| **Windows 8.1、Windows Server 2012 R2、Windows Server 2012\*\*\*\***                                             | **緊急\*\*\*\***       | リモートでコードが実行される | Windows 8.1 および Windows Server 2012 R2 マンスリー ロールアップ: [_4577066_](https://support.microsoft.com/ja-jp/help/4577066) Windows 8.1 および Windows Server 2012 R2 セキュリティのみ: [_4577071_](https://support.microsoft.com/ja-jp/help/4577071) Windows Server 2012 マンスリー ロールアップ: [_4577038_](https://support.microsoft.com/ja-jp/help/4577038) Windows Server 2012 セキュリティのみ: [_4577048_](https://support.microsoft.com/ja-jp/help/4577048)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| **Internet Explorer\*\*\*\***                                                                                    | **緊急\*\*\*\***       | リモートでコードが実行される | Internet Explorer の累積的な更新プログラム: [_4577010_](https://support.microsoft.com/ja-jp/help/4577010)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| **Microsoft Office 関連のソフトウェア\*\*\*\***                                                                  | **重要\*\*\*\***       | リモートでコードが実行される | Microsoft Office 関連のソフトウェアに関連するサポート技術情報: [_4484466_](https://support.microsoft.com/ja-jp/help/4484466)、[_4484469_](https://support.microsoft.com/ja-jp/help/4484469)、[_4484503_](https://support.microsoft.com/ja-jp/help/4484503)、[_4484507_](https://support.microsoft.com/ja-jp/help/4484507)、[_4484510_](https://support.microsoft.com/ja-jp/help/4484510)、[_4484513_](https://support.microsoft.com/ja-jp/help/4484513)、[_4484517_](https://support.microsoft.com/ja-jp/help/4484517)、[_4484518_](https://support.microsoft.com/ja-jp/help/4484518)、[_4484522_](https://support.microsoft.com/ja-jp/help/4484522)、[_4484526_](https://support.microsoft.com/ja-jp/help/4484526)、[_4484530_](https://support.microsoft.com/ja-jp/help/4484530)、[_4484532_](https://support.microsoft.com/ja-jp/help/4484532)、[_4484533_](https://support.microsoft.com/ja-jp/help/4484533)、[_4486660_](https://support.microsoft.com/ja-jp/help/4486660)、[_4486661_](https://support.microsoft.com/ja-jp/help/4486661)、[_4486665_](https://support.microsoft.com/ja-jp/help/4486665) |
| **Microsoft SharePoint 関連のソフトウェア\*\*\*\***                                                              | **緊急\*\*\*\***       | リモートでコードが実行される | Microsoft SharePoint 関連のソフトウェアに関連するサポート技術情報: [_3101523_](https://support.microsoft.com/ja-jp/help/3101523)、[_4484480_](https://support.microsoft.com/ja-jp/help/4484480)、[_4484488_](https://support.microsoft.com/ja-jp/help/4484488)、[_4484504_](https://support.microsoft.com/ja-jp/help/4484504)、[_4484505_](https://support.microsoft.com/ja-jp/help/4484505)、[_4484506_](https://support.microsoft.com/ja-jp/help/4484506)、[_4484512_](https://support.microsoft.com/ja-jp/help/4484512)、[_4484514_](https://support.microsoft.com/ja-jp/help/4484514)、[_4484515_](https://support.microsoft.com/ja-jp/help/4484515)、[_4484516_](https://support.microsoft.com/ja-jp/help/4484516)、[_4484525_](https://support.microsoft.com/ja-jp/help/4484525)、[_4486664_](https://support.microsoft.com/ja-jp/help/4486664)、[_4486667_](https://support.microsoft.com/ja-jp/help/4486667)                                                                                                                                                                                          |
| **Microsoft Exchange Server\*\*\*\***                                                                            | **緊急\*\*\*\***       | リモートでコードが実行される | Microsoft Exchange Server に関連するサポート技術情報: [_4577352_](https://support.microsoft.com/ja-jp/help/4577352)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| **Microsoft SQL Server Reporting Services\*\*\*\***                                                              | **警告\*\*\*\***       | セキュリティ機能のバイパス   | SQL Server Reporting Services のセキュリティ更新プログラムの詳細については、[_https://portal.msrc.microsoft.com/ja-jp/security-guidance_](https://portal.msrc.microsoft.com/ja-jp/security-guidance) を参照してください。 SQL Server Reporting Services の更新プログラムの詳細については、[_https://docs.microsoft.com/ja-jp/sql_](https://docs.microsoft.com/ja-jp/sql) を参照してください。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| **Microsoft Dynamics 365 関連のソフトウェア\*\*\*\***                                                            | **緊急\*\*\*\***       | リモートでコードが実行される | Microsoft Dynamics 関連のソフトウェアに関連するサポート技術情報: [_4574742_](https://support.microsoft.com/ja-jp/kb/4574742)、[_4577501_](https://support.microsoft.com/ja-jp/kb/4577501)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| **Microsoft Visual Studio 関連のソフトウェア**                                                                   | **緊急\*\*\*\***       | リモートでコードが実行される | Microsoft Dynamics 関連のソフトウェアに関連するサポート技術情報: [_4571479_](https://support.microsoft.com/ja-jp/kb/4571479)、[_4571480_](https://support.microsoft.com/ja-jp/kb/4571480)、[_4571481_](https://support.microsoft.com/ja-jp/kb/4571481)、[_4576950_](https://support.microsoft.com/ja-jp/kb/4576950)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| **ASP.NET 関連のソフトウェア**                                                                                   | **重要\*\*\*\***       | セキュリティ機能のバイパス   | ASP.NET Core の更新プログラムの詳細については、[_https://portal.msrc.microsoft.com/ja-jp/security-guidance_](https://portal.msrc.microsoft.com/ja-jp/security-guidance) を参照してください ASP.NET Core の更新プログラムの詳細については、[_https://docs.microsoft.com/ja-jp/aspnet/core_](https://docs.microsoft.com/ja-jp/aspnet/core) を参照してください。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| **ChakraCore**                                                                                                   | **緊急\*\*\*\***       | リモートでコードが実行される | ChakraCore は Chakra のコア部分であり、HTML/CSS/JS で記述された Microsoft Edge と Windows アプリケーションを強化する高パフォーマンスの JavaScript エンジンです。詳細については、[_https://github.com/Microsoft/ChakraCore/wiki_](https://github.com/Microsoft/ChakraCore/wiki) を参照してください。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

<!-- /wp:html -->

<!-- wp:paragraph -->

**_■ 既存の脆弱性情報とセキュリティ アドバイザリの更新_\*\***\_\_\*\*

<!-- /wp:paragraph -->

<!-- wp:list -->

- [CVE-2020-1162](https://portal.msrc.microsoft.com/ja-JP/security-guidance/advisory/CVE-2020-1162) (Windows) を更新しました。

<!-- /wp:list -->

<!-- wp:paragraph -->

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

最新のサービス スタック更新プログラム (SSU) は、[アドバイザリ ADV990001](https://portal.msrc.microsoft.com/ja-jp/security-guidance/advisory/ADV990001) にてご確認ください。

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

2020 年の Microsoft Edge (Chromium-based) のセキュリティ情報は、[アドバイザリ ADV200002](https://portal.msrc.microsoft.com/ja-JP/security-guidance/advisory/ADV200002) にてご確認ください。

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

次回のセキュリティ更新プログラムのリリースは、10 月 14 日 (日本時間) を予定しています。詳しくは、[年間スケジュール](https://aka.ms/relschedule)を参照してください。

<!-- /wp:paragraph -->
