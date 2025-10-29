import { MeetingCard } from "../../components/MeetingCard";
import { meetings } from "../../lib/mock-data";

export default function MeetingsPage() {
  return (
    <div className="space-y-6">
      <header className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-white">Réunions</h2>
          <p className="text-gray-400">Préparez et documentez vos temps collectifs.</p>
        </div>
        <button className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-white shadow-subtle hover:bg-accent/90 transition">
          Planifier une réunion
        </button>
      </header>
      <div className="grid gap-4 lg:grid-cols-2">
        {meetings.map((meeting) => (
          <MeetingCard key={meeting.id} meeting={meeting} />
        ))}
      </div>
    </div>
  );
}
