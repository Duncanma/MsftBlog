---
title: '2021 年 6 月のセキュリティ更新プログラム (月例)'
description: ""
published: 2021-06-08
type: posts
redirect_from:
            - https://msrc-blog.microsoft.com/2021/06/08/202106-security-updates/
author: jsecteam
categories:
- Japan Security Team
- アドバイザリ
- セキュリティ情報
- セキュリティ更新
- 脆弱性
hero: ../../../defaultHero.jpg
---
2021 年 6 月 9 日 (日本時間)、マイクロソフトは以下のソフトウェアのセキュリティ更新プログラムを公開しました。

- .NET Core & Visual Studio
- 3D Viewer
- Microsoft DWM Core Library
- Microsoft Intune
- Microsoft Office
- Microsoft Office Excel
- Microsoft Office Outlook
- Microsoft Office SharePoint
- Microsoft Scripting Engine
- Microsoft Windows Codecs Library
- Paint 3D
- Role: Hyper-V
- Visual Studio Code - Kubernetes Tools
- Windows Bind Filter Driver
- Windows Common Log File System Driver
- Windows Cryptographic Services
- Windows DCOM Server
- Windows Defender
- Windows Drivers
- Windows Event Logging Service
- Windows Filter Manager
- Windows HTML Platform
- Windows Installer
- Windows Kerberos
- Windows Kernel
- Windows Kernel-Mode Drivers
- Windows Network File System
- Windows NTFS
- Windows NTLM
- Windows Print Spooler Components
- Windows Remote Desktop
- Windows TCP/IP

新規セキュリティ更新プログラムを公開すると共に、既存の脆弱性情報 2 件の更新を行いました。なお、今月の「悪意のあるソフトウェアの削除ツール」では、新たに対応を追加したファミリはありません。

**_■ セキュリティ更新プログラム、セキュリティ アドバイザリに関する主な注意点_**

