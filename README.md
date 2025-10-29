# Codex Ops

Plateforme opérationnelle pour centraliser décisions, tâches et réunions d'équipes terrain.

## Stack

- Next.js 14 (App Router, TypeScript)
- Tailwind CSS (thème sombre personnalisé)
- Supabase (Postgres + Auth + RLS)

## Démarrage

```bash
pnpm install
pnpm dev
```

Ou utilisez `npm`/`yarn` selon votre préférence.

## Publication sur GitHub

1. Vérifiez que toutes les modifications sont commitées localement :

   ```bash
   git status
   ```

2. Si ce n'est pas déjà fait, ajoutez votre dépôt distant :

   ```bash
   git remote add origin git@github.com:<votre-compte>/<votre-repo>.git
   ```

3. Poussez la branche de travail (par défaut `work`) vers GitHub :

   ```bash
   git push -u origin work
   ```

4. Si votre branche principale sur GitHub est `main`, soit créez une Pull Request depuis `work`, soit poussez directement sur `main` :

   ```bash
   git push -u origin work:main
   ```

Ces étapes garantissent que l'intégralité des fichiers du projet apparaissent dans votre dépôt GitHub.

## Structure

- `app/` – Pages principales (`/dashboard`, `/tasks`, `/meetings`, `/decisions`, `/admin`).
- `components/` – Composants UI (cards tâches, décisions, réunions).
- `lib/` – Types TypeScript et données mockées pour prototyper l'interface.
- `supabase/schema.sql` – Schéma de base de données initial (tables + indices + ébauche RLS).

## Étapes suivantes

1. Brancher Supabase Auth et traduire les mocks en requêtes typées.
2. Ajouter les formulaires de création/édition (décision, tâche, réunion) avec validation.
3. Implémenter le journal d'activité et les politiques RLS détaillées.
4. Connecter un design system ou composants additionnels pour les modales et menus.
