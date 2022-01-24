---
title: 'Exchange Server の脆弱性の緩和策'
description: ""
published: 2021-03-07
type: posts
redirect_from:
            - https://msrc-blog.microsoft.com/2021/03/07/20210306_exchangeoob_mitigations/
author: jsecteam
categories:
- Exchange
- Japan Security Team
- セキュリティ情報
- 脆弱性
hero: ../../../defaultHero.jpg
---
「[Microsoft Exchange Server Vulnerabilities Mitigations – March 2021](https://msrc-blog.microsoft.com/2021/03/05/microsoft-exchange-server-vulnerabilities-mitigations-march-2021/)」の日本語抄訳です。

マイクロソフトは先週公開した[ブログ](https://www.microsoft.com/security/blog/2021/03/02/hafnium-targeting-exchange-servers/)にて、**お客様がオンプレミス\*\*** Exchange 環境を最新のサポート提供内のバージョンにアップグレードすることを強く推奨\*\*しています。すぐにセキュリティ更新プログラムを適用できないお客様向けに、別の緩和策を本ブログ記事にて提供することで、セキュリティ更新プログラムの展開までに時間が必要なお客様や、サービス機能継続のために一定期間リスクを受容する必要のあるお客様を支援します。

**これらの緩和策は、もしお客様の Exchange Server が既に侵害されている場合の復旧策にはなりません。また攻撃に対しての完全な保護策でもありません。**お客様の Exchange 環境が侵害されていないことを確認するために、[このブログ記事](https://www.microsoft.com/security/blog/2021/03/02/hafnium-targeting-exchange-servers/#scan-log)に記載されている侵害を調査するための方法を使って調査することを強く推奨します。このブログの下記に掲載している緩和策手順のうちのひとつを適用した後、もしくは適用と並行して調査を進めることをお勧めします。このブログ記事で案内しているすべてのスクリプトやツールは、[GitHub](https://github.com/microsoft/CSS-Exchange/blob/main/Security/) で公開しています。

お客様環境の優先順位に従い、下記の緩和策手順のうちの一つを選択してください。

### **推奨する回避策:**

セキュリティ更新プログラムを適用する。

・この手段は、**唯一の\*\***完全な回避策\*\*で、機能性にも影響を与えません。

・下記の公開記事 (英語情報) にてセキュリティ更新プログラムを適用する方法の詳細を確認できます。

<https://techcommunity.microsoft.com/t5/exchange-team-blog/released-march-2021-exchange-server-security-updates/ba-p/2175901>

・セキュリティ更新プログラムの適用では、既にサーバーを侵害した攻撃者を取り除くことはできません。

#### **Exchange Server 2013/2016/2019 にセキュリティ更新プログラムを適用できない場合の暫定的な緩和策**

・IIS Re-Write ルールを導入して、悪意のある https リクエストをフィルターする

・ユニファイド メッセージング (UM) を無効にする

・Exchange Control Panel (ECP) VDir を無効にする

・オフラインアドレス帳 (OAB) VDir サービスを無効にする

これらの緩和策は、下記にご案内する ExchangeMitigations.ps1 のスクリプトで適用したりロールバックしたりすることができます。ただし、Exchange Server の機能性に影響を与えることが確認されています。緩和策は、現在一般に確認されている攻撃に限り有効ではありますが、脆弱性に対しての完全な緩和策となる保証はありません。また既にサーバーを侵害した攻撃者を取り除くことにはなりません。**Exchange Server にセキュリティ更新プログラムが完全に展開されるまでの暫定的な緩和策としてのみ利用できます。**

## ExchangeMitigations.ps1

**詳細**

このスクリプトは下記の脆弱性に対応するための緩和策が含まれています。

・[CVE-2021-26855](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-26855)

・[CVE-2021-26857](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-26857)

・[CVE-2021-27065](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-27065)

・[CVE-2021-26858](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-26858)

このスクリプトは、権限昇格された Exchange PowerShell セッション、もしくは権限昇格された Exchange Management Shell にて実行されます。詳細情報は [GitHub](https://github.com/microsoft/CSS-Exchange/blob/main/Security/) をご参照ください。

#### **バックエンド クッキーの緩和策**

**対象**: [CVE-2021-26855](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-26855)

**詳細**: この緩和策は、一般に知られている SSRF 攻撃に使われた際に発見された 悪意のある X-AnonResource-Backend や異常な X-BEResource クッキーを含んだ https リクエストをフィルターします。これは、SSRF すべてではなく既知のパターンに対してのみ保護します。

**注意事項**: IIS Rewrite ルールは Exchange をアップグレード後には削除され、その状況でセキュリティ更新プログラムを適用していない場合は、この緩和策を再度適用する必要があります。

**前提条件**: URL Rewrite Module

・IIS 10 以上は URL Rewrite Module 2.1 をお使いください。x86/x64 ともに下記のページからダウンロードできます:

<https://www.iis.net/downloads/microsoft/url-rewrite>

・IIS 8.5 以下は URL Rewrite Module 2.0 をお使いください。x86/x64 ともに下記のページからダウンロードできます:

x86 – <https://www.microsoft.com/en-us/download/details.aspx?id=5747>

x64 – <https://www.microsoft.com/en-us/download/details.aspx?id=7435>

**Exchange への影響**: **既知**の Exchange 機能への影響は確認されていませんが、限定的にしかテストは実施されていません。

URL Rewrite version 2.1 を IIS 8.5 以下にインストールすると、IIS や Exchange が不安定になります。URL Rewrite Module と IIS のバージョン間でミスマッチが発生すると、ExchangeMitigations.ps1 は CVE-2021-26855 への緩和策を適用することができない可能性があります。URL Rewrite Module をアンインストールして、正しいバージョンを再インストールしてください。

#### **ユニファイド メッセージング\*\*** (UM) の緩和策\*\*

**対象**: [CVE-2021-26857](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-26857)

**詳細**: この緩和策は、Exchange のユニファイド メッセージ サービスを無効にします。適用した緩和策が元に戻ってしまうことを避けるために、Exchange の可用性管理サービスも無効にします。

**Exchange への影響**: ユニファイド メッセージングやボイスメールが利用できません。Exchange の可用性管理サービスを無効にすることで、高度な監視機能も無効になります。

#### **ECP アプリケーション プールの緩和策**

**対象**: [CVE-2021-27065](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-27065)、[CVE-2021-26858](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-26858)

**詳細**: この緩和策は、ECP の仮想ディレクトリを無効化します。適用した緩和策が元に戻ってしまうことを避けるために、Exchange の可用性管理サービスも無効にします。

**Exchange への影響**: Exchange Control Panel がオフラインとなり、503 が返ります。すべての Exchange 管理者はリモート PowerShell を使って操作する必要があります。Exchange の可用性管理サービスを無効にすることで、高度な監視機能も無効になります。

#### **OAB アプリケーション プールの緩和策**

**対象**: [CVE-2021-27065](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-27065)、[CVE-2021-26858](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-26858)

**詳細**: この緩和策は、OAB アプリケーション プールを無効化します。適用した緩和策が元に戻ってしまうことを避けるために、Exchange の可用性管理サービスも無効にします。

**Exchange への影響**: Outlook でのオフラインアドレス帳のダウンロードを含み、OAB が利用できなくなります。それによりいくつかのシナリオや構成が最新ではない状態となります。Exchange の可用性管理サービスを無効にすることで、高度な監視機能も無効になります。

## 追加の侵害を調査するための方法

#### **CVE-2021-26855 をスキャンするための Nmap Script**

**詳細**: 特定の URL が Exchange Server の SSRF の脆弱性 (CVE-2021-26855) に対して脆弱であるかを検出します。これはセキュリティ更新の状況や、外部に晒されたサーバーの緩和策の状態を評価することに利用できます。

#### **Test-ProxyLogon.ps1**

**詳細**: このスクリプトは対象の Exchange Server に Proxy logon の侵害の兆候があるかを検査します。Proxy logon の脆弱性に関しては CVE-2021-26855/CVE-2021-26858/CVE-2021-26857/CVE-2021-27065 に記載されています。このスクリプトは権限昇格された Exchange Management Shell で実行されるようになっています。

## Exchange Server をスキャンするための Microsoft Support Emergency Tool (MSERT)

Microsoft Defender は、2021 年 3 月 2 日 (米国時間) に公開された [Exchange Server の脆弱性](https://msrc-blog.microsoft.com/2021/03/05/microsoft-exchange-server-vulnerabilities-mitigations-march-2021/)を悪用する最新の既知の脅威を検出し修復することができるよう、[Microsoft Safety Scanner](https://docs.microsoft.com/en-us/windows/security/threat-protection/intelligence/safety-scanner-download) (MSERT.EXE) を最新バージョンに更新するセキュリティ インテリジェンスを含んでいます。

管理者は、Microsoft Defender for Endpoint や後述の推奨するフォルダーへの除外の構成によって守ることができないサーバーに対して利用することができます。

攻撃者の既知の侵入形跡を確認するために Exchange Server をスキャンするために Microsoft Support Emergency Tool (MSERT) を使用する方法は下記の通りです。

1. [Microsoft Safety Scanner Download – Windows security](https://docs.microsoft.com/en-us/windows/security/threat-protection/intelligence/safety-scanner-download) から MSERT をダウンロードします。

注意: トラブルシューティングが必要な場合は、[こちらの記事](Microsoft%20セーフティスキャナーの実行時に発生するエラーのトラブルシューティングを行う方法)をご参考ください。

2. **使用許諾契約** (End User License Agreement) の読んで承諾し、「**Next**」をクリックします。
3. **Microsoft Safety Scanner のプライバシー ポリシー**を読み、「**Next**」をクリックします。
4. フルスキャンを実行するか、カスタム スキャンを実行するかを選択します。

・フルスキャン - デバイス上のすべてのファイルを徹底的にスキャンする最も効果的なの良い方法です。サーバーのディレクトリサイズによっては完了するまでに時間がかかりますが、最も効率の良いオプションです。

・カスタム スキャン - 攻撃者からの悪意あるファイルが確認されている下記のパスをスキャンするように構成することができます。

_・%IIS installation path%\\aspnet_client\\\*_

_・%IIS installation path%\\aspnet_client\\system_web\\\*_

_・%Exchange Server installation path%\\FrontEnd\\HttpProxy\\owa\\auth\\\*_

_・一時的な ASP.NET ファイルに構成されたパス_

_・%Exchange Server Installation%\\FrontEnd\\HttpProxy\\ecp\\auth\\\*_

これらの復旧策は既知の攻撃パターンには効果的ですが、**今回の Exchange の脆弱性に関するすべての攻撃を完全に緩和することを保証するわけではありません。**Microsoft Defender が監視を続けるとともに最新のセキュリティ更新プログラムを提供していきます。

———————————

\* 2021 年 3 月 12 日: 英語版のブログ記事の更新に伴い、内容を更新しました。

<!-- wp:paragraph -->

<!-- /wp:paragraph -->
