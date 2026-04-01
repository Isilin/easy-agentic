# Fichiers et conventions

## Pourquoi ces fichiers comptent

Dans un environnement agentic, la qualite ne depend pas seulement du modele. Elle depend aussi de tout ce qui encadre son usage : instructions, permissions, conventions d'equipe, workflows et contexte recurrent.

Quand ces regles restent uniquement dans la tete des personnes, les resultats deviennent instables. Quand elles sont explicitees dans le depot, elles deviennent partageables, auditables et ameliorables.

## Trois grandes categories de fichiers

### 1. Les fichiers de collaboration d'equipe

Ils portent des regles versionnees et partagees. Leur role est d'aligner les usages entre plusieurs personnes et plusieurs sessions.

### 2. Les fichiers de contexte et d'instructions

Ils servent a donner au systeme des regles de comportement, des reperes de projet et des methodes de travail reutilisables.

### 3. Les fichiers locaux ou personnels

Ils relevent davantage de l'environnement individuel, des preferences locales ou de l'experimentation personnelle. Ils n'ont pas toujours vocation a etre versionnes.

## Ce que signifie `.github`

Dans beaucoup de depots, `.github` est le lieu naturel pour stocker des fichiers qui structurent le travail collaboratif dans l'ecosysteme GitHub.

On y retrouve souvent :

- des workflows d'automatisation ;
- des templates d'issues ou de pull requests ;
- des conventions partagees ;
- des fichiers d'instructions destines a l'assistance de code ou a la revue.

Ce que cela veut dire pedagogiquement : quand une regle doit s'appliquer a toute l'equipe et voyager avec le depot, `.github` est souvent un bon candidat.

## Ce que signifie `.claude`

Dans des usages associes a Claude Code, un dossier `.claude` sert generalement a regrouper des artefacts lies a la facon dont l'outil doit travailler dans le projet.

Selon les equipes, on peut y mettre :

- des instructions persistantes ;
- des commandes ou recettes reutilisables ;
- des descriptions de workflows ;
- des reperes de contexte projet.

L'idee cle n'est pas le nom du dossier. L'idee cle est la suivante : rendre le cadre de travail explicite pour obtenir des comportements plus consistants.

## Ce qu'il faut formaliser en priorite

Si vous devez ecrire peu de choses au depart, commencez par formaliser :

1. le role attendu de l'assistant ;
2. ce qu'il peut modifier ou non ;
3. les validations obligatoires ;
4. les commandes utiles pour verifier ;
5. le format attendu des comptes rendus ;
6. les zones sensibles du projet ;
7. les conventions de style ou d'architecture deja etablies.

## Exemples de contenus utiles

### Instructions de depot

Exemples de regles utiles :

- preferer des changements minimaux ;
- ne pas toucher aux fichiers generes ;
- verifier les erreurs avant de conclure ;
- executer les tests pertinents si une modification est appliquee ;
- resumer les risques residuels.

### Workflows reutilisables

Exemples de workflows utiles :

- analyser un bug de production ;
- preparer une revue de code ;
- migrer un composant ;
- documenter une API interne ;
- investiguer une erreur de build.

### Reperes de contexte projet

Exemples de reperes utiles :

- commande de test principale ;
- commande de lint ;
- arborescence importante ;
- zones a fort risque ;
- conventions de nommage.

## Shared vs local

Une distinction simple aide beaucoup :

- partage et versionne : ce qui doit etre applique de facon stable dans le depot ;
- local et personnel : ce qui releve de preferences individuelles, de secrets, de tokens d'acces ou d'essais temporaires.

Il est utile d'enseigner cette distinction tot, parce qu'elle conditionne la securite, la reproductibilite et la qualite de collaboration.

## Ce qu'il ne faut pas faire

- accumuler des instructions contradictoires ;
- melanger regles d'equipe et preferences personnelles sans distinction ;
- versionner des informations sensibles ;
- supposer que l'outil devinera les usages implicites du projet ;
- creer un dossier de conventions sans le relire ni le maintenir.

## Ce que cela change pour un developpeur

Ces fichiers ne sont pas de la bureaucratie. Ils sont une interface entre la culture d'equipe et l'outil. Bien ecrits, ils reduisent les ambiguities, rendent l'assistance plus reproductible et diminuent les erreurs de cadrage.