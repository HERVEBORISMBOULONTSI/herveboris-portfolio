export type PortfolioProject = {
  name: string;
  type: string;
  description: string;
  tags: string[];
  status: string;
  url?: string;
  codeUrl?: string;
  actionLabel?: string;
};

export const projects: PortfolioProject[] = [
  {
    name: "Lazones",
    type: "Produit numérique · Marketplace de proximité",
    description:
      "Une plateforme pensée pour connecter les particuliers aux prestataires de services proches de chez eux au Cameroun : recherche, découverte des profils, comparaison, prise de contact et avis.",
    tags: ["Entrepreneuriat", "Product thinking", "Marketplace", "Full Stack"],
    status: "Projet entrepreneurial",
    url: "https://lazones.com",
    actionLabel: "Visiter Lazones",
  },
  {
    name: "Next-ITSolutions",
    type: "Conseil digital · Solutions web",
    description:
      "Mon activité de conseil et de services numériques : création de sites web, présence digitale, référencement, hébergement, emails professionnels et accompagnement des entreprises.",
    tags: ["Fondateur", "Conseil digital", "WordPress", "SEO"],
    status: "Entreprise fondée et développée",
    url: "https://next-itsolutions.com",
    actionLabel: "Visiter Next-ITSolutions",
  },
  {
    name: "Kids Next-ITSolutions",
    type: "Éducation numérique · Formation des 7–18 ans",
    description:
      "Un programme de formation qui initie les enfants et adolescents à la programmation, à la robotique et à l’intelligence artificielle. Les apprenants créent des jeux, des histoires animées et des projets qu’ils présentent.",
    tags: ["Éducation", "Scratch", "mBlock", "Python", "Robotique", "IA"],
    status: "Projet éducatif",
    url: "https://kids.next-itsolutions.com",
    actionLabel: "Découvrir Kids Next-IT",
  },
  {
    name: "DevOps CI/CD Project",
    type: "Projet technique · Automatisation & infrastructure",
    description:
      "Projet pratique autour d’une application full stack, de PostgreSQL, de Docker Compose et d’une chaîne CI/CD GitHub Actions incluant build, tests, publication d’image et déploiement SSH.",
    tags: ["Linux", "Docker", "PostgreSQL", "GitHub Actions", "CI/CD"],
    status: "Laboratoire technique",
    url: "https://github.com/HERVEBORISMBOULONTSI/devops-ci-cd-project",
    codeUrl: "https://github.com/HERVEBORISMBOULONTSI/devops-ci-cd-project",
    actionLabel: "Voir le code sur GitHub",
  },
];

export const clientSites = [
  { name: "Sportaabe", domain: "sportaabe.com", url: "https://sportaabe.com" },
  {
    name: "Strasbourg Sécurité",
    domain: "strasbourg-securite.com",
    url: "https://strasbourg-securite.com",
  },
  {
    name: "MBS Consulting",
    domain: "mbs-consulting.ch",
    url: "https://mbs-consulting.ch",
  },
  {
    name: "FSLI-GROUP",
    domain: "fsli-group.com",
    url: "https://fsli-group.com",
  },
  {
    name: "TTO Représentations & Services",
    domain: "tto-representation.com",
    url: "https://tto-representation.com",
  },
  {
    name: "Litijdata",
    domain: "litijdata.com",
    url: "https://litijdatas.com/",
  },
  {
    name: "Express Logistics Solutions",
    domain: "expresslogistics-solutions.com",
    url: "https://expresslogistics-solutions.com/",
  },
  {
    name: "Neolotix",
    domain: "neovoltixsarl.com",
    url: "https://neovoltixsarl.com/",
  },
  {
    name: "BTPCameroun",
    domain: "btpservicescameroun.com",
    url: "https://btpservicescameroun.com/",
  },
  {
    name: "Wodaabe Stays",
    domain: "wodaabe-stays.com",
    url: "https://wodaabe-stays.com",
  },
  {
    name: "Ma Piscine Plus",
    domain: "mapiscine-plus.fr",
    url: "https://mapiscine-plus.fr",
  },

  { name: "Soplocam", domain: "soplocam.com", url: "https://soplocam.com" },

  {
    name: "Golden Marine Services",
    domain: "goldenmarineservices.com",
    url: "https://goldenmarineservices.com",
  },

  {
    name: "FSLI Academy",
    domain: "academy.fsli-group.com",
    url: "https://academy.fsli-group.com",
  },
];

