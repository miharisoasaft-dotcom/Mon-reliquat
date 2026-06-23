export interface TeamMember {
  nom: string;
  parcours: "SP" | "DA" | "DPA" | "DPII";
  cake: number;
  frn: number;
  total: number;
  arrondi: number;
  uniqueId: string;
  reliquat?: number;
}

export const COMMON_EXPENSES = {
  sortie: -28884.66,
  invitation: 46861.31,
  boisson: 2056.20,
  jc: 7216.79,
  concert: -29120.44,
  tshirt: 6445.26,
  sandwich: 2271.53,
  saintValentin: 2035.04,
  festival: 1401.46,
  partenariat: 10948.91
};

export const COMMON_SUM = 21231.39; // Sum of all common expenses

export const teamMembers: TeamMember[] = [
  // --- SP ---
  { nom: "ANDRIAMBELOMA FENOSOA BRINDAH", parcours: "SP", cake: 12000, frn: 20000, total: 53231.39, arrondi: 53200, uniqueId: "4456" },
  { nom: "HOLIMALALA CLARETTE", parcours: "SP", cake: 18000, frn: 10000, total: 49231.39, arrondi: 49200, uniqueId: "4407" },
  { nom: "RAJERIHARISOA NOMENJANAHARY MIORA", parcours: "SP", cake: 0, frn: 20000, total: 41231.39, arrondi: 41200, uniqueId: "2913" },
  { nom: "RAKOTOLAVA RAISSA YANNICK", parcours: "SP", cake: 12000, frn: 20000, total: 53231.39, arrondi: 53200, uniqueId: "4428" },
  { nom: "RAKOTONDRASOA ANDO MALALA CHRISTINA", parcours: "SP", cake: 9000, frn: 20000, total: 50231.39, arrondi: 50200, uniqueId: "2569" },
  { nom: "RAILAIARIVONY DINA HARIMANANA", parcours: "SP", cake: 0, frn: 20000, total: 41231.39, arrondi: 41200, uniqueId: "3497" },
  { nom: "RAMAHEFARIVO JULIA", parcours: "SP", cake: 0, frn: 20000, total: 41231.39, arrondi: 41200, uniqueId: "4472" },
  { nom: "RARIVONA TOVOVALIHAMIHAJA TSIBAKANANA", parcours: "SP", cake: 6000, frn: 20000, total: 47231.39, arrondi: 47200, uniqueId: "2846" },
  { nom: "RATIARISON MIKALO ESTERA", parcours: "SP", cake: 6000, frn: 10000, total: 37231.39, arrondi: 37200, uniqueId: "3461" },
  { nom: "RAZAKARIVONY FIAFERANA ANDY", parcours: "SP", cake: 0, frn: 20000, total: 41231.39, arrondi: 41200, uniqueId: "2869" },
  { nom: "ANDRIAMANARIVO MIHARAMANANTSOA ANDY LOÏC", parcours: "SP", cake: 12000, frn: 20000, total: 53231.39, arrondi: 53200, uniqueId: "3012" },
  { nom: "ANDRIANANJANAVALONA NIAINA VANONA", parcours: "SP", cake: 0, frn: 20000, total: 41231.39, arrondi: 41200, uniqueId: "2036" },
  { nom: "RAKOTOARIMANANA MANDRESY FIONONANA", parcours: "SP", cake: 0, frn: 20000, total: 41231.39, arrondi: 41200, uniqueId: "3506" },
  { nom: "RAKOTOARIVELO FANOMEZANA JOSELITO", parcours: "SP", cake: 0, frn: 20000, total: 41231.39, arrondi: 41200, uniqueId: "2504" },
  { nom: "RAKOTONDRASOA DERA HOLINAVALONA", parcours: "SP", cake: 0, frn: 10000, total: 31231.39, arrondi: 31200, uniqueId: "4538" },
  { nom: "RAKOTONJANAHARY MAHATSANGY NY AVO", parcours: "SP", cake: 0, frn: 20000, total: 41231.39, arrondi: 41200, uniqueId: "4468" },

  // --- DA ---
  { nom: "MAHANDRIARISOA HANTRANIAINA MIRANTO", parcours: "DA", cake: 15000, frn: 10000, total: 46231.39, arrondi: 46200, uniqueId: "3678" },
  { nom: "RAKOTOARIJAONA NY ANTSA MINALDINHA", parcours: "DA", cake: 0, frn: 10000, total: 41231.39, arrondi: 41200, uniqueId: "819" },
  { nom: "ANDRIAMAMENOSOA NY MISANDRATRA FANANTENANA", parcours: "DA", cake: 0, frn: 20000, total: 41231.39, arrondi: 41200, uniqueId: "33913" },
  { nom: "RANDRIAMITANTSOA LYANTSOA", parcours: "DA", cake: 6000, frn: 10000, total: 37231.39, arrondi: 37200, uniqueId: "4353" },
  { nom: "RANDRIANANTOANDRO JEANNIE RANJARILANTO", parcours: "DA", cake: 0, frn: 20000, total: 41231.39, arrondi: 41200, uniqueId: "42006" },
  { nom: "RASANDINJATOVO ANTSAN'NY AVO", parcours: "DA", cake: 15000, frn: 20000, total: 56231.39, arrondi: 56200, uniqueId: "1492" },
  { nom: "RATELOFERA VOLANA FINARITRA", parcours: "DA", cake: 12000, frn: 20000, total: 53231.39, arrondi: 53200, uniqueId: "33961" },
  { nom: "RATSIMBAZAFY MANA FANANTENANA", parcours: "DA", cake: 0, frn: 0, total: 21231.39, arrondi: 21200, uniqueId: "2139" },
  { nom: "RAZAFINDRAKOTO HASINAINA LINAH", parcours: "DA", cake: 0, frn: 20000, total: 41231.39, arrondi: 41200, uniqueId: "544" },
  { nom: "RAZAFINDRAKOTO LIVA NY AINA FIFALIANA", parcours: "DA", cake: 0, frn: 20000, total: 41231.39, arrondi: 41200, uniqueId: "402" },
  { nom: "ZAFINERA ANTONIONIE", parcours: "DA", cake: 3000, frn: 10000, total: 34231.39, arrondi: 34200, uniqueId: "1284" },
  { nom: "ANDRIAMALALA TOLOTRINIAINA KEVIN PATRICK", parcours: "DA", cake: 30000, frn: 20000, total: 71231.39, arrondi: 71200, uniqueId: "3817" },
  { nom: "ANDRIAMPARANY ARENASOA BRYAN", parcours: "DA", cake: 0, frn: 20000, total: 41231.39, arrondi: 41200, uniqueId: "3856" },
  { nom: "ANDRIANOMENJANAHARY MIARINTSOA", parcours: "DA", cake: 9000, frn: 20000, total: 50231.39, arrondi: 50200, uniqueId: "1977" },
  { nom: "RAJOONARY SAFIDY MIHARISOA", parcours: "DA", cake: 0, frn: 0, total: 21231.39, arrondi: 21200, uniqueId: "2972" },
  { nom: "RAKOTOHARIFENO HERINAMBININTSOA", parcours: "DA", cake: 12000, frn: 20000, total: 53231.39, arrondi: 53200, uniqueId: "351" },
  { nom: "RAKOTONDRAIBE SAFIDY TSILAVINA", parcours: "DA", cake: 0, frn: 10000, total: 31231.39, arrondi: 31200, uniqueId: "734" },
  { nom: "RAKOTONJANAHARY FITAHIANA JEAN NOELA", parcours: "DA", cake: 0, frn: 20000, total: 41231.39, arrondi: 41200, uniqueId: "2975" },
  { nom: "RAMANANJANAHARY ANDY STEEVEN", parcours: "DA", cake: 12000, frn: 20000, total: 53231.39, arrondi: 53200, uniqueId: "4174" },
  { nom: "RAMBELOSON JEAN MICHEL", parcours: "DA", cake: 12000, frn: 20000, total: 53231.39, arrondi: 53200, uniqueId: "889" },
  { nom: "RANDRIANARISOA HERINIAVO", parcours: "DA", cake: 12000, frn: 20000, total: 53231.39, arrondi: 53200, uniqueId: "1164" },
  { nom: "RANDRIANASOLO VAHATRINIAINA DESIRE", parcours: "DA", cake: 3000, frn: 20000, total: 44231.39, arrondi: 44200, uniqueId: "1123" },
  { nom: "RAVONIARISON VICKI SERGIO STAN", parcours: "DA", cake: 12000, frn: 20000, total: 53231.39, arrondi: 53200, uniqueId: "3635" },
  { nom: "RINKAN CARDILLO ANDRIAR", parcours: "DA", cake: 12000, frn: 20000, total: 53231.39, arrondi: 53200, uniqueId: "559" },

  // --- DPA ---
  { nom: "ANDRIAFANOMEZANTSOA AINA NEKENA CAROLE", parcours: "DPA", cake: 0, frn: 20000, total: 41231.39, arrondi: 41200, uniqueId: "1874" },
  { nom: "RANIRINTSOA MANOA FEHIZORO", parcours: "DPA", cake: 0, frn: 10000, total: 31231.39, arrondi: 31200, uniqueId: "961" },
  { nom: "ANDRIAMAHAVITASOA VOARY MICHELLE JESSICA", parcours: "DPA", cake: 12000, frn: 20000, total: 53231.39, arrondi: 53200, uniqueId: "1973" },
  { nom: "ANDRIAMAMPITA URSULA RAZAFINDRAVAO", parcours: "DPA", cake: 9000, frn: 20000, total: 50231.39, arrondi: 50200, uniqueId: "42527" },
  { nom: "ANDRIAMARONAINA MAMITIANA VALISOA", parcours: "DPA", cake: 12000, frn: 20000, total: 53231.39, arrondi: 53200, uniqueId: "4199" },
  { nom: "ANDRIANALINJAKA FITAHIANA MELANIE", parcours: "DPA", cake: 12000, frn: 20000, total: 53231.39, arrondi: 53200, uniqueId: "4181" },
  { nom: "ANDRIANARISON MIALITIANA NY MAHERISOA", parcours: "DPA", cake: 12000, frn: 20000, total: 53231.39, arrondi: 53200, uniqueId: "4227" },
  { nom: "ANDRIANOMENA LIANTSOA MIORA", parcours: "DPA", cake: 15000, frn: 20000, total: 56231.39, arrondi: 56200, uniqueId: "4231" },
  { nom: "FANOMEZANTSOA VOLATIANA PATRICIA", parcours: "DPA", cake: 0, frn: 20000, total: 41231.39, arrondi: 41200, uniqueId: "927" },
  { nom: "HARINAIVOTIANA SAROBIDY VANIAH", parcours: "DPA", cake: 6000, frn: 10000, total: 37231.39, arrondi: 37200, uniqueId: "327" },
  { nom: "IKAY EDITH SANDRINAH", parcours: "DPA", cake: 15000, frn: 20000, total: 56231.39, arrondi: 56200, uniqueId: "487" },
  { nom: "NOMENJANAHARY FENO HASINA", parcours: "DPA", cake: 9000, frn: 20000, total: 50231.39, arrondi: 50200, uniqueId: "2230" },
  { nom: "NY FAHOMBIAZANA AR’LUEANNIE Z. B.", parcours: "DPA", cake: 0, frn: 20000, total: 41231.39, arrondi: 41200, uniqueId: "2233" },
  { nom: "RAFALIARIMALALA TAHIANA FANANTENANA ISABELLE", parcours: "DPA", cake: 12000, frn: 20000, total: 53231.39, arrondi: 53200, uniqueId: "2659" },
  { nom: "RAHAJANIRINA FINARITRA MBOLATIANA", parcours: "DPA", cake: 12000, frn: 10000, total: 43231.39, arrondi: 43200, uniqueId: "4216" },
  { nom: "RAHANTAHARIVELO TINAH FEHIZORO", parcours: "DPA", cake: 12000, frn: 20000, total: 53231.39, arrondi: 53200, uniqueId: "697" },
  { nom: "RAHARIMALALA MANOA SARAHA", parcours: "DPA", cake: 18000, frn: 20000, total: 59231.39, arrondi: 59200, uniqueId: "42109" },
  { nom: "RAHARIMIAVOTRA RAVAKA ELIE", parcours: "DPA", cake: 0, frn: 20000, total: 41231.39, arrondi: 41200, uniqueId: "3700" },
  { nom: "RAKOTONINDRINA KOLOINA SAROBIDY", parcours: "DPA", cake: 12000, frn: 20000, total: 53231.39, arrondi: 53200, uniqueId: "4176" },
  { nom: "RAKOTONIRAINY MIARY ITOBIANTSOA", parcours: "DPA", cake: 18000, frn: 20000, total: 59231.39, arrondi: 59200, uniqueId: "4269" },
  { nom: "RAMANANTOANINANAHARY MAMISOA KAREL", parcours: "DPA", cake: 12000, frn: 20000, total: 53231.39, arrondi: 53200, uniqueId: "3770" },
  { nom: "RAMAROSON RAVAKINAINA FIONONANA", parcours: "DPA", cake: 0, frn: 10000, total: 31231.39, arrondi: 31200, uniqueId: "3287" },
  { nom: "RAMBELONIRINA MALALATIANA NANCY", parcours: "DPA", cake: 6000, frn: 20000, total: 47231.39, arrondi: 47200, uniqueId: "2970" },
  { nom: "RANAIVOSON SOATIANA", parcours: "DPA", cake: 12000, frn: 20000, total: 53231.39, arrondi: 53200, uniqueId: "494" },
  { nom: "RANDIALISON ONY TIANA ELIA", parcours: "DPA", cake: 12000, frn: 20000, total: 53231.39, arrondi: 53200, uniqueId: "685" },
  { nom: "RANDRIAMALALA SAFIDINJANAHARY NOMENA", parcours: "DPA", cake: 12000, frn: 20000, total: 53231.39, arrondi: 53200, uniqueId: "2249" },
  { nom: "RANDRIAMIHAJA MAMISOA ERICA", parcours: "DPA", cake: 12000, frn: 20000, total: 53231.39, arrondi: 53200, uniqueId: "42545" },
  { nom: "RANDRIANAVOJAONA SAFIDY NAJAINA", parcours: "DPA", cake: 12000, frn: 10000, total: 43231.39, arrondi: 43200, uniqueId: "216" },
  { nom: "RANDRIANARIVO LANTONIAINA MINO ERICA", parcours: "DPA", cake: 12000, frn: 20000, total: 53231.39, arrondi: 53200, uniqueId: "4249" },
  { nom: "RANDRIANASIMANANA MIHARIMALALA ELISOA", parcours: "DPA", cake: 0, frn: 20000, total: 41231.39, arrondi: 41200, uniqueId: "4271" },
  { nom: "RANDRIANASOLONIRINA MIANGALY HERIZO", parcours: "DPA", cake: 0, frn: 20000, total: 41231.39, arrondi: 41200, uniqueId: "33944" },
  { nom: "RANDRIATANARISOA MIALY AMBININTSOA", parcours: "DPA", cake: 12000, frn: 20000, total: 53231.39, arrondi: 53200, uniqueId: "4244" },
  { nom: "RAOELISON RAVAKA NY AINA", parcours: "DPA", cake: 6000, frn: 20000, total: 47231.39, arrondi: 47200, uniqueId: "3664" },
  { nom: "RARIJA NY ANTRA ITOKIANA LIANTSOA", parcours: "DPA", cake: 12000, frn: 20000, total: 53231.39, arrondi: 53200, uniqueId: "3619" },
  { nom: "RASOLOMANANA NADEGE MICHAELLA", parcours: "DPA", cake: 12000, frn: 20000, total: 53231.39, arrondi: 53200, uniqueId: "419" },
  { nom: "RATOVONANAHARY ROVANIAINA LUCIANA", parcours: "DPA", cake: 15000, frn: 10000, total: 46231.39, arrondi: 46200, uniqueId: "2156" },
  { nom: "RAZAFIARIMALALA MIALISOA NIRINA ORNELLA", parcours: "DPA", cake: 0, frn: 20000, total: 41231.39, arrondi: 41200, uniqueId: "3245" },
  { nom: "RAZAFIARISON STANIS LOUISSETTE", parcours: "DPA", cake: 6000, frn: 20000, total: 47231.39, arrondi: 47200, uniqueId: "2378" },
  { nom: "RAZAFIMAHATRADRAIBE IALINORO HASINA FITAVANA NAMBININTSOA", parcours: "DPA", cake: 9000, frn: 20000, total: 50231.39, arrondi: 50200, uniqueId: "2967" },
  { nom: "SOLOARITSIMBA UMA ELINAH", parcours: "DPA", cake: 12000, frn: 20000, total: 53231.39, arrondi: 53200, uniqueId: "1426" },
  { nom: "RIVOHARILALA FENITRA MITANTSOA", parcours: "DPA", cake: 0, frn: 20000, total: 41231.39, arrondi: 41200, uniqueId: "1152" },
  { nom: "ANDRIANJARISOA NALISOA FANOMEZANA", parcours: "DPA", cake: 12000, frn: 20000, total: 53231.39, arrondi: 53200, uniqueId: "3861" },
  { nom: "RAJOELISON MANUELA JERRY", parcours: "DPA", cake: 12000, frn: 20000, total: 53231.39, arrondi: 53200, uniqueId: "306" },
  { nom: "RAKOTOARIMANANA MAHENINA FANDRESENA", parcours: "DPA", cake: 0, frn: 20000, total: 41231.39, arrondi: 41200, uniqueId: "2119" },
  { nom: "RAKOTOARIVELOSON ERNEST", parcours: "DPA", cake: 12000, frn: 20000, total: 53231.39, arrondi: 53200, uniqueId: "49072" },
  { nom: "RAKOTONIRINA MAMITIANA ALEX", parcours: "DPA", cake: 0, frn: 20000, total: 41231.39, arrondi: 41200, uniqueId: "2355" },
  { nom: "RANDRIAMARISOA TANJONNY AINA CHRISTOPHER", parcours: "DPA", cake: 12000, frn: 20000, total: 53231.39, arrondi: 53200, uniqueId: "2171" },
  { nom: "RANDRIANARIVONY HERILALAINA ANSELME ANTONIO MARIE", parcours: "DPA", cake: 12000, frn: 20000, total: 53231.39, arrondi: 53200, uniqueId: "42005" },
  { nom: "RANDRIANAINA MENDRIKA FABIEN", parcours: "DPA", cake: 12000, frn: 20000, total: 53231.39, arrondi: 53200, uniqueId: "42239" },
  { nom: "RANDRIANTAHIRY ANDONJATOVO ULRICH", parcours: "DPA", cake: 12000, frn: 20000, total: 53231.39, arrondi: 53200, uniqueId: "916" },
  { nom: "RASOLOVAO ANTSONIAINA FREDERIC", parcours: "DPA", cake: 12000, frn: 20000, total: 53231.39, arrondi: 53200, uniqueId: "2240" },
  { nom: "ANDRIAMANAMPY ROTA NOMBAMPITAVANA", parcours: "DPII", cake: 12000, frn: 20000, total: 53231.39, arrondi: 53200, uniqueId: "956" },
  { nom: "ANDRIAMITENOVOLA RAMANANJATOVO HENITSOA SAROBIDY", parcours: "DPII", cake: 0, frn: 20000, total: 41231.39, arrondi: 41200, uniqueId: "3356" },
  { nom: "ANDRIANANDRASANA DIARY HARENTSOA", parcours: "DPII", cake: 15000, frn: 20000, total: 56231.39, arrondi: 56200, uniqueId: "1049" },
  { nom: "ANDRIANARIVELOMALALA ROTA NIRINA ANNA", parcours: "DPII", cake: 0, frn: 20000, total: 41231.39, arrondi: 41200, uniqueId: "4180" },
  { nom: "ANDRIANOELISOA TINA JASYNTHIA ELIAS", parcours: "DPII", cake: 15000, frn: 20000, total: 56231.39, arrondi: 56200, uniqueId: "108" },
  { nom: "ANDRIANTSOA NANDY THALIA", parcours: "DPII", cake: 0, frn: 20000, total: 41231.39, arrondi: 41200, uniqueId: "4339" },
  { nom: "ANDRI-ARIMANANA FIDINIAINA ILOTIANA FAHASOAVANA", parcours: "DPII", cake: 30000, frn: 20000, total: 71231.39, arrondi: 71200, uniqueId: "670" },
  { nom: "FENOHASINA TEBYH CHANCIA", parcours: "DPII", cake: 12000, frn: 20000, total: 53231.39, arrondi: 53200, uniqueId: "1982" },
  { nom: "FIRINGA FENOSOA NOELINAH", parcours: "DPII", cake: 6000, frn: 10000, total: 37231.39, arrondi: 37200, uniqueId: "1911" },
  { nom: "HERINIRINA FANANTENANA HASINIONY MARIE ODETTE", parcours: "DPII", cake: 12000, frn: 10000, total: 43231.39, arrondi: 43200, uniqueId: "3628" },
  { nom: "IANJARILALA ARITSOA SARAH", parcours: "DPII", cake: 15000, frn: 20000, total: 56231.39, arrondi: 56200, uniqueId: "42576" },
  { nom: "NIVOHARIMALALA SANTATRINIAINA ISMAËL", parcours: "DPII", cake: 6000, frn: 20000, total: 47231.39, arrondi: 47200, uniqueId: "3608" },
  { nom: "RABARIJAONA IAVO SOA FANIRY", parcours: "DPII", cake: 0, frn: 10000, total: 31231.39, arrondi: 31200, uniqueId: "1419" },
  { nom: "RABARY KANTO LIANTSOA", parcours: "DPII", cake: 0, frn: 10000, total: 31231.39, arrondi: 31200, uniqueId: "4229" },
  { nom: "RABEMANANJARA TATAMO RAVAKY NY ONY NANCY", parcours: "DPII", cake: 12000, frn: 20000, total: 53231.39, arrondi: 53200, uniqueId: "793" },
  { nom: "RABENARIVO TATIANA REVA", parcours: "DPII", cake: 12000, frn: 20000, total: 53231.39, arrondi: 53200, uniqueId: "738" },
  { nom: "RAFANOMEZANTSOA ERICKAH ISRAELAH", parcours: "DPII", cake: 12000, frn: 20000, total: 53231.39, arrondi: 53200, uniqueId: "3135" },
  { nom: "RAHARILALAO AMBOARA MAREVA NY AINA", parcours: "DPII", cake: 9000, frn: 10000, total: 40231.39, arrondi: 40200, uniqueId: "811" },
  { nom: "RAHARIMALALA NOMENA SANDRATRA", parcours: "DPII", cake: 0, frn: 20000, total: 41231.39, arrondi: 41200, uniqueId: "1206" },
  { nom: "RAJHONSON ANDO NY AINA MIRELLA", parcours: "DPII", cake: 6000, frn: 20000, total: 47231.39, arrondi: 47200, uniqueId: "2317" },
  { nom: "RAKOTOARISOA FENO SOAHARY", parcours: "DPII", cake: 12000, frn: 20000, total: 53231.39, arrondi: 53200, uniqueId: "875" },
  { nom: "RAKOTOMALALA MIRANTSOA MIREILLE", parcours: "DPII", cake: 12000, frn: 20000, total: 53231.39, arrondi: 53200, uniqueId: "3052" },
  { nom: "RAKOTONIAINA KRISTIANA VOLASOA CARINE", parcours: "DPII", cake: 12000, frn: 20000, total: 53231.39, arrondi: 53200, uniqueId: "772" },
  { nom: "RAKOTONIRINA RIVA IRINA MISOA", parcours: "DPII", cake: 0, frn: 20000, total: 41231.39, arrondi: 41200, uniqueId: "4250" },
  { nom: "RALANTONIRAINY HOLINJATOVO NDROSO FINOANA", parcours: "DPII", cake: 12000, frn: 20000, total: 53231.39, arrondi: 53200, uniqueId: "3332" },
  { nom: "RAMANGANIRINA FIONONANA LILIANE", parcours: "DPII", cake: 30000, frn: 0, total: 51231.39, arrondi: 51200, uniqueId: "1160" },
  { nom: "RAMBOAMAMPIANINA MALALATIANA", parcours: "DPII", cake: 0, frn: 20000, total: 41231.39, arrondi: 41200, uniqueId: "3822" },
  { nom: "RAMBOASALAMA AINA NARINDRA MAMY VALIAVO", parcours: "DPII", cake: 0, frn: 20000, total: 41231.39, arrondi: 41200, uniqueId: "593" },
  { nom: "RANDRIAMIHAJA TARATRA VALERIA", parcours: "DPII", cake: 12000, frn: 20000, total: 53231.39, arrondi: 53200, uniqueId: "2250" },
  { nom: "RANDRIATSONGAINA ZAFY DANIELLA", parcours: "DPII", cake: 30000, frn: 10000, total: 61231.39, arrondi: 61200, uniqueId: "3847" },
  { nom: "RANIRIARIMANANA LANTOSAHAZA ITOKIANA", parcours: "DPII", cake: 0, frn: 20000, total: 41231.39, arrondi: 41200, uniqueId: "4389" },
  { nom: "RASAMSON NIRY ANDRIAFENOSOA", parcours: "DPII", cake: 6000, frn: 10000, total: 37231.39, arrondi: 37200, uniqueId: "1355" },

  // --- DPII ---
  { nom: "RASOANIRAINY HAINGONIRINA DORET CHRISTINA", parcours: "DPII", cake: 0, frn: 0, total: 21231.39, arrondi: 21200, uniqueId: "344" },
  { nom: "RASOLONAMPIFALIANA SARIAKA LEA", parcours: "DPII", cake: 12000, frn: 20000, total: 53231.39, arrondi: 53200, uniqueId: "3656" },
  { nom: "RAVAOARISOA LANTONIANA JULIE ANNA", parcours: "DPII", cake: 6000, frn: 20000, total: 47231.39, arrondi: 47200, uniqueId: "594" },
  { nom: "RAZAFIARISOA VONIMANITRA FANOMEZANA", parcours: "DPII", cake: 12000, frn: 10000, total: 43231.39, arrondi: 43200, uniqueId: "4240" },
  { nom: "RAZAFINIRINA NOMENJANAHARY FENOSOA", parcours: "DPII", cake: 12000, frn: 20000, total: 53231.39, arrondi: 53200, uniqueId: "565" },
  { nom: "SOLOFOTIANA ANJARASOA HANITRINIALA", parcours: "DPII", cake: 15000, frn: 10000, total: 46231.39, arrondi: 46200, uniqueId: "2963" },
  { nom: "ANDRIAMALALA IDEALINTSOA", parcours: "DPII", cake: 0, frn: 20000, total: 41231.39, arrondi: 41200, uniqueId: "3603" },
  { nom: "ANDRIANARIJAONA TAHINA", parcours: "DPII", cake: 12000, frn: 20000, total: 53231.39, arrondi: 53200, uniqueId: "2318" },
  { nom: "RAKOTOARISOA RANDRIANJA RANTO HERIZO KEVIN", parcours: "DPII", cake: 0, frn: 10000, total: 31231.39, arrondi: 31200, uniqueId: "3675" },
  { nom: "RAMANANTSOA AVOTRA ANJARA NOMENA", parcours: "DPII", cake: 12000, frn: 20000, total: 53231.39, arrondi: 53200, uniqueId: "1967" },
  { nom: "RAMAROKOTO TSARAZARA ANDERSEN", parcours: "DPII", cake: 0, frn: 0, total: 21231.39, arrondi: 21200, uniqueId: "3349" },
  { nom: "RANDIMBISON ARO LANCIO ANDRIANAMPINGA", parcours: "DPII", cake: 12000, frn: 20000, total: 53231.39, arrondi: 53200, uniqueId: "227" },
  { nom: "RANDRIANTSIZAFY TENDRY FANEVA", parcours: "DPII", cake: 0, frn: 20000, total: 41231.39, arrondi: 41200, uniqueId: "3713" },
  { nom: "RASOLOFOJAONA TSILAVE MAHAONONA", parcours: "DPII", cake: 12000, frn: 20000, total: 53231.39, arrondi: 53200, uniqueId: "3698" },
  { nom: "RAZAFITRIMO NY ANDRIARIAJONA MAMONJISOA", parcours: "DPII", cake: 15000, frn: 20000, total: 56231.39, arrondi: 56200, uniqueId: "2159" }
];

