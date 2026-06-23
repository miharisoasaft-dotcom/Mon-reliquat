import React from "react";
import { motion } from "motion/react";
import { TeamMember, COMMON_EXPENSES } from "../data/teamAccounts";
import { 
  ArrowRight, 
  Wallet, 
  User, 
  Calendar, 
  ArrowUpRight, 
  ArrowDownLeft, 
  Clock, 
  Printer, 
  CheckCircle,
  TrendingUp,
  Award,
  DollarSign
} from "lucide-react";

interface AccountDetailsProps {
  member: TeamMember;
  onSignRequest: () => void;
  onLogout: () => void;
}

export default function AccountDetails({ member, onSignRequest, onLogout }: AccountDetailsProps) {
  const formatAr = (val: number) => {
    return new Intl.NumberFormat("fr-FR", { minimumFractionDigits: 2 }).format(val) + " Ar";
  };

  const formatArInt = (val: number) => {
    return new Intl.NumberFormat("fr-FR", { maximumFractionDigits: 0 }).format(val) + " Ar";
  };

  // Badge properties per Parcours
  const badgeConfig = {
    SP: { bg: "bg-blue-50 text-blue-700 border-blue-200", label: "Special Projects" },
    DA: { bg: "bg-amber-50 text-amber-700 border-amber-200", label: "Data Analytics" },
    DPA: { bg: "bg-rose-50 text-rose-700 border-rose-200", label: "Digital Product Architecture" },
    DPII: { bg: "bg-emerald-50 text-emerald-700 border-emerald-200", label: "Tehnical Engineering & Infrastructure" }
  };

  const parcoursBadge = badgeConfig[member.parcours] || { bg: "bg-slate-50 text-slate-700 border-slate-200", label: "Membre Équipe" };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.35 }}
      className="w-full max-w-4xl mx-auto flex flex-col space-y-6"
    >
      {/* Portlet Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-2 border-b border-slate-100">
        <div>
          <h2 className="text-xl font-sans font-bold text-slate-900 tracking-tight">Tableau de Bord Financier</h2>
          <p className="text-xs text-slate-500 font-medium font-sans">Consulter mon reliquat</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={onLogout}
            className="px-3.5 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-200 rounded-lg transition-all shadow-xs"
          >
            Quitter le compte
          </button>
          <button
            onClick={onSignRequest}
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-all shadow-sm"
          >
            <span>Fiche de paie / Signer</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Hero card & Key balance stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* User identification card */}
        <div className="md:col-span-1 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 p-6 rounded-2xl shadow-md text-white flex flex-col justify-between relative overflow-hidden h-[240px]">
          <div className="absolute top-0 right-0 p-8 transform translate-x-4 -translate-y-4 opacity-5">
            <Wallet className="w-48 h-48" />
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono tracking-widest text-slate-400">CARTE MEMBRE</span>
              <span className="px-2 py-0.5 text-[10px] uppercase tracking-wider font-bold border border-slate-700 rounded-md bg-slate-800/60 text-indigo-300">
                {member.parcours}
              </span>
            </div>

            <div className="space-y-1">
              <h3 className="text-base font-bold uppercase tracking-tight line-clamp-2 pr-2">
                {member.nom}
              </h3>
            </div>
          </div>

          <div className="space-y-1 relative z-10 pt-4 border-t border-slate-800/80">
            <div className="text-[10px] font-mono text-slate-400 tracking-wider">ID COMPTE</div>
            <div className="text-xs font-mono font-medium tracking-wide">
              {`ID-${member.parcours}-${member.nom.substring(0, 3)}-${member.arrondi.toString().substring(0, 3)}`}
            </div>
          </div>
        </div>

        {/* Big Balance displays */}
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Main Rounded Balance */}
          <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-xs flex flex-col justify-between h-[240px]">
            <div className="space-y-2">
              <div className="flex items-center gap-1.5">
                <div className="p-1 px-1.5 bg-emerald-50 text-emerald-600 rounded-lg border border-emerald-100">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <span className="text-xs text-slate-500 font-semibold tracking-wide uppercase font-mono">Net Arrondi à Percevoir</span>
              </div>
              <h4 className="text-3xl font-extrabold text-emerald-600 tracking-tight font-sans pt-3">
                {formatArInt(member.arrondi)}
              </h4>
              <p className="text-xs font-medium text-slate-500 pt-1">
                Net exact : <span className="text-slate-800 font-bold">{formatAr(member.total)}</span>
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-mono">
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3 text-slate-400" /> Session active
              </span>
              <span>2026-06-22</span>
            </div>
          </div>

          {/* Bonus / Compte Propre display */}
          <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-xs flex flex-col justify-between h-[240px]">
            <div className="space-y-3">
              <div className="flex items-center gap-1.5">
                <div className="p-1 px-1.5 bg-indigo-50 text-indigo-600 rounded-lg border border-indigo-100">
                  <Award className="w-4 h-4" />
                </div>
                <span className="text-xs text-slate-500 font-semibold tracking-wide uppercase font-mono">Compte Propre / Bonus</span>
              </div>

              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">Bonus Part Gateau / Cake</span>
                  <span className="text-slate-900 font-bold font-mono">{formatArInt(member.cake)}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">Partenaire FRN</span>
                  <span className="text-slate-900 font-bold font-mono">{formatArInt(member.frn)}</span>
                </div>
                <div className="flex items-center justify-between text-xs pt-1.5 border-t border-slate-50/80">
                  <span className="text-slate-500 font-semibold">Total bonus propre</span>
                  <span className="text-indigo-600 font-bold font-mono text-sm">
                    {formatArInt(member.cake + member.frn)}
                  </span>
                </div>
              </div>
            </div>

            <p className="text-[10px] text-slate-400 font-medium italic">
              Ces primes individuelles s&apos;ajoutent au solde commun global.
            </p>
          </div>
        </div>
      </div>

      {/* Ledgers & Breakdowns */}
      <div className="bg-white border border-slate-200 rounded-2xl shadow-xs overflow-hidden">
        <div className="p-5 border-b border-slate-100 bg-slate-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h3 className="text-sm font-bold text-slate-900 font-sans">Répartition du Compte Commun</h3>
            <p className="text-xs text-slate-500 font-medium">Historique des gains et dépenses partagés entre l&apos;équipe</p>
          </div>
          <span className="self-start sm:self-center px-2.5 py-1 text-xs font-semibold font-mono bg-indigo-50 border border-indigo-100 text-indigo-700 rounded-full">
            Quote-part commune : +21 231,39 Ar
          </span>
        </div>

        <div className="p-0 overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-slate-100 text-[10px] font-mono tracking-wider text-slate-500 bg-slate-50/20">
                <th className="py-3 px-6 font-bold uppercase">Transaction / Catégorie</th>
                <th className="py-3 px-6 font-bold uppercase">Type</th>
                <th className="py-3 px-6 font-bold uppercase text-right">Montant</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50 font-medium text-slate-700">
              {/* Positives */}
              <tr className="hover:bg-slate-50/50">
                <td className="py-2.5 px-6">
                  <div>Invitation</div>
                  <div className="text-[10px] text-slate-400 font-medium font-sans">Allocations budget invitation collective</div>
                </td>
                <td className="py-2.5 px-6">
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-100 rounded px-1.5 py-0.5">
                    <ArrowUpRight className="w-3 h-3" /> CRÉDIT
                  </span>
                </td>
                <td className="py-2.5 px-6 text-right text-emerald-600 font-mono font-bold">
                  +{formatAr(COMMON_EXPENSES.invitation)}
                </td>
              </tr>

              <tr className="hover:bg-slate-50/50">
                <td className="py-2.5 px-6">
                  <div>Partenariat Financier</div>
                  <div className="text-[10px] text-slate-400 font-medium font-sans">Dividendes sponsors & partenaires</div>
                </td>
                <td className="py-2.5 px-6">
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-100 rounded px-1.5 py-0.5">
                    <ArrowUpRight className="w-3 h-3" /> CRÉDIT
                  </span>
                </td>
                <td className="py-2.5 px-6 text-right text-emerald-600 font-mono font-bold">
                  +{formatAr(COMMON_EXPENSES.partenariat)}
                </td>
              </tr>

              <tr className="hover:bg-slate-50/50">
                <td className="py-2.5 px-6">
                  <div>JC</div>
                  <div className="text-[10px] text-slate-400 font-medium font-sans">Fonds communs JC</div>
                </td>
                <td className="py-2.5 px-6">
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-100 rounded px-1.5 py-0.5">
                    <ArrowUpRight className="w-3 h-3" /> CRÉDIT
                  </span>
                </td>
                <td className="py-2.5 px-6 text-right text-emerald-600 font-mono font-bold">
                  +{formatAr(COMMON_EXPENSES.jc)}
                </td>
              </tr>

              <tr className="hover:bg-slate-50/50">
                <td className="py-2.5 px-6">
                  <div>T-Shirt</div>
                  <div className="text-[10px] text-slate-400 font-medium font-sans">Équipements et uniformes</div>
                </td>
                <td className="py-2.5 px-6">
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-100 rounded px-1.5 py-0.5">
                    <ArrowUpRight className="w-3 h-3" /> CRÉDIT
                  </span>
                </td>
                <td className="py-2.5 px-6 text-right text-emerald-600 font-mono font-bold">
                  +{formatAr(COMMON_EXPENSES.tshirt)}
                </td>
              </tr>

              <tr className="hover:bg-slate-50/50">
                <td className="py-2.5 px-6">
                  <div>Sandwich</div>
                  <div className="text-[10px] text-slate-400 font-medium font-sans">Panier repas équipe</div>
                </td>
                <td className="py-2.5 px-6">
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-100 rounded px-1.5 py-0.5">
                    <ArrowUpRight className="w-3 h-3" /> CRÉDIT
                  </span>
                </td>
                <td className="py-2.5 px-6 text-right text-emerald-600 font-mono font-bold">
                  +{formatAr(COMMON_EXPENSES.sandwich)}
                </td>
              </tr>

              <tr className="hover:bg-slate-50/50">
                <td className="py-2.5 px-6">
                  <div>Saint Valentin</div>
                  <div className="text-[10px] text-slate-400 font-medium font-sans">Subventions événementielles Saint Valentin</div>
                </td>
                <td className="py-2.5 px-6">
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-100 rounded px-1.5 py-0.5">
                    <ArrowUpRight className="w-3 h-3" /> CRÉDIT
                  </span>
                </td>
                <td className="py-2.5 px-6 text-right text-emerald-600 font-mono font-bold">
                  +{formatAr(COMMON_EXPENSES.saintValentin)}
                </td>
              </tr>

              <tr className="hover:bg-slate-50/50">
                <td className="py-2.5 px-6">
                  <div>Festival</div>
                  <div className="text-[10px] text-slate-400 font-medium font-sans">Quote-part animations et festival</div>
                </td>
                <td className="py-2.5 px-6">
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-100 rounded px-1.5 py-0.5">
                    <ArrowUpRight className="w-3 h-3" /> CRÉDIT
                  </span>
                </td>
                <td className="py-2.5 px-6 text-right text-emerald-600 font-mono font-bold">
                  +{formatAr(COMMON_EXPENSES.festival)}
                </td>
              </tr>

              <tr className="hover:bg-slate-50/50">
                <td className="py-2.5 px-6">
                  <div>Boisson</div>
                  <div className="text-[10px] text-slate-400 font-medium font-sans">Indemnité de rafraîchissement</div>
                </td>
                <td className="py-2.5 px-6">
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-100 rounded px-1.5 py-0.5">
                    <ArrowUpRight className="w-3 h-3" /> CRÉDIT
                  </span>
                </td>
                <td className="py-2.5 px-6 text-right text-emerald-600 font-mono font-bold">
                  +{formatAr(COMMON_EXPENSES.boisson)}
                </td>
              </tr>

              {/* Negatives */}
              <tr className="hover:bg-slate-50/50 bg-rose-50/10">
                <td className="py-2.5 px-6">
                  <div>Sortie collective</div>
                  <div className="text-[10px] text-slate-400 font-medium font-sans">Dépenses logistiques pique-nique et sortie</div>
                </td>
                <td className="py-2.5 px-6">
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-rose-700 bg-rose-50 border border-rose-100 rounded px-1.5 py-0.5">
                    <ArrowDownLeft className="w-3 h-3" /> DÉDUCTION
                  </span>
                </td>
                <td className="py-2.5 px-6 text-right text-rose-600 font-mono font-bold">
                  {formatAr(COMMON_EXPENSES.sortie)}
                </td>
              </tr>

              <tr className="hover:bg-slate-50/50 bg-rose-50/10">
                <td className="py-2.5 px-6">
                  <div>Concert</div>
                  <div className="text-[10px] text-slate-400 font-medium font-sans">Billetterie et frais de concert collectif</div>
                </td>
                <td className="py-2.5 px-6">
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-rose-700 bg-rose-50 border border-rose-100 rounded px-1.5 py-0.5">
                    <ArrowDownLeft className="w-3 h-3" /> DÉDUCTION
                  </span>
                </td>
                <td className="py-2.5 px-6 text-right text-rose-600 font-mono font-bold">
                  {formatAr(COMMON_EXPENSES.concert)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
}
