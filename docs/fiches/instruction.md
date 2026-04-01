# Instruction (.github / .claude)

## Rappel express

Definition canonique : voir [02-fonctionnement-agentic.md](../02-fonctionnement-agentic.md) et [03-outils-ecosysteme.md](../03-outils-ecosysteme.md).
Cette fiche se concentre surtout sur l'usage concret du concept.

## A quoi sert ce concept

Comprendre l'instruction sert a transformer des habitudes implicites en regles partagees.

- Pour imposer des garde-fous de qualite (patchs minimaux, verification obligatoire).
- Pour aligner les sorties avec les conventions du repo.
- Pour eviter de repeter les memes contraintes dans chaque prompt.
- Pour rendre les comportements auditables et maintenables dans le temps.

## Convention de fichiers proposee

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
description: "Regles de modification pour ce depot."
applyTo: "**/*"
---

Regles:
- Favoriser des patches minimaux
- Preserver les APIs publiques existantes
- Verifier les erreurs apres modification
- Ne pas modifier les fichiers generes
```

## Navigation

- Retour a l'index des fiches : [06-fiches-detaillees.md](../06-fiches-detaillees.md)
- Voir aussi le glossaire : [glossaire.md](../glossaire.md)