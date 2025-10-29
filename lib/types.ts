export type Visibility = "publique_equipe" | "restreinte_direction" | "globale";
export type TaskStatus = "a_faire" | "en_cours" | "bloque" | "fait";
export type Priority = "basse" | "normale" | "haute" | "critique";

export interface Team {
  id: string;
  nom: string;
  description?: string;
}

export interface Decision {
  id: string;
  titre: string;
  description: string;
  sourceType: "reunion" | "terrain" | "urgence" | "visite";
  meetingId?: string;
  priseParUser: string;
  datePrise: string;
  impactTeamId?: string;
  visibilite: Visibility;
  statut: "active" | "remplacee" | "annulee";
}

export interface Task {
  id: string;
  titre: string;
  description: string;
  assigneeId: string;
  creeParId: string;
  teamId: string;
  priorite: Priority;
  echeance?: string;
  statut: TaskStatus;
  decisionId?: string;
}

export interface Meeting {
  id: string;
  titre: string;
  dateDebut: string;
  dateFin: string;
  participants: string[];
  ordreDuJour: string;
  compteRendu?: string;
  teamId?: string;
  decisionIds?: string[];
}
