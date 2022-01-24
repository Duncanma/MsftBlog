---
title: '2020 年 3 月のセキュリティ更新プログラム (月例)'
description: ""
published: 2020-03-10
type: posts
redirect_from:
            - https://msrc-blog.microsoft.com/2020/03/10/202003-security-updates/
author: jsecteam
categories:
- Japan Security Team
- アドバイザリ
- セキュリティ情報
- セキュリティ更新
- 脆弱性
hero: ../../../defaultHero.jpg
---
2020 年 3 月 11 日 (日本時間)、マイクロソフトは以下のソフトウェアのセキュリティ更新プログラムを公開しました。

- Microsoft Windows
- Internet Explorer
- Microsoft Edge (EdgeHTML-based)
- Microsoft Edge (Chromium-based)
- ChakraCore
- Microsoft Office、Microsoft Office Servers および Web Apps
- Microsoft Exchange Server
- Azure DevOps
- Windows Defender
- Visual Studio
- Open Source Software
- Azure
- Microsoft Dynamics

新規セキュリティ更新プログラムを公開すると共に、新規のセキュリティ アドバイザリ 1 件の公開、既存のセキュリティ アドバイザリ 1 件の更新、既存の脆弱性情報 4 件の更新を行いました。なお、今月の「悪意のあるソフトウェアの削除ツール」では、新たに対応を追加したファミリはありません。

**_■ セキュリティ更新プログラム、セキュリティ アドバイザリに関する主な注意点_**

