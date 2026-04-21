# LLM

## Comment cela fonctionne

1. Le texte est découpé en tokens.
2. Le modèle calcule des probabilités pour le token suivant.
3. Un mécanisme d'échantillonnage choisit la suite.
4. Le processus se répète jusqu'à la fin de la réponse.

## Ce que cela change pour un développeur

- Le LLM est excellent pour générer ou transformer du code et du texte.
- Il n'a pas de connaissance garantie de votre dépôt local sans contexte fourni.
- Il peut produire des sorties plausibles mais fausses.

## Bonnes pratiques

- Donner une demande précise, des contraintes et des fichiers ciblés.
- Exiger une vérification par outils quand c'est possible.
- Considérer la réponse comme une proposition à valider.

## Erreurs fréquentes

- Confondre qualité rédactionnelle et exactitude technique.
- Supposer que le modèle connaît toutes les APIs de votre projet.