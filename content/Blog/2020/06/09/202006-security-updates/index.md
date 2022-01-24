---
title: '2020 年 6 月のセキュリティ更新プログラム (月例)'
description: ""
published: 2020-06-09
type: posts
redirect_from:
            - https://msrc-blog.microsoft.com/2020/06/09/202006-security-updates/
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
2020 年 6 月 10 日 (日本時間)、マイクロソフトは以下のソフトウェアのセキュリティ更新プログラムを公開しました。

- Microsoft Windows
- Microsoft Edge (EdgeHTML-based)
- Microsoft Edge (Chromium -based)
- ChakraCore
- Internet Explorer
- Microsoft Office、Microsoft Office Servers および Web Apps
- Windows Defender
- Microsoft Dynamics
- Visual Studio
- Azure DevOps
- HoloLens
- Adobe Flash Player
- Microsoft Apps for Android
- Windows App Store
- System Center
- Android App

新規セキュリティ更新プログラムを公開すると共に、既存の脆弱性情報 5 件の更新を行いました。なお、今月の「悪意のあるソフトウェアの削除ツール」では、新たに対応を追加したファミリはありません。

**_■ セキュリティ更新プログラム、セキュリティ アドバイザリに関する主な注意点_**

- 2020 年 6 月の定例リリースに公開された SMB v3.1.1 の脆弱性情報に関して、[CVE-2020-1206](https://portal.msrc.microsoft.com/ja-JP/security-guidance/advisory/CVE-2020-1206) は Windows 10 Version 1903 以降が、[CVE-2020-1284](https://portal.msrc.microsoft.com/ja-JP/security-guidance/advisory/CVE-2020-1284) は Windows 10 Version 2004 のみが影響を受ける対象製品となります。またこれらの Version の Windows Server は半期チャネルでの提供となるため、Core インストールのみが入手可能となります。詳細は、[CVE-2020-1206](https://portal.msrc.microsoft.com/ja-JP/security-guidance/advisory/CVE-2020-1206) ならびに [CVE-2020-1284](https://portal.msrc.microsoft.com/ja-JP/security-guidance/advisory/CVE-2020-1284) の脆弱性情報のよく寄せられる質問をご参照ください。

お客様はできるだけ早期に、今月公開のセキュリティ更新プログラムを適用するようお願いします。

**_■ _\*\***_2020_\***\*_ 年 _\*\***_6_\***\*_ 月のセキュリティ更新プログラム_**

セキュリティの脆弱性および更新プログラムの情報を、CVE、KB 番号、製品、またはリリース日別に並べ替えたりフィルターをかけたりすることができます。

[セキュリティ更新プログラム ガイド](https://portal.msrc.microsoft.com/ja-jp/security-guidance)

各月のセキュリティ更新プログラムを絞り込むには、日付範囲に絞り込む月の第 2 火曜日を指定して検索してください。

なお、セキュリティ更新プログラム ガイド API を活用して、自社に特化したカスタム レポートを作成することができます。API の活用方法を紹介する 6 つのビデオ ([API の情報 (GitHub)](https://aka.ms/SUGAPIdemo1_J)、[API へのアクセス](https://aka.ms/SUGAPIdemo2_J)、[HTML ファイルの出力](https://aka.ms/SUGAPIdemo3_J)、[Excel へのエクスポート](https://aka.ms/SUGAPIdemo4_J)、[CVE リストの取得](https://aka.ms/SUGAPIdemo5_J)、[KB リストの取得](https://aka.ms/SUGAPIdemo6_J)) を公開していますので、是非ご活用ください。

---

マイクロソフトは新たに確認した脆弱性について、下記の新しいセキュリティ更新プログラムを公開しました。

|                                                                                                                 |                |                              |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --------------------------------------------------------------------------------------------------------------- | -------------- | ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **製品ファミリ**                                                                                                | **最大深刻度** | **最も大きな影響**           | **関連するサポート技術情報またはサポートの\*\*** Web \***\*ページ**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| **Windows 10 v2004、v1909、v1903、v1809、v1803**                                                                | **緊急**       | リモートでコードが実行される | Windows 10 v2004: [_4557957_](https://support.microsoft.com/ja-jp/help/4557957)Windows 10 v1903 および Windows 10 v1909: [_4549951_](https://support.microsoft.com/ja-jp/help/4549951)、[_4560960_](https://support.microsoft.com/ja-jp/help/4560960)、[_4556799_](https://support.microsoft.com/ja-jp/help/4556799)Windows 10 v1809: [_4561608_](https://support.microsoft.com/ja-jp/help/4561608)Windows 10 v1803: [_4561621_](https://support.microsoft.com/ja-jp/help/4561621)                                                                                                                                                                                                                                                                                                                                                                                                             |
| **Windows Server 2019、Windows Server 2016、Server Core インストール (2019、2016、v2004、v1909、v1903、v1803)** | **緊急**       | リモートでコードが実行される | Windows Server 2019: [_4561608_](https://support.microsoft.com/ja-jp/help/4561608)Windows Server 2016: [_4561616_](https://support.microsoft.com/ja-jp/help/4561616)Windows Server v2004: [_4557957_](https://support.microsoft.com/ja-jp/help/4557957)Windows Server v1903 および Windows Server v1909: [_4560960_](https://support.microsoft.com/ja-jp/help/4560960)Windows Server v1803: [_4561621_](https://support.microsoft.com/ja-jp/help/4561621)                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| **Windows 8.1、Windows Server 2012 R2、Windows Server 2012**                                                    | **緊急**       | リモートでコードが実行される | Windows 8.1 および Windows Server 2012 R2 マンスリー ロールアップ: [_4561666_](https://support.microsoft.com/ja-jp/help/4561666)Windows 8.1 および Windows Server 2012 R2 セキュリティのみ: [_4561673_](https://support.microsoft.com/ja-jp/help/4561673)Windows Server 2012 マンスリー ロールアップ: [_4561612_](https://support.microsoft.com/ja-jp/help/4561612)Windows Server 2012 セキュリティのみ: [_4561674_](https://support.microsoft.com/ja-jp/help/4561674)                                                                                                                                                                                                                                                                                                                                                                                                                         |
| **Internet Explorer**                                                                                           | **緊急**       | リモートでコードが実行される | Internet Explorer の累積的な更新プログラム: [_4561603_](https://support.microsoft.com/ja-jp/help/4561603)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| **Microsoft Office 関連のソフトウェア**                                                                         | **重要**       | リモートでコードが実行される | Microsoft Office に関連するサポート技術情報: [_4484342_](https://support.microsoft.com/ja-jp/help/4484342)、[_4484396_](https://support.microsoft.com/ja-jp/help/4484396)、[_4484410_](https://support.microsoft.com/ja-jp/help/4484410)、[_4484403_](https://support.microsoft.com/ja-jp/help/4484403)、[_4484373_](https://support.microsoft.com/ja-jp/help/4484373)、[_4484378_](https://support.microsoft.com/ja-jp/help/4484378)、[_4484361_](https://support.microsoft.com/ja-jp/help/4484361)、[_4484351_](https://support.microsoft.com/ja-jp/help/4484351)、[_4484415_](https://support.microsoft.com/ja-jp/help/4484415)、[_4484380_](https://support.microsoft.com/ja-jp/help/4484380)、[_4484399_](https://support.microsoft.com/ja-jp/help/4484399)、[_4484369_](https://support.microsoft.com/ja-jp/help/4484369)、[_4484387_](https://support.microsoft.com/ja-jp/help/4484387) |
| **Microsoft SharePoint 関連のソフトウェア**                                                                     | **緊急**       | リモートでコードが実行される | Microsoft SharePoint に関連するサポート技術情報: [_4484402_](https://support.microsoft.com/ja-jp/help/4484402)、[_4484400_](https://support.microsoft.com/ja-jp/help/4484400)、[_4484414_](https://support.microsoft.com/ja-jp/help/4484414)、[_4484405_](https://support.microsoft.com/ja-jp/help/4484405)、[_4484409_](https://support.microsoft.com/ja-jp/help/4484409)、[_4484391_](https://support.microsoft.com/ja-jp/help/4484391)                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| **Microsoft Visual Studio**                                                                                     | **重要**       | 特権の昇格                   | Microsoft Visual Studio 2015 に関連するサポート技術情報: [_4562053_](https://support.microsoft.com/ja-jp/help/4562053)Visual Studio のセキュリティ更新プログラムの詳細については、_<https://portal.msrc.microsoft.com/ja-jp/security-guidance>_ を参照してください Visual Studio の更新プログラムの詳細については、[_https://docs.microsoft.com/ja-jp/visualstudio_](https://docs.microsoft.com/ja-jp/visualstudio) を参照してください。                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| **System Center Operations Manager (SCOM)**                                                                     | **重要**       | なりすまし                   | System Center Operations Manager のセキュリティ更新プログラムの詳細については、[_https://portal.msrc.microsoft.com/ja-jp/security-guidance_](https://portal.msrc.microsoft.com/ja-jp/security-guidance) を参照してください System Center Operations Manager の更新プログラムの詳細については、[_https://docs.microsoft.com/ja-jp/system-center/scom_](https://docs.microsoft.com/ja-jp/system-center/scom) を参照してください                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| **Azure DevOps Server**                                                                                         | **重要**       | なりすまし                   | Azure DevOps Server のセキュリティ更新プログラムの詳細については、[_https://portal.msrc.microsoft.com/ja-jp/security-guidance_](https://portal.msrc.microsoft.com/ja-jp/security-guidance) を参照してください Azure DevOps の更新プログラムの詳細については、[_https://docs.microsoft.com/ja-jp/azure/devops_](https://docs.microsoft.com/ja-jp/azure/devops) を参照してください                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| **ChakraCore**                                                                                                  | **緊急**       | リモートでコードが実行される | ChakraCore のセキュリティ更新プログラムの詳細については、[_https://portal.msrc.microsoft.com/ja-jp/security-guidance_](https://portal.msrc.microsoft.com/ja-jp/security-guidance) を参照してください ChakraCore の更新プログラムの詳細については、_<https://github.com/Microsoft/ChakraCore/wiki>_ (英語情報) と _<https://github.com/Microsoft/ChakraCore/releases/>_ (英語情報) を参照してください                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| **Adobe Flash Player**                                                                                          | **緊急**       | リモートでコードが実行される | Adobe Flash Player に関連するサポート技術情報: [_4561600_](https://support.microsoft.com/ja-jp/help/4561600)Adobe Flash Player のセキュリティ アドバイザリ: [_https://portal.msrc.microsoft.com/ja-JP/security-guidance/advisory/adv200010_](https://portal.msrc.microsoft.com/ja-jp/security-guidance/advisory/adv200010)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |

**■ \*\***新規の脆弱性情報の公開\*\*

- [CVE-2020-1441](https://portal.msrc.microsoft.com/ja-JP/security-guidance/advisory/CVE-2020-1441) (Windows Spatial Data Service) は 6 月 17 日 (米国時間) に公開されました。
- [CVE-2020-1457](https://portal.msrc.microsoft.com/ja-JP/security-guidance/advisory/CVE-2020-1457) (Windows Codecs Library) は 6 月 30 日 (米国時間) に公開されました。
- [CVE-2020-1425](https://portal.msrc.microsoft.com/ja-JP/security-guidance/advisory/CVE-2020-1425) (Windows Codecs Library) は 6 月 30 日 (米国時間) に公開されました。

**_■ 既存の脆弱性情報とセキュリティ アドバイザリの更新_**

- [CVE-2020-1108](https://portal.msrc.microsoft.com/ja-JP/security-guidance/advisory/CVE-2020-1108) (.NET Core & .NET Framework) を更新しました。
- [CVE-2020-0762](https://portal.msrc.microsoft.com/ja-JP/security-guidance/advisory/CVE-2020-0762) (Windows Defender Security Center) を更新しました。
- [CVE-2020-0763](https://portal.msrc.microsoft.com/ja-JP/security-guidance/advisory/CVE-2020-0763) (Windows Defender Security Center) を更新しました。
- [CVE-2020-1328](https://portal.msrc.microsoft.com/ja-JP/security-guidance/advisory/CVE-2020-1328) (Microsoft Dynamics 365 (On-Premise)) を更新しました。
- [CVE-2020-1221](https://portal.msrc.microsoft.com/ja-JP/security-guidance/advisory/CVE-2020-1221) (Microsoft Dynamics 365 (On-Premise)) を更新しました。
- [CVE-2020-1225](https://portal.msrc.microsoft.com/ja-JP/security-guidance/advisory/CVE-2020-1225) (Excel) は 6 月 16 日 (米国時間) に更新されました。
- [CVE-2020-1226](https://portal.msrc.microsoft.com/ja-JP/security-guidance/advisory/CVE-2020-1226) (Excel) は 6 月 16 日 (米国時間) に更新されました。
- [CVE-2020-1229](https://portal.msrc.microsoft.com/ja-JP/security-guidance/advisory/CVE-2020-1229) (Outlook) は 6 月 16 日 (米国時間) に更新されました。
- [CVE-2020-1321](https://portal.msrc.microsoft.com/ja-JP/security-guidance/advisory/CVE-2020-1321) (Office) は 6 月 16 日 (米国時間) に更新されました。

最新のサービス スタック更新プログラム (SSU) は、[アドバイザリ ADV990001](https://portal.msrc.microsoft.com/ja-jp/security-guidance/advisory/ADV990001) にてご確認ください。

2020 年の Microsoft Edge (Chromium-based) のセキュリティ情報は、[アドバイザリ ADV200002](https://portal.msrc.microsoft.com/ja-JP/security-guidance/advisory/ADV200002) にてご確認ください。

次回のセキュリティ更新プログラムのリリースは、7 月 15 日 (日本時間) を予定しています。詳しくは、[年間スケジュール](https://aka.ms/relschedule)を参照してください。

———————————

\* 2020 年 06 月 18 日: [CVE-2020-1441](https://portal.msrc.microsoft.com/ja-JP/security-guidance/advisory/CVE-2020-1441) の公開を追加しました。

\* 2020 年 06 月 19 日: [CVE-2020-1225](https://portal.msrc.microsoft.com/ja-JP/security-guidance/advisory/CVE-2020-1225)、[CVE-2020-1226](https://portal.msrc.microsoft.com/ja-JP/security-guidance/advisory/CVE-2020-1226)、[CVE-2020-1229](https://portal.msrc.microsoft.com/ja-JP/security-guidance/advisory/CVE-2020-1229)、[CVE-2020-1321](https://portal.msrc.microsoft.com/ja-JP/security-guidance/advisory/CVE-2020-1321) の更新を追加しました。

\* 2020 年 07 月 01 日: [_CVE-2020-1457_](https://portal.msrc.microsoft.com/ja-JP/security-guidance/advisory/CVE-2020-1457)、[_CVE-2020-1425_](https://portal.msrc.microsoft.com/ja-JP/security-guidance/advisory/CVE-2020-1425) の公開を追加しました。