// Les compétences sont volontairement ordonnées selon le positionnement souhaité.
export const skills = [
  {
    title: "Télécommunications & réseaux",
    subtitle: "Ma formation d’ingénieur",
    items: [
      "Réseaux TCP/IP",
      "Routage & commutation",
      "LAN / WAN",
      "Architecture réseau",
      "Sécurité réseau",
      "CCNA 1–4",
      "CCNA Security",
    ],
  },
  {
    title: "Cloud & DevOps",
    subtitle: "Automatiser, déployer, fiabiliser",
    items: [
      "Linux",
      "Docker",
      "Docker Compose",
      "CI/CD",
      "GitHub Actions",
      "Azure DevOps",
      "Microsoft Azure",
      "AWS · notions",
      "OCI",
      "Terraform · notions",
      "Kubernetes · notions",
    ],
  },
  {
    title: "Web & digital",
    subtitle: "Concevoir une présence numérique utile",
    items: [
      "WordPress",
      "WooCommerce",
      "Elementor",
      "SEO technique",
      "Cloudflare",
      "Plesk",
      "Conseil digital",
      "Marketing digital",
    ],
  },
  {
    title: "Données & outils",
    subtitle: "Environnements de travail",
    items: [
      "PostgreSQL",
      "SQL",
      "Git",
      "GitHub",
      "Postman",
      "Nginx",
      "Bash",
      "Python",
    ],
  },
  {
    title: "Développement web",
    subtitle: "Du frontend au backend",
    items: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Vite",
      "Node.js",
      "NestJS",
      "PHP",
      "Symfony",
      "Spring Boot",
      "React Native",
    ],
  },
];

export const experience = [
  {
    date: "Juin 2023 – Déc. 2025",
    role: "Administrateur systèmes",
    company: "FSLI-GROUP",
    detail:
      "Installation, configuration et maintenance Linux ; gestion des utilisateurs et des permissions ; suivi des performances ; notions de PRA/PCA ; conteneurisation Docker ; pratique d’Azure DevOps et GitHub Actions ; scripting Bash et Python ; déploiement de machines virtuelles et de services web sur Microsoft Azure.",
  },
  {
    date: "Août 2022 – Mars 2023",
    role: "Développeur Back-End Python",
    company: "Y-NOTES",
    detail:
      "Développement de modules sur OPENIMIS, modifications et intégrations sur ODOO, optimisation fonctionnelle des systèmes internes.",
  },
  {
    date: "Janv. 2022 – Juin 2022",
    role: "Développeur Web & DevOps",
    company: "DIGITAL X",
    detail:
      "Déploiement d’applications web sur Microsoft Azure, mise en place de pipelines CI/CD avec Azure DevOps, conteneurisation Docker, administration Linux et automatisation des tâches de déploiement et de maintenance.",
  },
  {
    date: "Janv. 2021 – Juil. 2021",
    role: "Développeur Web",
    company: "DOT-IT",
    detail:
      "Déploiement de PrestaShop sur Microsoft Azure, développement de modules et automatisation de pipelines avec Azure DevOps.",
  },
];

export const education = [
  {
    date: "2018 – 2021",
    title: "Diplôme d’ingénieur en Réseaux et Télécommunications",
    institution: "Institut International des Technologies (IIT)",
    place: "Sfax, Tunisie",
    flag: "TN",
  },
  {
    date: "2016 – 2018",
    title: "Classes préparatoires / Diplôme universitaire de technologie",
    institution: "Institut Polytechnique des Sciences Avancées",
    place: "Sfax, Tunisie",
    flag: "TN",
  },
  {
    date: "2016",
    title: "Baccalauréat scientifique – Série D",
    institution: "Lycée bilingue de Ndop",
    place: "Cameroun",
    flag: "CM",
  },
  {
    date: "2012",
    title: "BEPC",
    institution: "Cameroun",
    place: "Cameroun",
    flag: "CM",
  },
];

export const services = [
  {
    title: "Conseil & stratégie digitale",
    detail:
      "Cadrage de projets, choix des solutions, audit de présence en ligne et accompagnement des entreprises.",
  },
  {
    title: "Cloud & DevOps",
    detail:
      "Conteneurisation, pipelines CI/CD, administration Linux, déploiement et automatisation.",
  },
  {
    title: "Création de sites web",
    detail:
      "Sites vitrines, sites institutionnels, boutiques en ligne et plateformes adaptées aux objectifs métier.",
  },
  {
    title: "Développement & intégration",
    detail:
      "Applications web, API, intégrations métier et évolution de solutions existantes.",
  },
  {
    title: "SEO & visibilité",
    detail:
      "Optimisation technique, structure de contenu, performance et accompagnement à la visibilité organique.",
  },
];

export const whatsappUrl =
  "https://wa.me/237692945198?text=Bonjour%20Herv%C3%A9%2C%20je%20souhaite%20%C3%A9changer%20avec%20vous%20au%20sujet%20d%E2%80%99un%20projet.";
export const githubUrl = "https://github.com/HERVEBORISMBOULONTSI";
export const linkedinUrl = "https://www.linkedin.com/in/herveborismboulontsi";
export const emailAddress = "mherveboris@gmail.com";
