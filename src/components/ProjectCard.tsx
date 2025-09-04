import type { Project } from "@/lib/projects";
import Link from "next/link";

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <div className="rounded-2xl border p-4 hover:shadow-sm transition">
      <h3 className="text-lg font-semibold">{p.title}</h3>
      <p className="text-sm text-gray-600 mt-1">{p.blurb}</p>
      <div className="flex flex-wrap gap-2 mt-3">
        {p.stack.map((s) => (
          <span key={s} className="text-xs rounded-full border px-2 py-1">
            {s}
          </span>
        ))}
      </div>
      <div className="flex gap-4 mt-4 text-sm">
        {p.link && p.link !== "#" && (
          <Link className="underline" href={p.link} target="_blank">Live</Link>
        )}
        {p.repo && p.repo !== "#" && (
          <Link className="underline" href={p.repo} target="_blank">Code</Link>
        )}
      </div>
    </div>
  );
}
