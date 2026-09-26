import { EnvelopeSimple, ArrowDown } from "@phosphor-icons/react/ssr";
import { CareerTimeline } from "./career-timeline";
import { Reveal } from "./reveal";
import { EmailLink } from "./email-link";
import { Button, buttonClass, Container } from "./ui";

export function Hero() {
  return (
    <section className="flex min-h-[calc(100dvh-4rem)] items-center py-14 md:py-20">
      <Container className="grid grid-cols-1 items-center gap-14 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-7">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
              Strategy and analytics
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="mt-6 font-display text-[clamp(2.5rem,4.4vw,4.25rem)] font-extrabold leading-[0.98] tracking-[-0.025em] text-balance">
              Forecasts, rollouts, and the numbers behind them.
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-7 max-w-[40ch] text-lg leading-relaxed text-muted md:text-xl">
              Strategy, analytics, and consulting professional. 3+ years advising on $1B+ pharma
              forecasts and leading government tech rollouts to 20M+ users.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="mt-10 flex flex-wrap gap-3">
              <EmailLink className={buttonClass("primary")}>
                <EnvelopeSimple size={18} weight="bold" />
                Email me
              </EmailLink>
              <Button href="#work" variant="secondary">
                See my work
                <ArrowDown
                  size={16}
                  weight="bold"
                  className="transition-transform duration-300 group-hover:translate-y-0.5"
                />
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="md:col-span-5">
          <CareerTimeline />
        </Reveal>
      </Container>
    </section>
  );
}
