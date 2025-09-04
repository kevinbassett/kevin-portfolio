"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <nav className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight">KB</Link>
        <div className="flex gap-6 text-sm">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`hover:underline ${pathname === l.href ? "underline" : ""}`}
            >
              {l.label}
            </Link>
          ))}
        </div>
        <a
          href="/resume.pdf"
          className="text-sm rounded-md border px-3 py-1 hover:bg-gray-50"
          target="_blank"
        >
          Resume
        </a>
      </nav>
    </header>
  );
}
