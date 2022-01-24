---
title: '2020 年 10 月のセキュリティ更新プログラム (月例)'
description: ""
published: 2020-10-13
type: posts
redirect_from:
            - https://msrc-blog.microsoft.com/2020/10/13/202010-security-updates/
author: jsecteam
categories:
- Japan Security Team
- アドバイザリ
- セキュリティ情報
- セキュリティ更新
- 脆弱性
hero: ../../../defaultHero.jpg
---
2020 年 10 月 14 日 (日本時間)、マイクロソフトは以下のソフトウェアのセキュリティ更新プログラムを公開しました。

- Microsoft Windows
- Microsoft Office、Microsoft Office Servers および Web Apps
- Microsoft JET Database Engine
- Azure Functions
- Open Source Software
- Microsoft Exchange Server
- Visual Studio
- PowerShellGet
- Microsoft .NET Framework
- Microsoft Dynamics
- Adobe Flash Player
- Microsoft Windows Codecs Library

新規セキュリティ更新プログラムを公開すると共に、既存の脆弱性情報 3 件の更新を行いました。

**_■ セキュリティ更新プログラム、セキュリティ アドバイザリに関する主な注意点_**

- 2020 年 10 月の定例リリースに公開された Windows 10 Setup に関する脆弱性情報 [CVE-2020-16908](https://portal.msrc.microsoft.com/ja-JP/security-guidance/advisory/CVE-2020-16908) に対するセキュリティ更新プログラムのリリースはありません。サポート対象の機能更新プログラムのバンドルを更新し、本脆弱性への対応を行っています。詳細は脆弱性情報をご参照ください。
- 2020 年 10 月の定例リリースには、ブラウザに関する脆弱性情報の公開は含まれていません。そのためブラウザへの新規のセキュリティ修正はありません。
- 2020 年 10 月 13 日 (米国時間) を持ちまして、Office 2010/Office 2010 for Mac/Exchange 2010 の[サポートが終了](https://support.microsoft.com/ja-jp/office/office-2010-%E3%81%AE%E3%82%B5%E3%83%9D%E3%83%BC%E3%83%88%E3%81%AE%E7%B5%82%E4%BA%86-3a3e45de-51ac-4944-b2ba-c2e415432789?ui=ja-jp&rs=ja-jp&ad=jp)となります。Office 2010 向けには 10 月の定例リリースで最新のセキュリティ更新プログラムを公開しています。サポート終了製品をご利用の場合は、最新のセキュリティ更新プログラムを適用するとともに、サポートされているバージョンへの早めの移行をお勧めします。詳しくは、[サポート終了に関する製品サイト](http://aka.ms/2020)をご参照ください。
- UAC が有効になっているサーバー上で、Exchange 向けの更新プログラムを標準モード (管理者権限ではなく) で手動でインストールした際に、いくつかのファイルが正しく更新されず、OWA や ECP が正常に動作しない可能性があります。管理者権限で更新プログラムをインストールすることをお勧めします。詳細は、サポート技術情報 [4581424](https://support.microsoft.com/ja-jp/help/4581424) をご参照ください。
- セキュリティ更新プログラム ガイドのポータルを新しく刷新する計画があります。いち早く新しい UI を検証したいお客様は <https://msrc.microsoft.com/update-guide> にてご確認いただけます。なお API で提供している CVRF ドキュメントに変更はありません。詳細は、[MSRC ブログ](https://msrc-blog.microsoft.com/2020/09/21/new-and-improved-security-update-guide/)をご参照ください。

お客様はできるだけ早期に、今月公開のセキュリティ更新プログラムを適用するようお願いします。

**_■ _\*\***_2020_\***\*_ 年 _\*\***_10_\***\*_ 月のセキュリティ更新プログラム_**

セキュリティの脆弱性および更新プログラムの情報を、CVE、KB 番号、製品、またはリリース日別に並べ替えたりフィルターをかけたりすることができます。

[セキュリティ更新プログラム ガイド](https://portal.msrc.microsoft.com/ja-jp/security-guidance)

各月のセキュリティ更新プログラムを絞り込むには、日付範囲に絞り込む月の第 2 火曜日を指定して検索してください。

なお、セキュリティ更新プログラム ガイド API を活用して、自社に特化したカスタム レポートを作成することができます。API の活用方法を紹介する 6 つのビデオ ([API の情報 (GitHub)](https://aka.ms/SUGAPIdemo1_J)、[API へのアクセス](https://aka.ms/SUGAPIdemo2_J)、[HTML ファイルの出力](https://aka.ms/SUGAPIdemo3_J)、[Excel へのエクスポート](https://aka.ms/SUGAPIdemo4_J)、[CVE リストの取得](https://aka.ms/SUGAPIdemo5_J)、[KB リストの取得](https://aka.ms/SUGAPIdemo6_J)) を公開していますので、是非ご活用ください。

---

マイクロソフトは新たに確認した脆弱性について、下記の新しいセキュリティ更新プログラムを公開しました。

|                                                                                                          |                |                              |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| -------------------------------------------------------------------------------------------------------- | -------------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **製品ファミリ**                                                                                         | **最大深刻度** | **最も大きな影響**           | **関連するサポート技術情報またはサポートの\*\*** Web \***\*ページ**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| **Windows 10 v2004、v1909、v1903、v1809、v1803、v1709**                                                  | **緊急**       | リモートでコードが実行される | Windows 10 v2004: [_4579311_](https://support.microsoft.com/ja-jp/help/4579311)Windows 10 v1903 および Windows 10 v1909: [_4577671_](https://support.microsoft.com/ja-jp/help/4577671)Windows 10 v1809: [_4577668_](https://support.microsoft.com/ja-jp/help/4577668)Windows 10 v1803: [_4580330_](https://support.microsoft.com/ja-jp/help/4580330)Windows 10 v1709: [_4580328_](https://support.microsoft.com/ja-jp/help/4580328)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| **Windows Server 2019、Windows Server 2016、Server Core インストール (2019、2016、v2004、v1909、v1903)** | **緊急**       | リモートでコードが実行される | Windows Server 2019: [_4577668_](https://support.microsoft.com/ja-jp/help/4577668)Windows Server 2016: [_4580346_](https://support.microsoft.com/ja-jp/help/4580346)Windows Server v2004: [_4579311_](https://support.microsoft.com/ja-jp/help/4579311)Windows Server v1903 および Windows Server v1909: [_4577671_](https://support.microsoft.com/ja-jp/help/4577671)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| **Windows 8.1、Windows Server 2012 R2、Windows Server 2012**                                             | **緊急**       | リモートでコードが実行される | Windows 8.1 および Windows Server 2012 R2 マンスリー ロールアップ: [_4580347_](https://support.microsoft.com/ja-jp/help/4580347)Windows 8.1 および Windows Server 2012 R2 セキュリティのみ: [_4580358_](https://support.microsoft.com/ja-jp/help/4580358)Windows Server 2012 マンスリー ロールアップ: [_4580382_](https://support.microsoft.com/ja-jp/help/4580382)Windows Server 2012 セキュリティのみ: [_4580353_](https://support.microsoft.com/ja-jp/help/4580353)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| **Microsoft Office 関連のソフトウェア**                                                                  | **緊急**       | リモートでコードが実行される | Microsoft Office 関連のソフトウェアに関連するサポート技術情報: [_4462175_](https://support.microsoft.com/ja-jp/help/4462175)、[_4484417_](https://support.microsoft.com/ja-jp/help/4484417)、[_4484435_](https://support.microsoft.com/ja-jp/help/4484435)、[_4484524_](https://support.microsoft.com/ja-jp/help/4484524)、[_4486663_](https://support.microsoft.com/ja-jp/help/4486663), [_4486671_](https://support.microsoft.com/ja-jp/help/4486671)、[_4486674_](https://support.microsoft.com/ja-jp/help/4486674)、[_4486678_](https://support.microsoft.com/ja-jp/help/4486678)、[_4486679_](https://support.microsoft.com/ja-jp/help/4486679)、[_4486682_](https://support.microsoft.com/ja-jp/help/4486682)、[_4486688_](https://support.microsoft.com/ja-jp/help/4486688)、[_4486689_](https://support.microsoft.com/ja-jp/help/4486689)、[_4486692_](https://support.microsoft.com/ja-jp/help/4486692)、[_4486695_](https://support.microsoft.com/ja-jp/help/4486695)、[_4486700_](https://support.microsoft.com/ja-jp/help/4486700)、[_4486701_](https://support.microsoft.com/ja-jp/help/4486701)、[_4486703_](https://support.microsoft.com/ja-jp/help/4486703)、[_4486707_](https://support.microsoft.com/ja-jp/help/4486707) |
| **Microsoft SharePoint 関連のソフトウェア**                                                              | **緊急**       | リモートでコードが実行される | Microsoft SharePoint 関連のソフトウェアに関連するサポート技術情報: [_4484531_](https://support.microsoft.com/ja-jp/help/4484531)、[_4486676_](https://support.microsoft.com/ja-jp/help/4486676)、[_4486677_](https://support.microsoft.com/ja-jp/help/4486677)、[_4486687_](https://support.microsoft.com/ja-jp/help/4486687)、[_4486694_](https://support.microsoft.com/ja-jp/help/4486694)、[_4486708_](https://support.microsoft.com/ja-jp/help/4486708)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| **Microsoft Exchange Server**                                                                            | **重要**       | 情報漏えい                   | Microsoft Exchange Server に関連するサポート技術情報: [_4581424_](https://support.microsoft.com/ja-jp/help/4581424)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| **Microsoft Dynamics 365 関連のソフトウェア**                                                            | **重要**       | 特権の昇格                   | Microsoft Dynamics 関連のソフトウェアに関連するサポート技術情報: [_4578105_](https://support.microsoft.com/ja-jp/help/4578105)、[_4578106_](https://support.microsoft.com/ja-jp/help/4578106)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| **Microsoft Visual Studio 関連のソフトウェア**                                                           | **重要**       | リモートでコードが実行される | Visual Studio 関連ソフトウェアのセキュリティ更新プログラムの詳細については、セキュリティ更新プログラム ガイドを参照してください。[_https://portal.msrc.microsoft.com/ja-jp_](https://portal.msrc.microsoft.com/ja-jp)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| **Microsoft .NET 関連のソフトウェア**                                                                    | **重要**       | 情報漏えい                   | Microsoft .NET Framework に関連するサポート技術情報: [_4578968_](https://support.microsoft.com/ja-jp/help/4578968)、[_4578969_](https://support.microsoft.com/ja-jp/help/4578969)、[_4578971_](https://support.microsoft.com/ja-jp/help/4578971)、[_4578972_](https://support.microsoft.com/ja-jp/help/4578972)、[_4578974_](https://support.microsoft.com/ja-jp/help/4578974)、[_4579976_](https://support.microsoft.com/ja-jp/help/4579976)、[_4579978_](https://support.microsoft.com/ja-jp/help/4579978)、[_4579979_](https://support.microsoft.com/ja-jp/help/4579979)、[_4580328_](https://support.microsoft.com/ja-jp/help/4580328)、[_4580330_](https://support.microsoft.com/ja-jp/help/4580330)、[_4580346_](https://support.microsoft.com/ja-jp/help/4580346)、[_4580468_](https://support.microsoft.com/ja-jp/help/4580468)、[_4580469_](https://support.microsoft.com/ja-jp/help/4580469)                                                                                                                                                                                                                                                                                                                                      |
| **Adobe Flash Player**                                                                                   | **緊急**       | リモートでコードが実行される | Adobe Flash Player に関連するサポート技術情報: [_4580325_](https://support.microsoft.com/ja-jp/help/4580325)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

**_■ 新規の脆弱性情報の公開_**

- [CVE-2020-17022](https://portal.msrc.microsoft.com/ja-JP/security-guidance/advisory/CVE-2020-17022) (Windows Codecs Library) は 10 月 15 日 (米国時間) に公開されました。
- [CVE-2020-17023](https://portal.msrc.microsoft.com/ja-JP/security-guidance/advisory/CVE-2020-17023) (Visual Studio JSON) は 10 月 15 日 (米国時間) に公開されました。

**_■ 既存の脆弱性情報とセキュリティ アドバイザリの更新_**

- [CVE-2020-1147](https://portal.msrc.microsoft.com/ja-JP/security-guidance/advisory/CVE-2020-1147) (.NET Framework, SharePoint Server, Visual Studio) を更新しました。
- [CVE-2019-1181](https://portal.msrc.microsoft.com/ja-JP/security-guidance/advisory/CVE-2019-1181) (Remote Desktop Services) を更新しました。
- [CVE-2019-1182](https://portal.msrc.microsoft.com/ja-JP/security-guidance/advisory/CVE-2019-1182) (Remote Desktop Services) を更新しました。

最新のサービス スタック更新プログラム (SSU) は、[アドバイザリ ADV990001](https://portal.msrc.microsoft.com/ja-jp/security-guidance/advisory/ADV990001) にてご確認ください。

2020 年の Microsoft Edge (Chromium-based) のセキュリティ情報は、[アドバイザリ ADV200002](https://portal.msrc.microsoft.com/ja-JP/security-guidance/advisory/ADV200002) にてご確認ください。

次回のセキュリティ更新プログラムのリリースは、11 月 11 日 (日本時間) を予定しています。詳しくは、[年間スケジュール](https://aka.ms/relschedule)を参照してください。

———————————

\* 2020 年 10 月 16 日: [CVE-2020-17022](https://portal.msrc.microsoft.com/ja-JP/security-guidance/advisory/CVE-2020-17022) と [CVE-2020-17023](https://portal.msrc.microsoft.com/ja-JP/security-guidance/advisory/CVE-2020-17023) の公開を追加しました。