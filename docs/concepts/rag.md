# RAG

## Pipeline simple

1. Transformer la requête utilisateur.
2. Rechercher des documents (sémantique + filtres).
3. Sélectionner les passages utiles.
4. Injecter ces passages dans le contexte.
5. Générer la réponse.

## Quand c'est utile

- Documentation interne volumineuse.
- Base de connaissances produit.
- Dépôt multi-modules avec conventions fortes.

## Limites

- Si la récupération est mauvaise, la génération sera mauvaise.
- Le RAG n'élimine pas totalement les hallucinations.

## Bonnes pratiques

- Tracer les sources utilisées.
- Limiter le bruit en reclassant les passages.
- Ajouter des règles de citation dans la sortie.