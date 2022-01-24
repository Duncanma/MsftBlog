---
title: '[IT 管理者むけ] Active Directoryのセキュリティ強化への対応をご確認ください'
description: ""
published: 2021-12-14
type: posts
redirect_from:
            - https://msrc-blog.microsoft.com/2021/12/14/ad-hardenings/
authors:
- jsecteam
categories:
- Japan Security Team
tags:
- IT管理者向け
- ガイダンス
- 脆弱性
hero: ../../../defaultHero.jpg
---
<!-- wp:paragraph -->

2021 年 11 月以降のセキュリティ更新プログラムには、脆弱性を解決するために、Active Directory における 4 件のセキュリティ強化が含まれています。これらのセキュリティ強化のうち、いくつかは、既存の環境への互換性による影響を鑑み、既定では有効にされていません。自環境への影響いただき、早めに設定を有効化し、脆弱性から自組織を保護していただくよう推奨しています。また、すべての Active Directory 環境が確実に保護されるように、マイクロソフトではこれらのセキュリティ強化の設定を、今後リリースする予定の更新プログラムで強制的に有効化する予定です。

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

セキュリティ強化によって修正される脆弱性は、いずれも、2021 年 11 月にセキュリティ更新プログラムが公開された時点では、脆弱性の詳細及び悪用コードの一般への公開はありませんでした。しかしながら、セキュリティ更新プログラムが公開されて以降、脆弱性に対する解析が進んでおり、悪用が広く行われる可能性もあります。

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

Active Directory 管理者の方は、ぜひ、いま一度、セキュリティ情報をご確認のうえ、セキュリティ強化が有効にされた場合の自環境への影響いただき、早めに設定を有効化し、脆弱性から自組織を保護してください。

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

なお、これらの脆弱性は、Active Directory に影響する脆弱性です。Azure Active Directory には影響しません。

<!-- /wp:paragraph -->

<!-- wp:heading -->

## 概要

<!-- /wp:heading -->

<!-- wp:paragraph -->

2021 年 11 月のセキュリティ更新プログラムには、脆弱性を解決するために、次の 4 件のセキュリティ強化が含まれています。このうち、CVE-2021-42297 から保護するためのセキュリティ強化 (KB008380) 、および CVE-2021-42291 から保護するためのセキュリティ強化 (KB5008383) は、既定ではセキュリティ強化が有効ではありません。自環境への影響いただき、早めに設定を有効化し、脆弱性から自組織を保護してください。マイクロソフトでは、今後リリースする予定の更新プログラムで、これらのセキュリティ強化を強制的に有効化する予定です。

<!-- /wp:paragraph -->

<!-- wp:table -->

