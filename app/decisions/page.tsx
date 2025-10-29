import { DecisionCard } from "../../components/DecisionCard";
import { decisions } from "../../lib/mock-data";

const visibilityFilters = [
  { label: "Tout", value: "all" },
  { label: "Mon équipe", value: "team" },
  { label: "Direction", value: "direction" }
];

export default function DecisionsPage() {
  return (
    <div className="space-y-6">
      <header className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-white">Décisions</h2>
          <p className="text-gray-400">
            Gardez la trace des orientations prises et de leur impact opérationnel.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {visibilityFilters.map((filter) => (
            <button
              key={filter.value}
              className="rounded-full border border-border px-4 py-2 text-sm text-gray-300 hover:border-accent hover:text-white transition"
            >
              {filter.label}
            </button>
          ))}
          <button className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-white shadow-subtle hover:bg-accent/90 transition">
            Nouvelle décision
          </button>
        </div>
      </header>
      <div className="grid gap-4 lg:grid-cols-2">
        {decisions.map((decision) => (
          <DecisionCard key={decision.id} decision={decision} />
        ))}
      </div>
    </div>
  );
}
