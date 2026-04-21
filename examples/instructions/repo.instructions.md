---
description: "Règles de modification appliquées à toutes les interactions sur ce dépôt."
applyTo: "**/*"
---

# Instructions du dépôt

## Comportement attendu

- Favoriser des patchs minimaux — ne pas refactoriser au-delà du scope demandé
- Préserver les APIs publiques existantes sauf si leur modification est explicitement demandée
- Vérifier les erreurs (TypeScript, lint, tests) après toute modification
- Ne pas modifier les fichiers générés automatiquement
- Résumer les risques résiduels à la fin d'une modification

## Validation obligatoire

Avant de conclure une modification :
1. Vérifier que le code compile sans erreur TypeScript
2. Vérifier que les tests existants passent toujours
3. Vérifier que le lint ne remonte pas de nouveaux avertissements

## Format de réponse attendu

Pour les modifications de code :
- Expliquer brièvement ce qui a changé et pourquoi
- Signaler si des tests doivent être ajoutés
- Indiquer les effets de bord potentiels

## Zones sensibles

- `src/domain/` : logique métier — toute modification doit être testée unitairement
- `prisma/migrations/` : ne jamais modifier une migration existante, en créer une nouvelle
- `src/infra/auth/` : toute modification doit être revue explicitement

## Ce qu'il ne faut pas faire

- Supprimer du code sans vérifier qu'il n'est pas utilisé ailleurs
- Introduire des dépendances npm sans le signaler
- Modifier `.env.example` sans mettre à jour la documentation
- Committer du code commenté sans explication
