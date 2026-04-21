# Copilot Instructions

Ce fichier est lu automatiquement par GitHub Copilot dans VS Code.
Il s'applique à toutes les interactions de l'équipe avec Copilot sur ce dépôt.

---

## Stack

- **Runtime :** Node.js 20 (LTS)
- **Langage :** TypeScript strict (`"strict": true`)
- **Base de données :** PostgreSQL 15
- **Framework HTTP :** Fastify
- **ORM :** Prisma
- **Tests :** Vitest
- **Validation :** Zod

---

## Conventions de code

- Nommage : `camelCase` pour les variables et fonctions, `PascalCase` pour les classes et types
- Pas de `any` TypeScript — utiliser `unknown` si le type est indéterminé
- Imports : chemin absolu avec alias `@/` (ex: `import { db } from '@/lib/db'`)
- Commentaires en français
- Longueur de ligne max : 100 caractères

---

## Tests

- Un fichier de test par fichier source (`utils.ts` → `utils.test.ts`)
- Les tests sont dans le même répertoire que le fichier source
- Écrire les tests en même temps que le code, pas après
- Couverture minimale attendue : 80 % sur les modules métier
- Utiliser `describe` / `it` (pas `test`)

---

## Règles de modification

- Préférer des patchs minimaux — ne pas refactoriser au-delà du scope demandé
- Ne pas modifier les fichiers générés (`*.generated.ts`, `prisma/client/`)
- Vérifier les erreurs TypeScript et les tests avant de conclure
- Ne pas casser les signatures d'API publiques existantes

---

## Sécurité

- Ne jamais logger des données sensibles (tokens, mots de passe, données personnelles)
- Valider tous les inputs avec Zod avant tout traitement
- Ne pas exposer les messages d'erreur internes en réponse API
- Les variables d'environnement sensibles sont dans `.env` — ne jamais les hardcoder

---

## Architecture

Ce projet suit une architecture en couches :

```
src/
  domain/        ← logique métier pure, sans dépendance externe
  application/   ← cas d'usage, orchestration
  infra/         ← base de données, HTTP, services externes
  shared/        ← utilitaires partagés
```

Ne pas importer `infra/` depuis `domain/`. Les dépendances vont vers le bas.

---

## Commandes utiles

```bash
npm run dev          # démarrage en mode développement
npm run test         # tests unitaires
npm run test:watch   # tests en mode watch
npm run lint         # ESLint
npm run typecheck    # vérification TypeScript sans build
npm run build        # build de production
```
