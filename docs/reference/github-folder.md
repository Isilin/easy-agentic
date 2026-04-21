# Structure du dossier `.github`

Le dossier `.github` sert deux familles d'usages bien distinctes :

1. **La plateforme GitHub** — des fichiers que GitHub lui-même lit pour piloter les workflows, les templates, les permissions et les politiques du dépôt.
2. **Les outils IA** — des conventions adoptées par Copilot, Claude Code, Cursor et d'autres pour lire les instructions, agents, skills et outils du projet.

Ces deux familles cohabitent dans le même dossier. Les distinguer aide à comprendre qui lit quoi, et pourquoi.

---

## Vue d'ensemble

```text
.github/
│
│  ── Fichiers lus par GitHub ──────────────────────────────────────────────────
│
├── workflows/
│   ├── ci.yml                        ← pipeline CI (tests, lint, build)
│   ├── release.yml                   ← pipeline de release
│   └── dependabot-auto-merge.yml     ← automatisation Dependabot
│
├── ISSUE_TEMPLATE/
│   ├── bug_report.yml                ← template de rapport de bug
│   ├── feature_request.yml           ← template de demande de fonctionnalité
│   └── config.yml                    ← configuration des templates d'issue
│
├── PULL_REQUEST_TEMPLATE.md          ← template de description de PR
├── CODEOWNERS                        ← règles d'affectation des reviewers
├── dependabot.yml                    ← configuration des mises à jour automatiques
├── CONTRIBUTING.md                   ← guide de contribution
├── SECURITY.md                       ← politique de sécurité et contacts
│
│  ── Fichiers lus par les outils IA ───────────────────────────────────────────
│
├── copilot-instructions.md           ← instructions globales lues automatiquement
│                                        par GitHub Copilot dans VS Code
│
├── instructions/
│   ├── repo.instructions.md          ← règles de modification pour tout le dépôt
│   ├── frontend.instructions.md      ← règles spécifiques au frontend (applyTo: src/ui/**)
│   └── backend.instructions.md       ← règles spécifiques au backend
│
├── agents/
│   ├── reviewer.agent.md             ← agent de revue de code
│   ├── test-verifier.agent.md        ← sous-agent vérificateur de tests
│   └── doc-writer.agent.md           ← agent de documentation
│
├── prompts/
│   ├── explain-tradeoff.prompt.md    ← template de comparaison de solutions
│   └── bug-investigation.prompt.md  ← template d'investigation de bug
│
├── skills/
│   ├── api-review/
│   │   ├── SKILL.md                  ← skill de revue de breaking changes
│   │   └── checklist.md
│   └── migration-assistant/
│       └── SKILL.md                  ← skill d'aide à la migration
│
└── mcp/
    ├── servers.md                    ← registre des serveurs MCP du projet
    └── usage-guidelines.md          ← règles d'usage et permissions par outil
```

---

## Ce que GitHub lit nativement

### `workflows/`
Définit les pipelines d'automatisation (GitHub Actions). Chaque fichier `.yml` est un workflow déclenché par des événements (`push`, `pull_request`, `schedule`…).

### `ISSUE_TEMPLATE/`
Modèles proposés à l'utilisateur lors de la création d'une issue. Le format `.yml` permet des formulaires structurés. `config.yml` peut désactiver les issues libres et forcer l'usage des templates.

### `PULL_REQUEST_TEMPLATE.md`
Texte pré-rempli dans la description de chaque nouvelle PR. Utile pour rappeler la checklist de validation (tests, doc, sécurité…).

### `CODEOWNERS`
Associe des chemins de fichiers à des personnes ou équipes. GitHub ajoute automatiquement les reviewers concernés lors d'une PR.

```text
# Exemples
*                   @org/team-core       # toute modification → équipe core
src/auth/           @alice @bob          # répertoire auth → Alice et Bob
*.infrastructure.ts @org/team-infra      # fichiers infra → équipe infra
```

### `dependabot.yml`
Configure les mises à jour automatiques de dépendances (npm, pip, Docker, GitHub Actions…). Definit la fréquence, les labels, les reviewers et les limites de PRs ouvertes.

### `CONTRIBUTING.md`, `SECURITY.md`
Documents affichés automatiquement par GitHub dans des contextes spécifiques (création d'issue, section Security).

---

## Ce que les outils IA lisent

### `copilot-instructions.md`
Fichier lu **automatiquement** par GitHub Copilot dans VS Code pour toutes les interactions sur le dépôt. C'est l'équivalent d'un system prompt partagé pour toute l'équipe.

Contenu typique : stack technique, conventions de nommage, framework de test, règles de sécurité, zones sensibles, commandes utiles.

> Ce fichier n'a aucun effet sur GitHub lui-même — il est uniquement lu par Copilot.

### `instructions/`
Fichiers `.instructions.md` avec frontmatter YAML. Le champ `applyTo` permet de cibler les règles selon le chemin des fichiers concernés.

```yaml
---
description: "Règles pour les composants React de ce projet."
applyTo: "src/ui/**/*.tsx"
---

- Utiliser des composants fonctionnels uniquement
- Toujours typer les props avec une interface dédiée
- Pas de logique métier dans les composants
```

### `agents/`
Définitions d'agents spécialisés. Chaque fichier `.agent.md` décrit le rôle, les outils autorisés, le processus et le format de sortie d'un agent.

### `prompts/`
Templates de prompts réutilisables. Permettent de standardiser les demandes récurrentes dans l'équipe.

### `skills/`
Compétences packagées. Chaque skill est un dossier avec un `SKILL.md` contenant un frontmatter `name` + `description`. La description est critique : c'est elle qui déclenche le chargement automatique de la skill.

### `mcp/`
Registre des serveurs MCP disponibles dans le projet — leur rôle, leurs outils exposés, leurs permissions et leur propriétaire.

---

## Ce qu'il faut éviter dans `.github`

- **Données sensibles** : tokens, mots de passe, secrets — même dans les fichiers d'instructions. Utiliser `.env` et les GitHub Secrets pour CI.
- **Instructions contradictoires** : si `repo.instructions.md` et `frontend.instructions.md` se contredisent, le comportement devient imprévisible.
- **Fichiers non maintenus** : une instruction obsolète est pire qu'une absence d'instruction. Prévoir une revue périodique.
- **Mélanger règles d'équipe et préférences personnelles** : ce qui relève du goût individuel va dans un fichier local, pas dans `.github`.

---

## Ce qui reste local (hors `.github`)

Certaines choses n'ont pas vocation à être versionnées :

- Préférences personnelles d'IDE ou de style
- Tokens d'accès personnels
- Expérimentations locales en cours
- Fichiers `.claude` de travail individuel

La règle de séparation : **si ça doit s'appliquer à toute l'équipe et voyager avec le dépôt → `.github`. Sinon → local.**

---

*Voir aussi : [Fichiers et conventions](../guide/04-conventions.md) pour le raisonnement derrière ces choix.*
