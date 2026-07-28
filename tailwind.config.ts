import type { Config } from 'tailwindcss';
const config: Config = { content: ['./src/**/*.{ts,tsx}'], theme: { extend: { colors: { ink:'#17222c', navy:'#102c3a', mint:'#31c6a0', coral:'#f45c59', sand:'#f7f4ee' }, boxShadow: { soft:'0 16px 50px rgba(20, 46, 57, .09)' } } }, plugins: [] };
export default config;
