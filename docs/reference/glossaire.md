# Glossaire

## A2A

Agent-to-Agent, protocole d'interopérabilité permettant à des agents de fournisseurs différents de se déléguer des tâches et d'échanger des résultats. Pendant du MCP, qui relie un agent à des outils ; A2A relie des agents entre eux. Voir aussi : MCP, Multi-agent.

## Agent

Système combinant modèle, contexte, instructions et outils dans une boucle orientée objectif.

## Alignment

Ensemble des techniques visant à faire correspondre le comportement d'un modèle aux intentions et valeurs humaines (utilité, honnêteté, innocuité). Le RLHF (Reinforcement Learning from Human Feedback) en est la méthode la plus répandue : le modèle est affiné à partir de préférences humaines sur ses sorties.

## Benchmark

Jeu d'évaluation standardisé pour comparer les modèles sur des tâches spécifiques. HumanEval mesure la génération de code, SWE-bench évalue la résolution d'issues GitHub réelles.

## Boucle agentique

Cycle répété au cœur d'un agent : observer le contexte, décider d'une action, exécuter un outil, observer le résultat, recommencer jusqu'à atteindre l'objectif ou une condition d'arrêt. Aussi appelée *agent loop*. Voir aussi : ReAct, Harness, et la fiche [Boucles agentiques](../concepts/boucles.md).

## Boucle de vérification

Sous-boucle où l'agent valide son propre travail avant de conclure : produire, vérifier (tests, critique, relecture), corriger si échec, revérifier. D'autant plus efficace que le vérificateur est objectif (tests, compilateur) plutôt que le modèle se jugeant lui-même. Voir aussi : LLM-as-judge, [Boucles agentiques](../concepts/boucles.md).

## Boucle événementielle

Architecture où l'agent ne tourne pas en continu mais se réveille sur un événement (webhook, file de messages, fichier modifié, cron). Implique de persister l'état entre les réveils. Voir aussi : Checkpoint, [Boucles agentiques](../concepts/boucles.md).

## Chain-of-thought

Technique de prompt consistant à demander au modèle d'expliciter son raisonnement étape par étape avant de conclure, ce qui améliore les tâches multi-étapes. À distinguer du raisonnement étendu, où la chaîne est native et non demandée. Voir aussi : Raisonnement étendu.

## Checkpoint

Sauvegarde d'un état intermédiaire d'une exécution agentique permettant de reprendre ou de revenir en arrière (rollback) sans tout recommencer. Utile pour les boucles longues ou risquées.

## Chunking

Découpage de documents en passages de taille maîtrisée avant indexation dans un système RAG. La stratégie de découpage (taille, recouvrement, frontières sémantiques) conditionne fortement la qualité de la récupération. Voir aussi : RAG, Embeddings.

## Confabulation

Terme parfois préféré à « hallucination » : le modèle comble un manque d'information par une production plausible mais infondée, sans intention de tromper. Décrit le mécanisme plus précisément qu'« hallucination ». Voir aussi : Hallucination.

## Contexte

Ensemble des informations effectivement visibles par le modèle au moment de répondre.

## Context

Terme anglais souvent utilisé dans les outils pour désigner le contexte.

## Context compression

Techniques de réduction du contexte quand la fenêtre se sature : résumé glissant (les échanges anciens sont remplacés par un résumé synthétique) et suppression sélective des tours jugés peu pertinents.

## Context rot

Dégradation progressive de la qualité des réponses à mesure que le contexte se remplit d'historique, de bruit ou d'informations périmées. Justifie de purger et resélectionner le contexte plutôt que de l'accumuler. Voir aussi : Context compression, Fenêtre de contexte.

## Déterminisme et reproductibilité

Capacité à obtenir la même sortie pour la même entrée. Une température à 0 réduit la variabilité mais ne garantit pas un déterminisme strict (parallélisme matériel, mises à jour de modèle). À considérer pour les tests et les évals reproductibles. Voir aussi : Température, Evals.

## Distillation

Procédé d'entraînement d'un petit modèle (élève) à imiter un gros modèle (professeur), pour obtenir des performances proches à moindre coût d'inférence. Voir aussi : Quantization, Fine-tuning.

## Embeddings

Représentations vectorielles servant notamment à la recherche sémantique.

## Evals

Ensemble de tests permettant de mesurer la qualité et la fiabilité des sorties d'un modèle ou d'un agent de façon reproductible. Voir aussi : LLM-as-judge.

## Extended Thinking

Voir Raisonnement étendu.

## Fallback

Comportement de repli déclenché quand une action échoue : modèle de secours, outil alternatif, réponse dégradée. Avec retry et timeout, fait partie des mécanismes de robustesse d'une boucle agentique. Voir aussi : Retry, Boucle agentique.

## Fenêtre de contexte

