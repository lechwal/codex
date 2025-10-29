import clsx from "classnames";
import { Task } from "../lib/types";
import { decisions, teams } from "../lib/mock-data";

const statusLabels: Record<Task["statut"], string> = {
  a_faire: "À faire",
  en_cours: "En cours",
  bloque: "Bloqué",
  fait: "Terminé"
};

const priorityToBadge: Record<Task["priorite"], string> = {
  critique: "badge-critical",
  haute: "badge-high",
  normale: "badge-normal",
  basse: "badge-low"
};

interface TaskCardProps {
  task: Task;
}

export function TaskCard({ task }: TaskCardProps) {
  const team = teams.find((teamItem) => teamItem.id === task.teamId);
  const decision = decisions.find((item) => item.id === task.decisionId);

  return (
    <article className="card p-5 space-y-4">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-white">{task.titre}</h3>
          <p className="text-sm text-gray-400 mt-1">{task.description}</p>
        </div>
        <span className={clsx(priorityToBadge[task.priorite])}>{task.priorite}</span>
      </div>
      <div className="grid grid-cols-1 gap-3 text-sm text-gray-300 md:grid-cols-2">
        <div>
          <span className="text-gray-500">Statut</span>
          <p className="font-medium text-white">{statusLabels[task.statut]}</p>
        </div>
        <div>
          <span className="text-gray-500">Échéance</span>
          <p className="font-medium text-white">{task.echeance ?? "—"}</p>
        </div>
        <div>
          <span className="text-gray-500">Équipe</span>
          <p className="font-medium text-white">{team?.nom ?? "—"}</p>
        </div>
        <div>
          <span className="text-gray-500">Assignée à</span>
          <p className="font-medium text-white">{task.assigneeId}</p>
        </div>
      </div>
      {decision ? (
        <div className="rounded-2xl border border-accent/30 bg-accent/10 p-4 text-sm">
          <span className="text-xs uppercase tracking-wide text-accent">Décision liée</span>
          <p className="font-semibold text-white mt-1">{decision.titre}</p>
          <p className="text-gray-300 mt-1 text-xs">{decision.description}</p>
        </div>
      ) : null}
    </article>
  );
}
