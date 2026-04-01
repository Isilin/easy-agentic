# LLM

## Rappel express

Definition canonique : voir [01-fondamentaux.md](../01-fondamentaux.md).
Cette fiche se concentre surtout sur l'usage concret du concept.

## A quoi sert ce concept

Comprendre le LLM sert a savoir ce que vous deleguez vraiment quand vous utilisez un assistant.

- Pour accelerer les taches de texte et code : generation de brouillons, refactoring, explications, tests de base.
- Pour mieux cadrer vos demandes : le LLM repond au contexte fourni, pas a votre intention implicite.
- Pour definir le bon niveau de confiance : une reponse peut etre utile sans etre fiable a 100 %.
- Pour distinguer l'outil du moteur : le produit (Copilot, Claude Code, etc.) ajoute contexte, instructions et tools autour du LLM.

## Comment cela fonctionne

1. Le texte est decoupe en tokens.
2. Le modele calcule des probabilites pour le token suivant.
3. Un mecanisme d'echantillonnage choisit la suite.
4. Le processus se repete jusqu'a la fin de la reponse.

## Ce que cela change pour un developpeur

- Le LLM est excellent pour generer ou transformer du code et du texte.
- Il n'a pas de connaissance garantie de votre repo local sans contexte fourni.
- Il peut produire des sorties plausibles mais fausses.

## Bonnes pratiques

- Donner une demande precise, des contraintes et des fichiers cibles.
- Exiger une verification par outils quand c'est possible.
- Considerer la reponse comme une proposition a valider.

## Erreurs frequentes

- Confondre qualite redactionnelle et exactitude technique.
- Supposer que le modele connait toutes les APIs de votre projet.

## Navigation

- Retour a l'index des fiches : [06-fiches-detaillees.md](../06-fiches-detaillees.md)
- Voir aussi le glossaire : [glossaire.md](../glossaire.md)