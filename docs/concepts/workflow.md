# Workflow (.github / .claude)

## Convention de fichiers proposée

```text
.github/
  workflows/
    ci.yml
  prompts/
    debug-workflow.prompt.md

.claude/
  workflows/
    bugfix-workflow.md
```

## Exemple de workflow markdown

```md
# Bugfix Workflow

1. Reproduire l'erreur
2. Identifier le scope minimal
3. Proposer un correctif minimal
4. Lancer les tests ciblés
5. Résumer impact + risques
```

## Orchestration multi-agents dans un workflow

Un workflow peut coordonner plusieurs agents spécialisés plutôt qu'un agent unique qui ferait tout. L'orchestrateur décompose la tâche et délègue chaque partie au bon agent.

Exemple : traitement d'une issue complexe

```text
Orchestrateur (agent principal)
|
├─ Reçoit l'issue GitHub
├─ Analyse la description et identifie les composants touchés
|
├→ Sous-agent : Investigation
|    Objectif : identifier le code source lié au bug
|    Outils : grep_search, read_file
|    Sortie : liste de fichiers et fonctions concernés
|
├→ Sous-agent : Correctif
|    Objectif : proposer un patch minimal
|    Outils : read_file, apply_patch
|    Entrée : sortie du sous-agent Investigation
|    Sortie : diff proposé
|
├→ Sous-agent : Vérification
|    Objectif : valider que les tests passent
|    Outils : run_tests, get_errors
|    Entrée : sortie du sous-agent Correctif
|    Sortie : verdict OK / ÉCHEC
|
└─ Orchestre la synthèse finale et propose la PR
```

Points clés d'un workflow multi-agents bien conçu :

- Chaque sous-tâche a une interface claire (entrée / sortie définie).
- Le contexte de chaque agent est limité à ce dont il a besoin.
- Les agents parallèles sont indépendants (pas de dépendance entre eux).
- L'orchestrateur est responsable de la logique de coordination et du traitement des erreurs.