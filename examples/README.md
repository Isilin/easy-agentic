# examples/

Fichiers d'exemples à utiliser directement dans VS Code et GitHub Copilot.
Chaque fichier correspond à une notion présentée dans la présentation.

---

## Structure

```
examples/
  copilot-instructions.md          ← instructions Copilot pour toute l'équipe
  instructions/
    repo.instructions.md           ← règles de comportement de l'agent sur le dépôt
  agents/
    reviewer.agent.md              ← agent de revue de code
    test-verifier.agent.md         ← sous-agent vérificateur de tests
  skills/
    api-review/
      SKILL.md                     ← skill de revue d'API (breaking changes)
      checklist.md                 ← checklist associée
  tools/
    allowed-tools.md               ← politique d'usage des outils
  mcp-server-node/
    server.js                      ← serveur MCP Node.js minimal
    package.json
  mcp-server-python/
    server.py                      ← serveur MCP Python minimal
    requirements.txt
```

---

## Comment utiliser ces fichiers

### copilot-instructions.md
Copier à la racine du dépôt sous `.github/copilot-instructions.md`.
Copilot le lira automatiquement pour toutes les interactions sur ce dépôt.

### instructions/repo.instructions.md
Copier dans `.github/instructions/` ou `.claude/instructions/`.
Adapter le contenu aux règles de votre projet.

### agents/*.agent.md
Copier dans `.github/agents/` ou `.claude/agents/`.
Copilot et Claude Code peuvent utiliser ces fichiers pour instancier des agents spécialisés.

### skills/api-review/SKILL.md
Copier dans `.github/skills/api-review/` ou `.claude/skills/api-review/`.
La skill sera découverte automatiquement via la description dans le frontmatter.

### tools/allowed-tools.md
Copier dans `.github/` ou `.claude/tools/`.
Définit les permissions d'usage des outils pour l'agent.

### mcp-server-node/
```bash
cd mcp-server-node
npm install
npm start
```
Puis référencer dans les settings VS Code :
```json
"github.copilot.chat.mcpServers": {
  "example": {
    "command": "node",
    "args": ["/chemin/vers/mcp-server-node/server.js"]
  }
}
```

### mcp-server-python/
```bash
cd mcp-server-python
pip install -r requirements.txt
python server.py
```
Puis référencer dans les settings VS Code :
```json
"github.copilot.chat.mcpServers": {
  "example-py": {
    "command": "python",
    "args": ["/chemin/vers/mcp-server-python/server.py"]
  }
}
```
