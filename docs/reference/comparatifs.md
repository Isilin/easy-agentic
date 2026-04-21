# Tableaux comparatifs

Ce fichier centralise les comparaisons entre concepts fréquemment confondus ou mis en opposition.

---

## LLM vs Agent

| | LLM | Agent |
|---|---|---|
| **Ce que c'est** | Modèle de langage qui produit du texte | Système qui orchestre un LLM avec des outils, un contexte et une boucle |
| **Ce qu'il fait** | Prédit la suite probable de tokens | Planifie, agit, vérifie, itère |
| **Mémoire** | Aucune en dehors du contexte courant | Peut avoir accès à une mémoire externe |
| **Actions** | Aucune par lui-même | Peut lire, chercher, modifier, exécuter |
| **Usage typique** | Génération de texte directe | Tâches multi-étapes avec outils |

---

## RAG vs Fine-tuning vs Instructions

| | RAG | Fine-tuning | Instructions |
|---|---|---|---|
| **Où vit la connaissance** | Base documentaire externe | Poids du modèle | Fichier texte dans le dépôt |
| **Mise à jour** | Ajouter un document | Réentraînement | Modifier un fichier |
| **Coût** | Moyen | Élevé | Faible |
| **Persistance** | Externe au modèle | Intégrée au modèle | Injectée au runtime |
| **Idéal pour** | Docs métier, contenu changeant | Style persistant très spécifique | Règles de comportement |

---

## Contexte vs Mémoire

| | Contexte | Mémoire |
|---|---|---|
| **Durée de vie** | Une interaction | Potentiellement persistante |
| **Où** | Fenêtre de contexte du modèle | Base externe, fichier, ou injection |
| **Qui le gère** | L'outil ou le produit | Le système ou l'utilisateur |
| **Limite** | Taille de la fenêtre de contexte | Dépend du stockage externe |
| **Exemple** | Fichiers ouverts, historique courant | Notes entre sessions, préférences |

---

## Prompt vs Instruction

| | Prompt | Instruction |
|---|---|---|
| **Nature** | Demande ponctuelle ou assemblage complet | Règle stable de comportement |
| **Fréquence de changement** | À chaque interaction | Rare, versionnée |
| **Qui l'écrit** | L'utilisateur ou un template | L'équipe ou le produit |
| **Où ça vit** | Dans l'interface ou un `.prompt.md` | Dans `instructions/` |
| **Portée** | La session ou la tâche courante | Toutes les interactions |

---

## Ask vs Edit vs Agent (modes Copilot)

| | Ask | Edit | Agent |
|---|---|---|---|
| **Ce qu'il fait** | Répond, explique, propose | Modifie les fichiers sélectionnés | Explore, agit, enchaîne des étapes |
| **Accès au dépôt** | Ce qu'on lui montre | Fichiers ouverts | Recherche autonome |
| **Modifications fichiers** | Non | Oui, avec validation | Oui, potentiellement plusieurs |
| **Utilisation d'outils** | Non | Limitée | Oui (lecture, recherche, tests...) |
| **Niveau de supervision** | Total | Élevé | Moyen (supervision par étape) |
| **Idéal pour** | Questions, exploration d'idées | Corrections ciblées | Tâches complexes multi-fichiers |

---

## Agent unique vs Orchestration multi-agents

| | Agent unique | Multi-agents orchestrés |
|---|---|---|
| **Complexité** | Simple | Plus élevée |
| **Contexte** | Partagé, peut se saturer | Séparé par agent, plus propre |
| **Spécialisation** | Généraliste | Chaque agent peut être spécialisé |
| **Coordination** | Non requise | Nécessite un orchestrateur |
| **Parallélisme** | Séquentiel | Possible (agents parallèles) |
| **Idéal pour** | Tâches de portée unique | Tâches complexes à plusieurs dimensions |

---

## LLM classique vs Modèle à raisonnement étendu

| | LLM classique | Raisonnement étendu |
|---|---|---|
| **Comportement** | Réponse directe | Chaîne de réflexion interne avant réponse |
| **Latence** | Faible | Élevée |
| **Coût** | Par token de sortie | Tokens de réflexion + sortie |
| **Qualité sur tâches complexes** | Bonne | Supérieure |
| **Qualité sur tâches simples** | Identique | Identique (surcoût inutile) |
| **Exemples** | GPT-4o, Claude 3.5 Sonnet | o1, o3, Claude Extended Thinking |
| **Idéal pour** | Complétions, explications, refactoring | Debugging profond, algorithmes, logique |

---

## Modèles ouverts vs Modèles fermés

| | Modèles ouverts | Modèles fermés |
|---|---|---|
| **Exemples** | Llama 3, Mistral, Qwen, DeepSeek | GPT-4o, Claude, Gemini |
| **Déploiement** | Local ou cloud privé | Via API uniquement |
| **Données** | Restent sur votre infrastructure | Transitent chez le fournisseur |
| **Coût** | Infrastructure + énergie | Par token |
| **Customisation** | Fine-tuning interne possible | Fine-tuning via API (limité) |
| **Idéal pour** | Données sensibles, conformité, expérimentation | Usage général, meilleure qualité |

---

## Outils de dev IA — positionnement

| | Copilot | Claude Code | Cursor | Cline | Aider |
|---|---|---|---|---|---|
| **Intégration** | IDE (VS Code, JetBrains) | Terminal / TUI | IDE fork (VS Code) | Extension VS Code | Terminal (CLI) |
| **Accès dépôt** | Selon mode (Ask/Edit/Agent) | Complet, autonome | Complet | Complet | Complet |
| **Boucle agentique visible** | Partielle | Oui, très lisible | Oui | Oui | Oui |
| **Modèles supportés** | GPT-4o, Claude, Gemini | Claude uniquement | Plusieurs modèles | Plusieurs modèles | Plusieurs modèles |
| **Contrôle utilisateur** | Par mode explicite | Par step ou en continu | Par step | Par step | Par step |
| **Idéal pour** | Intégration IDE fluide | Autonomie agentique | IDE + agent intégré | Extension légère | CLI, scripting, CI |

---

Voir aussi : [Fondamentaux](../guide/01-fondamentaux.md) pour les définitions, [Fonctionnement agentic](../guide/02-fonctionnement.md) pour le fonctionnement en détail.