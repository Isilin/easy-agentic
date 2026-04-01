# Agent (.github / .claude)

## Rappel express

Definition canonique : voir [01-fondamentaux.md](../01-fondamentaux.md) et [02-fonctionnement-agentic.md](../02-fonctionnement-agentic.md).
Cette fiche se concentre surtout sur l'usage concret du concept.

## A quoi sert ce concept

Comprendre l'agent sert a passer d'une simple conversation a un vrai flux d'execution.

- Pour decomposer une tache complexe en etapes (analyser, agir, verifier, resumer).
- Pour exploiter les tools au bon moment au lieu de rester dans la speculation.
- Pour standardiser un comportement (meme niveau de rigueur entre sessions).
- Pour cadrer l'autonomie : ce que l'agent peut faire seul et ce qui doit etre valide humainement.

## Convention de fichiers proposee

```text
.github/
  agents/
    reviewer.agent.md
  instructions/
    global.instructions.md

.claude/
  agents/
    reviewer.agent.md
  context/
    project-overview.md
```

## Exemple de fichier agent

```md
---
name: reviewer
description: "Agent de revue de code focalise bugs, regressions, et risques."
tools: ["read_file", "grep_search", "get_errors"]
---

Tu es un agent de revue. Priorise:
1. Bugs fonctionnels
2. Regressions comportementales
3. Risques securite/performance

Ne propose pas de refactor large si non demande.
```

## Sous-agents et delegation

Un sous-agent est un agent appele par un agent principal pour traiter une sous-tache de facon isolee. Voici un exemple de fichier `.agent.md` pour un sous-agent specialise :

```md
---
name: test-verifier
description: "Sous-agent specialise dans la verification de tests apres un correctif.
              A appeler apres toute modification de logique metier."
tools: ["run_tests", "get_errors", "read_file"]
---

Ton role est de verifier que les tests passes en entree continuent de passer
apres le correctif fourni. Ne modifie pas le code source.

Sortie attendue:
- Liste des tests passes
- Liste des tests en echec (avec message d'erreur)
- Verdict : OK ou ECHEC
```

Convention de placement dans le depot :

```text
.github/
  agents/
    reviewer.agent.md          ← agent principal
    test-verifier.agent.md     ← sous-agent specialise

.claude/
  agents/
    reviewer.agent.md
    test-verifier.agent.md
```

Bonnes pratiques pour les sous-agents :

- Donner un objectif unique et une sortie bien definie.
- Restreindre les outils au strict necessaire.
- Ne pas donner acces au contexte global du projet si la tache est locale.
- Documenter dans la description quand et comment l'agent principal doit l'appeler.

## Navigation

- Retour a l'index des fiches : [06-fiches-detaillees.md](../06-fiches-detaillees.md)
- Voir aussi le glossaire : [glossaire.md](../glossaire.md)