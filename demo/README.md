# demo/

Dossier de démonstration pour comparer ce que produit GitHub Copilot
avec et sans contexte, à partir du même prompt.

---

## Le prompt

→ [`prompt.md`](prompt.md)

Copier-coller son contenu dans GitHub Copilot Chat (mode Agent recommandé).
À utiliser tel quel dans les deux dossiers ci-dessous.

---

## Déroulé de la démo

Le geste est **identique** dans les deux dossiers : ouvrir le dossier dans VS Code,
coller le prompt dans Copilot Agent mode, laisser tourner. C'est ça le point :
même prompt, même modèle — seul le contexte change.

### Étape 1 — Sans contexte (`without-context/`)

1. Ouvrir `without-context/` dans VS Code
2. Copier-coller le contenu de `prompt.md` dans Copilot Chat (mode Agent)
3. Laisser Copilot générer

Copilot part de zéro et fait ses propres choix de structure, nommage et style.

### Étape 2 — Avec contexte (`with-context/`)

1. Ouvrir `with-context/` dans VS Code
2. Copier-coller le **même prompt** dans Copilot Chat (mode Agent)
3. Laisser Copilot générer

Copilot lit automatiquement `.github/copilot-instructions.md` et les fichiers
`instructions/` dès l'ouverture du dossier. Pas d'action supplémentaire requise —
le contexte est actif dès que le dossier est ouvert.

### Étape 3 (optionnelle) — Revue du code généré

Toujours dans `with-context/`, après la génération :

> "Utilise l'agent reviewer pour vérifier que le code généré respecte les conventions du projet."

Montre la boucle de vérification : l'agent lit le code produit, le compare aux
règles définies dans `.github/`, et produit un rapport de conformité.

---

## Ce que font les autres fichiers de `.github/` (hors comparaison principale)

Ces fichiers ne sont pas dans la chaîne de la démo principale. Ils illustrent
d'autres usages agentiques à explorer séparément.

**`agents/setup.agent.md`** — utile pour une démo de scaffolding pur : partir d'un
dossier vraiment vide et demander *"Initialise le projet"* avant de coller le prompt.
L'agent crée la structure, installe les dépendances, puis le prompt implémente.

**`skills/component-scaffold/SKILL.md`** — se déclenche quand on demande à Copilot
de créer un nouveau composant en cours de développement. La skill impose le template
exact (interface Props, CSS Module, aria-label…).

---

## Ce que contient `.github/` dans `with-context/`

```
.github/
├── copilot-instructions.md           ← stack, types, structure de fichiers, règles générales
├── instructions/
│   ├── architecture.instructions.md  ← hiérarchie des composants, interface du hook, storage
│   └── style.instructions.md         ← conventions CSS Modules, variables, layout
├── skills/
│   └── component-scaffold/
│       └── SKILL.md                  ← template de scaffolding de composant
└── agents/
    ├── setup.agent.md                ← initialisation du projet (Vite + deps + structure)
    └── reviewer.agent.md             ← revue du code généré selon les conventions
```

---

## Ce qu'on observe

| | `without-context/` | `with-context/` |
|---|---|---|
| Structure des fichiers | Libre (choix de Copilot) | Imposée (`KanbanBoard/`, `KanbanColumn/`…) |
| Nommage des types | Libre | `Todo`, `TodoStatus`, `COLUMNS` imposés |
| Hook custom | Peut-être absent | `useTodos` avec interface précise |
| Gestion du localStorage | Inline possible | Isolée dans `utils/storage.ts` |
| Composants RadixUI utilisés | Au hasard | `Dialog`, `AlertDialog`, `DropdownMenu` |
| Style | Inline, Tailwind, ou autre | CSS Modules + variables CSS |
| Accessibilité | Variable | `aria-label` sur tous les boutons |

---

## Pour aller plus loin

Après avoir observé la différence, utiliser `reviewer.agent.md` dans `with-context/` pour
demander à Copilot de vérifier sa propre sortie :

> "Utilise l'agent reviewer pour vérifier que le code généré respecte les conventions du projet."
