import type { ReactNode } from "react";

export const EMAIL = "madhavpande514@gmail.com";
export const LINKEDIN = "https://www.linkedin.com/in/madhavpande";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1320px] px-4 md:px-10 ${className}`}>{children}</div>;
}

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
  download?: boolean;
};

export function Button({ href, children, variant = "primary", external, download }: ButtonProps) {
  const base =
    "group inline-flex items-center gap-2 whitespace-nowrap rounded-full px-6 py-3 text-[15px] font-medium transition duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";
  const styles =
    variant === "primary"
      ? "bg-accent text-on-accent hover:brightness-110"
      : "border border-fg/25 text-fg hover:border-fg";

  return (
    <a
      href={href}
      className={`${base} ${styles}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...(download ? { download: true } : {})}
    >
      {children}
    </a>
  );
}

export function SectionTitle({ children, id }: { children: ReactNode; id?: string }) {
  return (
    <h2
      id={id}
      className="scroll-mt-32 font-display text-[clamp(2.5rem,5.5vw,4.5rem)] font-extrabold leading-[1] tracking-[-0.02em]"
    >
      {children}
    </h2>
  );
}
