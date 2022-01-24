---
title: 'カスタマー サポート データベースのアクセス構成の誤りについて'
description: ""
published: 2020-01-22
type: posts
redirect_from:
            - https://msrc-blog.microsoft.com/2020/01/22/20200122-access-misconfiguration-for-customer-support-database/
author: jsecteam
categories:
- Japan Security Team
hero: ../../../defaultHero.jpg
---
本記事は、Microsoft Security Response Center ブログ “[Access Misconfiguration for Customer Support Database](https://msrc-blog.microsoft.com/2020/01/22/access-misconfiguration-for-customer-support-database/)” (2020 年 1 月 22 日 米国時間公開) の参照和訳です。

本日、マイクロソフトは、社内のカスタマー サポート データベースの構成の誤りに関して、調査を終了しました。調査では、悪用は見つかっておらず、ほとんどのお客様の個人を特定できる情報は、公開された状態ではないことが確認されました。しかしながら、このインシデントに関して、すべてのお客様に対して透明性を保ち、真剣に取り組み、説明の責任を果たしたいと考えています。

調査の結果、2019 年 12 月 5 日 (米国時間) にデータベースの[ネットワーク セキュリティ グループ](https://docs.microsoft.com/ja-jp/azure/virtual-network/security-overview)に加えた変更に、データを公開の状態とする[セキュリティ規則](https://docs.microsoft.com/ja-jp/azure/virtual-network/security-overview#security-rules)が、誤って構成されていたことを確認しました。この問題の報告を受け、2019 年 12 月 31 日 (米国時間) にかかる構成を修正し、データベースを制限するとともに、データベースアクセスと認可されていないアクセスを防止しました。この問題は、サポート ケースの分析に使用しているマイクロソフト内部のデータベースについてのみ発生したものであり、商用クラウドサービス上のデータが公開の状態になっていることではありません。

マイクロソフトの標準的な操作手順では、データベースに格納されているデータに対して、自動化ツールを使用して個人情報を削除しています。調査の結果として、記録内の個人情報の大部分は、弊社の標準的な手順に従って削除されていることを確認しました。但し、一部のシナリオでは、特定の条件においてデータが未削除のままになる場合があります。例として、電子メールのアドレスがスペースで区切られている（“XYZ@contoso.com”ではなく“XYZ @contoso com” ）といった、情報が標準的な形式ではない場合などです。私たちは、このような未削除データの存在を確認し、該当するお客様への通知を開始しました。

マイクロソフトは、お客様のプライバシーとセキュリティの保護にコミットしており、今後の問題の発生を防ぐために、以下のような措置を講じています。

- 内部リソースに対して、確立されたネットワーク セキュリティ規則に従っているかを監査する
- セキュリティ規則の構成の誤りを検出するメカニズムの範囲を拡張する
- セキュリティ規則の構成の誤りが検出された場合にサービス チームに送られるアラートを強化する
- 追加の自動編集機能を実装する

構成の誤りは、残念ながら業界全体でも一般的に発生するものです。マイクロソフトでは、この種の間違いを防ぐための解決策を用意していますが、残念ながらこのデータベースにおいては有効になっておりませんでした。私たちが本件から学んだように、お客様にも、データベース等の構成を定期的に調査し、最大限の保護を適用していることを確認いただくことをお勧め致します。

本件に関する一般的なガイダンスを下記しておきます。(構成方法に関するすべてを網羅しているわけではありません)

- [Governing your Azure Workloads](https://azure.microsoft.com/en-us/resources/governing-your-azure-workloads/) (英語情報)
- [ネットワーク セキュリティ グループ](https://docs.microsoft.com/ja-jp/azure/virtual-network/security-overview)
- [ネットワーク セキュリティ グループの作成、変更、削除](https://docs.microsoft.com/ja-jp/azure/virtual-network/manage-network-security-group)
- [ネットワーク セキュリティ グループ セキュリティ規則](https://docs.microsoft.com/ja-jp/azure/virtual-network/security-overview#security-rules)
- [ネットワーク セキュリティ グループの診断ログ](https://docs.microsoft.com/ja-jp/azure/virtual-network/virtual-network-nsg-manage-log)

この問題について、私たちはお客様に心から謝罪の意を表し、今後の再発を防ぐために真剣に取り組んでいくことをお伝えします。

また、リサーチャーの Bob Diachenko 氏が本件に関して緊密に協力いただいたことで、この構成を迅速に修正し、状況を調査し、お客様への通知を開始できるようになったことに改めて感謝いたします。

_Ann Johnson, Corporate Vice President - Cybersecurity Solutions Group_

_Microsoft Corporation_

_Eric Doerr, General Manager - Microsoft Security Response Center_

_Microsoft Corporation_
