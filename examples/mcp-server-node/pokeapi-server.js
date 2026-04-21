/**
 * Serveur MCP — PokeAPI
 *
 * Exemple de serveur MCP qui se connecte à une API publique externe (https://pokeapi.co).
 * Montre comment exposer des données distantes à un agent via MCP.
 *
 * Installation :
 *   npm install   (même package.json que server.js)
 *
 * Lancement :
 *   node pokeapi-server.js
 *
 * Déclaration dans VS Code (settings.json) :
 *   "github.copilot.chat.mcpServers": {
 *     "pokeapi": {
 *       "command": "node",
 *       "args": ["/chemin/vers/mcp-server-node/pokeapi-server.js"]
 *     }
 *   }
 *
 * Exemples de questions à poser ensuite dans Copilot Chat :
 *   - "Quels sont les stats de base de Pikachu ?"
 *   - "Le type Feu est-il efficace contre le type Eau ?"
 *   - "Donne-moi la description de Bulbizarre"
 */

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

const BASE_URL = "https://pokeapi.co/api/v2";

const server = new McpServer({
  name: "pokeapi-mcp",
  version: "1.0.0",
});

// ─── Utilitaire fetch ─────────────────────────────────────────────────────────

async function apiFetch(path) {
  const res = await fetch(`${BASE_URL}${path}`);
  if (!res.ok) {
    throw new Error(`PokeAPI ${res.status} : ${BASE_URL}${path}`);
  }
  return res.json();
}

// ─── Outil 1 : get_pokemon ────────────────────────────────────────────────────

server.tool(
  "get_pokemon",
  "Récupère les informations d'un Pokémon : types, statistiques de base, taille, poids et capacités.",
  {
    name_or_id: z
      .string()
      .describe("Nom en minuscules (ex: pikachu, bulbasaur) ou numéro Pokédex (ex: 25)"),
  },
  async ({ name_or_id }) => {
    const data = await apiFetch(`/pokemon/${name_or_id.toLowerCase()}`);

    const result = {
      id: data.id,
      name: data.name,
      types: data.types.map((t) => t.type.name),
      abilities: data.abilities.map((a) => ({
        name: a.ability.name,
        hidden: a.is_hidden,
      })),
      stats: Object.fromEntries(
        data.stats.map((s) => [s.stat.name, s.base_stat])
      ),
      height_dm: data.height,   // en décimètres
      weight_hg: data.weight,   // en hectogrammes
      base_experience: data.base_experience,
    };

    return {
      content: [{ type: "text", text: JSON.stringify(result, null, 2) }],
    };
  }
);

// ─── Outil 2 : get_pokemon_description ───────────────────────────────────────

server.tool(
  "get_pokemon_description",
  "Récupère la description Pokédex, la génération et la catégorie d'un Pokémon. Indique s'il est légendaire ou mythique.",
  {
    name_or_id: z.string().describe("Nom en minuscules ou numéro Pokédex"),
  },
  async ({ name_or_id }) => {
    const data = await apiFetch(`/pokemon-species/${name_or_id.toLowerCase()}`);

    // Préférer la description en français, sinon anglais
    const desc =
      data.flavor_text_entries.find((e) => e.language.name === "fr") ??
      data.flavor_text_entries.find((e) => e.language.name === "en");

    const category =
      data.genera.find((g) => g.language.name === "fr")?.genus ??
      data.genera.find((g) => g.language.name === "en")?.genus;

    const result = {
      name: data.name,
      generation: data.generation.name,
      category,
      description: desc?.flavor_text.replace(/\f/g, " ") ?? "Aucune description disponible.",
      is_legendary: data.is_legendary,
      is_mythical: data.is_mythical,
      evolution_chain_id: data.evolution_chain?.url?.split("/").at(-2),
    };

    return {
      content: [{ type: "text", text: JSON.stringify(result, null, 2) }],
    };
  }
);

// ─── Outil 3 : get_type_matchups ─────────────────────────────────────────────

server.tool(
  "get_type_matchups",
  "Retourne les relations d'un type Pokémon : contre quels types il est fort, faible, ou nul.",
  {
    type: z
      .string()
      .describe(
        "Nom du type en anglais en minuscules : fire, water, grass, electric, psychic, dragon, ghost, dark, steel, fairy…"
      ),
  },
  async ({ type }) => {
    const data = await apiFetch(`/type/${type.toLowerCase()}`);
    const dmg = data.damage_relations;

    const result = {
      type: data.name,
      attacking: {
        "x2 (super efficace)": dmg.double_damage_to.map((t) => t.name),
        "x0.5 (pas très efficace)": dmg.half_damage_to.map((t) => t.name),
        "x0 (sans effet)": dmg.no_damage_to.map((t) => t.name),
      },
      defending: {
        "x2 (vulnérable)": dmg.double_damage_from.map((t) => t.name),
        "x0.5 (résistant)": dmg.half_damage_from.map((t) => t.name),
        "x0 (immunisé)": dmg.no_damage_from.map((t) => t.name),
      },
    };

    return {
      content: [{ type: "text", text: JSON.stringify(result, null, 2) }],
    };
  }
);

// ─── Outil 4 : search_pokemon_by_type ────────────────────────────────────────

server.tool(
  "search_pokemon_by_type",
  "Liste les 20 premiers Pokémon d'un type donné.",
  {
    type: z
      .string()
      .describe("Nom du type en anglais en minuscules (ex: fire, water, grass)"),
  },
  async ({ type }) => {
    const data = await apiFetch(`/type/${type.toLowerCase()}`);
    const pokemon = data.pokemon
      .slice(0, 20)
      .map((p) => p.pokemon.name);

    return {
      content: [
        {
          type: "text",
          text: `Pokémon de type ${type} (20 premiers) :\n${pokemon.join(", ")}`,
        },
      ],
    };
  }
);

// ─── Démarrage ────────────────────────────────────────────────────────────────

const transport = new StdioServerTransport();
await server.connect(transport);
