# Outils et ecosysteme

## Deux categories a ne pas melanger

Quand on parle de GitHub Copilot, Claude Code ou d'autres outils proches, il faut separer :

1. le modele sous-jacent ;
2. le produit qui orchestre l'experience.

Le produit determine par exemple :

- quels fichiers sont visibles ;
- quels outils sont disponibles ;
- quelles instructions sont injectees ;
- comment l'utilisateur valide les actions ;
- comment la memoire, la conversation et le contexte sont geres.

## GitHub Copilot

GitHub Copilot est un environnement d'assistance integre au travail de developpement. Selon le mode utilise, il peut proposer des completions, repondre a des questions, explorer un depot, editer des fichiers et orchestrer des actions.

### Les trois modes de Copilot

| Mode | Ce qu'il fait | Niveau d'autonomie |
|------|--------------|-------------------|
| **Ask** | Repond a des questions, explique du code, propose des idees. Ne modifie rien. | Aucun |
| **Edit** | Applique des modifications dans les fichiers ouverts. L'utilisateur valide chaque changement. | Bas |
| **Agent** | Explore le depot, lit des fichiers, lance des outils, enchaine des etapes. Peut modifier plusieurs fichiers. L'utilisateur supervise. | Eleve |

Choisir le bon mode est une pratique a part entiere. Un mode Ask ne voit que ce qu'on lui montre explicitement. Un mode Agent peut rechercher lui-meme le bon fichier, mais peut aussi modifier plus que prevu si les instructions ne sont pas assez precises.

Pour bien l'expliquer pedagogiquement, il faut insister sur trois idees :

- Copilot n'est pas juste de l'autocompletion ;
- la qualite depend fortement du contexte accessible ;
- l'integration IDE, depot et outils est aussi importante que le modele lui-meme.

## Claude Code

Claude Code est un environnement oriente travail agentic sur du code. Son interet pedagogique est qu'il rend souvent visible la logique d'inspection, de lecture, de modification et de verification autour du modele.

La boucle est generalement observable : on voit Claude Code lire des fichiers, rechercher du texte, lancer des tests, modifier, puis verifier. Cela permet de comprendre comment un agent explore avant d'agir, et pourquoi la qualite depend autant des outils disponibles que du modele lui-meme.

Pour un developpeur, c'est un bon exemple d'outil ou l'on voit clairement l'importance :

- des instructions ;
- de l'environnement de travail ;
- des outils exposes ;
- des controles avant et apres modification.

## Ce qui distingue Copilot de Claude Code

Les deux outils sont agentiques, mais leur experience est differente :

- **Copilot** est etroitement integre a l'IDE (VS Code, JetBrains...). Les modes Ask/Edit/Agent sont selectionnes explicitement. L'utilisateur reste tres proche des changements.
- **Claude Code** fonctionne en terminal ou via une interface dediee. La boucle agentique est plus visible et souvent plus autonome par defaut. La granularite de supervision est plus large.

Le choix entre les deux depend du workflow et du niveau de supervision souhaite, pas seulement de la qualite du modele.

## Workflow

Un workflow est une maniere organisee d'utiliser l'assistant ou l'agent pour accomplir une tache. Exemple : comprendre un bug, localiser la cause, proposer un correctif, executer les tests pertinents, produire un resume.

Un workflow peut etre :

- individuel ;
- partage dans une equipe ;
- automatise partiellement ;
- encadre par des instructions de depot.

## Prompt et instruction dans un outil de dev

Dans un outil de dev, le prompt visible a l'ecran n'est qu'une partie de ce que le modele recoit. Il faut y ajouter :

- des instructions produit ;
- des instructions du depot ;
- du contexte collecte automatiquement ;
- des sorties d'outils ;
- parfois une memoire persistante.

Cette distinction explique pourquoi deux outils peuvent produire des reponses tres differentes avec une demande utilisateur semblable.

## Conventions de fichiers : .github et .claude

Les conventions `.github` et `.claude` sont traitees en detail dans [05-fichiers-et-conventions.md](05-fichiers-et-conventions.md).

Ce qu'il faut retenir ici :

- `.github` porte generalement des regles versionnees d'equipe ;
- `.claude` peut porter des artefacts d'usage de l'outil dans le projet ;
- l'objectif est de rendre explicites les regles qui conditionnent la qualite.

Pour des exemples concrets de conventions par concept (agent, workflow, prompt, instruction, tool, skills, mcp), voir [06-fiches-detaillees.md](06-fiches-detaillees.md).

## Tools

Dans les interfaces agentiques, un tool est une action externe callable par le systeme. Exemples frequents :

- lire un fichier ;
- rechercher du texte ;
- lister un dossier ;
- lancer une commande ;
- recuperer des erreurs ;
- modifier un fichier ;
- interroger un service specialise.

Pedagogiquement, il faut faire comprendre qu'un tool n'est pas un detail d'implementation. C'est souvent ce qui transforme un assistant utile en assistant vraiment operationnel.

## MCP dans l'ecosysteme

MCP sert a connecter un agent a des sources de contexte ou a des outils externes de facon plus standard. Cela permet d'elargir l'espace d'action sans recabler chaque integration a la main dans l'application principale.

La bonne question a se poser n'est pas seulement "est-ce qu'il y a MCP ?" mais plutot :

- quelles ressources sont exposees ;
- avec quel niveau de fiabilite ;
- sous quelles permissions ;
- pour quels workflows reels.