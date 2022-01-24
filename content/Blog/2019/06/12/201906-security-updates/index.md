---
title: '2019 年 6 月のセキュリティ更新プログラム (月例)'
description: ""
published: 2019-06-11
type: posts
redirect_from:
            - https://msrc-blog.microsoft.com/2019/06/12/201906-security-updates/
author: jsecteam
categories:
- Japan Security Team
- アドバイザリ
- セキュリティ情報
- セキュリティ更新
- 脆弱性
hero: ../../../defaultHero.jpg
---
2019 年 6 月 12 日 (日本時間)、マイクロソフトは以下のソフトウェアのセキュリティ更新プログラムを公開しました。

- Internet Explorer
- Microsoft Edge
- Microsoft Windows
- Microsoft Office、Microsoft Office Servers および Web Apps
- Adobe Flash Player
- ChakraCore
- Skype for Business および Microsoft Lync
- Microsoft Exchange Server
- Azure

新規セキュリティ更新プログラムを公開すると共に、新規のセキュリティ アドバイザリ 4 件の公開、既存のセキュリティ アドバイザリ 2 件の更新、既存の脆弱性情報 1 件の更新を行いました。なお、今月の「悪意のあるソフトウェアの削除ツール」では、新たに対応を追加したファミリはありません。

お客様はできるだけ早期に、今月公開のセキュリティ更新プログラムを適用するようお願いします。

**■ セキュリティ更新プログラム・セキュリティ アドバイザリに関する主な注意点**

