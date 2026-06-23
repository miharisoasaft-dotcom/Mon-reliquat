import { GoogleGenAI, Type } from "@google/genai";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";
import { findMatchingMember } from "./src/data/teamAccounts";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Add limit for base64 image uploads
  app.use(express.json({ limit: "15mb" }));

  // API Route - OCR logic for checking candidate ID card and matching name
  app.post("/api/detect-id", async (req, res) => {
    try {
      const { image } = req.body;
      if (!image) {
        return res.status(400).json({ error: "Aucun document d'identité n'a été fourni." });
      }

      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        return res.status(500).json({ 
          error: "La clé de l'API Gemini n'est pas configurée dans les Secrets de l'application." 
        });
      }

      // Initialize Gemini Client
      const ai = new GoogleGenAI({
        apiKey: apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          }
        }
      });

      // Prepare image base64
      const base64Data = image.replace(/^data:image\/\w+;base64,/, "");

      const imagePart = {
        inlineData: {
          mimeType: "image/jpeg",
          data: base64Data,
        },
      };

      const textPart = {
        text: `Tu es un assistant de reconnaissance d'identité. Analyse ce document d'identité (carte d'identité nationale, carte d'étudiant, badge, passeport) et extrais UNIQUEMENT le nom complet de la personne (ex: DURAND Marie ou RAKOTONDRAIBE IALINORO HASINA FITAVANA). Concentre-toi sur les champs de nom (Nom, Prénom, Name, Nom de l'élève) et ignore les autres textes. Retourne les informations sous forme d'un objet JSON avec le champ "name".`,
      };

      // Call Gemini 3.5 Flash for OCR
      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: { parts: [imagePart, textPart] },
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              name: {
                type: Type.STRING,
                description: "Le nom complet trouvé sur la carte d'identité, en majuscules ou tel qu'il apparaît.",
              },
            },
            required: ["name"],
          },
        },
      });

      const textOutput = response.text;
      if (!textOutput) {
        return res.status(500).json({ error: "Aucun texte n'a été renvoyé par le modèle d'IA." });
      }

      const parsed = JSON.parse(textOutput);
      const name = parsed.name ? parsed.name.trim() : "";

      if (!name) {
        return res.status(404).json({ error: "Aucun nom n'a pu être extrait de cette carte d'identité." });
      }

      // Match the member
      const matched = findMatchingMember(name);

      return res.json({
        detectedName: name,
        matched: matched !== null,
        member: matched,
      });

    } catch (error: any) {
      console.error("Error detecting ID:", error);
      return res.status(500).json({ 
        error: error.message || "Une erreur interne est survenue lors de l'analyse du document." 
      });
    }
  });

  // Serve static assets or use Vite dev server
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
