# Regex to verifiy commonly used PAN numbers and SSN


### Credit Card IIN Ranges & Spacing Patterns

<table class="credit-card-pattern-table-fkdn5a">
  <thead>
    <tr><th class="a-issuer">
      Card Type
      <span class="a-explainer">The issuing network</span>
    </th>
    <th class="a-lengths">
      Length
      <span class="a-explainer">Number of allowable digits</span>
    </th>
    <th class="a-iin-ranges">
      IIN Ranges
      <span class="a-explainer">The card number will always begin with ...</span>
    </th>
    <th class="a-patterns">
      Spacing Patterns
      <span class="a-explainer">How the digits and spaces are printed on the physical credit cards</span>
    </th>
  </tr></thead>
  <tbody>
      <tr title="Visa (incl. VPay) credit card numbers are 13-19 digits long. The card number always begin with 4 and the known spacing pattern is 4-4-4-4.">
        <td class="a-issuer">
          Visa (incl. VPay)
        </td>
        <td class="a-lengths">13-19</td>
        <td class="a-iin-ranges">4</td>
        <td class="a-patterns">
            <span class="a-pattern-line">#### #### #### #### (4-4-4-4)</span>
            <span class="a-note">Pattern not known for 13-15 and 17-19 digit cards.</span>
        </td>
      </tr>
      <tr title="Visa Electron credit card numbers are 16 digits long. The card number always begin with 4026, 417500, 4405, 4508, 4844, 4913, 4917 and the spacing pattern is 4-4-4-4.">
        <td class="a-issuer">
          Visa Electron
        </td>
        <td class="a-lengths">16</td>
        <td class="a-iin-ranges">4026, 417500, 4405, 4508, 4844, 4913, 4917</td>
        <td class="a-patterns">
            <span class="a-pattern-line">#### #### #### #### (4-4-4-4)</span>
        </td>
      </tr>
      <tr title="American Express credit card numbers are 15 digits long. The card number always begin with 34, 37 and the spacing pattern is 4-6-5.">
        <td class="a-issuer">
          American Express
        </td>
        <td class="a-lengths">15</td>
        <td class="a-iin-ranges">34, 37</td>
        <td class="a-patterns">
            <span class="a-pattern-line">#### ###### ##### (4-6-5)</span>
        </td>
      </tr>
      <tr title="China UnionPay credit card numbers are 16-19 digits long. The card number always begin with 62 and the known spacing patterns are 4-4-4-4 and 6-13.">
        <td class="a-issuer">
          China UnionPay
        </td>
        <td class="a-lengths">16-19</td>
        <td class="a-iin-ranges">62</td>
        <td class="a-patterns">
            <span class="a-pattern-line">#### #### #### #### (4-4-4-4)</span>
            <span class="a-pattern-line">###### ############# (6-13)</span>
            <span class="a-note">Pattern not known for 17-18 digit cards.</span>
        </td>
      </tr>
      <tr title="MasterCard credit card numbers are 16 digits long. The card number always begin with 51-55, 222100-272099 and the spacing pattern is 4-4-4-4.">
        <td class="a-issuer">
          MasterCard
        </td>
        <td class="a-lengths">16</td>
        <td class="a-iin-ranges">51‑55, 222100‑272099</td>
        <td class="a-patterns">
            <span class="a-pattern-line">#### #### #### #### (4-4-4-4)</span>
        </td>
      </tr>
      <tr title="Maestro credit card numbers are 12-19 digits long. The card number always begin with 500000-509999, 560000-589999, 600000-699999 and the known spacing patterns are 4-4-5, 4-6-5, 4-4-4-4, and 4-4-4-4-3.">
        <td class="a-issuer">
          Maestro
        </td>
        <td class="a-lengths">12-19</td>
        <td class="a-iin-ranges">500000‑509999, 560000‑589999, 600000‑699999</td>
        <td class="a-patterns">
            <span class="a-pattern-line">#### #### ##### (4-4-5)</span>
            <span class="a-pattern-line">#### ###### ##### (4-6-5)</span>
            <span class="a-pattern-line">#### #### #### #### (4-4-4-4)</span>
            <span class="a-pattern-line">#### #### #### #### ### (4-4-4-4-3)</span>
            <span class="a-note">Pattern not known for 12, 14, 17, and 18 digit cards.</span>
        </td>
      </tr>
      <tr title="Diners Club Carte Blanche credit card numbers are 14 digits long. The card number always begin with 300-305 and the spacing pattern is 4-6-4.">
        <td class="a-issuer">
          Diners Club Carte Blanche
        </td>
        <td class="a-lengths">14</td>
        <td class="a-iin-ranges">300‑305</td>
        <td class="a-patterns">
            <span class="a-pattern-line">#### ###### #### (4-6-4)</span>
        </td>
      </tr>
      <tr title="Diners Club International credit card numbers are 14 digits long. The card number always begin with 300-305, 309, 36, 38-39 and the spacing pattern is 4-6-4.">
        <td class="a-issuer">
          Diners Club International
        </td>
        <td class="a-lengths">14</td>
        <td class="a-iin-ranges">300‑305, 309, 36, 38‑39</td>
        <td class="a-patterns">
            <span class="a-pattern-line">#### ###### #### (4-6-4)</span>
        </td>
      </tr>
      <tr title="Diners Club United States &amp; Canada credit card numbers are 16 digits long. The card number always begin with 54, 55 and the spacing pattern is 4-4-4-4.">
        <td class="a-issuer">
          Diners Club United States &amp; Canada
        </td>
        <td class="a-lengths">16</td>
        <td class="a-iin-ranges">54, 55</td>
        <td class="a-patterns">
            <span class="a-pattern-line">#### #### #### #### (4-4-4-4)</span>
        </td>
      </tr>
      <tr title="Discover credit card numbers are 16 digits long. The card number always begin with 6011, 622126-622925, 644-649, 65 and the spacing pattern is 4-4-4-4.">
        <td class="a-issuer">
          Discover
        </td>
        <td class="a-lengths">16</td>
        <td class="a-iin-ranges">6011, 622126‑622925, 644‑649, 65</td>
        <td class="a-patterns">
            <span class="a-pattern-line">#### #### #### #### (4-4-4-4)</span>
        </td>
      </tr>
      <tr title="JCB credit card numbers are 16 digits long. The card number always begin with 3528-3589 and the spacing pattern is 4-4-4-4.">
        <td class="a-issuer">
          JCB
        </td>
        <td class="a-lengths">16</td>
        <td class="a-iin-ranges">3528‑3589</td>
        <td class="a-patterns">
            <span class="a-pattern-line">#### #### #### #### (4-4-4-4)</span>
        </td>
      </tr>
      <tr title="UATP credit card numbers are 15 digits long. The card number always begin with 1 and the spacing pattern is 4-5-6.">
        <td class="a-issuer">
          UATP
        </td>
        <td class="a-lengths">15</td>
        <td class="a-iin-ranges">1</td>
        <td class="a-patterns">
            <span class="a-pattern-line">#### ##### ###### (4-5-6)</span>
        </td>
      </tr>
      <tr title="Dankort credit card numbers are 16 digits long. The card number always begin with 5019 and the spacing pattern is 4-4-4-4.">
        <td class="a-issuer">
          Dankort
        </td>
        <td class="a-lengths">16</td>
        <td class="a-iin-ranges">5019</td>
        <td class="a-patterns">
            <span class="a-pattern-line">#### #### #### #### (4-4-4-4)</span>
        </td>
      </tr>
      <tr title="InterPayment credit card numbers are 16-19 digits long. The card number always begin with 636 and the known spacing pattern is 4-4-4-4.">
        <td class="a-issuer">
          InterPayment
        </td>
        <td class="a-lengths">16-19</td>
        <td class="a-iin-ranges">636</td>
        <td class="a-patterns">
            <span class="a-pattern-line">#### #### #### #### (4-4-4-4)</span>
            <span class="a-note">Pattern not known for 17-19 digit cards.</span>
        </td>
      </tr>
        <tr>
          <td colspan="4" class="a-retired-row">
            Retired Cards &amp; Formats
            <span class="a-explainer">These card types and/or formats are no longer issued and the cards will often be expired</span>
          </td>
        </tr>
      <tr title="MasterCard credit card numbers are 16 digits long. The card number always begin with 222100-272099 and the spacing pattern is 4-4-4-4.">
        <td class="a-issuer">
          MasterCard
        </td>
        <td class="a-lengths">16</td>
        <td class="a-iin-ranges">222100‑272099</td>
        <td class="a-patterns">
            <span class="a-pattern-line">#### #### #### #### (4-4-4-4)</span>
        </td>
      </tr>
      <tr title="Diners Club enRoute credit card numbers are 15 digits long. The card number always begin with 2014, 2149 and the spacing pattern is 4-7-4.">
        <td class="a-issuer">
          Diners Club enRoute
        </td>
        <td class="a-lengths">15</td>
        <td class="a-iin-ranges">2014, 2149</td>
        <td class="a-patterns">
            <span class="a-pattern-line">#### ####### #### (4-7-4)</span>
        </td>
      </tr>
      <tr title="Solo credit card numbers are 16, 18, 19 digits long. The card number always begin with 6334, 6767 and the known spacing patterns are 4-4-4-4 and 4-4-4-4-3.">
        <td class="a-issuer">
          Solo
        </td>
        <td class="a-lengths">16, 18, 19</td>
        <td class="a-iin-ranges">6334, 6767</td>
        <td class="a-patterns">
            <span class="a-pattern-line">#### #### #### #### (4-4-4-4)</span>
            <span class="a-pattern-line">#### #### #### #### ### (4-4-4-4-3)</span>
            <span class="a-note">Pattern not known for 18 digit cards.</span>
        </td>
      </tr>
      <tr title="Switch credit card numbers are 16, 18, 19 digits long. The card number always begin with 4903, 4905, 4911, 4936, 564182, 633110, 6333, 6759 and the known spacing pattern is 4-4-4-4.">
        <td class="a-issuer">
          Switch
        </td>
        <td class="a-lengths">16, 18, 19</td>
        <td class="a-iin-ranges">4903, 4905, 4911, 4936, 564182, 633110, 6333, 6759</td>
        <td class="a-patterns">
            <span class="a-pattern-line">#### #### #### #### (4-4-4-4)</span>
            <span class="a-note">Pattern not known for 18-19 digit cards.</span>
        </td>
      </tr>
      <tr title="Laser credit card numbers are 16-19 digits long. The card number always begin with 6304, 6706, 6771, 6709 and the known spacing pattern is 4-4-4-4.">
        <td class="a-issuer">
          Laser
        </td>
        <td class="a-lengths">16-19</td>
        <td class="a-iin-ranges">6304, 6706, 6771, 6709</td>
        <td class="a-patterns">
            <span class="a-pattern-line">#### #### #### #### (4-4-4-4)</span>
            <span class="a-note">Pattern not known for 17-19 digit cards.</span>
        </td>
      </tr>
      <tr title="Bankcard credit card numbers are 16 digits long. The card number always begin with 5610, 560221-560225 and the spacing pattern is 4-4-4-4.">
        <td class="a-issuer">
          Bankcard
        </td>
        <td class="a-lengths">16</td>
        <td class="a-iin-ranges">5610, 560221‑560225</td>
        <td class="a-patterns">
            <span class="a-pattern-line">#### #### #### #### (4-4-4-4)</span>
        </td>
      </tr>
  </tbody>
</table>