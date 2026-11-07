import {
  ArrowDown,
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Network,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import Header from "@/components/Header";
import Reveal from "@/components/Reveal";
import ProjectShowcase from "@/components/ProjectShowcase";
import AnimatedMotto from "@/components/AnimatedMotto";
import {
  education,
  emailAddress,
  experience,
  githubUrl,
  linkedinUrl,
  services,
  skills,
  whatsappUrl,
} from "@/data/portfolio";

export default function Home() {
  return (
    <main id="top">
      <Header />
      <section className="hero section-wrap">
        <div className="hero-backdrop">
          <span className="hero-glow hero-glow-a" />
          <span className="hero-glow hero-glow-b" />
          <span className="hero-grid-lines" />
        </div>
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="pulse" /> DISPONIBLE POUR DE NOUVELLES
              OPPORTUNITÉS
            </div>
            <p className="hero-kicker">
              INGÉNIEUR TÉLÉCOMS <span>·</span> CLOUD & DEVOPS <span>·</span>{" "}
              CONSULTANT DIGITAL
            </p>
            <h1>
              Je transforme
              <br />
              les idées en <em>solutions</em>
              <br />
              qui font avancer.
            </h1>
            <p className="hero-text">
              Je suis Hervé Boris, ingénieur en réseaux et télécommunications,
              développeur et consultant digital. Je relie les réseaux, les
              applications et les infrastructures pour concevoir des solutions
              utiles, de l’idée à la mise en production.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Découvrir mes projets <ArrowUpRight size={17} />
              </a>
              <a
                className="button button-ghost"
                href="/cv/Herve-Boris-CV-EN.pdf"
                download
              >
                <Download size={16} /> Télécharger mon CV (EN)
              </a>
            </div>
            <div className="hero-meta">
              <span>
                <MapPin size={14} /> Douala, Cameroun
              </span>
              <span>Parcours académique au Cameroun et en Tunisie</span>
            </div>
            <div className="hero-social">
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={17} />
              </a>
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <Github size={17} />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
              >
                <MessageCircle size={17} />
              </a>
            </div>
          </div>
          <div className="hero-visual portrait-visual">
            <div className="portrait-frame">
              <Image
                src="/images/portrait.webp"
                alt="Portrait professionnel de Hervé Boris"
                fill
                priority
                sizes="(max-width: 650px) 80vw, 440px"
                className="portrait-image"
              />
            </div>
            <div className="float-chip chip-top">
              <span className="chip-dot blue" /> NETWORK ENGINEER
            </div>
            <div className="float-chip chip-right">
              <span className="chip-dot green" /> CLOUD & DEVOPS
            </div>
            <div className="float-chip chip-bottom">✳ DIGITAL BUILDER</div>
            <div className="visual-caption">
              DESIGNING · BUILDING · SHIPPING
            </div>
            <div className="hero-orbit-label">
              <Network size={14} /> FROM NETWORKS TO CLOUD
            </div>
          </div>
        </div>
        <a className="scroll-cue" href="#about">
          <span>FAIS DÉFILER POUR EXPLORER</span>
          <ArrowDown size={14} />
        </a>
      </section>

      <section id="about" className="section-wrap section-block">
        <Reveal>
          <div className="section-label">01 / MON HISTOIRE</div>
          <div className="about-grid">
            <h2>
              De l’ingénierie
              <br />
              aux <em>solutions concrètes.</em>
            </h2>
            <div>
              <p className="lead">
                Un parcours construit entre le Cameroun et la Tunisie, à la
                croisée des télécommunications, du développement logiciel et du
                numérique.
              </p>
              <p className="muted">
                Après mon baccalauréat scientifique au Cameroun, j’ai poursuivi
                mes études supérieures à Sfax, en Tunisie, jusqu’à l’obtention
                de mon diplôme d’ingénieur en Réseaux et Télécommunications. Mes
                expériences professionnelles m’ont ensuite amené vers
                l’administration systèmes, le développement back-end, le Cloud
                et l’automatisation. Aujourd’hui, je mets cette polyvalence au
                service de projets techniques et entrepreneuriaux.
              </p>
              <a className="text-link" href="#experience">
                Découvrir mon parcours <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </Reveal>
        <div className="stats-grid">
          <div>
            <strong>2</strong>
            <span>
              Pays de formation
              <br />
              Cameroun & Tunisie
            </span>
          </div>
          <div>
            <strong>5</strong>
            <span>
              Axes de compétences
              <br />
              complémentaires
            </span>
          </div>
          <div>
            <strong>
              4<span>+</span>
            </strong>
            <span>
              Expériences
              <br />
              professionnelles
            </span>
          </div>
        </div>
      </section>

      <section id="skills" className="section-wrap section-block">
        <Reveal>
          <div className="section-label">02 / EXPERTISE</div>
          <div className="section-heading">
            <h2>
              Une expertise
              <br />
              <em>qui traverse les couches.</em>
            </h2>
            <p>
              Des réseaux et infrastructures jusqu’aux applications et aux
              outils du quotidien.
            </p>
          </div>
        </Reveal>
        <div className="skills-grid skills-grid-five">
          {skills.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.09}>
              <article className="skill-card">
                <span className="card-index">0{i + 1}</span>
                <h3>{group.title}</h3>
                <p className="skill-subtitle">{group.subtitle}</p>
                <div className="tag-list">
                  {group.items.map((item) => (
                    <span className="tag" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="projects" className="section-wrap section-block">
        <ProjectShowcase />
      </section>

      <section id="experience" className="section-wrap section-block">
        <Reveal>
          <div className="section-label">04 / PARCOURS PROFESSIONNEL</div>
          <div className="section-heading">
            <h2>
              Expériences,
              <br />
              <em>responsabilités, progression.</em>
            </h2>
            <p>
              Des environnements professionnels variés, du développement web à
              l’administration systèmes.
            </p>
          </div>
        </Reveal>
        <div className="timeline">
          {experience.map((item, i) => (
            <Reveal key={item.company} delay={i * 0.08}>
              <div className="timeline-item">
                <div className="timeline-date">{item.date}</div>
                <div className="timeline-marker" />
                <div className="timeline-content">
                  <h3>{item.role}</h3>
                  <span>{item.company}</span>
                  <p>{item.detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="education-heading">
            <span className="section-label">FORMATION ACADÉMIQUE</span>
            <h3>
              Un parcours entre <em>deux pays.</em>
            </h3>
          </div>
          <div className="education-grid">
            {education.map((item, i) => (
              <article className="education-card" key={item.title}>
                <span className="education-date">{item.date}</span>
                <span className="education-country">
                  {item.flag === "TN" ? "TUNISIE" : "CAMEROUN"}
                </span>
                <h4>{item.title}</h4>
                <p>{item.institution}</p>
                <small>{item.place}</small>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      <section id="services" className="section-wrap section-block">
        <Reveal>
          <div className="section-label">05 / CONSEIL & FREELANCE</div>
          <div className="section-heading">
            <h2>
              De l’idée au
              <br />
              <em>déploiement.</em>
            </h2>
            <p>
              J’accompagne les entreprises, entrepreneurs et équipes dans leurs
              projets numériques et leurs défis techniques.
            </p>
          </div>
        </Reveal>
        <div className="services-grid">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.07}>
              <article className="service-card">
                <span>0{i + 1}</span>
                <h3>{service.title}</h3>
                <p>{service.detail}</p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Discuter de ${service.title} sur WhatsApp`}
                >
                  <ArrowUpRight size={18} />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-wrap section-block values-block">
        <Reveal>
          <div className="values-inner">
            <Sparkles className="values-icon" />
            <div>
              <div className="section-label">MA PHILOSOPHIE</div>
              <AnimatedMotto />
              <p>
                Je crois à l’apprentissage continu, à la construction de
                solutions concrètes et à l’évolution par l’expérience. Chaque
                projet est une occasion de comprendre, d’expérimenter et de
                créer de la valeur.
              </p>
            </div>
            <div className="values-decoration">
              <span>01</span>
              <span>02</span>
              <span>03</span>
            </div>
          </div>
        </Reveal>
      </section>

      <section id="contact" className="section-wrap contact-section">
        <Reveal>
          <div className="section-label">06 / CONTACT</div>
          <h2>
            Construisons quelque chose
            <br />
            de <em>solide ensemble.</em>
          </h2>
          <p className="contact-intro">
            Un projet web, un besoin Cloud & DevOps, une mission de conseil ou
            une opportunité professionnelle ? Échangeons.
          </p>
          <div className="contact-actions">
            <a
              className="button button-primary contact-button"
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={17} /> Me contacter sur WhatsApp
            </a>
            <a className="button button-ghost" href={`mailto:${emailAddress}`}>
              <Mail size={16} /> Envoyer un email
            </a>
          </div>
          <div className="contact-links">
            <a href={linkedinUrl} target="_blank" rel="noreferrer">
              <Linkedin size={16} /> LinkedIn
            </a>
            <a href={`mailto:${emailAddress}`}>
              <Mail size={16} /> {emailAddress}
            </a>
            <a href="tel:+237692945198">+237 692 945 198</a>
            <a href={githubUrl} target="_blank" rel="noreferrer">
              <Github size={16} /> GitHub
            </a>
          </div>
        </Reveal>
      </section>
      <footer className="footer section-wrap">
        <a className="brand" href="#top">
          HB<span>.</span>
        </a>
        <span>
          © {new Date().getFullYear()} Hervé Boris. Tous droits réservés.
        </span>
        <a href="#top">Retour en haut ↑</a>
      </footer>
    </main>
  );
}
