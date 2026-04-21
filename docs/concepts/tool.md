# Tool (.github / .claude)

## Convention de fichiers proposée

```text
.github/
  agents/
    fixer.agent.md        # déclare un sous-ensemble de tools
  hooks/
    guardrails.json       # enforcement autour des tools

.claude/
  tools/
    allowed-tools.md
```

## Exemple de politique d'usage des tools

```md
# Allowed Tools

Par défaut :
- Autorisés : read_file, grep_search, get_errors
- Autorisés avec confirmation : apply_patch, run_in_terminal
- Interdits sans demande explicite : commandes destructrices git
```