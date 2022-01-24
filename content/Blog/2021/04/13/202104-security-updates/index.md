---
title: '2021 年 4 月のセキュリティ更新プログラム (月例)'
description: ""
published: 2021-04-13
type: posts
redirect_from:
            - https://msrc-blog.microsoft.com/2021/04/13/202104-security-updates/
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
2021 年 4 月 14 日 (日本時間)、マイクロソフトは以下のソフトウェアのセキュリティ更新プログラムを公開しました。

- Azure AD Web Sign-in
- Azure DevOps
- Azure Sphere
- Microsoft Edge (Chromium-based)
- Microsoft Exchange Server
- Microsoft Graphics Component
- Microsoft Internet Messaging API
- Microsoft NTFS
- Microsoft Office Excel
- Microsoft Office Outlook
- Microsoft Office SharePoint
- Microsoft Office Word
- Microsoft Windows Codecs Library
- Microsoft Windows Speech
- Open Source Software
- Role: DNS Server
- Role: Hyper-V
- Visual Studio
- Visual Studio Code
- Visual Studio Code - GitHub Pull Requests and Issues Extension
- Visual Studio Code - Kubernetes Tools
- Visual Studio Code - Maven for Java Extension
- Windows Application Compatibility Cache
- Windows AppX Deployment Extensions
- Windows Console Driver
- Windows Diagnostic Hub
- Windows Early Launch Antimalware Driver
- Windows ELAM
- Windows Event Tracing
- Windows Installer
- Windows Kernel
- Windows Media Player
- Windows Network File System
- Windows Overlay Filter
- Windows Portmapping
- Windows Registry
- Windows Remote Procedure Call Runtime
- Windows Resource Manager
- Windows Secure Kernel Mode
- Windows Services and Controller App
- Windows SMB Server
- Windows TCP/IP
- Windows Win32K
- Windows WLAN Auto Config Service

新規セキュリティ更新プログラムを公開すると共に、既存の脆弱性情報 1 件の更新を行いました。なお、今月の「悪意のあるソフトウェアの削除ツール」では、新たに CobaltLoader.A/IISExchgSpawnCMD.A/Kwampirs などに対する定義ファイルが追加されています。

**_■ セキュリティ更新プログラム、セキュリティ アドバイザリに関する主な注意点_**

