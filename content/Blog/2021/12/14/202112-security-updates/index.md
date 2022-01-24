---
title: '2021 年 12 月のセキュリティ更新プログラム (月例)'
description: ""
published: 2021-12-14
type: posts
redirect_from:
            - https://msrc-blog.microsoft.com/2021/12/14/202112-security-updates/
authors:
- jsecteam
categories:
- Japan Security Team
tags:
- アドバイザリ
- セキュリティ情報
- セキュリティ更新
- セキュリティ更新プログラム
- 脆弱性
hero: ../../../defaultHero.jpg
---
<!-- wp:paragraph -->

2021 年 12 月 14 日（米国時間）に、マイクロソフトは、マイクロソフト製品に影響する脆弱性を修正するために、セキュリティ更新プログラムを公開しました。お客様はできるだけ早期に、今月公開のセキュリティ更新プログラムを適用するようお願いします。最新の情報は、[セキュリティ更新プログラム ガイド](https://portal.msrc.microsoft.com/ja-jp/security-guidance) を確認してください。

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

なお、今月の「悪意のあるソフトウェアの削除ツール」では、新たに対応を追加したファミリはありません。

<!-- /wp:paragraph -->

<!-- wp:spacer {"height":25} -->

<!-- /wp:spacer -->

<!-- wp:heading -->

## セキュリティ更新プログラム、セキュリティ アドバイザリに関する主な注意点

<!-- /wp:heading -->

<!-- wp:list -->

- [CVE-2021-43890](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-43890) Windows AppX Installer なりすましの脆弱性は、既に、Emotet, Trickbot, Bazaloader などのマルウェアによって脆弱性の悪用が行われていることを確認しています。また、脆弱性の詳細が一般に公開されています。攻撃者は、フィッシングキャンペーンで特別に細工した添付ファイルなどをターゲットのユーザーに開かせるなどして、本脆弱性を悪用してます。お客様においては、早急に、修正を含む最新の Windows AppX Installer に更新を行ってください。更新を行うまでの間、組織を保護するための緩和策および回避策も公開していますので、企業組織でのリスク低減に活用してください。詳細は、[CVE-2021-43890](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-43890) を参照してください。

- [CVE-2021-43217](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-43217) Windows Encrypting File System (EFS) のリモートでコードが実行される脆弱性 の修正適用に関する注意

  - 2021 年 12 月 14 日以降の Windows 更新プログラムには、暗号化ファイル システム (EFS) クライアントでのパケット レベルのプライバシーのサポートが追加されています。また、 2021 年 12 月 14 日以降の更新プログラムがインストールされている EFS サーバーに接続する場合、Windows クライアントと Windows 以外の EFS クライアントは、パケット レベルのプライバシーを使用する必要があります。
  - **EFS を使用してネットワーク上のファイルを暗号化する環境では、クライアントからファイルをホストするサーバーまで、最初にクライアントに更新プログラムを適用してからサーバーに更新プログラムを適用することをお勧めします。** **クライアントの前にサーバーを更新すると、EFS 接続エラーが発生します。**
  - サーバーの前に EFS クライアントを更新できない環境のために、サーバーで **AllowAllCliAuth** という名前のレジストリ キーを提供しています。このレジストリキーを設定することで、2021 年 12 月 14 日以降の Windows 更新プログラムが適用されていない Windows 端末またはパケット レベルのプライバシーのサポートがない Windows 以外の端末が、EFS サーバに接続した際に、EFS 接続を許可するよう設定を変更することができます。サーバーの前に EFS クライアントを更新できない環境では、更新されていない EFS クライアントがクライアントの更新が完了するまで、**AllowAllCliAuth** レジストリを 1 に変更し EFS 接続エラーを発生させないようにしておき、EFS クライアントが更新された後は**、AllowAllCliAuth** レジストリ キーを削除するか 、**0** に設定して、すべてのクライアントに修正プログラムが適用されるのを確認してください。

  - Windows Encrypting File System (EFS) のリモートでコードが実行される脆弱性から、お客様のシステムを保護するために、マイクロソフトは段階的に脆弱性の修正を強制する予定です。2021 年 12 月の月例更新プログラムから 2022 年 2 月 22 日に公開予定の月例更新プログラムを適用した場合は、既定では EFS サーバーは、**AllowAllCliAuth** レジストリ キーを利用して、パケット レベルのプライバシーを求めるかどうかを設定することが出来ます。しかし、2022 年 3 月 8 日以降の Windows 更新プログラムをインストールすることで、EFS サーバーは AllowAllCliAuth での設定を無視し、常に、パケット レベルのプライバシーを強制するようになります。
  - 詳細は、[KB5009763: CVE-2021-43217 の EFS セキュリティ強化の変更](https://support.microsoft.com/help/5009763) を参照してください。

- 2021 年 12 月のセキュリティ更新プログラムを展開する際のガイダンスは、2021 年 12 月のセキュリティ更新プログラムの展開に関する[サポート技術情報](https://support.microsoft.com/help/5008541) も併せてご参照ください。

- セキュリティ更新プログラムにおける既知の問題は、各セキュリティ更新プログラムのサポート技術情報を参照してください。既知の問題が確認されている各セキュリティ更新プログラムのサポート技術情報一覧は、[2021 年 12 月セキュリティ更新プログラム リリースノート](https://msrc.microsoft.com/update-guide/releaseNote/2021-Dec) に掲載されています。

- 2021 年 11 月以降のセキュリティ更新プログラムには、脆弱性を解決するために、Active Directory における 4 件のセキュリティ強化が含まれています。これらのセキュリティ強化のうち、いくつかは、既存の環境への互換性による影響を鑑み、既定では有効にされていません。自環境への影響いただき、早めに設定を有効化し、脆弱性から自組織を保護していただくよう推奨しています。また、すべての Active Directory 環境が確実に保護されるように、マイクロソフトではこれらのセキュリティ強化の設定を、今後リリースする予定の更新プログラムで強制的に有効化する予定です。詳細は、[\[IT 管理者むけ\] Active Directory のセキュリティ強化への対応をご確認ください ](https://msrc-blog.microsoft.com/2021/12/14/ad-hardenings/)を確認してください。

<!-- /wp:list -->

<!-- wp:spacer {"height":50} -->

<!-- /wp:spacer -->

<!-- wp:heading -->

## 2021 年 12 月のセキュリティ更新プログラムを公開した製品、コンポーネント一覧

<!-- /wp:heading -->

<!-- wp:paragraph -->

2021 年 12 月 14 日（米国時間）に公開したセキュリティ更新プログラムの一覧は次の通りです。最新の情報は、[2021 年 12 月セキュリティ更新プログラム リリースノート](https://msrc.microsoft.com/update-guide/releaseNote/2021-Dec)を確認してください。  
ASP.NET Core & Visual Studio  
Azure Bot Framework SDK  
Internet Storage Name Service  
Microsoft Defender for IoT  
Microsoft Devices  
Microsoft Edge (Chromium-based)  
Microsoft Local Security Authority Server (lsasrv)  
Microsoft Message Queuing  
Microsoft Office  
Microsoft Office Access  
Microsoft Office Excel  
Microsoft Office SharePoint  
Microsoft PowerShell  
Microsoft Windows Codecs Library  
Office Developer Platform  
Remote Desktop Client  
Role: Windows Fax Service  
Role: Windows Hyper-V  
Visual Studio Code  
Windows Common Log File System Driver  
Windows Digital TV Tuner  
Windows DirectX  
Windows Encrypting File System (EFS)  
Windows Event Tracing  
Windows Installer  
Windows Kernel  
Windows Media  
Windows Mobile Device Management  
Windows NTFS  
Windows Print Spooler Components  
Windows Remote Access Connection Manager  
Windows Storage  
Windows Storage Spaces Controller  
Windows SymCrypt  
Windows TCP/IP  
Windows Update Stack

<!-- /wp:paragraph -->

<!-- wp:spacer {"height":50} -->

<!-- /wp:spacer -->

<!-- wp:paragraph -->

<!-- /wp:paragraph -->

<!-- wp:heading -->

## 2021 年 12 月のセキュリティ更新プログラム一覧

<!-- /wp:heading -->

<!-- wp:paragraph -->

2021 年 12 月 14 日（米国時間）にに公開したセキュリティ更新プログラムの一覧は次の通りです。最新の情報は、[セキュリティ更新プログラム ガイド](https://portal.msrc.microsoft.com/ja-jp/security-guidance) を確認してください。

<!-- /wp:paragraph -->

<!-- wp:table {"hasFixedLayout":true,"className":"is-style-regular"} -->

|                                                                                                        |            |                              |                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------ | ---------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 製品ファミリ                                                                                           | 最大深刻度 | 最も大きな影響               | 関連するサポート技術情報またはサポートの Web ページ                                                                                                                                                                                                                                                                                                                                                                                  |
| Windows 11                                                                                             | 緊急       | リモートでコードが実行される | [KB5008215](https://www.catalog.update.microsoft.com/Search.aspx?q=KB5008215)                                                                                                                                                                                                                                                                                                                                                        |
| Windows 10 v21H2, v21H1, v20H2, v2004, v1909                                                           | 緊急       | リモートでコードが実行される | Windows 10 v21H2, v21H1, v20H2, v2004: [KB5008212](https://www.catalog.update.microsoft.com/Search.aspx?q=KB5008212) Windows 10 v1909: [KB5008206](https://www.catalog.update.microsoft.com/Search.aspx?q=KB5008206)                                                                                                                                                                                                                 |
| Windows Server 2022                                                                                    | 緊急       | リモートでコードが実行される | [KB5008223](https://www.catalog.update.microsoft.com/Search.aspx?q=KB5008223)                                                                                                                                                                                                                                                                                                                                                        |
| Windows Server 2019, Windows Server 2016, and Server Core installations (2019, 2016, v20H2, and v2004) | 緊急       | リモートでコードが実行される | Windows Server 2019: [KB5008218](https://www.catalog.update.microsoft.com/Search.aspx?q=KB5008218) Windows Server 2016: [KB5008207](https://www.catalog.update.microsoft.com/Search.aspx?q=KB5008207) Windows Server, version v20H2, v2004: [KB5008212](https://www.catalog.update.microsoft.com/Search.aspx?q=KB5008212)                                                                                                            |
| Windows 8.1, Windows Server 2012 R2, Windows Server 2012                                               | 緊急       | リモートでコードが実行される | Windows 8.1, Windows Server 2012R2: [5008263](https://www.catalog.update.microsoft.com/Search.aspx?q=5008263) (Monthly Rollup), [5008285](https://www.catalog.update.microsoft.com/Search.aspx?q=5008285) (Security Only) Windows Server 2012: [5008277](https://www.catalog.update.microsoft.com/Search.aspx?q=5008277) (Monthly Rollup), [5008255](https://www.catalog.update.microsoft.com/Search.aspx?q=5008255) (Security Only) |
| Microsoft Office                                                                                       | 緊急       | リモートでコードが実行される | セキュリティ更新プログラムの詳細については、[https](https://docs.microsoft.com/officeupdates)[://docs.microsoft.com/](https://docs.microsoft.com/officeupdates)[officeupdates](https://docs.microsoft.com/officeupdates) を参考にしてください。                                                                                                                                                                                      |
| Microsoft SharePoint                                                                                   | 重要       | リモートでコードが実行される | セキュリティ更新プログラムの詳細については、[https](https://docs.microsoft.com/officeupdates/sharepoint-updates)[://docs.microsoft.com/officeupdates/](https://docs.microsoft.com/officeupdates/sharepoint-updates)[sharepoint-updates](https://docs.microsoft.com/officeupdates/sharepoint-updates) を参考にしてください。                                                                                                          |
| Microsoft ASP.NET Core                                                                                 | 重要       | 特権の昇格                   | セキュリティ更新プログラムの詳細については、 [https://docs.microsoft.com/aspnet/core](https://docs.microsoft.com/aspnet/core/)[/](https://docs.microsoft.com/aspnet/core/) を参考にしてください。                                                                                                                                                                                                                                    |
| Microsoft Visual Studio                                                                                | 緊急       | リモートでコードが実行される | セキュリティ更新プログラムの詳細については、[https](https://docs.microsoft.com/visualstudio)[://docs.microsoft.com/](https://docs.microsoft.com/visualstudio)[visualstudio](https://docs.microsoft.com/visualstudio) を参考にしてください。                                                                                                                                                                                          |
| Microsoft Defender for IoT                                                                             | 緊急       | リモートでコードが実行される | セキュリティ更新プログラムの詳細については、[https](https://docs.microsoft.com/azure/defender-for-iot/)[://docs.microsoft.com/azure/defender-for-iot](https://docs.microsoft.com/azure/defender-for-iot/)[/](https://docs.microsoft.com/azure/defender-for-iot/)を参考にしてください。                                                                                                                                               |
| Microsoft PowerShell                                                                                   | 重要       | なりすまし                   | セキュリティ更新プログラムの詳細については、[https](https://docs.microsoft.com/powershell)[://docs.microsoft.com/](https://docs.microsoft.com/powershell)[powershell](https://docs.microsoft.com/powershell) を参考にしてください。                                                                                                                                                                                                  |

<!-- /wp:table -->

<!-- wp:spacer {"height":50} -->

<!-- /wp:spacer -->

<!-- wp:heading -->

## 既存の脆弱性情報の更新

<!-- /wp:heading -->

<!-- wp:paragraph -->

2021 年 12 月 14 日（米国時間）に更新したセキュリティ脆弱性は次の通りです。

<!-- /wp:paragraph -->

<!-- wp:list -->

- [CVE-2019-0887](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2019-0887) リモート デスクトップ サービスのリモートでコードが実行される脆弱性  
  次の点が修正されました。1) Windows 11 (x64 ベース システム)、Windows 11 (ARM64 ベース システム)、Windows Server 2022、Windows Server 2022 (Server Core インストール) もこの脆弱性の影響を受けるため、これらのバージョンの Windows を「セキュリティ更新プログラム」一覧に追加しました。Windows 11 または Windows Server 2022 を実行しているお客様は、この脆弱性から保護するために、この 2021 年 12 月のセキュリティ更新プログラムをインストールする必要があります。2) 謝辞を追加しました。

<!-- /wp:list -->

<!-- wp:paragraph -->

<!-- /wp:paragraph -->

<!-- wp:list -->

- [CVE-2020-0655](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2020-0655) リモート デスクトップ サービスのリモートでコードが実行される脆弱性  
  次の点が修正されました。1) 「セキュリティ更新プログラム」一覧に、これらのバージョンの Windows がこの脆弱性の影響を受けるとして、Windows 11 for x64-based Systems、Windows 11 for ARM64-based Systems、Windows Server 2022、および Windows Server 2022 (Server Core インストール) を追加しました。Windows 11 または Windows Server 2022 を実行しているお客様は、この脆弱性から保護するために、2021 年 12 月のセキュリティ更新プログラムをインストールする必要があります。2) 謝辞を追加しました。

<!-- /wp:list -->

<!-- wp:paragraph -->

<!-- /wp:paragraph -->

<!-- wp:list -->

- [CVE-2021-1669](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-1669) Windows リモート デスクトップのセキュリティ機能のバイパスの脆弱性  
  次の点が修正されました。1) 「セキュリティ更新プログラム」一覧に、CVE-2021-1669 の影響を受ける iOS 用 Microsoft リモート デスクトップと Mac 用 Microsoft リモート デスクトップを追加しました。2) Microsoft リモート デスクトップ、Android 用 Microsoft リモート デスクトップ、および Windows デスクトップ用リモート デスクトップ クライアントのこの脆弱性を包括的に解決する新しい更新プログラムが利用可能です。これらのバージョンのリモート デスクトップのいずれかを実行しているお客様は、更新プログラムを確認し、最新の更新プログラムがインストールされていることを確認する必要があります。各アプリ ストアの更新プログラムへのリンクは、「セキュリティ更新プログラム」一覧に記載されています。

<!-- /wp:list -->

<!-- wp:paragraph -->

<!-- /wp:paragraph -->

<!-- wp:list -->

- [CVE-2021-24084](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-24084) Windows モバイル デバイス管理の情報漏えいの脆弱性  
  CVE-2021-24084 に包括的に対処するために、マイクロソフトは、すべてのサポートされる Microsoft Windows 用に 2021 年 12 月のセキュリティ更新プログラムをリリースしました。マイクロソフトは、この脆弱性から完全に保護するために、この更新プログラムをインストールすることを強くお勧めします。更新プログラムを自動的に受信するようにシステムが構成されている場合は、特別な措置を講じる必要はありません。

<!-- /wp:list -->

<!-- wp:paragraph -->

<!-- /wp:paragraph -->

<!-- wp:spacer {"height":50} -->

<!-- /wp:spacer -->

<!-- wp:heading -->

## 補足情報

<!-- /wp:heading -->

<!-- wp:list -->

- 最新のサービス スタック更新プログラム (SSU) は、[アドバイザリ ADV990001](https://msrc.microsoft.com/update-guide/vulnerability/ADV990001) にてご確認ください。
- Microsoft Edge (Chromium-based) のセキュリティ情報は、公開のスケジュールが月例のリリースとは異なりますので、セキュリティ更新プログラム ガイド上で製品にて Microsoft Edge (Chromium-based) を選択してご確認ください。または、[Edge のセキュリティ リリース情報](https://docs.microsoft.com/deployedge/microsoft-edge-relnotes-security)にてご確認ください。
- 各脆弱性情報 (CVE) のページには、緩和策、回避策、注意事項やよく寄せられる質問など、追加の情報が掲載されている場合があります。セキュリティ更新プログラムの適用の前に、併せてご確認ください。
- 最新の情報は、[セキュリティ更新プログラム ガイド](https://portal.msrc.microsoft.com/ja-jp/security-guidance) を確認してください。セキュリティ更新プログラムガイドでは、セキュリティの脆弱性および更新プログラムの情報を、CVE、KB 番号、製品、またはリリース日別に並べ替えたりフィルターをかけたりすることができます。各月のセキュリティ更新プログラムを絞り込むには、日付範囲に絞り込む月の第 2 火曜日を指定して検索してください。なお、セキュリティ更新プログラム ガイド API を活用して、自社に特化したカスタム レポートを作成することができます。API の活用方法を紹介する 6 つのビデオ ([API の情報 (GitHub)](https://aka.ms/SUGAPIdemo1_J)、[API へのアクセス](https://aka.ms/SUGAPIdemo2_J)、[HTML ファイルの出力](https://aka.ms/SUGAPIdemo3_J)、[Excel へのエクスポート](https://aka.ms/SUGAPIdemo4_J)、[CVE リストの取得](https://aka.ms/SUGAPIdemo5_J)、[KB リストの取得](https://aka.ms/SUGAPIdemo6_J)) を公開していますので、是非ご活用ください。

<!-- /wp:list -->

<!-- wp:paragraph -->

次回のセキュリティ更新プログラムのリリースは、2022 年 1 月 12 日 (日本時間) を予定しています。詳しくは、[年間スケジュール](https://msrc-blog.microsoft.com/2021/11/21/securityupdatereleaseschedule2022/)を参照してください。

<!-- /wp:paragraph -->
