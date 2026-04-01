# Contexte (Context)

## Rappel express

Definition canonique : voir [01-fondamentaux.md](../01-fondamentaux.md).
Note terminologique : "context" et "contexte" designent ici la meme notion.

## A quoi sert ce concept

Comprendre le contexte sert a controler la qualite des resultats.

- Pour eviter les sorties hors sujet dues a un manque d'information.
- Pour limiter le bruit qui degrade les reponses quand trop de contenu est injecte.
- Pour prioriser les informations critiques : erreurs reelles, contraintes, fichiers cibles.
- Pour reproduire un resultat : a contexte comparable, la qualite devient plus stable.

## Sources de contexte typiques

- message utilisateur ;
- historique recent ;
- fichiers ouverts ;
- sorties d'outils ;
- instructions de depot ;
- documents recuperes (RAG).

## Regle pratique

Un meilleur contexte vaut mieux qu'un plus gros contexte.

## Technique simple de qualite

Avant de demander une solution, fournir :

1. le but ;
2. les contraintes ;
3. le scope de fichiers ;
4. la verification attendue.

## Navigation

- Retour a l'index des fiches : [06-fiches-detaillees.md](../06-fiches-detaillees.md)
- Voir aussi le glossaire : [glossaire.md](../glossaire.md)