- 2021 年 4 月の定例リリースにて、オンプレミスの Exchange Server に対する新しい脆弱性情報 ([CVE-2021-28480](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-28480)/[CVE-2021-28481](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-28481)/[CVE-2021-28482](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-28482)/[CVE-2021-28483](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-28483)) を公開しました。情報公開時には一般に公開されておらず、悪用されたことも確認されていません。ただし、最近の攻撃者が Exchange に注目していることを考慮すると、これらの脅威やその他の脅威から保護された状態を維持するために、最新のセキュリティ更新プログラムをできるだけ早くインストールすることをお勧めします。なお Exchange Online は既に保護されていて特別な対応は必要ありません。詳細は [Exchange Blog](https://techcommunity.microsoft.com/t5/exchange-team-blog/released-april-2021-exchange-server-security-updates/ba-p/2254617) (英語情報) ならびに [MSRC Blog](http://aka.ms/April2021SecUpdate) (英語情報) をご参照ください。
- 2021 年 3 月の定例リリースに公開された Windows 10 のセキュリティ更新プログラムを適用後に確認されていた、2 つの印刷に関する問題 (印刷時のブルースクリーンになる問題と画像ファイルが正しく印刷されない問題) は 3 月に公開した定例外の更新プログラムで修正されており、4 月のセキュリティ更新プログラムにもその修正が含まれています。
- 2020 年 11 月の定例リリースに公開された [CVE-2020-17049](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2020-17049) (Kerberos KDC) は、今月公開したセキュリティ更新プログラムを適用することで第二展開フェーズへ移行となります PerformTicketSignature 設定 0 が削除されます)。このセキュリティ更新プログラムはフォレスト内のすべてのドメインコントローラに適用する必要があります。詳細はサポート技術情報 [4598347](https://support.microsoft.com/ja-jp/help/4598347) ならびに、「[Kerberos KDC の脆弱性 (CVE-2020-17049) に対応するためのガイダンス](https://msrc-blog.microsoft.com/2020/11/19/20201120_cve-2020-17049/)」をご参照ください。
- 2021 年 4 月の定例リリースに公開された Windows 10 のセキュリティ更新プログラムにて、3 月にサポートが終了した Edge HTML が新しい Edge Chromium に置き換わります (Windows 10 1803/1809 は 5 月の定例リリースでの変更予定)。詳細は、[Microsoft 365 blog](https://techcommunity.microsoft.com/t5/microsoft-365-blog/new-microsoft-edge-to-replace-microsoft-edge-legacy-with-april-s/ba-p/2114224) (英語情報) をご参照ください。
- 2021 年 4 月の定例リリースに公開された Windows OS のセキュリティ更新プログラムにて、RemoteFX vGPU のコンポーネントが削除されます。詳細は、[サポート技術情報](https://support.microsoft.com/en-us/topic/update-to-disable-and-remove-the-remotefx-vgpu-component-in-windows-bbdf1531-7188-2bf4-0de6-641de79f09d2)をご参照ください。
- Windows Update に関する既知の問題や回避策、解決策を公開している [Windows Release Health](https://aka.ms/wrh) が、Microsoft 365 管理センター上においても利用可能となりました。詳細は、[Windows IT Pro Blog](https://techcommunity.microsoft.com/t5/windows-it-pro-blog/windows-release-health-now-available-in-the-admin-center/ba-p/2235908) (英語情報) をご参照ください。
- Windows 10 20H1 と 20H2 は、サービススタック更新 (SSU) が最新の累積的な更新プログラム (LCU) に統合され、最新の累積的な更新プログラムのみを適用するように変更となっています。詳細は、[Windows IT Pro Blog](https://techcommunity.microsoft.com/t5/windows-it-pro-blog/deploy-windows-ssus-and-lcus-together-with-one-cumulative-update/ba-p/1967887) (英語情報) をご参照ください。
- UAC が有効になっているサーバー上で、Exchange 向けの更新プログラムを標準モード (管理者権限ではなく) で手動でインストールした際に、いくつかのファイルが正しく更新されず、OWA や ECP が正常に動作しない可能性があります。管理者権限で更新プログラムをインストールすることをお勧めします。詳細は、サポート技術情報 [5001779](https://support.microsoft.com/ja-jp/help/5001779) をご参照ください。

お客様はできるだけ早期に、今月公開のセキュリティ更新プログラムを適用するようお願いします。

**_■ _\*\***_2021_\***\*_ 年 _\*\***_4_\***\*_ 月のセキュリティ更新プログラム_**

セキュリティの脆弱性および更新プログラムの情報を、CVE、KB 番号、製品、またはリリース日別に並べ替えたりフィルターをかけたりすることができます。

[セキュリティ更新プログラム ガイド](https://portal.msrc.microsoft.com/ja-jp/security-guidance)

各月のセキュリティ更新プログラムを絞り込むには、日付範囲に絞り込む月の第 2 火曜日を指定して検索してください。

なお、セキュリティ更新プログラム ガイド API を活用して、自社に特化したカスタム レポートを作成することができます。API の活用方法を紹介する 6 つのビデオ ([API の情報 (GitHub)](https://aka.ms/SUGAPIdemo1_J)、[API へのアクセス](https://aka.ms/SUGAPIdemo2_J)、[HTML ファイルの出力](https://aka.ms/SUGAPIdemo3_J)、[Excel へのエクスポート](https://aka.ms/SUGAPIdemo4_J)、[CVE リストの取得](https://aka.ms/SUGAPIdemo5_J)、[KB リストの取得](https://aka.ms/SUGAPIdemo6_J)) を公開していますので、是非ご活用ください。

---

マイクロソフトは新たに確認した脆弱性について、下記の新しいセキュリティ更新プログラムを公開しました。

|                                                                                                                                                                                              |                |                              |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- | ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **製品ファミリ**                                                                                                                                                                             | **最大深刻度** | **最も大きな影響**           | **関連するサポート技術情報またはサポートの\*\*** Web \***\*ページ**                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| **Windows 10 v20H2\*\***、\***\*v2004\*\***、\***\*v1909\*\***、\***\*v1809\*\***、\***\*v1803**                                                                                             | **緊急**       | リモートでコードが実行される | Windows 10 v2004 および Windows 10 v20H2: [_5001330_](https://support.microsoft.com/ja-jp/help/5001330)Windows 10 v1909: [_5001337_](https://support.microsoft.com/ja-jp/help/5001337)Windows 10 v1809: [_5001342_](https://support.microsoft.com/ja-jp/help/5001342)Windows 10 v1803: [_5001339_](https://support.microsoft.com/ja-jp/help/5001339)                                                                                                                                                                   |
| **Windows Server 2019\*\***、\***\*Windows Server 2016\*\***、\***\*Server Core \*\***インストール\***\* (2019\*\***、\***\*2016\*\***、\***\*v20H2\*\***、\***\*v2004\*\***、\***\*v1909)** | **緊急**       | リモートでコードが実行される | Windows Server 2019: [_5001342_](https://support.microsoft.com/ja-jp/help/5001342)Windows Server 2016: [_5001347_](https://support.microsoft.com/ja-jp/help/5001347)Windows Server v2004 および Windows Server v20H2: [_5001330_](https://support.microsoft.com/ja-jp/help/5001330)Windows Server v1909: [_5001337_](https://support.microsoft.com/ja-jp/help/5001337)                                                                                                                                                 |
| **Windows 8.1\*\***、\***\*Windows Server 2012 R2\*\***、および\***\* Windows Server 2012**                                                                                                  | **緊急**       | リモートでコードが実行される | Windows 8.1 および Windows Server 2012 R2 マンスリー ロールアップ: [_5001382_](https://support.microsoft.com/ja-jp/help/5001382)Windows 8.1 および Windows Server 2012 R2 セキュリティのみ: [_5001393_](https://support.microsoft.com/ja-jp/help/5001393)Windows Server 2012 マンスリー ロールアップ: [_5001387_](https://support.microsoft.com/ja-jp/help/5001387)Windows Server 2012 セキュリティのみ: [_5001383_](https://support.microsoft.com/ja-jp/help/5001383)                                                 |
| **Microsoft Office \*\***関連のソフトウェア\*\*                                                                                                                                              | **重要**       | リモートでコードが実行される | 今月は、20 件を超える Office 関連のサポート技術情報があります。詳細な一覧については、[_https://msrc.microsoft.com/update-guide_](https://msrc.microsoft.com/update-guide) を参照してください。                                                                                                                                                                                                                                                                                                                         |
| **Microsoft SharePoint \*\***関連のソフトウェア\*\*                                                                                                                                          | **重要**       | リモートでコードが実行される | [_4504701_](https://support.microsoft.com/ja-jp/help/4504701)、[_4504709_](https://support.microsoft.com/ja-jp/help/4504709)、[_4504716_](https://support.microsoft.com/ja-jp/help/4504716)、[_4493170_](https://support.microsoft.com/ja-jp/help/4493170)、[_4504719_](https://support.microsoft.com/ja-jp/help/4504719)、[_4504715_](https://support.microsoft.com/ja-jp/help/4504715)、[_4493201_](https://support.microsoft.com/ja-jp/help/4493201)、[_4504723_](https://support.microsoft.com/ja-jp/help/4504723) |
| **Microsoft Exchange Server**                                                                                                                                                                | **緊急**       | リモートでコードが実行される | Exchange Server のセキュリティ更新プログラムの詳細については、セキュリティ更新プログラム ガイド[_https://msrc.microsoft.com/update-guide_](https://msrc.microsoft.com/update-guide) を参照してください                                                                                                                                                                                                                                                                                                                 |
| **Azure DevOps Server\*\***、\***\*Team Foundation Server**                                                                                                                                  | **重要**       | 情報漏えい                   | Azure DevOps Server/Team Foundation Server のセキュリティ更新プログラムの詳細については、[_https://docs.microsoft.com/azure/devops_](https://docs.microsoft.com/azure/devops) を参照してください。                                                                                                                                                                                                                                                                                                                     |
| **Azure \*\***関連のソフトウェア\*\*                                                                                                                                                         | **緊急**       | リモートでコードが実行される | Azure 関連ソフトウェアのセキュリティ更新プログラムの詳細については、セキュリティ更新プログラム ガイド[_https://msrc.microsoft.com/update-guide_](https://msrc.microsoft.com/update-guide) を参照してください                                                                                                                                                                                                                                                                                                           |
| **Microsoft Visual Studio \*\***関連のソフトウェア\*\*                                                                                                                                       | **重要**       | リモートでコードが実行される | Visual Studio 関連ソフトウェアのセキュリティ更新プログラムの詳細については、[_https://docs.microsoft.com/ja-jp/visualstudio_](https://docs.microsoft.com/ja-jp/visualstudio) とセキュリティ更新プログラム ガイド[_https://msrc.microsoft.com/update-guide_](https://msrc.microsoft.com/update-guide) を参照してください                                                                                                                                                                                                |
| **VP9 \*\***ビデオ拡張機能と\***\* Raw \*\***画像拡張機能\*\*                                                                                                                                | **重要**       | リモートでコードが実行される | VP9 ビデオ拡張機能と Raw 画像拡張機能のセキュリティ更新プログラムの詳細については、セキュリティ更新プログラム ガイド[_https://msrc.microsoft.com/update-guide_](https://msrc.microsoft.com/update-guide) を参照してください                                                                                                                                                                                                                                                                                            |

**_■ 既存の脆弱性情報とセキュリティ アドバイザリの更新_**

- [CVE-2020-17049](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2020-17049) (Kerberos KDC) を更新しました。

最新のサービス スタック更新プログラム (SSU) は、[アドバイザリ ADV990001](https://msrc.microsoft.com/update-guide/vulnerability/ADV990001) にてご確認ください。

Microsoft Edge (Chromium-based) のセキュリティ情報は、公開のスケジュールが月例のリリースとは異なりますので、セキュリティ更新プログラム ガイド上で製品にて Microsoft Edge (Chromium-based) を選択してご確認ください。[Edge のセキュリティ リリース情報](https://docs.microsoft.com/deployedge/microsoft-edge-relnotes-security)にてご確認ください。

次回のセキュリティ更新プログラムのリリースは、5 月 12 日 (日本時間) を予定しています。詳しくは、[年間スケジュール](https://aka.ms/relschedule)を参照してください。
