# Fondamentaux

## IA

Définition courte : l'intelligence artificielle est un ensemble de techniques qui permettent à une machine de produire des comportements qui semblent intelligents sur certaines tâches.

Pour un développeur, le point important est le suivant : l'IA n'est pas un bloc unique. C'est une famille de techniques. Un moteur de recommandation, un système de détection de fraude et un assistant conversationnel relèvent tous de l'IA, mais ne fonctionnent pas de la même manière.

À ne pas confondre avec :

- un produit grand public comme ChatGPT ou Copilot ;
- un modèle particulier ;
- l'IA générative en particulier.

## IA générative

Définition courte : l'IA générative produit du contenu nouveau à partir de données et d'instructions, par exemple du texte, du code, des images ou du son.

Pour un développeur, cela signifie que l'outil ne se contente pas de classer ou de prédire une étiquette. Il produit une sortie complète, souvent plausible, parfois incorrecte.

Limite importante : une sortie bien formulée n'est pas une preuve de vérité.

## Modèle

Définition courte : un modèle est un système mathématique entraîné à produire une sortie à partir d'une entrée.

Dans le contexte agentic, le modèle est le moteur de prédiction. Il ne sait pas tout faire seul. Il ne dispose pas naturellement de vos fichiers, de vos outils, de vos règles internes ou de vos droits d'accès. Ces éléments viennent de la couche produit et du contexte fourni autour de lui.

## LLM

Définition courte : un LLM, pour Large Language Model, est un modèle de langage de grande taille entraîné à prédire la suite la plus probable d'une séquence de tokens.

Ce qu'un développeur doit retenir :

- un LLM manipule des tokens, pas des idées au sens humain ;
- il répond en fonction du contexte qu'on lui donne ;
- il excelle à générer, reformuler, résumer, expliquer et transformer du texte et du code ;
- il peut être très utile tout en restant faillible.

Exemple concret : si vous lui fournissez un extrait de code, une erreur et une contrainte de style, il peut proposer une correction plausible. Si vous ne fournissez ni le contexte du projet ni la pile exacte, il peut inventer des détails manquants.

Repères pour évaluer les modèles : les benchmarks HumanEval (génération de code) et SWE-bench (résolution de vraies issues GitHub) sont les références les plus citées. Ils donnent une base de comparaison, mais ne substituent pas une évaluation sur votre cas d'usage réel.

## Modèles à raisonnement étendu (Extended Thinking)

