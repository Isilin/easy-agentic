# Instruction (.github / .claude)

## Convention de fichiers proposée

```text
.github/
  instructions/
    repo.instructions.md
    frontend.instructions.md

.claude/
  instructions/
    coding-style.instructions.md
```

## Exemple d'instruction

```md
---
description: "Règles de modification pour ce dépôt."
applyTo: "**/*"
---

Règles :
- Favoriser des patchs minimaux
- Préserver les APIs publiques existantes
- Vérifier les erreurs après modification
- Ne pas modifier les fichiers générés
```