Capacité maximale d'information exploitable par le modèle sur une interaction donnée.

## Few-shot et zero-shot

Modes de prompt selon le nombre d'exemples fournis. Zero-shot : aucune démonstration, seulement la consigne. Few-shot : quelques exemples d'entrée/sortie placés dans le prompt pour cadrer le format et le comportement attendus. Voir aussi : Prompt.

## Fine-tuning

Réentraînement partiel d'un modèle sur un corpus spécifique pour modifier son comportement ou son style de façon persistante. Coûteux à mettre à jour contrairement au RAG ou aux instructions.

## Function calling

Mécanique par laquelle un modèle indique qu'il veut appeler un outil externe, en spécifiant le nom et les arguments. L'exécution est réalisée par le système, pas le modèle lui-même.

## Génération structurée

Contrainte appliquée au modèle pour produire une sortie conforme à un schéma (JSON, XML), rendant les sorties parsables et testables de façon fiable.

## Grounding

Ancrage d'une réponse sur des sources fournies dans le contexte plutôt que sur la seule mémoire statistique du modèle, souvent assorti de citations vérifiables. Réduit les confabulations. Voir aussi : RAG, Confabulation.

## Guardrail

Contrainte ou limite imposée à un agent pour restreindre ses actions, par exemple interdire certaines opérations ou exiger une validation humaine au-delà d'un certain seuil de risque.

## Hallucination

Sortie convaincante mais incorrecte ou inventée.

## Handoff

Passage de relais d'un agent à un autre, transférant la tâche et le contexte utile. Brique de base des architectures multi-agents et de l'orchestration. Voir aussi : Orchestration, Multi-agent.

## Harness

Échafaudage d'exécution qui enveloppe le modèle et le transforme en agent : boucle de décision, sélection du contexte, exécution des outils, garde-fous et permissions. Fourni par le produit (Claude Code, Copilot, Cursor…), pas par le modèle seul.

## Human-in-the-loop

Principe de conception qui consiste à maintenir un point de validation ou de décision humain dans une boucle agentique, notamment avant les actions irréversibles.

## IA

Famille de techniques visant à produire des comportements qui semblent intelligents sur certaines tâches.

## IA générative

Sous-ensemble de l'IA qui produit du contenu, par exemple du texte, du code ou des images.

## Hill climbing

Boucle d'optimisation vers une métrique : tenter une variation, la garder si le score monte, la rejeter sinon, répéter. En agentique, sert à l'auto-amélioration de prompt ou à l'itération vers une cible mesurable. Risques : optimum local et overfitting au jeu d'évaluation. Voir aussi : Evals, [Boucles agentiques](../concepts/boucles.md).

## Idempotence

Propriété d'une action produisant le même effet qu'elle soit exécutée une ou plusieurs fois. Rend les outils rejouables sans risque, condition importante pour les mécanismes de retry. Voir aussi : Retry, Tool.

## Inner loop / outer loop

Échelles du cycle de développement. Inner loop : cycle rapide code → test → feedback (secondes/minutes), là où l'IA assiste le plus. Outer loop : cycle lent commit → CI → review → déploiement. Voir aussi : [Boucles agentiques](../concepts/boucles.md).

## Instruction

Règle ou contrainte qui oriente le comportement du système.

## Jailbreak

Manipulation du prompt visant à contourner les garde-fous d'alignement d'un modèle pour lui faire produire des sorties interdites. À distinguer de la prompt injection, qui détourne le comportement via le contexte plutôt que via les consignes de sécurité. Voir aussi : Prompt injection, Alignment.

## Knowledge cutoff

Date au-delà de laquelle un modèle n'a pas été entraîné : il ignore les événements et publications postérieurs. Explique pourquoi un modèle peut « ne pas connaître » une bibliothèque récente sans recourir à un outil ou au RAG.

## Latence et débit

Latence : temps avant d'obtenir une réponse. Débit (throughput) : volume de tokens traités par unité de temps. Les modèles à raisonnement étendu augmentent la latence ; le streaming améliore la latence perçue. Voir aussi : Streaming, Raisonnement étendu.

## LLM

Modèle de langage de grande taille capable de prédire la suite de tokens à partir d'un contexte.

## LLM-as-judge

Technique d'évaluation où un second modèle note la qualité de la sortie du premier selon des critères fournis dans le prompt. Permet d'automatiser une partie du processus d'évaluation.

## MCP

Model Context Protocol, protocole servant à exposer des ressources et des outils à un agent ou à un modèle.

## Mémoire

Informations conservées ou réintroduites entre plusieurs interactions.

## Mixture of Experts (MoE)

Architecture où le modèle est composé de plusieurs sous-réseaux (« experts ») dont seul un sous-ensemble est activé par token. Permet de très grands modèles avec un coût d'inférence réduit par rapport à un modèle dense équivalent.

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

