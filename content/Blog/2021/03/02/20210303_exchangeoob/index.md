---
title: 'Exchange Server のセキュリティ更新プログラムの公開 (定例外)'
description: ""
published: 2021-03-02
type: posts
redirect_from:
            - https://msrc-blog.microsoft.com/2021/03/02/20210303_exchangeoob/
authors:
- jsecteam
categories:
- Japan Security Team
tags:
- Exchange
- セキュリティ更新プログラム
- 定例外
hero: ../../../defaultHero.jpg
---
2021 年 3 月 3 日 (日本時間)、マイクロソフトは限定的な標的型攻撃に使われた Exchange の脆弱性に対するセキュリティ更新プログラムを定例外にて公開しました。

- Microsoft Exchange Server 2019
- Microsoft Exchange Server 2016
- Microsoft Exchange Server 2013
- Microsoft Exchange Server 2010 (多層防御の観点での修正)

※ Exchange Online は影響を受けません。

脆弱性を利用した攻撃から守るため、またエコシステム全体に渡る悪用を防ぐために、お客様には早急に上記製品のセキュリティ更新プログラムを適用することをお勧めします。

これらの脆弱性は、攻撃チェーンの一部に利用されています。攻撃の初期段階では、Exchange Server の 443 ポートへ信頼されていない接続を確立することが必要となります。信頼されていない接続を制限することや、VPN を使って Exchange Server を外部アクセスから切り離すことで、この攻撃の初期段階からシステムを保護することができます。ただし、これらの緩和策は、攻撃の初期段階の攻撃面を変える、または限定的な回避策にしかなりません。セキュリティ更新プログラムを適用することが、完全に脆弱性の影響を回避するための唯一の方法になります。

セキュリティ更新プログラムを公開して以降、お客様が今回の脆弱性や攻撃パターンを理解することができるようにするための様々な情報を公開しています。また攻撃者がこれらの脆弱性を攻撃する方法やお客様を攻撃対象にする方法に関する詳細なガイダンスを共有しています。マイクロソフトは、お客様の理解を深めるための多くの詳細な情報が存在することを把握していて、セキュリティ インシデント対応者や Exchange 管理者が Exchange 環境を安全に保つために必要なステップを実行するための、マイクロソフトのガイダンスをこちらにまとめてご案内します。

対応を完了するための手順の実施順序は状況によって異なり、各環境における侵害状況の調査結果に依存するため、各手順を実施する前に、お客様組織にてこのガイダンスの全体を把握し、対策の順序について評価してください。

## 概要と背景にある情報

マイクロソフトは、今日のオンプレミスの Exchange Server への攻撃の拡がりを継続して調査しています。私たちの目的は、最新の脅威インテリジェンスや侵害の兆候 (IOC)、私たちの製品やソリューションに渡るガイダンスを提供することです。これにより、コミュニティが対応してインフラストラクチャーの強化ができるよう、またこの前代未聞の攻撃から復旧できるようにします。新しい情報が確認できたら、このブログ記事を更新します。最新の英語情報は <https://aka.ms/ExchangeVulns> にてご確認いただけます。

