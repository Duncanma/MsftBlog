---
title: '2019 年 8 月のセキュリティ更新プログラム (月例)'
description: ""
published: 2019-08-13
type: posts
redirect_from:
            - https://msrc-blog.microsoft.com/2019/08/13/201908-security-updates/
author: jsecteam
categories:
- Japan Security Team
- アドバイザリ
- セキュリティ情報
- セキュリティ更新
- 脆弱性
hero: ../../../defaultHero.jpg
---
2019 年 8 月 14 日 (日本時間)、マイクロソフトは以下のソフトウェアのセキュリティ更新プログラムを公開しました。

- Internet Explorer
- Microsoft Edge
- Microsoft Windows
- Microsoft Office、Microsoft Office Servers および Web Apps
- ChakraCore
- Visual Studio
- Online Services
- Active Directory
- Microsoft Dynamics

注 : 8 月 13 日 (米国時間) に、リモートデスクトップサービスの脆弱性 ([CVE-2019-1181](https://portal.msrc.microsoft.com/ja-JP/security-guidance/advisory/CVE-2019-1181) / [CVE-2019-1182](https://portal.msrc.microsoft.com/ja-JP/security-guidance/advisory/CVE-2019-1181)) に関して、MSRC が[ブログ](https://msrc-blog.microsoft.com/2019/08/13/patch-new-wormable-vulnerabilities-in-remote-desktop-services-cve-2019-1181-1182/)を公開しています。

注: 8 月 14 日 (米国時間) に、Active Directory Authentication Library (ADAL) の脆弱性情報 ([CVE-2019-1258](https://portal.msrc.microsoft.com/ja-JP/security-guidance/advisory/CVE-2019-1258)) を公開しました。

新規セキュリティ更新プログラムを公開すると共に、新規のセキュリティ アドバイザリ 2 件の公開、既存のセキュリティ アドバイザリ 1 件の更新、既存の脆弱性情報 1 件の更新を行いました。なお、今月の「悪意のあるソフトウェアの削除ツール」では、新たに対応を追加したファミリはありません。

お客様はできるだけ早期に、今月公開のセキュリティ更新プログラムを適用するようお願いします。

**■ セキュリティ更新プログラム・セキュリティ アドバイザリに関する主な注意点**

- [アドバイザリ ADV190009](https://portal.msrc.microsoft.com/ja-jp/security-guidance/advisory/adv190009) を更新し、IA64 版 の Windows 7 ならびに Windows Server 2008 R2 で確認されていた既知の問題に対処するために、セキュリティ更新プログラム [4474419](https://support.microsoft.com/ja-jp/help/4474419) を再リリースしました。該当の製品をお使いの場合には、再度、最新のセキュリティ更新プログラムをインストールすることをお勧めします。詳細はサポート技術情報 [4474419](https://support.microsoft.com/ja-jp/help/4474419) をご参照ください。
- [アドバイザリ ADV190014](https://portal.msrc.microsoft.com/ja-jp/security-guidance/advisory/adv190014) を公開し、Outlook Web Access (OWA) の、未署名の可能性のあるトークンに関する脆弱性に対して緩和策を講じたことをお知らせしました。
- [アドバイザリ ADV190023](https://portal.msrc.microsoft.com/ja-jp/security-guidance/advisory/adv190023) を公開し、Active Directory ドメイン コントローラにおける LDAP チャネル バインディングと LDAP 署名の有効化に関するガイダンスを公開しました詳細はアドバイザリをご参照ください。

**■ 既存の脆弱性情報の更新\*\*** (1 件)\*\*

下記の脆弱性情報が再リリースされています。

- [CVE-2019-0988](https://portal.msrc.microsoft.com/ja-JP/security-guidance/advisory/CVE-2019-0988)

包括的に CVE-2019-0988 へ対応するため、Microsoft Edge 向けにセキュリティ更新プログラムをリリースしました。この脆弱性から完全に保護するために、該当の更新プログラムをインストールすることをお勧めします。

**_■ _\*\***_2019_\***\*_ 年 _\*\***_8_\***\*_ 月のセキュリティ更新プログラム_**

セキュリティの脆弱性および更新プログラムの情報を、CVE、KB 番号、製品、またはリリース日別に並べ替えたりフィルターをかけたりすることができます。

[セキュリティ更新プログラム ガイド](https://portal.msrc.microsoft.com/ja-jp/security-guidance)

各月のセキュリティ更新プログラムを絞り込むには、日付範囲に絞り込む月の第 2 火曜日を指定して検索してください。

なお、セキュリティ更新プログラム ガイド API を活用して、自社に特化したカスタム レポートを作成することができます。API の活用方法を紹介する 6 つのビデオ ([API の情報 (GitHub)](https://aka.ms/SUGAPIdemo1_J)、[API へのアクセス](https://aka.ms/SUGAPIdemo2_J)、[HTML ファイルの出力](https://aka.ms/SUGAPIdemo3_J)、[Excel へのエクスポート](https://aka.ms/SUGAPIdemo4_J)、[CVE リストの取得](https://aka.ms/SUGAPIdemo5_J)、[KB リストの取得](https://aka.ms/SUGAPIdemo6_J)) を公開していますので、是非ご活用ください。

---

マイクロソフトは新たに確認した脆弱性について、下記の新しいセキュリティ更新プログラムを公開しました。

|                                                                                                                      |                |                              |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| -------------------------------------------------------------------------------------------------------------------- | -------------- | ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **製品ファミリ**                                                                                                     | **最大深刻度** | **最も大きな影響**           | **関連するサポート技術情報またはサポートの\*\*** Web ページ\*\*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| **Windows 10 v1903、v1809、v1803、v1709、v1703**                                                                     | **緊急**       | リモートでコードが実行される | Windows 10 v1903: [4512508](https://support.microsoft.com/ja-jp/help/4512508)、Windows 10 v1809: [4511553](https://support.microsoft.com/ja-jp/help/4511553)、Windows 10 v1803: [4512501](https://support.microsoft.com/ja-jp/help/4512501)、Windows 10 v1709: [4512516](https://support.microsoft.com/ja-jp/help/4512516)、Windows 10 v1703: [4512507](https://support.microsoft.com/ja-jp/help/4512507)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| **Windows Server 2019、Windows Server 2016、Server Core インストール (2019、2016、v1803、v1709)**                    | **緊急**       | リモートでコードが実行される | Windows Server Version 1903: [4512508](https://support.microsoft.com/ja-jp/help/4512508)、Windows Server 2019: [4511553](https://support.microsoft.com/ja-jp/help/4511553)、Windows Server 2016: [4512517](https://support.microsoft.com/ja-jp/help/4512517)、Windows Server Version 1803: [4512501](https://support.microsoft.com/ja-jp/help/4512501)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| **Windows 8.1、Windows Server 2012 R2、Windows Server 2012、Windows 7、Windows Server 2008 R2、Windows Server 2008** | **緊急**       | リモートでコードが実行される | Windows 8.1、Windows Server 2012 R2、Windows RT 8.1 マンスリー ロールアップ: [4512488](https://support.microsoft.com/ja-jp/help/4512488)、Windows 8.1 および Windows Server 2012 R2 セキュリティのみ: [4512489](https://support.microsoft.com/ja-jp/help/4512489)、Windows Server 2012 セキュリティのみ: [4512482](https://support.microsoft.com/ja-jp/help/4512482)、Windows Server 2012 マンスリー ロールアップ: [4512518](https://support.microsoft.com/ja-jp/help/4512518)、Windows 7、Windows Server 2008 R2 および Windows Server 2008 セキュリティのみ: [4512486](https://support.microsoft.com/ja-jp/help/4512486)、Windows 7 および Windows Server 2008 R2 マンスリー ロールアップ: [4512506](https://support.microsoft.com/ja-jp/help/4512506)、Windows Server 2008 マンスリー ロールアップ: [4512476](https://support.microsoft.com/ja-jp/help/4512476)、Windows Server 2008 セキュリティのみ: [4512491](https://support.microsoft.com/ja-jp/help/4512491) |
| **Internet Explorer**                                                                                                | **緊急**       | リモートでコードが実行される | Internet Explorer の累積的な更新プログラム: [4511872](https://support.microsoft.com/ja-jp/help/4511872)。Internet Explorer の更新プログラムは、上記の Windows の更新プログラム パッケージにも含まれています。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| **Microsoft Office 関連のソフトウェア**                                                                              | **緊急**       | リモートでコードが実行される | マンスリー セキュリティ更新プログラムのリリースの Microsoft Office 関連ソフトウェアに関連するサポート技術情報の記事の数は、CVE の数、および影響を受けるコンポーネントの数によって変わります。サポート技術情報は多すぎるため、概要をお知らせする目的から、ここでは一部のみを掲載します。資料の詳細については、「セキュリティ更新プログラム ガイド」を参照してください。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| **Microsoft SharePoint 関連のソフトウェア**                                                                          | **緊急**       | リモートでコードが実行される | Microsoft SharePoint Server 2019: [4475555](https://support.microsoft.com/ja-jp/kb/4475555)Microsoft SharePoint Server 2010: [4475530](https://support.microsoft.com/ja-jp/kb/4475530)Microsoft SharePoint Enterprise Server 2016: [4475549](https://support.microsoft.com/ja-jp/kb/4475549) Microsoft SharePoint Enterprise Server 2013: [4462137](https://support.microsoft.com/ja-jp/kb/4462137)、[4475557](https://support.microsoft.com/ja-jp/kb/4475557) Microsoft SharePoint Foundation 2013: [4475565](https://support.microsoft.com/ja-jp/kb/4475565)Microsoft SharePoint Foundation 2010: [4475575](https://support.microsoft.com/ja-jp/kb/4475575)                                                                                                                                                                                                                                                                                                         |
| **Microsoft マルウェア対策ソフトウェア**                                                                             | **重要**       | 特権の昇格                   | Microsoft マルウェア対策ソフトウェアの更新プログラムの詳細については、<https://www.microsoft.com/wdsi> を参照してください。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| **Microsoft Visual Studio**                                                                                          | **重要**       | 特権の昇格                   | <https://aka.ms/vs/16/release/latest>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| **Microsoft Dynamics 365**                                                                                           | **重要**       | 特権の昇格                   | Microsoft Dynamics 365 (オンプレミス) Version 9.0: [4508724](https://support.microsoft.com/ja-jp/kb/4508724)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| **ChakraCore**                                                                                                       | **緊急**       | リモートでコードが実行される | ChakraCore は Chakra のコア部分であり、HTML/CSS/JS で記述された Microsoft Edge と Windows アプリケーションを強化する高パフォーマンスの JavaScript エンジンです。詳細については、<https://github.com/Microsoft/ChakraCore/wiki> を参照してください。詳細については、セキュリティ更新プログラム ガイドを参照してください。<https://aka.ms/securityupdates>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |

最新のサービス スタック更新プログラム (SSU) は、[アドバイザリ ADV990001](https://portal.msrc.microsoft.com/ja-jp/security-guidance/advisory/ADV990001) にてご確認ください。

次回のセキュリティ更新プログラムのリリースは、9 月 11 日 (日本時間) を予定しています。詳しくは、[年間スケジュール](https://aka.ms/relschedule)を参照してください。