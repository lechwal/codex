-- Schéma initial pour Supabase / Postgres
-- Gère les utilisateurs, équipes, réunions, décisions, tâches et journal d'activité

create table if not exists public.users (
  id uuid primary key default gen_random_uuid(),
  nom text not null,
  email text not null unique,
  statut text not null default 'actif',
  role_global text not null default 'agent',
  created_at timestamp with time zone default now()
);

create table if not exists public.teams (
  id uuid primary key default gen_random_uuid(),
  nom text not null,
  description text,
  created_at timestamp with time zone default now()
);

create table if not exists public.user_team_membership (
  user_id uuid references public.users(id) on delete cascade,
  team_id uuid references public.teams(id) on delete cascade,
  role_dans_equipe text not null default 'membre',
  primary key (user_id, team_id)
);

create table if not exists public.meetings (
  id uuid primary key default gen_random_uuid(),
  titre text not null,
  date_heure_debut timestamp with time zone not null,
  date_heure_fin timestamp with time zone not null,
  ordre_du_jour text,
  compte_rendu text,
  team_id uuid references public.teams(id),
  created_at timestamp with time zone default now()
);

create table if not exists public.meeting_participants (
  meeting_id uuid references public.meetings(id) on delete cascade,
  user_id uuid references public.users(id) on delete cascade,
  primary key (meeting_id, user_id)
);

create table if not exists public.decisions (
  id uuid primary key default gen_random_uuid(),
  titre text not null,
  description text,
  source_type text not null,
  meeting_id uuid references public.meetings(id),
  prise_par_user_id uuid references public.users(id) not null,
  date_prise timestamp with time zone not null default now(),
  impact_team_id uuid references public.teams(id),
  visibilite text not null default 'publique_equipe',
  statut text not null default 'active',
  created_at timestamp with time zone default now()
);

create table if not exists public.tasks (
  id uuid primary key default gen_random_uuid(),
  titre text not null,
  description text,
  assignee_id uuid references public.users(id),
  cree_par_user_id uuid references public.users(id) not null,
  team_id uuid references public.teams(id),
  priorite text not null default 'normale',
  echeance date,
  statut text not null default 'a_faire',
  liee_a_decision_id uuid references public.decisions(id),
  created_at timestamp with time zone default now()
);

create table if not exists public.activity_log (
  id uuid primary key default gen_random_uuid(),
  type_objet text not null,
  objet_id uuid not null,
  user_id uuid references public.users(id),
  action text not null,
  diff jsonb,
  occurred_at timestamp with time zone not null default now()
);

-- Indexes utiles
create index if not exists idx_tasks_assignee on public.tasks (assignee_id);
create index if not exists idx_tasks_team on public.tasks (team_id);
create index if not exists idx_decisions_team on public.decisions (impact_team_id);
create index if not exists idx_activity_object on public.activity_log (type_objet, objet_id);

-- Exemples de politiques RLS (à activer après ajustement selon l'implémentation Supabase)
-- alter table public.tasks enable row level security;
-- create policy "Agents voient leurs tâches" on public.tasks
--   for select using (
--     auth.uid() = assignee_id
--     or auth.uid() in (
--       select user_id from public.user_team_membership where team_id = public.tasks.team_id
--     )
--   );