- [Automatic on-premises Exchange Server mitigation now in Microsoft Defender Antivirus](https://www.microsoft.com/security/blog/2021/03/18/automatic-on-premises-exchange-server-mitigation-now-in-microsoft-defender-antivirus/) (March 18, 2021)
- [Guidance for responders: Investigating and remediating on-premises Exchange Server vulnerabilities](https://msrc-blog.microsoft.com/2021/03/16/guidance-for-responders-investigating-and-remediating-on-premises-exchange-server-vulnerabilities/) (March 16, 2021)
- [オンプレミス Exchange Server の脆弱性の調査や修復に対応する方向けのガイダンス](https://msrc-blog.microsoft.com/2021/03/18/20210319_exchangeoob_guidance/) (2021 年 3 月 19 日)
- [One-Click Microsoft Exchange On-premises Mitigation Tool](http://exchange%20on-premises%20mitigation%20tool%20%28march%2015%2C%202021%29/) (March 15, 2021)
- [オンプレミス Exchange 緩和ツール (ワンクリックの緩和ツール)](https://msrc-blog.microsoft.com/2021/03/16/20210316_exchangeoob_mitigationtool/) (2021 年 3 月 16 日)
- [March 8 Exchange Team Blog](https://techcommunity.microsoft.com/t5/exchange-team-blog/march-2021-exchange-server-security-updates-for-older-cumulative/ba-p/2192020) (March 8, 2021)
- [Microsoft Exchange Server Vulnerabilities Mitigations](https://msrc-blog.microsoft.com/2021/03/05/microsoft-exchange-server-vulnerabilities-mitigations-march-2021/) (March 5, 2021)
- [Exchange Server の脆弱性の緩和策](https://msrc-blog.microsoft.com/2021/03/07/20210306_exchangeoob_mitigations/) (2021 年 3 月 8 日)
- [Microsoft Security Blog: Hafnium Targeting Exchange](https://www.microsoft.com/security/blog/2021/03/02/hafnium-targeting-exchange-servers/) (March 2, 2021)
- [Microsoft on the Issues](https://blogs.microsoft.com/on-the-issues/2021/03/02/new-nation-state-cyberattacks/) (March 2, 2021)
- [Exchange Team Blog ](https://techcommunity.microsoft.com/t5/exchange-team-blog/released-march-2021-exchange-server-security-updates/ba-p/2175901)(March 2, 2021)

* [CVE-2021-26855](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-26855)
* [CVE-2021-26857](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-26857)
* [CVE-2021-26858](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-26858)
* [CVE-2021-27065](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-27065)

今回の攻撃には関連がありませんが、下記の Exchange Server の脆弱性への対応も、今回のセキュリティ更新プログラムに含まれています。

- [CVE-2021-26412](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-26412)
- [CVE-2021-26854](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-26854)
- [CVE-2021-27078](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-27078)

**攻撃手法の概要**

マイクロソフトは当初、特定の組織を狙った標的型攻撃を仕掛けている HAFNIUM の攻撃者グループを追跡していました。最近、他の攻撃者グループもこれらの脆弱性に目をつけており、攻撃者が本脆弱性への攻撃を研究したり攻撃を自動化したりすることで、このような攻撃が増加し続けることを予測しています。これらの足掛かりのすべてがすぐに活用されるわけではなく、いくつかは将来的な攻撃のために設置されているものと考えれます。詳しくは [MSTIC ブログ](https://www.microsoft.com/security/blog/2021/03/02/hafnium-targeting-exchange-servers/)をご参照ください。

いくつかの攻撃者グループは、将来的に利用するために可能な限り広く Web シェルをインストールすることもあれば、いくつかのグループは侵害されたサーバー上でさらなる操作を実施し、より深く永続性を確立するために組織の中を横断的に移動しようとしています。このブログでは、Web シェルを修復し、敵の最初の侵入を見極めるための手順をご案内します。

認証情報の抽出やラテラルムーブメント、さらなるマルウェアやランサムウェアのインストールなど、より侵害が進んだ行動が確認された、もしくはその疑いがある組織は、サイバーセキュリティの専門家のサービスを積極的に利用することを考慮してください。IT 環境全体にわたる攻撃が成功した後の行動を調査することや復旧することは、このブログの範囲を超えたものになります。しかしながら、今回の Exchange の脆弱性への攻撃に関連して確認されている行動パターンをもとに、どこから調査を始めるかを理解していただければと思います。

**推奨する対応手順**

インシデントレスポンスを成功させるためには、攻撃者に盗聴されることなくコミュニケーションをすることが求められます。現在の環境においてコミュニケーションのプライバシーを保てる確信が持てるまでは、調査状況を攻撃者に漏らしてしまう可能性があるトピックについての話し合いや対応の調整は、侵害の可能性のある環境からは分離された ID やコミュニケーション リソースを使ってください。

インシデントレスポンスを成功させるため、以下の順序で対応を行ってください。

1. 脆弱性の影響を受ける Exchange Server にセキュリティ更新プログラムを適用する。
2. 脆弱性を悪用する攻撃や永続的な侵入の兆候を調査する。
3. 確認された攻撃や永続的な侵入を修復し、ラテラルムーブメントやさらなる侵害の兆候がないかを調査する。

マイクロソフトは、セキュリティ更新プログラムの適用と侵害の兆候の調査を並行して実施することをお勧めしますが、もしどちらかを優先する必要がある場合はセキュリティ更新プログラムの適用と脆弱性の緩和を優先してください。

**影響を受ける Exchange 環境をなるべく早く最新の状態にすることや、緩和策を実施することはいますぐに実施すべきで、必要不可欠なことです。**これらの脆弱性は複数の攻撃者グループによって、いまでもなお悪用されています。最も高い安全性の保証を得るために、Exchange Server にセキュリティ更新プログラムを適用するか緩和されるまでは、信頼できないネットワークから脆弱な Exchange Server へのアクセスをブロックすることです。

**Exchange Server にセキュリティ更新プログラムを適用**

お客様の環境にて Exchange を実行しているサーバーの資産管理リストが無い場合は、マイクロソフトが [GitHub](https://github.com/microsoft/CSS-Exchange/blob/main/Security/http-vuln-cve2021-26855.nse) で共有している nmap スクリプトを使って、ネットワーク上で脆弱な Exchange Server をスキャンすることができます。お客様環境の Exchange Server には、それぞれのバージョンに対応したセキュリティ更新プログラムをすぐに適用してください。ガイダンスの概要は以下の通りです。

・**Exchange Online は影響を受けません。**

・**Exchange 2003/2007** は既にサポートを終了していますが、今回の脆弱性の影響を受けないと考えられます。現在のバージョンでは修正されている脆弱性や将来的なセキュリティ問題に対応するために、サポート対象の Exchange バージョンにアップグレードしてください。

・**Exchange2010** は [CVE-2021-26857](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-26857) にのみ影響を受けます。この脆弱性は攻撃チェーンの最初のステップではありません。組織はセキュリティ更新プログラムを適用してから、下記のガイダンスに従い攻撃や永続的な侵入の可能性を調査してください。

・**Exchange 2013/2016/2019** は影響を受けます。すぐにセキュリティ更新プログラムを適用するか、下記に記載している緩和策を適用してください。現在利用している CU バージョンから、最新のセキュリティ更新プログラムのバージョンまでに必要な更新プログラムを特定するためには、[こちらのガイダンス](https://techcommunity.microsoft.com/t5/exchange-team-blog/released-march-2021-exchange-server-security-updates/ba-p/2175901)をご参照ください。お客様環境にどの CU が必要であるかを特定するには、GitHub 上の [Health Checker スクリプト](https://github.com/dpaulson45/HealthChecker#download)を利用することができます。また本脆弱性への対応を早めるために、いくつかの過去の CU に対しても[セキュリティ更新プログラム](https://techcommunity.microsoft.com/t5/exchange-team-blog/march-2021-exchange-server-security-updates-for-older-cumulative/ba-p/2192020)を公開しています。

**緩和策**: なにかしらの理由で、Exchange Server をすぐに更新することができないお客様向けに、構成の変更を伴う本脆弱性を回避する方法の手順を公開しています。特に、セキュリティ更新プログラムをすぐに適用することができるバージョンを利用していない場合、Exchange Server に最新のセキュリティ更新プログラムを適用までに時間を要すること、また適用計画を立てる必要性をマイクロソフトは認識しています。このような場合は、外部のネットワークに面している Exchange Server にセキュリティ更新プログラムを適用することを最優先とすることを推奨していますが、すべての影響を受ける Exchange Server を早急に更新してください。**緩和策はセキュリティ更新プログラムの代替案ではありませんし**、緩和策を適用している間は Exchange の機能性に影響を与えます。緩和策の詳細なガイダンスは、「[Exchange Server の脆弱性の緩和策](https://msrc-blog.microsoft.com/2021/03/07/20210306_exchangeoob_mitigations/)」をご参照ください。

また、セキュリティ更新プログラムの適用や緩和策は、既にサーバーを侵害した攻撃者を取り除くことはできません。このブログの後半では、今回の脆弱性への対策する前にお客様の Exchange Server が攻撃されていなかったかを確認する方法や、いくつかの攻撃から復旧する方法をご案内します。

**攻撃や永続的な侵入、ラテラルムーブメントの証拠を調査**

お客様の環境が保護された状態にあると判断する前に、脆弱性の悪用から Exchange Server を保護することに加えて、本脆弱性が悪用されていないかを評価する必要があります。

1. **悪用の痕跡を確認するために Exchange 製品のログを分析**。自動化されたスクリプトを含む分析するための手順を[ MSTIC ブログ](https://www.microsoft.com/security/blog/2021/03/02/hafnium-targeting-exchange-servers/#scan-log)にて公開しています。スクリプトを利用する際、同時に Exchange Server を、部分的にスキャンするか全体的にスキャンするかを選択することができます。
2. **既知の Web シェルをスキャン**。Microsoft Defender Team は、今回の脆弱性に関連した既知のマルウェアに対するセキュリティ インテリジェンスを、最新バージョンの [Microsoft Safety Scanner](https://docs.microsoft.com/en-us/windows/security/threat-protection/intelligence/safety-scanner-download) に取り込んでいます。この Safety Scanner をお客様環境のすべての Exchange Server にて実行してください。詳細なガイダンスは、こちらの [GitHub](https://github.com/microsoft/CSS-Exchange/blob/main/Security/Defender-MSERT-Guidance.md) をご参照ください。

※ Microsoft Defender や Microsoft Defender for Endpoint をお使いのお客様は、セキュリティインテリジェンスが最新になっているかをご確認ください。詳しくは、[こちらのサイト](https://www.microsoft.com/en-us/wdsi/defenderupdates)をご参照ください。

3. **新たに確認された兆候を確認するために、Microsoft IOC フィードを利用**。マイクロソフトのセキュリティ製品やツールを利用していないお客様向けに、確認された IoC (Indicators of compromise) のフィードを公開しています。攻撃に関連して確認されたマルウェアのハッシュ値や既知の悪意あるファイルパスのフィードは、以下の GitHub リンクにて JSON 形式と CSV 形式にて入手可能となっています。この情報は TLP:WHITE (自由に利用可能) として共有しています。

・[CSV format](https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Sample%20Data/Feeds/MSTICIoCs-ExchangeServerVulnerabilitiesDisclosedMarch2021.csv)

・[JSON format](https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Sample%20Data/Feeds/MSTICIoCs-ExchangeServerVulnerabilitiesDisclosedMarch2021.json)

4. これらのツールに加えて、**組織の他のセキュリティ機能を活用**。上述のツールは、今回の脆弱性の悪用に関してマイクロソフトが蓄積した脅威インテリジェンスを、すべての組織で利用可能にするためものです。またお客様組織が自身のセキュリティコントロールをお持ちであれば、そのセキュリティコントロールでも Exchange Server からのシグナルに対する警戒レベルを上げることを推奨します。

**特定された攻撃や長期潜伏を改善する**

Exchange のアプリケーションログなどから悪用の痕跡を見つけた場合には、ログを保全して、さらなる調査のために、タイムスタンプやソース IP などの詳細情報を活用してください。

もしエンドポイント セキュリティ製品やマイクロソフトが提供している IoC フィード、Microsoft Safety Scanner を利用して、既知の悪意あるファイルを発見した場合は、下記を実施してください。

1. そのファイルがお客様環境にカスタマイズされたものでない場合は、検疫し修復します。
2. IIS ログを検索し、攻撃者がアクセスしたファイルがないかを確認します。
3. 可能であれば、こちらの[ガイダンス](https://docs.microsoft.com/en-us/windows/security/threat-protection/intelligence/submission-guide)に従って、疑わしい悪意あるファイルをマイクロソフトでの分析のために共有してください。その際に、Additional Information のテキストボックスに “ExchangeMarchCVE” と入力してください。

ハンティングとスキャンの一部として、ユニファイド メッセージングの脆弱性 (CVE-2021-26857) の攻撃の証拠を発見した場合は、_%ExchangeInstallPath%\\UnifiedMessaging\\voicemail_ 配下の、クリーンではない疑わしき攻撃ファイルを削除してください。

上記で特定された外部からのファイルアクセスの証拠を発見した場合は、影響を受けたサーバーやお客様環境全体での調査を進めるために、[MSTIC ブログ](https://www.microsoft.com/security/blog/2021/03/02/hafnium-targeting-exchange-servers/)に記載の IOC やファイルハッシュなどの追加の情報をご活用ください。

ご利用のセキュリティ製品や調査ツールの結果にて、Exchange Server が侵害されたり、攻撃者が活発にお客様環境で活動している疑いがある場合には、お客様のセキュリティインシデント対応プランを実行し、熟練のインシデント対応者による支援を求めることを考慮してください。お客様の Exchange 環境が、潜伏している攻撃者によって侵害されている可能性がある場合には、このブログ記事の前半で説明したとおり、別のコミュニケーション手段を使って対応を調整することが特に重要となります。

———————————

\* 2021 年 3 月 11 日: 英語版のブログ記事の更新に伴い内容を更新しました。

\* 2021 年 3 月 17 日: 参考情報を更新しました。

\* 2021 年 3 月 19 日: 英語版のブログ記事の更新に伴い内容を更新しました。
