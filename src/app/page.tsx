import Image from "next/image";
import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>

        {/* Hero */}
        <section className="mx-auto max-w-5xl px-4 pt-16 pb-10">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative h-28 w-28 overflow-hidden rounded-full border">
              <Image
                src="/avatar.jpg"
                alt="Kevin Bassett"
                fill
                className="object-cover"
                sizes="112px"
                priority
              />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold tracking-tight">Kevin Bassett</h1>
              <p className="text-gray-700 mt-2">
                CS + Math @ UMD. Frontend-focused engineer with experience at SAIC,
                AI model evaluation, and teaching. I build clean, responsive UIs.
              </p>
              <div className="mt-4 flex gap-3">
                <a href="/resume.pdf" target="_blank"
                   className="rounded-md border px-3 py-2 text-sm hover:bg-gray-50">
                  Resume
                </a>
                <a href="mailto:kevinbassett11@gmail.com"
                   className="rounded-md border px-3 py-2 text-sm hover:bg-gray-50">
                  Email
                </a>
                <a href="https://github.com/YOUR_GITHUB" target="_blank"
                   className="rounded-md border px-3 py-2 text-sm hover:bg-gray-50">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Projects preview */}
        <Section title="Featured Projects">
          <div className="grid md:grid-cols-2 gap-4">
            {projects.map((p) => <ProjectCard key={p.title} p={p} />)}
          </div>
        </Section>

        {/* Experience highlights */}
        <Section title="Experience Highlights">
          <ul className="list-disc pl-5 space-y-2 text-gray-800">
            <li>SAIC — Automation ROI models; authored content for $8B NSF proposal; Power BI dashboards.</li>
            <li>AI Trainer — Validated AI-generated code; prompt-based test cases; improved reliability.</li>
            <li>UMD TA — Tutored core math; graded/proctored for 40+ students.</li>
          </ul>
        </Section>
      </main>
      <footer className="border-t">
        <div className="mx-auto max-w-5xl px-4 py-8 text-sm text-gray-600">
          © {new Date().getFullYear()} Kevin Bassett
        </div>
      </footer>
    </>
  );
}
