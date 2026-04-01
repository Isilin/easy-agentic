# MCP (.github / .claude) + serveur Node.js rapide

## Rappel express

Definition canonique : voir [01-fondamentaux.md](../01-fondamentaux.md), [02-fonctionnement-agentic.md](../02-fonctionnement-agentic.md) et [03-outils-ecosysteme.md](../03-outils-ecosysteme.md).
Cette fiche se concentre surtout sur l'usage concret du concept.

## A quoi sert ce concept

Comprendre MCP sert a brancher proprement vos ressources et actions externes sur les assistants.

- Pour eviter les integrations ad hoc differentes pour chaque outil.
- Pour exposer des ressources internes (docs, APIs, donnees) de maniere coherente.
- Pour mieux controler permissions, scope et observabilite des appels.
- Pour faire evoluer votre ecosysteme agentic avec moins de couplage.

## Convention de fichiers proposee

```text
.github/
  mcp/
    servers.md
    usage-guidelines.md

.claude/
  mcp/
    server-config.example.json
```

## Exemple de registre interne de serveurs MCP

```md
# MCP Servers

- docs-server: expose recherche documentaire interne
- repo-server: expose lecture structuree du monorepo
- incident-server: expose timeline incidents

Pour chaque serveur:
1. owner
2. scope des tools
3. permissions
4. SLA
```

## Node.js - serveur MCP minimal (rapide)

### 1) Initialisation

```bash
mkdir quick-mcp-server
cd quick-mcp-server
npm init -y
npm install @modelcontextprotocol/sdk zod
```

### 2) package.json (ESM)

```json
{
  "name": "quick-mcp-server",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "start": "node server.js"
  },
  "dependencies": {
    "@modelcontextprotocol/sdk": "^1.0.0",
    "zod": "^3.23.8"
  }
}
```

### 3) server.js

```js
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

const server = new McpServer({
  name: "quick-mcp-server",
  version: "1.0.0"
});

server.tool(
  "echo",
  { message: z.string() },
  async ({ message }) => ({
    content: [{ type: "text", text: `echo: ${message}` }]
  })
);

server.tool(
  "sum",
  { a: z.number(), b: z.number() },
  async ({ a, b }) => ({
    content: [{ type: "text", text: String(a + b) }]
  })
);

const transport = new StdioServerTransport();
await server.connect(transport);
```

### 4) Lancement

```bash
npm start
```

## Conseils de production

- Ajouter auth/permissions par outil.
- Logger les appels et erreurs.
- Versionner proprement le schema d'entree/sortie.
- Isoler les tools a risque.
- Tester la compatibilite avec votre client MCP cible.

## Navigation

- Retour a l'index des fiches : [06-fiches-detaillees.md](../06-fiches-detaillees.md)
- Voir aussi le glossaire : [glossaire.md](../glossaire.md)