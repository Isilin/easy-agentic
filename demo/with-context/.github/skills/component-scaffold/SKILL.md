---
name: component-scaffold
description: "Use when creating a new React component for this Kanban project.
              Triggers on requests like 'create a component', 'add a new component',
              'scaffold a component', or when a new .tsx file needs to be created
              following project conventions."
---

# Skill : Scaffolding de composant

## Objectif

Générer un nouveau composant React en respectant exactement les conventions du projet Kanban.

## Template à appliquer

Pour un composant nommé `MonComposant` :

### `src/components/MonComposant/MonComposant.tsx`

```tsx
import styles from './MonComposant.module.css';

interface MonComposantProps {
  // props ici
}

export function MonComposant({ /* props destructurées */ }: MonComposantProps) {
  return (
    <div className={styles.monComposant}>
      {/* contenu */}
    </div>
  );
}
```

### `src/components/MonComposant/MonComposant.module.css`

```css
.monComposant {
  /* styles de base */
}
```

## Checklist avant de valider

- [ ] L'interface de props est nommée `<Composant>Props`
- [ ] Les props sont destructurées dans la signature
- [ ] Le fichier CSS Module existe avec au moins une classe
- [ ] Pas de `any` dans le fichier
- [ ] Les callbacks reçus en props sont préfixés par `on` (ex: `onDelete`, `onMove`)
- [ ] Les éléments interactifs ont un `aria-label`
- [ ] Le composant est exporté nommément (pas de `export default`)
