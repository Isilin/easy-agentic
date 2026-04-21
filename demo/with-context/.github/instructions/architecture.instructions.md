---
description: "Règles d'architecture et de logique métier pour l'application Kanban."
applyTo: "src/**/*.ts,src/**/*.tsx"
---

## Hiérarchie des composants

L'arbre de composants doit respecter cette hiérarchie :

```
App
└── KanbanBoard          ← layout global, récupère les todos via useTodos
    └── KanbanColumn[]   ← une par statut (todo / in-progress / done)
        ├── KanbanCard[] ← une par todo dans la colonne
        └── AddTodoDialog ← bouton + dialogue d'ajout
```

Chaque composant ne reçoit que les données et callbacks dont il a besoin — pas de prop drilling de `useTodos` entier.

## Logique de déplacement

- `KanbanCard` reçoit `onMoveLeft` et `onMoveRight` comme callbacks optionnels
- `onMoveLeft` est `undefined` si la carte est dans la première colonne
- `onMoveRight` est `undefined` si la carte est dans la dernière colonne
- La logique de transition entre statuts est dans `useTodos`, pas dans les composants

Ordre des statuts : `'todo'` → `'in-progress'` → `'done'`

## Hook `useTodos`

Le hook expose exactement cette interface :

```ts
interface UseTodosReturn {
  todos: Todo[];
  addTodo: (title: string, description?: string, status?: TodoStatus) => void;
  deleteTodo: (id: string) => void;
  moveTodo: (id: string, direction: 'left' | 'right') => void;
}
```

La synchronisation avec localStorage se fait dans un `useEffect` déclenché à chaque modification de `todos`.

## Utilitaire storage

`src/utils/storage.ts` expose deux fonctions typées et rien d'autre :

```ts
export function loadTodos(): Todo[]
export function saveTodos(todos: Todo[]): void
```

`loadTodos` retourne `[]` en cas d'erreur de parsing (localStorage corrompu).
