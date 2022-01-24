---
title: '2019 年 12 月のセキュリティ更新プログラム (月例)'
description: ""
published: 2019-12-10
type: posts
redirect_from:
            - https://msrc-blog.microsoft.com/2019/12/10/201912-security-updates/
author: jsecteam
categories:
- Japan Security Team
- アドバイザリ
- セキュリティ情報
- セキュリティ更新
- 脆弱性
hero: ../../../defaultHero.jpg
---
2019 年 12 月 11 日 (日本時間)、マイクロソフトは以下のソフトウェアのセキュリティ更新プログラムを公開しました。

- Microsoft Windows
- Internet Explorer
- Microsoft Office、Microsoft Office Servers および Web Apps
- SQL Server
- Visual Studio
- Skype for Business

新規セキュリティ更新プログラムを公開すると共に、新規のセキュリティ アドバイザリ 1 件の公開、既存の脆弱性情報 3 件の更新を行いました。なお、今月の「悪意のあるソフトウェアの削除ツール」では、新たに対応を追加したファミリはありません。

**_■ セキュリティ更新プログラム、セキュリティ アドバイザリに関する主な注意点_**

2020 年 1 月の定例公開にて予定されていた LDAP 署名ならびにチャネルバインディングの変更は、2020 年 3 月に延期となりました。詳細は弊社のセキュリティ アドバイザリ [ADV190023](https://portal.msrc.microsoft.com/ja-jp/security-guidance/advisory/ADV190023) をご参照ください。

お客様はできるだけ早期に、今月公開のセキュリティ更新プログラムを適用するようお願いします。

**_■ _\*\***_2019_\***\*_ 年 _\*\***_12_\***\*_ 月のセキュリティ更新プログラム_**

セキュリティの脆弱性および更新プログラムの情報を、CVE、KB 番号、製品、またはリリース日別に並べ替えたりフィルターをかけたりすることができます。

[セキュリティ更新プログラム ガイド](https://portal.msrc.microsoft.com/ja-jp/security-guidance)

各月のセキュリティ更新プログラムを絞り込むには、日付範囲に絞り込む月の第 2 火曜日を指定して検索してください。

なお、セキュリティ更新プログラム ガイド API を活用して、自社に特化したカスタム レポートを作成することができます。API の活用方法を紹介する 6 つのビデオ ([API の情報 (GitHub)](https://aka.ms/SUGAPIdemo1_J)、[API へのアクセス](https://aka.ms/SUGAPIdemo2_J)、[HTML ファイルの出力](https://aka.ms/SUGAPIdemo3_J)、[Excel へのエクスポート](https://aka.ms/SUGAPIdemo4_J)、[CVE リストの取得](https://aka.ms/SUGAPIdemo5_J)、[KB リストの取得](https://aka.ms/SUGAPIdemo6_J)) を公開していますので、是非ご活用ください。

---

マイクロソフトは新たに確認した脆弱性について、下記の新しいセキュリティ更新プログラムを公開しました。

|                                                                                                                      |                |                              |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| -------------------------------------------------------------------------------------------------------------------- | -------------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **製品ファミリ**                                                                                                     | **最大深刻度** | **最も大きな影響**           | **関連するサポート技術情報またはサポートの\*\*** Web \***\*ページ**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| **Windows 10 v1909、v1903、v1809、v1803、v1709**                                                                     | **緊急**       | リモートでコードが実行される | Windows 10 v1909 および Windows 10 v1903: [4530684](https://support.microsoft.com/ja-jp/help/4530684)、Windows 10 v1809: [4530715](https://support.microsoft.com/ja-jp/help/4530715)、Windows 10 v1803: [4530717](https://support.microsoft.com/ja-jp/help/4530717)、Windows 10 v1709: [4530714](https://support.microsoft.com/ja-jp/help/4530714)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| **Windows Server 2019、Windows Server 2016、Server Core インストール (2019、2016、v1909、v1903、v1803)**             | **緊急**       | リモートでコードが実行される | Windows Server v1909 および Windows Server v1903: [4530684](https://support.microsoft.com/ja-jp/help/4530684)、Windows Server 2019: [4530715](https://support.microsoft.com/ja-jp/help/4530715)、Windows Server 2016: [4530689](https://support.microsoft.com/ja-jp/help/4530689)、Windows Server v1803: [4530717](https://support.microsoft.com/ja-jp/help/4530717)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| **Windows 8.1、Windows Server 2012 R2、Windows Server 2012、Windows 7、Windows Server 2008 R2、Windows Server 2008** | **緊急**       | リモートでコードが実行される | Windows 8.1、Windows Server 2012 R2、Windows RT 8.1 マンスリー ロールアップ: [4530702](https://support.microsoft.com/ja-jp/help/4530702)、Windows 8.1 および Windows Server 2012 R2 セキュリティのみ: [4530730](https://support.microsoft.com/ja-jp/help/4530730)、Windows Server 2012 マンスリー ロールアップ: [4530691](https://support.microsoft.com/ja-jp/help/4530691)、Windows Server 2012 セキュリティのみ: [4530698](https://support.microsoft.com/ja-jp/help/4530698)、Windows 7 および Windows Server 2008 R2 マンスリー ロールアップ: [4530734](https://support.microsoft.com/ja-jp/help/4530734)、Windows 7 および Windows Server 2008 R2 セキュリティのみ: [4530692](https://support.microsoft.com/ja-jp/help/4530692)、Windows Server 2008 マンスリー ロールアップ: [4530695](https://support.microsoft.com/ja-jp/help/4530695)、Windows Server 2008 セキュリティのみ: [4530719](https://support.microsoft.com/ja-jp/help/4530719)                                                                                                  |
| **Internet Explorer**                                                                                                | **重要**       | リモートでコードが実行される | Internet Explorer の累積的な更新プログラム: [4530677](https://support.microsoft.com/ja-jp/help/4530677)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| **Microsoft Office 関連のソフトウェア**                                                                              | **重要**       | リモートでコードが実行される | Office に関連するサポート技術情報: [4484180](https://support.microsoft.com/ja-jp/help/4484180)、[4484193](https://support.microsoft.com/ja-jp/help/4484193)、[4484186](https://support.microsoft.com/ja-jp/help/4484186)、[4484169](https://support.microsoft.com/ja-jp/help/4484169)、[4475598](https://support.microsoft.com/ja-jp/help/4475598)、[4475601](https://support.microsoft.com/ja-jp/help/4475601)、[4484094](https://support.microsoft.com/ja-jp/help/4484094)、[4461590](https://support.microsoft.com/ja-jp/help/4461590)、[4484166](https://support.microsoft.com/ja-jp/help/4484166)、[4461613](https://support.microsoft.com/ja-jp/help/4461613)、[4484179](https://support.microsoft.com/ja-jp/help/4484179)、[4484182](https://support.microsoft.com/ja-jp/help/4484182)、[4484196](https://support.microsoft.com/ja-jp/help/4484196)、[4484190](https://support.microsoft.com/ja-jp/help/4484190)、[4484192](https://support.microsoft.com/ja-jp/help/4484192)、[4484184](https://support.microsoft.com/ja-jp/help/4484184) |
| **Visual Studio**                                                                                                    | **緊急**       | リモートでコードが実行される | 詳細については、「セキュリティ更新プログラム ガイド」を参照してください。<https://aka.ms/securityupdateguide>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| **SQL Server 関連のソフトウェア**                                                                                    | **重要**       | なりすまし                   | 詳細については、「セキュリティ更新プログラム ガイド」を参照してください。<https://aka.ms/securityupdateguide>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| **Android 用 Microsoft Authentication Library (MSAL)**                                                               | **重要**       | 情報漏えい                   | <https://github.com/AzureAD/microsoft-authentication-library-common-for-android>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |

**_■ 新規の脆弱性情報とセキュリティ アドバイザリの公開_**

- [アドバイザリ ADV190026](https://portal.msrc.microsoft.com/ja-jp/security-guidance/advisory/ADV190026) (Windows Hello for Business) は 12 月 3 日 (米国時間) に公開されました。
- [CVE-2019-1491](https://portal.msrc.microsoft.com/ja-JP/security-guidance/advisory/CVE-2019-1491) (SharePoint) は 12 月 17 日 (米国時間) に公開されました。

**_■ 既存の脆弱性情報とセキュリティ アドバイザリの更新_**

- [CVE-2018-0859](https://portal.msrc.microsoft.com/ja-JP/security-guidance/advisory/CVE-2018-0859) (Scripting Engine) を更新しました。
- [CVE-2019-0860](https://portal.msrc.microsoft.com/ja-JP/security-guidance/advisory/CVE-2019-0860) (Chakra Scripting Engine) を更新しました。
- [CVE-2019-0838](https://portal.msrc.microsoft.com/ja-JP/security-guidance/advisory/CVE-2019-0838) (Windows) を更新しました。

最新のサービス スタック更新プログラム (SSU) は、[アドバイザリ ADV990001](https://portal.msrc.microsoft.com/ja-jp/security-guidance/advisory/ADV990001) にてご確認ください。

次回のセキュリティ更新プログラムのリリースは、1 月 15 日 (日本時間) を予定しています。詳しくは、[年間スケジュール](https://aka.ms/relschedule)を参照してください。

\---------------------------------  
\* 2019 年 12 月 18 日: LDAP 署名ならびにチャネルバインディングの変更に関する記述ならびに CVE-2019-1491 の脆弱性情報の公開を追加しました。

<!-- wp:paragraph -->

<!-- /wp:paragraph -->
