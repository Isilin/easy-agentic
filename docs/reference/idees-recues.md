# Idées reçues

## « Le modèle sait déjà tout »

Faux. Le modèle possède des régularités apprises, pas une connaissance fiable et à jour de votre système local, de votre codebase ou de vos règles internes.

## « Si la réponse est bien écrite, elle est probablement correcte »

Faux. La qualité rédactionnelle et la validité technique sont deux choses différentes.

## « Le prompt suffit »

Faux. Dans un environnement agentic, la qualité dépend aussi des instructions, du contexte, des outils, des permissions et de la vérification.

## « Un agent travaille seul »

En pratique, un agent utile travaille dans un cadre : objectifs, garde-fous, validations, outillage et responsabilité humaine finale.

## « Mettre plus de contexte règle le problème »

Pas forcément. Il faut surtout un meilleur contexte, pas simplement plus de texte.

## « Les fichiers d'instructions sont secondaires »

Faux. Bien rédigés, ils permettent de transformer des habitudes implicites en comportements plus consistants et plus auditables.

## « RAG veut dire réponse vraie »

Faux. Le RAG améliore l'ancrage informationnel, mais il dépend de la qualité de la recherche, des sources et de la génération finale.

## « Un agent ne peut pas être manipulé par du contenu externe »

Faux. Si un agent lit des fichiers, des pages web ou des réponses d'API sans filtrage, il peut exécuter des instructions cachées dans ce contenu. On appelle ça une prompt injection. Ce n'est pas théorique : c'est un vecteur d'attaque documenté. La défense passe par des permissions strictes et des validations humaines avant les actions irréversibles.

## « Un agent peut tout faire en autonomie »

Pas sans risque. Un agent autonome sans garde-fous humains peut enchaîner des erreurs irrécupérables : supprimer des fichiers, envoyer des messages, modifier une base de données. Le principe de human-in-the-loop consiste à conserver un point de validation humain avant les actions à fort impact.

## « Le fine-tuning donne toujours de meilleurs résultats que le RAG »

Faux. Ils répondent à des besoins différents. Le fine-tuning ancre un style ou un comportement persistant. Le RAG fournit des informations récentes ou spécifiques au projet. Dans la plupart des cas, les instructions et le RAG donnent de meilleurs résultats à un coût bien inférieur au fine-tuning.