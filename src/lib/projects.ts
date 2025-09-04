export type Project = {
    title: string;
    blurb: string;
    stack: string[];
    link?: string;
    repo?: string;
  };
  
  export const projects: Project[] = [
    {
      title: "Personal Portfolio Website",
      blurb:
        "Responsive portfolio built with React + TypeScript and Tailwind; markdown blog; high Lighthouse scores.",
      stack: ["Next.js", "TypeScript", "TailwindCSS", "Vercel"],
      link: "#", // update after deploy
      repo: "#", // update after push
    },
    {
      title: "Task Manager",
      blurb:
        "Fullstack CRUD tasks with auth, categories, due dates; Node/Express API and MongoDB Atlas.",
      stack: ["React", "Node.js", "Express", "MongoDB"],
      link: "#",
      repo: "#",
    },
  ];
  