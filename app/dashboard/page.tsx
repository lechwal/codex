import { TaskCard } from "../../components/TaskCard";
import { DecisionCard } from "../../components/DecisionCard";
import { MeetingCard } from "../../components/MeetingCard";
import { decisions, meetings, tasks } from "../../lib/mock-data";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h2 className="text-2xl font-semibold">Bonjour, Chef !</h2>
        <p className="text-gray-400">
          Résumé de vos actions prioritaires, réunions à venir et décisions récentes.
        </p>
      </header>
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Tâches critiques</h3>
          <button className="rounded-full bg-accent/80 px-4 py-2 text-sm font-medium text-white shadow-subtle hover:bg-accent transition">
            Nouvelle tâche
          </button>
        </div>
        <div className="grid gap-4 lg:grid-cols-2">
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      </section>
      <section className="space-y-4">
        <h3 className="text-lg font-semibold">Décisions récentes</h3>
        <div className="grid gap-4 lg:grid-cols-2">
          {decisions.map((decision) => (
            <DecisionCard key={decision.id} decision={decision} />
          ))}
        </div>
      </section>
      <section className="space-y-4">
        <h3 className="text-lg font-semibold">Réunions à venir</h3>
        <div className="grid gap-4 lg:grid-cols-2">
          {meetings.map((meeting) => (
            <MeetingCard key={meeting.id} meeting={meeting} />
          ))}
        </div>
      </section>
    </div>
  );
}
