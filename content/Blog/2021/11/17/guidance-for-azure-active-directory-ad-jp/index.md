---
title: 'アプリケーションおよびサービス プリンシパル API での Azure Active Directory (AD) keyCredential プロパティの情報漏えいに関するガイダンス'
description: ""
published: 2021-11-17
type: posts
redirect_from:
            - https://msrc-blog.microsoft.com/2021/11/17/guidance-for-azure-active-directory-ad-jp/
author: jsecteam
categories:
- Japan Security Team
- セキュリティ更新
- 脆弱性
hero: ../../../defaultHero.jpg
---
<!-- wp:paragraph -->

本ブログは、[“Guidance for Azure Active Directory (AD) keyCredential property Information Disclosure in Application and Service Principal APIs”](https://aka.ms/CVE-2021-42306-AAD) の抄訳版です。最新の情報は、原本を参照してください。

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

マイクロソフトは Azure Active Directory (AD) の情報漏えいを引き起こす脆弱性[ CVE-2021-42306](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-42306) に対処するために、一部の Azure サービスによって、プライベート キーのデータが、Azure Active Directory (Azure AD) [アプリケーション](https://docs.microsoft.com/en-us/graph/api/resources/keycredential?view=graph-rest-1.0)および/または[サービス プリンシパル](https://docs.microsoft.com/en-us/graph/api/resources/serviceprincipal?view=graph-rest-1.0)の [KeyCredentials](https://docs.microsoft.com/en-us/graph/api/resources/keycredential?view=graph-rest-1.0) プロパティに格納されないようにし、またすでに保存されていた KeyCredentials プロパティのプライベート キー のデータへの読み取りを制限するよう、修正を実施しました。  
[KeyCredentials](https://docs.microsoft.com/en-us/graph/api/resources/keycredential?view=graph-rest-1.0)プロパティは、アプリケーションの認証資格情報を構成するために使用されます。これは、アプリケーション メタデータへの読み取りアクセス権を持つ、組織の Azure AD テナント内のすべてのユーザーまたはサービスがアクセスできます。  
このプロパティは、認証で使用するために公開キー データを持つ証明書を受け入れするように設計されていますが、プライベートキー データを持つ証明書がプロパティに正しく保存されていない可能性もあります。プライベートキー データにアクセスすると、ユーザーが影響を受けるアプリケーションまたはサービス プリンシパルを偽装できるようにすることで、特権の昇格攻撃を引き起こします。  
一部の Microsoft のサービスでは、アプリケーションを作成している際、keyCredentials プロパティにプライベートキー データを正しく格納していないことが判明しました。なお、マイクロソフトの調査の結果、このプライベートキーデータに対して悪意のあるアクセスが行われた痕跡はありませんでした。  
この脆弱性の影響を受ける Microsoft Azure サービスでは、keyCredentials プロパティに平文のプライベートキー情報を保存できないようにすることで、問題の対処が行われました。また、Azure AD では、UI または API に、ユーザーまたはサービスによって以前に追加された平文のプライベートキー データの読み取りを防止することで、問題の対処が行われました。  
この結果、keyCredentials プロパティの平文のプライベートキーデータへのアクセスは不可能となり、リスクが軽減されました。  
予防措置として、マイクロソフトは、以下の「影響を受ける製品/サービス」で説明されているように、これらのサービスを使用しているお客様に措置を講じすることをお勧めします。また、プライベート キー データが、環境内の追加の Azure AD アプリケーションまたはサービス プリンシパルの資格情報に追加された可能性があると考えられるお客様は、このガイダンスに従うことをお勧めします。

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

<!-- /wp:paragraph -->

<!-- wp:paragraph {"fontSize":"medium"} -->

**影響を受ける製品/サービス**

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

マイクロソフトは、次のプラットフォーム・サービスが、プライベートキーをパブリックなプロパティに保存していることを確認しました。また、影響を受けるお客様を特定し、Azure サービス ヘルスを通じて通知し、問題に対処するためのガイダンスを提供しました。

<!-- /wp:paragraph -->

<!-- wp:table {"className":"is-style-regular"} -->

| **製品\*\***/サービス\*\*                                                                                                                                                                                                                   | **マイクロソフトが実施した修正\*\*\*\***                                                                                                                                                                                                                                                                                                                                                                                                               | **お客様にて実施する影響の確認と緩和策\*\*\*\***                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Azure Automation は Automation Run-As Accounts が作成された際に [Application and Service Principal keyCredential](https://docs.microsoft.com/en-us/azure/active-directory/develop/app-objects-and-service-principals) APIs を利用しています | Azure Automation は、平文のプライベートキー データが Azure AD アプリケーションにアップロードされないように、このサービスに更新プログラムを展開しました。10/15/2021 よりも前に作成または更新された Run-As アカウント は影響を受けず対処は必要ありません。                                                                                                                                                                                               | [Azure Automation self-signed certificate](https://docs.microsoft.com/en-us/azure/automation/manage-runas-account#cert-renewal) を利用して作成された Automation Run As アカウント [Azure Automation self-signed certificate](https://docs.microsoft.com/en-us/azure/automation/manage-runas-account#cert-renewal) のうち、10/15/2020 から 10/15/2021 の間に更新が発生していないアカウントは影響を受けます。 その他にも、[独自の証明書を用いている場合](https://docs.microsoft.com/en-us/azure/automation/manage-runas-account?WT.mc_id=Portal-Microsoft_Azure_Automation#renew-an-enterprise-or-third-party-certificate)は影響を受ける可能性があります。この場合はアカウントの更新日には関係なく影響を受ける可能性があります。 影響を受ける Automation Run-As アカウントと関連づけられている Azure AD アプリケーションを特定し対象を行うためには、 [Github Repo](https://aka.ms/azure-automation-runas-cred-roll)を参照してください。また、Azure Automation は Managed Identities (2021 年 10 月に一般提供開始) もサポートしています。Run-as から Managed Identities に移行することで、本脆弱性の問題も解決します。移行方法の詳細は[こちらのガイダンス](https://docs.microsoft.com/en-us/azure/automation/enable-managed-identity-for-automation#migrate-from-existing-run-as-accounts-to-managed-identity)を参照してください。 |
| Azure Migrate サービスは[Azure Migrate appliances](https://docs.microsoft.com/en-us/azure/migrate/migrate-appliance-architecture)がサービスのエンドポイントと通信するために Azure AD アプリケーションを 作成します。                        | Azure Automation は、平文のプライベートキー データが Azure AD アプリケーションにアップロードされないように、このサービスに更新プログラムを展開しました。 11/02/2021 より後にデプロイされた Azure Migrate アプリケーションで、 [Appliance configuration manager version 6.1.220.1 以上のバージョン ](https://docs.microsoft.com/en-us/azure/migrate/migrate-appliance#check-the-appliance-services-version)の場合は影響を受けず、対処は必要ありません。 | Azure Migrate appliances registered prior to 11/02/2021 よりも前に登録された Azure Migrate アプリケーション または・もしくは、11/02/2021 よりも後に登録され [auto-update が無効にされている](https://docs.microsoft.com/en-us/azure/migrate/migrate-appliance#appliance-upgrades) アプリケーションは影響を受けます。 影響を確認し対象を行うためには、[こちら](https://go.microsoft.com/fwlink/?linkid=2180156)を参照してください。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Azure Site Recovery (ASR) は、ASR [service endpoints](https://docs.microsoft.com/en-us/azure/site-recovery/vmware-azure-architecture-preview#outbound-connectivity-for-urls) と通信するために Azure AD アプリケーションを作成します。       | Azure Site Recovery は、平文のプライベートキー データが Azure AD アプリケーションにアップロードされないように、このサービスに更新プログラムを展開しました。 11/01/2021 よりも後に Azure Site Recovery のプレビュー “[VMware to Azure Disaster Recovery](https://docs.microsoft.com/en-us/azure/site-recovery/vmware-azure-set-up-replication-tutorial-preview)” を利用しているお客様は影響を受けず対処は必要ありません。                               | 11/01/2021 よりも前に Azure Site Recovery のプレビュー “[VMware to Azure Disaster Recovery](https://docs.microsoft.com/en-us/azure/site-recovery/vmware-azure-set-up-replication-tutorial-preview) を利用しているお客様は影響を受けます。影響を確認し対象を行うためには、[こちら](https://aka.ms/ASR_AADApp_CertRotation)を参照してください。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Azure AD アプリケーションおよびサービスプリンシパル\[1]                                                                                                                                                                                     | 10/30/2021 にプライベートキーへのアクセスを制限しました。                                                                                                                                                                                                                                                                                                                                                                                              | [https://aad-app-credential-remediation-guide](https://aka.ms/aad-app-credential-remediation-guide/) で公開しているガイダンスを参照し、アプリケーションで利用しているクレデンシャルを変更する必要があるか確認してください。このガイダンスは、プライベート キーの情報が KeyCredentials に保存されているかを特定し、対処を行うための方法が紹介されています。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

<!-- /wp:table -->

<!-- wp:paragraph -->

\[1] この脆弱性問題は、平文のプライベートキー情報が keyCredential に追加されている Azure AD アプリケーションとサービス プリンシパルにのみ影響します。マイクロソフトは、資格情報を管理するアプリケーションでこの問題のその他のインスタンスを特定し、影響が見つかった場合は改善策の手順を実行するために予防措置を講じることをお勧めします。

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

<!-- /wp:paragraph -->

<!-- wp:paragraph {"fontSize":"medium"} -->

**予期しない利用を監査し調査するために、どのような策を実施すればよいですか？**

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

追加の対策、ベストプラクティス、として次の監査や調査をすることを推奨しています：

<!-- /wp:paragraph -->

<!-- wp:list -->

- 影響を受けるエンティティに付与されたアクセス許可 (サブスクリプション アクセス、ロール、OAuth アクセス許可など) を監査し、資格情報が公開された場合の影響を評価します。セキュリティ オペレーションガイド[Application permission セクション](https://docs.microsoft.com/en-us/azure/active-directory/fundamentals/security-operations-applications#application-permissions) を参照してください.
- アプリケーション/サービス プリンシパルの資格情報をローテーションした場合、特に影響を受けるエンティティが機密性の高いリソースに対する高い特権のアクセス許可を持っている場合は、予期しない使用がないかを調査することをお勧めします。アプリケーションに対する[最小特権アクセス](https://docs.microsoft.com/en-us/azure/active-directory/develop/secure-least-privileged-access) を参照し、必要最低限の特権を与えていることを確認してください。
- [sign-in](https://docs.microsoft.com/en-us/azure/active-directory/reports-monitoring/concept-all-sign-ins) ログ, [AAD 監査ログ](https://docs.microsoft.com/en-us/azure/active-directory/reports-monitoring/concept-audit-logs) そして[M365 監査ログ](https://docs.microsoft.com/en-us/microsoft-365/compliance/auditing-solutions-overview?view=o365-worldwide) を確認し、例えば予期しない IP アドレスからのサインインなど不審なアクティビティがないか確認してください。
- Microsoft Sentinel を展開しているお客様は、ノートブック/プレイブック/ハンティングクエリを利用して悪意のある可能性のあるアクティビティを探すことができます。[ガイダンス](https://aka.ms/aad-app-credential-remediation-sentinel-guide/)を参考にしてください。
- さらなる詳細は、[security operations guidance ](https://aka.ms/app-security-operations-guide)を参照してください。

<!-- /wp:list -->

<!-- wp:paragraph -->

<!-- /wp:paragraph -->

<!-- wp:paragraph -->

堅牢なセキュリティ能勢 (セキュリティ ポスチャー) の一環として、研究者と協力して脆弱性の発見があり、これにより悪用される前に修正を行うことができます。[この脆弱性を報告](https://www.netspi.com/blog/technical/cloud-penetration-testing/credmanifest/)し、「[協調的な脆弱性の公開 (CVD)](https://www.microsoft.com/en-us/msrc/cvd)」の下でマイクロソフト セキュリティ レスポンス センター (MSRC) と協業し、マイクロソフトのお客様の保護に協力してくださった NetSPI の Consumer Fosaaen 氏に感謝します。

<!-- /wp:paragraph -->
