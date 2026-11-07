'use client';
import { motion } from 'framer-motion';
export default function AnimatedMotto({ locale = 'fr' }: { locale?: 'fr' | 'en' }) {
  const words = locale === 'en' ? ['Learn,', 'build,', 'evolve.'] : ['Apprendre,', 'construire,', 'évoluer.'];
  return <div className="animated-motto" aria-label={words.join(' ')}>
    {words.map((word, i) => <motion.span key={word} initial={{ opacity: 0, y: 35, filter: 'blur(9px)' }} whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }} viewport={{ once: true }} transition={{ duration: .8, delay: i * .18, ease: [0.22, 1, 0.36, 1] }}>{word}</motion.span>)}
  </div>;
}
