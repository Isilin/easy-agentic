"""
Serveur MCP minimal — exemple pédagogique (Python)

Ce serveur expose trois outils simples à titre d'illustration.
Pour l'utiliser dans VS Code avec GitHub Copilot :
  1. pip install -r requirements.txt
  2. python server.py
  3. Ajouter dans les settings VS Code :
     "github.copilot.chat.mcpServers": {
       "example-py": { "command": "python", "args": ["<chemin>/server.py"] }
     }

Documentation MCP : https://modelcontextprotocol.io
"""

import os
import platform
import sys
from pathlib import Path

from mcp.server.fastmcp import FastMCP

mcp = FastMCP("mcp-server-example-py")


# ─── Outil 1 : echo ──────────────────────────────────────────────────────────

@mcp.tool()
def echo(message: str) -> str:
    """Renvoie le message reçu tel quel. Utile pour tester la connexion."""
    return f"echo: {message}"


# ─── Outil 2 : get_env_info ───────────────────────────────────────────────────

@mcp.tool()
def get_env_info() -> dict:
    """
    Retourne des informations sur l'environnement Python en cours :
    version, plateforme et répertoire de travail.
    """
    return {
        "python_version": sys.version,
        "platform": platform.system(),
        "platform_version": platform.version(),
        "cwd": os.getcwd(),
    }


# ─── Outil 3 : list_files ─────────────────────────────────────────────────────

@mcp.tool()
def list_files(path: str) -> str:
    """
    Liste les fichiers et dossiers d'un répertoire (non récursif).

    Args:
        path: Chemin absolu ou relatif du répertoire à lister.
    """
    try:
        target = Path(path).resolve()
        if not target.is_dir():
            return f"Erreur : '{path}' n'est pas un répertoire valide."

        entries = []
        for entry in sorted(target.iterdir()):
            icon = "📁" if entry.is_dir() else "📄"
            entries.append(f"{icon} {entry.name}")

        return f"Contenu de {target} :\n\n" + "\n".join(entries)
    except Exception as e:
        return f"Erreur : {e}"


# ─── Démarrage ────────────────────────────────────────────────────────────────

if __name__ == "__main__":
    mcp.run()
