import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: { extend: { colors: { ink: '#070A12', panel: '#0D1220', line: '#1D2940', electric: '#5B9CFF' }, fontFamily: { sans: ['Arial', 'Helvetica', 'sans-serif'] } } },
  plugins: []
};
export default config;
