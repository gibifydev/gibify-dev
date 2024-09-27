export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
      },
    ],
    sitemap: 'https://thegibi.dev/sitemap.xml',
    host: 'https://thegibi.dev',
  };
}