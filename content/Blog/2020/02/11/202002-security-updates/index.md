---
title: '2020 年 2 月のセキュリティ更新プログラム (月例)'
description: ""
published: 2020-02-11
type: posts
redirect_from:
            - https://msrc-blog.microsoft.com/2020/02/11/202002-security-updates/
author: jsecteam
categories:
- Japan Security Team
- アドバイザリ
- セキュリティ情報
- セキュリティ更新
- 脆弱性
hero: ../../../defaultHero.jpg
---
2020 年 2 月 12 日 (日本時間)、マイクロソフトは以下のソフトウェアのセキュリティ更新プログラムを公開しました。

- Microsoft Windows
- Internet Explorer
- Microsoft Edge (EdgeHTML-based)
- Microsoft Edge (Chromium-based)
- ChakraCore
- Microsoft Office、Microsoft Office Servers および Web Apps
- Adobe Flash Player
- Microsoft Exchange Server
- Microsoft SQL Server
- Windows Malicious Software Removal Tool
- Windows Surface Hub

新規セキュリティ更新プログラムを公開すると共に、既存の脆弱性情報 2 件の更新を行いました。なお、今月の「悪意のあるソフトウェアの削除ツール」では、新たに対応を追加したファミリはありません。

**_■ セキュリティ更新プログラム、セキュリティ アドバイザリに関する主な注意点_**

