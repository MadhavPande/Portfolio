import { ArrowUpRight, FileArrowDown, LinkedinLogo } from "@phosphor-icons/react/ssr";
import { Reveal } from "./reveal";
import { EmailLink } from "./email-link";
import { Container, EMAIL, LINKEDIN } from "./ui";

const secondary = [
  { href: LINKEDIN, label: "LinkedIn", icon: LinkedinLogo, external: true },
  { href: "/MadhavPande_Resume.pdf", label: "Resume (PDF)", icon: FileArrowDown, download: true },
];

export function Contact() {
  return (
    <footer className="pt-28 md:pt-40">
      <Container>
        <Reveal>
          <h2 className="max-w-[16ch] font-display text-[clamp(2.5rem,5.5vw,4.5rem)] font-extrabold leading-[1] tracking-[-0.02em]">
            Hiring for strategy or analytics?
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <EmailLink
            className="group mt-12 inline-flex max-w-full items-center gap-3 font-display text-[clamp(1.5rem,4.2vw,3.75rem)] font-bold tracking-[-0.02em] text-accent-ink md:mt-16"
          >
            <span className="break-all bg-[linear-gradient(currentColor,currentColor)] bg-[length:100%_2px] bg-left-bottom bg-no-repeat pb-1 transition-[background-size] duration-500 group-hover:bg-[length:0%_2px] sm:break-normal">
              {EMAIL}
            </span>
            <ArrowUpRight
              weight="bold"
              className="size-[0.8em] shrink-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </EmailLink>
        </Reveal>

        <Reveal delay={0.14}>
          <ul className="mt-12 flex flex-wrap gap-x-10 gap-y-4">
            {secondary.map(({ href, label, icon: Icon, external, download }) => (
              <li key={label}>
                <a
                  href={href}
                  className="inline-flex items-center gap-2 text-lg text-muted transition-colors duration-300 hover:text-fg"
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  {...(download ? { download: true } : {})}
                >
                  <Icon size={22} weight="regular" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="mt-28 flex flex-col gap-2 border-t border-line py-8 text-sm text-muted md:mt-40 md:flex-row md:justify-between">
          <p>&copy; 2026 Madhav Pande</p>
          <a href="#" className="transition-colors duration-300 hover:text-fg">
            Back to top
          </a>
        </div>
      </Container>
    </footer>
  );
}
