# Politique d'usage des outils (Tools)

Ce fichier définit quels outils l'agent est autorisé à utiliser dans ce dépôt,
et sous quelles conditions.

---

## Outils autorisés sans confirmation

Ces outils peuvent être appelés librement par l'agent :

- `read_file` — lecture de fichiers
- `grep_search` — recherche de texte dans le dépôt
- `list_directory` — listage du contenu d'un répertoire
- `get_errors` — récupération des erreurs TypeScript / lint

## Outils autorisés avec confirmation obligatoire

Ces outils nécessitent une validation explicite de l'utilisateur avant exécution :

- `apply_patch` / `edit_file` — toute modification de fichier source
- `run_in_terminal` — exécution de commandes dans le terminal
- `create_file` — création d'un nouveau fichier
- `delete_file` — suppression d'un fichier

## Outils interdits sans demande explicite

Ces outils ne doivent pas être utilisés sauf instruction directe et explicite :

- Commandes destructrices git (`reset --hard`, `push --force`, `branch -D`)
- `npm install` ou modification de `package.json` sans discussion préalable
- Toute commande qui écrit dans la base de données de production
- Accès aux fichiers `.env` ou aux secrets

## Règles générales

1. Ne pas exécuter de commande dont l'effet est irréversible sans confirmation
2. Signaler si une action dépasse le scope de la demande initiale
3. Arrêter et demander si une action nécessiterait des permissions inattendues
4. Logger les outils appelés dans le résumé final de la tâche
