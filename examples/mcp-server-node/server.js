/**
 * Serveur MCP minimal — exemple pédagogique
 *
 * Ce serveur expose trois outils simples à titre d'illustration.
 * Pour l'utiliser dans VS Code avec GitHub Copilot :
 *   1. `npm install`
 *   2. `npm start`
 *   3. Ajouter dans les settings VS Code :
 *      "github.copilot.chat.mcpServers": {
 *        "example": { "command": "node", "args": ["<chemin>/server.js"] }
 *      }
 *
 * Documentation MCP : https://modelcontextprotocol.io
 */

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { readFileSync, readdirSync, statSync } from "fs";
import { join, resolve } from "path";

const server = new McpServer({
  name: "mcp-server-example",
  version: "1.0.0",
});

// ─── Outil 1 : echo ──────────────────────────────────────────────────────────
// Outil le plus simple possible — utile pour tester que le serveur répond bien.
server.tool(
  "echo",
  "Renvoie le message reçu tel quel. Utile pour tester la connexion.",
  { message: z.string().describe("Le message à renvoyer") },
  async ({ message }) => ({
    content: [{ type: "text", text: `echo: ${message}` }],
  })
);

// ─── Outil 2 : get_env_info ───────────────────────────────────────────────────
// Retourne des informations sur l'environnement Node.js en cours.
server.tool(
  "get_env_info",
  "Retourne la version de Node.js, la plateforme et le répertoire de travail courant.",
  {},
  async () => ({
    content: [
      {
        type: "text",
        text: JSON.stringify(
          {
            nodeVersion: process.version,
            platform: process.platform,
            cwd: process.cwd(),
            uptime: `${Math.round(process.uptime())}s`,
          },
          null,
          2
        ),
      },
    ],
  })
);

// ─── Outil 3 : list_files ─────────────────────────────────────────────────────
// Liste les fichiers d'un répertoire (non récursif).
server.tool(
  "list_files",
  "Liste les fichiers et dossiers d'un répertoire. Non récursif.",
  {
    path: z
      .string()
      .describe("Chemin absolu ou relatif du répertoire à lister"),
  },
  async ({ path: dirPath }) => {
    try {
      const resolved = resolve(dirPath);
      const entries = readdirSync(resolved).map((name) => {
        const fullPath = join(resolved, name);
        const isDir = statSync(fullPath).isDirectory();
        return `${isDir ? "📁" : "📄"} ${name}`;
      });
      return {
        content: [
          {
            type: "text",
            text: `Contenu de ${resolved} :\n\n${entries.join("\n")}`,
          },
        ],
      };
    } catch (err) {
      return {
        content: [{ type: "text", text: `Erreur : ${err.message}` }],
        isError: true,
      };
    }
  }
);

// ─── Démarrage ────────────────────────────────────────────────────────────────
const transport = new StdioServerTransport();
await server.connect(transport);