- 2021 年 5 月の定例リリースに公開された Windows 10 1909 のセキュリティ更新プログラムを適用後に確認されていた、Microsoft 365 のデスクトップアプリケーションでサインインに失敗する問題に対する修正は 6 月のセキュリティ更新プログラムに含まれています。
- 2021 年 6 月の定例リリースにて公開された Windows DCOM Server の脆弱性情報 [CVE-2021-26414](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-26414) (中間者攻撃) に対応するためには、セキュリティ更新プログラムを適用後に、既定の DCOM 認証レベルを強化するようレジストリを追加する必要があります。こちらの変更は、2021 年第 4 四半期前半に既定で有効になり (レジストリキーを使用して無効にできます)、2022 年前半に既定で変更を無効にすることができなくなる予定です。アプリケーション開発者や管理者は早めにこの変更による影響がないことを確認することをお勧めします。詳細はサポート技術情報 [5004442](https://support.microsoft.com/ja-jp/help/5004442) ならびに「[\[IT 管理者向け\] DCOM の脆弱性 (CVE-2021-26414) に対応するためのガイダンス](https://msrc-blog.microsoft.com/2021/06/08/20210609_dcomenrocement/)」をご参照ください。
- 2021 年 5 月の定例リリースに公開された Microsoft Jet Red Database Engine/Access Connectivity Engine の脆弱性情報 [CVE-2021-28455](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-28455) が更新され、Microsoft Access 2013 と Microsoft Access 2016 が影響を受ける製品に追加されました。Microsoft Access 2013 と Microsoft Access 2016 をお使いのお客様は 2021 年 6 月 9 日にリリースしたセキュリティ更新プログラムを適用する必要があります。

お客様はできるだけ早期に、今月公開のセキュリティ更新プログラムを適用するようお願いします。

**_■ _\*\***_2021_\***\*_ 年 _\*\***_6_\***\*_ 月のセキュリティ更新プログラム_**

セキュリティの脆弱性および更新プログラムの情報を、CVE、KB 番号、製品、またはリリース日別に並べ替えたりフィルターをかけたりすることができます。

[セキュリティ更新プログラム ガイド](https://portal.msrc.microsoft.com/ja-jp/security-guidance)

各月のセキュリティ更新プログラムを絞り込むには、日付範囲に絞り込む月の第 2 火曜日を指定して検索してください。

なお、セキュリティ更新プログラム ガイド API を活用して、自社に特化したカスタム レポートを作成することができます。API の活用方法を紹介する 6 つのビデオ ([API の情報 (GitHub)](https://aka.ms/SUGAPIdemo1_J)、[API へのアクセス](https://aka.ms/SUGAPIdemo2_J)、[HTML ファイルの出力](https://aka.ms/SUGAPIdemo3_J)、[Excel へのエクスポート](https://aka.ms/SUGAPIdemo4_J)、[CVE リストの取得](https://aka.ms/SUGAPIdemo5_J)、[KB リストの取得](https://aka.ms/SUGAPIdemo6_J)) を公開していますので、是非ご活用ください。

---

マイクロソフトは新たに確認した脆弱性について、下記の新しいセキュリティ更新プログラムを公開しました。

| **製品ファミリ**                                                                                                                                                          | **最大深刻度** | **最も大きな影響**           | **関連するサポート技術情報またはサポートの\*\*** Web \***\*ページ**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- | ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Windows 10 v21H1\*\***、\***\*v20H2\*\***、\***\*v2004\*\***、\***\*v1909**                                                                                             | **緊急**       | リモートでコードが実行される | Windows 10 v21H1、Windows 10 v20H2、Windows 10 v2004: [_5003637_](https://support.microsoft.com/ja-jp/help/5003637)Windows 10 v1909: [_5003635_](https://support.microsoft.com/ja-jp/help/5003635)                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| **Windows Server 2019\*\***、\***\*Windows Server 2016\*\***、\***\*Server Core \*\***インストール\***\* (2019\*\***、\***\*2016\*\***、\***\*v20H2\*\***、\***\*v2004)** | **緊急**       | リモートでコードが実行される | Windows Server Version 20H2、Windows Server Version 2004: [_5003637_](https://support.microsoft.com/ja-jp/help/5003637)Windows Server 2019: [_5003646_](https://support.microsoft.com/ja-jp/help/5003646)Windows Server 2016: [_5003638_](https://support.microsoft.com/ja-jp/help/5003638)                                                                                                                                                                                                                                                                                                                                               |
| **Windows 8.1\*\***、\***\*Windows Server 2012 R2\*\***、および\***\* Windows Server 2012**                                                                               | **緊急**       | リモートでコードが実行される | Windows 8.1 および Windows Server 2012 R2 マンスリー ロールアップ: [_5003671_](https://support.microsoft.com/ja-jp/help/5003671)Windows 8.1 および Windows Server 2012 R2 セキュリティのみ: [_5003681_](https://support.microsoft.com/ja-jp/help/5003681)Windows Server 2012 マンスリー ロールアップ: [_5003697_](https://support.microsoft.com/ja-jp/help/5003697)Windows Server 2012 セキュリティのみ: [_5003696_](https://support.microsoft.com/ja-jp/help/5003696)                                                                                                                                                                    |
| **Microsoft Office \*\***関連のソフトウェア\*\*                                                                                                                           | **重要**       | リモートでコードが実行される | [_5001934_](https://support.microsoft.com/ja-jp/kb/5001934)、 [_5001942_](https://support.microsoft.com/ja-jp/kb/5001942)、 [_5001943_](https://support.microsoft.com/ja-jp/kb/5001943)、 [_5001947_](https://support.microsoft.com/ja-jp/kb/5001947)、 [_5001950_](https://support.microsoft.com/ja-jp/kb/5001950)、 [_5001951_](https://support.microsoft.com/ja-jp/kb/5001951)、 [_5001953_](https://support.microsoft.com/ja-jp/kb/5001953)、 [_5001955_](https://support.microsoft.com/ja-jp/kb/5001955)、 [_5001956_](https://support.microsoft.com/ja-jp/kb/5001956)、 [_5001963_](https://support.microsoft.com/ja-jp/kb/5001963) |
| **Microsoft SharePoint \*\***関連のソフトウェア\*\*                                                                                                                       | **緊急**       | リモートでコードが実行される | [_4011698_](https://support.microsoft.com/ja-jp/kb/4011698)、 [_5001922_](https://support.microsoft.com/ja-jp/kb/5001922)、 [_5001939_](https://support.microsoft.com/ja-jp/kb/5001939)、 [_5001944_](https://support.microsoft.com/ja-jp/kb/5001944)、 [_5001945_](https://support.microsoft.com/ja-jp/kb/5001945)、 [_5001946_](https://support.microsoft.com/ja-jp/kb/5001946)、 [_5001954_](https://support.microsoft.com/ja-jp/kb/5001954)、 [_5001962_](https://support.microsoft.com/ja-jp/kb/5001962)                                                                                                                             |
| **Microsoft .NET \*\***関連のソフトウェア\*\*                                                                                                                             | **重要**       | サービス拒否                 | .NET 関連ソフトウェアのセキュリティ更新プログラムの詳細については、セキュリティ更新プログラム ガイド [_https://msrc.microsoft.com/update-guide_](https://msrc.microsoft.com/update-guide) を参照してください                                                                                                                                                                                                                                                                                                                                                                                                                              |
| **Microsoft Visual Studio \*\***関連のソフトウェア\*\*                                                                                                                    | **重要**       | 特権の昇格                   | Visual Studio 関連ソフトウェアのセキュリティ更新プログラムの詳細については、 [_https://docs.microsoft.com/ja-jp/visualstudio_](https://docs.microsoft.com/ja-jp/visualstudio) とセキュリティ更新プログラム ガイド [_https://msrc.microsoft.com/update-guide_](https://msrc.microsoft.com/update-guide) を参照してください                                                                                                                                                                                                                                                                                                                 |
| **Microsoft Malware Protection Engine**                                                                                                                                   | **緊急**       | リモートでコードが実行される | Microsoft Malware Protection Engine のセキュリティ更新プログラムの詳細については、セキュリティ更新プログラム ガイドを参照してください。 [_https://msrc.microsoft.com/update-guide_](https://msrc.microsoft.com/update-guide) を参照してください                                                                                                                                                                                                                                                                                                                                                                                           |

**_■ 既存の脆弱性情報の更新_**

- [CVE-2020-0835](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2020-0835) (Windows Defender Antimalware Platform Hard Link) を更新しました。
- [CVE-2021-28455](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-28455) (Microsoft Jet Red Database Engine and Access Connectivity Engine) を更新しました。

最新のサービス スタック更新プログラム (SSU) は、[アドバイザリ ADV990001](https://msrc.microsoft.com/update-guide/vulnerability/ADV990001) にてご確認ください。

Microsoft Edge (Chromium-based) のセキュリティ情報は、公開のスケジュールが月例のリリースとは異なりますので、セキュリティ更新プログラム ガイド上で製品にて Microsoft Edge (Chromium-based) を選択してご確認ください。[Edge のセキュリティ リリース情報](https://docs.microsoft.com/deployedge/microsoft-edge-relnotes-security)にてご確認ください。

次回のセキュリティ更新プログラムのリリースは、7 月 14 日 (日本時間) を予定しています。詳しくは、[年間スケジュール](https://aka.ms/relschedule)を参照してください。
