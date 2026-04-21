# Agent (.github / .claude)

## Convention de fichiers proposée

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
description: "Agent de revue de code focalisé bugs, régressions, et risques."
tools: ["read_file", "grep_search", "get_errors"]
---

Tu es un agent de revue. Priorise :
1. Bugs fonctionnels
2. Régressions comportementales
3. Risques sécurité/performance

Ne propose pas de refactor large si non demandé.
```

## Sous-agents et délégation

Un sous-agent est un agent appelé par un agent principal pour traiter une sous-tâche de façon isolée. Voici un exemple de fichier `.agent.md` pour un sous-agent spécialisé :

```md
---
name: test-verifier
description: "Sous-agent spécialisé dans la vérification de tests après un correctif.
              À appeler après toute modification de logique métier."
tools: ["run_tests", "get_errors", "read_file"]
---

Ton rôle est de vérifier que les tests passés en entrée continuent de passer
après le correctif fourni. Ne modifie pas le code source.

Sortie attendue :
- Liste des tests passés
- Liste des tests en échec (avec message d'erreur)
- Verdict : OK ou ÉCHEC
```

Convention de placement dans le dépôt :

```text
.github/
  agents/
    reviewer.agent.md          ← agent principal
    test-verifier.agent.md     ← sous-agent spécialisé

.claude/
  agents/
    reviewer.agent.md
    test-verifier.agent.md
```

Bonnes pratiques pour les sous-agents :

- Donner un objectif unique et une sortie bien définie.
- Restreindre les outils au strict nécessaire.
- Ne pas donner accès au contexte global du projet si la tâche est locale.
- Documenter dans la description quand et comment l'agent principal doit l'appeler.