## Orchestrateur

Agent qui coordonne plusieurs autres agents : il décide qui fait quoi, dans quel ordre, et comment les sorties se combinent. À distinguer du harness, qui entoure un seul modèle.

## Orchestration

Coordination de plusieurs agents par un orchestrateur, qui décide qui fait quoi, dans quel ordre, et comment les résultats sont combinés.

## Paramètres d'échantillonnage

Réglages qui contrôlent la sélection du prochain token : température (variabilité), top-p (noyau de probabilité cumulée), top-k (nombre de candidats retenus), max tokens (longueur maximale), stop sequences (chaînes qui interrompent la génération). Voir aussi : Température.

## Planning

Étape où un agent décompose un objectif en sous-tâches ordonnées avant d'agir. Peut être explicite (plan écrit puis exécuté) ou implicite dans la boucle. Voir aussi : Boucle agentique, Sous-agent.

## Prompt

Texte ou ensemble d'instructions et de demandes envoyé au système, au sens large.

## Prompt caching

Mise en cache des préfixes de prompt réutilisés (system prompt, instructions, documents stables) pour éviter de les recalculer à chaque appel. Réduit fortement le coût et la latence sur les contextes longs et répétés. Voir aussi : Token, Latence et débit.

## Prompt injection

Attaque ou manipulation qui consiste à introduire des instructions malveillantes dans le contexte (fichier, réponse d'API, commentaire) pour détourner le comportement du modèle.

## Quantization

Réduction de la précision numérique des poids d'un modèle (par exemple 16 bits → 4 bits) pour diminuer son empreinte mémoire et permettre un déploiement local, au prix d'une légère perte de qualité. Voir aussi : Modèle ouvert, Distillation.

## RAG

Retrieval-Augmented Generation, approche qui ajoute des informations récupérées au contexte avant génération.

## ReAct

Pattern agentique (Reasoning + Acting) : le modèle raisonne sur la situation, agit via un outil, observe le résultat, puis répète. Formalisé par des frameworks comme LangGraph, AutoGen, Semantic Kernel.

## Raisonnement étendu

Comportement de certains modèles (o1, o3, Claude avec Extended Thinking) qui génèrent une chaîne de réflexion interne avant de répondre. Latence et coût plus élevés, qualité supérieure sur les tâches complexes.

## Rate limit

Limite imposée par un fournisseur sur le nombre de requêtes ou de tokens par unité de temps. Au-delà, les appels sont rejetés ou retardés, ce qui impose des stratégies de retry et de back-off. Voir aussi : Retry.

## Red teaming

Démarche offensive consistant à attaquer délibérément un modèle ou un agent (jailbreak, prompt injection, cas limites) pour découvrir ses failles avant la mise en production. Voir aussi : Jailbreak, Prompt injection.

## Reranking

Réordonnancement des passages récupérés par un second modèle, plus précis, afin de remonter les plus pertinents en tête avant injection dans le contexte. Réduit le bruit d'un RAG. Voir aussi : RAG, Chunking.

## Retry

Réexécution automatique d'une action ayant échoué, souvent avec temporisation croissante (back-off) et un timeout (délai au-delà duquel on abandonne). Plus sûr quand l'action est idempotente. Voir aussi : Idempotence, Fallback.

## Sandbox

Environnement d'exécution isolé où un agent peut lancer du code ou des commandes sans accès au système hôte ni au réseau non autorisé. Limite l'impact d'une action dangereuse ou d'une prompt injection. Voir aussi : Guardrail, Prompt injection.

## Sous-agent

Agent appelé par un agent principal (orchestrateur) pour traiter une sous-tâche spécifique avec un contexte et des outils propres.

## Streaming

Transmission de la réponse token par token au fur et à mesure de sa génération, plutôt qu'en un bloc final. Améliore la latence perçue et permet d'afficher ou d'interrompre une sortie en cours. Voir aussi : Latence et débit.

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

## Token budget

Quantité de tokens allouée à une interaction, répartie entre system prompt, historique, documents, sortie et marge. Gérer ce budget (élaguer, résumer, prioriser) est nécessaire car la fenêtre de contexte est finie. Voir aussi : Fenêtre de contexte, Context compression.

## Tracing

Enregistrement de chaque étape d'une boucle agentique (inputs, tool calls, outputs, tokens consommés) pour le débogage et l'optimisation. Outils courants : Langfuse, Helicone, Phoenix, Langsmith.

## Vector store

Base de données spécialisée dans le stockage et la recherche de vecteurs par proximité sémantique (Pinecone, Qdrant, pgvector, Weaviate). Brique de stockage d'un système RAG. Voir aussi : Embeddings, RAG.

## Workflow

Séquence de travail organisée entre humain, assistant, outils et validations.