- 2020 年 3 月の定例リリースにて更新された[ ADV190023](https://portal.msrc.microsoft.com/ja-jp/security-guidance/advisory/ADV190023) の Windows Server ならびに Windows Client 向けのセキュリティ更新プログラムを適用し、LDAP 署名ならびに LDAP チャネルバインディングの有効化に向けた準備を行うことをお勧めします。詳細は、セキュリティ アドバイザリ[ ADV190023](https://portal.msrc.microsoft.com/ja-jp/security-guidance/advisory/ADV190023) ならびに、サポート技術情報 [4520412](https://support.microsoft.com/ja-jp/help/4520412) をご参照ください。
- 2020 年 3 月の定例リリースにて、SMBv3 に関するセキュリティ アドバイザリ [ADV200005](https://portal.msrc.microsoft.com/ja-JP/security-guidance/advisory/ADV200005) を公開しています。また 2020 年 3 月 13 日に定例外のリリースとして、SMBv3 の脆弱性 [CVE-2020-0796](https://portal.msrc.microsoft.com/ja-jp/security-guidance/advisory/CVE-2020-0796) に対するセキュリティ更新プログラムを公開しています。詳細は、脆弱性情報 [CVE-2020-0796](https://portal.msrc.microsoft.com/ja-jp/security-guidance/advisory/CVE-2020-0796) ならびに、セキュリティ アドバイザリ [ADV200005](https://portal.msrc.microsoft.com/ja-JP/security-guidance/advisory/ADV200005) をご参照ください。
- UAC が有効になっているサーバー上で、Exchange 向けの更新プログラムを標準モード (管理者権限ではなく) で手動でインストールした際に、いくつかのファイルが正しく更新されず、OWA や ECP が正常に動作しない可能性があります。管理者権限で更新プログラムをインストールすることをお勧めします。詳細は、サポート技術情報 [4540123](https://support.microsoft.com/ja-jp/help/4540123) をご参照ください。

お客様はできるだけ早期に、今月公開のセキュリティ更新プログラムを適用するようお願いします。

**_■ _\*\***_2020_\***\*_ 年 _\*\***_3_\***\*_ 月のセキュリティ更新プログラム_**

セキュリティの脆弱性および更新プログラムの情報を、CVE、KB 番号、製品、またはリリース日別に並べ替えたりフィルターをかけたりすることができます。

[セキュリティ更新プログラム ガイド](https://portal.msrc.microsoft.com/ja-jp/security-guidance)

各月のセキュリティ更新プログラムを絞り込むには、日付範囲に絞り込む月の第 2 火曜日を指定して検索してください。

なお、セキュリティ更新プログラム ガイド API を活用して、自社に特化したカスタム レポートを作成することができます。API の活用方法を紹介する 6 つのビデオ ([API の情報 (GitHub)](https://aka.ms/SUGAPIdemo1_J)、[API へのアクセス](https://aka.ms/SUGAPIdemo2_J)、[HTML ファイルの出力](https://aka.ms/SUGAPIdemo3_J)、[Excel へのエクスポート](https://aka.ms/SUGAPIdemo4_J)、[CVE リストの取得](https://aka.ms/SUGAPIdemo5_J)、[KB リストの取得](https://aka.ms/SUGAPIdemo6_J)) を公開していますので、是非ご活用ください。

---

マイクロソフトは新たに確認した脆弱性について、下記の新しいセキュリティ更新プログラムを公開しました。

|                                                                                                          |                |                              |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------- | -------------- | ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **製品ファミリ**                                                                                         | **最大深刻度** | **最も大きな影響**           | **関連するサポート技術情報またはサポートの\*\*** Web \***\*ページ**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| **Windows 10 v1909、v1903、v1809、v1803、v1709**                                                         | **緊急**       | リモートでコードが実行される | Windows 10 v1903 および Windows 10 v1909: [4540673](https://support.microsoft.com/ja-jp/help/4540673)、Windows 10 v1809: [4538461](https://support.microsoft.com/ja-jp/help/4538461)、Windows 10 v1803: [4540689](https://support.microsoft.com/ja-jp/help/4540689)、Windows 10 v1709: [4540681](https://support.microsoft.com/ja-jp/help/4540681)                                                                                                                                                                                                                                                                                                                                                                                                                   |
| **Windows Server 2019、Windows Server 2016、Server Core インストール (2019、2016、v1909、v1903、v1803)** | **緊急**       | リモートでコードが実行される | Windows Server 2019: [4538461](https://support.microsoft.com/ja-jp/help/4538461)、Windows Server 2016: [4540670](https://support.microsoft.com/ja-jp/help/4540670)、Windows Server v1903 および Windows Server v1909: [4540673](https://support.microsoft.com/ja-jp/help/4540673)、Windows Server v1803: [4540689](https://support.microsoft.com/ja-jp/help/4540689)                                                                                                                                                                                                                                                                                                                                                                                                 |
| **Windows 8.1、Windows Server 2012 R2、Windows Server 2012**                                             | **緊急**       | リモートでコードが実行される | Windows 8.1 および Windows Server 2012 R2 マンスリー ロールアップ: [4541509](https://support.microsoft.com/ja-jp/help/4541509)、Windows 8.1 および Windows Server 2012 R2 セキュリティのみ: [4541505](https://support.microsoft.com/ja-jp/help/4541505)、Windows Server 2012 マンスリー ロールアップ: [4541510](https://support.microsoft.com/ja-jp/help/4541510)、Windows Server 2012 セキュリティのみ: [4540694](https://support.microsoft.com/ja-jp/help/4540694)                                                                                                                                                                                                                                                                                                 |
| **Internet Explorer**                                                                                    | **緊急**       | リモートでコードが実行される | Internet Explorer の累積的な更新プログラム: [4540671](https://support.microsoft.com/ja-jp/help/4540671)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| **Microsoft Office 関連のソフトウェア**                                                                  | **緊急**       | リモートでコードが実行される | Microsoft Office に関連するサポート技術情報: _[4484268](https://support.microsoft.com/ja-jp/help/4484268)_、_[4484231](https://support.microsoft.com/ja-jp/help/4484231)_、_[4484270](https://support.microsoft.com/ja-jp/help/4484270)_、_[4484237](https://support.microsoft.com/ja-jp/help/4484237)_、_[4484240](https://support.microsoft.com/ja-jp/help/4484240)_、_[4475602](https://support.microsoft.com/ja-jp/help/4475602)_                                                                                                                                                                                                                                                                                                                                |
| **Microsoft SharePoint 関連のソフトウェア**                                                              | **緊急**       | リモートでコードが実行される | Microsoft SharePoint に関連するサポート技術情報: _[4484271](https://support.microsoft.com/ja-jp/help/4484271)_、_[4484277](https://support.microsoft.com/ja-jp/help/4484277)_、_[4484272](https://support.microsoft.com/ja-jp/help/4484272)_、_[4484275](https://support.microsoft.com/ja-jp/help/4484275)_、_[4475606](https://support.microsoft.com/ja-jp/help/4475606)_、_[4484150](https://support.microsoft.com/ja-jp/help/4484150)_、_[4484197](https://support.microsoft.com/ja-jp/help/4484197)_、_[4484282](https://support.microsoft.com/ja-jp/help/4484282)_、_[4484124](https://support.microsoft.com/ja-jp/help/4484124)_、_[4475597](https://support.microsoft.com/ja-jp/help/4475597)_、_[4484242](https://support.microsoft.com/ja-jp/help/4484242)_ |
| **Microsoft Exchange Server**                                                                            | **重要**       | なりすまし                   | Microsoft Exchange Server に関連するサポート技術情報: _[4540123](https://support.microsoft.com/ja-jp/help/4540123)_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| **Visual Studio**                                                                                        | **重要**       | 特権の昇格                   | Visual Studio のセキュリティ更新プログラムの詳細については、_<https://portal.msrc.microsoft.com/ja-jp/security-guidance>_ を参照してください                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| **Azure DevOps Server、Team Foundation Server**                                                          | **重要**       | 特権の昇格                   | Azure DevOps または Team Foundation Server のセキュリティ更新プログラムの詳細については、_<https://portal.msrc.microsoft.com/ja-jp/security-guidance>_ を参照してください                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| **ChakraCore**                                                                                           | **緊急**       | リモートでコードが実行される | ChakraCore は Chakra のコア部分であり、HTML/CSS/JS で記述された Microsoft Edge と Windows アプリケーションを強化する高パフォーマンスの JavaScript エンジンです。詳細については、_<https://github.com/Microsoft/ChakraCore/wiki>_ (英語情報) と _<https://github.com/Microsoft/ChakraCore/releases/>_ (英語情報) を参照してください。                                                                                                                                                                                                                                                                                                                                                                                                                                 |

**_■ 新規の脆弱性情報の定例外の公開_**

- 2020 年 3 月 13 日 (日本時間)、[CVE-2020-0796](https://portal.msrc.microsoft.com/ja-JP/security-guidance/advisory/CVE-2020-0796) (SMBv3) を公開しました。

**_■ 新規のセキュリティ アドバイザリの公開_**

- [アドバイザリ ADV200005](https://portal.msrc.microsoft.com/ja-jp/security-guidance/advisory/ADV200005) (SMBv3) を公開しました。

**_■ 既存の脆弱性情報とセキュリティ アドバイザリの更新_**

- [CVE-2020-0605](https://portal.msrc.microsoft.com/ja-JP/security-guidance/advisory/CVE-2020-0605) (.NET Framework) を更新しました。
- [CVE-2019-1224](https://portal.msrc.microsoft.com/ja-JP/security-guidance/advisory/CVE-2019-1224) (RDP Server) を更新しました。
- [CVE-2019-1225](https://portal.msrc.microsoft.com/ja-JP/security-guidance/advisory/CVE-2019-1225) (RDP Server) を更新しました。
- [CVE-2019-1226](https://portal.msrc.microsoft.com/ja-JP/security-guidance/advisory/CVE-2019-1226) (RDS) を更新しました。
- [アドバイザリ ADV190023 ](https://portal.msrc.microsoft.com/ja-jp/security-guidance/advisory/adv190023)(LDAP) を更新しました。
- 2020 年 3 月 24 日 (日本時間)、[ADV200006](https://portal.msrc.microsoft.com/ja-JP/security-guidance/advisory/ADV200006) (Type 1 Font Parsing) を公開しました。

最新のサービス スタック更新プログラム (SSU) は、[アドバイザリ ADV990001](https://portal.msrc.microsoft.com/ja-jp/security-guidance/advisory/ADV990001) にてご確認ください。

2020 年の Microsoft Edge (Chromium-based) のセキュリティ情報は、[アドバイザリ ADV200002](https://portal.msrc.microsoft.com/ja-JP/security-guidance/advisory/ADV200002) にてご確認ください。

次回のセキュリティ更新プログラムのリリースは、4 月 15 日 (日本時間) を予定しています。詳しくは、[年間スケジュール](https://aka.ms/relschedule)を参照してください。

———————————

\* 2020 年 03 月 13 日: [CVE-2020-0796](https://portal.msrc.microsoft.com/ja-JP/security-guidance/advisory/CVE-2020-0796) の公開を追加しました。

\* 2020 年 03 月 24 日: [ADV200006](https://portal.msrc.microsoft.com/ja-JP/security-guidance/advisory/ADV200006) の公開を追加しました。