Définition courte : les modèles à raisonnement étendu (o1, o3 d'OpenAI, Claude avec Extended Thinking, Gemini Thinking) produisent une chaîne de réflexion interne avant de répondre. Ce comportement est fondamentalement différent d'un LLM classique.

Ce qui change pour un développeur :

- **Latence** : la réponse prend plus de temps car le modèle « réfléchit » avant de répondre.
- **Coût** : les tokens de raisonnement interne sont comptés et facturés différemment.
- **Qualité sur tâches complexes** : pour du raisonnement multi-étapes (mathématiques, logique, algorithmes complexes, debugging profond), la qualité est significativement supérieure.
- **Inutile sur tâches simples** : pour une complétion de code basique ou une explication directe, un LLM classique est préférable.

Quand utiliser un modèle à raisonnement étendu :

- résolution de bugs difficiles à reproduire ou à expliquer ;
- conception d'algorithmes ou d'architectures ;
- analyse de scénarios avec beaucoup de contraintes interdépendantes ;
- tâches où un LLM classique produit des réponses incorrectes ou superficielles.

Ne pas utiliser pour : les tâches répétitives à fort volume, les complétions simples, les cas où la vitesse prime sur la profondeur.

## Modèles ouverts et modèles fermés

Définition courte : un modèle ouvert (open-weight) publie ses poids et peut être déployé localement. Un modèle fermé (proprietary) n'est accessible que via API, les poids restant chez le fournisseur.

| | Modèles ouverts | Modèles fermés |
|---|---|---|
| **Exemples** | Llama 3.x, Mistral, Qwen, DeepSeek | GPT-4o, Claude 3.x, Gemini |
| **Déploiement** | Local, sur ses propres serveurs | Via API uniquement |
| **Données** | Restent sur votre infrastructure | Transitent chez le fournisseur |
| **Qualité** | Très bonne, parfois comparable | Souvent supérieure sur tâches complexes |
| **Coût** | Infrastructure + énergie | Par token consommé |
| **Customisation** | Fine-tuning possible en interne | Fine-tuning via API (limité) |

Pourquoi ça compte pour un développeur :

- si votre code contient des données sensibles (secrets, PII, code propriétaire), un modèle déployé localement évite toute transmission à un tiers ;
- les réglementations (RGPD, secteur santé, finance) peuvent imposer des contraintes sur où transitent les données ;
- les modèles ouverts permettent d'expérimenter sans coût par requête.

## Multimodalité

Définition courte : un modèle multimodal accepte plusieurs types d'entrées : texte, images, audio, vidéo. La majorité des grands modèles actuels sont multimodaux.

Ce que ça change pour un développeur :

- vous pouvez coller une capture d'écran d'une erreur ou d'une interface dans votre demande ;
- un agent peut analyser un schéma d'architecture en image ;
- les messages d'erreur visuels (exceptions dans une UI, logs dans un terminal) peuvent être envoyés directement sans retranscription.

## Tokens

Définition courte : les tokens sont les unités élémentaires manipulées par le modèle. Ce ne sont ni exactement des mots, ni exactement des caractères.

Pourquoi c'est important : la taille du contexte disponible se mesure en tokens. Plus vous ajoutez de texte, d'historique, de fichiers et d'instructions, plus vous consommez cette fenêtre.

## Température

Définition courte : la température est un paramètre qui contrôle le degré de variabilité des réponses. Une valeur faible produit des réponses plus déterministes et prévisibles. Une valeur élevée introduit plus de diversité, parfois plus de créativité, parfois plus d'imprécision.

Ce que ça change pour un développeur :

- **Température basse (proche de 0)** : idéal pour la génération de code, les tâches avec une réponse correcte attendue, la vérification. Peu de surprises.
- **Température élevée (proche de 1 ou au-delà)** : utile pour la génération d'idées, la diversification de formulations, le brainstorming. Risque d'incohérence.

La plupart des outils de dev maintiennent une température basse par défaut, ce qui convient à la majorité des usages.

## Fenêtre de contexte

Définition courte : la fenêtre de contexte est la quantité maximale d'information que le modèle peut prendre en compte pour produire sa réponse à un instant donné.

Pour un développeur, cela signifie que l'outil ne voit jamais tout. Il voit une sélection. La qualité du résultat dépend donc fortement de ce qui a été choisi, omis, résumé ou tronqué.

Paradoxe « lost in the middle » : les modèles tendent à mieux exploiter les informations placées au début et à la fin du contexte. Les informations positionnées au milieu d'un contexte très long sont statistiquement moins bien utilisées. Une grande fenêtre de contexte ne supprime donc pas la nécessité de sélectionner et d'ordonner le contexte pertinent.

## Contexte

Définition courte : le contexte est l'ensemble des informations effectivement visibles par le modèle pour répondre à une demande.

Dans un outil de dev, cela peut inclure :

- votre demande courante ;
- l'historique récent de la conversation ;
- les fichiers ouverts ;
- des instructions d'équipe ou de dépôt ;
- des résultats d'outils, comme une recherche ou la sortie de tests ;
- des documents récupérés via un système externe.

Le contexte n'est pas juste un volume de texte. C'est une sélection de signaux. Trop peu de contexte produit des réponses génériques. Trop de contexte noie les informations utiles.

## Hallucination

Définition courte : une hallucination est une sortie convaincante mais incorrecte, inventée ou insuffisamment fondée.

Dans le travail logiciel, les hallucinations prennent souvent ces formes :

- une API inventée ;
- un comportement de framework supposé ;
- une explication technique plausible mais fausse ;
- une référence à un fichier ou à une fonction qui n'existe pas.

Règle pratique : tout ce qui touche au comportement, à la sécurité, aux droits, à la persistance et à l'exécution doit être vérifié.

## Embeddings

Définition courte : les embeddings sont des représentations vectorielles qui permettent de comparer des morceaux de contenu selon leur proximité sémantique.

Pour un développeur, c'est un composant clé de la recherche sémantique. On transforme des documents ou des bouts de code en vecteurs, puis on retrouve les plus proches d'une requête.

## RAG

Définition courte : RAG signifie Retrieval-Augmented Generation. C'est une approche où l'on récupère d'abord des informations pertinentes, puis on les injecte dans le contexte avant de générer la réponse.

Intérêt pratique : au lieu de demander au modèle de répondre uniquement sur sa base statistique, on l'appuie sur des sources sélectionnées, par exemple de la documentation interne ou des fichiers de code.

Un RAG n'est pas une garantie de vérité. C'est un mécanisme d'appui. Si la recherche récupère les mauvais documents, la génération part sur de mauvaises bases.

## Fine-tuning

Définition courte : le fine-tuning est un réentraînement partiel d'un modèle sur un corpus spécifique pour modifier son comportement, son style ou ses connaissances de manière persistante.

À ne pas confondre avec RAG ou avec des instructions :

| Approche | Où vit la connaissance | Quand mettre à jour | Coût |
|---|---|---|---|
| **Fine-tuning** | Dans les poids du modèle | Réentraînement requis | Élevé |
| **RAG** | Dans une base documentaire externe | À chaque ajout de document | Moyen |
| **Instructions** | Dans le prompt ou le dépôt | Modification d'un fichier texte | Faible |

Quand envisager le fine-tuning :

- le modèle doit maîtriser un style très spécifique (format, vocabulaire, ton) ;
- les instructions et le RAG n'y arrivent pas suffisamment ;
- les données sont stables et le réentraînement est faisable.

Dans la grande majorité des projets, les instructions et le RAG donnent de meilleurs résultats à un coût bien inférieur.

## Mémoire

Définition courte : la mémoire désigne les informations que le système choisit de conserver ou de réintroduire entre plusieurs interactions.

Il faut distinguer plusieurs cas :

- la mémoire courte de la conversation active ;
- la mémoire persistante d'un produit ;
- la mémoire externe construite par l'utilisateur ou l'équipe.

La mémoire n'est pas synonyme de contexte. La mémoire peut alimenter le contexte, mais elle n'est utile que si elle est correctement sélectionnée.

## Outil

Définition courte : un outil est une capacité externe que le modèle ou l'agent peut appeler pour agir ou observer, par exemple lire un fichier, lancer des tests, rechercher du texte ou interroger une API.

Les outils changent radicalement la valeur pratique du système : un modèle sans outil peut expliquer du code ; un système avec outils peut aussi inspecter le dépôt, lancer des commandes et vérifier une hypothèse.

## Agent

Définition courte : un agent est un système qui combine un modèle, du contexte, des instructions et souvent des outils dans une boucle orientée objectif.

Autrement dit, un agent ne se contente pas de répondre une fois. Il peut planifier, rechercher, agir, vérifier puis produire une sortie finale.

À ne pas confondre avec :

- un simple chatbot ;
- le modèle seul ;
- un workflow complet de production autour de plusieurs outils et personnes.

## Prompt

Définition courte : un prompt est l'ensemble du texte transmis au modèle pour obtenir une réponse. Dans la pratique, on distingue plusieurs couches dans ce texte.

Voir aussi : [System prompt](#system-prompt) pour la structure interne, et la fiche [prompt](../concepts/prompt.md) pour l'usage opérationnel.

## System prompt

Définition courte : le system prompt est la couche d'instructions prédéfinies qui précède la conversation. Il fixe le comportement, le rôle et les contraintes du système avant que l'utilisateur n'écrive quoi que ce soit.

Les trois couches d'un prompt complet :

1. **System** — instructions stables injectées par le produit ou le dépôt (rôle, style, contraintes, outils disponibles). L'utilisateur ne les voit généralement pas.
2. **Historique** — la conversation précédente (demandes et réponses), sélective selon la mémoire et la taille de la fenêtre.
3. **User** — la demande courante de l'utilisateur.

Pourquoi c'est important : deux outils peuvent produire des réponses très différentes à la même demande utilisateur si leurs system prompts divergent. Les instructions de projet (`.github/instructions/`) alimentent typiquement cette couche.

## Prompt injection

Définition courte : une prompt injection est une attaque ou une erreur qui consiste à introduire des instructions malveillantes dans le contexte, par exemple dans un fichier ou une réponse d'outil, pour détourner le comportement du modèle.

Distinction importante : ce n'est pas une hallucination. La prompt injection est une manipulation intentionnelle ou accidentelle du contexte, pas une erreur interne du modèle.

Risques pratiques :

- un fichier lu par un agent contient des instructions cachées ;
- une réponse d'API tierce inclut des commandes destinées au modèle ;
- un commentaire dans du code dit à l'agent de ne pas signaler un bug.

Règle pratique : un agent qui lit des sources externes non contrôlées est exposable. Il faut restreindre les permissions et valider les actions irréversibles.

---

*Guide · Chapitre 1 sur 5*

[← Index](../index.md) | **Suivant →** [Fonctionnement agentic](02-fonctionnement.md)