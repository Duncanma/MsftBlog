---
title: 'TCP/IP に影響を与える脆弱性情報に関する注意喚起'
description: ""
published: 2021-02-11
type: posts
redirect_from:
            - https://msrc-blog.microsoft.com/2021/02/11/20210212_tcpip/
authors:
- jsecteam
categories:
- Japan Security Team
tags:
- TCP/IP
- セキュリティ情報
- 脆弱性
hero: ../../../defaultHero.jpg
---
「[Multiple Security Updates Affecting TCP/IP: CVE-2021-24074, CVE-2021-24094, and CVE-2021-24086](https://msrc-blog.microsoft.com/2021/02/09/multiple-security-updates-affecting-tcp-ip/)」の日本語抄訳です。

2021 年 2 月 9 日 (日本時間) に、マイクロソフトは TCP/IP の実装に影響を与えるセキュリティ脆弱性に対する修正をリリースしました。それらは、2 件の深刻度評価が緊急のリモートのコード実行 (RCE) の脆弱性 ([CVE-2021-24074](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-24074), [CVE-2021-24094](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-24094)) と、1 件の深刻度評価が重要のサービス拒否 (DoS) の脆弱性 ([CVE-2021-24086](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-24086)) です。2 つの RCE の脆弱性は、現実的に攻撃可能な悪用コードを作成することは比較的困難であるため、これらの脆弱性が悪用される可能性は高いものの、悪用コードが短期間で出現する可能性は低いと考えられます。一方で、攻撃者はより短期間のうちにサービス拒否を発生させる悪用コード作成すると考えられ、セキュリティ更新プログラムの公開後、短期間の間にこれら 3 つの脆弱性を悪用したサービス拒否の攻撃が発生すると予想されます。そのため、2021 年 2 月に公開した Windows のセキュリティ更新プログラムを早急に適用することをお勧めします。

リモートの攻撃者は、これらの脆弱性を悪用したサービス拒否の攻撃によって、STOP エラーを引き起こす可能性があります。これにより、インターネットに直接つながっている Windows システムは、最小のネットワーク トラフィックでブルースクリーンが引き起こされる場合があります。

なるべく早急に、これらの脆弱性の修正を含むセキュリティ更新プログラムを適用することが重要です。ただし、早急にセキュリティ更新プログラムを適用することが現実的ではない場合には、サーバーの再起動を必要としない回避策の詳細を各脆弱性情報ページにて確認してください。これら３つの脆弱性は特有の性質があり、影響を受けるシステムの構成状況によって異なる回避策が必要となります。ただし、Internet Protocol version 4 (IPv4) の回避策、Internet Protocol version 6 (IPv6) の回避策として考えることができます。

IPv4 の回避策は、Windows では既定で許可されていないソース ルーティングの利用に対するセキュリティをより強固にする策です。この回避策は脆弱性情報 [CVE-2021-24074](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-24074) に記載されており、グループ ポリシーを用いて回避策を適用することや、サーバーの再起動を必要としない NETSH コマンドを実行することで適用することができます。IPv6 の回避策は脆弱性情報 [CVE-2021-24094](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-24094) および [CVE-2021-24086](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-24086) に記載されており、IPv6 フラグメントをブロックすることを必要とします。この変更は IPv6 を利用したサービスに影響を与える可能性があります。

**注意\*\***:\*\* IPv4 ソース ルーティング リクエストや IPv6 フラグメントは、ロードバランサーやファイアウォールといったエッジ デバイスでブロックすることが可能です。この方法は、高リスクな環境に置かれたシステムへの影響を緩和することができ、通常の管理スケジュールに従ってシステムにセキュリティ更新プログラムを適用することを可能とします。

これらの脆弱性は、マイクロソフト社内における製品セキュリティ向上の調査の一環として発見されました。現時点で、これらの脆弱性の詳細が、マイクロソフト以外の第三者によって知られていることを示す事実はありません。またこれらの脆弱性は、マイクロソフトの TCP/IP の実装に起因した問題で、すべてのバージョンの Windows が影響を受けます。マイクロソフト以外の実装は影響を受けません。

これらの脆弱性に対するリスク評価を考慮すると、可能な限り早急に影響を受けるシステムにセキュリティ更新プログラムを適用することが重要となります。セキュリティ更新プログラムの入手先は[セキュリティ更新プログラム ガイド](https://aka.ms/sug)上で確認することができます。自動更新が有効になっているお客様 (既定では自動更新は有効) は、自動的にセキュリティ更新プログラムがインストールされ、これらの脆弱性から自動的に保護されます。

**_TCP/IP 関連の脆弱性情報の一覧_**

・Windows TCP/IP のリモートでコードが実行される脆弱性

<https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-24074>

・Windows TCP/IP のリモートでコードが実行される脆弱性

<https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-24094>

・Windows TCP/IP のサービス拒否の脆弱性

<https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-24086>
