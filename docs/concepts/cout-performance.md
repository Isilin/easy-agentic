# Coût et performance

## De quoi parle-t-on ?

Tout passe par le **token** : c'est l'unité facturée et l'unité qui remplit la fenêtre de contexte. Maîtriser le coût et la latence d'un système agentique revient largement à maîtriser combien de tokens entrent et sortent, et à quelle fréquence on rappelle le modèle. Voir aussi : [token](../reference/glossaire.md#token), [fenêtre de contexte](../reference/glossaire.md#fenêtre-de-contexte).

## Le budget de tokens

Chaque appel répartit un budget fini entre : system prompt, historique, documents injectés, sortie attendue et marge. Quand la fenêtre sature, il faut élaguer, résumer ou prioriser — pas tout empiler. Voir aussi : [token budget](../reference/glossaire.md#token-budget).

Dans une boucle agentique, le piège est cumulatif : chaque tour réinjecte l'historique et les sorties d'outils. Le contexte grossit, le coût par tour augmente, et la qualité peut se dégrader (voir context rot ci-dessous).

## Prompt caching

Levier le plus rentable et le plus sous-utilisé. Les préfixes de prompt réutilisés d'un appel à l'autre — system prompt, instructions de dépôt, documents stables — peuvent être mis en cache côté fournisseur au lieu d'être recalculés à chaque requête.

- **Coût** : les tokens en cache sont facturés bien moins cher que des tokens recalculés.
- **Latence** : le temps de traitement du préfixe est économisé.
- **Condition** : placer le contenu stable **en tête** du prompt (préfixe), et le variable à la fin.

Voir aussi : [prompt caching](../reference/glossaire.md#prompt-caching).

## Gestion du contexte long

### Context compression

Quand la fenêtre se remplit, réduire l'historique : résumé glissant (remplacer les vieux échanges par une synthèse) et suppression sélective des tours peu pertinents. Voir aussi : [context compression](../reference/glossaire.md#context-compression).

### Context rot

Accumuler du contexte n'est pas neutre : au-delà d'un certain point, l'historique, le bruit et les informations périmées **dégradent** la qualité des réponses. S'ajoute à l'effet « lost in the middle » (les informations au milieu d'un long contexte sont moins bien exploitées). Conclusion pratique : purger et resélectionner vaut mieux qu'empiler. Voir aussi : [context rot](../reference/glossaire.md#context-rot).

## Latence et débit

- **Latence** : délai avant la réponse. Augmentée par les modèles à [raisonnement étendu](extended-thinking.md), les contextes longs, les boucles à nombreux tours.
- **Débit (throughput)** : volume de tokens traités par unité de temps.
- **Streaming** : transmettre la réponse token par token améliore la latence *perçue* et permet d'interrompre une sortie en cours. Voir aussi : [streaming](../reference/glossaire.md#streaming).

## Leviers principaux

| Levier | Effet sur le coût | Effet sur la latence |
|---|---|---|
| **Prompt caching** | ↓↓ sur préfixes stables | ↓ |
| **Élaguer / compresser le contexte** | ↓ moins de tokens en entrée | ↓ |
| **Modèle adapté à la tâche** | ↓ petit modèle sur tâches simples | ↓ |
| **Raisonnement étendu** | ↑ tokens de réflexion facturés | ↑ |
| **Streaming** | neutre | ↓ latence perçue |
| **Limiter les tours de boucle** | ↓ moins d'appels | ↓ |

## Ce que cela change pour un développeur

- Le coût d'un agent n'est pas « le prix du modèle » mais le produit *tokens × appels* sur toute la boucle.
- Choisir un modèle plus petit ou non raisonnant pour les tâches simples est souvent le gain le plus direct.
- Structurer le prompt pour le caching (stable en tête) paie immédiatement sur les usages répétés.

## Erreurs fréquentes

- **Empiler le contexte « au cas où »** : augmente le coût et peut dégrader la qualité (context rot).
- **Utiliser un modèle à raisonnement étendu partout** : latence et coût inutiles sur les tâches simples.
- **Ignorer le caching** : recalculer un gros system prompt à chaque appel gaspille coût et latence.
