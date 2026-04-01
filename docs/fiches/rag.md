# RAG

## Rappel express

Definition canonique : voir [01-fondamentaux.md](../01-fondamentaux.md).
Cette fiche se concentre surtout sur l'usage concret du concept.

## A quoi sert ce concept

Comprendre le RAG sert a relier les reponses du modele a vos vraies sources (docs, code, runbooks), plutot qu'a sa seule memorisation statistique.

- Pour ancrer les sorties sur des references internes.
- Pour reduire les reponses generiques sur des sujets metier tres specifiques.
- Pour garder des reponses plus a jour sans re-entrainer un modele.
- Pour tracer les sources qui ont alimente la reponse et faciliter la revue.

## Pipeline simple

1. Transformer la requete utilisateur.
2. Rechercher des documents (semantique + filtres).
3. Selectionner les passages utiles.
4. Injecter ces passages dans le contexte.
5. Generer la reponse.

## Quand c'est utile

- Documentation interne volumineuse.
- Base de connaissances produit.
- Repo multi-modules avec conventions fortes.

## Limites

- Si la recuperation est mauvaise, la generation sera mauvaise.
- Le RAG n'elimine pas totalement les hallucinations.

## Bonnes pratiques

- Tracer les sources utilisees.
- Limiter le bruit en reclassant les passages.
- Ajouter des regles de citation dans la sortie.

## Navigation

- Retour a l'index des fiches : [06-fiches-detaillees.md](../06-fiches-detaillees.md)
- Voir aussi le glossaire : [glossaire.md](../glossaire.md)