# Fondamentaux

Ce chapitre est la source canonique des definitions de base utilisees dans le reste du depot.
Les fiches detaillees privilegient l'usage pratique et renvoient ici pour les definitions.

## IA

Definition courte : l'intelligence artificielle est un ensemble de techniques qui permettent a une machine de produire des comportements qui semblent intelligents sur certaines taches.

Pour un developpeur, le point important est le suivant : l'IA n'est pas un bloc unique. C'est une famille de techniques. Un moteur de recommandation, un systeme de detection de fraude et un assistant conversationnel relevent tous de l'IA, mais ne fonctionnent pas de la meme maniere.

A ne pas confondre avec :

- un produit grand public comme ChatGPT ou Copilot ;
- un modele particulier ;
- l'IA generative en particulier.

## IA generative

Definition courte : l'IA generative produit du contenu nouveau a partir de donnees et d'instructions, par exemple du texte, du code, des images ou du son.

Pour un developpeur, cela signifie que l'outil ne se contente pas de classer ou de predire une etiquette. Il produit une sortie complete, souvent plausible, parfois incorrecte.

Limite importante : une sortie bien formulee n'est pas une preuve de verite.

## Modele

Definition courte : un modele est un systeme mathematique entraine a produire une sortie a partir d'une entree.

Dans le contexte agentic, le modele est le moteur de prediction. Il ne sait pas tout faire seul. Il ne dispose pas naturellement de vos fichiers, de vos outils, de vos regles internes ou de vos droits d'acces. Ces elements viennent de la couche produit et du contexte fourni autour de lui.

## LLM

Definition courte : un LLM, pour Large Language Model, est un modele de langage de grande taille entraine a predire la suite la plus probable d'une sequence de tokens.

Ce qu'un developpeur doit retenir :

- un LLM manipule des tokens, pas des idees au sens humain ;
- il repond en fonction du contexte qu'on lui donne ;
- il excelle a generer, reformuler, resumer, expliquer et transformer du texte et du code ;
- il peut etre tres utile tout en restant faillible.

Exemple concret : si vous lui fournissez un extrait de code, une erreur et une contrainte de style, il peut proposer une correction plausible. Si vous ne fournissez ni le contexte du projet ni la pile exacte, il peut inventer des details manquants.

## Tokens

Definition courte : les tokens sont les unites elementaires manipulees par le modele. Ce ne sont ni exactement des mots, ni exactement des caracteres.

Pourquoi c'est important : la taille du contexte disponible se mesure en tokens. Plus vous ajoutez de texte, d'historique, de fichiers et d'instructions, plus vous consommez cette fenetre.

## Temperature

Definition courte : la temperature est un parametre qui controle le degre de variabilite des reponses. Une valeur faible produit des reponses plus deterministes et previsibles. Une valeur elevee introduit plus de diversite, parfois plus de creativite, parfois plus d'imprecision.

Ce que ca change pour un developpeur :

- **Temperature basse (proche de 0)** : ideal pour la generation de code, les taches avec une reponse correcte attendue, la verification. Peu de surprises.
- **Temperature elevee (proche de 1 ou au-dela)** : utile pour la generation d'idees, la diversification de formulations, le brainstorming. Risque d'incoherence.

La plupart des outils de dev maintiennent une temperature basse par defaut, ce qui convient a la majorite des usages.

## Fenetre de contexte

Definition courte : la fenetre de contexte est la quantite maximale d'information que le modele peut prendre en compte pour produire sa reponse a un instant donne.

Pour un developpeur, cela signifie que l'outil ne voit jamais tout. Il voit une selection. La qualite du resultat depend donc fortement de ce qui a ete choisi, omis, resume ou tronque.

## Contexte

Definition courte : le contexte est l'ensemble des informations effectivement visibles par le modele pour repondre a une demande.

Dans un outil de dev, cela peut inclure :

- votre demande courante ;
- l'historique recent de la conversation ;
- les fichiers ouverts ;
- des instructions d'equipe ou de depot ;
- des resultats d'outils, comme une recherche ou la sortie de tests ;
- des documents recuperes via un systeme externe.

Le contexte n'est pas juste un volume de texte. C'est une selection de signaux. Trop peu de contexte produit des reponses generiques. Trop de contexte noie les informations utiles.

## Hallucination

Definition courte : une hallucination est une sortie convaincante mais incorrecte, inventee ou insuffisamment fondee.

Dans le travail logiciel, les hallucinations prennent souvent ces formes :

- une API inventee ;
- un comportement de framework suppose ;
- une explication technique plausible mais fausse ;
- une reference a un fichier ou a une fonction qui n'existe pas.

Regle pratique : tout ce qui touche au comportement, a la securite, aux droits, a la persistance et a l'execution doit etre verifie.

## Embeddings

Definition courte : les embeddings sont des representations vectorielles qui permettent de comparer des morceaux de contenu selon leur proximite semantique.