export function findMatchingMember(extractedText: string): TeamMember | null {
  if (!extractedText) return null;
  const normalizedText = extractedText.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  let bestMatch: TeamMember | null = null;
  let maxScore = 0;

  for (const member of teamMembers) {
    const normalizedName = member.nom.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    
    // Exact logic
    if (normalizedText.includes(normalizedName)) {
      return member;
    }

    // Check individual name parts to handle middle names or OCR word order changes
    const parts = normalizedName.split(/\s+/).filter(p => p.length > 2);
    let matchedParts = 0;
    for (const part of parts) {
      if (normalizedText.includes(part)) {
        matchedParts++;
      }
    }

    const score = matchedParts / parts.length;
    if (score > 0.55 && score > maxScore) {
      maxScore = score;
      bestMatch = member;
    }
  }

  // Fallback: Check if first name + last name are sequentially matched
  if (!bestMatch) {
    for (const member of teamMembers) {
      const normalizedName = member.nom.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      const nameWords = normalizedName.split(/\s+/);
      if (nameWords.length >= 2) {
        const checkSequence1 = `${nameWords[0]} ${nameWords[nameWords.length - 1]}`;
        const checkSequence2 = `${nameWords[nameWords.length - 1]} ${nameWords[0]}`;
        if (normalizedText.includes(checkSequence1) || normalizedText.includes(checkSequence2)) {
          return member;
        }
      }
    }
  }

  return bestMatch;
}

