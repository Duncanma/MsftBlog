---
title: '[あらためて確認を]　RDP の脆弱性に対するセキュリティ更新プログラムの適用を推奨'
description: ""
published: 2019-11-25
type: posts
redirect_from:
            - https://msrc-blog.microsoft.com/2019/11/25/rdpvulnerabilities/
author: jsecteam
categories:
- BlueKeep
- Japan Security Team
- RDP
- セキュリティ情報
- セキュリティ更新プログラム
- 脆弱性
hero: ../../../defaultHero.jpg
---
2019 年、マイクロソフトはリモートデスクトッププロトコル (Remote Desktop Protocol: RDP)、 Terminal Services における複数の脆弱性を修正しています。その中でも、数件の脆弱性については、特に脆弱性の悪用がしやすく、早急なセキュリティ更新プログラムの適用を呼び掛けています。

これらの脆弱性が特に深刻な理由として、脆弱性を悪用するために、事前に認証を行う必要やユーザー操作を行う必要が無いことです。このため、この脆弱性を悪用する悪意のあるソフトウェア (マルウェア) によって、複数のコンピュータに感染を広げやすい点が挙げられ、広く拡散する可能性があります。

セキュリティの研究者と調査を行った結果、RDP の脆弱性 (CVE-2019-0708) がすでに悪用され、悪用確認件数が上昇傾向にあることがわかっています。(詳細は、”[Microsoft works with researchers to detect and protect against new RDP exploits](https://www.microsoft.com/security/blog/2019/11/07/the-new-cve-2019-0708-rdp-exploit-attacks-explained/)” (英語情報) を参照してください。)

マイクロソフトでは、CVE-2019-0708 の脆弱性に対しては既にサポートが終了している製品に対するセキュリティ更新プログラムも提供しています。まだ、該当のセキュリティ更新プログラムを適用していない場合は、下記の表を参考にして早急に適用するようお願いいたします。

|                                                                     |                                                                                                                     |                                                                                                                                                                                                    |                                                                                                                                                     |
| ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| **影響を受ける製品**                                                | **セキュリティ更新情報の入手先**                                                                                    |                                                                                                                                                                                                    |                                                                                                                                                     |
| **CVE\*\***番号\***\*\***                                           | _[CVE-2019-0708](https://portal.msrc.microsoft.com/ja-JP/security-guidance/advisory/CVE-2019-0708)_ (通称:BlueKeep) | [CVE-2019-1181](https://portal.msrc.microsoft.com/ja-JP/security-guidance/advisory/CVE-2019-1181)[CVE-2019-1182](https://portal.msrc.microsoft.com/ja-JP/security-guidance/advisory/CVE-2019-1182) |                                                                                                                                                     |
| **公開日 (米国時間)**                                               | 2019 年 5 月 14 日                                                                                                  | 2019 年 8 月 13 日                                                                                                                                                                                 |                                                                                                                                                     |
| **Windows XP\*\***Windows Server 2003\*\*                           |                                                                                                                     | _[KB4500705](https://support.microsoft.com/help/4500705)_                                                                                                                                          | 影響なし                                                                                                                                            |
| **Windows Server 2008**                                             |                                                                                                                     | _[KB4499149](https://support.microsoft.com/help/4499149)_ (Monthly Rollup)_[KB4499180](https://support.microsoft.com/help/4499180)_ (Security Only)                                                | 影響なし                                                                                                                                            |
| **Windows** **7\*\***Windows\*\* **Server** **2008** **R2**         |                                                                                                                     | _[KB4499164](https://support.microsoft.com/help/4499164)_ (Monthly Rollup)_[KB4499175](https://support.microsoft.com/help/4499175)_ (Security Only)                                                | _[KB4512506](https://support.microsoft.com/help/4512506)_ (Monthly Rollup)_[KB4512486](https://support.microsoft.com/help/4512486)_ (Security Only) |
| **Windows** **2012**                                                |                                                                                                                     | 影響なし                                                                                                                                                                                           | _[KB4512518](https://support.microsoft.com/help/4512518)_ (Monthly Rollup)_[KB4512482](https://support.microsoft.com/help/4512482)_ (Security Only) |
| **Windows** **8.1/RT 8.1\*\***Windows\*\* **Server** **2012 R2**    |                                                                                                                     | 影響なし                                                                                                                                                                                           | _[KB4512488](https://support.microsoft.com/help/4512488)_ (Monthly Rollup)_[KB4512489](https://support.microsoft.com/help/4512489)_ (Security Only) |
| **Windows** **10**                                                  |                                                                                                                     | 影響なし                                                                                                                                                                                           | _[KB4512497](https://support.microsoft.com/help/4512497)_                                                                                           |
| **Windows** **10** **1607\*\***Windows Server 2016\*\*              |                                                                                                                     | 影響なし                                                                                                                                                                                           | _[KB4512517](https://support.microsoft.com/help/4512517)_                                                                                           |
| **Windows** **10** **1703**                                         |                                                                                                                     | 影響なし                                                                                                                                                                                           | _[KB4512507](https://support.microsoft.com/help/4512507)_                                                                                           |
| **Windows** **10** **1709**                                         |                                                                                                                     | 影響なし                                                                                                                                                                                           | _[KB4512516](https://support.microsoft.com/help/4512516)_                                                                                           |
| **Windows** **10** **1803\*\***Windows Server,\***\* version 1803** |                                                                                                                     | 影響なし                                                                                                                                                                                           | _[KB4512501](https://support.microsoft.com/help/4512501)_                                                                                           |
| **Windows** **10** **1809\*\***Windows Server 20019\*\*             |                                                                                                                     | 影響なし                                                                                                                                                                                           | _[KB4511553](https://support.microsoft.com/help/4511553)_                                                                                           |
| **Windows** **10** **1903\*\***Windows Server,\***\* version 1903** |                                                                                                                     | 影響なし                                                                                                                                                                                           | _[KB4512508](https://support.microsoft.com/help/4512508)_                                                                                           |

\*CVE: Common Vulnerabilities and Exposures (CVE)

マイクロソフト  
セキュリティレスポンスチーム  
セキュリティプログラムマネージャ  
垣内 由梨香

---

参照  
下記の、マイクロソフト公式ブログも参考にしてください。  
Microsoft works with researchers to detect and protect against new RDP exploits  
<https://www.microsoft.com/security/blog/2019/11/07/the-new-cve-2019-0708-rdp-exploit-attacks-explained/>  
Prevent a worm by updating Remote Desktop Services (CVE-2019-0708)  
<https://msrc-blog.microsoft.com/2019/05/14/prevent-a-worm-by-updating-remote-desktop-services-cve-2019-0708/>  
Patch new wormable vulnerabilities in Remote Desktop Services (CVE-2019-1181/1182)  
<https://msrc-blog.microsoft.com/2019/08/13/patch-new-wormable-vulnerabilities-in-remote-desktop-services-cve-2019-1181-1182/>  
A Reminder to Update Your Systems to Prevent a Worm  
<https://msrc-blog.microsoft.com/2019/05/30/a-reminder-to-update-your-systems-to-prevent-a-worm/>