Pour un developpeur, c'est un composant cle de la recherche semantique. On transforme des documents ou des bouts de code en vecteurs, puis on retrouve les plus proches d'une requete.

## RAG

Definition courte : RAG signifie Retrieval-Augmented Generation. C'est une approche ou l'on recupere d'abord des informations pertinentes, puis on les injecte dans le contexte avant de generer la reponse.

Interet pratique : au lieu de demander au modele de repondre uniquement sur sa base statistique, on l'appuie sur des sources selectionnees, par exemple de la documentation interne ou des fichiers de code.

Un RAG n'est pas une garantie de verite. C'est un mecanisme d'appui. Si la recherche recupere les mauvais documents, la generation part sur de mauvaises bases.

## Fine-tuning

Definition courte : le fine-tuning est un reentrainement partiel d'un modele sur un corpus specifique pour modifier son comportement, son style ou ses connaissances de maniere persistante.

A ne pas confondre avec RAG ou avec des instructions :

| Approche | Ou vit la connaissance | Quand mettre a jour | Cout |
|---|---|---|---|
| **Fine-tuning** | Dans les poids du modele | Reentrainement requis | Elevé |
| **RAG** | Dans une base documentaire externe | A chaque ajout de document | Moyen |
| **Instructions** | Dans le prompt ou le depot | Modification d'un fichier texte | Faible |

Quand envisager le fine-tuning :

- le modele doit maîtriser un style tres specifique (format, vocabulaire, ton) ;
- les instructions et le RAG n'y arrivent pas suffisamment ;
- les donnees sont stables et le reentrainement est faisable.

Dans la grande majorite des projets, les instructions et le RAG donnent de meilleurs resultats a un cout bien inferieur.

## Memoire

Definition courte : la memoire designe les informations que le systeme choisit de conserver ou de reintroduire entre plusieurs interactions.

Il faut distinguer plusieurs cas :

- la memoire courte de la conversation active ;
- la memoire persistante d'un produit ;
- la memoire externe construite par l'utilisateur ou l'equipe.

La memoire n'est pas synonyme de contexte. La memoire peut alimenter le contexte, mais elle n'est utile que si elle est correctement selectionnee.

## Outil

Definition courte : un outil est une capacite externe que le modele ou l'agent peut appeler pour agir ou observer, par exemple lire un fichier, lancer des tests, rechercher du texte ou interroger une API.

Les outils changent radicalement la valeur pratique du systeme : un modele sans outil peut expliquer du code ; un systeme avec outils peut aussi inspecter le depot, lancer des commandes et verifier une hypothese.

## Agent

Definition courte : un agent est un systeme qui combine un modele, du contexte, des instructions et souvent des outils dans une boucle orientee objectif.

Autrement dit, un agent ne se contente pas de repondre une fois. Il peut planifier, rechercher, agir, verifier puis produire une sortie finale.

A ne pas confondre avec :

- un simple chatbot ;
- le modele seul ;
- un workflow complet de production autour de plusieurs outils et personnes.

## Prompt

Definition courte : un prompt est l'ensemble du texte transmis au modele pour obtenir une reponse. Dans la pratique, on distingue plusieurs layers dans ce texte.

Voir aussi : [System prompt](#system-prompt) pour la structure interne, et la fiche [fiches/prompt.md](fiches/prompt.md) pour l'usage operationnel.

## System prompt

Definition courte : le system prompt est la couche d'instructions predefinies qui precede la conversation. Il fixe le comportement, le role et les contraintes du systeme avant que l'utilisateur n'ecrive quoi que ce soit.

Les trois couches d'un prompt complet :

1. **System** — instructions stables injectees par le produit ou le depot (role, style, contraintes, outils disponibles). L'utilisateur ne les voit generalement pas.
2. **Historique** — la conversation precedente (demandes et reponses), selective selon la memoire et la taille de la fenetre.
3. **User** — la demande courante de l'utilisateur.

Pourquoi c'est important : deux outils peuvent produire des reponses tres differentes a la meme demande utilisateur si leurs system prompts divergent. Les instructions de projet (`.github/instructions/`) alimentent typiquement cette couche.

## Prompt injection

Definition courte : une prompt injection est une attaque ou une erreur qui consiste a introduire des instructions malveillantes dans le contexte, par exemple dans un fichier ou une reponse d'outil, pour detourner le comportement du modele.

Distinction importante : ce n'est pas une hallucination. La prompt injection est une manipulation intentionnelle ou accidentelle du contexte, pas une erreur interne du modele.

Risques pratiques :

- un fichier lu par un agent contient des instructions cachees ;
- une reponse d'API tierce inclut des commandes destinees au modele ;
- un commentaire dans du code dit a l'agent de ne pas signaler un bug.

Regle pratique : un agent qui lit des sources externes non controlees est exposable. Il faut restreindre les permissions et valider les actions irreversibles.