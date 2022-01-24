---
title: '2021 年 11 月のセキュリティ更新プログラム (月例)'
description: ""
published: 2021-11-09
type: posts
redirect_from:
            - https://msrc-blog.microsoft.com/2021/11/09/202111-security-updates/
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

2021 年 11 月 10 日 (日本時間)、マイクロソフトは、マイクロソフト製品に影響する脆弱性を修正するために、セキュリティ更新プログラムを公開しました。お客様はできるだけ早期に、今月公開のセキュリティ更新プログラムを適用するようお願いします。最新の情報は、[セキュリティ更新プログラム ガイド](https://portal.msrc.microsoft.com/ja-jp/security-guidance) を確認してください。

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

なお、2021 年 11 月 9 日（米国時間）に更新したセキュリティアドバイザリ、セキュリティ脆弱性はありません。また、今月の「悪意のあるソフトウェアの削除ツール」では、新たに対応を追加したファミリはありません。

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

**_■ セキュリティ更新プログラム、セキュリティ アドバイザリに関する主な注意点_\*\***\_\_\*\*

<!-- /wp:paragraph -->

<!-- wp:list -->

- 2021 年 11 月のセキュリティ更新プログラムで修正を行った Microsoft Excel セキュリティ機能のバイパスの脆弱性 ([CVE-2021-42292](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-42292)) および Microsoft Exchange Server リモートコード実行の脆弱性 ([CVE-2021-42321](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-42321)) は、すでに脆弱性の悪用が確認されています。対象の環境をご利用のお客様は早急に更新プログラムの適用をお願いいたします。

- Microsoft Exchange Server への更新プログラムの適用については、ガイダンスを [Microsoft Exchange Server Blog](https://techcommunity.microsoft.com/t5/exchange-team-blog/released-november-2021-exchange-server-security-updates/ba-p/2933169) で公開しています。

- 2021 年 11 月のセキュリティ更新プログラムを展開する際のガイダンスは、[2021 年 11 月のセキュリティ更新プログラムの展開に関するサポート技術情報](https://support.microsoft.com/en-us/topic/security-update-deployment-information-november-9-2021-kb5007403-e86d2ad1-a1c8-4f8f-a45b-96c3b4aa137e) も併せてご参照ください。また、セキュリティ更新プログラムにおける既知の問題は、各セキュリティ更新プログラムのサポート技術情報を参照してください。既知の問題が確認されている各セキュリティ更新プログラムのサポート技術情報一覧は、[2021 年 11 月セキュリティ更新プログラム リリースノート](https://msrc.microsoft.com/update-guide/releaseNote/2021-Nov) に掲載されています。

- 2021 年 11 月のセキュリティ更新プログラムには、脆弱性を解決するために、Active Directory における複数のセキュリティ強化が含まれています。このうち、CVE-2021-42287 から保護するためのセキュリティ強化 (KB008380) および、CVE-2021-42291 から保護するためのセキュリティ強化 (KB5008383) は、今後リリース予定のセキュリティ更新プログラムでセキュリティの強化を強制する予定です。Active Directory を利用しているお客様は、詳細は下記のサポート技術情報を参照して、必要とされている対応を実施してください。

  - [KB5008102—Active Directory Security Accounts Manager hardening changes (CVE-2021-42278)](https://support.microsoft.com/topic/5975b463-4c95-45e1-831a-d120004e258e)

  - [KB5008382—Verification of uniqueness for user principal name, service principal name, and the service principal name alias (CVE-2021-42282)](https://support.microsoft.com/en-us/topic/4651b175-290c-4e59-8fcb-e4e5cd0cdb29)

  - [KB5008380—Authentication updates (CVE-2021-42287)](https://support.microsoft.com/en-us/topic/9dafac11-e0d0-4cb8-959a-143bd0201041)

  - [KB5008383—Active Directory permissions updates (CVE-2021-42291)](https://support.microsoft.com/en-us/topic/536d5555-ffba-4248-a60e-d6cbc849cde1)

- Windows Server Update Service (WSUS) Scan Cab は、昨今の WSUS Scan Cab のサイズ肥大化に対処するため、2021 年 11 月より、従来の形式よりもファイルサイズを小さくした形式の WSUS Scan Cab の提供を開始しました。2021 年 11 月から 2022 年 2 月までは、従来の形式と新しい形式の両方を提供します。2022 年 3 月以降は、新しい形式のみ提供する予定です。WSUS Scan Cab をご利用のお客様は、新しい形式の利用を開始し、問題がある場合は Microsoft Support へご報告いただくようお願いいたします。詳細は、[Announcing a smaller WSUS Scan Cab - Microsoft Tech Community](https://techcommunity.microsoft.com/t5/windows-it-pro-blog/announcing-a-smaller-wsus-scan-cab/ba-p/2928256) を参照してください。

- **(11 月 15 日 追記)** 11 月の月例セキュリティ更新プログラムを適用後、Active Directory ドメイン環境で Kerberos 認証が失敗する現象を確認しています。本問題を解決する更新プログラムを公開しています。詳細はメッセージセンタ― [Windows message center | Microsoft Docs](https://docs.microsoft.com/en-us/windows/release-health/windows-message-center#2750) Take action: Out-of-band update to address authentication issues on DCs relating to Kerberos delegation scenarios を参照してください。

- **(11 月 17 日 追記)** 2021 年 11 月 17 日 (日本時間)、マイクロソフトは次の脆弱性の公開または更新を実施しました。

  - Windows 10 Update Assistant に影響する 2 件の脆弱性の情報を公開しました。

    - [CVE-2021-42297 Windows 10 Update Assistant の特権の昇格の脆弱性](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-42297)
    - [CVE-2021-43211 Windows 10 Update Assistant の特権の昇格の脆弱性](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-43211)

  - 2021 年 11 月の月例セキュリティ更新日に公開した次の 3 件の脆弱性の情報を更新しました。

    - [CVE-2021-40442 Microsoft Excel のリモートでコードが実行される脆弱性](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-40442)
    - [CVE-2021-42292 Microsoft Excel のセキュリティ機能のバイパスの脆弱性](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-42292)
    - [CVE-2021-42321 Microsoft Exchange Server のリモートでコードが実行される脆弱性](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-42321)

<!-- /wp:list -->

<!-- wp:paragraph -->

**_■ _\*\***_2021_\***\*_ 年 _\*\***_11_\***\*_ 月のセキュリティ更新プログラムを公開した製品、コンポーネント一覧_**

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

2021 年 10 月 12 日（米国時間）に公開したセキュリティ更新プログラムの一覧は以下です。最新の情報は、[セキュリティアップデート リリースノート](https://msrc.microsoft.com/update-guide/releaseNote/2021-Nov)を確認してください。

<!-- /wp:paragraph -->

<!-- wp:list -->

- Azure
- Azure RTOS
- Azure Sphere
- Microsoft Dynamics
- Microsoft Edge (Chromium-based)
- Microsoft Edge (Chromium-based) in IE Mode
- Microsoft Exchange Server
- Microsoft Office
- Microsoft Office Access
- Microsoft Office Excel
- Microsoft Office SharePoint
- Microsoft Office Word
- Microsoft Windows Codecs Library
- Power BI
- Role: Windows Hyper-V
- Visual Studio
- Visual Studio Code
- Windows Active Directory
- Windows COM
- Windows Core Shell
- Windows Cred SSProvider Protocol
- Windows Cryptographic Services
- Windows Defender
- Windows Desktop Bridge
- Windows Diagnostic Hub
- Windows Fastfat Driver
- Windows Feedback Hub
- Windows Hello
- Windows Installer
- Windows Kernel
- Windows NTFS
- Windows RDP
- Windows Scripting
- Windows Virtual Machine Bus

<!-- /wp:list -->

<!-- wp:paragraph -->

**_■ _\*\***_2021_\***\*_ 年 _\*\***_11_\***\*_ 月のセキュリティ更新プログラム一覧_\*\***\_\_\*\*

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

2021 年 11 月 9 日（米国時間）に公開したセキュリティ更新プログラムの一覧は以下です。最新の情報は、[セキュリティ更新プログラム ガイド](https://portal.msrc.microsoft.com/ja-jp/security-guidance) を確認してください。

<!-- /wp:paragraph -->

<!-- wp:table {"hasFixedLayout":true,"className":"is-style-stripes"} -->

|                                                                                                        |                |                              |                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------ | -------------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **製品ファミリ**                                                                                       | **最大深刻度** | **最も大きな影響**           | **関連するサポート技術情報またはサポートの Web ページ**                                                                                                                                                                                                                                                                                                                                                                                                |
| Windows 11                                                                                             | 緊急           | リモートでコードが実行される | Windows 11: [5007215](https://support.microsoft.com/help/5007215)                                                                                                                                                                                                                                                                                                                                                                                      |
| Windows 10 v21H1, v20H2, v2004, v1909                                                                  | 緊急           | リモートでコードが実行される | Windows 10 v21H1, Windows 10 v20H2, Windows 10 v2004: [5007186](https://support.microsoft.com/help/5007186) Windows 10 v1909: [5007189](https://support.microsoft.com/help/5007189)                                                                                                                                                                                                                                                                    |
| Windows Server 2022                                                                                    | 緊急           | リモートでコードが実行される | Windows Server 2022: [5007205](https://support.microsoft.com/help/5007205)                                                                                                                                                                                                                                                                                                                                                                             |
| Windows Server 2019, Windows Server 2016, and Server Core installations (2019, 2016, v20H2, and v2004) | 緊急           | リモートでコードが実行される | Windows Server, version 20H2, Windows Server, version 2004: [5007186](https://support.microsoft.com/help/5007186) Windows Server 2019: [5007206](https://support.microsoft.com/help/5007206) Windows Server 2016: [5007192](https://support.microsoft.com/help/5007192)                                                                                                                                                                                |
| Windows 8.1, Windows Server 2012 R2, Windows Server 2012                                               | 緊急           | リモートでコードが実行される | Windows 8.1 and Windows Server 2012 R2 Monthly Rollup: [5007247](https://support.microsoft.com/help/5007247) Windows 8.1 and Windows Server 2012 R2 Security Only: [5007255](https://support.microsoft.com/help/5007255) Windows Server 2012 Monthly Rollup: [5007260](https://support.microsoft.com/help/5007260) Windows Server 2012 Security Only: [5007245](https://support.microsoft.com/help/5007245)                                            |
| Microsoft Office                                                                                       | 重要           | リモートでコードが実行される | [4486670](https://support.microsoft.com/help/4486670), [5002032](https://support.microsoft.com/help/5002032), [5002035](https://support.microsoft.com/help/5002035), [5002038](https://support.microsoft.com/help/5002038), [5002053](https://support.microsoft.com/help/5002053), [5002056](https://support.microsoft.com/help/5002056), [5002065](https://support.microsoft.com/help/5002065), [5002072](https://support.microsoft.com/help/5002072) |
| Microsoft SharePoint                                                                                   | 重要           | リモートでコードが実行される | [5002063](https://support.microsoft.com/help/5002063)                                                                                                                                                                                                                                                                                                                                                                                                  |
| Microsoft Exchange Server                                                                              | 重要           | リモートでコードが実行される | [5007409](https://support.microsoft.com/help/5007409)                                                                                                                                                                                                                                                                                                                                                                                                  |
| Visual Studio                                                                                          | 緊急           | リモートでコードが実行される | セキュリティ更新プログラムの詳細については、[セキュリティ更新プログラム ガイド](https://msrc.microsoft.com/update-guide/)を参考にしてください。                                                                                                                                                                                                                                                                                                        |
| Dynamics 365                                                                                           | 緊急           | リモートでコードが実行される | [5008478](https://support.microsoft.com/help/5008478), [5008479](https://support.microsoft.com/help/5008479)                                                                                                                                                                                                                                                                                                                                           |
| Power BI Report Server                                                                                 | 重要           | なりすまし                   | [5007903](https://support.microsoft.com/help/5007903)                                                                                                                                                                                                                                                                                                                                                                                                  |
| Azure 関連ソフトウェア                                                                                 | 重要           | 特権の昇格                   | セキュリティ更新プログラムの詳細については、[セキュリティ更新プログラム ガイド](https://msrc.microsoft.com/update-guide/)を参考にしてください。                                                                                                                                                                                                                                                                                                        |
| Microsoft Malware Protection Engine                                                                    | 緊急           | リモートでコードが実行される | セキュリティ更新プログラムの詳細については、[セキュリティ更新プログラム ガイド](https://msrc.microsoft.com/update-guide/)を参考にしてください。                                                                                                                                                                                                                                                                                                        |

<!-- /wp:table -->

<!-- wp:paragraph -->

**_■ 既存の脆弱性情報の更新_\*\***\_\_\*\*

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

2021 年 11 月 9 日（米国時間）に更新したセキュリティアドバイザリ、セキュリティ脆弱性はありません。

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

**_■ 補足情報_\*\***\_\_\*\*

<!-- /wp:paragraph -->

<!-- wp:list -->

- 最新のサービス スタック更新プログラム (SSU) は、[アドバイザリ ADV990001](https://msrc.microsoft.com/update-guide/vulnerability/ADV990001) にてご確認ください。
- Microsoft Edge (Chromium-based) のセキュリティ情報は、公開のスケジュールが月例のリリースとは異なりますので、セキュリティ更新プログラム ガイド上で製品にて Microsoft Edge (Chromium-based) を選択してご確認ください。または、[Edge のセキュリティ リリース情報](https://docs.microsoft.com/deployedge/microsoft-edge-relnotes-security)にてご確認ください。
- 各脆弱性情報 (CVE) のページには、緩和策、回避策、注意事項やよく寄せられる質問など、追加の情報が掲載されている場合があります。セキュリティ更新プログラムの適用の前に、併せてご確認ください。
- 最新の情報は、[セキュリティ更新プログラム ガイド](https://portal.msrc.microsoft.com/ja-jp/security-guidance) を確認してください。セキュリティ更新プログラムガイドでは、セキュリティの脆弱性および更新プログラムの情報を、CVE、KB 番号、製品、またはリリース日別に並べ替えたりフィルターをかけたりすることができます。各月のセキュリティ更新プログラムを絞り込むには、日付範囲に絞り込む月の第 2 火曜日を指定して検索してください。なお、セキュリティ更新プログラム ガイド API を活用して、自社に特化したカスタム レポートを作成することができます。API の活用方法を紹介する 6 つのビデオ ([API の情報 (GitHub)](https://aka.ms/SUGAPIdemo1_J)、[API へのアクセス](https://aka.ms/SUGAPIdemo2_J)、[HTML ファイルの出力](https://aka.ms/SUGAPIdemo3_J)、[Excel へのエクスポート](https://aka.ms/SUGAPIdemo4_J)、[CVE リストの取得](https://aka.ms/SUGAPIdemo5_J)、[KB リストの取得](https://aka.ms/SUGAPIdemo6_J)) を公開していますので、是非ご活用ください。

<!-- /wp:list -->

<!-- wp:paragraph -->

次回のセキュリティ更新プログラムのリリースは、12 月 15 日 (日本時間) を予定しています。詳しくは、[年間スケジュール](https://aka.ms/relschedule)を参照してください。

<!-- /wp:paragraph -->

<!-- wp:separator {"className":"is-style-wide"} -->

---

<!-- /wp:separator -->

<!-- wp:paragraph -->

更新履歴

<!-- /wp:paragraph -->

<!-- wp:list -->

- 2021 年 11 月 11 日：Microsoft Exchange 用の更新プログラム番号を修正しました。正しくは、[5007409](https://support.microsoft.com/help/5007409) です。
- 2021 年 11 月 15 日：既知の問題について、追記しました。
- 2021 年 11 月 17 日：新規脆弱性情報の公開と既存の脆弱性情報の更新を追記しました。

<!-- /wp:list -->
