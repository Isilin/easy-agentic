# Tableaux comparatifs

Ce fichier centralise les comparaisons entre concepts frequemment confondus ou mis en opposition.

---

## LLM vs Agent

| | LLM | Agent |
|---|---|---|
| **Ce que c'est** | Modele de langage qui produit du texte | Systeme qui orchestre un LLM avec des outils, un contexte et une boucle |
| **Ce qu'il fait** | Predit la suite probable de tokens | Planifie, agit, verifie, itere |
| **Memoire** | Aucune en dehors du contexte courant | Peut avoir acces a une memoire externe |
| **Actions** | Aucune par lui-meme | Peut lire, chercher, modifier, executer |
| **Usage typique** | Generation de texte directe | Taches multi-etapes avec outils |

---

## RAG vs Fine-tuning vs Instructions

| | RAG | Fine-tuning | Instructions |
|---|---|---|---|
| **Ou vit la connaissance** | Base documentaire externe | Poids du modele | Fichier texte dans le depot |
| **Mise a jour** | Ajouter un document | Reentrainement | Modifier un fichier |
| **Cout** | Moyen | Eleve | Faible |
| **Persistance** | Externe au modele | Integree au modele | Injectee au runtime |
| **Ideal pour** | Docs metier, contenu changeant | Style persistant tres specifique | Regles de comportement |

---

## Contexte vs Memoire

| | Contexte | Memoire |
|---|---|---|
| **Duree de vie** | Une interaction | Potentiellement persistant |
| **Ou** | Fenetre de contexte du modele | Base externe, fichier, ou injection |
| **Qui le gere** | L'outil ou le produit | Le systeme ou l'utilisateur |
| **Limite** | Taille de la fenetre de contexte | Dependant du stockage externe |
| **Exemple** | Fichiers ouverts, historique courant | Notes entre sessions, preferences |

---

## Prompt vs Instruction

| | Prompt | Instruction |
|---|---|---|
| **Nature** | Demande ponctuelle ou assemblage complet | Regle stable de comportement |
| **Frequence de changement** | A chaque interaction | Rare, versionnee |
| **Qui l'ecrit** | L'utilisateur ou un template | L'equipe ou le produit |
| **Ou ca vit** | Dans l'interface ou un `.prompt.md` | Dans `instructions/` |
| **Portee** | La session ou la tache courante | Toutes les interactions |

---

## Ask vs Edit vs Agent (modes Copilot)

| | Ask | Edit | Agent |
|---|---|---|---|
| **Ce qu'il fait** | Repond, explique, propose | Modifie les fichiers selectionnes | Explore, agit, enchaine des etapes |
| **Acces au depot** | Ce qu'on lui montre | Fichiers ouverts | Recherche autonome |
| **Modifications fichiers** | Non | Oui, avec validation | Oui, potentiellement plusieurs |
| **Utilisation d'outils** | Non | Limites | Oui (lecture, recherche, tests...) |
| **Niveau de supervision** | Total | Eleve | Moyen (supervision par etape) |
| **Ideal pour** | Questions, exploration d'idees | Corrections ciblees | Taches complexes multi-fichiers |

---

## Agent unique vs Orchestration multi-agents

| | Agent unique | Multi-agents orchestres |
|---|---|---|
| **Complexite** | Simple | Plus elevee |
| **Contexte** | Partage, peut se saturer | Separe par agent, plus propre |
| **Specialisation** | Generaliste | Chaque agent peut etre specialise |
| **Coordination** | Non requise | Necessite un orchestrateur |
| **Parallelisme** | Sequentiel | Possible (agents paralleles) |
| **Ideal pour** | Taches de portee unique | Taches complexes a plusieurs dimensions |

---

Voir aussi : [01-fondamentaux.md](01-fondamentaux.md) pour les definitions, [02-fonctionnement-agentic.md](02-fonctionnement-agentic.md) pour le fonctionnement en detail.
