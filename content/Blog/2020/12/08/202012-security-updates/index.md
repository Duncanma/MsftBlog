---
title: '2020 年 12 月のセキュリティ更新プログラム (月例)'
description: ""
published: 2020-12-08
type: posts
redirect_from:
            - https://msrc-blog.microsoft.com/2020/12/08/202012-security-updates/
author: jsecteam
categories:
- Japan Security Team
- アドバイザリ
- セキュリティ情報
- セキュリティ更新
- 脆弱性
hero: ../../../defaultHero.jpg
---
<!-- wp:paragraph -->

2020 年 12 月 9 日 (日本時間)、マイクロソフトは以下のソフトウェアのセキュリティ更新プログラムを公開しました。

<!-- /wp:paragraph -->

<!-- wp:list -->

- Microsoft Windows
- Microsoft Edge (EdgeHTML-based)
- Microsoft Edge for Android
- ChakraCore
- Microsoft Office、Microsoft Office Servers および Web Apps
- Microsoft Windows Codecs Library
- Microsoft Exchange Server
- Azure DevOps
- Microsoft Dynamics
- Visual Studio
- Azure SDK
- Azure Sphere

<!-- /wp:list -->

<!-- wp:paragraph -->

新規セキュリティ更新プログラムを公開すると共に、新規のセキュリティ アドバイザリ 1 件の公開、既存の脆弱性情報 3 件の更新を行いました。

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

**_■ セキュリティ更新プログラム、セキュリティ アドバイザリに関する主な注意点_\*\***\_\_\*\*

<!-- /wp:paragraph -->

<!-- wp:list -->

