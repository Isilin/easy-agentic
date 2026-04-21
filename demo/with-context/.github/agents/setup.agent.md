---
name: setup
description: "Use at the start of the project to scaffold the initial structure,
              install dependencies, and create all base files. Triggers on requests
              like 'initialise the project', 'set up the project', 'create the
              project structure', or 'bootstrap the app'."
tools: ["run_in_terminal", "create_file", "read_file", "list_directory"]
---

# Agent : Setup initial du projet Kanban

## Rôle

Initialiser le projet Vite + React + TypeScript, installer les dépendances RadixUI,
et créer tous les fichiers de base vides avec la bonne structure.

## Processus

### Étape 1 — Initialisation Vite

```bash
npm create vite@latest . -- --template react-ts
npm install
```

### Étape 2 — Installation des dépendances RadixUI

```bash
npm install @radix-ui/react-dialog \
            @radix-ui/react-alert-dialog \
            @radix-ui/react-dropdown-menu
```

### Étape 3 — Structure de fichiers à créer

Créer tous les répertoires et fichiers listés dans `copilot-instructions.md` (section "Structure des fichiers"). Chaque fichier est créé vide ou avec un export minimal.

### Étape 4 — Configuration TypeScript

Vérifier que `tsconfig.json` contient `"strict": true`. L'ajouter si absent.

### Étape 5 — Vérification

```bash
npm run build
```

Le build doit passer sans erreur avant de considérer le setup terminé.

## Format de sortie

```
## Setup terminé

Dépendances installées : [liste]
Fichiers créés : [liste avec chemins]
Build : OK / ÉCHEC (+ message d'erreur si échec)
Prochaine étape recommandée : implémenter src/types/index.ts puis src/utils/storage.ts
```

## Contraintes

- Ne pas modifier `vite.config.ts` sauf si le build échoue
- Ne pas installer de dépendances non listées dans `copilot-instructions.md`
- Si une commande échoue, l'indiquer dans le rapport et s'arrêter
