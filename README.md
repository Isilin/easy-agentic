# easy-agentic

Contenu pédagogique en français pour comprendre l'environnement agentic et intégrer l'IA dans un travail de développement.

Ce dépôt s'adresse principalement à des développeurs qui veulent comprendre :

- ce qu'est un LLM et ce qui le distingue de l'IA au sens large ;
- ce qu'est un contexte, un prompt, une instruction, un outil, un agent ;
- comment fonctionnent des outils comme GitHub Copilot ou Claude Code ;
- comment utiliser ces systèmes proprement dans un flux de travail de développement.

## Structure

```
docs/
  index.md                  # Point d'entrée — vue d'ensemble et navigation
  guide/
    01-fondamentaux.md      # Vocabulaire de base : IA, LLM, tokens, contexte
    02-fonctionnement.md    # Boucle agentique, outils, orchestration
    03-outils.md            # Copilot, Claude Code, Cursor, Cline, Aider, MCP
    04-conventions.md       # Conventions .github / .claude, règles d'équipe
    05-pratiques.md         # Méthodes de travail, évals, sécurité, RGPD
  concepts/
    agent.md                # Système combinant modèle, contexte, outils et boucle
    context.md              # Ce que le modèle voit réellement
    extended-thinking.md    # Modèles à raisonnement étendu
    fine-tuning.md          # Réentraînement partiel
    instruction.md          # Règles stables de comportement
    llm.md                  # Le moteur de prédiction
    mcp.md                  # Model Context Protocol
    prompt.md               # Assemblage des couches du prompt
    rag.md                  # Retrieval-Augmented Generation
    skills.md               # Compétences spécialisées exposées à l'agent
    tool.md                 # Actions externes appelables par l'agent
    workflow.md             # Séquences de travail
  reference/
    comparatifs.md          # Tableaux comparatifs entre concepts
    faq.md                  # Questions fréquentes
    glossaire.md            # Définitions courtes de tous les termes
    idees-recues.md         # Ce qui est souvent mal compris
```

## Par où commencer

→ [docs/index.md](docs/index.md)

## Intention du dépôt

Le but n'est pas de produire un discours marketing sur l'IA. Le but est de fournir un cadre de travail clair, utile et exploitable pour des personnes qui écrivent, relisent, testent et maintiennent du code.

Chaque chapitre cherche à répondre à quatre questions simples :

1. De quoi parle-t-on exactement ?
2. Comment cela fonctionne en pratique ?
3. Qu'est-ce que cela change pour un développeur ?
4. Quelles sont les limites et les erreurs fréquentes ?

## Orientation éditoriale

- Niveau visé : intermédiaire.
- Public : développeurs avec niveaux hétérogènes vis-à-vis de l'IA.
- Angle : comprendre avant d'automatiser.
- Priorité : vocabulaire stable, mécanismes concrets, bonnes pratiques de travail.

## Périmètre actuel

Le premier lot couvre surtout la compréhension : notions, mécanismes, écosystème et pratiques de travail. Le dépôt pourra ensuite accueillir des exemples, des schémas, des ateliers ou un site statique si besoin.