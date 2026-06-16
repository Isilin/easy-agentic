# Orchestrateur

## De quoi parle-t-on ?

L'**orchestrateur** est l'agent qui coordonne plusieurs autres agents pour accomplir une tâche complexe. Il décide qui fait quoi, dans quel ordre, et comment les sorties se combinent.

Là où le [harness](harness.md) fait *fonctionner* un agent, l'orchestrateur fait *collaborer* des agents. C'est une couche au-dessus des agents, pas autour d'un modèle.

## Modèles de coordination

- **Séquentiel** : les agents s'exécutent l'un après l'autre, la sortie de l'un devient l'entrée du suivant (analyse → correctif → vérification → synthèse).
- **Parallèle** : plusieurs agents traitent en même temps des parties indépendantes, puis les résultats sont agrégés (backend + frontend + tests).
- **Hiérarchique** : des sous-orchestrateurs gèrent chacun un groupe d'agents spécialisés.

Détail et schémas dans [Orchestration d'agents](../guide/02-fonctionnement.md#orchestration-dagents).

## Orchestrateur ≠ harness

```text
Orchestrateur ......... coordonne
  └─ Agent principal ... tourne dans son harness
       ├─ Sous-agent A . tourne dans son harness
       └─ Sous-agent B . tourne dans son harness
```

Deux faits qui lèvent la confusion :

- L'orchestrateur est **lui-même un agent** : il tourne dans un harness, et ses « outils » sont les [sous-agents](../guide/02-fonctionnement.md#sous-agents) qu'il appelle.
- Chaque sous-agent a **son propre harness**.

Règle simple : **plusieurs agents autonomes coordonnés = orchestration ; un agent qui tourne = harness**.

## Quand c'est utile

- La tâche est trop longue ou complexe pour un contexte unique.
- Différentes parties requièrent des expertises ou des outils distincts.
- On veut paralléliser des traitements indépendants.

## Ce que cela change pour un développeur

- Un orchestrateur n'est pas une brique magique : c'est un agent dont les outils sont d'autres agents. Le concevoir, c'est définir des interfaces claires entre sous-tâches.
- Plus d'agents = plus de points de défaillance. Les erreurs se propagent : une mauvaise sortie en amont contamine les agents en aval.
- Chaque appel de sous-agent consomme du contexte et du temps. Déboguer un système multi-agents est plus difficile qu'un agent unique.

## Erreurs fréquentes

- **Confondre orchestrateur et harness** : croire qu'orchestrer remplace la boucle d'un agent. Non — l'orchestrateur *est* un agent, avec son harness.
- **Orchestrer trop tôt** : découper en plusieurs agents ce qu'un seul agent outillé ferait mieux. La coordination a un coût ; un agent unique reste souvent préférable.
