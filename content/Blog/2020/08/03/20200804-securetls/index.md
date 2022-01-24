---
title: 'より安全な TLS 設定を利用しましょう'
description: ""
published: 2020-08-03
type: posts
redirect_from:
            - https://msrc-blog.microsoft.com/2020/08/03/20200804-securetls/
authors:
- jsecteam
categories:
- Japan Security Team
tags:
- TLS
- セキュリティ情報
hero: ../../../defaultHero.jpg
---
データを暗号化し安全にやり取りを行う Transport Layer Security (TLS)。本ブログでも、過去に何度かお知らせしてきたように、より安全な TLS プロトコルのバージョンである TLS 1.2 以降の利用が、業界全体で推奨されており、TLS 1.1/TLS 1.0 の廃止が進められています。マイクロソフトでも、すべてのサポート対象の製品やサービスで TLS 1.2 の利用が可能となっており、TLS 1.0/1.1 の利用の廃止または既定での無効化が進められています。ブラウザでは、既に 2020 年 7 月に Edge Chromium 版 (Version 84) で TLS 1.0/1.1 が既定で無効化されており、早くても 2021 年春に Internet Explorer 11、Microsoft Edge HTML 版においても、TLS 1.0/TLS 1.1 を既定で無効化する措置を行う予定です。クラウドサービスでも Office 365、Azure の各サービスで TLS 1.1/1.0 の無効化が進んでいます。詳細は、過去ブログ [\[IT 管理者向け\] TLS 1.2 への移行を推奨しています](https://blogs.technet.microsoft.com/jpsecurity/2017/07/11/tlsmigration/) および [2020 年 IE, Edge で TLS 1.0, 1.1 での接続無効化。確認を！](https://msrc-blog.microsoft.com/2018/10/16/tlsdeprecation/) を参考にしてください。

\[2020/9/7 追記]  
各製品、サービスにおける TLS 1.0/1.1 の廃止予定については、次の情報を参考にしてください。  
TLS 1.0 and 1.1 deprecation  
<https://techcommunity.microsoft.com/t5/microsoft-sharepoint-blog/tls-1-0-and-1-1-deprecation/ba-p/1620264>

**プロトコルバージョンだけではなく、安全な暗号の設定も重要**

TLS を安全に利用するためには、TLS プロトコルのバージョンだけではなく、TLS の処理に関係するさまざまな設定も適切に設定する必要があります。TLS 処理中に利用される暗号や鍵交換、ハッシュのアルゴリズム、利用する鍵の長さなどの設定も適切な値を選択する必要があります。Windows では、TL Ｓ で利用する暗号アルゴリズムについては、[暗号スイート (Cipher Suite)](https://docs.microsoft.com/en-us/windows/win32/secauthn/cipher-suites-in-schannel) を定め、優先順位が高く設定されている暗号スイートから順に利用します。

数ある暗号アルゴリズムや鍵の設定値の選択肢の中から、自身が管理する TLS サーバー・クライアントでは、どのような値を選択するべきか? 特に暗号が専門ではない IT 管理者にとっては、さまざまな設定を検証し安全性を判断するのは、難しい場合が多くあります。また IT システムを安全に運用するためには、安全性だけに注視するのではなく、セキュリティと運用のバランスを取り適切な管理を継続することが重要です。一般的に、より新しいアルゴリズムやより長い鍵の長さを利用することで安全性の向上は見込めますが、互換性の問題やパフォーマンスの問題などを生じる場合もあります。TLS 利用時の安全な暗号アルゴリズムおよび鍵などの各種設定については、Windows の既定値やベースライン、各業界団体が発行しているガイドラインを参考に、組織や利用しているシステムとって適切な設定値を選択することをお勧めします。

どこから始めればよいかわからない、という場合は、ぜひ日本において代表的なガイドラインとして、暗号技術評価プロジェクト [CRYPTREC ](https://www.cryptrec.go.jp/op_guidelines.html)によって提供されている[ TLS 暗号設定ガイドライン](https://www.cryptrec.go.jp/op_guidelines.html)を参照することをお勧めします。ガイドラインと各種設定のための参考資料は、情報処理推進機構 (IPA) のウェブサイトでまとめて公開されています。

情報処理推進機構 (IPA)

[TLS 暗号設定ガイドライン～安全なウェブサイトのために（暗号設定対策編）～](https://www.ipa.go.jp/security/vuln/ssl_crypt_config.html)

このガイドラインでは、安全性の確保と相互接続の必要性のバランスを鑑みた三段階の設定基準 (高セキュリティ型、推奨セキュリティ型、セキュリティ例外型) を設けており、利用するシステムに求められるリスク対応レベルに応じて、TLS の設定基準を選ぶことができます。2020 年 7 月には、現時点ではの最新版となる第 3 版 が公開され、TLS 1.3 に関するガイダンスも新たに加わりました。また安全ではない古いプロトコル SSL 3.0 の禁止が行われ、各要求項目でより強い安全性を持つ設定が求められています。

また、このガイドラインは暗号やセキュリティが専門ではない IT 管理者でも、内容を正しく理解し設定が容易に行えるように、TLS や暗号アルゴリズムの解説や具体的な設定手順が掲載されています。Windows、IIS での設定も「[TLS 暗号設定 サーバ設定編&暗号スイートの設定例 （Windows IIS 用）](https://www.ipa.go.jp/security/vuln/ssl_crypt_config.html)」に掲載されていますので、ぜひご参照ください。

暗号で利用されている鍵の管理システムについては、CRYPTREC から、暗号の鍵を管理するためのガイドライン「[暗号鍵管理システム設計指針 (基本編)](https://www.cryptrec.go.jp/op_guidelines.html)」も公開されています。ぜひこちらも参考にしてみてください。

**マイクロソフト\*\*** TLS 1.3 対応状況\*\*

最新の TLS プロトコルバージョン TLS 1.3 については、現在 Windows、Edge をはじめとしたマイクロソフト製品、サービスでの実装・展開を進めています。

2020 年 ８ 月時点では、次のような対応状況です。最新の情報は、各製品ページを参照してください。

**ブラウザ \*\***(Microsoft Edge、Internet Explorer):\*\*

Microsoft Edge (Chromium): 最新バージョンで TLS 1.3 対応済み

Microsoft Edge (Edge-HTML): 最新バージョンで TLS 1.3 対応済み

Internet Explorer 11: 最新バージョンで TLS 1.3 対応済み

**Windows:**

[Windows 10, version 1903](https://docs.microsoft.com/en-us/windows/release-information/status-windows-10-1903)、Windows Server 1903 以降で TLS 1.3 対応 (ただし現時点ではテスト目的での利用のみ)

(2020 年 8 月 21 日追記) Windows 10 Insider Preview build 20170 から既定で TLS 1.3 が有効となり広くテストいただけるようになりました。詳細は “[Taking Transport Layer Security (TLS) to the next level with TLS 1.3](https://www.microsoft.com/security/blog/2020/08/20/taking-transport-layer-security-tls-to-the-next-level-with-tls-1-3/)” をご参照ください。

**.NET:**

.NET アプリ側で TLS プロトコルバージョンを指定するのではなく、利用している OS に準ずるようにアプリを設計することを推奨しています。このようにすることで、利用している OS の TLS プロトコルの優先度に準じて利用することが可能となり、最新のプロトコルや暗号スイートが利用可能になればそれに応じて .NET でも利用するようになります。詳細は、[Transport Layer Security (TLS) best practices with the .NET Framework](https://docs.microsoft.com/en-us/dotnet/framework/network-programming/tls) を参照してください。

TLS を安全に利用するためには、TLS プロトコルのバージョンだけではなく、TLS の処理に関係する鍵交換のアルゴリズムなど、さまざまな設定を適切に行うことが重要です。設定を行う対象のシステムに応じた、適切なアルゴリズムや設定値を選択し安全な TLS 環境の運用を!

参考: [Microsoft TLS 1.3 Support Reference](https://devblogs.microsoft.com/premier-developer/microsoft-tls-1-3-support-reference/)

垣内 由梨香  
セキュリティ プログラム マネージャー  
セキュリティ レスポンス チーム  
Microsoft Corp.

———————————

2020 年 8 月 19 日: Internet Explorer 11、Microsoft Edge HTML 版における TLS 1.0/TLS 1.1 を既定で無効化する予定を 2021 年春に変更しました。

<!-- wp:paragraph -->

<!-- /wp:paragraph -->
