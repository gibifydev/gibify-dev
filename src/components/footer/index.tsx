
export function Footer() {
  const currentYear = new Date().getFullYear();
  const copyrightDate = 2023 + (currentYear > 2023 ? `-${currentYear}` : '');

  return (
    <footer className="flex items-center justify-center p-4">
      <p><code className="ml-2"> &copy;{currentYear} Gibify</code></p>
    </footer>
  )
}