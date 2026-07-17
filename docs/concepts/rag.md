# RAG

## Pipeline simple

1. Transformer la requête utilisateur.
2. Rechercher des documents (sémantique + filtres).
3. Sélectionner les passages utiles.
4. Injecter ces passages dans le contexte.
5. Générer la réponse.

## Briques du pipeline

| Étape | Brique | Rôle |
|---|---|---|
| Indexation | **Chunking** | Découper les documents en passages de taille maîtrisée (taille, recouvrement, frontières sémantiques). |
| Indexation | **Embeddings** | Transformer chaque passage en vecteur. |
| Stockage | **Vector store** | Base vectorielle interrogeable par proximité sémantique (Pinecone, Qdrant, pgvector…). |
| Récupération | **Top-k** | Nombre de passages remontés par la recherche. |
| Récupération | **Reranking** | Réordonner les passages avec un modèle plus précis pour remonter les plus pertinents en tête. |
| Génération | **Grounding** | Ancrer la réponse sur les passages fournis, avec citations vérifiables. |

La qualité d'un RAG se joue d'abord sur le chunking et le reranking : un mauvais découpage ou un tri trop bruité dégrade tout ce qui suit.

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