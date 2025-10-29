import { TaskCard } from "../../components/TaskCard";
import { tasks } from "../../lib/mock-data";

const filters = [
  { label: "Moi", value: "me" },
  { label: "Mon équipe", value: "team" },
  { label: "Toutes", value: "all" }
];

export default function TasksPage() {
  return (
    <div className="space-y-6">
      <header className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-white">Tâches</h2>
          <p className="text-gray-400">
            Filtrez et pilotez les actions en cours pour vos équipes.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter.value}
              className="rounded-full border border-border px-4 py-2 text-sm text-gray-300 hover:border-accent hover:text-white transition"
            >
              {filter.label}
            </button>
          ))}
          <button className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-white shadow-subtle hover:bg-accent/90 transition">
            Nouvelle tâche
          </button>
        </div>
      </header>
      <div className="grid gap-4 lg:grid-cols-2">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}
