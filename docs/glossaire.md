# Glossaire

## Agent

Systeme combinant modele, contexte, instructions et outils dans une boucle orientee objectif.

## Contexte

Ensemble des informations effectivement visibles par le modele au moment de repondre.

## Context

Terme anglais souvent utilise dans les outils pour designer le contexte.

## Embeddings

Representations vectorielles servant notamment a la recherche semantique.

## Fenetre de contexte

Capacite maximale d'information exploitable par le modele sur une interaction donnee.

## Fine-tuning

Reentrainement partiel d'un modele sur un corpus specifique pour modifier son comportement ou son style de facon persistante. Couteux a mettre a jour contrairement au RAG ou aux instructions.

## Guardrail

Contrainte ou limite imposee a un agent pour restreindre ses actions, par exemple interdire certaines operations ou exiger une validation humaine au-dela d'un certain seuil de risque.

## Hallucination

Sortie convaincante mais incorrecte ou inventee.

## Human-in-the-loop

Principe de conception qui consiste a maintenir un point de validation ou de decision humain dans une boucle agentique, notamment avant les actions irreversibles.

## IA

Famille de techniques visant a produire des comportements qui semblent intelligents sur certaines taches.

## IA generative

Sous-ensemble de l'IA qui produit du contenu, par exemple du texte, du code ou des images.

## Instruction

Regle ou contrainte qui oriente le comportement du systeme.

## LLM

Modele de langage de grande taille capable de predire la suite de tokens a partir d'un contexte.

## MCP

Model Context Protocol, protocole servant a exposer des ressources et des outils a un agent ou a un modele.

## Memoire

Informations conservees ou reintroduites entre plusieurs interactions.

## Modele

Moteur mathematique entraine pour produire une sortie a partir d'une entree.

## Multi-agent

Architecture ou plusieurs agents collaborent pour accomplir une tache complexe, chacun avec un role ou un contexte delimite. Voir aussi : Orchestration.

## Orchestration

Coordination de plusieurs agents par un orchestrateur, qui decide qui fait quoi, dans quel ordre, et comment les resultats sont combines.

## Prompt

Texte ou ensemble d'instructions et de demandes envoye au systeme, au sens large.

## Prompt injection

Attaque ou manipulation qui consiste a introduire des instructions malveillantes dans le contexte (fichier, reponse d'API, commentaire) pour detourner le comportement du modele.

## RAG

Retrieval-Augmented Generation, approche qui ajoute des informations recuperees au contexte avant generation.

## Sous-agent

Agent appele par un agent principal (orchestrateur) pour traiter une sous-tache specifique avec un contexte et des outils propres.

## System prompt

Couche d'instructions predefinies injectees avant la conversation par le produit ou le depot. Elle fixe le role, le style et les contraintes avant que l'utilisateur n'ecrive quoi que ce soit.

## Temperature

Parametre qui controle la variabilite des reponses du modele. Une valeur faible donne des reponses previsibles ; une valeur elevee introduit plus de diversite.

## Tool

Capacite externe callable par l'agent, comme lire un fichier ou lancer une commande.

## Token

Unite elementaire manipulee par le modele.

## Workflow

Sequence de travail organisee entre humain, assistant, outils et validations.