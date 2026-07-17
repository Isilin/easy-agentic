# Boucles agentiques

## Pourquoi ce mot est partout

« Loop » est le terme qui sépare un **agent** d'un simple LLM. Un modèle seul répond une fois ; un agent **tourne en boucle** : il agit, observe le résultat, ajuste, recommence jusqu'à atteindre son objectif. Le mot revient partout parce qu'il décrit le mécanisme central de l'agentique.

Mais « loop » est surchargé : il désigne plusieurs choses selon le contexte. Cette fiche range le vocabulaire sur deux axes.

## Deux axes pour ranger n'importe quel « loop »

- **Axe A — qu'est-ce qui tourne ?** (la nature de la boucle)
- **Axe B — comment est-elle cadencée / structurée ?** (le déclenchement)

Les deux sont orthogonaux : une *agent loop* peut être *event-driven*, contenir une *verification loop*, et être optimisée en *hill climbing*. On combine, on n'oppose pas.

## Axe A — ce qui tourne

### Boucle agentique (agent loop, ReAct)

Le cœur. Cycle répété tant que l'objectif n'est pas atteint :

```
observer contexte → décider action → exécuter outil → observer résultat → recommencer
```

`agent loop` = `agentic loop` : mêmes choses, abréviation anglaise. **ReAct** (Reasoning + Acting) en est la formalisation nommée — raisonner, agir, observer, répéter — popularisée par des frameworks comme LangGraph ou AutoGen. Voir aussi : [boucle agentique](../reference/glossaire.md#boucle-agentique), [ReAct](../reference/glossaire.md#react), [Harness](harness.md) (qui fait tourner cette boucle).

### Boucle de vérification (verification loop)

Sous-boucle où l'agent **valide son propre travail** avant de conclure :

```
produire → vérifier (tests / critique / relecture) → si échec, corriger → revérifier
```

Variantes : self-critique (le modèle relit et critique sa sortie), generate-and-test (valider un candidat contre un critère objectif : ça compile ? les tests passent ?), [LLM-as-judge](../reference/glossaire.md#llm-as-judge) en boucle.

Principe clé — le **generator-verifier gap** : vérifier est souvent plus facile que générer. La boucle marche d'autant mieux que le vérificateur est **objectif** (tests, compilateur, schéma) plutôt que le modèle se jugeant lui-même.

### Hill climbing loop

Boucle d'**optimisation vers une métrique**. Chaque itération tente une variation, la garde si le score monte, la rejette sinon :

```
état courant → variation → mesurer le score → meilleur ? garder : rejeter → répéter
```

Empruntée à l'optimisation classique (montée de colline). Usages agentiques : auto-amélioration de prompt piloté par un golden dataset, ou agent qui itère jusqu'à une cible mesurable (couverture de test, lint à zéro, perf).

Risques hérités de l'algorithme : **optimum local** (plafonner sur un pic médiocre faute d'explorer ailleurs) et **overfitting** au jeu d'évaluation si la métrique est trop étroite.

## Axe B — comment c'est cadencé

### Boucle événementielle (event-driven loop)

Sens **architectural**, pas algorithmique. L'agent ne tourne pas en continu : il **dort, puis se réveille sur un événement** (webhook, message en file, fichier modifié, cron, PR ouverte).

| | Boucle synchrone classique | Event-driven |
|---|---|---|
| Déclencheur | Demande utilisateur en direct | Événement externe |
| État entre les tours | En mémoire / session | Persisté, reconstruit au réveil |
| Modèle mental | Conversation | Réacteur / daemon |

Pertinent pour les agents autonomes en production, longue durée (bots, monitoring, agents d'arrière-plan). Implique une gestion d'état explicite ([checkpoint](../reference/glossaire.md#checkpoint)) car l'agent perd son contexte entre deux réveils.

### Human-in-the-loop

Pas une boucle d'exécution, mais un **point d'arrêt humain inséré** dans la boucle : validation avant une action irréversible. L'humain reste dans le circuit de décision. Voir aussi : [human-in-the-loop](../reference/glossaire.md#human-in-the-loop), [Sécurité agentique](securite.md).

### Inner loop / outer loop

Vocabulaire workflow développeur :

- **Inner loop** : cycle rapide code → test → feedback (secondes/minutes). Là où l'IA assiste le plus.
- **Outer loop** : cycle lent commit → CI → review → déploiement (minutes/heures).

Argument courant : les outils IA compriment surtout l'inner loop.

## Carte récapitulative

| Loop | Axe | Ce qui tourne / cadence |
|---|---|---|
| Agent loop / ReAct | A — quoi | Modèle + outils, jusqu'à l'objectif |
| Verification loop | A — quoi | Produire + valider |
| Hill climbing | A — quoi | Variation + score |
| Event-driven | B — cadence | Réveil sur événement |
| Human-in-the-loop | B — cadence | Arrêt humain inséré |
| Inner / outer | B — cadence | Échelle du cycle dev |

## Ce que cela change pour un développeur

- Quand vous lisez « loop », demandez toujours : **qu'est-ce qui tourne, et à quelle échelle ?** Le mot seul est ambigu.
- La qualité d'un agent tient souvent à ses sous-boucles : une *verification loop* avec un vérificateur objectif vaut mieux qu'un modèle plus gros sans contrôle.
- Une boucle non bornée coûte cher et peut diverger : prévoir une condition d'arrêt, un nombre max de tours, un budget de tokens.

## Erreurs fréquentes

- **Confondre les axes** : event-driven n'est pas l'opposé d'agent loop — c'est sa façon d'être déclenché.
- **Vérificateur subjectif** : faire juger le modèle par lui-même sans critère objectif limite le gain de la verification loop.
- **Hill climbing aveugle** : optimiser une métrique étroite produit un agent qui gagne le test mais échoue en réel (overfitting, optimum local).
- **Boucle sans frein** : pas de condition d'arrêt → coût qui explose ou agent qui tourne en rond.
