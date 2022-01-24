---
title: '2019 年 11 月のセキュリティ更新プログラム (月例)'
description: ""
published: 2019-11-12
type: posts
redirect_from:
            - https://msrc-blog.microsoft.com/2019/11/12/201911-security-updates/
author: jsecteam
categories:
- Japan Security Team
- アドバイザリ
- セキュリティ情報
- セキュリティ更新
- 脆弱性
hero: ../../../defaultHero.jpg
---
2019 年 11 月 13 日 (日本時間)、マイクロソフトは以下のソフトウェアのセキュリティ更新プログラムを公開しました。

- Microsoft Windows
- Internet Explorer
- Microsoft Edge (EdgeHTML-based)
- ChakraCore
- Microsoft Office、Microsoft Office Servers および Web Apps
- Open Source Software
- Microsoft Exchange Server
- Visual Studio
- Azure Stack

新規セキュリティ更新プログラムを公開すると共に、新規のセキュリティ アドバイザリ 1 件の公開、既存の脆弱性情報 1 件の公開を行いました。なお、今月の「悪意のあるソフトウェアの削除ツール」では、新たに対応を追加したファミリはありません。

**_■ セキュリティ更新プログラム、セキュリティ アドバイザリに関する主な注意点_**

- [CVE-2019-11135](https://portal.msrc.microsoft.com/ja-JP/security-guidance/advisory/CVE-2019-11135) (Intel TSX) に対する緩和策を、Windows OS 向けに公開しています。Windows クライアント OS ならびに Windows Server 2019 では既定で有効になりますが、Windows Server 2016 以前の Windows Server OS で有効にするにはレジストリ キーを設定する必要があります。詳しくはサポート技術情報 [4531006](https://support.microsoft.com/ja-jp/help/4531006) ならびに [4072698](https://support.microsoft.com/ja-jp/help/4072698) をご参照ください。
- [CVE-2018-12207](https://portal.msrc.microsoft.com/ja-JP/security-guidance/advisory/CVE-2018-12207) (Intel Processor) に対する緩和策を、ゲスト仮想マシン向けに公開しています。この緩和策は既定で無効となっていて、有効にするにはホストシステム上でレジストリ キーを設定する必要があります。詳しくはサポート技術情報 [4530989](https://support.microsoft.com/ja-jp/help/4530989) をご参照ください。
- UAC が有効になっているサーバー上で、Exchange 向けの更新プログラムを標準モード (管理者権限ではなく) で手動でインストールした際に、いくつかのファイルが正しく更新されず、OWA や ECP が正常に動作しない可能性があります。管理者権限で更新プログラムをインストールすることをお勧めします。詳細は、サポート技術情報 [4523171](https://support.microsoft.com/ja-jp/help/4523171) をご参照ください。

お客様はできるだけ早期に、今月公開のセキュリティ更新プログラムを適用するようお願いします。

**_■ _\*\***_2019_\***\*_ 年 _\*\***_11_\***\*_ 月のセキュリティ更新プログラム_**

セキュリティの脆弱性および更新プログラムの情報を、CVE、KB 番号、製品、またはリリース日別に並べ替えたりフィルターをかけたりすることができます。

[セキュリティ更新プログラム ガイド](https://portal.msrc.microsoft.com/ja-jp/security-guidance)

各月のセキュリティ更新プログラムを絞り込むには、日付範囲に絞り込む月の第 2 火曜日を指定して検索してください。

なお、セキュリティ更新プログラム ガイド API を活用して、自社に特化したカスタム レポートを作成することができます。API の活用方法を紹介する 6 つのビデオ ([API の情報 (GitHub)](https://aka.ms/SUGAPIdemo1_J)、[API へのアクセス](https://aka.ms/SUGAPIdemo2_J)、[HTML ファイルの出力](https://aka.ms/SUGAPIdemo3_J)、[Excel へのエクスポート](https://aka.ms/SUGAPIdemo4_J)、[CVE リストの取得](https://aka.ms/SUGAPIdemo5_J)、[KB リストの取得](https://aka.ms/SUGAPIdemo6_J)) を公開していますので、是非ご活用ください。

---

マイクロソフトは新たに確認した脆弱性について、下記の新しいセキュリティ更新プログラムを公開しました。

|                                                                                                                      |                |                              |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------- | -------------- | ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **製品ファミリ**                                                                                                     | **最大深刻度** | **最も大きな影響**           | **関連するサポート技術情報またはサポートの\*\*** Web \***\*ページ**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| **Windows 10 v1903、v1809、v1803、v1709**                                                                            | **緊急**       | リモートでコードが実行される | Windows 10 v1903: [4524570](https://support.microsoft.com/ja-jp/kb/4524570)、Windows 10 v1809: [4523205](https://support.microsoft.com/ja-jp/kb/4523205)、Windows 10 v1803: [4525237](https://support.microsoft.com/ja-jp/kb/4525237)、Windows 10 v1709: [4525241](https://support.microsoft.com/ja-jp/kb/4525241)                                                                                                                                                                                                                                                                                                                                                                                                                     |
| **Windows Server 2019、Windows Server 2016、Server Core インストール (2019、2016、v1903、v1803)**                    | **緊急**       | リモートでコードが実行される | Windows Server 2019: [4523205](https://support.microsoft.com/ja-jp/kb/4523205)、Windows Server 2016: [4525236](https://support.microsoft.com/ja-jp/kb/4525236)、Windows Server v1903: [4524570](https://support.microsoft.com/ja-jp/kb/4524570)、Windows Server v1803: [4525237](https://support.microsoft.com/ja-jp/kb/4525237)                                                                                                                                                                                                                                                                                                                                                                                                       |
| **Windows 8.1、Windows Server 2012 R2、Windows Server 2012、Windows 7、Windows Server 2008 R2、Windows Server 2008** | **緊急**       | リモートでコードが実行される | Windows 8.1、Windows Server 2012 R2: [4525243](https://support.microsoft.com/ja-jp/kb/4525243) および [4525250](https://support.microsoft.com/ja-jp/kb/4525250)、Windows Server 2012: [4525246](https://support.microsoft.com/ja-jp/kb/4525246) および [4525253](https://support.microsoft.com/ja-jp/kb/4525253)、Windows 7 および Windows Server 2008 R2: [4525235](https://support.microsoft.com/ja-jp/kb/4525235) および [4525233](https://support.microsoft.com/ja-jp/kb/4525233)、Windows Server 2008: [4525234](https://support.microsoft.com/ja-jp/kb/4525234) および [4525239](https://support.microsoft.com/ja-jp/kb/4525239)                                                                                                 |
| **Internet Explorer**                                                                                                | **緊急**       | リモートでコードが実行される | Internet Explorer の累積的な更新プログラム: [4525106](https://support.microsoft.com/ja-jp/kb/4525106)。Internet Explorer の更新プログラムは、上記の Windows の更新プログラム パッケージにも含まれています。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| **Microsoft Office 関連のソフトウェア**                                                                              | **重要**       | リモートでコードが実行される | Microsoft Office 関連の更新プログラムに関連するサポート記事: [4484113](https://support.microsoft.com/ja-jp/kb/4484113)、[4484119](https://support.microsoft.com/ja-jp/kb/4484119)、[4484127](https://support.microsoft.com/ja-jp/kb/4484127)、[4484141](https://support.microsoft.com/ja-jp/kb/4484141)、[4484144](https://support.microsoft.com/ja-jp/kb/4484144)、[4484148](https://support.microsoft.com/ja-jp/kb/4484148)、[4484152](https://support.microsoft.com/ja-jp/kb/4484152)、[4484158](https://support.microsoft.com/ja-jp/kb/4484158)、[4484159](https://support.microsoft.com/ja-jp/kb/4484159)、[4484160](https://support.microsoft.com/ja-jp/kb/4484160)、[4484164](https://support.microsoft.com/ja-jp/kb/4484164)。 |
| **Microsoft SharePoint 関連のソフトウェア**                                                                          | **重要**       | 情報漏えい                   | Microsoft SharePoint 関連の更新プログラムに関連するサポート記事: [4484142](https://support.microsoft.com/ja-jp/kb/4484142)、[4484143](https://support.microsoft.com/ja-jp/kb/4484143)、[4484149](https://support.microsoft.com/ja-jp/kb/4484149)、[4484151](https://support.microsoft.com/ja-jp/kb/4484151)、[4484157](https://support.microsoft.com/ja-jp/kb/4484157)、[4484165](https://support.microsoft.com/ja-jp/kb/4484165)                                                                                                                                                                                                                                                                                                      |
| **Visual Studio**                                                                                                    | **重要**       | 特権の昇格                   | Visual Studio 2017 v15.9: <http://aka.ms/vs/15/release/latest>Visual Studio 2019 v16.0: <https://my.visualstudio.com/Downloads/>Visual Studio 2019 v16.3: <https://my.visualstudio.com/Downloads/>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| **Microsoft Exchange Server**                                                                                        | **緊急**       | リモートでコードが実行される | Microsoft Exchange Server に関連するサポート記事: [4523171](https://support.microsoft.com/ja-jp/help/4523171)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| **ChakraCore**                                                                                                       | **緊急**       | リモートでコードが実行される | 詳細については、<https://github.com/Microsoft/ChakraCore/wiki> (英語情報) と <https://github.com/Microsoft/ChakraCore/releases/> (英語情報) を参照してください                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| **Azure Stack**                                                                                                      | **重要**       | なりすまし                   | <https://docs.microsoft.com/ja-jp/azure-stack/operator/release-notes-security-updates?view=azs-1910>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

**_■ 新規のセキュリティ アドバイザリの公開_**

- [アドバイザリ ADV190024](https://portal.msrc.microsoft.com/ja-jp/security-guidance/advisory/adv190024) (TPM) を公開しました。

**_■ 既存の脆弱性情報の更新_**

- 2019 年 10 月の [CVE-2019-1454 ](https://portal.msrc.microsoft.com/ja-JP/security-guidance/advisory/CVE-2019-1454)(Windows User Profile Service) を公開しました。これは情報のみの更新で、特に追加のアクションは必要ありません。

最新のサービス スタック更新プログラム (SSU) は、[アドバイザリ ADV990001](https://portal.msrc.microsoft.com/ja-jp/security-guidance/advisory/ADV990001) にてご確認ください。

次回のセキュリティ更新プログラムのリリースは、12 月 11 日 (日本時間) を予定しています。詳しくは、[年間スケジュール](https://aka.ms/relschedule)を参照してください。
