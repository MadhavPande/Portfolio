import { ThemeToggle } from "./theme-toggle";
import { Container, EMAIL } from "./ui";

const links = [
  { href: "#experience", label: "Experience" },
  { href: "#work", label: "Work" },
  { href: "#education", label: "Education" },
  { href: "#beyond", label: "Beyond the desk" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/60 bg-bg/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <a href="#" className="font-display text-xl font-bold tracking-[-0.01em]">
          Madhav Pande
        </a>
        <nav className="flex items-center gap-8">
          <ul className="hidden items-center gap-8 lg:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-[15px] text-muted transition-colors duration-300 hover:text-fg"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
          <a
            href={`mailto:${EMAIL}`}
            className="whitespace-nowrap rounded-full bg-fg px-4 py-2 text-sm font-medium text-bg transition duration-300 hover:-translate-y-0.5 active:scale-[0.98]"
          >
            Email me
          </a>
        </nav>
      </Container>
    </header>
  );
}
