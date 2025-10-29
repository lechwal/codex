import { Decision, Meeting, Task, Team } from "./types";

export const teams: Team[] = [
  {
    id: "team-ops",
    nom: "Service Opérations",
    description: "Coordination des opérations quotidiennes"
  },
  {
    id: "team-night",
    nom: "Équipe Nuit",
    description: "Agents en service nocturne"
  }
];

export const decisions: Decision[] = [
  {
    id: "decision-1",
    titre: "Rotation chef nuit semaine prochaine",
    description:
      "À partir de lundi, Marc assurera la coordination des rondes de nuit sur le secteur B.",
    sourceType: "reunion",
    meetingId: "meeting-1",
    priseParUser: "user-chef",
    datePrise: "2024-02-10T10:00:00Z",
    impactTeamId: "team-night",
    visibilite: "publique_equipe",
    statut: "active"
  },
  {
    id: "decision-2",
    titre: "Audit sécurité périmètre",
    description:
      "Validation du lancement d'un audit complet des accès périphériques après l'incident du 3/02.",
    sourceType: "urgence",
    priseParUser: "user-admin",
    datePrise: "2024-02-08T07:30:00Z",
    impactTeamId: "team-ops",
    visibilite: "restreinte_direction",
    statut: "active"
  }
];

export const tasks: Task[] = [
  {
    id: "task-1",
    titre: "Mettre à jour le planning des rondes",
    description:
      "Intégrer la nouvelle rotation décidée en réunion dans le planning partagé.",
    assigneeId: "user-agent-1",
    creeParId: "user-chef",
    teamId: "team-night",
    priorite: "haute",
    echeance: "2024-02-12",
    statut: "en_cours",
    decisionId: "decision-1"
  },
  {
    id: "task-2",
    titre: "Collecter les incidents du mois",
    description:
      "Consolider les comptes rendus d'incidents pour préparer l'audit sécurité.",
    assigneeId: "user-agent-2",
    creeParId: "user-admin",
    teamId: "team-ops",
    priorite: "normale",
    echeance: "2024-02-16",
    statut: "a_faire",
    decisionId: "decision-2"
  }
];

export const meetings: Meeting[] = [
  {
    id: "meeting-1",
    titre: "Brief hebdo nuit",
    dateDebut: "2024-02-09T18:00:00Z",
    dateFin: "2024-02-09T19:00:00Z",
    participants: ["user-chef", "user-agent-1", "user-agent-3"],
    ordreDuJour:
      "1. Retours incidents\n2. Rotation chef de nuit\n3. Points logistique",
    compteRendu:
      "Décision: Marc coordonnera la rotation. Actions: mettre à jour planning, informer les équipes.",
    teamId: "team-night",
    decisionIds: ["decision-1"]
  }
];
