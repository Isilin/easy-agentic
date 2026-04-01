# Idees recues

## "Le modele sait deja tout"

Faux. Le modele possede des regularites apprises, pas une connaissance fiable et a jour de votre systeme local, de votre codebase ou de vos regles internes.

## "Si la reponse est bien ecrite, elle est probablement correcte"

Faux. La qualite redactionnelle et la validite technique sont deux choses differentes.

## "Le prompt suffit"

Faux. Dans un environnement agentic, la qualite depend aussi des instructions, du contexte, des outils, des permissions et de la verification.

## "Un agent travaille seul"

En pratique, un agent utile travaille dans un cadre : objectifs, garde-fous, validations, outillage et responsabilite humaine finale.

## "Mettre plus de contexte regle le probleme"

Pas forcement. Il faut surtout un meilleur contexte, pas simplement plus de texte.

## "Les fichiers d'instructions sont secondaires"

Faux. Bien rediges, ils permettent de transformer des habitudes implicites en comportements plus consistants et plus auditables.

## "RAG veut dire reponse vraie"

Faux. Le RAG ameliore l'ancrage informationnel, mais il depend de la qualite de la recherche, des sources et de la generation finale.

## "Un agent ne peut pas etre manipule par du contenu externe"

Faux. Si un agent lit des fichiers, des pages web ou des reponses d'API sans filtrage, il peut executer des instructions cachees dans ce contenu. On appelle ca une prompt injection. Ce n'est pas theorique : c'est un vecteur d'attaque documente. La defense passe par des permissions strictes et des validations humaines avant les actions irreversibles.

## "Un agent peut tout faire en autonomie"

Pas sans risque. Un agent autonome sans garde-fous humains peut enchainer des erreurs irrecuperables : supprimer des fichiers, envoyer des messages, modifier une base de donnees. Le principe de human-in-the-loop consiste a conserver un point de validation humain avant les actions a fort impact.

## "Le fine-tuning donne toujours de meilleurs resultats que le RAG"

Faux. Ils repondent a des besoins differents. Le fine-tuning ancre un style ou un comportement persistent. Le RAG fournit des informations recentes ou specifiques au projet. Dans la plupart des cas, les instructions et le RAG donnent de meilleurs resultats a un cout bien inferieur au fine-tuning.