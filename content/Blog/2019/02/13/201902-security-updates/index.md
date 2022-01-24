---
title: '2019 年 2 月のセキュリティ更新プログラム (月例)'
description: ""
published: 2019-02-12
type: posts
redirect_from:
            - https://msrc-blog.microsoft.com/2019/02/13/201902-security-updates/
author: jsecteam
categories:
- Japan Security Team
- アドバイザリ
- セキュリティ情報
- セキュリティ更新
- 脆弱性
hero: ../../../defaultHero.jpg
---
2019 年 2 月 13 日 (日本時間)、マイクロソフトは以下のソフトウェアのセキュリティ更新プログラムを公開しました。

- Adobe Flash Player
- Internet Explorer
- Microsoft Edge
- Microsoft Windows
- Microsoft Office、Microsoft Office Servers および Web Apps
- ChakraCore
- .NET Framework
- Microsoft Exchange Server
- Microsoft Visual Studio
- Azure IoT SDK
- Microsoft Dynamics
- Team Foundation Server
- Visual Studio Code

新規セキュリティ更新プログラムを公開すると共に、新規のセキュリティ アドバイザリ 3 件の公開、既存の脆弱性情報 3 件の更新を行いました。なお、今月の「悪意のあるソフトウェアの削除ツール」では、対応を追加したファミリはありません。

なお、今月のセキュリティ更新プログラムで以下を含む既知の問題が解決されています。

