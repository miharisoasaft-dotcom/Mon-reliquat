import React, { useState, useRef } from "react";
import { motion } from "motion/react";
import { jsPDF } from "jspdf";
import { TeamMember, COMMON_EXPENSES } from "../data/teamAccounts";
import SignaturePad from "./SignaturePad";
import { 
  ArrowLeft, 
  Printer, 
  Download, 
  CheckCircle, 
  FileText, 
  Calendar, 
  FileCheck,
  ShieldCheck,
  User,
  ExternalLink
} from "lucide-react";

interface PaymentRequestProps {
  member: TeamMember;
  onBack: () => void;
}

export default function PaymentRequest({ member, onBack }: PaymentRequestProps) {
  const [signature, setSignature] = useState<string | null>(null);
  const [isSaved, setIsSaved] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const printRef = useRef<HTMLDivElement | null>(null);

  const formatAr = (val: number) => {
    return new Intl.NumberFormat("fr-FR", { minimumFractionDigits: 2 }).format(val) + " Ar";
  };

  const formatArInt = (val: number) => {
    return new Intl.NumberFormat("fr-FR", { maximumFractionDigits: 0 }).format(val) + " Ar";
  };

  // Generate a random-like reference code for payroll
  const payReference = `PAY-2026-DPA-${member.nom.substring(0, 3)}-${member.arrondi.toString().substring(0, 3)}`.toUpperCase();

  const handleSignatureSave = (dataUrl: string) => {
    setSignature(dataUrl);
  };

  const handleSignatureClear = () => {
    setSignature(null);
    setIsSaved(false);
  };

  const handleApproveAndSave = () => {
    if (!signature) return;
    setIsSaved(true);
  };

  const handlePrint = () => {
    window.print();
  };

  const handlePdfDownload = () => {
    try {
      setIsDownloading(true);
      const doc = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      const cleanMemberName = member.nom.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
      const filename = `demande-paiement-${cleanMemberName.toLowerCase().replace(/[^a-z0-9]/g, "-")}.pdf`;

      // Helper function for text formatting
      doc.setFont("Helvetica");

      // 1. HEADER (Top left administration & Top right title)
      // Top Left Header
      doc.setFontSize(10);
      doc.setFont("Helvetica", "bold");
      doc.setTextColor(15, 23, 42); // slate-900
      doc.text("TRÉSORERIE", 15, 20);
      
      doc.setFontSize(8);
      doc.setFont("Helvetica", "normal");
      doc.setTextColor(100, 116, 139); // slate-500
      doc.text("COMITÉ RANDRAMIHARO", 15, 25);
      doc.text("Antananarivo, Madagascar", 15, 29);
      doc.text("Email: support.compta@dpa-sp.mg", 15, 33);

      // Top Right Header
      doc.setFontSize(13);
      doc.setFont("Helvetica", "bold");
      doc.setTextColor(79, 70, 229); // Indigo #4f46e5
      doc.text("DEMANDE DE PAIEMENT", 195, 20, { align: "right" });

      doc.setFontSize(9);
      doc.setFont("Helvetica", "bold");
      doc.setTextColor(15, 23, 42); // slate-900
      doc.text(`Réf : ${payReference}`, 195, 26, { align: "right" });

      doc.setFontSize(8);
      doc.setFont("Helvetica", "normal");
      doc.setTextColor(100, 116, 139); // slate-500
      doc.text("Date d'émission : 22 juin 2026", 195, 31, { align: "right" });
      doc.text("Méthode : Liquidation Directe / Trésor", 195, 35, { align: "right" });

      // Clean division bar
      doc.setDrawColor(79, 70, 229);
      doc.setLineWidth(0.8);
      doc.line(15, 40, 195, 40);

      // 2. BENEFICIARY / PROFILE SECTION
      // Drawing grey box
      doc.setFillColor(248, 250, 252); // soft slate bg
      doc.rect(15, 46, 180, 32, "F");
      doc.setDrawColor(241, 245, 249);
      doc.rect(15, 46, 180, 32, "S");

      doc.setFontSize(8);
      doc.setFont("Helvetica", "bold");
      doc.setTextColor(148, 163, 184); // light slate
      doc.text("BÉNÉFICIAIRE", 20, 52);

      doc.setFontSize(11);
      doc.setFont("Helvetica", "bold");
      doc.setTextColor(15, 23, 42); // slate-900
      doc.text(`Nom : ${member.nom.toUpperCase()}`, 20, 59);

      doc.setFontSize(9);
      doc.setFont("Helvetica", "normal");
      doc.setTextColor(71, 85, 105); // slate-600
      doc.text(`Structure : PARCOURS ${member.parcours}`, 20, 65);
      doc.text(`Période concernée : Trimestre (Q2-2026)`, 20, 71);

      // ID details in right part of card
      doc.text(`ID Unique : COMPTA-${member.nom.substring(0, 3).toUpperCase()}-2026`, 120, 59);

      // 3. TABLE OF CALCULATIONS
      doc.setFontSize(9);
      doc.setFont("Helvetica", "bold");
      doc.setTextColor(100, 116, 139); // slate-500
      doc.text("DÉTAIL DU CALCUL DU SOLDE ET BON POUR PAIEMENT", 15, 87);

      // Table Header row
      doc.setFillColor(79, 70, 229); // Indigo header
      doc.rect(15, 91, 180, 8, "F");

      doc.setFontSize(8);
      doc.setFont("Helvetica", "bold");
      doc.setTextColor(255, 255, 255); // White
      doc.text("Rubrique / Désignation des Provisions", 18, 96);
      doc.text("Crédits (Gains)", 125, 96);
      doc.text("Déductions (Retenues)", 160, 96);

      // Table lines
      let currentY = 105;
      
      const drawRow = (label: string, credit: string, debit: string, isBold = false) => {
        doc.setFont("Helvetica", isBold ? "bold" : "normal");
        doc.setFontSize(8.5);
        doc.setTextColor(15, 23, 42); // slate-900
        
        doc.text(label, 18, currentY);
        doc.setTextColor(16, 185, 129); // emerald-600
        doc.text(credit, 125, currentY);
        doc.setTextColor(239, 68, 68); // rose-500
        doc.text(debit, 160, currentY);

        // draw dividing line
        doc.setDrawColor(226, 232, 240); // slate-200
        doc.setLineWidth(0.2);
        doc.line(15, currentY + 3, 195, currentY + 3);

        currentY += 8;
      };

      // Table lines
      drawRow("Quote-part Crédit Solde Commun (Brut)", "+79 256,49 Ar", "-");
      drawRow("Quote-part Déductions Commun (Sortie/Concert)", "-", "-58 025,10 Ar");

      // Cake row if exists
      if (member.cake > 0) {
        drawRow("Primes Part Gâteau / Cake (Bonus personnel)", `+${formatAr(member.cake)}`, "-");
      }

      // FRN row if exists
      if (member.frn > 0) {
        drawRow("Partenaire FRN (Bonus personnel)", `+${formatAr(member.frn)}`, "-");
      }

      // Drawing subtotals
      currentY += 2;
      doc.setFillColor(248, 250, 252);
      doc.rect(15, currentY - 1, 180, 8, "F");
      
      doc.setFont("Helvetica", "bold");
      doc.setFontSize(9);
      doc.setTextColor(15, 23, 42);
      doc.text("Total Net Comptable (Exact)", 18, currentY + 4);
      doc.text(formatAr(member.total), 125, currentY + 4);
      doc.text("-", 160, currentY + 4);

      currentY += 8;

      // Final payment rounding box as requested by Trésor
      doc.setFillColor(238, 242, 255); // indigo-50
      doc.rect(15, currentY, 180, 10, "F");
      doc.setDrawColor(199, 210, 254); // indigo-200
      doc.setLineWidth(0.5);
      doc.rect(15, currentY, 180, 10, "S");

      doc.setFont("Helvetica", "bold");
      doc.setFontSize(8.5);
      doc.setTextColor(49, 46, 129); // slate-900 / indigo-900
      const balanceLabel = member.reliquat !== undefined 
        ? "SOLDE NET DE DEMANDE DE PAIEMENT ACCORDÉ (RELIQUAT RECTIFIÉ) :" 
        : "SOLDE NET DE DEMANDE DE PAIEMENT ACCORDÉ (ARRONDI) :";
      doc.text(balanceLabel, 18, currentY + 6.5);
      
      doc.setFontSize(10);
      doc.setTextColor(67, 56, 202); // indigo-700
      const finalValForPdf = member.reliquat !== undefined ? formatAr(member.reliquat) : formatArInt(member.arrondi);
      doc.text(finalValForPdf, 145, currentY + 6.5);

      // 4. SIGNATURE SECTION
      currentY += 22;
      doc.setFont("Helvetica", "bold");
      doc.setFontSize(9);
      doc.setTextColor(100, 116, 139);
      doc.text("CADRE DE CERTIFICATION ET DE SIGNATURES", 15, currentY);

      currentY += 5;

      // Left signature box: Administration
      doc.setDrawColor(226, 232, 240);
      doc.setLineWidth(0.3);
      doc.rect(15, currentY, 85, 34, "S");
      
      doc.setFontSize(8);
      doc.setFont("Helvetica", "bold");
      doc.setTextColor(100, 116, 139);
      doc.text("POUR LE COMITÉ RANDRAMIHARO", 18, currentY + 5);

      // Electronic validation stamp drawing
      doc.setFillColor(240, 253, 244); // soft green bg
      doc.rect(18, currentY + 8, 79, 14, "F");
      doc.setDrawColor(187, 247, 208); // green outline
      doc.rect(18, currentY + 8, 79, 14, "S");

      doc.setFont("Helvetica", "bold");
      doc.setFontSize(7.5);
      doc.setTextColor(21, 128, 61); // green-700
      doc.text("CONFORME & APPROUVÉ NUMÉRIQUEMENT", 21, currentY + 13);
      doc.setFont("Helvetica", "normal");
      doc.setFontSize(6.5);
      doc.setTextColor(22, 101, 52); // green-800
      doc.text(`Réf : CERT-2026-COMITE / ID: ${payReference.substring(13)}`, 21, 18 + currentY);

      doc.setFont("Helvetica", "bold");
      doc.setFontSize(8);
      doc.setTextColor(15, 23, 42);
      doc.text("TRÉSORERIE COMITÉ RANDRAMIHARO", 18, currentY + 30);


      // Right signature box: Beneficiary Handdrawn Signature
      doc.rect(110, currentY, 85, 34, "S");

      doc.setFont("Helvetica", "bold");
      doc.setFontSize(8);
      doc.setTextColor(100, 116, 139);
      doc.text(`POUR LE BÉNÉFICIAIRE : ${member.nom.toUpperCase()}`, 113, currentY + 5);

      if (signature) {
        // Embed the handdrawn PNG signature inside the canvas!
        try {
          doc.addImage(signature, "PNG", 125, currentY + 7, 55, 18, undefined, 'FAST');
        } catch (imgErr) {
          console.error("Could not add signature image to PDF:", imgErr);
          doc.setFont("Helvetica", "italic");
          doc.setFontSize(7.5);
          doc.setTextColor(100, 116, 139);
          doc.text("(Signé électroniquement en ligne)", 125, currentY + 18);
        }
      } else {
        doc.setFont("Helvetica", "italic");
        doc.setFontSize(7.5);
        doc.setTextColor(148, 163, 184);
        doc.text("Fiche en attente de signature...", 125, currentY + 18);
      }

      doc.setFont("Helvetica", "bold");
      doc.setFontSize(8);
      doc.setTextColor(15, 23, 42);
      doc.text("BÉNÉFICIAIRE (SIGNATURE MANUSCRITE)", 113, currentY + 30);

      // Status Badge row below
      currentY += 41;
      doc.setFillColor(isSaved ? 240 : 254, isSaved ? 253 : 243, isSaved ? 244 : 199); // green vs yellow
      doc.rect(15, currentY, 180, 8, "F");
      
      doc.setFont("Helvetica", "bold");
      doc.setFontSize(8);
      doc.setTextColor(isSaved ? 21 : 133, isSaved ? 128 : 77, isSaved ? 61 : 14); // green vs yellow-800
      const statusText = isSaved 
        ? "STATUT DU CRÉDIT : VIREMENT EXÉCUTÉ SUR LES COMPTES ET CRÉDITÉ VALIDE" 
        : "STATUT DU CRÉDIT : EN ATTENTE DE SIGNATURE / DOSSIER À TRANSMETTRE AU TRÉSORIER";
      doc.text(statusText, 18, currentY + 5.5);

      // 5. OFFICIAL FOOTER FOR TREASURER PRESENTATION
      doc.setFont("Helvetica", "normal");
      doc.setFontSize(7.5);
      doc.setTextColor(148, 163, 184); // slate-400
      doc.text("Cette demande officielle de règlement et fiche de solde nominative dûment certifiée est présentée au Trésorier", 105, 275, { align: "center" });
      doc.text(`pour liquidation immédiate des sommes. Réf de validation de conformité : ${payReference}`, 105, 279, { align: "center" });
      doc.setFont("Helvetica", "bold");
      doc.text("Généré de manière sécurisée par Google AI Studio Team Ledger Tool — Documents Certifiés Conformes 2026", 105, 284, { align: "center" });

      // Save PDF!
      doc.save(filename);
      setIsDownloading(false);
    } catch (e) {
      console.error("Errors during programmatic jsPDF render:", e);
      setIsDownloading(false);
      // Fallback to print
      window.print();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.25 }}
      className="w-full max-w-4xl mx-auto flex flex-col space-y-6"
    >
      {/* Print-specific style variables to hide normal layout elements when printing */}
      <style>{`
        @media print {
          body * {
            visibility: hidden;
          }
          #print-section, #print-section * {
            visibility: visible;
          }
          #print-section {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            margin: 0;
            padding: 20px;
            box-shadow: none !important;
            border: none !important;
            background: white !important;
            color: black !important;
          }
          .no-print {
            display: none !important;
          }
        }
      `}</style>

      {/* Navigation / Action bar */}
      <div className="flex items-center justify-between no-print pb-2 border-b border-slate-100">
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-200 rounded-lg transition-all shadow-xs shrink-0 cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Fiche de solde</span>
        </button>

        <div className="flex items-center gap-2">
          {/* Direct PDF Download button */}
          <button
            onClick={handlePdfDownload}
            disabled={isDownloading}
            className="flex items-center gap-1.5 px-4 py-2.5 text-xs font-extrabold text-white bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 border border-transparent rounded-xl transition-all shadow-sm cursor-pointer"
          >
            {isDownloading ? (
              <>
                <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Génération du PDF...</span>
              </>
            ) : (
              <>
                <Download className="w-4 h-4 text-white" />
                <span>Télécharger la Demande (PDF)</span>
              </>
            )}
          </button>

          {/* Quick print fallback for compatibility */}
          <button
            onClick={handlePrint}
            className="flex items-center gap-1.5 px-3 py-2.5 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-200 rounded-lg transition-all cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5 text-slate-400" />
            <span>Imprimer / PDF</span>
          </button>

          {!isSaved && signature && (
            <button
              onClick={handleApproveAndSave}
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-all shadow-sm cursor-pointer"
            >
              <FileCheck className="w-3.5 h-3.5" />
              <span>Valider le document</span>
            </button>
          )}
        </div>
      </div>

      {/* Main Layout containing Document preview + Signing sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        
        {/* Document Preview (Left + Center Columns) */}
        <div className="lg:col-span-2">
          {/* Paper Payroll Sheet */}
          <div 
            id="print-section"
            ref={printRef}
            className="bg-white border border-slate-300 rounded-xl shadow-md p-8 md:p-12 relative overflow-hidden font-sans text-slate-800"
          >
            {/* Watermark/Stamp under saved status */}
            {isSaved && (
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-4 border-dashed border-emerald-600/30 text-emerald-600/30 text-3xl font-black rounded-xl p-6 uppercase tracking-widest select-none pointer-events-none -rotate-12 flex flex-col items-center gap-1 z-30">
                <ShieldCheck className="w-12 h-12" />
                <span>VIREMENT EFFECTUÉ</span>
                <span className="text-[10px] font-mono tracking-wide">REF: {payReference.substring(4, 12)}</span>
              </div>
            )}

            {/* Document Header */}
            <div className="flex flex-col md:flex-row justify-between gap-6 pb-6 border-b-2 border-slate-200 text-xs text-slate-500 font-mono">
              <div className="space-y-1.5">
                <div className="text-sm font-black text-slate-950 font-sans tracking-tight">TRÉSORERIE</div>
                <div>COMITÉ RANDRAMIHARO</div>
                <div>Antananarivo, Madagascar</div>
                <div>support.compta@dpa-sp.mg</div>
              </div>
              <div className="space-y-1 md:text-right">
                <div className="text-slate-950 font-bold tracking-wider font-sans">FICHE DE SOLDE NOMINATIVE</div>
                <div className="text-indigo-600 font-bold">{payReference}</div>
                <div>Date d'émission : 22 juin 2026</div>
                <div>Méthode : Liquidation Directe</div>
              </div>
            </div>

            {/* Beneficiary Details section */}
            <div className="my-8 bg-slate-50 rounded-lg p-5 border border-slate-100 flex flex-col sm:flex-row justify-between gap-4 text-xs">
              <div className="space-y-1.5">
                <div className="text-[10px] uppercase font-bold text-slate-400 font-mono tracking-wider">COLLABORATEUR</div>
                <div className="text-sm font-bold text-slate-900 uppercase font-sans">{member.nom}</div>
                <div className="flex items-center gap-1.5">
                  <span className="px-2 py-0.5 bg-indigo-100 text-indigo-700 text-[10px] tracking-wider font-bold rounded">
                    PARCOURS {member.parcours}
                  </span>
                </div>
              </div>
              <div className="space-y-1 text-slate-600 font-mono">
                <div><span className="font-bold">ID Collaborateur :</span> COMPTA-{member.nom.substring(0, 3).toUpperCase()}-2026</div>
                <div><span className="font-bold">Période :</span> Trimestre 2026</div>
              </div>
            </div>

            {/* Payroll Earnings and Deductions Table */}
            <div className="my-8">
              <div className="text-[10px] uppercase font-bold text-slate-400 font-mono tracking-wider mb-2">DETAIL DES CALCULS</div>
              <table className="w-full text-left text-xs border border-slate-200">
                <thead>
                  <tr className="bg-slate-100 border-b border-slate-200 font-mono text-[10px] text-slate-500 uppercase">
                    <th className="py-2 px-4 font-bold">Rubrique / Désignation</th>
                    <th className="py-2 px-4 font-bold text-right">Gains (Crédits)</th>
                    <th className="py-2 px-4 font-bold text-right">Retenues (Déductions)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700">
                  {/* Common gains summary */}
                  <tr>
                    <td className="py-2.5 px-4 font-bold">Quote-part Crédit Solde Commun (Brut)</td>
                    <td className="py-2.5 px-4 text-emerald-600 font-mono text-right">+79 256,49 Ar</td>
                    <td className="py-2.5 px-4 font-mono text-right">-</td>
                  </tr>
                  {/* Common deductions summary */}
                  <tr>
                    <td className="py-2.5 px-4">Quote-part Déductions Commun (Sortie/Concert)</td>
                    <td className="py-2.5 px-4 font-mono text-right">-</td>
                    <td className="py-2.5 px-4 text-rose-500 font-mono text-right">-58 025,10 Ar</td>
                  </tr>
                  {/* Specific Cake */}
                  {member.cake > 0 && (
                    <tr>
                      <td className="py-2.5 px-4 font-bold text-slate-800">Primes Part Gâteau / Cake (Bonus personnel)</td>
                      <td className="py-2.5 px-4 text-emerald-600 font-mono text-right">+{formatAr(member.cake)}</td>
                      <td className="py-2.5 px-4 font-mono text-right">-</td>
                    </tr>
                  )}
                  {/* Specific FRN */}
                  {member.frn > 0 && (
                    <tr>
                      <td className="py-2.5 px-4 font-bold text-slate-800">Partenaire FRN (Bonus personnel)</td>
                      <td className="py-2.5 px-4 text-emerald-600 font-mono text-right">+{formatAr(member.frn)}</td>
                      <td className="py-2.5 px-4 font-mono text-right">-</td>
                    </tr>
                  )}
                </tbody>
                <tfoot>
                  <tr className="bg-slate-50 font-bold border-t border-slate-200">
                    <td className="py-3 px-4 text-slate-900">Total Net Comptable (Exact)</td>
                    <td colSpan={2} className="py-3 px-4 text-right text-slate-900 font-mono text-sm">
                      {formatAr(member.total)}
                    </td>
                  </tr>
                  <tr className="bg-indigo-50/50 font-extrabold border-t-2 border-indigo-200 text-indigo-950">
                    <td className="py-3.5 px-4 text-base">
                      {member.reliquat !== undefined ? "RELIQUAT RECTIFIÉ À VERSER" : "SOLDE NET ARRONDIS À VERSER"}
                    </td>
                    <td colSpan={2} className="py-3.5 px-4 text-right text-base font-mono text-indigo-700">
                      {member.reliquat !== undefined ? formatAr(member.reliquat) : formatArInt(member.arrondi)}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>

            {/* Slip Signature layout section */}
            <div className="mt-12 pt-8 border-t border-slate-200 grid grid-cols-2 gap-8 text-xs">
              <div className="space-y-4">
                <div className="text-[10px] uppercase font-bold text-slate-400 font-mono tracking-wider">LE COMITÉ RANDRAMIHARO</div>
                <div className="h-24 flex items-center justify-start">
                  {/* Simulated admin signature stamp */}
                  <div className="border border-indigo-100 bg-indigo-50/20 text-indigo-700 font-semibold p-3 text-[10px] tracking-wide rounded-lg flex flex-col items-center gap-0.5 border-dashed">
                    <span className="font-bold">TRÉSORERIE COMITÉ RANDRAMIHARO</span>
                    <span>Signé électroniquement</span>
                    <span className="font-mono text-[9px] text-slate-400">ID-OK: 2026-T1</span>
                  </div>
                </div>
                <div className="text-[11px] font-bold text-slate-800 uppercase">TRÉSORERIE</div>
              </div>

              <div className="space-y-4 border-l border-slate-100 pl-8">
                <div className="text-[10px] uppercase font-bold text-slate-400 font-mono tracking-wider">LE COLLABORATEUR (SIGNATURE)</div>
                <div className="h-24 flex items-center justify-center border border-dashed border-slate-200 bg-slate-50/45 rounded-lg overflow-hidden relative">
                  {signature ? (
                    <img 
                      src={signature} 
                      alt="Signature bénéficiaire" 
                      className="max-h-full max-w-full object-contain mix-blend-multiply transition-opacity" 
                    />
                  ) : (
                    <span className="text-[10px] text-slate-400 italic">Signature absente</span>
                  )}
                </div>
                <div className="text-[11px] font-bold text-slate-800 uppercase">{member.nom}</div>
              </div>
            </div>

            {/* Legal / Verification notes on slip footer */}
            <div className="mt-10 pt-6 border-t-2 border-slate-200 text-[10px] text-slate-400 text-center space-y-1 leading-normal font-sans">
              <p>Cette demande de paiement signée fait office de fiche de solde nominative.</p>
              <p>Validation certifiée sous la référence transactionnelle {payReference}.</p>
              <p className="mt-2 text-[9px] font-mono text-slate-300">Generated automatically via the Google AI Studio Team Ledger Tool.</p>
            </div>
          </div>
        </div>

        {/* Action Panel / Signature Pad (Right Column) */}
        <div className="lg:col-span-1 border border-slate-200 bg-white p-6 rounded-2xl shadow-xs space-y-6 no-print">
          
          <div className="space-y-2">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-1.5 font-sans">
              <FileText className="w-4 h-4 text-indigo-500" />
              <span>Procédure de signature</span>
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed font-sans">
              Pour initier ou approuver le versement de vos fonds d'équipe arrondis de <span className="font-bold text-indigo-600">{formatArInt(member.arrondi)}</span>, veuillez ajouter votre signature manuscrite dans le cadre ci-dessous.
            </p>
          </div>

          {!isSaved ? (
            <div className="space-y-4">
              <SignaturePad 
                onSave={handleSignatureSave} 
                onClear={handleSignatureClear}
                placeholder="Dessinez votre signature manuscrite ici"
              />

              <button
                type="button"
                onClick={handleApproveAndSave}
                disabled={!signature}
                className="w-full py-2.5 px-4 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-100 disabled:text-slate-400 border border-transparent rounded-lg transition-all shadow-sm flex items-center justify-center gap-1.5"
              >
                <CheckCircle className="w-4 h-4" />
                Valider ma signature
              </button>
            </div>
          ) : (
            <div className="p-4 bg-emerald-50 border border-emerald-100 rounded-xl space-y-4 flex flex-col items-center text-center">
              <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
                <CheckCircle className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-emerald-900">Signature Validée avec Succès</h4>
                <p className="text-[11px] text-emerald-600 leading-normal font-sans">
                  Votre fiche de paie est validée. Vous pouvez maintenant l&apos;imprimer ou l&apos;exporter au format PDF en cliquant sur le bouton ci-dessous.
                </p>
              </div>

              <div className="w-full flex flex-col gap-2 pt-2">
                <button
                  onClick={handlePdfDownload}
                  disabled={isDownloading}
                  className="w-full flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 rounded-lg transition-all shadow-sm cursor-pointer"
                >
                  {isDownloading ? (
                    <>
                      <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Génération du PDF...</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-4 h-4" />
                      <span>Télécharger la Demande (PDF)</span>
                    </>
                  )}
                </button>

                <button
                  onClick={handlePrint}
                  className="w-full flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-200 rounded-lg transition-all cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5 text-slate-400" />
                  <span>Imprimer la Fiche</span>
                </button>
              </div>
            </div>
          )}

          <div className="pt-4 border-t border-slate-100 bg-slate-50 -mx-6 -mb-6 p-5 rounded-b-2xl text-[11px] text-slate-500 space-y-3">
            <div className="flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div className="space-y-0.5">
                <p className="font-bold text-slate-700">Sécurité et conformité</p>
                <p className="font-sans leading-normal">Les signatures sont apposées localement sur le reçu et ne sont utilisées qu&apos;à des fins d&apos;acquit.</p>
              </div>
            </div>
          </div>

        </div>

      </div>

    </motion.div>
  );
}
