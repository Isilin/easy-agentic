# Outils et écosystème

## Deux catégories à ne pas mélanger

Quand on parle de GitHub Copilot, Claude Code ou d'autres outils proches, il faut séparer :

1. le modèle sous-jacent ;
2. le produit qui orchestre l'expérience.

Le produit détermine par exemple :

- quels fichiers sont visibles ;
- quels outils sont disponibles ;
- quelles instructions sont injectées ;
- comment l'utilisateur valide les actions ;
- comment la mémoire, la conversation et le contexte sont gérés.

## GitHub Copilot

GitHub Copilot est un environnement d'assistance intégré au travail de développement. Selon le mode utilisé, il peut proposer des complétions, répondre à des questions, explorer un dépôt, éditer des fichiers et orchestrer des actions.

### Les trois modes de Copilot

| Mode | Ce qu'il fait | Niveau d'autonomie |
|------|--------------|-------------------|
| **Ask** | Répond à des questions, explique du code, propose des idées. Ne modifie rien. | Aucun |
| **Edit** | Applique des modifications dans les fichiers ouverts. L'utilisateur valide chaque changement. | Bas |
| **Agent** | Explore le dépôt, lit des fichiers, lance des outils, enchaîne des étapes. Peut modifier plusieurs fichiers. L'utilisateur supervise. | Élevé |

Choisir le bon mode est une pratique à part entière. Un mode Ask ne voit que ce qu'on lui montre explicitement. Un mode Agent peut rechercher lui-même le bon fichier, mais peut aussi modifier plus que prévu si les instructions ne sont pas assez précises.

Trois idées clés :

- Copilot n'est pas juste de l'autocomplétion ;
- la qualité dépend fortement du contexte accessible ;
- l'intégration IDE, dépôt et outils est aussi importante que le modèle lui-même.

## Claude Code

Claude Code est un environnement orienté travail agentic sur du code. Il rend souvent visible la logique d'inspection, de lecture, de modification et de vérification autour du modèle.

La boucle est généralement observable : on voit Claude Code lire des fichiers, rechercher du texte, lancer des tests, modifier, puis vérifier. Cela permet de comprendre comment un agent explore avant d'agir, et pourquoi la qualité dépend autant des outils disponibles que du modèle lui-même.

Pour un développeur, cet outil montre clairement l'importance :

- des instructions ;
- de l'environnement de travail ;
- des outils exposés ;
- des contrôles avant et après modification.

## Ce qui distingue Copilot de Claude Code

Les deux outils sont agentiques, mais leur expérience est différente :

- **Copilot** est étroitement intégré à l'IDE (VS Code, JetBrains...). Les modes Ask/Edit/Agent sont sélectionnés explicitement. L'utilisateur reste très proche des changements.
- **Claude Code** fonctionne en terminal ou via une interface dédiée. La boucle agentique est plus visible et souvent plus autonome par défaut. La granularité de supervision est plus large.

Le choix entre les deux dépend du workflow et du niveau de supervision souhaité, pas seulement de la qualité du modèle.

## Workflow

Un workflow est une manière organisée d'utiliser l'assistant ou l'agent pour accomplir une tâche. Exemple : comprendre un bug, localiser la cause, proposer un correctif, exécuter les tests pertinents, produire un résumé.

Un workflow peut être :

- individuel ;
- partagé dans une équipe ;
- automatisé partiellement ;
- encadré par des instructions de dépôt.

## Prompt et instruction dans un outil de dev

Dans un outil de dev, le prompt visible à l'écran n'est qu'une partie de ce que le modèle reçoit. Il faut y ajouter :

- des instructions produit ;
- des instructions du dépôt ;
- du contexte collecté automatiquement ;
- des sorties d'outils ;
- parfois une mémoire persistante.

Cette distinction explique pourquoi deux outils peuvent produire des réponses très différentes avec une demande utilisateur semblable.

