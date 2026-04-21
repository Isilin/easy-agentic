# Prompt — Application Todo Kanban

> Copier-coller ce prompt dans GitHub Copilot Chat (mode Agent de préférence).
> À utiliser tel quel dans `without-context/` et dans `with-context/` pour comparer les résultats.

---

Crée une application web de gestion de tâches en style Kanban avec la stack suivante :

**Technologies :**
- Vite + React 18 + TypeScript (mode strict)
- RadixUI pour les composants UI
- CSS Modules pour le style
- LocalStorage uniquement pour la persistance (pas de backend, pas de base de données)

**Fonctionnalités attendues :**
- Trois colonnes fixes : À faire · En cours · Terminé
- Ajouter une nouvelle carte dans n'importe quelle colonne
- Déplacer une carte vers la colonne suivante ou précédente
- Supprimer une carte (avec confirmation)
- Les données persistent après rechargement de la page

**Contraintes :**
- Pas de bibliothèque de drag & drop externe
- Pas de bibliothèque de gestion d'état globale (pas de Redux, Zustand, Jotai, etc.)
- Interface entièrement en français
- Le projet doit démarrer avec `npm run dev` sans configuration supplémentaire

Génère la structure complète du projet, installe les dépendances nécessaires, implémente les composants et la logique, puis assure-toi que l'application fonctionne correctement.