- 2020 年 1 月に定例外で公開したセキュリティ アドバイザリ [ADV200001](https://portal.msrc.microsoft.com/ja-JP/security-guidance/advisory/ADV200001) に関連したセキュリティ更新プログラムは、脆弱性情報 [CVE-2020-0674](https://portal.msrc.microsoft.com/ja-JP/security-guidance/advisory/CVE-2020-0674) にて公開しています。詳細は、脆弱性情報ページにてご確認ください。
- 2020 年 2 月の定例リリースでは、Windows OS 向けに、累積的な更新プログラムのほかに、[CVE-2020-0689](https://portal.msrc.microsoft.com/ja-JP/security-guidance/advisory/CVE-2020-0689) の脆弱性に対応するためのセキュリティ更新プログラムも公開しています。詳細はサポート技術情報 [4524244](https://support.microsoft.com/ja-jp/help/4524244)、[4502496](https://support.microsoft.com/ja-jp/help/4502496) をご参照ください。
- Windows 7/Windows Server 2008 R2/Windows Server 2008 向けのセキュリティ更新プログラムを適用するには、Extended Security Update (ESU) が必要となります。詳細はサポート技術情報 [4522133](https://support.microsoft.com/ja-jp/help/4522133) をご参照ください。
- LDAP 署名ならびにチャネルバインディングの変更は、段階的な変更となり、2020 年 3 月は関連する監査イベントやログの追加、グループ ポリシーの名称変更が行われる予定です (この段階では、グループポリシーに設定されている値およびレジストリ値の変更は行われません)。Active Directory 環境において本設定が既定で有効になるのは 2020 年後半を予定しています。詳細は弊社のセキュリティ アドバイザリ [ADV190023](https://portal.msrc.microsoft.com/ja-JP/security-guidance/advisory/ADV190023) をご参照ください。
- UAC が有効になっているサーバー上で、Exchange 向けの更新プログラムを標準モード (管理者権限ではなく) で手動でインストールした際に、いくつかのファイルが正しく更新されず、OWA や ECP が正常に動作しない可能性があります。管理者権限で更新プログラムをインストールすることをお勧めします。詳細は、サポート技術情報 [4536989](https://support.microsoft.com/ja-jp/help/4536989) ならびに [4536988](https://support.microsoft.com/ja-jp/help/4536988)、[4536987](https://support.microsoft.com/ja-jp/help/4536987) をご参照ください。

お客様はできるだけ早期に、今月公開のセキュリティ更新プログラムを適用するようお願いします。

**_■ _\*\***_2020_\***\*_ 年 _\*\***_2_\***\*_ 月のセキュリティ更新プログラム_**

セキュリティの脆弱性および更新プログラムの情報を、CVE、KB 番号、製品、またはリリース日別に並べ替えたりフィルターをかけたりすることができます。

[セキュリティ更新プログラム ガイド](https://portal.msrc.microsoft.com/ja-jp/security-guidance)

各月のセキュリティ更新プログラムを絞り込むには、日付範囲に絞り込む月の第 2 火曜日を指定して検索してください。

なお、セキュリティ更新プログラム ガイド API を活用して、自社に特化したカスタム レポートを作成することができます。API の活用方法を紹介する 6 つのビデオ ([API の情報 (GitHub)](https://aka.ms/SUGAPIdemo1_J)、[API へのアクセス](https://aka.ms/SUGAPIdemo2_J)、[HTML ファイルの出力](https://aka.ms/SUGAPIdemo3_J)、[Excel へのエクスポート](https://aka.ms/SUGAPIdemo4_J)、[CVE リストの取得](https://aka.ms/SUGAPIdemo5_J)、[KB リストの取得](https://aka.ms/SUGAPIdemo6_J)) を公開していますので、是非ご活用ください。

---

マイクロソフトは新たに確認した脆弱性について、下記の新しいセキュリティ更新プログラムを公開しました。

|                                                                                                          |                |                              |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------- | -------------- | ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **製品ファミリ**                                                                                         | **最大深刻度** | **最も大きな影響**           | **関連\*\***するサポ\***\*ート技術情報またはサポートの\*\*** Web \***\*ペ\*\***ージ\*\*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| **Windows 10 v1909、v1903、v1809、v1803、v1709**                                                         | **緊急**       | リモートでコードが実行される | Windows 10 v1903 および Windows 10 v1909: [4532693](https://support.microsoft.com/ja-jp/help/4532693)、Windows 10 v1809: [4532691](https://support.microsoft.com/ja-jp/help/4532691)、Windows 10 v1803: [4537762](https://support.microsoft.com/ja-jp/help/4537762)、Windows 10 v1709: [4537789](https://support.microsoft.com/ja-jp/help/4537789)、すべて: [4524244](https://support.microsoft.com/ja-jp/help/4524244)                                                                                                                                                                              |
| **Windows Server 2019、Windows Server 2016、Server Core インストール (2019、2016、v1909、v1903、v1803)** | **緊急**       | リモートでコードが実行される | Windows Server 2019: [4532691](https://support.microsoft.com/ja-jp/help/4532691)、Windows Server 2016: [4537764](https://support.microsoft.com/ja-jp/help/4537764)、Windows Server v1903 および Windows Server v1909: [4532693](https://support.microsoft.com/ja-jp/help/4532693)、Windows Server v1803: [4537762](https://support.microsoft.com/ja-jp/help/4537762)、すべて: [4524244](https://support.microsoft.com/ja-jp/help/4524244)                                                                                                                                                            |
| **Windows 8.1、Windows Server 2012 R2、Windows Server 2012**                                             | **緊急**       | リモートでコードが実行される | Windows 8.1 および Windows Server 2012 R2 マンスリー ロールアップ: [4537821](https://support.microsoft.com/ja-jp/help/4537821)、Windows Server 2012、Windows 8.1、および Windows Server 2012 R2: [4502496](https://support.microsoft.com/ja-jp/help/4502496)、Windows 8.1 および Windows Server 2012 R2 セキュリティのみ: [4537803](https://support.microsoft.com/ja-jp/help/4537803)、Windows Server 2012 マンスリー ロールアップ: [4537814](https://support.microsoft.com/ja-jp/help/4537814)、Windows Server 2012 セキュリティのみ: [4537794](https://support.microsoft.com/ja-jp/help/4537794)、 |
| **Internet Explorer**                                                                                    | **緊急**       | リモートでコードが実行される | Internet Explorer の累積的な更新プログラム: [4537767](https://support.microsoft.com/ja-jp/help/4537767)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| **Microsoft Office 関連のソフトウェア**                                                                  | **重要**       | リモートでコードが実行される | Microsoft Office に関連するサポート技術情報: _[4484250](https://support.microsoft.com/ja-jp/help/4484250)_、_[4484156](https://support.microsoft.com/ja-jp/help/4484156)_、_[4484163](https://support.microsoft.com/ja-jp/help/4484163)_、_[4484265](https://support.microsoft.com/ja-jp/help/4484265)_、_[4484256](https://support.microsoft.com/ja-jp/help/4484256)_、_[4484254](https://support.microsoft.com/ja-jp/help/4484254)_、_[4484267](https://support.microsoft.com/ja-jp/help/4484267)_                                                                                                 |
| **Microsoft SharePoint 関連のソフトウェア**                                                              | **重要**       | なりすまし                   | Microsoft SharePoint に関連するサポート技術情報: _[4484259](https://support.microsoft.com/ja-jp/help/4484259)_、_[4484264](https://support.microsoft.com/ja-jp/help/4484264)_、_[4484255](https://support.microsoft.com/ja-jp/help/4484255)_                                                                                                                                                                                                                                                                                                                                                         |
| **Microsoft Exchange Server**                                                                            | **重要**       | リモートでコードが実行される | Microsoft Exchange Server に関連するサポート技術情報: _[4536988](https://support.microsoft.com/ja-jp/help/4536988)_、_[4536987](https://support.microsoft.com/ja-jp/help/4536987)_、_[4536989](https://support.microsoft.com/ja-jp/help/4536989)_                                                                                                                                                                                                                                                                                                                                                    |
| **Microsoft SQL Server**                                                                                 | **重要**       | リモートでコードが実行される | Microsoft SQL Server に関連するサポート技術情報: _[4535706](https://support.microsoft.com/ja-jp/help/4535706)_、_[4532098](https://support.microsoft.com/ja-jp/help/4532098)_、_[4532095](https://support.microsoft.com/ja-jp/help/4532095)_、_[4535288](https://support.microsoft.com/ja-jp/help/4535288)_、_[4532097](https://support.microsoft.com/ja-jp/help/4532097)_                                                                                                                                                                                                                           |
| **ChakraCore**                                                                                           | **緊急**       | リモートでコードが実行される | ChakraCore は Chakra のコア部分であり、HTML/CSS/JS で記述された Microsoft Edge と Windows アプリケーションを強化する高パフォーマンスの JavaScript エンジンです。詳細については、_<https://github.com/Microsoft/ChakraCore/wiki>_ (英語情報) と _<https://github.com/Microsoft/ChakraCore/releases/>_ (英語情報) を参照してください。                                                                                                                                                                                                                                                                 |
| **Adobe Flash Player**                                                                                   | **重要**       | 特権の昇格                   | Adobe Flash Player に関連するサポート技術情報: [4537759](https://support.microsoft.com/ja-jp/help/4537759)。Adobe Flash Player のアドバイザリ: [ADV200003](https://portal.msrc.microsoft.com/ja-jp/security-guidance/advisory/adv200003)                                                                                                                                                                                                                                                                                                                                                             |
| **Microsoft Surface Hub**                                                                                | **重要**       | セキュリティ機能のバイパス   | Microsoft Surface Hub のセキュリティ更新プログラムに関連するサポート技術情報: [4537765](https://support.microsoft.com/ja-jp/help/4537765)。この脆弱性の更新プログラムの詳細については、_[CVE-2020-0702](https://portal.msrc.microsoft.com/ja-jp/security-guidance/advisory/CVE-2020-0702)_ を参照してください。                                                                                                                                                                                                                                                                                      |
| **Windows 悪意のあるソフトウェアの削除ツール**                                                           | **重要**       | 特権の昇格                   | Windows 悪意のあるソフトウェアの削除ツールに関連するサポート技術情報: _[891716](https://support.microsoft.com/ja-jp/help/891716)_。この脆弱性の更新プログラムの詳細については、_[CVE-2020-0733](https://portal.msrc.microsoft.com/ja-jp/security-guidance/advisory/CVE-2020-0733)_ を参照してください。                                                                                                                                                                                                                                                                                              |

**_■ 既存の脆弱性情報とセキュリティ アドバイザリの更新_**

- [CVE-2018-8267](https://portal.msrc.microsoft.com/ja-JP/security-guidance/advisory/CVE-2018-8267) (Scripting Engine) を更新しました。
- [CVE-2019-1332](https://portal.msrc.microsoft.com/ja-JP/security-guidance/advisory/CVE-2019-1332) (SQL) を更新しました。

最新のサービス スタック更新プログラム (SSU) は、[アドバイザリ ADV990001](https://portal.msrc.microsoft.com/ja-jp/security-guidance/advisory/ADV990001) にてご確認ください。

2020 年の Microsoft Edge (Chromium-based) のセキュリティ情報は、[アドバイザリ ADV200002](https://portal.msrc.microsoft.com/ja-JP/security-guidance/advisory/ADV200002) にてご確認ください。

次回のセキュリティ更新プログラムのリリースは、3 月 11 日 (日本時間) を予定しています。詳しくは、[年間スケジュール](https://aka.ms/relschedule)を参照してください。
