
export function Footer() {
  const currentYear = new Date().getFullYear();
  const copyrightDate = 2023 + (currentYear > 2023 ? `-${currentYear}` : '');

  return (
    <footer className="flex items-center justify-center p-4">
      <p> &copy;{currentYear} <code className="ml-2">Gibify</code></p>
    </footer>
  )
}