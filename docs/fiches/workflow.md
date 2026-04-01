# Workflow (.github / .claude)

## Rappel express

Definition canonique : voir [03-outils-ecosysteme.md](../03-outils-ecosysteme.md).
Cette fiche se concentre surtout sur l'usage concret du concept.

## A quoi sert ce concept

Comprendre le workflow sert a rendre le travail avec l'IA repetable et plus fiable.

- Pour eviter les actions dans le desordre (modifier avant de comprendre).
- Pour avoir des checkpoints explicites (tests, verification, synthese).
- Pour partager une methode commune entre developpeurs.
- Pour reduire les ecarts de qualite selon les personnes ou les sessions.

## Convention de fichiers proposee

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
3. Proposer correctif minimal
4. Lancer tests cibles
5. Resumer impact + risques
```

## Orchestration multi-agents dans un workflow

Un workflow peut coordonner plusieurs agents specialises plutot qu'un agent unique qui ferait tout. L'orchestrateur decompose la tache et delegue chaque partie au bon agent.

Exemple : traitement d'une issue complexe

```text
Orchestrateur (agent principal)
|
├─ Reoit l'issue GitHub
├─ Analyse la description et identifie les composants touches
|
├→ Sous-agent : Investigation
|    Objectif : identifier le code source lie au bug
|    Outils : grep_search, read_file
|    Sortie : liste de fichiers et fonctions concernees
|
├→ Sous-agent : Correctif
|    Objectif : proposer un patch minimal
|    Outils : read_file, apply_patch
|    Entree : sortie du sous-agent Investigation
|    Sortie : diff propose
|
├→ Sous-agent : Verification
|    Objectif : valider que les tests passent
|    Outils : run_tests, get_errors
|    Entree : sortie du sous-agent Correctif
|    Sortie : verdict OK / ECHEC
|
└─ Orchestre la synthese finale et propose le PR
```

Points cles d'un workflow multi-agents bien concu :

- Chaque sous-tache a une interface claire (entree / sortie definie).
- Le contexte de chaque agent est limite a ce dont il a besoin.
- Les agents paralleles sont independants (pas de dependance entre eux).
- L'orchestrateur est responsable de la logique de coordination et du traitement des erreurs.

## Navigation

- Retour a l'index des fiches : [06-fiches-detaillees.md](../06-fiches-detaillees.md)
- Voir aussi le glossaire : [glossaire.md](../glossaire.md)