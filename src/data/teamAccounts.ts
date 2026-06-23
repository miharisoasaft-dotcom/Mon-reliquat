export interface TeamMember {
  nom: string;
  parcours: "SP" | "DA" | "DPA" | "DPII";
  cake: number;
  frn: number;
  total: number;
  arrondi: number;
  uniqueId?: string;
  examNum?: string;
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
  { nom: "ANDRIAMBELOMA FENOSOA BRINDAH", parcours: "SP", cake: 12000, frn: 20000, total: 53231.39, arrondi: 53200, uniqueId: "4" },
  { nom: "HOLIMALALA CLARETTE", parcours: "SP", cake: 18000, frn: 10000, total: 49231.39, arrondi: 49200, uniqueId: "7" },
  { nom: "RAJERIHARISOA NOMENJANAHARY MIORA", parcours: "SP", cake: 0, frn: 20000, total: 41231.39, arrondi: 41200, uniqueId: "9" },
  { nom: "RAKOTOLAVA RAISSA YANNICK", parcours: "SP", cake: 12000, frn: 20000, total: 53231.39, arrondi: 53200, uniqueId: "12" },
  { nom: "RAKOTONDRASOA ANDO MALALA CHRISTINA", parcours: "SP", cake: 9000, frn: 20000, total: 50231.39, arrondi: 50200, uniqueId: "13" },
  { nom: "RALALARIVONY DINA HARIMANANA", parcours: "SP", cake: 0, frn: 20000, total: 41231.39, arrondi: 41200, uniqueId: "17" },
  { nom: "RAMAHEFARIVO JULIA", parcours: "SP", cake: 0, frn: 20000, total: 41231.39, arrondi: 41200, uniqueId: "18" },
  { nom: "RARIJAONA TOVOVALIHAMIHAJA TSISAKANANA", parcours: "SP", cake: 6000, frn: 20000, total: 47231.39, arrondi: 47200, uniqueId: "22" },
  { nom: "RATIARISON MIKALO ESTERA", parcours: "SP", cake: 6000, frn: 10000, total: 37231.39, arrondi: 37200, uniqueId: "23" },
  { nom: "RAZAKARIVONY FIAFERA ANDY", parcours: "SP", cake: 0, frn: 20000, total: 41231.39, arrondi: 41200, uniqueId: "24" },
  { nom: "ANDRIAMANARIVO MIHARAMANANTSOA ANDY LOIC", parcours: "SP", cake: 12000, frn: 20000, total: 53231.39, arrondi: 53200, uniqueId: "3" },
  { nom: "RAKOTOARIMANANA MANDRESY FIONONANA", parcours: "SP", cake: 0, frn: 20000, total: 41231.39, arrondi: 41200, uniqueId: "10" },
  { nom: "RAKOTOARIVELO FANOMEZANA JOSELITO", parcours: "SP", cake: 0, frn: 20000, total: 41231.39, arrondi: 41200, uniqueId: "11" },
  { nom: "RAKOTONDRASOA DERA HOLINAVALONA", parcours: "SP", cake: 0, frn: 10000, total: 31231.39, arrondi: 31200, uniqueId: "14" },
  { nom: "RAKOTONJANAHARY MAHATSANGY NY AVO", parcours: "SP", cake: 0, frn: 20000, total: 41231.39, arrondi: 41200, uniqueId: "16" },

  // --- DA ---
  { nom: "MAHANDRARISOA HAITRANIANA MIRANTO", parcours: "DA", cake: 15000, frn: 10000, total: 46231.39, arrondi: 46200, uniqueId: "7" },
  { nom: "RAKOTOARIJAONA NY ANTSA MINALDINHA", parcours: "DA", cake: 0, frn: 20000, total: 41231.39, arrondi: 41200, uniqueId: "2" },
  { nom: "RANDRIAMITANTSOA LIANTSOA", parcours: "DA", cake: 6000, frn: 10000, total: 37231.39, arrondi: 37200, uniqueId: "20" },
  { nom: "RANDRIANANTOANDRO JEANNIE RANJARIANTO", parcours: "DA", cake: 0, frn: 20000, total: 41231.39, arrondi: 41200, uniqueId: "21" },
  { nom: "RASANDINJATOVO ANTSAN'NY AVO", parcours: "DA", cake: 15000, frn: 20000, total: 56231.39, arrondi: 56200, uniqueId: "25" },
  { nom: "RATELOFERA VOLANA FINARITRA", parcours: "DA", cake: 12000, frn: 20000, total: 53231.39, arrondi: 53200, uniqueId: "26" },
  { nom: "RATSIMBAZAFY MANA FANANTENANA", parcours: "DA", cake: 0, frn: 0, total: 21231.39, arrondi: 21200, uniqueId: "27" },
  { nom: "RAZAFINDRAKOTO HASINIAINA LINAH", parcours: "DA", cake: 0, frn: 20000, total: 41231.39, arrondi: 41200, uniqueId: "29" },
  { nom: "RAZAFINDRAKOTO LIVA NY AINA FIFALIANA", parcours: "DA", cake: 0, frn: 20000, total: 41231.39, arrondi: 41200, uniqueId: "30" },
  { nom: "ZAFINERA ANTONIONI", parcours: "DA", cake: 3000, frn: 10000, total: 34231.39, arrondi: 34200, uniqueId: "32" },
  { nom: "ANDRIAMALALA TOLOTRININA KEVIN PATRICK", parcours: "DA", cake: 30000, frn: 20000, total: 71231.39, arrondi: 71200, uniqueId: "1" },
  { nom: "ANDRIAMPARANY ARENTSOA BRYAN", parcours: "DA", cake: 0, frn: 20000, total: 41231.39, arrondi: 41200, uniqueId: "3" },
  { nom: "ANDRIANOMENJANAHARY MARINTSOA", parcours: "DA", cake: 9000, frn: 20000, total: 50231.39, arrondi: 50200, uniqueId: "4" },
  { nom: "RAJAONARY SAFIDY MIHARISOA", parcours: "DA", cake: 0, frn: 0, total: 21231.39, arrondi: 21200, uniqueId: "10" },
  { nom: "RAKOTOHARIFENO HERINAMBINTSOA", parcours: "DA", cake: 12000, frn: 20000, total: 53231.39, arrondi: 53200, uniqueId: "13" },
  { nom: "RAKOTONDRABE SAFIDY TSILAVINA", parcours: "DA", cake: 0, frn: 10000, total: 31231.39, arrondi: 31200, uniqueId: "14" },
  { nom: "RAKOTONJANAHARY FITIAHINA JEAN NOELA", parcours: "DA", cake: 0, frn: 20000, total: 41231.39, arrondi: 41200, uniqueId: "16" },
  { nom: "RAMANANJARA HARY ANDY STEEVEN", parcours: "DA", cake: 12000, frn: 20000, total: 53231.39, arrondi: 53200, uniqueId: "17" },
  { nom: "RAMBELOSON JEAN MICHEL", parcours: "DA", cake: 12000, frn: 20000, total: 53231.39, arrondi: 53200, uniqueId: "18" },
  { nom: "RANDRIANARISOA HERINAVO", parcours: "DA", cake: 12000, frn: 20000, total: 53231.39, arrondi: 53200, uniqueId: "22" },
  { nom: "RANDRIANASOLO VAHATRIANA DESIRE", parcours: "DA", cake: 3000, frn: 20000, total: 44231.39, arrondi: 44200, uniqueId: "23" },
  { nom: "RAVONJARISON VICKI SERGIO STAN", parcours: "DA", cake: 12000, frn: 20000, total: 53231.39, arrondi: 53200, uniqueId: "28" },
  { nom: "RINKAN CARDILLO ANDRIAR", parcours: "DA", cake: 12000, frn: 20000, total: 53231.39, arrondi: 53200, uniqueId: "31" },

  // --- DPA ---
  { nom: "ANDRIAFANOMEZANTSOA AINA NEKENA CAROLE", parcours: "DPA", cake: 0, frn: 20000, total: 41231.39, arrondi: 41200, examNum: "34" },
  { nom: "ANDRIAMAHAVITASOA VOARY MICHELLE JESSICA", parcours: "DPA", cake: 12000, frn: 20000, total: 53231.39, arrondi: 53200, examNum: "35" },
  { nom: "ANDRIAMAMPITA URSULA RAZAFINDRAVAO", parcours: "DPA", cake: 9000, frn: 20000, total: 50231.39, arrondi: 50200, examNum: "36" },
  { nom: "ANDRIAMARONAINA MAMITIANA VALISOA", parcours: "DPA", cake: 12000, frn: 20000, total: 53231.39, arrondi: 53200, examNum: "37" },
  { nom: "ANDRIANALINJAKA FITAHIANA MELANIE", parcours: "DPA", cake: 12000, frn: 20000, total: 53231.39, arrondi: 53200, examNum: "38" },
  { nom: "ANDRIANARISON MIALITIANA NY MAHERISOA", parcours: "DPA", cake: 12000, frn: 20000, total: 53231.39, arrondi: 53200, examNum: "39" },
  { nom: "ANDRIANOMENA LIANTSOA MIORA", parcours: "DPA", cake: 15000, frn: 20000, total: 56231.39, arrondi: 56200, examNum: "41" },
  { nom: "FANOMEZANTSOA VOLATIANA PATRICIA", parcours: "DPA", cake: 0, frn: 20000, total: 41231.39, arrondi: 41200, examNum: "43" },
  { nom: "HARINAIVOTIANA SAROBIDY VANIAH", parcours: "DPA", cake: 6000, frn: 10000, total: 37231.39, arrondi: 37200, examNum: "44" },
  { nom: "IKAY EDITH SANDRINAH", parcours: "DPA", cake: 15000, frn: 20000, total: 56231.39, arrondi: 56200, examNum: "45" },
  { nom: "NOMENJANAHARY FENO HASINA", parcours: "DPA", cake: 9000, frn: 20000, total: 50231.39, arrondi: 50200, examNum: "46" },
  { nom: "NY FAHOMBIAZANA AR’LUEANNIE Z. B.", parcours: "DPA", cake: 0, frn: 20000, total: 41231.39, arrondi: 41200, examNum: "47" },
  { nom: "RAFALIARIMALALA TAHIANA FANANTENANA ISABELLE", parcours: "DPA", cake: 12000, frn: 20000, total: 53231.39, arrondi: 53200, examNum: "48" },
  { nom: "RAHAJANIRINA FINARITRA MBOLATIANA", parcours: "DPA", cake: 12000, frn: 10000, total: 43231.39, arrondi: 43200, examNum: "49" },
  { nom: "RAHANTAHARIVELO TINAH FEHIZORO", parcours: "DPA", cake: 12000, frn: 20000, total: 53231.39, arrondi: 53200, examNum: "50" },
  { nom: "RAHARIMALALA MANOA SARAHA", parcours: "DPA", cake: 18000, frn: 20000, total: 59231.39, arrondi: 59200, examNum: "51" },
  { nom: "RAHARIMIAVOTRA RAVAKA ELIE", parcours: "DPA", cake: 0, frn: 20000, total: 41231.39, arrondi: 41200, examNum: "52" },
  { nom: "RAKOTONINDRINA KOLOINA SAROBIDY", parcours: "DPA", cake: 12000, frn: 20000, total: 53231.39, arrondi: 53200, examNum: "56" },
  { nom: "RAKOTONIRAINY MIARY ITOBIANTSOA", parcours: "DPA", cake: 18000, frn: 20000, total: 59231.39, arrondi: 59200, examNum: "57" },
  { nom: "RAMANANTOANINANAHARY MAMISOA KAREL", parcours: "DPA", cake: 12000, frn: 20000, total: 53231.39, arrondi: 53200, examNum: "59" },
  { nom: "RAMAROSON RAVAKINAINA FIONONANA", parcours: "DPA", cake: 0, frn: 10000, total: 31231.39, arrondi: 31200, examNum: "60" },
  { nom: "RAMBELONIRINA MALALATIANA NANCY", parcours: "DPA", cake: 6000, frn: 20000, total: 47231.39, arrondi: 47200, examNum: "61" },
  { nom: "RANAIVOSON SOATIANA", parcours: "DPA", cake: 12000, frn: 20000, total: 53231.39, arrondi: 53200, examNum: "62" },
  { nom: "RANDIALISON ONY TIANA ELIA", parcours: "DPA", cake: 12000, frn: 20000, total: 53231.39, arrondi: 53200, examNum: "63" },
  { nom: "RANDRIAMALALA SAFIDINJANAHARY NOMENA", parcours: "DPA", cake: 12000, frn: 20000, total: 53231.39, arrondi: 53200, examNum: "64" },
  { nom: "RANDRIAMIHAJA MAMISOA ERICA", parcours: "DPA", cake: 12000, frn: 20000, total: 53231.39, arrondi: 53200, examNum: "66" },
  { nom: "RANDRIANAVOJAONA SAFIDY NAJAINA", parcours: "DPA", cake: 12000, frn: 10000, total: 43231.39, arrondi: 43200, examNum: "67" },
  { nom: "RANDRIANARIVO LANTONIAINA MINO ERICA", parcours: "DPA", cake: 12000, frn: 20000, total: 53231.39, arrondi: 53200, examNum: "69" },
  { nom: "RANDRIANASIMANANA MIHARIMALALA ELISOA", parcours: "DPA", cake: 0, frn: 20000, total: 41231.39, arrondi: 41200, examNum: "71" },
  { nom: "RANDRIANASOLONIRINA MIANGALY HERIZO", parcours: "DPA", cake: 0, frn: 20000, total: 41231.39, arrondi: 41200, examNum: "72" },
  { nom: "RANDRIATANARISOA MIALY AMBININTSOA", parcours: "DPA", cake: 12000, frn: 20000, total: 53231.39, arrondi: 53200, examNum: "76" },
  { nom: "RAOELISON RAVAKA NY AINA", parcours: "DPA", cake: 6000, frn: 20000, total: 47231.39, arrondi: 47200, examNum: "78" },
  { nom: "RARIJA NY ANTRA ITOKIANA LIANTSOA", parcours: "DPA", cake: 12000, frn: 20000, total: 53231.39, arrondi: 53200, examNum: "79" },
  { nom: "RASOLOMANANA NADEGE MICHAELLA", parcours: "DPA", cake: 12000, frn: 20000, total: 53231.39, arrondi: 53200, examNum: "80" },
  { nom: "RATOVONANAHARY ROVANIAINA LUCIANA", parcours: "DPA", cake: 15000, frn: 10000, total: 46231.39, arrondi: 46200, examNum: "82" },
  { nom: "RAZAFIARIMALALA MIALISOA NIRINA ORNELLA", parcours: "DPA", cake: 0, frn: 20000, total: 41231.39, arrondi: 41200, examNum: "88" },
  { nom: "RAZAFIARISON STANIS LOUISSETTE", parcours: "DPA", cake: 6000, frn: 20000, total: 47231.39, arrondi: 47200, examNum: "89" },
  { nom: "RAZAFIMAHATRADRAIBE IALINORO HASINA FITAVANA NAMBININTSOA", parcours: "DPA", cake: 9000, frn: 20000, total: 50231.39, arrondi: 50200, examNum: "90" },
  { nom: "SOLOARITSIMBA UMA ELINAH", parcours: "DPA", cake: 12000, frn: 20000, total: 53231.39, arrondi: 53200, examNum: "92" },
  { nom: "RIVOHARILALA FENITRA MITANTSOA", parcours: "DPA", cake: 0, frn: 20000, total: 41231.39, arrondi: 41200, examNum: "91" },
  { nom: "ANDRIANJARISOA NALISOA FANOMEZANA", parcours: "DPA", cake: 12000, frn: 20000, total: 53231.39, arrondi: 53200, examNum: "40" },
  { nom: "RAJOELISON MANUELA JERRY", parcours: "DPA", cake: 12000, frn: 20000, total: 53231.39, arrondi: 53200, examNum: "53" },
  { nom: "RAKOTOARIMANANA MAHENINA FANDRESENA", parcours: "DPA", cake: 0, frn: 20000, total: 41231.39, arrondi: 41200, examNum: "54" },
  { nom: "RAKOTOARIVELOSON ERNEST", parcours: "DPA", cake: 12000, frn: 20000, total: 53231.39, arrondi: 53200, examNum: "55" },
  { nom: "RAKOTONIRINA MAMITIANA ALEX", parcours: "DPA", cake: 0, frn: 20000, total: 41231.39, arrondi: 41200, examNum: "58" },
  { nom: "RANDRIAMARISOA TANJONNY AINA CHRISTOPHER", parcours: "DPA", cake: 12000, frn: 20000, total: 53231.39, arrondi: 53200, examNum: "65" },
  { nom: "RANDRIANARIVONY HERILALAINA ANSELME ANTONIO MARIE", parcours: "DPA", cake: 12000, frn: 20000, total: 53231.39, arrondi: 53200, examNum: "70" },
  { nom: "RANDRIANAINA MENDRIKA FABIEN", parcours: "DPA", cake: 12000, frn: 20000, total: 53231.39, arrondi: 53200, examNum: "73" },
  { nom: "RANDRIANTAHIRY ANDONJATOVO ULRICH", parcours: "DPA", cake: 12000, frn: 20000, total: 53231.39, arrondi: 53200, examNum: "75" },
  { nom: "RASOLOVAO ANTSONIAINA FREDERIC", parcours: "DPA", cake: 12000, frn: 20000, total: 53231.39, arrondi: 53200, examNum: "81" },
  { nom: "ANDRIAMANAMPY ROTA NOMBAMPITAVANA", parcours: "DPA", cake: 12000, frn: 20000, total: 53231.39, arrondi: 53200, uniqueId: "956" },
  { nom: "ANDRIAMITENOVOLA RAMANANJATO HENITSOA SAROBIDY", parcours: "DPA", cake: 0, frn: 20000, total: 41231.39, arrondi: 41200, uniqueId: "3356" },
  { nom: "ANDRIANANDRASANA DIARY HARENTSOA", parcours: "DPA", cake: 15000, frn: 20000, total: 56231.39, arrondi: 56200, uniqueId: "1049" },
  { nom: "ANDRIANARIVELOMALALA ROTA NIRINA ANNA", parcours: "DPA", cake: 0, frn: 20000, total: 41231.39, arrondi: 41200, uniqueId: "4180" },
  { nom: "ANDRIANOELISOA TINA JASYNTHIA ELIAS", parcours: "DPA", cake: 15000, frn: 20000, total: 56231.39, arrondi: 56200, uniqueId: "108" },
  { nom: "ANDRIANTSOA NANDY THALIA", parcours: "DPA", cake: 0, frn: 20000, total: 41231.39, arrondi: 41200, uniqueId: "4339" },
  { nom: "ANDRIARIMANANA FIDINIAINA ILOTIANA FAHASOAVANA", parcours: "DPA", cake: 30000, frn: 20000, total: 71231.39, arrondi: 71200, uniqueId: "670" },
  { nom: "FENOHASINA TEBYH CHANCIA", parcours: "DPA", cake: 12000, frn: 20000, total: 53231.39, arrondi: 53200, uniqueId: "1982" },
  { nom: "FIRINGA FENOSOA NOELINAH", parcours: "DPA", cake: 6000, frn: 10000, total: 37231.39, arrondi: 37200, uniqueId: "1911" },
  { nom: "HERINIRINA FANANTENANA HASINONY MARIE ODETTE", parcours: "DPA", cake: 12000, frn: 10000, total: 43231.39, arrondi: 43200, uniqueId: "3628" },
  { nom: "IANJARIALA ARITSOA SARAH", parcours: "DPA", cake: 15000, frn: 20000, total: 56231.39, arrondi: 56200, uniqueId: "42576" },
  { nom: "NIVOHARIMALALA SANTATRINIANA ISMAELA", parcours: "DPA", cake: 6000, frn: 20000, total: 47231.39, arrondi: 47200, uniqueId: "3608" },
  { nom: "RABARIJAONA IAVO SOA FANIRY", parcours: "DPA", cake: 0, frn: 10000, total: 31231.39, arrondi: 31200, uniqueId: "1419" },
  { nom: "RABARY KANTO LIANTSOA", parcours: "DPA", cake: 0, frn: 10000, total: 31231.39, arrondi: 31200, uniqueId: "4229" },
  { nom: "RABEMANANJARA TATAMO RAVAKY NY ONY NANCY", parcours: "DPA", cake: 12000, frn: 20000, total: 53231.39, arrondi: 53200, uniqueId: "793" },
  { nom: "RABENARIVO TATIANA REVA", parcours: "DPA", cake: 12000, frn: 20000, total: 53231.39, arrondi: 53200, uniqueId: "738" },
  { nom: "RAFANOMEZANTSOA ERICKAH ISRAELAH", parcours: "DPA", cake: 12000, frn: 20000, total: 53231.39, arrondi: 53200, uniqueId: "3135" },
  { nom: "RAHARILALAO AMBOARA MAREVA NY AINA", parcours: "DPA", cake: 9000, frn: 10000, total: 40231.39, arrondi: 40200, uniqueId: "811" },
  { nom: "RAHARIMALALA NOMENA SANDRATRA", parcours: "DPA", cake: 0, frn: 20000, total: 41231.39, arrondi: 41200, uniqueId: "1206" },
  { nom: "RAJHONSON ANDO NY AINA MIRELLA", parcours: "DPA", cake: 6000, frn: 20000, total: 47231.39, arrondi: 47200, uniqueId: "2317" },
  { nom: "RAKOTOARISOA FENO SOAHARY", parcours: "DPA", cake: 12000, frn: 20000, total: 53231.39, arrondi: 53200, uniqueId: "875" },
  { nom: "RAKOTOMALALA MIRANTSOA ERICA", parcours: "DPA", cake: 12000, frn: 20000, total: 53231.39, arrondi: 53200, uniqueId: "3052" },
  { nom: "RAKOTONAINA KRISTIANA VOLASOA CARINE", parcours: "DPA", cake: 12000, frn: 20000, total: 53231.39, arrondi: 53200, uniqueId: "772" },
  { nom: "RAKOTONIRINA RIVA IRINA MISOA", parcours: "DPA", cake: 0, frn: 20000, total: 41231.39, arrondi: 41200, uniqueId: "4250" },
  { nom: "RALANTONIRAINY HOLINJATOVO NDROSO FINOANA", parcours: "DPA", cake: 12000, frn: 20000, total: 53231.39, arrondi: 53200, uniqueId: "3332" },
  { nom: "RAMANGANIRINA FIONONANA LILIANE", parcours: "DPA", cake: 30000, frn: 0, total: 51231.39, arrondi: 51200, uniqueId: "1160" },
  { nom: "RAMBOAMAMPIANINA MALALATIANA", parcours: "DPA", cake: 0, frn: 20000, total: 41231.39, arrondi: 41200, uniqueId: "3822" },
  { nom: "RAMBOASALAMA AINA NARINDRA MAMY VALIAVO", parcours: "DPA", cake: 0, frn: 20000, total: 41231.39, arrondi: 41200, uniqueId: "593" },
  { nom: "RANDRIAMIHAJA TARATRA VALERIA", parcours: "DPA", cake: 12000, frn: 20000, total: 53231.39, arrondi: 53200, uniqueId: "2250" },
  { nom: "RANDRIATSONGAINA ZAFY DANIELLA", parcours: "DPA", cake: 30000, frn: 10000, total: 61231.39, arrondi: 61200, uniqueId: "3847" },
  { nom: "RANIRIARIMANANA LANTOSAHAZA ITOKIANA", parcours: "DPA", cake: 0, frn: 20000, total: 41231.39, arrondi: 41200, uniqueId: "4389" },
  { nom: "RASAMSON NIRY ANDRIAFENOSOA", parcours: "DPA", cake: 6000, frn: 10000, total: 37231.39, arrondi: 37200, uniqueId: "1355" },

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
    // If student types a code, does it match the member's uniqueId OR examNum?
    const idMatches = member.uniqueId && member.uniqueId.toUpperCase() === cleanCodeInput.toUpperCase();
    const examMatches = member.examNum && member.examNum.toUpperCase() === cleanCodeInput.toUpperCase();

    // Either of them must be correct
    if (!idMatches && !examMatches) {
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
