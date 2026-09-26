import { Beyond } from "@/components/beyond";
import { Contact } from "@/components/contact";
import { Education } from "@/components/education";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { Nav } from "@/components/nav";
import { Work } from "@/components/work";
import { EMAIL, LINKEDIN, SITE_DESCRIPTION, SITE_URL } from "@/lib/site";

// Tells search engines who this page is about, for name searches and the knowledge panel.
const person = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Madhav Pande",
  url: SITE_URL,
  email: `mailto:${EMAIL}`,
  jobTitle: "Strategy, Analytics, and Consulting Professional",
  description: SITE_DESCRIPTION,
  sameAs: [LINKEDIN],
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "Thapar Institute of Engineering and Technology",
    },
    { "@type": "Organization", name: "Viscadia" },
    { "@type": "Organization", name: "Ernst & Young" },
  ],
  knowsAbout: [
    "Revenue forecasting",
    "Financial modelling",
    "Pharmaceutical forecasting",
    "Market sizing",
    "Commercial strategy",
    "SQL",
    "Excel",
    "VBA",
    "Stakeholder management",
  ],
};

export default function Home() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person).replace(/</g, "\\u003c") }}
      />
      <Nav />
      <main>
        <Hero />
        <Experience />
        <Work />
        <Education />
        <Beyond />
      </main>
      <Contact />
    </div>
  );
}
