# Copilot Instructions — Kanban Todo App

## Stack

- **Build :** Vite 5
- **UI :** React 18, TypeScript strict (`"strict": true` dans tsconfig)
- **Composants :** RadixUI Primitives (`@radix-ui/react-dialog`, `@radix-ui/react-alert-dialog`, `@radix-ui/react-dropdown-menu`)
- **Style :** CSS Modules (un fichier `.module.css` par composant)
- **Persistance :** localStorage uniquement — aucun appel réseau, aucun backend
- **Gestion d'état :** `useState` et `useReducer` uniquement — pas de Redux, Zustand, Jotai ou autre

## Types de données

Utiliser ces types exactement — ne pas les modifier ni les renommer :

```ts
// src/types/index.ts

export type TodoStatus = 'todo' | 'in-progress' | 'done';

export interface Todo {
  id: string;           // uuid généré avec crypto.randomUUID()
  title: string;
  description?: string;
  status: TodoStatus;
  createdAt: string;    // ISO 8601
}

export const COLUMNS: { status: TodoStatus; label: string }[] = [
  { status: 'todo',        label: 'À faire'   },
  { status: 'in-progress', label: 'En cours'  },
  { status: 'done',        label: 'Terminé'   },
];
```

## Structure des fichiers

Respecter cette arborescence exacte :

```
src/
  components/
    KanbanBoard/
      KanbanBoard.tsx
      KanbanBoard.module.css
    KanbanColumn/
      KanbanColumn.tsx
      KanbanColumn.module.css
    KanbanCard/
      KanbanCard.tsx
      KanbanCard.module.css
    AddTodoDialog/
      AddTodoDialog.tsx
      AddTodoDialog.module.css
    DeleteTodoDialog/
      DeleteTodoDialog.tsx
  hooks/
    useTodos.ts           ← CRUD + localStorage
  types/
    index.ts
  utils/
    storage.ts            ← lecture/écriture localStorage
  App.tsx
  main.tsx
```

## Règles de modification

- Un seul composant React par fichier
- Les props de chaque composant sont typées avec une interface dédiée nommée `<Composant>Props`
- Pas de `any` — utiliser `unknown` si le type est indéterminé
- Toujours destructurer les props dans la signature de la fonction
- Pas de logique métier dans les composants — la déléguer à `useTodos`

## LocalStorage

- Clé de stockage : `"kanban-todos"`
- Encapsuler toute la logique de sérialisation/désérialisation dans `src/utils/storage.ts`
- Le hook `useTodos` est le seul endroit qui appelle `storage.ts`

## Accessibilité

- Tous les boutons doivent avoir un `aria-label` explicite
- Les dialogues RadixUI doivent avoir un `Dialog.Title` visible ou un `aria-label`
- La navigation au clavier doit fonctionner sur toutes les actions (ajout, déplacement, suppression)
