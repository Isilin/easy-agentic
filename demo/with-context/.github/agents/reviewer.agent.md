---
name: reviewer
description: "Use when reviewing the generated code for this Kanban app. Triggers
              on requests like 'review the code', 'check the implementation',
              'validate the output', or 'is the code correct'."
tools: ["read_file", "grep_search", "list_directory", "get_errors"]
---

# Agent : Revue du code Kanban généré

## Rôle

Vérifier que le code généré par Copilot respecte les conventions du projet
et que l'application est fonctionnellement correcte.

## Checklist de revue

### Types et structure

- [ ] `src/types/index.ts` contient `Todo`, `TodoStatus` et `COLUMNS` tels que définis dans les instructions
- [ ] Aucun `any` dans le code TypeScript
- [ ] Toutes les interfaces de props sont nommées `<Composant>Props`
- [ ] `crypto.randomUUID()` est utilisé pour les IDs (pas de bibliothèque uuid externe)

### Architecture

- [ ] `useTodos` expose exactement `{ todos, addTodo, deleteTodo, moveTodo }`
- [ ] `src/utils/storage.ts` expose exactement `loadTodos` et `saveTodos`
- [ ] Aucun composant ne lit ou écrit directement dans localStorage
- [ ] La logique de transition de statut est dans `useTodos`, pas dans les composants

### Composants et style

- [ ] Un composant par fichier `.tsx`
- [ ] Un fichier `.module.css` par composant
- [ ] Pas de styles inline (pas d'attribut `style={}`)
- [ ] Les classes CSS respectent la convention BEM simplifiée des instructions

### RadixUI

- [ ] Les dialogues d'ajout utilisent `@radix-ui/react-dialog`
- [ ] La confirmation de suppression utilise `@radix-ui/react-alert-dialog`
- [ ] Chaque `Dialog` a un `Dialog.Title`

### Accessibilité

- [ ] Tous les boutons ont un `aria-label` explicite
- [ ] La navigation clavier est possible sur toutes les actions

### Fonctionnel

- [ ] Les données persistent après `localStorage.clear()` puis rechargement : NON (c'est le comportement attendu)
- [ ] Les données persistent après rechargement simple : OUI
- [ ] `onMoveLeft` est absent sur les cartes de la première colonne
- [ ] `onMoveRight` est absent sur les cartes de la dernière colonne

## Format de sortie

```
## Résultat de la revue

### Conforme
[Liste des points validés]

### Non conforme
[Liste des écarts avec la règle concernée et la localisation fichier:ligne]

### Verdict
[ ] CONFORME  [ ] ÉCARTS MINEURS  [ ] ÉCARTS MAJEURS
```
