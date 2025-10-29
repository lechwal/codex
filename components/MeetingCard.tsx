import dayjs from "dayjs";
import { Meeting } from "../lib/types";

interface MeetingCardProps {
  meeting: Meeting;
}

export function MeetingCard({ meeting }: MeetingCardProps) {
  return (
    <article className="card p-5 space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 className="text-lg font-semibold text-white">{meeting.titre}</h3>
        <p className="text-sm text-gray-400">
          {dayjs(meeting.dateDebut).format("DD MMM YYYY HH:mm")} →
          {" "}
          {dayjs(meeting.dateFin).format("HH:mm")}
        </p>
      </div>
      <div className="grid gap-4 text-sm text-gray-300 md:grid-cols-2">
        <div>
          <span className="text-gray-500">Participants</span>
          <p className="mt-1 text-white">{meeting.participants.join(", ")}</p>
        </div>
        <div>
          <span className="text-gray-500">Équipe liée</span>
          <p className="mt-1 text-white">{meeting.teamId ?? "Multi-équipes"}</p>
        </div>
      </div>
      <div>
        <span className="text-xs uppercase tracking-wide text-gray-500">Ordre du jour</span>
        <pre className="mt-2 whitespace-pre-wrap text-sm text-gray-300 bg-muted/40 rounded-xl p-4">
          {meeting.ordreDuJour}
        </pre>
      </div>
      {meeting.compteRendu ? (
        <div>
          <span className="text-xs uppercase tracking-wide text-accent">Compte-rendu</span>
          <p className="mt-2 text-sm text-gray-200">{meeting.compteRendu}</p>
        </div>
      ) : null}
    </article>
  );
}