- [アドバイザリ 190016](https://portal.msrc.microsoft.com/ja-jp/security-guidance/advisory/adv190016) を公開し、Bluetooth Low Energy (BLE) の脆弱性への対応策が Windows の 6 月のセキュリティ更新プログラムに含まれていることをお知らせしました。詳細はアドバイザリをご参照ください。
- [アドバイザリ 190017](https://portal.msrc.microsoft.com/ja-jp/security-guidance/advisory/adv190017) を公開し、Microsoft HoloLens に含まれる Broadcom 社製のチップセットの脆弱性に対応したファームウェアアップデートが HoloLens 向け Windows 10 1809 の最新のセキュリティ更新プログラムに含まれていることをお知らせしました。詳細はアドバイザリをご参照ください。
- [アドバイザリ 190018](https://portal.msrc.microsoft.com/ja-jp/security-guidance/advisory/adv190018) を公開し、Microsoft Exchange Server 多層防御に対するセキュリティ更新プログラムを公開しました。詳細はアドバイザリをご参照ください。
- [アドバイザリ 190009](https://portal.msrc.microsoft.com/ja-jp/security-guidance/advisory/adv190009) を更新し、Windows Server 2008 向けのセキュリティ更新プログラム [4474419](https://support.microsoft.com/ja-jp/help/4474419) が再リリースされたことをお知らせしました。最新の更新プログラムをインストールすることをお勧めします。
- [アドバイザリ 190013](https://portal.msrc.microsoft.com/ja-jp/security-guidance/advisory/adv190013) を更新し、64bit 版 Windows Server 2008 向けのセキュリティ更新プログラムを公開しました。
- UAC が有効になっているサーバー上で、Exchange 向けの更新プログラムを標準モード (管理者権限ではなく) で手動でインストールした際に、いくつかのファイルが正しく更新されず、OWA や ECP が正常に動作しない可能性があります。管理者権限で更新プログラムをインストールすることをお勧めします。詳細は、サポート技術情報 [4503028](https://support.microsoft.com/ja-jp/help/4503028) ならびに [4503027](https://support.microsoft.com/ja-jp/help/4503027) をご参照ください。

**■ 既存の脆弱性情報の更新\*\*** (1 件)\*\*

下記の脆弱性情報が再リリースされています。

- [CVE-2017-8533](https://portal.msrc.microsoft.com/ja-JP/security-guidance/advisory/CVE-2017-8533)

包括的に CVE-2017-8533 へ対応するため、Windows 7 向けにセキュリティ更新プログラム [4503292](https://support.microsoft.com/ja-jp/help/4503292) (月例のロールアップ)、ならびに [4503269](https://support.microsoft.com/ja-jp/help/4503269) (セキュリティのみの更新) をリリースしました。この脆弱性から完全に保護するために、該当の更新プログラムをインストールすることをお勧めします。

**_■ _\*\***_2019_\***\*_ 年 _\*\***_6_\***\*_ 月のセキュリティ更新プログラム_**

セキュリティの脆弱性および更新プログラムの情報を、CVE、KB 番号、製品、またはリリース日別に並べ替えたりフィルターをかけたりすることができます。

[セキュリティ更新プログラム ガイド](https://portal.msrc.microsoft.com/ja-jp/security-guidance)

各月のセキュリティ更新プログラムを絞り込むには、日付範囲に絞り込む月の第 2 火曜日を指定して検索してください。

なお、セキュリティ更新プログラム ガイド API を活用して、自社に特化したカスタム レポートを作成することができます。API の活用方法を紹介する 6 つのビデオ ([API の情報 (GitHub)](https://aka.ms/SUGAPIdemo1_J)、[API へのアクセス](https://aka.ms/SUGAPIdemo2_J)、[HTML ファイルの出力](https://aka.ms/SUGAPIdemo3_J)、[Excel へのエクスポート](https://aka.ms/SUGAPIdemo4_J)、[CVE リストの取得](https://aka.ms/SUGAPIdemo5_J)、[KB リストの取得](https://aka.ms/SUGAPIdemo6_J)) を公開していますので、是非ご活用ください。

---

マイクロソフトは新たに確認した脆弱性について、下記の新しいセキュリティ更新プログラムを公開しました。

|                                                                                                                                                                                     |                |                              |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- | ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **製品ファミリ**                                                                                                                                                                    | **最大深刻度** | **最も大きな影響**           | **関連するサポート技術情報またはサポートの\*\*** Web \***\*ページ**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| **Windows 10 v1903、v1809、v1803、v1709、v1703**                                                                                                                                    | **緊急**       | リモートでコードが実行される | Windows 10 v1903: [4503293](https://support.microsoft.com/ja-jp/help/4503293)、Windows 10 v1809 および Windows 10 v1809 HoloLens セキュリティ更新プログラム: [4503327](https://support.microsoft.com/ja-jp/help/4503327)、Windows 10 v1803: [4503286](https://support.microsoft.com/ja-jp/help/4503286)、Windows 10 v1709: [4503284](https://support.microsoft.com/ja-jp/help/4503284)、Windows 10 v1703: [4503279](https://support.microsoft.com/ja-jp/help/4503279)                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| **Windows Server 2019、Windows Server 2016、Server Core インストール (2019、2016、v1803、v1709)**                                                                                   | **緊急**       | リモートでコードが実行される | Windows Server 2019: [4503327](https://support.microsoft.com/ja-jp/help/4503327)、Windows Server 2016: [4503267](https://support.microsoft.com/ja-jp/help/4503267)、Windows Server v1903: [4503293](https://support.microsoft.com/ja-jp/help/4503293)、Windows Server v1803: [4503286](https://support.microsoft.com/ja-jp/help/4503286)、                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| **Windows 8.1、Windows Server 2012 R2、Windows Server 2012、Windows 7、Windows Server 2008 R2、Windows Server 2008**                                                                | **緊急**       | リモートでコードが実行される | Windows 8.1 および Windows Server 2012 R2 マンスリー ロールアップ: [4503276](https://support.microsoft.com/ja-jp/help/4503276)、Windows 8.1 および Windows Server 2012 R2 セキュリティのみ: [4503290](https://support.microsoft.com/ja-jp/help/4503290)、Windows Server 2012 マンスリー ロールアップ: [4503285](https://support.microsoft.com/ja-jp/help/4503285)、Windows Server 2012 セキュリティのみ: [4503263](https://support.microsoft.com/ja-jp/help/4503263)、Windows 7 および Windows Server 2008 R2 マンスリー ロールアップ: [4503292](https://support.microsoft.com/ja-jp/help/4503292)、Windows 7 および Windows Server 2008 R2 セキュリティのみ: [4503269](https://support.microsoft.com/ja-jp/help/4503269)、Windows Server 2008 マンスリー ロールアップ: [4503273](https://support.microsoft.com/ja-jp/help/4503273)、Windows Server 2008 セキュリティのみ: [4503287](https://support.microsoft.com/ja-jp/help/4503287) |
| **Internet Explorer**                                                                                                                                                               | **緊急**       | リモートでコードが実行される | Internet Explorer の累積的な更新プログラム: [4503259](https://support.microsoft.com/ja-jp/help/4503259)。Internet Explorer の更新プログラムは、上記の Windows の更新プログラム パッケージにも含まれています。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| **Microsoft Office 関連のソフトウェア**                                                                                                                                             | **重要**       | リモートでコードが実行される | Microsoft Office 関連のサポート技術情報: [4506009](https://support.microsoft.com/ja-jp/help/4506009)、[4462178](https://support.microsoft.com/ja-jp/help/4462178)、[4461621](https://support.microsoft.com/ja-jp/help/4461621)、[4461619](https://support.microsoft.com/ja-jp/help/4461619)、[4464590](https://support.microsoft.com/ja-jp/help/4464590)、[4464596](https://support.microsoft.com/ja-jp/help/4464596)、[4475511](https://support.microsoft.com/ja-jp/help/4475511)                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| **Microsoft SharePoint 関連のソフトウェア**                                                                                                                                         | **重要**       | リモートでコードが実行される | Microsoft SharePoint Server 2019: [4475512](https://support.microsoft.com/ja-jp/kb/4475512) Microsoft SharePoint Enterprise Server 2016: [4464594](https://support.microsoft.com/ja-jp/kb/4464594) Microsoft SharePoint Foundation 2013 および Microsoft SharePoint Enterprise Server 2013: [4464602](https://support.microsoft.com/ja-jp/kb/4464602) Microsoft SharePoint Foundation 2013: [4464597](https://support.microsoft.com/ja-jp/kb/4464597) Microsoft SharePoint Foundation 2010: [4464571](https://support.microsoft.com/ja-jp/kb/4464571) Microsoft SharePoint Server 2010: [4461611](https://support.microsoft.com/ja-jp/kb/4461611) Microsoft Project Server 2010: [4092442](https://support.microsoft.com/ja-jp/kb/4092442)                                                                                                                                                                                             |
| **Azure DevOps Server 2019**                                                                                                                                                        | **重要**       | なりすまし                   | Azure DevOps Server 2019: リンクと詳細については、セキュリティ更新プログラム ガイドを参照してください: _<https://aka.ms/securityupdates>_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| **ChakraCore**                                                                                                                                                                      | **緊急**       | リモートでコードが実行される | ChakraCore は Chakra のコア部分であり、HTML/CSS/JS で記述された Microsoft Edge と Windows アプリケーションを強化する高パフォーマンスの JavaScript エンジンです。詳細については、<https://github.com/Microsoft/ChakraCore/wiki> を参照してください。詳細については、セキュリティ更新プログラム ガイドを参照してください: _<https://aka.ms/securityupdates>_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| **Adobe Flash Player**                                                                                                                                                              | **緊急**       | リモートでコードが実行される | すべての影響を受けるバージョンの Windows 上の Adobe Flash Player に関するサポート技術情報: [4503308](https://support.microsoft.com/ja-jp/help/4503308) Adobe Flash Player に関するセキュリティ アドバイザリ: [ADV190015](https://portal.msrc.microsoft.com/ja-jp/security-guidance/advisory/adv190015)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| この表の情報はリリースの概要であり、含まれていない製品バージョンもあります。詳細については、セキュリティ更新プログラム ガイドを参照してください: _<https://aka.ms/securityupdates>_ |                |                              |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |

最新のサービス スタック更新プログラム (SSU) は、[アドバイザリ ADV990001](https://portal.msrc.microsoft.com/ja-jp/security-guidance/advisory/ADV990001) にてご確認ください。

次回のセキュリティ更新プログラムのリリースは、7 月 10 日 (日本時間) を予定しています。詳しくは、[年間スケジュール](https://aka.ms/relschedule)を参照してください。