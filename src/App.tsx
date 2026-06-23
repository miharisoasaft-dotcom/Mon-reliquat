import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { teamMembers, TeamMember, findMemberByCredentials } from "./data/teamAccounts";
import AccountDetails from "./components/AccountDetails";
import PaymentRequest from "./components/PaymentRequest";
import { 
  Fingerprint, 
  AlertCircle, 
  CheckCircle, 
  Wallet, 
  User, 
  FileSignature, 
  Info,
  ShieldCheck,
  Award,
  BookOpen
} from "lucide-react";

export default function App() {
  const [currentUser, setCurrentUser] = useState<TeamMember | null>(null);
  const [activeTab, setActiveTab] = useState<"balance" | "payroll">("balance");
  
  // Login input states
  const [inputName, setInputName] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [loginError, setLoginError] = useState<string | null>(null);

  const handleLoginAttempt = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError(null);

    const name = inputName.trim();
    const code = verificationCode.trim();

    if (!name) {
      setLoginError("Le nom complet est obligatoire.");
      return;
    }

    if (!code) {
      setLoginError("Vous devez saisir votre ID Unique.");
      return;
    }

    const matched = findMemberByCredentials(name, code);

    if (matched) {
      setCurrentUser(matched);
      setActiveTab("balance");
    } else {
      setLoginError(
        "Échec de l'authentification. Le nom renseigné ne correspond pas à la base de données, ou l'ID Unique est erroné."
      );
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setInputName("");
    setVerificationCode("");
    setLoginError(null);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between font-sans selection:bg-indigo-100 selection:text-indigo-900">
      
      {/* Portlet Header */}
      <header className="bg-white border-b border-slate-200 no-print sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-black tracking-tighter text-sm">
              C
            </div>
            <div>
              <span className="font-bold text-sm text-slate-950 font-sans tracking-tight block">PORTAIL RELIQUAT</span>
              <span className="text-[10px] text-slate-500 font-mono font-medium block">TRÉSORERIE - COMITÉ RANDRAMIHARO</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-mono text-slate-500 font-semibold uppercase">SYSTÈME EN LIGNE</span>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-6 py-8">
        <AnimatePresence mode="wait">
          {!currentUser ? (
            
            /* VERIFICATION FORM STATE */
            <motion.div
              key="login"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="max-w-xl mx-auto flex flex-col space-y-8 py-4 animate-fade-in"
            >
              {/* Marketing message */}
              <div className="text-center space-y-3">
                <span className="px-3 py-1 bg-indigo-50 border border-indigo-100/50 text-indigo-700 text-[10px] uppercase tracking-wider font-extrabold rounded-full font-mono">
                  TRÉSORERIE COMITÉ RANDRAMIHARO
                </span>
                <h1 className="text-3xl font-black text-slate-900 tracking-tight font-sans">
                  Consulter mon reliquat
                </h1>
                <p className="text-sm text-slate-500 font-sans leading-relaxed max-w-md mx-auto">
                  Saisissez votre nom complet accompagné de votre ID unique d'étudiant.
                </p>
              </div>

              {/* Input Form Card */}
              <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6 md:p-8 space-y-6">
                <div className="border-b border-slate-100 pb-4">
                  <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-indigo-600" />
                    Guichet de Contrôle d'Accès
                  </h2>
                  <p className="text-xs text-slate-400 mt-1">
                    Entrez vos accréditations officielles pour lever l'anonymat comptable.
                  </p>
                </div>

                <form onSubmit={handleLoginAttempt} className="space-y-5">
                  
                  {/* Nom complet input */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-slate-400" />
                      Nom complet de l'étudiant
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Ex: ANDRIAMBELOMA FENOSOA BRINDAH"
                        value={inputName}
                        onChange={(e) => setInputName(e.target.value)}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-sans font-medium uppercase placeholder:normal-case"
                      />
                    </div>
                  </div>

                  {/* Single verification field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                      <Fingerprint className="w-3.5 h-3.5 text-slate-400" />
                      ID unique d'étudiant
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: 1284, 4176, 3628..."
                      value={verificationCode}
                      onChange={(e) => setVerificationCode(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-mono font-bold"
                    />
                    
                    {/* Explicit indicator note based on user request */}
                    <p className="text-[11px] font-sans text-amber-800 bg-amber-50 border border-amber-200/55 p-3 rounded-xl mt-2 leading-relaxed selection:bg-amber-100/50">
                      ℹ️ <strong className="font-bold text-amber-950">Indication :</strong> Saisir votre ID unique d'étudiant (par exemple : <span className="font-semibold">3839, 4176 ou 3628</span>) de la liste universitaire 2024-2025.
                    </p>
                  </div>

                  {/* Information block */}
                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-start gap-2.5 text-xs text-slate-600 leading-relaxed">
                    <Info className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                    <div>
                      Pour lever l'accès, le système requiert votre <strong className="text-slate-900">nom complet</strong> ET votre <strong className="text-slate-900">ID unique</strong> correspondant figurant sur le registre.
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-bold text-sm rounded-xl transition-all shadow-sm hover:shadow-md cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Wallet className="w-4 h-4" />
                    Consulter mon solde & Ma fiche de paie
                  </button>

                </form>

                {/* Error message inside layout */}
                {loginError && (
                  <div className="p-4 bg-rose-50 border border-rose-100 text-rose-800 rounded-xl flex gap-3 text-xs leading-relaxed font-sans shadow-xs animate-pulse">
                    <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <p className="font-bold text-rose-950">Erreur d'authentification</p>
                      <p>{loginError}</p>
                    </div>
                  </div>
                )}
              </div>

            </motion.div>
          ) : (
            
            /* CONNECTED VIEW OR PAPERSLIP ROUTE */
            <motion.div
              key="details"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {activeTab === "balance" ? (
                <AccountDetails 
                  member={currentUser} 
                  onSignRequest={() => setActiveTab("payroll")}
                  onLogout={handleLogout}
                />
              ) : (
                <PaymentRequest 
                  member={currentUser} 
                  onBack={() => setActiveTab("balance")}
                />
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Styled platform footer */}
      <footer className="no-print py-6 border-t border-slate-200 text-center font-mono text-[10px] text-slate-400">
        <p>© 2026 TRÉSORERIE COMITÉ RANDRAMIHARO. TOUS DROITS RÉSERVÉS.</p>
      </footer>
    </div>
  );
}
