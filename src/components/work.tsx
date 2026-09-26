import { ArrowRight, ArrowsCounterClockwise } from "@phosphor-icons/react/ssr";
import type { ReactNode } from "react";
import { Reveal } from "./reveal";
import { Container, SectionTitle } from "./ui";

function Tile({
  span,
  tone,
  children,
  delay = 0,
}: {
  span: string;
  tone: string;
  children: ReactNode;
  delay?: number;
}) {
  return (
    <Reveal delay={delay} className={span}>
      <article
        className={`flex h-full flex-col justify-between gap-10 rounded-xl p-7 transition duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 md:p-9 ${tone}`}
      >
        {children}
      </article>
    </Reveal>
  );
}

const Org = ({ children }: { children: ReactNode }) => (
  <p className="text-sm font-medium opacity-75">{children}</p>
);

const Figure = ({ children }: { children: ReactNode }) => (
  <p className="font-display text-[clamp(3rem,6vw,5rem)] font-extrabold leading-[0.95] tracking-[-0.03em]">
    {children}
  </p>
);

const Title = ({ children }: { children: ReactNode }) => (
  <h3 className="font-display text-2xl font-bold tracking-[-0.01em] md:text-[1.75rem]">{children}</h3>
);

const Body = ({ children }: { children: ReactNode }) => (
  <p className="mt-3 max-w-[48ch] text-[15px] leading-relaxed opacity-80 md:text-base">{children}</p>
);

export function Work() {
  return (
    <section className="py-28 md:py-40">
      <Container>
        <Reveal>
          <SectionTitle id="work">Work Experience</SectionTitle>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 md:mt-20 md:grid-cols-12 md:gap-5">
          <Tile span="md:col-span-7 md:row-span-2" tone="bg-accent text-on-accent">
            <Org>Viscadia</Org>
            <div>
              <p className="font-display text-[clamp(4.5rem,11vw,9.5rem)] font-extrabold leading-[0.9] tracking-[-0.04em]">
                $1B+
              </p>
              <div className="mt-8">
                <Title>Forecast models for specialty drug portfolios</Title>
                <Body>
                  Excel and VBA models that combine patient journeys with competitive dynamics, so
                  Fortune 500 pharma teams can test growth scenarios before they commit.
                </Body>
              </div>
            </div>
          </Tile>

          <Tile span="md:col-span-5" tone="dot-field bg-surface" delay={0.06}>
            <div className="flex items-start justify-between">
              <Org>Viscadia</Org>
              <ArrowsCounterClockwise size={28} weight="regular" className="text-accent-ink" />
            </div>
            <div>
              <Title>Reverse forecasting</Title>
              <Body>
                Works back from a client&apos;s revenue target to the input changes needed to reach
                it.
              </Body>
            </div>
          </Tile>

          <Tile span="md:col-span-5" tone="border border-line" delay={0.12}>
            <Org>EY, Agri Stack</Org>
            <div>
              <Figure>20M+ users</Figure>
              <p className="mt-2 font-mono text-sm text-muted">in 100 days, 7-state pilot</p>
              <div className="mt-6">
                <Title>State Farmers&apos; Database</Title>
                <Body>
                  Took it from concept to launch, then won wider adoption by presenting field
                  results to state secretaries.
                </Body>
              </div>
            </div>
          </Tile>

          <Tile span="md:col-span-5" tone="bg-fg text-bg" delay={0.06}>
            <Org>EY, Agri Stack</Org>
            <div>
              <p className="font-display text-3xl font-bold leading-tight tracking-[-0.01em] md:text-4xl">
                1 village a day
                <ArrowRight size={28} weight="bold" className="mx-2 inline align-[-0.1em]" />
                1 district in 1-2 days
              </p>
              <div className="mt-6">
                <Title>Field UAT</Title>
                <Body>
                  Testing in 5 villages exposed gaps in consent and field verification. After the
                  fixes, I led a 5-sub-district proof of concept.
                </Body>
              </div>
            </div>
          </Tile>

          <Tile span="md:col-span-7" tone="bg-accent-soft" delay={0.12}>
            <Org>EY, Agri Stack</Org>
            <div className="grid gap-6 md:grid-cols-[auto_1fr] md:items-end md:gap-10">
              <Figure>14 states</Figure>
              <div>
                <Title>Digital Crop Survey</Title>
                <Body>
                  Coordinated the multi-state rollout and tightened data-cleaning rules after field
                  analysis caught integrity issues.
                </Body>
              </div>
            </div>
          </Tile>

        </div>
      </Container>
    </section>
  );
}
