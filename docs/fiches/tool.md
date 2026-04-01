# Tool (.github / .claude)

## Rappel express

Definition canonique : voir [01-fondamentaux.md](../01-fondamentaux.md), [02-fonctionnement-agentic.md](../02-fonctionnement-agentic.md) et [03-outils-ecosysteme.md](../03-outils-ecosysteme.md).
Cette fiche se concentre surtout sur l'usage concret du concept.

## A quoi sert ce concept

Comprendre les tools sert a distinguer une reponse "probable" d'une action fondee sur des faits.

- Pour connecter l'agent a l'etat reel du projet (fichiers, erreurs, tests).
- Pour verifier des hypotheses avant de modifier du code.
- Pour automatiser des operations repetitives de facon tracee.
- Pour gerer le risque en limitant les tools sensibles ou destructeurs.

## Convention de fichiers proposee

```text
.github/
  agents/
    fixer.agent.md        # declare un sous-ensemble de tools
  hooks/
    guardrails.json       # enforcement autour des tools

.claude/
  tools/
    allowed-tools.md
```

## Exemple de politique d'usage des tools

```md
# Allowed Tools

Par defaut:
- Autorises: read_file, grep_search, get_errors
- Autorises avec confirmation: apply_patch, run_in_terminal
- Interdits sans demande explicite: commandes destructrices git
```

## Navigation

- Retour a l'index des fiches : [06-fiches-detaillees.md](../06-fiches-detaillees.md)
- Voir aussi le glossaire : [glossaire.md](../glossaire.md)