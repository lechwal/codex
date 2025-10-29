import clsx from "classnames";
import dayjs from "dayjs";
import { Decision } from "../lib/types";
import { teams } from "../lib/mock-data";

const visibilityLabels: Record<Decision["visibilite"], string> = {
  publique_equipe: "Publique équipe",
  restreinte_direction: "Restreinte direction",
  globale: "Globale"
};

const statusColors: Record<Decision["statut"], string> = {
  active: "bg-accent/20 text-accent",
  remplacee: "bg-warning/20 text-warning",
  annulee: "bg-danger/20 text-danger"
};

interface DecisionCardProps {
  decision: Decision;
}

export function DecisionCard({ decision }: DecisionCardProps) {
  const team = teams.find((item) => item.id === decision.impactTeamId);

  return (
    <article className="card p-6 space-y-4">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold text-white">{decision.titre}</h3>
          <p className="text-sm text-gray-400 mt-2">{decision.description}</p>
        </div>
        <span className={clsx("badge", statusColors[decision.statut])}>
          {decision.statut}
        </span>
      </div>
      <div className="grid grid-cols-1 gap-4 text-sm md:grid-cols-2">
        <div>
          <span className="text-gray-500">Prise par</span>
          <p className="font-medium text-white">{decision.priseParUser}</p>
        </div>
        <div>
          <span className="text-gray-500">Date</span>
          <p className="font-medium text-white">
            {dayjs(decision.datePrise).format("DD MMM YYYY HH:mm")}
          </p>
        </div>
        <div>
          <span className="text-gray-500">Impact équipe</span>
          <p className="font-medium text-white">{team?.nom ?? "—"}</p>
        </div>
        <div>
          <span className="text-gray-500">Visibilité</span>
          <p className="font-medium text-white">{visibilityLabels[decision.visibilite]}</p>
        </div>
      </div>
      {decision.meetingId ? (
        <div className="rounded-2xl border border-border bg-muted/40 p-4 text-sm text-gray-300">
          Issue de la réunion <span className="text-white font-medium">{decision.meetingId}</span>
        </div>
      ) : null}
    </article>
  );
}
