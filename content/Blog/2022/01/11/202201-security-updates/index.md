---
title: '2022 年 1 月のセキュリティ更新プログラム (月例)'
description: ""
published: 2022-01-11
type: posts
redirect_from:
            - https://msrc-blog.microsoft.com/2022/01/11/202201-security-updates/
authors:
- jsecteam
categories:
- Japan Security Team
tags:
- アドバイザリ
- セキュリティ情報
- セキュリティ更新
- セキュリティ更新プログラム
hero: ../../../defaultHero.jpg
---
<!-- wp:paragraph -->

2022 年 1 月 11 日（米国時間）、マイクロソフトは、マイクロソフト製品に影響する脆弱性を修正するために、セキュリティ更新プログラムを公開しました。お客様はできるだけ早期に、公開されたセキュリティ更新プログラムを適用するようお願いします。最新の情報は、[セキュリティ更新プログラム ガイド](https://portal.msrc.microsoft.com/ja-jp/security-guidance) を確認してください。

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

なお、今月の「[悪意のあるソフトウェアの削除ツール](https://support.microsoft.com/ja-jp/topic/windows-%E6%82%AA%E6%84%8F%E3%81%AE%E3%81%82%E3%82%8B%E3%82%BD%E3%83%95%E3%83%88%E3%82%A6%E3%82%A7%E3%82%A2%E3%81%AE%E5%89%8A%E9%99%A4%E3%83%84%E3%83%BC%E3%83%AB%E3%81%A7%E6%B5%81%E8%A1%8C%E3%81%97%E3%81%A6%E3%81%84%E3%82%8B%E7%89%B9%E5%AE%9A%E3%81%AE%E6%82%AA%E8%B3%AA%E3%81%AA%E3%82%BD%E3%83%95%E3%83%88%E3%82%A6%E3%82%A7%E3%82%A2%E3%82%92%E5%89%8A%E9%99%A4%E3%81%99%E3%82%8B-kb890830-ba51b71f-39cd-cdec-73eb-61979b0661e0)」では、新たに対応を追加したファミリはありません。

<!-- /wp:paragraph -->

<!-- wp:spacer {"height":20} -->

<!-- /wp:spacer -->

<!-- wp:heading {"level":4} -->

#### ■ セキュリティ更新プログラム、セキュリティ アドバイザリに関する主な注意点

<!-- /wp:heading -->

<!-- wp:list -->

- 今月のセキュリティ更新プログラムで修正した脆弱性のうち、[CVE-2022-21919](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2022-21919) (Windows)、[CVE-2022-21874](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2022-21874)(Windows)、[CVE-2022-21839](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2022-21839)(Windows)、[CVE-2022-21836](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2022-21836)(Windows)、[CVE-2021-36976](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-36976)(Librachive)、[CVE-2021-22947](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-22947)(Curl) は、セキュリティ更新プログラムの公開よりも前に、脆弱性の情報が一般に公開されていたことを確認しています。なお、これらの脆弱性の悪用は、セキュリティ更新プログラムの公開時点では確認されていません。
- [CVE-2021-36976](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-36976)(Librachive)、[CVE-2021-22947](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-22947)(Curl) は、オープン ソース ソフトウェアの脆弱性です。Microsoft Windows がこれらのオープンソース ソフトウェアを利用しているため、マイクロソフトのセキュリティ更新プログラムサイトでも情報を掲載しています。なお、これらの脆弱性の修正は、Windows 向けセキュリティ更新プログラムに含まれています。
- 今月のセキュリティ更新プログラムで修正した脆弱性のうち、[CVE-2022-21907](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2022-21907) (HTTP プロトコル スタックのリモートでコードが実行される脆弱性) および[CVE-2022-21849](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2022-21849) (Windows IKE Extension でコードが実行される脆弱性) は、CVSS スコア Base スコアが 9.8 と高いスコアで、認証やユーザーの操作なしで悪用が可能な脆弱性です。これらの脆弱性が存在する製品、および悪用が可能となる条件については、各 CVE のページの「よく寄せられる質問」 を参照してください。セキュリティ更新プログラムが公開されるよりも前に、脆弱性の情報の一般への公開、脆弱性の悪用はありませんが、脆弱性の特性を鑑み、企業組織では早急なリスク評価とセキュリティ更新プログラムの適用を推奨しています。
- 2022 年 1 月のセキュリティ更新プログラムを展開する際のガイダンスは、2022 年 1 月のセキュリティ更新プログラムの展開に関する[_サポート技術情報_](https://support.microsoft.com/help/5010029) も併せてご参照ください。
- Microsoft Exchange の更新プログラムを展開する際のガイダンスは、Microsoft Exchange チームブログ [_Released: January 2022 Exchange Server Security Updates - Microsoft Tech Community_](https://techcommunity.microsoft.com/t5/exchange-team-blog/released-january-2022-exchange-server-security-updates/ba-p/3050699) も併せてご参照ください。
- セキュリティ更新プログラムにおける既知の問題は、各セキュリティ更新プログラムのサポート技術情報を参照してください。既知の問題が確認されている各セキュリティ更新プログラムのサポート技術情報一覧は、[_2022 年 1 月セキュリティ更新プログラム リリースノート_](https://msrc.microsoft.com/update-guide/releaseNote/2022-Jan)に掲載されています。

<!-- /wp:list -->

<!-- wp:spacer {"height":20} -->

<!-- /wp:spacer -->

<!-- wp:heading {"level":4} -->

#### ■ 2022 年 1 月のセキュリティ更新プログラム一覧

<!-- /wp:heading -->

<!-- wp:paragraph -->

2022 年 1 月 11 日（米国時間）に公開したセキュリティ更新プログラムの一覧は次の通りです。

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

最新の情報は、[セキュリティ更新プログラム ガイド](https://portal.msrc.microsoft.com/ja-jp/security-guidance) を確認してください。

<!-- /wp:paragraph -->

<!-- wp:table {"className":"is-style-stripes"} -->

| 製品ファミリ                                                                                | 最大深刻度 | 最も大きな影響               | 関連するサポート技術情報またはサポートの Web ページ                                                                                                                                                                                                                                                                                                                                                   |
| ------------------------------------------------------------------------------------------- | ---------- | ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Windows 11                                                                                  | 緊急       | リモートでコードが実行される | [5009566](https://support.microsoft.com/help/5009566)                                                                                                                                                                                                                                                                                                                                                 |
| Windows 10 v21H2, v21H1, v20H2, v1909                                                       | 緊急       | リモートでコードが実行される | Windows 10 v21H2, v21H1, v20H2: [5009543](https://support.microsoft.com/help/5009543) Windows 10 v1909: [5009545](https://support.microsoft.com/help/5009545)                                                                                                                                                                                                                                         |
| Windows Server 2022                                                                         | 緊急       | リモートでコードが実行される | Windows Server 2022: [5009555](https://support.microsoft.com/help/5009555)                                                                                                                                                                                                                                                                                                                            |
| Windows Server 2019, Windows Server 2016, and Server Core installations (2019, 2016, v20H2) | 緊急       | リモートでコードが実行される | Windows Server 2019: [5009557](https://support.microsoft.com/help/5009557) Windows Server 2016: [5009546](https://support.microsoft.com/help/5009546)                                                                                                                                                                                                                                                 |
| Windows 8.1, Windows Server 2012 R2, Windows Server 2012                                    | 緊急       | リモートでコードが実行される | Windows 8.1, Windows Server 2012 R2 Monthly Rollup: [5009624](https://support.microsoft.com/help/5009624) Windows 8.1, Windows Server 2012 R2 Security Only: [5009595](https://support.microsoft.com/help/5009595) Windows Server 2012 Monthly Rollup: [5009586](https://support.microsoft.com/help/5009586) Windows Server 2012 Security Only: [5009619](https://support.microsoft.com/help/5009619) |
| Microsoft Office                                                                            | 緊急       | リモートでコードが実行される | セキュリティ更新プログラムの詳細については、[セキュリティ更新プログラム ガイド](https://msrc.microsoft.com/update-guide/)を参考にしてください。                                                                                                                                                                                                                                                       |
| Microsoft SharePoint                                                                        | 緊急       | リモートでコードが実行される | セキュリティ更新プログラムの詳細については、[セキュリティ更新プログラム ガイド](https://msrc.microsoft.com/update-guide/)を参考にしてください。                                                                                                                                                                                                                                                       |
| Microsoft Exchange Server                                                                   | 緊急       | リモートでコードが実行される | [5008631](https://support.microsoft.com/help/5008631)                                                                                                                                                                                                                                                                                                                                                 |
| Microsoft .NET                                                                              | 重要       | サービス拒否                 | セキュリティ更新プログラムの詳細については、[セキュリティ更新プログラム ガイド](https://msrc.microsoft.com/update-guide/)を参考にしてください。                                                                                                                                                                                                                                                       |
| Microsoft Dynamics 365                                                                      | 重要       | なりすまし                   | セキュリティ更新プログラムの詳細については、[セキュリティ更新プログラム ガイド](https://msrc.microsoft.com/update-guide/)を参考にしてください。                                                                                                                                                                                                                                                       |
| Remote Desktop Client for Windows Desktop                                                   | 重要       | リモートでコードが実行される | セキュリティ更新プログラムの詳細については、[セキュリティ更新プログラム ガイド](https://msrc.microsoft.com/update-guide/)を参考にしてください。                                                                                                                                                                                                                                                       |

<!-- /wp:table -->

<!-- wp:spacer {"height":20} -->

<!-- /wp:spacer -->

<!-- wp:heading {"level":4} -->

#### ■ 2022 年 1 月のセキュリティ更新プログラムを公開した製品、コンポーネント一覧

<!-- /wp:heading -->

<!-- wp:paragraph -->

2022 年 1 月 11 日（米国時間）にセキュリティ更新プログラムを公開した製品およびコンポーネントの一覧は、[_2022 年 1 月セキュリティ更新プログラム リリースノート_](https://msrc.microsoft.com/update-guide/releaseNote/2022-Jan) をご確認ください。

<!-- /wp:paragraph -->

<!-- wp:spacer {"height":20} -->

<!-- /wp:spacer -->

<!-- wp:heading {"level":4} -->

#### ■ 既存の脆弱性情報の更新

<!-- /wp:heading -->

<!-- wp:paragraph -->

2022 年 1 月 11 日（米国時間）に更新をした既存のセキュリティ脆弱性はありません。

<!-- /wp:paragraph -->

<!-- wp:spacer {"height":20} -->

<!-- /wp:spacer -->

<!-- wp:heading {"level":4} -->

#### ■ 既存のセキュリティ アドバイザリの更新

<!-- /wp:heading -->

<!-- wp:paragraph -->

2022 年 1 月 11 日（米国時間）に、次のセキュリティアドバイザリを更新しました。

<!-- /wp:paragraph -->

<!-- wp:list -->

- [ADV170021 Microsoft Office の多層防御機能の更新プログラム](https://msrc.microsoft.com/update-guide/vulnerability/ADV170021)

  - 2022 年 1 月 11 日（米国時間）に公開したセキュリティ更新プログラムを適用することで、すべてのサポートされる Microsoft Excel で Dynamic Data Exchange (DDE) は既定で無効になります。詳細は、 [Microsoft Excel security enhancements in the January 2022 update](https://support.microsoft.com/help/5010321) を参照してください。

<!-- /wp:list -->

<!-- wp:spacer {"height":20} -->

<!-- /wp:spacer -->

<!-- wp:heading {"level":4} -->

#### ■ 補足情報

<!-- /wp:heading -->

<!-- wp:list -->

- 最新のサービス スタック更新プログラム (SSU) は、[アドバイザリ ADV990001](https://msrc.microsoft.com/update-guide/vulnerability/ADV990001) にてご確認ください。
- Microsoft Edge (Chromium-based) のセキュリティ情報は、公開のスケジュールが月例のリリースとは異なりますので、セキュリティ更新プログラム ガイド上で製品にて Microsoft Edge (Chromium-based) を選択してご確認ください。または、[Edge のセキュリティ リリース情報](https://docs.microsoft.com/deployedge/microsoft-edge-relnotes-security)にてご確認ください。
- 各脆弱性情報 (CVE) のページには、緩和策、回避策、注意事項やよく寄せられる質問など、追加の情報が掲載されている場合があります。セキュリティ更新プログラムの適用の前に、併せてご確認ください。
- 最新の情報は、[セキュリティ更新プログラム ガイド](https://portal.msrc.microsoft.com/ja-jp/security-guidance) を確認してください。セキュリティ更新プログラムガイドでは、セキュリティの脆弱性および更新プログラムの情報を、CVE、KB 番号、製品、またはリリース日別に並べ替えたりフィルターをかけたりすることができます。各月のセキュリティ更新プログラムを絞り込むには、日付範囲に絞り込む月の第 2 火曜日を指定して検索してください。なお、セキュリティ更新プログラム ガイド API を活用して、自社に特化したカスタム レポートを作成することができます。API の活用方法を紹介する 6 つのビデオ ([API の情報 (GitHub)](https://aka.ms/SUGAPIdemo1_J)、[API へのアクセス](https://aka.ms/SUGAPIdemo2_J)、[HTML ファイルの出力](https://aka.ms/SUGAPIdemo3_J)、[Excel へのエクスポート](https://aka.ms/SUGAPIdemo4_J)、[CVE リストの取得](https://aka.ms/SUGAPIdemo5_J)、[KB リストの取得](https://aka.ms/SUGAPIdemo6_J)) を公開していますので、是非ご活用ください。
- [セキュリティ更新プログラム ガイド](https://portal.msrc.microsoft.com/ja-jp/security-guidance) の更新をお知らせする通知サービスのリニューアルが予定されています。詳しくは、 ブログ “[_Coming Soon: A Brand-New Notification System!_](https://aka.ms/SUGNotificationProfile)” をご参照ください。

<!-- /wp:list -->

<!-- wp:paragraph -->

次回のセキュリティ更新プログラムのリリースは、2022 年 2 月 9 日 (日本時間) を予定しています。詳しくは、[年間スケジュール](https://msrc-blog.microsoft.com/2021/11/21/securityupdatereleaseschedule2022/)を参照してください。

<!-- /wp:paragraph -->
