---
title: '[AD管理者向け] 2020 年 LDAP 署名と LDAP チャネルバインディングが有効化。確認を！'
description: ""
published: 2019-10-02
type: posts
redirect_from:
            - https://msrc-blog.microsoft.com/2019/10/02/ldapbinding/
author: jsecteam
categories:
- Active Directory
- ADV190023
- advisory
- Japan Security Team
- LDAP
- Security Advisory
- アドバイザリ
- セキュリティアドバイザリ
hero: ../../../defaultHero.jpg
---
こんにちは、セキュリティ レスポンスチームの垣内ゆりかです。

2019 年 8 月に公開したセキュリティ アドバイザリ [ADV190023](https://portal.msrc.microsoft.com/ja-JP/security-guidance/advisory/adv190023) は、もうご覧になりましたでしょうか。

マイクロソフトでは、Active Directory ドメイン環境内の LDAP 通信の安全性を向上するために、LDAP 署名、および LDAP チャネルバインディング （LDAPS 利用時）を有効化することを推奨します。

有効化される機能の設定を事前にテストしていただくために、セキュリティ アドバイザリ [ADV190023](https://portal.msrc.microsoft.com/ja-JP/security-guidance/advisory/adv190023) を公開し、周知を行っています。現在、これらの機能は既定では有効化されていませんが、構成を変更することで利用可能です。

Active Directory 環境の管理者の皆さんは、ぜひ、今回の措置の内容を確認し、事前にテストを行い、段階的に有効化を行ってください。

##### **有効となる機能**

Active Directory ドメイン環境内の LDAP 通信の安全性を向上するために、以下の 2 つの機能を有効化します。

(A) LDAP 署名

LDAP 署名を利用することで、セッションキー LDAP セッションに署名を行うことができます。これにより、LDAP サーバーと LDAP クライアントのセッションが署名されるため、改ざんを防止することができます。

参考情報  
[Windows Server 2008 で LDAP 署名を有効にする方法](https://support.microsoft.com/ja-jp/help/935834/how-to-enable-ldap-signing-in-windows-server-2008)  
[ドメイン コントローラー: LDAP サーバー署名必須](https://docs.microsoft.com/ja-jp/windows/security/threat-protection/security-policy-settings/domain-controller-ldap-server-signing-requirements)

(B) LDAP チャネルバインディング 必須（LDAPS 利用時のみ）

LDAP over SSL/TLS (LDAPS) で、LDAP チャネルバインディングを利用すると、TLS が動作するトランスポート層からの情報を、LDAP が動作するアプリケーション層で適切に利用することができ、複数のネットワーク層で利用されている情報を安全に管理することができます。LDAP チャネルバインディングを有効にすると、LDAP クライアントは、channel binding tokens (CBT) を LDAP サーバーに提供するようになります。また、LDAP サーバー側では、LDAPS 接続を行う際には、LDAP クライアントが channel binding tokens (CBT) を LDAP サーバーに提供することを必須 （あるいは、CBT 対応のクライアントの時のみ必須とする） ことができます。

参考情報  
[LdapEnforceChannelBinding レジストリ エントリの設定による SSL/TLS 接続の LDAP 認証の安全性の向上](https://support.microsoft.com/ja-jp/help/4034879/how-to-add-the-ldapenforcechannelbinding-registry-entry)

##### **なぜ有効にするの？**

現在、既定の構成では、LDAP 接続には、LDAP 署名や LDAP チャネルバインディングは必須ではありません。このため、悪意のある中間者によって、LDAP 通信が攻撃にさらされる可能性があります。

マイクロソフトでは、以前より、LDAP 署名、および LDAP チャネルバインディングの機能の提供を開始し、レジストリを構成することで機能を有効にするよう呼び掛けていました。

今回、Active Directory 環境における LDAP 接続を、より安心・安全な環境でご利用いただけるように、これらの機能をグループポリシーを使って有効化することにしました。

##### **対象環境**

Windows Server 2008 SP2 (ESU), Windows Server 2008 R2 SP1 (ESU), Windows Server 2012, Windows Server 2012 R2, Windows Server 2016, Windows Server 2019, Windows 10, version 1909

注：LDAP 署名と LDAP チャネルバインディングの構成変更の対象となるのは、 Active Directory Domain Services (AD DS) の役割がインストールされたサーバー OS です。

##### **スケジュール**

以下のスケジュールで、機能の有効化を行います。なお、最新の情報は、サポート技術情報 4520412 [Windows の 2020 年 LDAP 署名と LDAP チャネル バインディングの要件](https://support.microsoft.com/ja-jp/help/4520412) を参照してください。

|                        |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **日付 \*\***(PST)\*\* | **内容**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 2019 年 8 月 13 日     | セキュリティアドバイザリ ADV190023 を公開し、Active Directory 環境における LDAP 署名および LDAP チャネルバインディングの機能の利用を推奨しました。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 2019 年 9 月 11 日     | セキュリティアドバイザリ ADV190023 を更新し、Active Directory 環境における LDAP 署名および LDAP チャネルバインディングの機能を有効化する措置を行う予定であることを告知しました。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 2020 年 2 月 28 日     | セキュリティアドバイザリ ADV190023 ならびにサポート技術情報 4520412 を更新し、2020 年 3 月のセキュリティ更新プログラムでの変更内容と、LDAP 署名および LDAP チャネルバインディングの機能を段階的に有効化するための手順を公開しました。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 2020 年 3 月 11 日     | Windows Update 上で、Windows 向けのセキュリティ更新プログラムの配信を行いました。このセキュリティ更新プログラムを適用することにより、次の機能が提供されます。- LDAP チャネルバインディングに関するイベント ログの追加 (Microsoft-Windows-Active Directory_DomainService: 3039, 3040, 3041) - LDAP チャネルバインディングに関するグループ ポリシーの追加 (Domain controller: LDAP server channel binding token requirements)**LDAP 署名および LDAP チャネルバインディングの設定値、および既定の値に変更は行われず、LDAP 署名と LDAP チャネルバインディングの動作に変更はありません。**補足: LDAP 署名に関するイベント ログ (Microsoft-Windows-Active Directory_DomainService: 2886, 2887, 2888, 2889)、LDAP 署名に関するグループ ポリシー (Domain controller: LDAP server signing requirements) はすべてのサポート中の Windows 上で既に利用可能となっています。 |

##### **影響**

現在、既定の構成では、LDAP 接続には、LDAP 署名や LDAP チャネルバインディングは有効ではありません。これらの機能が有効化された場合、適切に構成が行われていない LDAP クライアントとの LDAP 接続に問題が生じる可能性があります。

(A) LDAP 署名必須の有効化による影響

・SASL (Negotiate、Kerberos、NTLM、またはダイジェスト) が署名されていない LDAP バインドが利用できない  
・クリア テキスト (SSL または TLS の暗号化されていない) 接続上で実行される、LDAP シンプル バインドが利用できない

(B) LDAP チャネルバインディング (LDAPS 利用時のみ)

・CBT を提供できない LDAP クライアントが接続に失敗する可能性がある

・[サポート技術情報 (KB) 4034879](https://support.microsoft.com/ja-jp/help/4034879) が適用されていない場合に互換性の問題で接続に失敗する可能性があります。そのためクライアント端末含め、ドメイン内のすべての端末に[サポート技術情報 (KB) 4034879](https://support.microsoft.com/ja-jp/help/4034879) を適用することを推奨します。  
・ドメインコントローラ側で、すべてのクライアントに CBT 提供を必須とするよう設定した場合 (GPO: LDAP server channel binding token requirements=Always, レジストリ: LdapEnforceChannelBinding=2)、CBT を提供しなかったクライアントからのバインディングは失敗します。  
・ドメインコントローラ側で、CBT をサポートしているクライアントからのみ CBT 提供を必須とするよう設定した場合 (GPO: LDAP server channel binding token requirements=When supported, レジストリ: LdapEnforceChannelBinding=1)、CBT をサポートしている場合のみ CBT を要求し、CBT をサポートしていないクライアントは CBT を提供しなくても接続可能です。

依存するクライアントには、SASL (Negotiate、Kerberos、NTLM、またはダイジェスト) が署名されていない LDAP バインドまたは、この構成の変更を行った後に LDAP の SSL や TLS 接続経由での単純なバインドが動作を停止します。

署名 (整合性の確認) を要求しない簡単な認証とセキュリティ層 (SASL) LDAP バインドを拒否する、またはクリア テキスト (SSL または TLS の暗号化されていない) 接続上で実行される、LDAP シンプル バインドを拒否するサーバーを構成することによって、ディレクトリ サーバーのセキュリティを大幅に向上できます。SASLs には、Negotiate、Kerberos、NTLM などのプロトコルとプロトコルのダイジェストが含まれます。

##### **推奨するアクション**

**STEP 1 2020 年 3 月のセキュリティ更新プログラムの適用**

利用しているドメインコントローラにて、2020 年 3 月に公開予定のセキュリティ更新プログラムを適用します。

**STEP 2 LDAP イベントの診断ログのレベルを変更**

すべてのドメインコントローラ上で、下記のレジストリを追加し、上記のセキュリティ更新プログラムで追加された LDAP 署名ならびに LDAP チャネルバインディングを監査するための準備を行います。

_Reg Add HKLM\\SYSTEM\\CurrentControlSet\\Services\\NTDS\\Diagnostics /v "16 LDAP Interface Events" /t REG_DWORD /d 2_

記録されるイベント ログの詳細は、サポート技術情報 [4520412](https://support.microsoft.com/ja-jp/help/4520412) の[表 1](https://support.microsoft.com/ja-jp/help/4520412/2020-ldap-channel-binding-and-ldap-signing-requirements-for-windows#table1) (LDAP 署名)、[表 2](https://support.microsoft.com/ja-jp/help/4520412/2020-ldap-channel-binding-and-ldap-signing-requirements-for-windows#table2) (LDAP チャネルバインディング) をご参照ください。

**STEP 3 LDAP 署名ならびに LDAP チャネルバインディングのイベント ログの監視**

すべてのドメインコントローラ上で、Microsoft-Windows-Active Directory_DomainService: 2889 (LDAP 署名に未対応)、3039 (LDAP チャネルバインディングに未対応) が記録されていないかを確認します。イベント 3039 はチャネルバインディングが “When supported (サポートされる場合)” または ”Always (常に)” に構成されている場合にのみ記録されます。

**STEP 4 影響を受ける LDAP クライアントを特定**

イベント 2889 に記録されている IP アドレスから、署名されていない LDAP バインドを利用している LDAP クライアントを特定します。またイベント 3039 に記録されている IP アドレスから、LDAP チャネルバインディングを使用していない接続を行っている LDAP クライアントを特定します。  
影響を受ける可能性がある端末を特定したら、各端末上で LDAP 署名ならびに LDAP チャネルバインディングを利用するように構成を変更します。なお Windows 端末上では、LDAP 署名はサポートされているすべての OS で利用可能となっています。また LDAP チャネルバインディングは [CVE-2017-8563](https://portal.msrc.microsoft.com/ja-jp/security-guidance/advisory/CVE-2017-8563) のセキュリティ更新プログラムのインストールが必要となります。

マイクロソフトセキュリティアドバイザリ ADV190023 (LDAP 署名とチャネル バインディングのセキュリティ強化) の適用による挙動の変更についてよく寄せられている質問をまとめて公開しました。

<https://support.microsoft.com/en-us/help/4563239/ldap-session-security-settings-and-requirements-after-adv190023>

セキュリティ強化に重要な機能なのでぜひ詳細をご確認いただき設定値の変更をご検討ください。

\---------------------------------------------------

##### **参考情報**

セキュリティ アドバイザリ ADV190023  
LDAP チャネル バインディングと LDAP 署名を有効にするためのマイクロソフト ガイダンス ​  
<https://portal.msrc.microsoft.com/ja-jp/security-guidance/advisory/ADV190023>

Windows の 2020 年 LDAP 署名と LDAP チャネル バインディングの要件  
<https://support.microsoft.com/ja-jp/help/4520412/2020-ldap-channel-binding-and-ldap-signing-requirement-for-windows>

Frequently asked questions about changes to Lightweight Directory Access Protocol  
<https://support.microsoft.com/ja-jp/help/4546509/frequently-asked-questions-about-changes-to-ldap>

Windows Server 2008 で LDAP 署名を有効にする方法  
<https://support.microsoft.com/ja-jp/help/935834/how-to-enable-ldap-signing-in-windows-server-2008>

LDAP Channel Binding and LDAP Signing Requirements - March 2020 update final release  
<https://techcommunity.microsoft.com/t5/core-infrastructure-and-security/ldap-channel-binding-and-ldap-signing-requirements-march-2020/ba-p/921536>

\---------------------------------  
\* 2019 年 12 月 11 日: 対象製品に Windows Server 2012 ならびに Windows 10 1909 を追加しました。  
\* 2019 年 12 月 18 日: セキュリティ アドバイザリ ADV190023 の更新に伴い、有効化措置の予定を 2020 年 3 月に変更しました。  
\* 2019 年 12 月 18 日: セキュリティ アドバイザリ ADV190023 の更新に伴い、有効化措置の予定を 2020 年 3 月に変更しました。  
\* 2020 年 2 月 5 日: セキュリティ アドバイザリ ADV190023 の更新に伴い、2020 年 3 月での更新予定内容を追加し、有効化措置の予定を 2020 年後半に変更しました。  
\* 2020 年 3 月 3 日: セキュリティアドバイザリ ADV190023 ならびにサポート技術情報 4520412 の更新に伴い、次の点を更新しました。

\- 対象環境の更新

マイクロソフトにおける詳細な調査の結果、Active Directory Lightweight Directory Services (AD LDS) はセキュリティアドバイザリ ADV190023 で説明されている脆弱性の影響を受けないことが確認されました。このため、AD LDS 環境を、対象環境から除外しました。

\- 2020 年 3 月のセキュリティ更新プログラムで提供を予定している機能の変更

\- LDAP 署名及び LDAP チャネルバインディングの設定値の変更は含まれない予定となりました。LDAP 署名と LDAP チャネルバインディングの動作に変更はありません。

- LDAP チャネルバインディングに関するイベント ログおよびグループポリシーの機能が追加されます。

\* 2020 年 6 月 3 日: KB4563239 の情報を追加しました。

<!-- wp:paragraph -->

<!-- /wp:paragraph -->