export function findMemberByCredentials(nameInput: string, codeInput: string): TeamMember | null {
  if (!nameInput) return null;
  const normalizedInputName = nameInput.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
  const cleanCodeInput = codeInput.trim();

  // If credentials are empty, we cannot verify
  if (!cleanCodeInput) {
    return null;
  }

  // Split input into words of size >= 3 to find unique keyword parts (filtering out prepositions etc.)
  let inputWords = normalizedInputName.split(/[\s',.-]+/).map(w => w.trim()).filter(w => w.length >= 3);
  
  if (inputWords.length === 0 && normalizedInputName.length > 0) {
    inputWords = normalizedInputName.split(/[\s',.-]+/).map(w => w.trim()).filter(w => w.length > 0);
  }

  for (const member of teamMembers) {
    const normalizedMemberName = member.nom.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
    
    // Check credentials match:
    // If student types a code, does it match the member's uniqueId?
    const idMatches = member.uniqueId && member.uniqueId.toUpperCase() === cleanCodeInput.toUpperCase();

    // Must be correct
    if (!idMatches) {
      continue;
    }

    // Now, verify if they provided a reasonable name or some unique keywords from it
    let nameMatches = false;

    // 1. Direct match or complete substring lookup
    if (normalizedMemberName.includes(normalizedInputName) || normalizedInputName.includes(normalizedMemberName)) {
      nameMatches = true;
    } else {
      // 2. Keyword/word-based fuzzy check to handle partial typing or minor spelling differences
      const memberWords = normalizedMemberName.split(/[\s',.-]+/).map(w => w.trim()).filter(w => w.length >= 3);
      
      for (const inWord of inputWords) {
        if (memberWords.some(mw => mw === inWord || mw.includes(inWord) || inWord.includes(mw))) {
          nameMatches = true;
          break;
        }
      }
    }

    if (nameMatches) {
      return member;
    }
  }

  return null;
}
