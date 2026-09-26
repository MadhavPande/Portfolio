"use client";

import { useEffect } from "react";

// Leaving the hero (or returning to it) uses a slide-style "push", like PowerPoint's
// Push transition. Jumps between other sections keep the normal smooth scroll.
// Uses the View Transitions API; unsupported browsers and reduced-motion visitors
// keep the normal anchor behaviour.
export function PageTransitions() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey) return;
      const link = (event.target as Element | null)?.closest<HTMLAnchorElement>('a[href^="#"]');
      if (!link || !document.startViewTransition) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const hash = link.getAttribute("href") ?? "#";
      const target = hash === "#" ? null : document.getElementById(hash.slice(1));
      if (hash !== "#" && !target) return;

      // Where the target would land, to pick the push direction.
      const destination = target
        ? target.getBoundingClientRect().top + window.scrollY - parseFloat(getComputedStyle(target).scrollMarginTop || "0")
        : 0;
      if (Math.abs(destination - window.scrollY) < 4) return;

      const hero = document.querySelector<HTMLElement>("[data-hero]");
      if (!hero) return;
      const onHero = hero.getBoundingClientRect().bottom > window.innerHeight / 2;
      const toHero = destination < hero.offsetTop + hero.offsetHeight / 2;
      if (!onHero && !toHero) return;

      event.preventDefault();
      const root = document.documentElement;
      root.dataset.vt = destination > window.scrollY ? "up" : "down";

      const transition = document.startViewTransition(() => {
        window.scrollTo({ top: destination, behavior: "instant" });
        history.pushState(null, "", hash === "#" ? window.location.pathname : hash);
      });
      transition.finished.finally(() => {
        delete root.dataset.vt;
      });
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
