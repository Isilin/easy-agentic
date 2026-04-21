---
name: api-review
description: "Use when reviewing API changes, breaking changes, route modifications,
              or OpenAPI/Swagger updates. Triggers on mentions of breaking change,
              API compatibility, versioning, endpoint modification, or contract change."
---

# Skill : API Review

## Objectif

Détecter les breaking changes, évaluer l'impact sur la compatibilité ascendante
et proposer des mitigations avant merge.

## Ce qu'on entend par breaking change

- Suppression d'un endpoint existant
- Changement de méthode HTTP (GET → POST)
- Changement du chemin d'un endpoint
- Suppression ou renommage d'un champ de réponse
- Ajout d'un champ requis dans le body de requête
- Changement de type d'un champ existant
- Modification du code de statut HTTP pour un cas nominal

## Ce qui n'est pas un breaking change

- Ajout d'un champ optionnel dans la réponse
- Ajout d'un nouveau endpoint
- Ajout d'un champ optionnel dans le body de requête
- Amélioration du message d'erreur (si le code statut ne change pas)

## Processus

1. Identifier tous les endpoints modifiés
2. Pour chaque endpoint : comparer avant/après sur les critères ci-dessus
3. Évaluer l'impact selon les consommateurs connus (frontend, clients API, webhooks)
4. Proposer une stratégie de migration si nécessaire (versioning, dépréciation, alias)

## Format de sortie attendu

```
## Endpoints analysés
[Liste avec méthode + chemin]

## Breaking changes détectés
[Description + impact + consommateurs affectés]

## Points d'attention
[Changements non bloquants mais à documenter]

## Questions ouvertes
[Ce qui nécessite une clarification]

## Plan de mitigation proposé
[Stratégie : versioning / dépréciation / alias / migration guidée]
```
