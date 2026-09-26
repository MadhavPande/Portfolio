import { Reveal } from "./reveal";
import { Container, SectionTitle } from "./ui";

const roles = [
  {
    company: "Viscadia",
    role: "Associate",
    dates: "Mar 2025 - Aug 2026",
    summary:
      "Revenue forecasting for Fortune 500 pharma clients. I build the models, test commercial assumptions against market data, and walk client teams through what the numbers mean.",
    projects: ["Forecast model builds", "Legacy model reviews", "Client training"],
  },
  {
    company: "Ernst & Young",
    role: "Consultant",
    dates: "Jul 2023 - Feb 2025",
    summary:
      "As a Consultant on Agri Stack, India's digital agriculture program, I advised state officials and coordinated between field teams and engineering to run multi-state rollouts of two products.",
    projects: ["State Farmers' Database", "Digital Crop Survey"],
  },
];

export function Experience() {
  return (
    <section className="py-28 md:py-40">
      <Container>
        <Reveal>
          <SectionTitle id="experience">Experience</SectionTitle>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-16 md:mt-24 md:grid-cols-2 md:gap-x-16 lg:gap-x-24">
          {roles.map((r, i) => (
            <Reveal key={r.company} delay={i * 0.1} className={i === 1 ? "md:mt-24" : ""}>
              <article className="border-t-2 border-fg pt-8">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-4xl font-bold tracking-[-0.015em] md:text-5xl">
                    {r.company}
                  </h3>
                  <p className="shrink-0 font-mono text-sm text-muted">{r.dates}</p>
                </div>
                <p className="mt-2 text-lg text-muted">{r.role}</p>
                <p className="mt-8 max-w-[46ch] text-xl leading-relaxed md:leading-snug">{r.summary}</p>
                <p className="mt-6 text-[15px] text-muted">{r.projects.join(", ")}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