- 2020 年 11 月の定例リリースにて、脆弱性情報 [CVE-2020-17049](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2020-17049) (Kerberos KDC) に対応するために Windows Server 向けのセキュリティ更新プログラムをリリースしました。この更新プログラムをドメイン コントローラに適用後に確認されていた、Kerberos 認証の問題を解決する修正プログラムが 11 月に定例外で公開され、12 月の月例の累積的なセキュリティ更新プログラムにも含まれています。また Windows Server 2008/Windows Server 2008 R2 SP1 向けの修正は 12 月の月例のセキュリティ更新プログラムに含まれています (適用には ESU が必要となります)。詳細は、[Windows Release Information](https://docs.microsoft.com/ja-jp/windows/release-information/status-windows-10-20h2#1522msgdesc) ならびに「[Kerberos KDC の脆弱性 (CVE-2020-17049) に対応するためのガイダンス](https://msrc-blog.microsoft.com/2020/11/19/20201120_cve-2020-17049/)」をご参照ください。
- 2020 年 12 月の定例リリースにて、Kerberos の脆弱性情報 [CVE-2020-16996](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2020-16996) が公開されています。この脆弱性から完全に保護されるためには、ドメインコントローラへのセキュリティ更新プログラムを適用後、追加の手順を実施する必要があります。適用に関する詳細情報はサポート技術情報 [4577252](https://support.microsoft.com/ja-jp/help/4577252) をご参照ください。
- マイクロソフトは Adobe Flash Player のサポートを、2020 年 12 月 31 日に終了します。詳細は、[Japan Windows Blog](https://blogs.windows.com/japan/2020/09/14/update-adobe-flash-end-support/) ならびに [Japan Developer Support Internet Team Blog](https://jpdsi.github.io/blog/internet-explorer-microsoft-edge/flash/) をご参照ください。
- 2020 年 9 月に[お知らせ](https://techcommunity.microsoft.com/t5/windows-it-pro-blog/simplifying-on-premises-deployment-of-servicing-stack-updates/ba-p/1646039)していた、サービススタック更新 (SSU) と最新の累積的な更新プログラム (LCU) を統合したパッケージが 12 月の月例より利用可能となっています。従来通り、SSU と LCU を別々に展開する場合は特に展開方法を変更する必要はありません。統合されたパッケージを展開する場合は、WSUS 経由で提供されるため WSUS の構成を変更する必要があります。詳細は、[Windows IT Pro Blog](https://techcommunity.microsoft.com/t5/windows-it-pro-blog/deploy-windows-ssus-and-lcus-together-with-one-cumulative-update/ba-p/1967887) をご参照ください。
- UAC が有効になっているサーバー上で、Exchange 向けの更新プログラムを標準モード (管理者権限ではなく) で手動でインストールした際に、いくつかのファイルが正しく更新されず、OWA や ECP が正常に動作しない可能性があります。管理者権限で更新プログラムをインストールすることをお勧めします。詳細は、サポート技術情報 [4593467](https://support.microsoft.com/ja-jp/help/4593467)、[4593466](https://support.microsoft.com/ja-jp/help/4593466) ならびに [4593465](https://support.microsoft.com/ja-jp/help/4593465) をご参照ください。

<!-- /wp:list -->

<!-- wp:paragraph -->

お客様はできるだけ早期に、今月公開のセキュリティ更新プログラムを適用するようお願いします。

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

**_■ _\*\***_2020_\***\*_ 年 _\*\***_12_\***\*_ 月のセキュリティ更新プログラム_\*\***\_\_\*\*

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

|                                                                                                                         |                        |                              |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ----------------------------------------------------------------------------------------------------------------------- | ---------------------- | ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **製品ファミリ\*\*\*\***                                                                                                | **最大深刻度\*\*\*\*** | **最も大きな影響\*\*\*\***   | **関連するサポート技術情報またはサポートの\*\*** Web \***\*ページ\*\*\*\***                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| **Windows 10 v20H2、v2004、v1909、v1903、v1809、v1803\*\*\*\***                                                         | **緊急\*\*\*\***       | リモートでコードが実行される | Windows 10 v2004 および Windows 10 v20H2: [_4592438_](https://support.microsoft.com/ja-jp/help/4592438) Windows 10 v1903 および Windows 10 v1909: [_4592449_](https://support.microsoft.com/ja-jp/help/4592449) Windows 10 v1809: [_4592440_](https://support.microsoft.com/ja-jp/help/4592440) Windows 10 v1803: [_4592446_](https://support.microsoft.com/ja-jp/help/4592446)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| **Windows Server 2019、Windows Server 2016、Server Core インストール (2019、2016、v20H2、v2004、v1909、v1903)\*\*\*\*** | **緊急\*\*\*\***       | リモートでコードが実行される | Windows Server 2019: [_4592440_](https://support.microsoft.com/ja-jp/help/4592440) Windows Server 2016: [_4593226_](https://support.microsoft.com/ja-jp/help/4593226) Windows Server v2004 および Windows Server v20H2: [_4592438_](https://support.microsoft.com/ja-jp/help/4592438) Windows Server v1903 および Windows Server v1909: [_4592449_](https://support.microsoft.com/ja-jp/help/4592449)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| **Windows 8.1、Windows Server 2012 R2、および Windows Server 2012\*\*\*\***                                             | **重要\*\*\*\***       | リモートでコードが実行される | Windows 8.1 および Windows Server 2012 R2 マンスリー ロールアップ: [_4592484_](https://support.microsoft.com/ja-jp/help/4592484) Windows 8.1 および Windows Server 2012 R2 セキュリティのみ: [_4592495_](https://support.microsoft.com/ja-jp/help/4592495) Windows Server 2012 マンスリー ロールアップ: [_4592468_](https://support.microsoft.com/ja-jp/help/4592468) Windows Server 2012 セキュリティのみ: [_4592497_](https://support.microsoft.com/ja-jp/help/4592497)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| **Microsoft Office 関連のソフトウェア\*\*\*\***                                                                         | **重要\*\*\*\***       | リモートでコードが実行される | Microsoft Office 関連のソフトウェアに関連するサポート技術情報: [_4484372_](https://support.microsoft.com/ja-jp/help/4484372)、[_4484393_](https://support.microsoft.com/ja-jp/help/4484393)、[_4484468_](https://support.microsoft.com/ja-jp/help/4484468)、[_4486698_](https://support.microsoft.com/ja-jp/help/4486698)、[_4486704_](https://support.microsoft.com/ja-jp/help/4486704)、[_4486732_](https://support.microsoft.com/ja-jp/help/4486732)、[_4486742_](https://support.microsoft.com/ja-jp/help/4486742)、[_4486748_](https://support.microsoft.com/ja-jp/help/4486748)、[_4486750_](https://support.microsoft.com/ja-jp/help/4486750)、[_4486754_](https://support.microsoft.com/ja-jp/help/4486754)、[_4486757_](https://support.microsoft.com/ja-jp/help/4486757)、[_4486760_](https://support.microsoft.com/ja-jp/help/4486760)、[_4493139_](https://support.microsoft.com/ja-jp/help/4493139)、[_4493140_](https://support.microsoft.com/ja-jp/help/4493140)、[_4493148_](https://support.microsoft.com/ja-jp/help/4493148) |
| **Microsoft SharePoint 関連のソフトウェア\*\*\*\***                                                                     | **緊急\*\*\*\***       | リモートでコードが実行される | Microsoft SharePoint 関連のソフトウェアに関連するサポート技術情報: [_4486696_](https://support.microsoft.com/ja-jp/help/4486696)、[_4486697_](https://support.microsoft.com/ja-jp/help/4486697)、[_4486721_](https://support.microsoft.com/ja-jp/help/4486721)、[_4486751_](https://support.microsoft.com/ja-jp/help/4486751)、[_4486752_](https://support.microsoft.com/ja-jp/help/4486752)、[_4486753_](https://support.microsoft.com/ja-jp/help/4486753)、[_4493138_](https://support.microsoft.com/ja-jp/help/4493138)、[_4493149_](https://support.microsoft.com/ja-jp/help/4493149)                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| **Microsoft Exchange Server\*\*\*\***                                                                                   | **緊急\*\*\*\***       | リモートでコードが実行される | Microsoft Exchange Server に関連するサポート技術情報: [_4593465_](https://support.microsoft.com/ja-jp/help/4593465)、[_4593466_](https://support.microsoft.com/ja-jp/help/4593466)、[_4593467_](https://support.microsoft.com/ja-jp/help/4593467)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| **Microsoft Dynamics 365 関連のソフトウェア\*\*\*\***                                                                   | **緊急\*\*\*\***       | リモートでコードが実行される | Microsoft Dynamics 関連のソフトウェアに関連するサポート技術情報: [_4577009_](https://support.microsoft.com/ja-jp/help/4577009)、[_4578105_](https://support.microsoft.com/ja-jp/help/4578105)、[_4578106_](https://support.microsoft.com/ja-jp/help/4578106)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| **Microsoft Visual Studio 関連のソフトウェア\*\*\*\***                                                                  | **重要\*\*\*\***       | リモートでコードが実行される | Visual Studio 関連ソフトウェアのセキュリティ更新プログラムの詳細については、セキュリティ更新プログラム ガイドを参照してください。[_https://msrc.microsoft.com/update-guide_](https://msrc.microsoft.com/update-guide)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| **Azure 関連のソフトウェア**                                                                                            | **重要\*\*\*\***       | なりすまし                   | Azure 関連ソフトウェアのセキュリティ更新プログラムの詳細については、セキュリティ更新プログラム ガイドを参照してください。[_https://msrc.microsoft.com/update-guide_](https://msrc.microsoft.com/update-guide)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| **ChakraCore\*\*\*\***                                                                                                  | **緊急\*\*\*\***       | リモートでコードが実行される | Chakra Core のセキュリティ更新プログラムの詳細については、セキュリティ更新プログラム ガイドを参照してください。[_https://msrc.microsoft.com/update-guide_](https://msrc.microsoft.com/update-guide)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |

<!-- /wp:html -->

<!-- wp:paragraph -->

**_■ 新規のセキュリティ アドバイザリの公開_\*\***\_\_\*\*

<!-- /wp:paragraph -->

<!-- wp:list -->

- [アドバイザリ ADV200013](https://msrc.microsoft.com/update-guide/vulnerability/ADV200013) (DNS Resolver) を公開しました

<!-- /wp:list -->

<!-- wp:paragraph -->

**_■ 既存の脆弱性情報の更新_\*\***\_\_\*\*

<!-- /wp:paragraph -->

<!-- wp:list -->

- [CVE-2020-1325](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2020-1325) (Azure DevOps Server and Team Foundation Services) を更新しました。
- [CVE-2020-1596](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2020-1596) (TLS) を更新しました。
- [CVE-2020-17049](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2020-17049) (Kerberos KDC) を更新しました。

<!-- /wp:list -->

<!-- wp:paragraph -->

最新のサービス スタック更新プログラム (SSU) は、[アドバイザリ ADV990001](https://msrc.microsoft.com/update-guide/vulnerability/ADV990001) にてご確認ください。

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

2020 年の Microsoft Edge (Chromium-based) のセキュリティ情報は、[アドバイザリ ADV200002](https://msrc.microsoft.com/update-guide/vulnerability/ADV200002) にてご確認ください。

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

次回のセキュリティ更新プログラムのリリースは、1 月 13 日 (日本時間) を予定しています。詳しくは、[年間スケジュール](https://aka.ms/relschedule)を参照してください。

<!-- /wp:paragraph -->
