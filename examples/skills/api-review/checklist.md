# Checklist — API Review

Checklist rapide à parcourir pour chaque endpoint modifié.

## Endpoint

- [ ] Le chemin a-t-il changé ?
- [ ] La méthode HTTP a-t-elle changé ?
- [ ] Des paramètres de path ont-ils été supprimés ou renommés ?
- [ ] Des paramètres de query obligatoires ont-ils été ajoutés ?

## Request body

- [ ] Des champs obligatoires ont-ils été ajoutés ?
- [ ] Des champs existants ont-ils été supprimés ?
- [ ] Des types ont-ils changé (string → number, optional → required) ?

## Response body

- [ ] Des champs existants ont-ils été supprimés ?
- [ ] Des champs existants ont-ils été renommés ?
- [ ] Des types ont-ils changé ?
- [ ] La structure a-t-elle changé (objet → tableau, imbrication différente) ?

## Codes de statut

- [ ] Le code de statut nominal a-t-il changé ?
- [ ] De nouveaux codes d'erreur ont-ils été introduits ?

## Auth

- [ ] Les exigences d'authentification ont-elles changé ?
- [ ] Les permissions requises ont-elles changé ?

## Versioning

- [ ] Un numéro de version est-il incrémenté ?
- [ ] L'ancien endpoint est-il maintenu en dépréciation ?
- [ ] La date de fin de support est-elle communiquée ?
