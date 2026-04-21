---
description: "Conventions de style pour les CSS Modules de l'application Kanban."
applyTo: "src/**/*.module.css"
---

## Nommage des classes CSS

Utiliser une convention BEM simplifiée adaptée aux CSS Modules :

- Bloc : nom du composant en camelCase → `.kanbanCard`
- Élément : bloc + nom de l'élément → `.kanbanCard__title`, `.kanbanCard__actions`
- Modificateur : bloc + état → `.kanbanCard--dragging`, `.column--empty`

Pas de styles globaux dans les modules — tout est scopé au composant.

## Variables CSS

Déclarer les tokens de design dans `src/index.css` (variables globales) :

```css
:root {
  --color-todo:        #e2e8f0;
  --color-in-progress: #fef3c7;
  --color-done:        #d1fae5;
  --color-surface:     #ffffff;
  --color-border:      #e2e8f0;
  --color-text:        #1e293b;
  --color-text-muted:  #64748b;
  --radius-card:       8px;
  --radius-column:     12px;
  --shadow-card:       0 1px 3px rgba(0,0,0,0.1);
}
```

Les composants utilisent ces variables — pas de valeurs hardcodées pour les couleurs.

## Layout

- `KanbanBoard` : flex row, gap uniforme entre colonnes, scroll horizontal si nécessaire
- `KanbanColumn` : flex column, largeur fixe (280px), hauteur 100%
- `KanbanCard` : fond blanc, bordure, border-radius, ombre légère
- Pas de dépendance à un framework CSS externe (pas de Tailwind, pas de Bootstrap)