|                                                                                                     |                                                                                                                                           |                                                                                       |                                                                                                                                                                                                                              |
| --------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| セキュリティ強化内容                                                                                | 修正した脆弱性の CVE                                                                                                                      | セキュリティ強化の詳細を説明しているサポート技術情報 (KB)                             | セキュリティ強化の有効化 スケジュール                                                                                                                                                                                        |
| Active Directory セキュリティ アカウント マネージャーの変更の強化                                   | [CVE-2021-42278](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-42278) Active Directory ドメインサービス 特権昇格の脆弱性 | [KB5008102](https://support.microsoft.com/topic/5975b463-4c95-45e1-831a-d120004e258e) | 2021 年 11 月以降のセキュリティ更新プログラムをインストールすることで、セキュリティ強化の機能が導入され、かつ、有効になる。                                                                                                  |
| ユーザー プリンシパル名、サービス プリンシパル名、サービス プリンシパル名のエイリアスの一意性の検証 | [CVE-2021-42282](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-42282) Active Directory ドメインサービス 特権昇格の脆弱性 | [KB5008382](https://support.microsoft.com/topic/4651b175-290c-4e59-8fcb-e4e5cd0cdb29) | 2021 年 11 月以降のセキュリティ更新プログラムをインストールすることで、セキュリティ強化の機能が導入され、かつ、有効になる。                                                                                                  |
| 認証の更新プログラム                                                                                | [CVE-2021-42287](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-42287) Active Directory ドメインサービス 特権昇格の脆弱性 | [KB5008380](https://support.microsoft.com/topic/9dafac11-e0d0-4cb8-959a-143bd0201041) | 2021 年 11 月以降のセキュリティ更新プログラムをインストールすることで、セキュリティ強化の機能が導入されるが、既定では機能は有効化されない。 2022 年 7 月 13 日に公開予定の更新プログラム以降、機能が有効になり、必須になる。 |
| Active Directory のアクセス許可の更新プログラム                                                     | [CVE-2021-42291](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-42291) Active Directory ドメインサービス 特権昇格の脆弱性 | [KB5008383](https://support.microsoft.com/topic/536d5555-ffba-4248-a60e-d6cbc849cde1) | 2021 年 11 月以降のセキュリティ更新プログラムをインストールすることで、セキュリティ強化の機能が導入されるが、既定では機能は有効化されない。 2022 年 4 月 12 日以降に公開を予定している更新プログラムで既定で有効になる。     |

<!-- /wp:table -->

<!-- wp:spacer -->

<!-- /wp:spacer -->

<!-- wp:heading -->

## Active Directory セキュリティ アカウント マネージャーの変更の強化 ([](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-42287)[CVE-2021-42278](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-42278) / [](https://support.microsoft.com/topic/5975b463-4c95-45e1-831a-d120004e258e)[KB5008102](https://support.microsoft.com/topic/5975b463-4c95-45e1-831a-d120004e258e))

<!-- /wp:heading -->

<!-- wp:heading {"level":3,"fontSize":"small"} -->

### 脆弱性の概要

<!-- /wp:heading -->

<!-- wp:list -->

- [](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-42287)[CVE-2021-42278](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-42278)は、セキュリティ機能のバイパスを可能とする Active Directory セキュリティ アカウント マネージャに関する脆弱性です。この脆弱性が悪用されると、攻撃者は、コンピューター アカウントの sAMAccountName になりすますことで、ドメインコントローラになりすますことが可能になります。
- 脆弱性を修正するために、Active Directory における セキュリティ アカウント マネージャー (SAM) に対しセキュリティの強化を実施しています。脆弱性の修正が適用されると、Active Directory は、コンピューター アカウントの AMAccountName 及び UserAccountControl に対して、当該アカウントの管理者権限を持たないユーザーが作成または変更をする際に、検証を実行し、特定の条件をみたさない場合は ACCESS_DENIED エラーコードを返し、操作を拒否するようになります。その際、システム イベントログに、Directory-Services-SAM イベント ID16990 が記録されます。詳細は [KB5008102](https://support.microsoft.com/topic/5975b463-4c95-45e1-831a-d120004e258e) を参照してください。

<!-- /wp:list -->

<!-- wp:heading {"level":3,"fontSize":"small"} -->

### 脆弱性の修正を適用する方法

<!-- /wp:heading -->

<!-- wp:list -->

- 2021 年 11 月 9 日（米国時間）以降に公開された Windows 向けの更新プログラムを、すべてのドメインコントローラに適用してください。これにより、脆弱性から Active Directory を保護することができます。

<!-- /wp:list -->

<!-- wp:heading {"level":3,"fontSize":"small"} -->

### 脆弱性の修正を適用することによる影響を確認する方法

<!-- /wp:heading -->

<!-- wp:list -->

- Object クラスおよび UserAccountControl の検証によって作成や変更がブロックされた場合、システム イベントログに、Directory-Services-SAM イベント ID16990 が記録されます。また、SAM Account Name の検証によってブロックされた場合は、Directory-Services-SAM イベント ID 16991 が記録されます。その他にも、作成や変更が成功した場合にもイベントを記録するようになります。 詳細は、[KB5008102](https://support.microsoft.com/topic/5975b463-4c95-45e1-831a-d120004e258e) を参照してください。

<!-- /wp:list -->

<!-- wp:spacer -->

<!-- /wp:spacer -->

<!-- wp:heading -->

## ユーザー プリンシパル名、サービス プリンシパル名、サービス プリンシパル名のエイリアスの一意性の検証 ([](https://msrc.microsoft.com/update-guide/ja-jp/vulnerability/CVE-2021-42287)[CVE-2021-42282](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-42282) / [](https://support.microsoft.com/en-us/topic/4651b175-290c-4e59-8fcb-e4e5cd0cdb29)[KB5008382](https://support.microsoft.com/topic/4651b175-290c-4e59-8fcb-e4e5cd0cdb29))

<!-- /wp:heading -->

<!-- wp:heading {"level":3,"fontSize":"small"} -->

### 脆弱性の概要

<!-- /wp:heading -->

<!-- wp:list -->

- [](https://msrc.microsoft.com/update-guide/ja-jp/vulnerability/CVE-2021-42287)[CVE-2021-42282](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-42282) は、特権昇格を可能とする Active Directory ドメインサービスに関する脆弱性です。

- この脆弱性を修正するために、Active Directory で利用される属性に対して次のふたつの検証を追加しています。

  - User Principal Name (UPN) および Service Principal Name (SPN) の一意性 ：脆弱性の修正が適用されると、SPN は、フォレスト内で一意であることが保証されるようになり、コンピュータおよびドメインコントローラ―で、重複した SPN を登録することができません。この要件は、 Windows 8.1 以降のバージョンで導入されています。詳細は [SPN and UPN uniqueness](https://docs.microsoft.com/windows-server/identity/ad-ds/manage/component-updates/spn-and-upn-uniqueness) を参照してください。

  - SPN アリアスの一意性：脆弱性の修正が適用されると管理者権限をもたないユーザーにより SPN アリアス が一意であることが保証されるようになります。すべてのバージョンの Windows でこれまでは一意性の必要はありませんでした。

<!-- /wp:list -->

<!-- wp:heading {"level":3,"fontSize":"small"} -->

### 脆弱性の修正を適用する方法

<!-- /wp:heading -->

<!-- wp:list -->

- 2021 年 11 月 9 日（米国時間）以降に公開された Windows 向けの更新プログラムを適用することで、Active Directory で利用される User Principal Name (UPN) および Service Principal Name (SPN) の一意性、そして SPN アリアスの一意性が検証されるようになります。
- なお互換性の問題を考慮し、これらのセキュリティ強化の動作を変更することを可能にする属性 dSHeuristics が追加されています。ただし、動作を変更することで脆弱性から保護されない状態となるため、変更は推奨していません。詳細は [KB5008382](https://support.microsoft.com/topic/4651b175-290c-4e59-8fcb-e4e5cd0cdb29) を参照してください。

<!-- /wp:list -->

<!-- wp:heading {"level":3,"fontSize":"small"} -->

### 脆弱性の修正を適用することによる影響を確認する方法

<!-- /wp:heading -->

<!-- wp:list -->

- [](https://support.microsoft.com/en-us/topic/4651b175-290c-4e59-8fcb-e4e5cd0cdb29)[KB5008382](https://support.microsoft.com/topic/4651b175-290c-4e59-8fcb-e4e5cd0cdb29) に、よく寄せられる質問が掲載されていますので確認してください。

<!-- /wp:list -->

<!-- wp:spacer -->

<!-- /wp:spacer -->

<!-- wp:heading -->

## 認証の更新プログラム ([](https://msrc.microsoft.com/update-guide/ja-jp/vulnerability/CVE-2021-42287)[CVE-2021-42287](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-42287) / [](https://support.microsoft.com/en-us/topic/9dafac11-e0d0-4cb8-959a-143bd0201041)[KB5008380](https://support.microsoft.com/topic/9dafac11-e0d0-4cb8-959a-143bd0201041) )

<!-- /wp:heading -->

<!-- wp:heading {"level":3,"fontSize":"small"} -->

### 脆弱性の概要

<!-- /wp:heading -->

<!-- wp:list -->

- [](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-42287)[CVE-2021-42287](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-42287) は、セキュリティ機能のバイパスを可能とする Kerberos 認証に関する脆弱性です。この脆弱性が悪用されると、攻撃者は、ターゲットのドメインコントローラになりすましをすることが可能になります。この脆弱性を悪用するために、攻撃者は、事前に侵害をおこなったドメインアカウントから、ドメインコントローラの機能の一部である Key Distribution Center (KDC) に対して、より高い権限をもつ Kerberos 認証のサービスチケットを作成させます。この際、KDC が発行を要求されたサービスチケットが、どのアカウントを対象としたものであるかを特定することを妨げることで、攻撃を成功させます。
- この脆弱性を修正するために、より強化された認証プロセスを導入しています。修正されたプロセスでは、Kerberos 認証で利用する Kerberos Ticket-Granting Tickets (TGT) の Kerberos Privilege Attribute Certificate (PAC) に、オリジナルの要求元を含めるように改善されました。修正されたプロセスでは、Kerberos 認証でサービスチケットが生成される際に、サービスチケットの要求元のアカウントが、 TGT を要求したアカウントと同じであることを確認します。

<!-- /wp:list -->

<!-- wp:heading {"level":3,"fontSize":"small"} -->

### 脆弱性の修正を適用する方法

<!-- /wp:heading -->

<!-- wp:list {"ordered":true,"type":"1"} -->

1. 2021 年 11 月 9 日（米国時間）以降に公開された Windows 向けの更新プログラムをすべてのドメインコントローラ― （RODC 含む）に適用してください。これにより、すべての Active Directory ドメインアカウントにおいて利用する TGT に PAC が含まれるようになります。

   1. 更新プログラムを適用するだけでは、PAC に要求元が含まれていない TGT であっても、ドメインコントローラは、これまでと変わらず PAC が含まれていない TGT であっても、認証します。

   1. 更新プログラムを適用することで、システムイベントログに、Microsoft-Windows-Kerberos-Key-Distribution-Center ID 35、36、37、38 が記録されるようになります。これは、PAC が含まれていないチケット検証を行った際など、今後ドメインコントローラが PAC に要求元が含まれていない場合は認証を拒否する動作に切り替わった際に、認証に問題があることを示しています。

2. 2021 年 11 月 9 日（米国時間）以降に公開された Windows 向けの更新プログラムをすべてのドメインコントローラ―に適用後、最低 ７日以上通常通り運用してください。これにより、既定の設定では TGT チケットが有効期限切れを迎え、PAC が含まれたチケットに切り替わります。

3. ドメインコントローラが PAC に要求元が含まれていない場合は認証を拒否する動作に切り替わっても問題ないことを確認したら、[](https://support.microsoft.com/en-us/topic/9dafac11-e0d0-4cb8-959a-143bd0201041)[KB5008380](https://support.microsoft.com/topic/9dafac11-e0d0-4cb8-959a-143bd0201041) に記載のあるレジストリ PacRequestorEnforcement の値を 2 に変更します。これにより、ドメインコントローラが PAC に要求元が含まれていない場合は認証を拒否する動作になり、脆弱性から保護されます。

<!-- /wp:list -->

<!-- wp:heading {"level":3,"fontSize":"small"} -->

### 脆弱性の修正を強制する更新の配信予定

<!-- /wp:heading -->

<!-- wp:paragraph -->

すべての Active Directory 環境が確実に保護されるように、マイクロソフトではこれらのセキュリティ強化の設定を、今後リリースする予定の更新プログラムで強制的に有効化する予定です。

<!-- /wp:paragraph -->

<!-- wp:list -->

- 2022 年 4 月 12 日 （米国時間）(予定) に公開される更新プログラムを適用することで、ドメインコントローラはかならず PAC に要求元を追加して TGT を発行するようになります。PacRequestorEnforcement の値を 0 (PAC を追加しない) に設定している場合は、値の効果が無視されるようになります。
- 2022 年 7 月 12 日 （米国時間）(予定) に公開される更新プログラムを適用することで、ドメインコントローラは PAC に要求元が含まれていない場合は認証を拒否する動作になり、脆弱性から保護されます。また、PacRequestorEnforcement のレジストリは削除され、どのような値が設定されていても効果はなくなります。

<!-- /wp:list -->

<!-- wp:heading {"level":3,"fontSize":"small"} -->

### 脆弱性の修正を適用することによる影響を確認する方法

<!-- /wp:heading -->

<!-- wp:list -->

- 2021 年 11 月 9 日（米国時間）以降に公開された Windows 向けの更新プログラムをすべてのドメインコントローラ― （RODC 含む）に適用し、最低 7 日以上経過後、PAC が含まれていないチケット検証を行った際など、今後ドメインコントローラが PAC に要求元が含まれていない場合は認証を拒否する動作に切り替わった際に、認証に問題があることを示すイベント Microsoft-Windows-Kerberos-Key-Distribution-Center ID 35、36、37、38 が記録されていないかを確認してください。
- 詳細は、[](https://support.microsoft.com/en-us/topic/9dafac11-e0d0-4cb8-959a-143bd0201041)[KB5008380](https://support.microsoft.com/topic/9dafac11-e0d0-4cb8-959a-143bd0201041) および サポート チーム ブログ [CVE-2021-42287 で追加されたイベント メッセージ ID 35 , 37 と脆弱性対応の流れについて | Microsoft Japan Windows Technology Support Blog (jpwinsup.github.io)](https://jpwinsup.github.io/blog/2021/11/30/ActiveDirectory/Authentication/audit-events-added-in-cve-2021-42287/) を確認してください。

<!-- /wp:list -->

<!-- wp:spacer -->

<!-- /wp:spacer -->

<!-- wp:heading -->

## Active Directory のアクセス許可の更新プログラム ([ ](https://msrc.microsoft.com/update-guide/ja-jp/vulnerability/CVE-2021-42291)[CVE-2021-42291](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-42291) / [](https://support.microsoft.com/en-us/topic/536d5555-ffba-4248-a60e-d6cbc849cde1)[KB5008383](https://support.microsoft.com/topic/536d5555-ffba-4248-a60e-d6cbc849cde1))

<!-- /wp:heading -->

<!-- wp:heading {"level":3,"fontSize":"small"} -->

### 脆弱性の概要

<!-- /wp:heading -->

<!-- wp:list -->

- [](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-42291)[CVE-2021-42291](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-42291) は、セキュリティ機能のバイパスを可能とする Active Directory の属性に関する脆弱性です。この脆弱性が悪用するためには、攻撃者はコンピューターアカウントを作成するために必要な権限を持っている必要があります。

- この脆弱性を修正するために、より強化されたオブジェクト作成時の権限の検証を導入しています。

  - 修正されたプロセスでは、ドメイン管理者権限を持たないユーザーが LDAP Add でコンピューター オブジェクトを作成しようとした場合、イベントを記録する課、または操作をブロックします。

  - ドメイン管理者権限を持たないユーザーが、securityDescriptor 属性に対し LDAP Modify 操作を試みる場合の暗黙的所有者特権の一時的に削除し、ユーザーが、暗黙的所有者特権なしでセキュリティ記述子の書き込みを許可されるかどうかを確認するために検証を行います。

<!-- /wp:list -->

<!-- wp:heading {"level":3,"fontSize":"small"} -->

### 脆弱性の修正を適用する方法

<!-- /wp:heading -->

<!-- wp:list {"ordered":true,"type":"1"} -->

1. 2021 年 11 月 9 日（米国時間）以降に公開された Windows 向けの更新プログラムをすべてのドメインコントローラ― （RODC 含む）に適用してください。これにより、より強化されたオブジェクト作成時の権限の検証を導入されます。ただし、この時点では、要件を満たさないオブジェクトの作成はブロックされることはありません。その代わり、イベントログにそのことを示すイベントが記録されます。
2. 要件を満たさないオブジェクトの作成をブロックしても問題ないことを確認したら、[KB5008383](https://support.microsoft.com/topic/536d5555-ffba-4248-a60e-d6cbc849cde1) に記載のある属性値 dSHeuristics を 強制モード に変更します。これにより、要件を満たさないオブジェクトの作成はブロックされ、脆弱性から保護されます。

<!-- /wp:list -->

<!-- wp:heading {"level":3,"fontSize":"small"} -->

### 脆弱性の修正を強制する更新の配信予定

<!-- /wp:heading -->

<!-- wp:paragraph -->

すべての Active Directory 環境が確実に保護されるように、マイクロソフトではこれらのセキュリティ強化の設定を、今後リリースする予定の更新プログラムで強制的に有効化する予定です。

<!-- /wp:paragraph -->

<!-- wp:list -->

- 2022 年 4 月 12 日 （米国時間）(予定) に公開される更新プログラムを適用することで、要件を満たさないオブジェクトの作成はブロックされるように、動作が強制されます。また、dSHeuristics は、強制モードに変更され、無効モードが削除されます。

<!-- /wp:list -->

<!-- wp:heading {"fontSize":"small"} -->

## 脆弱性の修正を適用することによる影響を確認する方法

<!-- /wp:heading -->

<!-- wp:list -->

- [](https://support.microsoft.com/en-us/topic/536d5555-ffba-4248-a60e-d6cbc849cde1)[KB5008383](https://support.microsoft.com/topic/536d5555-ffba-4248-a60e-d6cbc849cde1) に記載のあるイベントを確認することで、影響を確認することができます。詳細は、[](https://support.microsoft.com/en-us/topic/9dafac11-e0d0-4cb8-959a-143bd0201041)[KB5008383](https://support.microsoft.com/topic/536d5555-ffba-4248-a60e-d6cbc849cde1) を確認してください。

<!-- /wp:list -->

<!-- wp:paragraph -->

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

<!-- /wp:paragraph -->

<!-- wp:spacer -->

<!-- /wp:spacer -->

<!-- wp:paragraph -->

より安全、安心な環境を保つために、Active Directory 管理者の方は、ぜひ、いま一度、セキュリティ情報をご確認のうえ、セキュリティ強化が有効にされた場合の自環境への影響いただき、早めに設定を有効化し、脆弱性から自組織を保護してください。

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

垣内由梨香  
セキュリティ プログラム マネージャー  
セキュリティレスポンスチーム

<!-- /wp:paragraph -->
