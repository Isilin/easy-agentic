# MCP (.github / .claude) + serveur Node.js rapide

## Convention de fichiers proposée

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

- docs-server : expose recherche documentaire interne
- repo-server : expose lecture structurée du monorepo
- incident-server : expose timeline incidents

Pour chaque serveur :
1. owner
2. scope des tools
3. permissions
4. SLA
```

## Node.js — serveur MCP minimal (rapide)

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
- Versionner proprement le schéma d'entrée/sortie.
- Isoler les tools à risque.
- Tester la compatibilité avec votre client MCP cible.