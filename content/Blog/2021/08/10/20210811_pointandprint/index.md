---
title: 'Point and Print の既定動作の変更'
description: ""
published: 2021-08-10
type: posts
redirect_from:
            - https://msrc-blog.microsoft.com/2021/08/10/20210811_pointandprint/
author: jsecteam
categories:
- CVE-2021-34481
- Japan Security Team
- Point and Print
- セキュリティ情報
hero: ../../../defaultHero.jpg
---
本記事は「[Point and Print Default Behavior Change](https://aka.ms/PointPrintMSRCBlog)」の日本語抄訳です。

"PrintNightmare" と総称されるいくつかの脆弱性を調査した結果、Point and Print の既定の動作は、潜在的な攻撃から保護するために必要なセキュリティレベルを確保できないことが分かりました。

今月、Point and Print ドライバーのインストールとアップデートの既定の動作に管理者特権を必要とするように変更することで、このリスクに対処しています。今月のセキュリティ更新プログラムをインストールすることで、既定の設定で、Windows Print Spooler サービスに存在する一般に公開されている脆弱性が緩和されます。2021 年 8 月 11 日にリリースされた、サポートされているすべてのバージョンの Windows 向けのセキュリティ更新プログラムを適用することによりこの変更は有効になり、[CVE-2021-34481](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-34481) にて脆弱性情報を公開しています。

この変更により、管理者特権を持たないユーザーが以前はプリンターを追加または更新できたシナリオにおいて、Windows プリントクライアントの動作に影響を与える可能性があります。しかし、セキュリティ リスクに対応するために今回の変更が必要であることをご理解いただきたいと考えています。推奨はしませんが、下記のサポート技術情報に記載されているレジストリ キーを使用することで、この緩和策を手動で無効にすることができます。

[KB5005652 - 新しいポイントと印刷の既定のドライバーのインストール動作を管理する (CVE-2021-34481)](http://support.microsoft.com/ja-jp/help/5005652)

この緩和策を無効にすると、お客様の環境を Windows Print Spooler サービスの一般に知られている脆弱性に晒す可能性があります。このリスクを想定する前に、管理者がセキュリティのニーズを正しく評価することを推奨します。

常に、すべてのセキュリティ更新プログラムをできるだけ早くインストールすることをお勧めします。すべてのセキュリティ更新プログラムの詳細については、[マイクロソフト セキュリティ更新プログラム ガイド](https://aka.ms/sug)を参照してください。自動更新を有効にしているお客様は自動的に保護されています。

MSRC チーム
