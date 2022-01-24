---
title: '2021 年 10 月のセキュリティ更新プログラム (月例)'
description: ""
published: 2021-10-12
type: posts
redirect_from:
            - https://msrc-blog.microsoft.com/2021/10/12/202110-security-updates/
author: jsecteam
categories:
- Japan Security Team
- アドバイザリ
- セキュリティ情報
- セキュリティ更新
- セキュリティ更新プログラム
- 脆弱性
hero: ../../../defaultHero.jpg
---
<!-- wp:paragraph -->

2021 年 10 月 13 日 (日本時間)、マイクロソフトは、マイクロソフト製品に影響する脆弱性を修正するために、セキュリティ更新プログラムを公開しました。また、新規セキュリティ更新プログラムを公開すると共に、既存の脆弱性情報 2 件の更新を行いました。なお、今月の「悪意のあるソフトウェアの削除ツール」では、新たに対応を追加したファミリはありません。お客様はできるだけ早期に、今月公開のセキュリティ更新プログラムを適用するようお願いします。最新の情報は、[セキュリティ更新プログラム ガイド](https://portal.msrc.microsoft.com/ja-jp/security-guidance) を確認してください。

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

**_■ セキュリティ更新プログラム、セキュリティ アドバイザリに関する主な注意点_\*\***\_\_\*\*

<!-- /wp:paragraph -->

<!-- wp:list -->

- Windows (Win32k) の脆弱性 [CVE-2021-40449](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-40449) は、限定的な脆弱性の悪用を確認しています。早急にセキュリティ更新プログラムを適用してください。
- Windows の脆弱性 [CVE-2021-41335](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-41335), Windows AppContainer の脆弱性 [CVE-2021-41338](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-41338)、Windows DNS Server の脆弱性 [CVE-2021-40469](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-40469)は、現時点では悪用は確認されていませんが、脆弱性の内容が一般に公開されています。早急にセキュリティ更新プログラムを適用してください。

<!-- /wp:list -->

<!-- wp:paragraph -->

各 CVE のページには、緩和策、回避策、注意事項やよく寄せられる質問など、追加の情報が掲載されている場合があります。また既知の問題については、各更新プログラムの KB ページをご確認ください。追加の情報が掲載されている CVE と既知の問題が掲載されている KB の一覧は、[セキュリティアップデート リリースノート](https://msrc.microsoft.com/update-guide/releaseNote/2021-Oct)を確認してください。

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

**_■ _\*\***_2021_\***\*_ 年 _\*\***_10_\***\*_ 月のセキュリティ更新プログラムを公開した製品、コンポーネント一覧_**

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

2021 年 10 月 12 日（米国時間）に公開したセキュリティ更新プログラムの一覧は以下です。最新の情報は、[セキュリティアップデート リリースノート](https://msrc.microsoft.com/update-guide/releaseNote/2021-Oct)を確認してください。

<!-- /wp:paragraph -->

<!-- wp:list -->

- .NET Core & Visual Studio
- Active Directory Federation Services
- Console Window Host
- HTTP.sys
- Microsoft DWM Core Library
- Microsoft Dynamics
- Microsoft Dynamics 365 Sales
- Microsoft Edge (Chromium-based)
- Microsoft Exchange Server
- Microsoft Graphics Component
- Microsoft Intune
- Microsoft Office Excel
- Microsoft Office SharePoint
- Microsoft Office Visio
- Microsoft Office Word
- Microsoft Windows Codecs Library
- Rich Text Edit Control
- Role: DNS Server
- Role: Windows Active Directory Server
- Role: Windows AD FS Server
- Role: Windows Hyper-V
- System Center
- Visual Studio
- Windows AppContainer
- Windows AppX Deployment Service
- Windows Bind Filter Driver
- Windows Cloud Files Mini Filter Driver
- Windows Common Log File System Driver
- Windows Desktop Bridge
- Windows DirectX
- Windows Event Tracing
- Windows exFAT File System
- Windows Fastfat Driver
- Windows Installer
- Windows Kernel
- Windows MSHTML Platform
- Windows Nearby Sharing
- Windows Network Address Translation (NAT)
- Windows Print Spooler Components
- Windows Remote Procedure Call Runtime
- Windows Storage Spaces Controller
- Windows TCP/IP
- Windows Text Shaping
- Windows Win32K

<!-- /wp:list -->

<!-- wp:paragraph -->

**_■ _\*\***_2021_\***\*_ 年 _\*\***_10_\***\*_ 月のセキュリティ更新プログラム一覧_\*\***\_\_\*\*

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

2021 年 10 月 12 日（米国時間）に公開したセキュリティ更新プログラムの一覧は以下です。最新の情報は、[セキュリティ更新プログラム ガイド](https://portal.msrc.microsoft.com/ja-jp/security-guidance) を確認してください。

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

<!-- /wp:paragraph -->

<!-- wp:table {"hasFixedLayout":true,"className":"is-style-regular"} -->

|                                                                                                |                |                              |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------- | -------------- | ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **製品ファミリ**                                                                               | **最大深刻度** | **最も大きな影響**           | **関連するサポート技術情報またはサポートの Web ページ**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Windows 11                                                                                     | 緊急           | リモートでコードが実行される | Windows 11: [5006674](https://support.microsoft.com/help/5006674)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Windows Server 2022                                                                            | 緊急           | リモートでコードが実行される | Windows Server 2022: [5006699](https://support.microsoft.com/help/5006699)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Windows 10 v21H1, v20H2, v2004, v1909                                                          | 緊急           | リモートでコードが実行される | Windows 10 v21H1, Windows 10 v20H2, Windows 10 v2004: [5006670](https://support.microsoft.com/help/5006670) Windows 10 v1909: [5006667](https://support.microsoft.com/help/5006667)                                                                                                                                                                                                                                                                                                                                                                                  |
| Windows Server 2019, Windows Server 2016, Server Core installations (2019, 2016, v20H2, v2004) | 緊急           | リモートでコードが実行される | Windows Server, version 20H2 Windows Server, version 2004: [5006670](https://support.microsoft.com/help/5006670) Windows Server 2019: [5006672](https://support.microsoft.com/help/5006672) Windows Server 2016: [5006669](https://support.microsoft.com/help/5006669)                                                                                                                                                                                                                                                                                               |
| Windows 8.1, Windows Server 2012 R2, Windows Server 2012                                       | 重要           | リモートでコードが実行される | Windows 8.1 Windows Server 2012 R2 Monthly Rollup: [5006714](https://support.microsoft.com/help/5006714) Windows 8.1 Windows Server 2012 R2 Security Only: [5006729](https://support.microsoft.com/help/5006729) Windows Server 2012 Monthly Rollup: [5006739](https://support.microsoft.com/help/5006739) Windows Server 2012 Security Only: [5006732](https://support.microsoft.com/help/5006732)                                                                                                                                                                  |
| Microsoft Office                                                                               | 緊急           | リモートでコードが実行される | [4018332](https://support.microsoft.com/help/4018332), [4461476](https://support.microsoft.com/help/4461476), [5001960](https://support.microsoft.com/help/5001960), [5001982](https://support.microsoft.com/help/5001982), [5001985](https://support.microsoft.com/help/5001985), [5002004](https://support.microsoft.com/help/5002004), [5002027](https://support.microsoft.com/help/5002027), [5002030](https://support.microsoft.com/help/5002030), [5002036](https://support.microsoft.com/help/5002036), [5002043](https://support.microsoft.com/help/5002043) |
| Microsoft SharePoint                                                                           | 緊急           | リモートでコードが実行される | [4493202](https://support.microsoft.com/help/4493202), [5001924](https://support.microsoft.com/help/5001924), [5002006](https://support.microsoft.com/help/5002006), [5002028](https://support.microsoft.com/help/5002028), [5002029](https://support.microsoft.com/help/5002029), [5002042](https://support.microsoft.com/help/5002042)                                                                                                                                                                                                                             |
| Microsoft Exchange Server                                                                      | 重要           | リモートでコードが実行される | [5007011](https://support.microsoft.com/help/5007011), [5007012](https://support.microsoft.com/help/5007012)                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Microsoft .NET                                                                                 | 重要           | 情報漏えい                   | .NET 関連ソフトウェアのセキュリティ更新プログラムの詳細については、セキュリティ更新プログラム ガイドを参考にしてください <https://msrc.microsoft.com/update-guide>                                                                                                                                                                                                                                                                                                                                                                                                   |
| Microsoft Visual Studio                                                                        | 重要           | 情報漏えい                   | Visual Studio 関連ソフトウェアのセキュリティ更新プログラムの詳細については、セキュリティ更新プログラム ガイドを参考にしてください: <https://msrc.microsoft.com/update-guide>                                                                                                                                                                                                                                                                                                                                                                                         |
| Microsoft Dynamics 365                                                                         | 重要           | なりすまし                   | [4618810](https://support.microsoft.com/help/4618810), [4618795](https://support.microsoft.com/help/4618795)                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Microsoft System Center                                                                        | 重要           | 情報漏えい                   | [5006871](https://support.microsoft.com/help/5006871)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

<!-- /wp:table -->

<!-- wp:paragraph -->

**_■ 既存の脆弱性情報の更新_\*\***\_\_\*\*

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

2021 年 10 月 12 日（米国時間）に更新したセキュリティアドバイザリ、セキュリティ脆弱性の一覧は以下です。

<!-- /wp:paragraph -->

<!-- wp:table {"className":"is-style-regular"} -->

|                                                                                        |                                                                              |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| -------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| CVE 番号                                                                               | タイトル                                                                     | 更新内容                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [ADV200011](https://msrc.microsoft.com/update-guide/vulnerability/ADV200011)           | GRUB でのセキュリティ機能のバイパスに対処するためのマイクロソフト ガイダンス | 次の点を更新しました 1) マイクロソフトは 2022 年春にこの脆弱性を解決する更新プログラムをリリースする予定であるという内容に「FAQ」を更新しました。この更新プログラムが利用可能になったときと、このアドバイザリの内容が変更されたときにアラートを受け取るセキュリティ通知メーラーに登録できます。「[Microsoft Technical Security Notifications](https://technet.microsoft.com/ja-jp/security/dd252948)」(英語情報) を参照してください。 2) サポートされるすべてのエディションの Windows および Windows Server バージョン(Windows 10 Version 20H2、Windows 10 Version 21H1、Windows 11、Windows Server Version 20H2 (Server Core インストール)、Windows Server 2022) がこの脆弱性の影響を受けるため、「セキュリティ更新プログラム」一覧に追加しました。 3) 「概要」の「問題を緩和する要素」セクションの位置を修正しました。 |
| [ADV990001](https://msrc.microsoft.com/update-guide/vulnerability/ADV990001)           | 最新のサービス スタック更新プログラム                                        | 新しいバージョンのサービス スタック更新プログラムが入手可能であることをお知らせするために、アドバイザリが更新されました。詳細については、アドバイザリの FAQ を参照してください。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [CVE-2021-33781](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-33781) | Azure AD のセキュリティ機能のバイパスの脆弱性                                | サポートされるすべてのバージョンの Windows 10 Version 1607、Windows Server 2016、Windows 11 もこの脆弱性の影響を受けるため、これらのバージョンの Windows 10、Windows Server、および Windows 11 を「セキュリティ更新プログラム」一覧に追加しました。マイクロソフトは、これらのバージョンのいずれかを実行している場合は、この脆弱性から完全に保護するためにこれらの更新プログラムをインストールすることを強くお勧めします。更新プログラムを自動的に受信するようにシステムが構成されている場合は、特別な措置を講じる必要はありません。                                                                                                                                                                                                                                                                                      |
| [CVE-2021-38624](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-38624) | Windows キー ストレージ プロバイダーのセキュリティ機能のバイパスの脆弱性     | 次の点を更新しました。 1) マイクロソフトは、CVE-2021-38624 を包括的に解決するために、Windows 10 バージョン 1809 以降の影響を受けるすべてのエディション用に 2021 年 10 月のセキュリティ更新プログラムをリリースしました。これらのバージョンも CVE-2021-38624 の影響を受けるためです。 2) Windows 11 もこの脆弱性の影響を受けるため、Windows 11 (x64 ベース システム) および Windows 11 (ARM64 ベース システム) 用の Windows 11 を「セキュリティ更新プログラム」一覧に追加しました。マイクロソフトは、この脆弱性から完全に保護するために、10 月の更新プログラムをインストールすることを強くお勧めします。更新プログラムを自動的に受信するようにシステムが構成されている場合は、特別な措置を講じる必要はありません。                                                                                                        |

<!-- /wp:table -->

<!-- wp:paragraph -->

**_■ 補足情報_\*\***\_\_\*\*

<!-- /wp:paragraph -->

<!-- wp:list -->

- 最新のサービス スタック更新プログラム (SSU) は、[アドバイザリ ADV990001](https://msrc.microsoft.com/update-guide/vulnerability/ADV990001) にてご確認ください。
- Microsoft Edge (Chromium-based) のセキュリティ情報は、公開のスケジュールが月例のリリースとは異なりますので、セキュリティ更新プログラム ガイド上で製品にて Microsoft Edge (Chromium-based) を選択してご確認ください。または、[Edge のセキュリティ リリース情報](https://docs.microsoft.com/deployedge/microsoft-edge-relnotes-security)にてご確認ください。
- 最新の情報は、[セキュリティ更新プログラム ガイド](https://portal.msrc.microsoft.com/ja-jp/security-guidance) を確認してください。セキュリティ更新プログラムガイドでは、セキュリティの脆弱性および更新プログラムの情報を、CVE、KB 番号、製品、またはリリース日別に並べ替えたりフィルターをかけたりすることができます。各月のセキュリティ更新プログラムを絞り込むには、日付範囲に絞り込む月の第 2 火曜日を指定して検索してください。なお、セキュリティ更新プログラム ガイド API を活用して、自社に特化したカスタム レポートを作成することができます。API の活用方法を紹介する 6 つのビデオ ([API の情報 (GitHub)](https://aka.ms/SUGAPIdemo1_J)、[API へのアクセス](https://aka.ms/SUGAPIdemo2_J)、[HTML ファイルの出力](https://aka.ms/SUGAPIdemo3_J)、[Excel へのエクスポート](https://aka.ms/SUGAPIdemo4_J)、[CVE リストの取得](https://aka.ms/SUGAPIdemo5_J)、[KB リストの取得](https://aka.ms/SUGAPIdemo6_J)) を公開していますので、是非ご活用ください。

<!-- /wp:list -->

<!-- wp:paragraph -->

次回のセキュリティ更新プログラムのリリースは、11 月 10 日 (日本時間) を予定しています。詳しくは、[年間スケジュール](https://aka.ms/relschedule)を参照してください。

<!-- /wp:paragraph -->
