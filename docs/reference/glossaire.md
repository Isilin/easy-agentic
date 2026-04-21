# Glossaire

## Agent

Système combinant modèle, contexte, instructions et outils dans une boucle orientée objectif.

## Benchmark

Jeu d'évaluation standardisé pour comparer les modèles sur des tâches spécifiques. HumanEval mesure la génération de code, SWE-bench évalue la résolution d'issues GitHub réelles.

## Contexte

Ensemble des informations effectivement visibles par le modèle au moment de répondre.

## Context

Terme anglais souvent utilisé dans les outils pour désigner le contexte.

## Context compression

Techniques de réduction du contexte quand la fenêtre se sature : résumé glissant (les échanges anciens sont remplacés par un résumé synthétique) et suppression sélective des tours jugés peu pertinents.

## Embeddings

Représentations vectorielles servant notamment à la recherche sémantique.

## Evals

Ensemble de tests permettant de mesurer la qualité et la fiabilité des sorties d'un modèle ou d'un agent de façon reproductible. Voir aussi : LLM-as-judge.

## Extended Thinking

Voir Raisonnement étendu.

## Fenêtre de contexte

Capacité maximale d'information exploitable par le modèle sur une interaction donnée.

## Fine-tuning

Réentraînement partiel d'un modèle sur un corpus spécifique pour modifier son comportement ou son style de façon persistante. Coûteux à mettre à jour contrairement au RAG ou aux instructions.

## Function calling

Mécanique par laquelle un modèle indique qu'il veut appeler un outil externe, en spécifiant le nom et les arguments. L'exécution est réalisée par le système, pas le modèle lui-même.

## Génération structurée

Contrainte appliquée au modèle pour produire une sortie conforme à un schéma (JSON, XML), rendant les sorties parsables et testables de façon fiable.

## Guardrail

Contrainte ou limite imposée à un agent pour restreindre ses actions, par exemple interdire certaines opérations ou exiger une validation humaine au-delà d'un certain seuil de risque.

## Hallucination

Sortie convaincante mais incorrecte ou inventée.

## Human-in-the-loop

Principe de conception qui consiste à maintenir un point de validation ou de décision humain dans une boucle agentique, notamment avant les actions irréversibles.

## IA

Famille de techniques visant à produire des comportements qui semblent intelligents sur certaines tâches.

## IA générative

Sous-ensemble de l'IA qui produit du contenu, par exemple du texte, du code ou des images.

## Instruction

Règle ou contrainte qui oriente le comportement du système.

## LLM

Modèle de langage de grande taille capable de prédire la suite de tokens à partir d'un contexte.

## LLM-as-judge

Technique d'évaluation où un second modèle note la qualité de la sortie du premier selon des critères fournis dans le prompt. Permet d'automatiser une partie du processus d'évaluation.

## MCP

Model Context Protocol, protocole servant à exposer des ressources et des outils à un agent ou à un modèle.

## Mémoire

Informations conservées ou réintroduites entre plusieurs interactions.

## Modèle

Moteur mathématique entraîné pour produire une sortie à partir d'une entrée.

## Modèle fermé

Modèle accessible uniquement via API, dont les poids ne sont pas publics (GPT-4o, Claude, Gemini). Pas de déploiement local possible.

## Modèle ouvert

Modèle dont les poids sont publiés et qui peut être déployé localement ou dans son propre cloud (Llama, Mistral, Qwen). Plus de contrôle sur les données, personnalisable.

## Multi-agent

Architecture où plusieurs agents collaborent pour accomplir une tâche complexe, chacun avec un rôle ou un contexte délimité. Voir aussi : Orchestration.

## Multimodal

Modèle capable de traiter plusieurs types d'entrées : texte, image, audio, vidéo. Permet par exemple d'inclure des captures d'écran dans le contexte pour une analyse visuelle d'erreurs.

## Observabilité

Capacité à inspecter et comprendre le comportement interne d'un système agentique via le tracing, les logs et les métriques. Voir aussi : Tracing.

## Orchestration

Coordination de plusieurs agents par un orchestrateur, qui décide qui fait quoi, dans quel ordre, et comment les résultats sont combinés.

## Prompt

Texte ou ensemble d'instructions et de demandes envoyé au système, au sens large.

## Prompt injection

Attaque ou manipulation qui consiste à introduire des instructions malveillantes dans le contexte (fichier, réponse d'API, commentaire) pour détourner le comportement du modèle.

## RAG

Retrieval-Augmented Generation, approche qui ajoute des informations récupérées au contexte avant génération.

## ReAct

Pattern agentique (Reasoning + Acting) : le modèle raisonne sur la situation, agit via un outil, observe le résultat, puis répète. Formalisé par des frameworks comme LangGraph, AutoGen, Semantic Kernel.

## Raisonnement étendu

Comportement de certains modèles (o1, o3, Claude avec Extended Thinking) qui génèrent une chaîne de réflexion interne avant de répondre. Latence et coût plus élevés, qualité supérieure sur les tâches complexes.

## Sous-agent

Agent appelé par un agent principal (orchestrateur) pour traiter une sous-tâche spécifique avec un contexte et des outils propres.

## SWE-bench

Benchmark évaluant la capacité d'un modèle à résoudre de vraies issues GitHub avec du code. Référence pour comparer les performances des agents de développement.

## System prompt

Couche d'instructions prédéfinies injectées avant la conversation par le produit ou le dépôt. Elle fixe le rôle, le style et les contraintes avant que l'utilisateur n'écrive quoi que ce soit.

## Température

Paramètre qui contrôle la variabilité des réponses du modèle. Une valeur faible donne des réponses prévisibles ; une valeur élevée introduit plus de diversité.

## Tool

Capacité externe appelable par l'agent, comme lire un fichier ou lancer une commande.

## Token

Unité élémentaire manipulée par le modèle.

## Tracing

Enregistrement de chaque étape d'une boucle agentique (inputs, tool calls, outputs, tokens consommés) pour le débogage et l'optimisation. Outils courants : Langfuse, Helicone, Phoenix, Langsmith.

## Workflow

Séquence de travail organisée entre humain, assistant, outils et validations.
