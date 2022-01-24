---
title: 'Windows Print Spooler の脆弱性情報 (CVE-2021-34527) に対するセキュリティ更新プログラムの定例外での公開'
description: ""
published: 2021-07-06
type: posts
redirect_from:
            - https://msrc-blog.microsoft.com/2021/07/06/20210707_windowsprintspooleroob/
authors:
- jsecteam
categories:
- Japan Security Team
tags:
- アドバイザリ
- セキュリティ情報
- セキュリティ更新
- 定例外
- 脆弱性
hero: ../../../defaultHero.jpg
---
2021 年 7 月 7 日 (日本時間)、マイクロソフトは以下のソフトウェアのセキュリティ更新プログラムを定例外で公開しました。

- Microsoft Windows

注: 2021 年 7 月 8 日 (日本時間) に、Windows 10 version 1607、Windows Server 2016、Windows Server 2012 向けのセキュリティ更新プログラムを公開しました。

本日、マイクロソフトは CVE-2021-34527 を修正するセキュリティ更新プログラムを定例外でリリースしました。この脆弱性は “PrintNightmare” として一般に知られています。本日公開したセキュリティ更新プログラムは累積的な更新プログラムで、過去のすべてのセキュリティの修正が含まれています。マイクロソフトはシステムを完全に保護するために、セキュリティ更新プログラムを早急に適用することをお勧めします。

本日公開したセキュリティ更新プログラムは、一般に公開されていた Windows Print Spooler に関する脆弱性 (CVE-2021-34527) を完全に解決します。また、”RestrictDriverInstallationToAdministrators” のレジストリを編集することで、より強力な保護機能を実装できる新機能も追加しています。詳細はサポート技術情報 [5005010](https://support.microsoft.com/ja-jp/help/5005010) をご参照ください。

現在、利用可能なセキュリティ更新プログラム パッケージの一覧については、セキュリティ更新プログラム ガイド上の脆弱性情報ページにて「セキュリティ更新プログラム」一覧を参照してください。

CVE-2021-34527 | Windows Print Spooler のリモートでコードが実行される脆弱性

<https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-34527>

お客様向けガイダンスを下記のブログ記事にて公開しています。

[Windows Print Spooler の脆弱性情報 (CVE-2021-34527) に関するお客様向けガイダンス](_wp_link_placeholder)

---

\* 2021 年 7 月 8 日: Windows 10 version 1607、Windows Server 2016、Windows Server 2012 向けのセキュリティ更新プログラムの公開を追加しました。
