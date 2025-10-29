import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Codex - Opérations",
  description: "Pilotage des décisions, réunions et tâches terrain"
};

const navigation = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/tasks", label: "Tâches" },
  { href: "/meetings", label: "Réunions" },
  { href: "/decisions", label: "Décisions" },
  { href: "/admin", label: "Admin" }
];

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="dark">
      <body className={`${inter.className} bg-background text-white min-h-screen`}>
        <div className="flex min-h-screen">
          <aside className="hidden md:flex w-64 flex-col border-r border-border bg-surface/80 backdrop-blur">
            <div className="px-6 py-8 border-b border-border">
              <h1 className="text-xl font-semibold">Codex Ops</h1>
              <p className="text-sm text-gray-400 mt-1">
                Traçabilité des décisions et opérations.
              </p>
            </div>
            <nav className="flex-1 px-4 py-6 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-300 hover:bg-accent/20 hover:text-white transition"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="px-6 py-6 border-t border-border text-xs text-gray-500">
              © {new Date().getFullYear()} Codex
            </div>
          </aside>
          <main className="flex-1 bg-background">
            <header className="md:hidden border-b border-border bg-surface px-4 py-3">
              <h1 className="text-lg font-semibold">Codex Ops</h1>
            </header>
            <div className="px-4 py-8 md:px-10">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
