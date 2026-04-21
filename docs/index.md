# easy-agentic

Repères sur l'environnement agentic pour les développeurs — comprendre avant d'automatiser.

---

## Guide

| # | Chapitre | Contenu |
| --- | ---------- | --------- |
| 1 | [Fondamentaux](guide/01-fondamentaux.md) | Vocabulaire de base : IA, LLM, tokens, contexte, température, modèles ouverts/fermés |
| 2 | [Fonctionnement agentic](guide/02-fonctionnement.md) | Boucle agentique, outils, function calling, sous-agents, orchestration |
| 3 | [Outils et écosystème](guide/03-outils.md) | Copilot, Claude Code, Cursor, Cline, Aider, MCP |
| 4 | [Fichiers et conventions](guide/04-conventions.md) | Conventions `.github` / `.claude`, formalisation des règles d'équipe |
| 5 | [Pratiques développeur](guide/05-pratiques.md) | Méthodes de travail, évals, observabilité, sécurité, RGPD |

---

## Concepts

| Fiche | Résumé |
| ------- | -------- |
| [Agent](concepts/agent.md) | Système combinant modèle, contexte, outils et boucle orientée objectif |
| [Contexte](concepts/context.md) | Ce que le modèle voit réellement et comment c'est construit |
| [Extended Thinking](concepts/extended-thinking.md) | Modèles à raisonnement étendu : quand et comment les utiliser |
| [Fine-tuning](concepts/fine-tuning.md) | Réentraînement partiel — tableau de décision vs RAG vs instructions |
| [Instruction](concepts/instruction.md) | Règles stables de comportement : où les placer, comment les écrire |
| [LLM](concepts/llm.md) | Le moteur de prédiction : ce qu'il fait vraiment |
| [MCP](concepts/mcp.md) | Model Context Protocol : exposition d'outils et de ressources |
| [Prompt](concepts/prompt.md) | Assemblage des couches du prompt, techniques de formulation |
| [RAG](concepts/rag.md) | Retrieval-Augmented Generation : enrichir le contexte depuis une base |
| [Skills](concepts/skills.md) | Compétences spécialisées exposées à l'agent |
| [Tool](concepts/tool.md) | Actions externes appelables par l'agent |
| [Workflow](concepts/workflow.md) | Séquences de travail organisées entre humain, agent et outils |

---

## Référence

- [Tableaux comparatifs](reference/comparatifs.md) — LLM vs agent, RAG vs fine-tuning, modes Copilot, outils de dev IA
- [Structure du dossier `.github`](reference/github-folder.md) — vue d'ensemble complète : GitHub natif + conventions IA
- [FAQ](reference/faq.md) — réponses aux questions fréquentes
- [Glossaire](reference/glossaire.md) — définitions courtes de tous les termes
- [Idées reçues](reference/idees-recues.md) — ce qui est souvent mal compris
