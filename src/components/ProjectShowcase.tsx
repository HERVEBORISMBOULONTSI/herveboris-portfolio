import {
  ArrowUpRight,
  ExternalLink,
  GraduationCap,
  Layers3,
  Server,
  Globe2,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import { clientSites, projects } from "@/data/portfolio";

const visuals = [Globe2, Layers3, GraduationCap, Server];

export default function ProjectShowcase({
  locale = "fr",
}: {
  locale?: "fr" | "en";
}) {
  const en = locale === "en";
  const descriptions = en
    ? [
        "A platform designed to connect people with nearby service providers in Cameroon: discover profiles, compare offers, get in touch and share reviews.",
        "My digital consulting and services activity: websites, online presence, SEO, hosting, professional email and support for businesses.",
        "A learning programme introducing children and teenagers aged 7–18 to coding, robotics and artificial intelligence through practical projects.",
        "A hands-on full-stack and infrastructure project using PostgreSQL, Docker Compose and GitHub Actions for build, test, image publishing and SSH deployment.",
      ]
    : projects.map((p) => p.description);
  const titles = en
    ? [
        "Selected projects",
        "Projects with a purpose",
        "Explore the platforms and technical work I build, lead or contribute to.",
      ]
    : [
        "Projets & réalisations",
        "Des projets qui prennent vie",
        "Découvre les plateformes, initiatives et réalisations techniques auxquelles je contribue.",
      ];
  return (
    <>
      <Reveal>
        <div className="section-label">03 / {en ? "PROJECTS" : "PROJETS"}</div>
        <div className="section-heading">
          <h2>
            {titles[1].split(" ").slice(0, 2).join(" ")}
            <br />
            <em>{titles[1].split(" ").slice(2).join(" ")}</em>
          </h2>
          <p>{titles[2]}</p>
        </div>
      </Reveal>
      <div className="project-grid">
        {projects.map((project, i) => {
          const Visual = visuals[i] || Layers3;
          const href = project.url || "#contact";
          const action = en
            ? [
                "Visit Lazones",
                "Visit Next-ITSolutions",
                "Explore Kids Next-IT",
                "View source on GitHub",
              ][i]
            : project.actionLabel || "Découvrir le projet";
          return (
            <Reveal key={project.name} delay={i * 0.1}>
              <article className={`project-card project-card-${i + 1}`}>
                <div className="project-art">
                  <div className="art-orbit art-orbit-one" />
                  <div className="art-orbit art-orbit-two" />
                  <div className="art-mark">
                    <Visual size={34} strokeWidth={1.35} />
                  </div>
                  <span className="art-index">0{i + 1}</span>
                  <span className="art-label">{project.status}</span>
                </div>
                <div className="project-card-body">
                  <span className="project-type">
                    {en
                      ? [
                          "Digital product · Local marketplace",
                          "Digital consulting · Web solutions",
                          "Digital education · Ages 7–18",
                          "Technical project · Automation",
                        ][i]
                      : project.type}
                  </span>
                  <h3>{project.name}</h3>
                  <p>{descriptions[i]}</p>
                  <div className="tag-list">
                    {(en
                      ? [
                          ["Product thinking", "Marketplace", "Full Stack"],
                          ["Founder", "Digital consulting", "SEO"],
                          ["Scratch", "mBlock", "Python", "Robotics", "AI"],
                          ["Linux", "Docker", "PostgreSQL", "GitHub Actions"],
                        ][i]
                      : project.tags
                    ).map((tag) => (
                      <span className="tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    className="project-action"
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {action}
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
      <Reveal>
        <div className="client-sites-block">
          <div className="client-sites-heading">
            <div>
              <span className="section-label">
                {en ? "CLIENT WORK" : "RÉALISATIONS CLIENTS"}
              </span>
              <h3>
                {en
                  ? "Websites delivered for businesses"
                  : "Des sites web réalisés pour des clients"}
              </h3>
              <p>
                {en
                  ? "A selection of live websites from my web delivery experience. Open each site to explore it."
                  : "Une sélection de sites web issus de mes réalisations et expériences de livraison. Clique sur un domaine pour découvrir le site."}
              </p>
            </div>
            <span className="client-sites-count">
              {clientSites.length.toString().padStart(2, "0")}{" "}
              <small>{en ? "websites" : "sites"}</small>
            </span>
          </div>
          <div className="client-sites-grid">
            {clientSites.map((site, i) => (
              <a
                key={site.domain}
                href={site.url}
                target="_blank"
                rel="noreferrer"
                className="client-site-link"
              >
                <span className="client-site-icon">
                  {site.name.slice(0, 1)}
                </span>
                <span className="client-site-copy">
                  <strong>{site.name}</strong>
                  <small>{site.domain}</small>
                </span>
                <ExternalLink size={14} />
              </a>
            ))}
          </div>
          <p className="client-sites-note">
            {en
              ? "Project scope varied by assignment: design, integration, WordPress development, maintenance or deployment."
              : "Le périmètre de mon intervention varie selon les projets : conception, intégration, développement WordPress, maintenance ou mise en ligne."}
          </p>
        </div>
      </Reveal>
    </>
  );
}
