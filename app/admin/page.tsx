import Link from "next/link";

const adminSections = [
  {
    title: "Équipes",
    description: "Créez, modifiez et archivez les équipes ou services.",
    href: "#teams"
  },
  {
    title: "Membres & rôles",
    description: "Affectez les utilisateurs aux équipes et gérez les permissions.",
    href: "#members"
  },
  {
    title: "Journal d'activité",
    description: "Suivez qui a modifié quoi pour assurer la traçabilité.",
    href: "#activity"
  }
];

export default function AdminPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h2 className="text-2xl font-semibold text-white">Administration</h2>
        <p className="text-gray-400">
          Espace réservé aux administrateurs pour piloter la structure et la sécurité des données.
        </p>
      </header>
      <div className="grid gap-4 md:grid-cols-3">
        {adminSections.map((section) => (
          <Link key={section.href} href={section.href} className="card p-6 hover:border-accent transition">
            <h3 className="text-lg font-semibold text-white">{section.title}</h3>
            <p className="mt-2 text-sm text-gray-400">{section.description}</p>
          </Link>
        ))}
      </div>
      <section id="teams" className="space-y-4">
        <h3 className="text-lg font-semibold text-white">Équipes & services</h3>
        <div className="card p-6">
          <p className="text-sm text-gray-300">
            Cette section accueillera la gestion détaillée des équipes, des rôles et des règles RLS (Row Level Security) pour Supabase.
          </p>
        </div>
      </section>
      <section id="activity" className="space-y-4">
        <h3 className="text-lg font-semibold text-white">Journal d'activité</h3>
        <div className="card p-6">
          <p className="text-sm text-gray-300">
            Les entrées de log seront listées ici avec les diffs JSON pour chaque action importante.
          </p>
        </div>
      </section>
    </div>
  );
}
