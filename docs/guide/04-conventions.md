# Fichiers et conventions

## Pourquoi ces fichiers comptent

Dans un environnement agentic, la qualité ne dépend pas seulement du modèle. Elle dépend aussi de tout ce qui encadre son usage : instructions, permissions, conventions d'équipe, workflows et contexte récurrent.

Quand ces règles restent uniquement dans la tête des personnes, les résultats deviennent instables. Quand elles sont explicitées dans le dépôt, elles deviennent partageables, auditables et améliorables.

## Trois grandes catégories de fichiers

### 1. Les fichiers de collaboration d'équipe

Ils portent des règles versionnées et partagées. Leur rôle est d'aligner les usages entre plusieurs personnes et plusieurs sessions.

### 2. Les fichiers de contexte et d'instructions

Ils servent à donner au système des règles de comportement, des repères de projet et des méthodes de travail réutilisables.

### 3. Les fichiers locaux ou personnels

Ils relèvent davantage de l'environnement individuel, des préférences locales ou de l'expérimentation personnelle. Ils n'ont pas toujours vocation à être versionnés.

## Ce que signifie `.github`

Dans beaucoup de dépôts, `.github` est le lieu naturel pour stocker des fichiers qui structurent le travail collaboratif dans l'écosystème GitHub.

On y retrouve souvent :

- des workflows d'automatisation ;
- des templates d'issues ou de pull requests ;
- des conventions partagées ;
- des fichiers d'instructions destinés à l'assistance de code ou à la revue.

Quand une règle doit s'appliquer à toute l'équipe et voyager avec le dépôt, `.github` est souvent un bon candidat.

## Ce que signifie `.claude`

Dans des usages associés à Claude Code, un dossier `.claude` sert généralement à regrouper des artefacts liés à la façon dont l'outil doit travailler dans le projet.

Selon les équipes, on peut y mettre :

- des instructions persistantes ;
- des commandes ou recettes réutilisables ;
- des descriptions de workflows ;
- des repères de contexte projet.

L'idée clé n'est pas le nom du dossier. L'idée clé est la suivante : rendre le cadre de travail explicite pour obtenir des comportements plus consistants.

## Ce qu'il faut formaliser en priorité

Si vous devez écrire peu de choses au départ, commencez par formaliser :

1. le rôle attendu de l'assistant ;
2. ce qu'il peut modifier ou non ;
3. les validations obligatoires ;
4. les commandes utiles pour vérifier ;
5. le format attendu des comptes rendus ;
6. les zones sensibles du projet ;
7. les conventions de style ou d'architecture déjà établies.

## Exemples de contenus utiles

### Instructions de dépôt

Exemples de règles utiles :

- préférer des changements minimaux ;
- ne pas toucher aux fichiers générés ;
- vérifier les erreurs avant de conclure ;
- exécuter les tests pertinents si une modification est appliquée ;
- résumer les risques résiduels.

### Workflows réutilisables

Exemples de workflows utiles :

- analyser un bug de production ;
- préparer une revue de code ;
- migrer un composant ;
- documenter une API interne ;
- investiguer une erreur de build.

### Repères de contexte projet

Exemples de repères utiles :

- commande de test principale ;
- commande de lint ;
- arborescence importante ;
- zones à fort risque ;
- conventions de nommage.

## Shared vs local

Une distinction simple aide beaucoup :

- partagé et versionné : ce qui doit être appliqué de façon stable dans le dépôt ;
- local et personnel : ce qui relève de préférences individuelles, de secrets, de tokens d'accès ou d'essais temporaires.

Il est utile d'enseigner cette distinction tôt, parce qu'elle conditionne la sécurité, la reproductibilité et la qualité de collaboration.

## Ce qu'il ne faut pas faire

- accumuler des instructions contradictoires ;
- mélanger règles d'équipe et préférences personnelles sans distinction ;
- versionner des informations sensibles ;
- supposer que l'outil devinera les usages implicites du projet ;
- créer un dossier de conventions sans le relire ni le maintenir.

## Ce que cela change pour un développeur

Ces fichiers ne sont pas de la bureaucratie. Ils sont une interface entre la culture d'équipe et l'outil. Bien écrits, ils réduisent les ambiguïtés, rendent l'assistance plus reproductible et diminuent les erreurs de cadrage.

---

*Guide · Chapitre 4 sur 5*

[← Index](../index.md) | **Précédent ←** [Outils et écosystème](03-outils.md) | **Suivant →** [Pratiques développeur](05-pratiques.md)