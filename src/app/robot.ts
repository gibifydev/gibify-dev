export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
      },
    ],
    sitemap: 'https://gibify.dev/sitemap.xml',
    host: 'https://gibify.dev',
  };
}