## Conventions de fichiers : .github et .claude

Les conventions `.github` et `.claude` sont traitées en détail dans [Fichiers et conventions](04-conventions.md).

Ce qu'il faut retenir ici :

- `.github` porte généralement des règles versionnées d'équipe ;
- `.claude` peut porter des artefacts d'usage de l'outil dans le projet ;
- l'objectif est de rendre explicites les règles qui conditionnent la qualité.

Pour des exemples concrets de conventions par concept (agent, workflow, prompt, instruction, tool, skills, mcp), voir les [Fiches concepts](../index.md#concepts--fiches-approfondies).

## Tools

Dans les interfaces agentiques, un tool est une action externe appelable par le système. Exemples fréquents :

- lire un fichier ;
- rechercher du texte ;
- lister un dossier ;
- lancer une commande ;
- récupérer des erreurs ;
- modifier un fichier ;
- interroger un service spécialisé.

Un tool n'est pas un détail d'implémentation. C'est souvent ce qui transforme un assistant utile en assistant vraiment opérationnel.

## MCP dans l'écosystème

MCP sert à connecter un agent à des sources de contexte ou à des outils externes de façon plus standard. Cela permet d'élargir l'espace d'action sans recâbler chaque intégration à la main dans l'application principale.

La bonne question à se poser n'est pas seulement « est-ce qu'il y a MCP ? » mais plutôt :

- quelles ressources sont exposées ;
- avec quel niveau de fiabilité ;
- sous quelles permissions ;
- pour quels workflows réels.

## Autres outils de dev IA notables

L'écosystème ne se limite pas à Copilot et Claude Code. Voici les outils les plus utilisés par les développeurs en 2025-2026 :

### Cursor

IDE basé sur VS Code avec un agent intégré. L'agent peut lire le dépôt, proposer des modifications et les appliquer directement. Le modèle est configurable (GPT-4o, Claude, etc.). Très proche de l'expérience Copilot agent mais avec plus de contrôle sur le modèle utilisé et une interface pensée pour l'usage agentic en premier.

### Windsurf

IDE similaire à Cursor (également fork VS Code), avec un accent sur l'expérience « flows » : des séquences d'actions agentiques guidées. Propose son propre modèle (Cascade).

### Cline

Extension VS Code open source qui expose une interface agentique complète dans l'éditeur. Supporte de nombreux modèles via API (OpenAI, Anthropic, Ollama pour les modèles locaux). Transparence totale sur les actions : chaque tool call est visible et validable avant exécution.

### Aider

Outil en ligne de commande (CLI) conçu pour travailler avec des dépôts Git. L'agent lit le dépôt, propose des modifications et les commit directement. Particulièrement adapté aux workflows terminal, aux scripts et aux pipelines CI. Supporte de nombreux modèles.

### Continue.dev

Extension VS Code et JetBrains open source qui se connecte à n'importe quel modèle (local ou API). Moins orienté « agent autonome » que les autres, plus proche d'un Copilot configurable. Bonne option pour les équipes qui veulent contrôler le modèle sans changer d'IDE.

### Comment choisir

| Besoin | Outil recommandé |
|---|---|
| Rester dans VS Code / JetBrains, expérience fluide | Copilot ou Continue.dev |
| Agent autonome avec boucle visible dans l'IDE | Cursor ou Cline |
| Travail en terminal, intégration Git, scripting | Aider |
| Autonomie maximale sur le modèle utilisé | Cline ou Aider (Ollama possible) |
| Données sensibles, modèle local obligatoire | Cline + Ollama ou Aider + Ollama |

Voir aussi : [Tableaux comparatifs](../reference/comparatifs.md) pour le tableau détaillé de positionnement.

---

*Guide · Chapitre 3 sur 5*

[← Index](../index.md) | **Précédent ←** [Fonctionnement agentic](02-fonctionnement.md) | **Suivant →** [Fichiers et conventions](04-conventions.md)
