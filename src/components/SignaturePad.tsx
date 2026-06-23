import React, { useRef, useState, useEffect } from "react";
import { Edit3, Trash2, Check } from "lucide-react";

interface SignaturePadProps {
  onSave: (signatureDataUrl: string) => void;
  onClear: () => void;
  placeholder?: string;
}

export default function SignaturePad({ onSave, onClear, placeholder = "Signez ici avec votre souris ou votre doigt" }: SignaturePadProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [hasSigned, setHasSigned] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Adjust canvas resolution for high-DPI displays
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * 2;
    canvas.height = rect.height * 2;
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;

    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.scale(2, 2);
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.strokeStyle = "#0f172a"; // slate-900
      ctx.lineWidth = 2.5;
    }
  }, []);

  const getCoordinates = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };

    const rect = canvas.getBoundingClientRect();
    ctx: canvas.getContext("2d");

    // Touch support
    if ("touches" in e) {
      if (e.touches.length === 0) return { x: 0, y: 0 };
      return {
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top,
      };
    }

    // Mouse support
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    e.preventDefault();
    const coords = getCoordinates(e);
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.beginPath();
      ctx.moveTo(coords.x, coords.y);
      setIsDrawing(true);
    }
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    e.preventDefault();
    const coords = getCoordinates(e);
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.lineTo(coords.x, coords.y);
      ctx.stroke();
      setHasSigned(true);
    }
  };

  const stopDrawing = () => {
    if (!isDrawing) return;
    setIsDrawing(false);

    const canvas = canvasRef.current;
    if (canvas && hasSigned) {
      // Save signature image
      onSave(canvas.toDataURL("image/png"));
    }
  };

  const clearSignature = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      setHasSigned(false);
      onClear();
    }
  };

  return (
    <div className="w-full flex flex-col space-y-2">
      <div className="flex items-center justify-between text-xs text-slate-500 font-medium px-1">
        <span className="flex items-center gap-1.5 font-mono text-slate-600">
          <Edit3 className="w-3.5 h-3.5 text-indigo-500" />
          SIGNATURE SÉCURISÉE
        </span>
        {hasSigned && (
          <span className="flex items-center gap-1 text-emerald-600 font-medium">
            <Check className="w-3 h-3" /> Signé, prêt à exporter
          </span>
        )}
      </div>

      <div className="relative border-2 border-dashed border-slate-200 hover:border-indigo-200 transition-colors rounded-xl overflow-hidden bg-slate-50/50 h-36">
        <canvas
          ref={canvasRef}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          onTouchStart={startDrawing}
          onTouchMove={draw}
          onTouchEnd={stopDrawing}
          className="absolute inset-0 w-full h-full cursor-crosshair touch-none"
        />

        {!hasSigned && (
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-slate-400 p-4 text-center">
            <p className="text-sm font-medium">{placeholder}</p>
            <p className="text-xs text-slate-400 mt-1">Utilisez votre curseur ou écran tactile</p>
          </div>
        )}
      </div>

      <div className="flex justify-end">
        <button
          type="button"
          onClick={clearSignature}
          disabled={!hasSigned}
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-slate-500 hover:text-rose-600 hover:bg-rose-50 rounded-lg disabled:opacity-40 disabled:hover:text-slate-500 disabled:hover:bg-transparent transition-all font-medium"
        >
          <Trash2 className="w-3.5 h-3.5" />
          Effacer la signature
        </button>
      </div>
    </div>
  );
}
