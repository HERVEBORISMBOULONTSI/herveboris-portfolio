# Hervé Boris — Portfolio

Portfolio bilingue (français / anglais) de Hervé Boris, ingénieur en réseaux et télécommunications, orienté Cloud & DevOps, développement web et conseil digital.

## Stack
- Next.js 15 + React 19 + TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

## Démarrage local

```bash
npm install
npm run dev
```

Ouvrir http://localhost:3000. La version anglaise est disponible sur /en.

## Sections
- Présentation et portrait professionnel
- Histoire personnelle et parcours Cameroun–Tunisie
- Compétences ordonnées : Télécoms & Réseaux, Cloud & DevOps, Web & Digital, Données & Outils, Développement web
- Projets : Lazones, Next-ITSolutions, Kids Next-ITSolutions et laboratoire DevOps CI/CD
- Sélection de sites web clients avec liens externes
- Expériences professionnelles et formation académique
- Services de conseil et freelance
- Contact direct par WhatsApp, email, LinkedIn et GitHub

## Personnalisation
- Données du portfolio : `src/data/portfolio.ts`
- Pages FR / EN : `src/app/page.tsx` et `src/app/en/page.tsx`
- Composants : `src/components/`
- Styles et animations : `src/app/globals.css`
- Portrait : `public/images/portrait.webp`
- CV anglais : `public/cv/Herve-Boris-CV-EN.pdf`

## Avant mise en production
1. Vérifier chaque site client externe et confirmer le périmètre exact de réalisation.
2. Ajouter le CV français si souhaité.
3. Vérifier les coordonnées et les liens sociaux.
4. Lancer `npm run build` et corriger toute erreur avant déploiement.
5. Configurer le domaine `herveboris.com` et les métadonnées SEO finales.

Les liens des réalisations clients sont une sélection de domaines connus et peuvent être ajustés dans `src/data/portfolio.ts`.
