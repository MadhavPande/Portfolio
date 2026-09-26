import { Reveal } from "./reveal";
import { Container, SectionTitle } from "./ui";

const chunks = [
  {
    heading: "Leadership and volunteering",
    items: [
      {
        year: "2025",
        text: "Ran CSR events at NGO-driven schools and planned the annual offsite and engagement day.",
        org: "Viscadia",
      },
      {
        year: "",
        text: "Mentored an intern through technical ramp-up to a full-time associate role.",
        org: "",
      },
      {
        year: "2021",
        text: "Taught underprivileged children and helped raise COVID-19 relief funds.",
        org: "Har Hath Kalam",
      },
    ],
  },
  {
    heading: "Recognition",
    items: [
      {
        year: "2026",
        text: "GMAT Focus Edition: 705, 98th percentile.",
        org: "",
      },
      {
        year: "2024",
        text: "Fast-track promotion to Consultant within a year. Youngest consultant on the team.",
        org: "EY",
      },
      {
        year: "2023",
        text: "Pre-placement offer from internship, two levels ahead of the standard cycle.",
        org: "EY",
      },
      {
        year: "2020",
        text: "Runner-up of 6 teams at the National Social Summit street play. Directed and performed.",
        org: "IIT Roorkee",
      },
    ],
  },
];

export function Beyond() {
  return (
    <section className="py-28 md:py-40">
      <Container className="grid grid-cols-1 gap-16 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-4">
          <div className="md:sticky md:top-28">
            <Reveal>
              <SectionTitle id="beyond">Beyond the desk</SectionTitle>
            </Reveal>
          </div>
        </div>

        <div className="space-y-20 md:col-span-7 md:col-start-6">
          {chunks.map((c) => (
            <div key={c.heading}>
              <Reveal>
                <h3 className="border-b border-line pb-4 text-[15px] text-muted">{c.heading}</h3>
              </Reveal>
              <ol className="mt-8 space-y-9">
                {c.items.map((item, i) => (
                  <Reveal as="li" key={item.text} delay={i * 0.06}>
                    <div className="grid grid-cols-[3.5rem_1fr] gap-5 md:grid-cols-[4.5rem_1fr]">
                      <span className="pt-1 font-mono text-sm text-muted">{item.year}</span>
                      <div>
                        <p className="text-lg leading-snug md:text-xl">{item.text}</p>
                        {item.org && <p className="mt-1.5 text-[15px] text-muted">{item.org}</p>}
                      </div>
                    </div>
                  </Reveal>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
