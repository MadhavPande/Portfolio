import { Reveal } from "./reveal";
import { Container, SectionTitle } from "./ui";

const schooling = [
  {
    course: "Class 12, CBSE",
    school: "The British School, Chandigarh",
    year: "2019",
    score: "90.8%",
  },
  {
    course: "Class 10, CBSE",
    school: "DSB International Public School, Rishikesh",
    year: "2017",
    score: "9.2 / 10",
  },
];

const toolkit = [
  {
    label: "Analytics and tools",
    items: "SQL, Advanced Excel, VBA, data analysis, revenue forecasting, financial modelling, PowerPoint",
  },
  {
    label: "Strategy and product",
    items: "Market sizing, competitive analysis, commercial strategy, UAT, process improvement, roadmapping",
  },
  {
    label: "Communication and leadership",
    items: "Cross-functional coordination, stakeholder management, executive communication, team leadership",
  },
];

export function Education() {
  return (
    <section className="py-28 md:py-40">
      <Container>
        <Reveal>
          <SectionTitle id="education">Education</SectionTitle>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-12 md:mt-20 md:grid-cols-12 md:gap-10">
          <Reveal className="md:col-span-7">
            <p className="font-mono text-sm text-muted">2023</p>
            <h3 className="mt-3 font-display text-3xl font-bold tracking-[-0.01em] md:text-4xl">
              B.E., Electronics and Computer Engineering
            </h3>
            <p className="mt-3 text-lg text-muted">
              Thapar Institute of Engineering and Technology, Patiala. CGPA 8.19 / 10.
            </p>
          </Reveal>
          <Reveal delay={0.06} className="md:col-span-4 md:col-start-9">
            <p className="text-[15px] text-muted">GMAT Focus Edition</p>
            <p className="mt-2 font-display text-7xl font-extrabold leading-none tracking-[-0.03em] text-accent-ink md:text-8xl">
              705
            </p>
            <p className="mt-3 text-lg text-muted">98th percentile</p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-10">
          {schooling.map((s, i) => (
            <Reveal key={s.course} delay={i * 0.06}>
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-display text-xl font-bold">{s.course}</h3>
                <p className="shrink-0 font-mono text-sm text-muted">{s.year}</p>
              </div>
              <p className="mt-1 text-[15px] text-muted">
                {s.school}. {s.score}
              </p>
            </Reveal>
          ))}
        </div>

        <div className="mt-24 border-t border-line pt-10 md:mt-32">
          <Reveal>
            <h3 className="font-display text-3xl font-bold tracking-[-0.01em] md:text-4xl">Toolkit</h3>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-12">
            {toolkit.map((g, i) => (
              <Reveal key={g.label} delay={i * 0.06}>
                <p className="text-[15px] text-muted">{g.label}</p>
                <p className="mt-3 text-lg leading-relaxed">{g.items}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