- 2018 年 12 月の定例リリースに公開された Outlook のセキュリティ更新プログラムを適用後に確認されていた、ルールの設定画面が開けない問題は 2 月 6 日に公開された Outlook 向けの更新プログラムにて修正されています。 詳細は、サポート チームの[ブログ](https://blogs.technet.microsoft.com/outlooksupportjp/2018/12/26/rule-error-after-dec-hotfix/)をご参考ください。
- 2019 年 1 月の定例リリースに公開された Windows 7 のセキュリティ更新プログラム [4480970](https://support.microsoft.com/ja-jp/help/4480970)/[4480960](https://support.microsoft.com/ja-jp/help/4480960) を適用後に確認されていた、ネットワーク接続の問題に対する修正は今月のセキュリティのみの更新 [4486564](https://support.microsoft.com/ja-jp/help/4486564) および月例のロールアップ [4486563](https://support.microsoft.com/ja-jp/help/4486563)に含まれています。影響を受けるバージョンおよび対応する修正プログラムなどの詳細は、サポート チームの[ブログ](https://blogs.technet.microsoft.com/jpntsblog/2019/01/10/2019_1b_ntlm/)をご覧ください。
- 2019 年 1 月の定例リリースに公開された Office 2010 のセキュリティ更新プログラム [4461614](https://support.microsoft.com/ja-jp/help/4461614) を適用後に確認されていた、Excel 2010 ならびに Access 2010 が動作しなくなる問題に対する修正は今月の Office 2010 のセキュリティ更新プログラム [4462174](https://support.microsoft.com/ja-jp/help/4462174) に含まれています。

お客様はできるだけ早期に、今月公開のセキュリティ更新プログラムを適用するようお願いします。

**■ セキュリティ更新プログラム・セキュリティ アドバイザリに関する主な注意点**

- [CVE-2019-0686](https://portal.msrc.microsoft.com/ja-jp/security-guidance/advisory/CVE-2019-0686) と [CVE-2019-0724](https://portal.msrc.microsoft.com/ja-jp/security-guidance/advisory/CVE-2019-0724) を公開し、2 月 5 日 (米国時間) に定例外で公開した[アドバイザリ ADV190007](https://portal.msrc.microsoft.com/ja-jp/security-guidance/advisory/ADV190007) で説明している Exchange Server の特権の昇格の脆弱性に対応する累積的な更新プログラムを公開しました。
- [アドバイザリ ADV190004](https://portal.msrc.microsoft.com/ja-jp/security-guidance/advisory/ADV190004) を公開し、同日に公開した Exchange Server の累積的な更新プログラムに Oracle の脆弱性に対応した修正も含まれていることをお知らせしました。詳細はアドバイザリをご参照ください。
- UAC が有効になっているサーバー上で、Exchange 向けの更新プログラムを標準モード (管理者権限ではなく) で手動でインストールした際に、いくつかのファイルが正しく更新されず、OWA や ECP が正常に動作しない可能性があります。管理者権限で更新プログラムをインストールすることをお勧めします。詳細は、サポート技術情報 [4487052](https://support.microsoft.com/ja-jp/help/4487052) ならびに [4345836](https://support.microsoft.com/ja-jp/help/4345836)、[4471391](https://support.microsoft.com/ja-jp/help/4471391)、[4471392](https://support.microsoft.com/ja-jp/help/4471392) をご参照ください。
- [アドバイザリ ADV190006](https://portal.msrc.microsoft.com/ja-jp/security-guidance/advisory/ADV190006) を公開し、Active Directory フォレスト間信頼の制約なし委任に関するガイダンスを公開しました。詳細はアドバイザリをご参照ください。

**■ 既存の脆弱性情報の更新\*\*** (3 件)\*\*

下記の脆弱性情報が再リリースされています。

- [CVE-2019-0555](https://portal.msrc.microsoft.com/ja-JP/security-guidance/advisory/CVE-2019-0555)

包括的に CVE-2019-0555 へ対応するため、Windows 向けにセキュリティ更新プログラムをリリースしました。この脆弱性から完全に保護するために、最新の更新プログラムをインストールすることをお勧めします。

- [CVE-2019-0582](https://portal.msrc.microsoft.com/ja-JP/security-guidance/advisory/CVE-2019-0582)

影響を受けるソフトウェアに Office 製品を追加しました。この脆弱性から完全に保護するために、最新の Office のセキュリティ更新プログラムをインストールすることをお勧めします。

- [CVE-2019-0538](https://portal.msrc.microsoft.com/ja-JP/security-guidance/advisory/CVE-2019-0538)

影響を受けるソフトウェアに Office 製品を追加しました。この脆弱性から完全に保護するために、最新の Office のセキュリティ更新プログラムをインストールすることをお勧めします。

**_■ _\*\***_2019_\***\*_ 年 _\*\***_2_\***\*_ 月のセキュリティ更新プログラム_**

セキュリティの脆弱性および更新プログラムの情報を、CVE、KB 番号、製品、またはリリース日別に並べ替えたりフィルターをかけたりすることができます。

[セキュリティ更新プログラム ガイド](https://portal.msrc.microsoft.com/ja-jp/security-guidance)

各月のセキュリティ更新プログラムを絞り込むには、日付範囲に絞り込む月の第 2 火曜日を指定して検索してください。

なお、セキュリティ更新プログラム ガイド API を活用して、自社に特化したカスタム レポートを作成することができます。API の活用方法を紹介する 6 つのビデオ ([API の情報 (GitHub)](https://aka.ms/SUGAPIdemo1_J)、[API へのアクセス](https://aka.ms/SUGAPIdemo2_J)、[HTML ファイルの出力](https://aka.ms/SUGAPIdemo3_J)、[Excel へのエクスポート](https://aka.ms/SUGAPIdemo4_J)、[CVE リストの取得](https://aka.ms/SUGAPIdemo5_J)、[KB リストの取得](https://aka.ms/SUGAPIdemo6_J)) を公開していますので、是非ご活用ください。

---

マイクロソフトは新たに確認した脆弱性について、下記の新しいセキュリティ更新プログラムを公開しました。

|                                                                                                                                                                                                                                                        |                |                              |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------- | ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **製品ファミリ**                                                                                                                                                                                                                                       | **最大深刻度** | **最も大きな影響**           | **関連するサポート技術情報またはサポートの\*\*** Web \***\*ページ**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| **Windows 10 v1809\*\***、\***\*v1803\*\***、\***\*v1709\*\***、\***\*v1703\*\***、\***\*v1607\*\***、\***\*32 \*\***ビット版システム用\***\* Windows 10\*\***、\***\*x64 \*\***ベース\*\* **システム用\*\*** Windows 10 (Edge \***\*を除く\*\***)\*\* | **緊急**       | リモートでコードが実行される | Windows 10 v1809 セキュリティ更新プログラム: [4487044](https://support.microsoft.com/ja-jp/help/4487044)、Windows 10 v1803 セキュリティ更新プログラム: [4487017](https://support.microsoft.com/ja-jp/help/4487017)、Windows 10 v1709 セキュリティ更新プログラム: [4486996](https://support.microsoft.com/ja-jp/help/4486996)、Windows 10 v1703 セキュリティ更新プログラム: [4487020](https://support.microsoft.com/ja-jp/help/4487020)、Windows 10 v1607 セキュリティ更新プログラム: [4487026](https://support.microsoft.com/ja-jp/help/4487026)、Windows 10 セキュリティ更新プログラム: [4487018](https://support.microsoft.com/ja-jp/help/4487018)、                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| **Windows Server 2019\*\***、\***\*Windows Server 2016\*\***、\***\*Server Core \*\***インストール\***\* (2019\*\***、\***\*2016\*\***、\***\*v1803\*\***、\***\*v1709)**                                                                              | **緊急**       | リモートでコードが実行される | Windows Server 2019 セキュリティ更新プログラム: [4487044](https://support.microsoft.com/ja-jp/help/4487044)、Windows Server 2016 セキュリティ更新プログラム: [4487026](https://support.microsoft.com/ja-jp/help/4487026)、Windows Server Version 1803 セキュリティ更新プログラム: [4487017](https://support.microsoft.com/ja-jp/help/4487017)、Windows Server Version 1709 セキュリティ更新プログラム: [4486996](https://support.microsoft.com/ja-jp/help/4486996)、                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| **Windows 8.1\*\***、\***\*Windows Server 2012 R2\*\***、\***\*Windows Server 2012\*\***、\***\*Windows 7\*\***、\***\*Windows Server 2008 R2\*\***、\***\*Windows Server 2008**                                                                       | **緊急**       | リモートでコードが実行される | Windows 8.1、Windows Server 2012 R2、Windows RT 8.1 マンスリー ロールアップ: [4487000](https://support.microsoft.com/ja-jp/help/4487000)、Windows 8.1 および Windows Server 2012 R2 セキュリティのみ: [4487028](https://support.microsoft.com/ja-jp/help/4487028)、Windows Server 2012 セキュリティのみ: [4486993](https://support.microsoft.com/ja-jp/help/4486993)、Windows Server 2012 マンスリー ロールアップ: [4487025](https://support.microsoft.com/ja-jp/help/4487025)、Windows 7 および Windows Server 2008 R2 マンスリー ロールアップ: [4486563](https://support.microsoft.com/ja-jp/help/4486563)、Windows 7 および Windows Server 2008 R2 セキュリティのみ: [4486564](https://support.microsoft.com/ja-jp/help/4486564)、Windows Server 2008 セキュリティのみ: [4487019](https://support.microsoft.com/ja-jp/help/4487019)、Windows Server 2008 マンスリー ロールアップ: [4487023](https://support.microsoft.com/ja-jp/help/4487023)、                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| **Microsoft Edge**                                                                                                                                                                                                                                     | **緊急**       | リモートでコードが実行される | Windows 10 v1809 上の Microsoft Edge および Windows Server 2019 上の Microsoft Edge セキュリティ更新プログラム: [4487044](https://support.microsoft.com/ja-jp/help/4487044)、Windows 10 v1803 上の Microsoft Edge セキュリティ更新プログラム: [4487017](https://support.microsoft.com/ja-jp/help/4487017)、Windows 10 v1709 上の Microsoft Edge セキュリティ更新プログラム: [4486996](https://support.microsoft.com/ja-jp/help/4486996)、Windows 10 v1703 上の Microsoft Edge セキュリティ更新プログラム: [4487020](https://support.microsoft.com/ja-jp/help/4487020)、Windows Server 2016 上の Microsoft Edge および Windows 10 v1607 上の Microsoft Edge セキュリティ更新プログラム: [4487026](https://support.microsoft.com/ja-jp/help/4487026)、Windows 10 上の Microsoft Edge セキュリティ更新プログラム: [4487018](https://support.microsoft.com/ja-jp/help/4487018)、                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| **Internet Explorer**                                                                                                                                                                                                                                  | **緊急**       | リモートでコードが実行される | Windows 10 v1809 上の Internet Explorer 11 および Windows Server 2019 上の Internet Explorer 11 セキュリティ更新プログラム: [4487044](https://support.microsoft.com/ja-jp/help/4487044)、Windows 10 v1803 上の Internet Explorer 11 セキュリティ更新プログラム: [4487017](https://support.microsoft.com/ja-jp/help/4487017)、Windows 10 v1709 上の Internet Explorer 11 セキュリティ更新プログラム: [4486996](https://support.microsoft.com/ja-jp/help/4486996)、Windows 10 v1703 上の Internet Explorer 11 セキュリティ更新プログラム: [4487020](https://support.microsoft.com/ja-jp/help/4487020)、Windows Server 2016 上の Internet Explorer 11 および Windows 10 v1607 上の Internet Explorer 11 セキュリティ更新プログラム: [4487026](https://support.microsoft.com/ja-jp/help/4487026)、Windows 10 上の Internet Explorer 11 セキュリティ更新プログラム: [4487018](https://support.microsoft.com/ja-jp/help/4487018)、Windows 7 上の Internet Explorer 11、Windows Server 2008 R2 上の Internet Explorer 11、Windows 8.1 上の Internet Explorer 11、Windows Server 2012 R2 上の Internet Explorer 11、Windows Server 2012 IE 上の Internet Explorer 10 累積的: [4486474](https://support.microsoft.com/ja-jp/help/4486474)、Windows Server 2012 上の Internet Explorer 10 マンスリー ロールアップ: [4487025](https://support.microsoft.com/ja-jp/help/4487025)、Windows 7 上の Internet Explorer 11 および Windows Server 2008 R2 上の Internet Explorer 11 マンスリー ロールアップ: [4486563](https://support.microsoft.com/ja-jp/help/4486563)、 |
| **Microsoft Office \*\***関連のソフトウェア\*\*                                                                                                                                                                                                        | **重要**       | リモートでコードが実行される | マンスリー セキュリティ更新プログラムのリリースの Microsoft Office 関連ソフトウェアに関連するサポート技術情報の記事の数は、CVE の数、および影響を受けるコンポーネントの数によって変わります。今月リリースされる Microsoft Office 関連ソフトウェアの更新プログラムに関連するサポート技術情報は 20 件を超えます。概要をお知らせする目的から、ここでは一部のみを掲載します。資料の詳細については、「セキュリティ更新プログラム ガイド」を参照してください。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| **Microsoft SharePoint \*\***関連のソフトウェア\*\*                                                                                                                                                                                                    | **緊急**       | リモートでコードが実行される | Microsoft SharePoint Server 2019: [4462171](https://support.microsoft.com/ja-jp/kb/4462171) Microsoft SharePoint Enterprise Server 2016: [4462155](https://support.microsoft.com/ja-jp/kb/4462155) Microsoft SharePoint Enterprise Server 2013: [4462139](https://support.microsoft.com/ja-jp/kb/4462139) Microsoft SharePoint Foundation 2013: [4462143](https://support.microsoft.com/ja-jp/kb/4462143) Microsoft SharePoint Server 2010: [4461630](https://support.microsoft.com/ja-jp/kb/4461630)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| **.NET Framework**                                                                                                                                                                                                                                     | **重要**       | リモートでコードが実行される | 毎月のセキュリティ更新プログラムのリリースの .NET Framework に関連するサポート技術情報の記事の数は、CVE の数、および影響を受けるコンポーネントの数によって変わります。今月リリースされる .NET Framework の更新プログラムに関連するサポート情報の記事は 20 件を超えます。概要をお知らせする目的から、ここでは一部のみを掲載します。資料の詳細については、「セキュリティ更新プログラム ガイド」を参照してください。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| **Visual Studio**                                                                                                                                                                                                                                      | **重要**       | リモートでコードが実行される | [https://code.visualstudio.com/Download (英語情報)](https://code.visualstudio.com/Download)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| **Microsoft Exchange Server**                                                                                                                                                                                                                          | **重要**       | 特権の昇格                   | Microsoft Exchange Server 2019: [4471391](https://support.microsoft.com/ja-jp/kb/4471391)Microsoft Exchange Server 2016: [4471392](https://support.microsoft.com/ja-jp/kb/4471392) Microsoft Exchange Server 2013: [4345836](https://support.microsoft.com/ja-jp/kb/4345836) Microsoft Exchange Server 2010: [4487052](https://support.microsoft.com/ja-jp/kb/4487052)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| **Adobe Flash Player**                                                                                                                                                                                                                                 | **緊急**       | リモートでコードが実行される | Adobe Flash セキュリティ更新プログラム: [4487038](https://support.microsoft.com/ja-jp/help/4487038) Adobe Flash Player アドバイザリ: [ADV190003](https://portal.msrc.microsoft.com/ja-jp/security-guidance/advisory/adv190003)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| **Team Foundation Server**                                                                                                                                                                                                                             | **重要**       | なりすまし                   | [https://aka.ms/tfs2018.3.2patch (英語情報)](https://aka.ms/tfs2018.3.2patch)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| **Java SDK for Azure IoT**                                                                                                                                                                                                                             | **重要**       | 特権の昇格                   | [https://github.com/Azure/azure-iot-sdk-java/releases (英語情報)](https://github.com/Azure/azure-iot-sdk-java/releases)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| **ChakraCore**                                                                                                                                                                                                                                         | **緊急**       | リモートでコードが実行される | ChakraCore は Chakra のコア部分であり、HTML/CSS/JS で記述された Microsoft Edge と Windows アプリケーションを強化する高パフォーマンスの JavaScript エンジンです。詳細については、<https://github.com/Microsoft/ChakraCore/wiki> を参照してください。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

最新のサービス スタック更新プログラム (SSU) は、[アドバイザリ ADV990001](https://portal.msrc.microsoft.com/ja-jp/security-guidance/advisory/ADV990001) にてご確認ください。

次回のセキュリティ更新プログラムのリリースは、3 月 13 日 (日本時間) を予定しています。詳しくは、[年間スケジュール](https://aka.ms/relschedule)を参照してください。